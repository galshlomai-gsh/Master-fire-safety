/**
 * Quote form handler (Vercel serverless function). The rest of the site is static.
 * Delivery: Resend HTTP API → QUOTE_TO_EMAIL (Philip). Configure in Vercel env vars:
 *   RESEND_API_KEY, QUOTE_TO_EMAIL, QUOTE_FROM_EMAIL (a verified sender domain)
 * Without them, previews accept and log the lead (delivered:false) so the flow can be tested;
 * production refuses (503) so leads are never silently lost.
 */
import type { APIRoute } from 'astro';

export const prerender = false;

const REQUIRED = ['name', 'phone', 'email', 'postcode', 'property_type', 'service'] as const;
const POSTCODE = /^[A-Za-z]{1,2}[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export const POST: APIRoute = async ({ request }) => {
  const wantsJson = (request.headers.get('accept') || '').includes('application/json');
  const reply = (status: number, body: Record<string, unknown>) =>
    wantsJson
      ? new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } })
      : new Response(null, { status: 303, headers: { location: body.ok ? '/thank-you?nojs=1' : '/quote?error=1' } });

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return reply(400, { ok: false, error: 'bad_request' });
  }
  const get = (k: string) => String(form.get(k) ?? '').trim().slice(0, 2000);

  // Honeypot: pretend success, drop silently.
  if (get('company_website')) return reply(200, { ok: true, id: 'hp' });

  const lead = Object.fromEntries(
    ['name', 'phone', 'email', 'postcode', 'property_type', 'service', 'details', 'page', 'source'].map((k) => [k, get(k)]),
  ) as Record<string, string>;

  const missing = REQUIRED.filter((k) => !lead[k]);
  if (missing.length || !EMAIL.test(lead.email) || !POSTCODE.test(lead.postcode) || lead.phone.replace(/\D/g, '').length < 10) {
    return reply(422, { ok: false, error: 'validation', missing });
  }

  const id = `TT-${Date.now().toString(36).toUpperCase()}`;
  const key = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  const from = process.env.QUOTE_FROM_EMAIL || 'T&T Fire Safety <quotes@resend.dev>';
  const isProd = process.env.VERCEL_ENV === 'production';

  if (!key || !to) {
    console.warn('[quote] delivery not configured; lead not emailed', { id, service: lead.service, page: lead.page });
    if (isProd) return reply(503, { ok: false, error: 'not_configured' });
    return reply(200, { ok: true, id, delivered: false });
  }

  const rows = [
    ['Name', lead.name], ['Phone', lead.phone], ['Email', lead.email], ['Postcode', lead.postcode.toUpperCase()],
    ['Property type', lead.property_type], ['Service', lead.service], ['Details', lead.details || '(none)'],
    ['Page', lead.page], ['Reference', id],
  ];
  const html = `<h2>New quote request</h2><table cellpadding="6">${rows
    .map(([k, v]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(v).replace(/\n/g, '<br>')}</td></tr>`)
    .join('')}</table>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: to.split(',').map((s) => s.trim()),
      reply_to: lead.email,
      subject: `Quote request: ${lead.service} – ${lead.postcode.toUpperCase()} (${lead.name})`,
      html,
      text,
    }),
  }).catch(() => null);

  if (!res || !res.ok) {
    console.error('[quote] delivery failed', { id, status: res?.status });
    return reply(502, { ok: false, error: 'delivery_failed' });
  }
  return reply(200, { ok: true, id, delivered: true });
};

export const GET: APIRoute = () => new Response('Method not allowed', { status: 405, headers: { allow: 'POST' } });
