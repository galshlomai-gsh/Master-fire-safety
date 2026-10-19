// Usage: node qa/shoot.mjs outDir path1 path2 ...   (env W=1440|390)
import { chromium } from 'playwright';
import fs from 'node:fs';
const [out, ...paths] = process.argv.slice(2);
const widths = (process.env.W || '1440,390').split(',').map(Number);
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME || undefined });
for (const w of widths) {
  const ctx = await browser.newContext({ viewport: { width: w, height: w > 700 ? 900 : 844 }, deviceScaleFactor: 1, isMobile: w <= 700, hasTouch: w <= 700 });
  await ctx.addInitScript(() => { try { localStorage.setItem('tt_consent', 'denied'); } catch {} });
  const page = await ctx.newPage();
  for (const p of paths) {
    await page.goto('http://localhost:4321' + p, { waitUntil: 'networkidle' });
    // reveal everything for full-page captures
    await page.evaluate(async () => {
      document.querySelectorAll('.reveal').forEach((e) => e.classList.add('in'));
      document.querySelectorAll('img[loading=lazy]').forEach((i) => (i.loading = 'eager'));
      for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); }
      window.scrollTo(0, 0);
    });
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(250);
    const base = (p === '/' ? 'home' : p.replace(/^\//, '').replace(/\//g, '__'));
    const name = `${base}-${w}.png`;
    if (w <= 700 && process.env.VIEWPORT) await page.screenshot({ path: `${out}/${base}-${w}-viewport.png` });
    const hide = await page.addStyleTag({ content: '.mbar,.consent{display:none!important}' });
    await page.screenshot({ path: `${out}/${name}`, fullPage: true });
    await hide.evaluate((n) => n.remove());
    console.log('shot', name);
  }
  await ctx.close();
}
await browser.close();
