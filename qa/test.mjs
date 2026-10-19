// End-to-end QA against the built site served by qa/serve.mjs (http://localhost:4321).
// Usage: node qa/test.mjs  → writes qa/report/test-results.json and prints a summary.
import { chromium } from 'playwright';
import fs from 'node:fs';

const BASE = process.env.BASE || 'http://localhost:4321';
const browser = await chromium.launch({ executablePath: process.env.CHROME || undefined });
const results = [];
const ok = (name, pass, detail = '') => { results.push({ name, pass, detail }); console.log(`${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? ' :: ' + detail : ''}`); };

// 1. Discover pages from the sitemap
const sm = await (await fetch(`${BASE}/sitemap-0.xml`)).text();
const pages = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
pages.push('/thank-you', '/does-not-exist');
ok('sitemap lists pages', pages.length > 40, `${pages.length - 2} URLs`);

const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
await ctx.addInitScript(() => { try { localStorage.setItem('tt_consent', 'denied'); } catch {} });
const page = await ctx.newPage();
const internal = new Set();
const pageIssues = [];
for (const p of pages) {
  const res = await page.goto(BASE + p, { waitUntil: 'domcontentloaded' });
  const expect404 = p === '/does-not-exist';
  const status = res.status();
  if (expect404 ? status !== 404 : status !== 200) pageIssues.push(`${p} status ${status}`);
  const info = await page.evaluate(() => {
    const ld = [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => { try { return JSON.parse(s.textContent)['@type']; } catch { return 'INVALID'; } });
    return {
      h1: document.querySelectorAll('h1').length,
      title: document.title,
      desc: document.querySelector('meta[name=description]')?.content || '',
      canonical: document.querySelector('link[rel=canonical]')?.href || '',
      ld,
      tels: [...document.querySelectorAll('a[href^="tel:"]')].map((a) => a.getAttribute('href')),
      links: [...document.querySelectorAll('a[href^="/"]')].map((a) => a.getAttribute('href')),
      quoteAnchors: [...document.querySelectorAll('a[href="#quote"]')].length,
      hasQuote: !!document.getElementById('quote'),
      text: document.body.innerText,
      reviews: !!document.querySelector('.revcard'),
      imgsNoAlt: [...document.querySelectorAll('img:not([alt])')].length,
    };
  });
  if (expect404) continue;
  if (info.h1 !== 1) pageIssues.push(`${p} has ${info.h1} h1`);
  if (!info.title || info.title.length > 70) pageIssues.push(`${p} title length ${info.title.length}`);
  if (info.desc.length < 70 || info.desc.length > 170) pageIssues.push(`${p} description length ${info.desc.length}`);
  if (!info.canonical) pageIssues.push(`${p} no canonical`);
  if (info.ld.includes('INVALID')) pageIssues.push(`${p} invalid JSON-LD`);
  if (info.tels.some((t) => t !== 'tel:+442080662499')) pageIssues.push(`${p} bad tel ${info.tels.join(',')}`);
  if (info.quoteAnchors && !info.hasQuote) pageIssues.push(`${p} #quote link without target`);
  if (info.reviews) pageIssues.push(`${p} shows review cards (none are real yet)`);
  if (info.imgsNoAlt) pageIssues.push(`${p} images without alt`);
  if (!p.startsWith('/guides/fire-risk-assessment-cost') && /FireQual|IFE Registered|BS 8674/i.test(info.text)) pageIssues.push(`${p} mentions unconfirmed credential`);
  if (/—/.test(info.text.replace(/enquiries@[^\n]*/g, ''))) pageIssues.push(`${p} contains an em dash`);
  info.links.forEach((l) => internal.add(l.split('#')[0]));
  results.push({ name: `page ${p}`, pass: true, detail: `${info.ld.join('+')}` });
}
ok('all pages: status, single H1, title/description, canonical, valid JSON-LD, tel links, no fake reviews, no unconfirmed credentials', pageIssues.length === 0, pageIssues.join(' | '));

// 2. Internal links resolve
const broken = [];
for (const l of internal) {
  if (!l || l.startsWith('/api/')) continue;
  const r = await fetch(BASE + l, { redirect: 'manual' });
  if (r.status !== 200) broken.push(`${l} → ${r.status}`);
}
ok('all internal links resolve', broken.length === 0, broken.length ? broken.join(', ') : `${internal.size} unique links`);

// 3. Schema types on key templates
const schemaOf = async (p) => { await page.goto(BASE + p); return page.evaluate(() => [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => JSON.parse(s.textContent)['@type'])); };
const sHome = await schemaOf('/'); ok('home schema: ProfessionalService + FAQPage', sHome.includes('ProfessionalService') && sHome.includes('FAQPage'), sHome.join(','));
const sSvc = await schemaOf('/services/fire-risk-assessments'); ok('service schema: Service + BreadcrumbList + FAQPage', ['Service', 'BreadcrumbList', 'FAQPage'].every((t) => sSvc.includes(t)), sSvc.join(','));
const sArea = await schemaOf('/areas/kent'); ok('area schema: Service + BreadcrumbList + FAQPage', ['Service', 'BreadcrumbList', 'FAQPage'].every((t) => sArea.includes(t)), sArea.join(','));
const sGuide = await schemaOf('/guides/fire-risk-assessment-cost'); ok('guide schema: Article + BreadcrumbList + FAQPage', ['Article', 'BreadcrumbList', 'FAQPage'].every((t) => sGuide.includes(t)), sGuide.join(','));

// 4. Phone click → dataLayer phone_click
await page.goto(BASE + '/services/fire-door-inspections');
await page.evaluate(() => document.querySelectorAll('a[href^="tel:"]').forEach((a) => a.addEventListener('click', (e) => e.preventDefault())));
const telCount = await page.locator('a[href^="tel:"]').count();
await page.locator('header a.tel').click();
const dl1 = await page.evaluate(() => window.dataLayer.filter((e) => e.event === 'phone_click'));
ok('tel: click pushes phone_click', dl1.length === 1 && dl1[0].link_location === 'header', JSON.stringify(dl1[0]) + ` (${telCount} tel links on page)`);

// 5. Accordion toggles
const first = page.locator('.faqs details').first();
const second = page.locator('.faqs details').nth(1);
const before = await second.evaluate((d) => d.open);
await second.locator('summary').click();
const after = await second.evaluate((d) => d.open);
await first.locator('summary').click();
const firstClosed = !(await first.evaluate((d) => d.open));
ok('FAQ accordion opens/closes', before === false && after === true && firstClosed);

// 6. Service pre-selected per page
const pre = {};
for (const [p, v] of [['/services/fire-risk-assessments', 'Fire Risk Assessment'], ['/services/fire-door-inspections', 'Fire Door Inspection'], ['/services/fire-alarm-servicing-installation', 'Fire Alarm Servicing / Installation'], ['/services/emergency-lighting-servicing-installation', 'Emergency Lighting Servicing / Installation'], ['/services/aov-smoke-control-servicing', 'AOV / Smoke Control Servicing'], ['/sectors/landlords-hmos', 'Fire Risk Assessment']]) {
  await page.goto(BASE + p);
  pre[p] = await page.locator('#quote select[name=service]').inputValue();
  if (pre[p] !== v) pre[p] += ` (expected ${v})`;
}
ok('quote form Service field pre-selected per page', Object.entries(pre).every(([p, v]) => !v.includes('expected')), JSON.stringify(pre));
await page.goto(BASE + '/sectors/landlords-hmos');
const pt = await page.locator('#quote select[name=property_type]').inputValue();
ok('sector page pre-selects property type', pt === 'HMO / Residential', pt);

// 7. Form validation + successful submit → generate_lead → /thank-you
await page.goto(BASE + '/services/fire-risk-assessments');
await page.locator('#quote button[type=submit]').click();
const errs = await page.locator('#quote .field.err').count();
ok('empty submit shows inline errors', errs === 5, `${errs} fields flagged`);
await page.fill('#quote [name=name]', 'QA Tester');
await page.fill('#quote [name=phone]', '020 8066 2499');
await page.fill('#quote [name=email]', 'qa@example.co.uk');
await page.fill('#quote [name=postcode]', 'NW2 7AX');
await page.selectOption('#quote [name=property_type]', 'Block of Flats');
await page.fill('#quote [name=details]', 'Automated QA submission');
await page.evaluate(() => { window.__nav = []; });
const [nav] = await Promise.all([page.waitForURL('**/thank-you', { timeout: 5000 }).then(() => true).catch(() => false), page.locator('#quote button[type=submit]').click()]);
ok('valid submit redirects to /thank-you', nav, page.url());
// dataLayer is lost on navigation; check via a fresh run with navigation blocked
await page.goto(BASE + '/services/fire-risk-assessments');
await page.fill('#quote [name=name]', 'QA Tester'); await page.fill('#quote [name=phone]', '07700 900123'); await page.fill('#quote [name=email]', 'qa@example.co.uk'); await page.fill('#quote [name=postcode]', 'SW1A 1AA'); await page.selectOption('#quote [name=property_type]', 'Office / Workplace');
await page.locator('#quote button[type=submit]').click();
await page.waitForFunction(() => window.dataLayer.some((e) => e.event === 'generate_lead'), null, { timeout: 4000 }).catch(() => {});
const lead = await page.evaluate(() => window.dataLayer.find((e) => e.event === 'generate_lead'));
ok('submit pushes generate_lead with service & property type', !!lead && lead.service === 'Fire Risk Assessment' && lead.property_type === 'Office / Workplace', JSON.stringify(lead && { event: lead.event, service: lead.service, property_type: lead.property_type, form_id: lead.form_id }));
const formStart = await page.evaluate(() => window.dataLayer.some((e) => e.event === 'form_start'));
ok('form_start fires on first input', formStart);

// 8. No-JS form posts → 303 → thank-you
const nojs = await browser.newContext({ javaScriptEnabled: false });
const pj = await nojs.newPage();
await pj.goto(BASE + '/quote');
await pj.fill('[name=name]', 'No JS'); await pj.fill('[name=phone]', '02080662499'); await pj.fill('[name=email]', 'nojs@example.co.uk'); await pj.fill('[name=postcode]', 'NW2 7AX'); await pj.selectOption('[name=property_type]', 'Other');
await Promise.all([pj.waitForURL('**/thank-you**'), pj.click('button[type=submit]')]);
ok('form works without JavaScript (POST → thank-you)', pj.url().includes('/thank-you'), pj.url());
await nojs.close();

// 9. Mobile: drawer, sticky bar, sticky header, CTA anchor
const m = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
await m.addInitScript(() => { try { localStorage.setItem('tt_consent', 'denied'); } catch {} });
const mp = await m.newPage();
await mp.goto(BASE + '/');
ok('mobile: phone icon button in header', await mp.locator('.mobtools a[href^="tel:"]').isVisible());
await mp.locator('#navtoggle').tap();
ok('mobile: hamburger opens drawer', await mp.locator('#drawer').isVisible());
await mp.locator('#navtoggle').tap();
ok('mobile: hamburger closes drawer', !(await mp.locator('#drawer').isVisible()));
ok('mobile: bottom bar visible with Call + Get a Quote', (await mp.locator('#mbar').isVisible()) && (await mp.locator('#mbar a[href^="tel:"]').count()) === 1 && (await mp.locator('#mbar a[href="/quote"]').count()) === 1);
await mp.evaluate(() => window.scrollTo(0, 1800)); await mp.waitForTimeout(300);
const hdrTop = await mp.locator('#hdr').evaluate((e) => e.getBoundingClientRect().top);
ok('mobile: header stays sticky on scroll', hdrTop === 0, `top=${hdrTop}`);
const overflow = await mp.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
ok('mobile: no horizontal overflow on home', !overflow);
await mp.goto(BASE + '/services/aov-smoke-control-servicing');
await mp.locator('.hero a[href="#quote"]').tap(); await mp.waitForTimeout(600);
const formInView = await mp.locator('#quote .formcard').evaluate((e) => { const r = e.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; });
ok('hero CTA scrolls to quote form', formInView);
// desktop sticky header + phone/quote always visible
await page.goto(BASE + '/guides/fire-safety-england-regulations-2022');
await page.evaluate(() => window.scrollTo(0, 3000)); await page.waitForTimeout(300);
ok('desktop: sticky header keeps phone + Get a Quote visible after scroll', (await page.locator('header a.tel').isVisible()) && (await page.locator('.hdr-right > a.btn').isVisible()) && (await page.locator('#hdr').evaluate((e) => e.getBoundingClientRect().top)) === 0);
// desktop dropdown
await page.goto(BASE + '/');
await page.hover('.dd >> nth=0'); await page.waitForTimeout(250);
ok('desktop: Services dropdown opens on hover', await page.locator('.dd >> nth=0 >> .ddmenu').isVisible());
// mobile overflow across all pages
const over = [];
for (const p of pages.filter((x) => x !== '/does-not-exist')) { await mp.goto(BASE + p, { waitUntil: 'domcontentloaded' }); if (await mp.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)) over.push(p); }
ok('mobile: no horizontal overflow on any page', over.length === 0, over.join(', '));
await m.close();

await browser.close();
fs.mkdirSync('qa/report', { recursive: true });
fs.writeFileSync('qa/report/test-results.json', JSON.stringify(results, null, 2));
const fails = results.filter((r) => !r.pass);
console.log(`\n${results.filter((r) => r.pass && !r.name.startsWith('page ')).length} checks passed, ${fails.length} failed`);
process.exit(fails.length ? 1 : 0);
