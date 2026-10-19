# QA report: T&T Fire Safety website

Build: Astro 7, static output plus one serverless function (`/api/quote`). Branch: `claude/tt-fire-safety-website-123ei3`.
Run date: 19 Oct 2026.

## 1. Side-by-side comparisons (design PDF vs build)

Each image puts the PDF page (left) next to the built page at 1440px (right):

| Page | File |
|---|---|
| Homepage (PDF p2) | `qa/report/compare/home.jpg` |
| Fire Risk Assessments (p3) | `qa/report/compare/services__fire-risk-assessments.jpg` |
| Fire Door Inspections (p4) | `qa/report/compare/services__fire-door-inspections.jpg` |
| Fire Alarm Servicing & Installation (p5) | `qa/report/compare/services__fire-alarm-servicing-installation.jpg` |
| Emergency Lighting (p6) | `qa/report/compare/services__emergency-lighting-servicing-installation.jpg` |
| AOV & Smoke Control (p7) | `qa/report/compare/services__aov-smoke-control-servicing.jpg` |
| Blocks of Flats (p8) | `qa/report/compare/sectors__blocks-of-flats.jpg` |
| Mobile 390px (p10) | `qa/report/compare/mobile.jpg` |

Full-page screenshots of all 44 pages at 1440 and 390 are in `qa/report/screens/` (regenerate with `npm run qa:serve` and then `node qa/shoot.mjs qa/report/screens <paths…>`).

## 2. Every deviation from the design, and why

### Trust rules (hard rule: no fakes)
1. **Trust strip, "Qualified fire risk assessors".** The PDF text reads "Intermediate and Advanced-level competence aligned with BS 8674:2025". It now uses the neutral wording from Philip's later artifact: "Recognised fire risk assessment qualifications, with competency appropriate to the type and complexity of the premises." *Why:* BS 8674 alignment is unconfirmed.
2. **FRA page credentials band.** "FireQual Level 5…" and "IFE Registered…" are removed, and so is the BS 8674 sentence. The band now lists only the confirmed **FPA Level 3 Fire Risk Assessment (Philip Roberts)**. The unconfirmed credentials are kept as `pending` slots in `src/config/site.ts`, and nothing pending is ever rendered.
3. **"What our customers say".** The component is built (`src/components/Reviews.astro`) but **hidden**, because `site.reviews` is empty. Adding real reviews makes it appear automatically, with no aggregate rating in the schema until then.
4. **Hero photos.**
   - FRA and Fire Alarm: the design photo shows a **T&T-branded hi-vis vest**. It has been cropped to the alarm panel, clipboard and extinguishers, so no branding is visible. It still looks AI-generated, so it is flagged.
   - Blocks of Flats: the design photo carries a **Dreamstime watermark** (an unlicensed comp), so it has been replaced by a labelled placeholder ("Photo needed…").
   - Corridor, fire door and smoke detector are used as designed, but their licences are unknown, so they are flagged.
   - All images live in `src/config/images.ts`, each with `needsRealPhoto` and a note.
5. **Email** shows "enquiries@ (address to confirm)", driven by `site.email = null`. **Company details** show "Company details to confirm", as in the design.
6. **Fire mark A** is not used anywhere. The favicon is a neutral red "T&T" tile. Setting `brand.fireMarkApproved = true` swaps mark A into the logo.

### Agreed upgrades (on top of the design)
7. **Sticky header**: shrinks from 74px to 64px on scroll, with the phone `tel:` link and "Get a Quote" always visible. Below 1080px it becomes the mobile phone icon and hamburger.
8. **Sticky mobile bottom bar** with **Call** and **Get a Quote**. It hides while a quote form or the footer is on screen, so it never covers the form.
9. **CTA bands after every 2–3 sections**, using the design artifact's own "conversion pattern 2" red band, each with a quote button and a call button. The homepage ends with a light-variant band, because a dark band merged into the dark footer.
10. **Hero reassurance line** under every hero CTA: "No obligation. Prefer to talk? Call 020 8066 2499".
11. **Quote section, left column**: adds "Prefer to talk it through?", the phone number and opening hours under "GET A FREE QUOTE". The design had the heading only, which left half the band empty on mobile.
12. **Thank-you page** (`/thank-you`, noindex) with a "have these ready" checklist and guides.
13. **Scroll fade-ins** (CSS plus IntersectionObserver; anything already in view on load shows immediately; respects reduced motion) and hover states on links, tiles, cards and buttons.
14. **Cookie consent banner** with Google Consent Mode v2, defaulting to denied. This is required in the UK (PECR) before GA4 or Ads cookies can be set. The design has none.

### Content and structure
15. **Quote form**:
    - Same fields as the design.
    - Added a sixth Service option, "Not sure / several services".
    - Property type is pre-selected on sector pages.
    - Added a hidden honeypot field (spam protection), inline validation with error messages, and a no-JavaScript fallback.
16. **Blocks of Flats**: added a warm "What the law expects of a block's Responsible Person" band between the report strip and other services, plus a CTA band and a cited sources list. *Why:* unique, useful content for SEO and trust.
17. **Service pages**: after the FAQ, added "Guides for responsible persons" cards and an areas list, for internal linking between services, guides and areas.
18. **Fire Door page**, "Routine checks & detailed inspections": added one sentence and a link about the Fire Safety (England) Regulations 2022 check frequencies.
19. **FAQ answers.** The PDF shows only the first answer on the alarm, lighting and AOV pages. The remaining answers are written by us, with standards claims kept to "with reference to BS 5839 / BS 5266".
20. **Home FAQ, "legal requirement"**: names the Fire (Scotland) Act 2005 and links to the guide.
21. **Pages the design doesn't show but the brief requires**:
    - the other 7 sector pages, built on the Blocks of Flats template;
    - hubs for services, sectors, areas and guides;
    - 12 area pages and 7 guides;
    - About, Contact and Quote;
    - draft Privacy, Terms and Cookies pages;
    - a 404 page.
22. **Area and guide heroes** are text-only (dark band, no photo). *Why:* no licensed local photography exists, and repeating stock images would look spun.

### Visual nits
23. The FRA intro H2 ("Fire Risk Assessments for Residential & Commercial Premises") sits on one line at 1440px; the PDF breaks it over two. That is down to the available width, and the design's own Fire Door H2 is on one line.
24. Fonts are self-hosted (`@fontsource`) instead of loaded from the Google Fonts CDN. They are the same faces, faster, and need no third-party request.
25. The quote card has a soft shadow to lift it off the red photo, a touch more than the flat card in the PDF.

## 3. Functional tests (`node qa/test.mjs`): 26/26 pass

| Check | Result |
|---|---|
| 43 sitemap URLs + thank-you + 404 return the right status | PASS |
| Every page: one H1, title ≤70, description 70–170, canonical, valid JSON-LD | PASS |
| Every `tel:` link is `tel:+442080662499` | PASS (9 per service page) |
| No review cards rendered; no FireQual / IFE / BS 8674 claims (BS 8674 is mentioned only neutrally in the cost guide); no em dashes | PASS |
| All internal links resolve | PASS |
| Schema: ProfessionalService (home), Service + BreadcrumbList + FAQPage (service, sector, area), Article + FAQPage (guide) | PASS |
| Click on a phone link pushes `phone_click` {phone_number, link_location, page_path} | PASS |
| FAQ accordion opens and closes | PASS |
| Service pre-selected on each of the 5 service pages; property type pre-selected on sector pages | PASS |
| Empty submit flags 5 required fields | PASS |
| Valid submit pushes `generate_lead` {service, property_type, user_data} and redirects to /thank-you | PASS |
| `form_start` fires on first input | PASS |
| Form works with JavaScript disabled (POST → 303 → /thank-you?nojs=1, which pushes `generate_lead`) | PASS |
| Mobile: phone icon, hamburger open/close, bottom bar, sticky header, hero CTA scrolls to form | PASS |
| Desktop: sticky header keeps phone and quote visible; Services dropdown on hover | PASS |
| No horizontal overflow at 390px on any page | PASS |

**Not yet tested end to end: real email delivery.** `/api/quote` sends through Resend once `RESEND_API_KEY`, `QUOTE_TO_EMAIL` and `QUOTE_FROM_EMAIL` are set in Vercel. Without them, previews accept and log the lead (`delivered:false`), and production returns 503 so leads are never silently lost.

## 4. Lighthouse (mobile, local build)

| Page | Perf | A11y | Best practice | SEO |
|---|---|---|---|---|
| Home | 100 | 100 | 100 | 100* |
| /quote | 99 | 100 | 100 | 100* |
| /areas/central-scotland | 99 | 100 | 100 | 100* |
| /services/fire-risk-assessments | 99 | 100 | 100 | 100* |
| /sectors/blocks-of-flats | 100 | 100 | 100 | 100* |
| /guides/fire-risk-assessment-cost | 99 | 100 | 100 | 100* |

LCP is 1.5–2.1s, CLS ≤ 0.036, TBT 0ms. *SEO scores 100 with `ALLOW_INDEXING=true`. Preview builds deliberately carry `noindex`, which Lighthouse scores as 69.

## 5. Deployment

The Vercel preview was **not deployed**. The Vercel connector returned `403 forbidden` for both project creation and deployment in the "galshlomai-gsh's projects" team. No domain was touched. To deploy a preview:
1. In Vercel, go to Add New → Project and import `galshlomai-gsh/Master-fire-safety`. Framework: Astro (auto-detected); Node 22.
2. Set **Production Branch** to something unused (e.g. `production`) so nothing goes live. Pushes to `claude/tt-fire-safety-website-123ei3` then create **preview** deployments.
3. Optional env vars (Preview): `PUBLIC_GTM_ID`, `RESEND_API_KEY`, `QUOTE_TO_EMAIL`, `QUOTE_FROM_EMAIL`. Leave `ALLOW_INDEXING` unset.
