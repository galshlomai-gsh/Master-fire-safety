# T&T Fire Safety: lead-generation website

A static Astro site (SSG) built from the approved design (`design/TT-Fire-Safety-design.pdf`, spec in `design-spec.md`).
Its only conversions are **calls** and **quote form submissions**.

## Run it
```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # outputs .vercel/output (static pages + /api/quote function)
npm run qa:serve     # serve the build locally (in another terminal: npm run qa:test)
```

## Where things live
| What | File |
|---|---|
| Brand, phone, email, hours, credentials, GTM | `src/config/site.ts` |
| Reviews (real Google reviews of Certify Services Ltd) | `src/data/reviews.ts` |
| Hero photos (one per slot, `src/assets/photos/{slot}.jpg`; line illustration fallback) | `src/config/images.ts`, `scripts/fetch-photos.mjs` |
| Icons (Lucide, ISC) and the per-heading icon rules | `src/lib/icons.ts`, `src/components/FIcon.astro` |
| Service, sector, area and guide content | `src/data/{services,sectors,sectors.extra,areas,guides}.ts` |
| Design tokens and components CSS | `src/styles/global.css` |
| Quote form handler (Resend email + Supabase `tandt_leads` table) | `src/pages/api/quote.ts`, `supabase/migrations/` |
| Tracking (dataLayer events) | `src/scripts/site.ts` |
| Schema (LocalBusiness/Service/FAQ/Breadcrumb/Article) | `src/lib/schema.ts` |

## Trust rules built into the code
- Reviews are real Google reviews of Certify Services Ltd, copied word for word and always labelled as Certify's (Philip approved this, Oct 2026). No aggregateRating schema, since they are not reviews of T&T.
- Trust points are only those Philip confirmed: assessors are IFSM members; competence follows BS 8674:2025 (individual assessor standard, not a company accreditation); PI £500k per claim; PL £2m. No individual assessors are named.
- Certify Services Ltd appears only in the footer small print and the legal pages (trading disclosure). It is not in the schema or the body copy.
- No unlicensed photos. The current photos are AI-generated, people-free UK scenes (Higgsfield, GPT Image 2.5) standing in until Philip's own site photos arrive: drop a file named after the slot into `src/assets/photos/` to replace one.
- `reportTurnaround` stays `null` until Philip confirms 3–5 working days is consistently achievable.
- Logo: wordmark + fire mark A (`brand.fireMarkApproved = true`); the favicon, touch icon and share image use the flame. Brand spelling is T&T.

## Tracking (GTM-ready)
The GTM container `GTM-K5HWQDK9` (Certify Services Ltd) is the default; `PUBLIC_GTM_ID` overrides it. Events pushed to `dataLayer`:
- `generate_lead`: successful quote submit. Fields: `form_id`, `service`, `property_type`, `page_path`, `lead_id`, and `user_data.email` / `user_data.phone_number` for enhanced conversions. No-JS submits fire it on `/thank-you?nojs=1`.
- `phone_click`: any `tel:` link. Fields: `phone_number`, `link_location` (header, hero, mobile-bar, cta-band…), `page_path`.
- `form_start` and `cta_click` (analysis only), plus `consent_update`.

Google Consent Mode v2 defaults to *denied* until the visitor accepts the cookie banner.
In GTM: create GA4 event tags for `generate_lead` and `phone_click`, and Google Ads conversion tags fired by the same custom events.

## Leads
Each quote request is emailed via Resend from `leads@tandtfiresafety.co.uk` and saved to the `tandt_leads` table in the **Certi Sprint** Supabase project (same client, separate table from Certi Sprint's `enquiries`). If the email fails, the lead is still saved with `email_sent = false`. The table has RLS on with no policies, so only the server-side secret key can read or write it. `status` and `quote_value` columns, plus captured `gclid`/`gbraid`/`wbraid` and UTMs, support Google Ads offline conversion imports.

## Environment variables
See `.env.example`. The production deployment (www.tandtfiresafety.co.uk) is indexable by default; previews are **always noindex**. Set `ALLOW_INDEXING=false` in Production to switch indexing off. The legal pages stay noindex until Philip approves them.

## Deploy (preview only)
Import the repo into Vercel and set the production branch to an unused name, so pushes create previews only. Do not attach a custom domain until Philip signs off. See `QA-REPORT.md` §5.

## Open questions
See `QUESTIONS-FOR-PHILIP.md`.
