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
| Brand, phone, email, hours, credentials, reviews, GTM | `src/config/site.ts` |
| Hero images (line illustrations until real photos arrive) | `src/config/images.ts`, `src/components/PlanArt.astro` |
| Service, sector, area and guide content | `src/data/{services,sectors,sectors.extra,areas,guides}.ts` |
| Design tokens and components CSS | `src/styles/global.css` |
| Quote form handler (email via Resend) | `src/pages/api/quote.ts` |
| Tracking (dataLayer events) | `src/scripts/site.ts` |
| Schema (LocalBusiness/Service/FAQ/Breadcrumb/Article) | `src/lib/schema.ts` |

## Trust rules built into the code
- `site.reviews` is empty, so the reviews section does not render.
- Trust points are only those Philip confirmed: assessors are IFSM members; competence follows BS 8674:2025 (individual assessor standard, not a company accreditation); PI £500k per claim; PL £2m. No individual assessors are named.
- Certify Services Ltd appears only in the footer small print and the legal pages (trading disclosure). It is not in the schema or the body copy.
- No unlicensed photos. Real photos go into `src/config/images.ts`.
- `reportTurnaround` stays `null` until Philip confirms 3–5 working days is consistently achievable.
- Logo: wordmark + fire mark A (`brand.fireMarkApproved = true`); the favicon, touch icon and share image use the flame. Brand spelling is T&T.

## Tracking (GTM-ready)
The GTM container `GTM-K5HWQDK9` (Certify Services Ltd) is the default; `PUBLIC_GTM_ID` overrides it. Events pushed to `dataLayer`:
- `generate_lead`: successful quote submit. Fields: `form_id`, `service`, `property_type`, `page_path`, `lead_id`, and `user_data.email` / `user_data.phone_number` for enhanced conversions. No-JS submits fire it on `/thank-you?nojs=1`.
- `phone_click`: any `tel:` link. Fields: `phone_number`, `link_location` (header, hero, mobile-bar, cta-band…), `page_path`.
- `form_start` and `cta_click` (analysis only), plus `consent_update`.

Google Consent Mode v2 defaults to *denied* until the visitor accepts the cookie banner.
In GTM: create GA4 event tags for `generate_lead` and `phone_click`, and Google Ads conversion tags fired by the same custom events.

## Environment variables
See `.env.example`. Previews are **always noindex** unless `ALLOW_INDEXING=true`, which should be set on the production deployment only, after launch sign-off.

## Deploy (preview only)
Import the repo into Vercel and set the production branch to an unused name, so pushes create previews only. Do not attach a custom domain until Philip signs off. See `QA-REPORT.md` §5.

## Open questions
See `QUESTIONS-FOR-PHILIP.md`.
