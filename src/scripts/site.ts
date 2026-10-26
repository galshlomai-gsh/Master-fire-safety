/* Site behaviour: sticky header state, mobile drawer, mobile bar, reveal-on-scroll,
   tel: click tracking and progressive quote-form submission. Keep it small. */

type DL = Record<string, unknown>;
const w = window as unknown as { dataLayer: DL[] };
w.dataLayer = w.dataLayer || [];
const push = (o: DL) => w.dataLayer.push(o);

// Header shadow + compact on scroll
const hdr = document.getElementById('hdr');
const onScroll = () => hdr?.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile drawer
const toggle = document.getElementById('navtoggle');
const drawer = document.getElementById('drawer');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  if (drawer) drawer.hidden = open;
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && drawer && !drawer.hidden) {
    drawer.hidden = true;
    toggle?.setAttribute('aria-expanded', 'false');
    (toggle as HTMLElement | null)?.focus();
  }
});
drawer?.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('a')) {
    drawer.hidden = true;
    toggle?.setAttribute('aria-expanded', 'false');
  }
});

// Phone click tracking (all tel: links, including ones added later)
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="tel:"]');
  if (!a) return;
  push({
    event: 'phone_click',
    phone_number: a.getAttribute('href')!.slice(4),
    link_location: a.dataset.loc || 'inline',
    page_path: location.pathname,
  });
});

// CTA click tracking (non-conversion, useful for analysis)
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[data-cta]');
  if (a) push({ event: 'cta_click', cta_location: a.dataset.cta, page_path: location.pathname });
});

// Reveal on scroll
const els = document.querySelectorAll<HTMLElement>('.reveal');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  els.forEach((el) => {
    // anything already in view on load shows immediately (no flash on first paint)
    if (el.getBoundingClientRect().top < innerHeight) el.classList.add('in');
    else io.observe(el);
  });
} else {
  els.forEach((el) => el.classList.add('in'));
}

// Mobile bar: hide while a quote form or the footer is on screen
const mbar = document.getElementById('mbar');
if (mbar && 'IntersectionObserver' in window) {
  const visible = new Set<Element>();
  const mo = new IntersectionObserver((entries) => {
    entries.forEach((en) => (en.isIntersecting ? visible.add(en.target) : visible.delete(en.target)));
    mbar.classList.toggle('hide', visible.size > 0);
  });
  document.querySelectorAll('.quote-form, .ftr-bot').forEach((el) => mo.observe(el));
}

// Quote form
const POSTCODE = /^[A-Za-z]{1,2}[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}$/;
function validate(form: HTMLFormElement): boolean {
  let firstBad: HTMLElement | null = null;
  form.querySelectorAll<HTMLInputElement | HTMLSelectElement>('[required]').forEach((el) => {
    let ok = el.checkValidity() && el.value.trim() !== '';
    if (el.name === 'postcode') ok = POSTCODE.test(el.value.trim());
    if (el.name === 'phone') ok = el.value.replace(/\D/g, '').length >= 10;
    const field = el.closest('.field');
    field?.classList.toggle('err', !ok);
    el.setAttribute('aria-invalid', String(!ok));
    if (!ok && !firstBad) firstBad = el;
  });
  if (firstBad) (firstBad as HTMLElement).focus();
  return !firstBad;
}

// Ad attribution (gclid/UTMs) for Google Ads offline conversions. Read from the URL on every page;
// carried across pages in sessionStorage only once the visitor has accepted cookies.
const ATTR_KEY = 'tt_attribution';
const ATTR_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid'];
function attribution(): Record<string, string> {
  const fromUrl: Record<string, string> = {};
  const params = new URLSearchParams(location.search);
  for (const k of ATTR_PARAMS) { const v = params.get(k); if (v) fromUrl[k] = v.slice(0, 200); }
  let stored: Record<string, string> = {};
  try { stored = JSON.parse(sessionStorage.getItem(ATTR_KEY) || '{}'); } catch { stored = {}; }
  const fresh = Object.keys(fromUrl).length > 0;
  const attr = fresh || !stored.landing_page
    ? { ...fromUrl, landing_page: location.pathname, referrer: document.referrer.slice(0, 300) }
    : stored;
  let consent = false;
  try { consent = localStorage.getItem('tt_consent') === 'granted'; } catch { /* storage blocked */ }
  if (consent && (fresh || !stored.landing_page)) { try { sessionStorage.setItem(ATTR_KEY, JSON.stringify(attr)); } catch { /* ignore */ } }
  return attr;
}
const attr = attribution();
document.querySelectorAll<HTMLInputElement>('input[data-attr]').forEach((el) => { el.value = attr[el.dataset.attr!] || ''; });

document.querySelectorAll<HTMLFormElement>('form[data-quote-form]').forEach((form) => {
  let started = false;
  form.addEventListener('input', (e) => {
    if (!started) { started = true; push({ event: 'form_start', form_id: 'quote', page_path: location.pathname }); }
    const el = e.target as HTMLInputElement;
    const field = el.closest('.field');
    if (field?.classList.contains('err')) {
      const ok = el.name === 'postcode' ? POSTCODE.test(el.value.trim()) : el.checkValidity() && el.value.trim() !== '';
      if (ok) { field.classList.remove('err'); el.removeAttribute('aria-invalid'); }
    }
  });
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validate(form)) return;
    const btn = form.querySelector<HTMLButtonElement>('button[type=submit]')!;
    const err = form.querySelector<HTMLElement>('.formerror')!;
    const label = btn.textContent;
    btn.disabled = true; btn.textContent = 'Sending…'; err.hidden = true;
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || res.statusText);
      const lead = {
        event: 'generate_lead',
        form_id: 'quote',
        service: data.get('service'),
        property_type: data.get('property_type'),
        page_path: location.pathname,
        lead_id: json.id,
        // hashed client-side? No: enhanced conversions are configured in GTM from these fields.
        user_data: { email: data.get('email'), phone_number: data.get('phone') },
      };
      push(lead);
      // Give GTM a moment to dispatch before navigating
      setTimeout(() => { location.href = '/thank-you'; }, 350);
    } catch {
      btn.disabled = false; btn.textContent = label; err.hidden = false;
    }
  });
});
