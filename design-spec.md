# T&T Fire Safety: design spec

Source of truth: `design/TT-Fire-Safety-design.pdf` (10 pages, Sept 2026; rendered to `design/pages/`).
Exact tokens were cross-checked against the CSS in Philip's interactive version
(claude.ai/artifact/3Yba8Ny3UGTvxaCZ6HhqQ4), which the PDF was exported from.

> **Brand status:** `[CONFIRM: T&T standalone vs Certify]`. Philip asked on 11 Oct whether to build around Certify
> Services instead. Every brand string lives in `src/config/site.ts` and the logo is one component, so the brand
> can be switched in a single place.

---

## 1. Tokens

### Colour

| Token | Hex | Use |
|---|---|---|
| `--red` | `#C9232C` | Primary CTA, eyebrow labels, accent rules, links, FAQ +/− |
| `--red-deep` | `#A81E2A` | Button hover |
| `--red-press` | `#8F1922` | Button active |
| `--red-rev` | `#E03A34` | Red accent on dark backgrounds (sector tile rule) |
| `--char` / `--ink` | `#1C2024` | Dark hero, sectors band, footer, body headings |
| `--slate` | `#5B646C` | Body copy on light |
| `--warm` | `#F6F5F3` | Areas / credentials bands |
| `--warm-band` | `#F2F0ED` | "Other fire safety services" band |
| `--band-line` | `#E3E0DC` | Band borders |
| `--line` | `#E4E1DC` | Hairlines, card borders, FAQ dividers |
| `--line-dk` | `rgba(255,255,255,.13)` | Footer divider |
| `--muted-dk` | `#A6ADB3` | Secondary text on dark |
| hero sub | `#C7CCD0` | Hero subhead on dark |
| crumb | `#AEB5BA` / sep `#606870` | Breadcrumb on dark |
| footer link | `#C2C8CC`; blurb `#9AA2A8`; meta `#8C9298` | Footer |
| input border | `#D8D4CE` (hover `#BDB8B1`); placeholder `#9AA0A6` | Form |
| error bg | `#FDF7F7` | Invalid field |
| star | `#E8A13A` | Review stars |
| placeholder | `#E7E4E0` | Image placeholder ground |

Red quote section: `--red` base, `rgba(201,35,44,.66)` overlay on a smoke-detector photo, plus a left-to-right
darkening `rgba(150,20,27,.26 → 0)`. Heading text shadow `0 1px 3px rgba(110,10,16,.52)`.

Hero photo fade (all heroes): two gradients from `#1C2024` (top-down to 62% and left-to-right to 46%) over the photo.

### Typography

| Role | Font | Size / line-height (desktop → mobile) | Weight / tracking |
|---|---|---|---|
| Headings, nav, buttons, labels | **Archivo** | — | 600–800 |
| Body | **Source Sans 3** | 17px / 1.65 → 16.5px | 400 (500/600 for emphasis) |
| Hero H1 (home + internal) | Archivo | 36px / 1.16 uppercase → 29px (home), 27px (internal) | 700, tracking 0 |
| H2 | Archivo | 32px / 1.18 → 25px; compact H2 26px → 22px | 700, −0.018em |
| H3 | Archivo | 17–18px / 1.3 | 600–700 |
| Quote H2 ("GET A FREE QUOTE") | Archivo | 44px / 1.06 uppercase | 800, +0.01em |
| Eyebrow | Archivo | 12px uppercase | 600, 0.15em, red |
| Lede / hero sub | Source Sans 3 | 18–19px / 1.6 → 16.5px | 400 |
| Small | Source Sans 3 | 15px / 1.55 | 400 |
| Logo "T&T" | Archivo | 31px → 22px | 700, −0.045em, red |
| Logo "FIRE SAFETY" | Archivo | 12.5px → 9.5px | 600, 0.2em |

Fonts are self-hosted (`@fontsource`, latin subset, `font-display: swap`) instead of using the Google Fonts CDN.

### Layout & shape

- Container max **1240px**, side padding **40px** (desktop), **20px** (mobile ≤700px).
- Radius **4px** everywhere (buttons, inputs, cards, dropdown).
- Buttons: height 52px, padding 0 26px, Archivo 15.5px/600; small 42px/14px; mobile hero buttons full-width at 54px.
- Header 74px (desktop), 64px (mobile); bottom border `--line`.
- Section rhythm (deliberately uneven): standard 88px; internal 60px; feature strip 38/44px; reviews 52px;
  sectors 60px; areas 53px; FAQ 78px; credentials band 34px; CTA band 40px. Mobile values are about 30% smaller.
- Hero grid 57% copy / 43% photo; home min-height 560px, internal 430px. Copy left edge aligns with the container.
- Breakpoints: ≤700px mobile (single column), 701–1023px tablet (feature grid 2×2), ≥1024px desktop.

---

## 2. Components

| Component | Spec |
|---|---|
| **Logo** | `T&T` (red) · 1px×26px rule · `FIRE SAFETY`. Reversed variant (white T&T on footer). One component, `src/components/Logo.astro`; fire mark A is behind a config flag (`brand.fireMarkApproved`) and off by default. |
| **Header** | Logo · nav (Home, Services▾, Sectors▾, Guides, About, Contact; active item gets a 2px red underline) · phone (Archivo 16/600) · red "Get a Quote" (small). Dropdown: white, 1px line, shadow `0 12px 30px rgba(28,32,36,.12)`, 322px wide. Mobile: logo + red phone icon button + hamburger (44px icon buttons) → drawer with Call / Get a Quote buttons and nav list. |
| **Hero (home)** | Dark char panel + faded photo; H1, sub, red CTA. |
| **Internal hero** | Same, with breadcrumb above H1. |
| **Trust strip** | 4 equal cells with vertical hairlines and a top rule; H3 + small text. |
| **Content grid ("What we assess")** | 3 columns; each item has a 1px rule with a 34×2px red segment. |
| **Report strip** | 3 (or 2) cells separated by vertical hairlines with a top rule. |
| **Numbered steps** (AOV) | Report strip with red `01 / 02 / 03` eyebrow. |
| **Credentials band** | Warm band; copy left, red-ruled credentials list right. |
| **Standards note** | Small grey text with a 2px left rule (e.g. "with reference to BS 5839"). |
| **Link row** | Property types, 3-column links; red arrow fades in on hover. |
| **Other services** | Warm band, eyebrow, 2-column list with dividers and red arrows; the current page is excluded. |
| **Reviews** | 3 equal cards, stars, text, name/date. **Hidden until real reviews exist** (`reviews: []` in config). |
| **Sector tiles** | Dark band, 4×2 grid; rule with a red segment that grows on hover. |
| **Quote section** | Red smoke-detector band; "GET A FREE QUOTE" left, white form card right. Fields: Name, Phone, Email, Postcode, Property type, Service required (pre-selected per page), Additional details (optional). Note: "No obligation. We'll confirm the scope and price in writing." |
| **Areas list** | 4-column region links + "See All Areas We Cover →". |
| **FAQ accordion** | Native `<details>`; Archivo 17.5/600 question, red +/−, first item open. |
| **CTA band** | Red band, H2 + white button ("Approved conversion pattern 2" in the artifact). |
| **Footer** | Dark; logo + blurb · Contact · Services · Company; bottom bar with © and Privacy/Terms/Cookies. |

Property type options: Block of Flats · HMO / Residential · Office / Workplace · Retail / Hospitality ·
Care / Healthcare · Education · Industrial / Warehouse · Other.
Service options: Fire Risk Assessment · Fire Door Inspection · Fire Alarm Servicing / Installation ·
Emergency Lighting Servicing / Installation · AOV / Smoke Control Servicing.

---

## 3. Pages and sections (as designed)

### Homepage (PDF p2)
1. Header (Home active)
2. Hero: H1 "Fire risk assessments for landlords, managing agents & businesses"; sub "On-site fire risk assessments with written reports and prioritised action plans across England, Wales and Scotland."; CTA "Get a Free Quote"; corridor photo
3. Trust strip: Qualified fire risk assessors · Prioritised reporting · Single sites & portfolios · Post-assessment guidance
4. Other fire safety services (4 links)
5. What our customers say (3 review cards + "Google attribution and carousel controls")
6. Fire Risk Assessments by Sector (8 tiles)
7. Get a free quote (form, Service = Fire Risk Assessment)
8. Areas we cover (12 regions + "See All Areas We Cover")
9. FAQ (6 questions)
10. Footer

### Service template (PDF p3–7)
Header (Services active) → internal hero with breadcrumb Home / Services / {Service} → intro (H2 + 2 paragraphs) →
"What we assess/inspect/service" 6-item grid (+ standards note on alarm/lighting) → page-specific blocks →
property types link row + "View all sectors" → other services → quote form (Service pre-selected) → FAQ (6) → footer.

Page-specific blocks:
- **Fire Risk Assessments**: report strip (Significant findings / Prioritised actions / Next steps) → credentials band "Qualified fire risk assessors" + "Professional credentials" list.
- **Fire Door Inspections**: report strip (Door condition / Identified defects / Recommended actions) → warm band "Routine checks & detailed inspections".
- **Fire Alarm**: grid titled "Fire alarm servicing" + BS 5839 note → "Installation & upgrades" 2-up strip → warm "Service records" 2-up strip.
- **Emergency Lighting**: grid "Testing & servicing" + BS 5266 note → "Installation & upgrades" 2-up → warm band "Test records".
- **AOV**: grid "What we service" → warm "Functional testing" numbered 01–03 → "Service record" paragraph.

### Sector template: Blocks of Flats (PDF p8)
Header (Sectors active) → hero "Fire risk assessments for blocks of flats", breadcrumb Home / Sectors / Blocks of Flats → intro →
"What we consider" 6-item grid → report strip → other services → quote form → FAQ (6) → footer.

### Corporate fire mark (PDF p9): exploration only, not approved
Mark A (solid flame reversed out of a red square) is recommended for favicon and profile use only, never as a section icon.
**Status: not approved.** The site uses the current wordmark; the favicon is a neutral "T&T" tile until Gal approves mark A.

### Mobile (PDF p10, 390px)
Header with red phone icon and hamburger; heroes stack (copy, full-width CTA, then photo at 190–210px);
all grids collapse to one column; other services become a single list.

---

## 4. Additions on top of the design (agreed upgrades)

- Sticky header (shrinks slightly on scroll), phone `tel:` link and Get a Quote always visible.
- Sticky mobile bottom bar: **Call** | **Get a Quote** (hidden while the quote form is on screen).
- A red CTA band or CTA button after every 2–3 sections.
- Quote form keeps the design's fields; posts to `/api/quote`; redirects to `/thank-you`.
- Subtle polish: fade-up on scroll (IntersectionObserver, CSS only, respects `prefers-reduced-motion`) and hover states.
- Areas hub + 12 region pages, a guides hub + 7 guides, About, Contact, Quote, Privacy, Terms, Cookies, 404.

## 5. Trust rules (hard)

- Reviews: the component exists, but it renders nothing while `site.reviews` is empty.
- Credentials: only "FPA Level 3 Fire Risk Assessment (Philip Roberts)" is confirmed. FireQual Level 5,
  IFE registration and BS 8674:2025 alignment are **not published**. They sit as `pending` slots in config and are
  not rendered.
- Photos: anything showing T&T branding, stock watermarks or unknown licensing is a placeholder, listed in
  `src/config/images.ts` with `needsRealPhoto: true`.
- Email: `site.email` is `null` until confirmed; it renders as "enquiries@ (address to confirm)".
