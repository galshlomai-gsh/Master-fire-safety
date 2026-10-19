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
| Photos (with "needs real photo" flags) | `src/config/images.ts`, `src/assets/img/` |
| Service, sector, area and guide content | `src/data/{services,sectors,sectors.extra,areas,guides}.ts` |
| Design tokens and components CSS | `src/styles/global.css` |
| Quote form handler (email via Resend) | `src/pages/api/quote.ts` |
| Tracking (dataLayer events) | `src/scripts/site.ts` |
| Schema (LocalBusiness/Service/FAQ/Breadcrumb/Article) | `src/lib/schema.ts` |

## Trust rules built into the code
- `site.reviews` is empty, so the reviews section does not render.
- Only credentials with `status: 'confirmed'` render. FireQual, IFE and BS 8674 are `pending`.
- `site.email = null` renders as "address to confirm".
- `brand.fireMarkApproved = false` keeps the current wordmark and a neutral favicon.

## Tracking (GTM-ready)
Set `PUBLIC_GTM_ID` (Certify Services Ltd container). Events pushed to `dataLayer`:
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
