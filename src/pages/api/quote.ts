/**
 * Quote form handler (Vercel serverless function). The rest of the site is static.
 *
 * Every lead is (1) emailed via Resend and (2) saved to Supabase, in the `tandt_leads` table of the
 * Certi Sprint project (same client, separate table; schema in supabase/migrations). If the email
 * fails the lead is still saved, with email_sent = false. Vercel env vars (server-side only):
 *   RESEND_API_KEY                          Resend API key
 *   LEAD_TO_EMAIL                           where leads go (comma-separated for several)
 *   LEAD_FROM_EMAIL                         optional; default "T&T Fire Safety <leads@tandtfiresafety.co.uk>"
 *                                           (the domain must be verified in Resend)
 *   SUPABASE_SECRET_KEY                     Certi Sprint secret key (sb_secret_...); never expose it
 *   SUPABASE_URL                            optional; defaults to the Certi Sprint project
 * Without any delivery configured, previews accept and log the lead (delivered:false) so the flow
 * can be tested; production refuses (503) so leads are never silently lost.
 */
import type { APIRoute } from 'astro';

export const prerender = false;

const REQUIRED = ['name', 'phone', 'email', 'postcode', 'property_type', 'service'] as const;
const ATTRIBUTION = ['landing_page', 'referrer', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid'] as const;
const POSTCODE = /^[A-Za-z]{1,2}[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DEFAULT_FROM = 'T&T Fire Safety <leads@tandtfiresafety.co.uk>';
const DEFAULT_SUPABASE_URL = 'https://etdmtdjwcsyriiknbawa.supabase.co';
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

type Lead = Record<string, string>;

async function sendEmail(lead: Lead, id: string): Promise<boolean | null> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL || process.env.QUOTE_TO_EMAIL;
  if (!key || !to) return null;
  const from = process.env.LEAD_FROM_EMAIL || process.env.QUOTE_FROM_EMAIL || DEFAULT_FROM;

  const rows = [
    ['Name', lead.name], ['Phone', lead.phone], ['Email', lead.email], ['Postcode', lead.postcode],
    ['Property type', lead.property_type], ['Service', lead.service], ['Details', lead.details || '(none)'],
    ['Page', lead.page], ['Reference', id],
    ['Landing page', lead.landing_page], ['Referrer', lead.referrer],
    ['UTM source / medium', [lead.utm_source, lead.utm_medium].filter(Boolean).join(' / ')],
    ['UTM campaign', lead.utm_campaign], ['UTM term', lead.utm_term],
    ['Google click ID', lead.gclid || lead.gbraid || lead.wbraid],
  ].filter(([, v]) => v);
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;color:#1F2A37"><h2 style="margin:0 0 12px">New quote request: ${esc(lead.service)}</h2><table cellpadding="6" style="border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="font-weight:bold;vertical-align:top;border-bottom:1px solid #ECE6E1">${esc(k)}</td><td style="border-bottom:1px solid #ECE6E1">${esc(v).replace(/\n/g, '<br>')}</td></tr>`)
    .join('')}</table><p style="margin-top:16px">Reply to this email to respond to ${esc(lead.name)} directly.</p></div>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: to.split(',').map((s) => s.trim()),
      reply_to: lead.email,
      subject: `Quote request: ${lead.service} – ${lead.postcode} (${lead.name})`,
      html,
      text,
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return true;
}

async function saveToSupabase(lead: Lead, id: string, emailSent: boolean): Promise<boolean | null> {
  // New projects issue an sb_secret_ key; older ones a service_role JWT. Either works.
  const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) return null;
  const url = (process.env.SUPABASE_URL || DEFAULT_SUPABASE_URL).replace(/\/$/, '');
  const row: Record<string, string | boolean | null> = {
    reference: id,
    name: lead.name, phone: lead.phone, email: lead.email, postcode: lead.postcode,
    property_type: lead.property_type, service: lead.service, details: lead.details || null,
    page_path: lead.page || null, form_source: lead.source || null,
    email_sent: emailSent,
  };
  for (const k of ATTRIBUTION) row[k] = lead[k] || null;
  const headers: Record<string, string> = { apikey: key, 'Content-Type': 'application/json', Prefer: 'return=minimal' };
  // Only a legacy JWT key may also go in Authorization; an sb_ key there is rejected as "Invalid JWT".
  if (key.startsWith('eyJ')) headers.Authorization = `Bearer ${key}`;
  const res = await fetch(`${url}/rest/v1/tandt_leads`, { method: 'POST', headers, body: JSON.stringify(row) });
  if (!res.ok) throw new Error(`Supabase ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return true;
}

export const POST: APIRoute = async ({ request }) => {
  const wantsJson = (request.headers.get('accept') || '').includes('application/json');
  const reply = (status: number, body: Record<string, unknown>) =>
    wantsJson
      ? new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } })
      : new Response(null, { status: 303, headers: { location: body.ok ? '/thank-you?nojs=1' : '/quote?error=1' } });

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return reply(400, { ok: false, error: 'bad_request' });
  }
  const get = (k: string, max = 2000) => String(form.get(k) ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max);

  // Honeypot: pretend success, drop silently.
  if (get('company_website')) return reply(200, { ok: true, id: 'hp' });

  const lead: Lead = {
    name: get('name', 100), phone: get('phone', 30), email: get('email', 150), postcode: get('postcode', 10),
    property_type: get('property_type', 60), service: get('service', 80), details: get('details', 2000),
    page: get('page', 200), source: get('source', 80),
  };
  for (const k of ATTRIBUTION) lead[k] = get(k, k === 'referrer' ? 300 : 200);

  const missing = REQUIRED.filter((k) => !lead[k]);
  if (missing.length || !EMAIL.test(lead.email) || !POSTCODE.test(lead.postcode) || lead.phone.replace(/\D/g, '').length < 10) {
    return reply(422, { ok: false, error: 'validation', missing });
  }
  // Normalise to the standard UK format: outward code, space, 3-character inward code
  lead.postcode = lead.postcode.toUpperCase().replace(/\s+/g, '').replace(/^(.+)(\d[A-Z]{2})$/, '$1 $2');

  const id = `TT-${Date.now().toString(36).toUpperCase()}`;

  // Email first, then save (recording whether the email went out).
  const email = await sendEmail(lead, id).then((v) => ({ ok: v, err: null as unknown }), (err) => ({ ok: false as boolean | null, err }));
  const save = await saveToSupabase(lead, id, email.ok === true).then((v) => ({ ok: v, err: null as unknown }), (err) => ({ ok: false as boolean | null, err }));
  if (email.err) console.error('[quote] email failed', { id, error: String(email.err) });
  if (save.err) console.error('[quote] database save failed', { id, error: String(save.err) });

  if (email.ok === null && save.ok === null) {
    console.warn('[quote] no delivery configured; lead not stored', { id, service: lead.service, page: lead.page });
    if (process.env.VERCEL_ENV === 'production') return reply(503, { ok: false, error: 'not_configured' });
    return reply(200, { ok: true, id, delivered: false });
  }
  if (email.ok !== true && save.ok !== true) return reply(502, { ok: false, error: 'delivery_failed' });
  return reply(200, { ok: true, id, delivered: true, emailed: email.ok === true, saved: save.ok === true });
};

export const GET: APIRoute = () => new Response('Method not allowed', { status: 405, headers: { allow: 'POST' } });
