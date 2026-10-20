# Blackstone design system (Falcon mapping)

Studied 19 Oct 2026 from:

- `blackstone.com` home (`#slide-1-2`)
- `blackstone.com/our-businesses/credit-and-insurance-bxci/` (BXCI)
- `blackstone.com` Technology & Innovations / Insights article headers
- `blackstone.com/the-firm/`
- `blackstone.com/insights/`
- `breit.com` (quote split, performance chart/table)

Live `blackstone.com` is behind Cloudflare in this environment, so computed CSS was read from the **blackstone-v2** bundle on Wayback `20260925104209` (`/_static` `main` CSS, cached at `/tmp/bxcss/main.raw.css`) plus screenshots from earlier passes. BREIT quote layout is from live `breit.com` frames plus the same type tokens.

Falcon keeps **At Gambit + Inter** (not Sanomat / Guardian Sans) and **Falcon purple buttons**. **Blackstone wins** on grid, spacing, dividers, eyebrows, cards, link motion, accordions, stats, quote split, and tables.

**Source of tokens in this repo:** `src/styles/tokens.css` (only). Tailwind `@theme` in `global.css` aliases those variables. Site-wide chrome lives in `src/styles/blackstone.css`. The **home + Merchant Cash Advance pilot** uses a separate namespaced layer: `src/styles/pilot.css` (`.pilot-*`) and `src/components/pilot/`. Other pages keep building on the existing components.

---

## Color tokens

From `:root` in the v2 bundle.

| Bundle | Hex | Falcon |
| --- | --- | --- |
| `--c-black` | `#000000` | `--bx-black` / `--color-ink` |
| `--c-white` | `#ffffff` | `--bx-white` |
| `--c-variant-black` | `#202020` | `--color-ink-soft` (body) |
| `--c-slate-1` | `#515256` | `--color-muted` |
| `--c-slate-2` | `#d5d8df` | `--color-line` (hairlines) |
| `--c-slate-3` / `--c-highlight-light` | `#f4f5f7` | `--color-tint` |
| `--c-yellow` | `#fdf147` | `--bx-yellow` (BX focus only; not Falcon CTA fill) |
| `--c-highlight-dark` | `#121317` | dark bands / media fallback |
| `--c-grey-100` | `#f8f8f8` | table alt row |
| `--c-grey-300` | `#a3aaae` | footnotes |
| `--c-copper` | `#a95228` | BX table accent; unused at Falcon |
| `--c-red` / form error | `#b80000` / `#ea4334` | `--bx-error` |
| `--c-copy` | `var(--c-black)` | ink |
| `--c-background` | `var(--c-white)` | page |
| `--c-links` | `var(--c-black)` | inherit |
| `--c-button-background` | `var(--c-black)` | **not used** — Falcon `--color-accent` `#5b21b6` |
| `--c-button-copy` | `var(--c-white)` | white on accent |

Semantic on-dark copy: white `/ 0.88` body, `/ 0.82` secondary, `/ 0.16` rules.

**Falcon-only:** `--color-accent` `#5b21b6`, `--color-accent-hover` `#4c1d95`, `--color-cta` `#a072c5`, `.bg-cta` `rgb(190, 171, 214)`, `--color-featured` `#443869`. Do not replace these with BX yellow or black pills.

---

## Type

**BX families:** `--f-serif: "Sanomat"` (titles), `--f-sans: "Guardian Sans"` (UI, eyebrows, quotes, accordion titles).  
**Falcon:** `--font-display` = At Gambit (+ Manrope fallback), `--font-sans` = Inter Variable. Display maps to serif *roles*; sans maps to Guardian *roles*.

Weights from bundle: `--fw-light: 300`, `--fw-regular: 400`, `--fw-medium: 500`, `--fw-bold: 700`.

Letter-spacing: titles `normal`; eyebrows `0.08em`; BX pill buttons `0.016em` (Falcon buttons stay `normal`).

### Scale (bundle `--fs-*`)

| Token | rem | px |
| --- | --- | --- |
| 12 | 0.75 | 12 |
| 14 | 0.875 | 14 |
| 16 | 1 | 16 |
| 18 | 1.125 | 18 |
| 20 | 1.25 | 20 |
| 24 | 1.5 | 24 |
| 32 | 2 | 32 |
| 40 | 2.5 | 40 |
| 48 | 3 | 48 |
| 56 | 3.5 | 56 |
| 64 | 4 | 64 |
| 72 / 80 / 96 / 176 | 4.5 / 5 / 6 / 11 | hero extremes |

### Roles by breakpoint

BX media: `22.5em` (~360), `48em` (768), `80em` (1280), `90em` (1440), `120em` (1920). Falcon implements **768 / 1024 / 1440** (12 columns from 1024).

| Role | Family (Falcon) | Weight | Size mobile → 768 → 1440 | Line-height | Tracking | Source |
| --- | --- | --- | --- | --- | --- | --- |
| **H1** page hero | display | 300 | clamp ~2.75rem → ~6.25rem; home hero clamped to fit span-8 | 1 / 1.05 | normal | Page heroes; BX `.bx-promo-header` 64/72/96. Home two-line H1 ≥1024 nowrap in a nested 8-col (line 2 starts track 2); wraps as one phrase below 1024 |
| **H2** `.bx-headers-one__title` | display | 300 | 32 → 40 (768) → 48 (1440) | 1.25 | normal | Bundle; 56px only at 1920 (not used) |
| **H3** cards / principles | display | 400 | 24px | 1.25 | normal | BX accordion title is 24 sans light; Falcon uses display 24/400 for named cards |
| **H4** | sans | 500 | 20px | 1.2 | normal | |
| **H5 / H6** | sans | 500 | 16 / 14 | 1.4 | normal | Rare; inherit body if unused |
| **Eyebrow** `.is-style-eyebrow` / `.bx-headers-one__eyebrow` | sans | 400 | 13px (screenshot; bundle `--fs-14`, `--fs-16` at 80em) | 1.5 | 0.08em, uppercase | Rule 48×2px, 16px from label, **to the right**. Centered headings: rule **above** |
| **Body** | sans | 400 | 16px (do not bump to 18) | 1.5–1.6 | normal | `--c-variant-black`. BX accordion panel is `--fs-18` light; Falcon FAQ stays 16 |
| **Lead / section-body** | sans | 400 | 16px | 1.6 | normal | `--color-ink-soft` |
| **Caption / meta** | sans | 400 | 12–14px | 1.45 | normal / 0.08em if uppercase | Dates, chart tabs, quote role |
| **Quote** (BREIT) | **sans** | 300 | clamp 1.75–3rem | 1.25 | normal | Screenshot: Inter, not serif. Name 14px/700; role 14px/400 muted, bottom-right |
| **Stat value** | display | 300 | 32px+ (featured larger) | 1 | normal | BXCI featured stat; `--fs-32` side values |
| **Accordion title** | sans | 300 | 24px | 1.25 | normal | Strategies / FAQ row |
| **Nav** | sans | 400 | 16px (Falcon); BX header is larger | 1 | normal | Active = 600 |
| **Button** | sans | 500 | 16px / 20px lh | 20px | normal | Falcon square. BX pill is 18px/400, `0.016em`, 8/32 padding, 64px radius |
| **Link** | inherit | 500 (`.link`) | inherit | inherit | — | Drawn 1px underline, 350ms, left→right. Color inherit (never purple) |
| **Table header** | sans | 500 | 12px uppercase | — | 0.08em | Muted; hairline rows |
| **Table cell** | sans | 400 | 16px | 1.47–1.55 | normal | `--fs-table: 1.063rem` in bundle |

---

## Spacing and section padding

Bundle `--spacing-*` is an 8px-based scale: 8, 12, 16, 24, 32, 40, 48, 56, 64, 80, 88, 112, 120, …

| Role | Mobile | 768 | ≥1024 | ≥1440 | Source |
| --- | --- | --- | --- | --- | --- |
| Section `--bx-section` | 64px (4rem) | 88px (5.5rem) | 120px (7.5rem) | 120px | `--pad` / BXCI |
| Outer margin `--bx-margin` | 15px | 40px | 40px | **80px** | `--pad-container-sm` / `--pad-container-md-plus` at 90em |
| Gutter `--bx-gutter` | 16px | 24px | 24px | 24px | `--column-gap: 2em` → 24px |
| Content max `--bx-max` | 20.5→23rem | 43rem | 71rem | **79rem (1264px)** | `--container-width` |
| Header height | 56px (3.5rem) | 68px (4.25rem) | 68px | 68px | Falcon compact bar (BX header is taller: 7–12.75rem) |
| Eyebrow → H2 | 40px | 40px | 40px | 40px | Tech-and-innovations |
| H2 → body | 48px (grid row-gap ≥1024) | | | | Title `padding-bottom` |
| Body → circle-arrow | 40px | | | | `.section-cta` |
| What-we-do H2 → content | 80px | | | | BXCI |
| What-we-do item gap | 56px | | | | BXCI |
| Hairline | 1px `#d5d8df` | | | | `--c-slate-2` |
| Eyebrow rule | 48×2px, 16px gap | | | | `:after` `--spacing-48` |

`.container-site` = `max-width: calc(var(--bx-max) + 2 * var(--bx-margin))` + `padding-inline: var(--bx-margin)`. At 1440: 1264 + 80 + 80.

---

## Grid

12 columns from 1024 (BX uses 16 at 80em; mapped 16→12). 4 columns &lt;768, 8 columns 768–1023.

**Rule:** span sets **only** `grid-column-end: span N`. Start sets `grid-column-start`. Never `grid-column: span N` (collapses when paired with start). Full bleed: `grid-column: 1 / -1` (`.bx-full`).

| Pattern | Classes |
| --- | --- |
| Section H2 | `.section-head.bx-lg-span-10` |
| Body / list / FAQ | `.section-body.bx-lg-start-7.bx-lg-span-6` |
| Three cards | 3× `.bx-lg-span-4` after a span-10 head |
| Page hero | title span 7, lead span 5 |
| Article column | start 3, span 8 |
| BXCI What we do | H2 span 10; portrait 1–6; list start 8 span 5 |
| BREIT quote | photo span 4; copy start 6 span 7 |
| Home H1 | title span 8, aside start 9 span 4; line 2 nested track 2 ≥1024 |
| Home caption (BREIT promo-carousel) | H2 cols 1–6 (`bx-lg-span-6`); body+Learn more start 8 span 5; `align-items: start` |

Classes are unprefixed (`bx-lg-span-6`, not `lg:bx-span-6`).

---

## Motion

| Token | Value |
| --- | --- |
| `--bx-ease` / `--bx-duration` | `0.3s ease` |
| Link underline | `background-size` 0→100% on 1px gradient, **350ms** |
| Circle-arrow fill | background/color/border **250ms** |
| Accordion panel | `grid-template-rows` **350ms** |
| Accordion icon rotate | **250ms** |
| Image zoom | `transform: scale(1.06)`, ~350ms |
| Header dropdown | show/hide; chevron 180° |
| Reduced motion | transitions/animations off (`prefers-reduced-motion`) |

BX yellow 5px outline on `.bx-button:focus-visible` is **not** used. Falcon `:focus-visible` is 2px `--color-accent` (white on dark).

---

## Components

### Nav + dropdowns

- Sticky white bar (home: black until mobile menu opens).
- Desktop `lg+`: text links, chevron, hover-open + focus-open menus. Escape closes and sets `is-escaped` so focus doesn’t reopen.
- Wide menus (Services, Industries): 32rem, 2 columns. Narrow (Firm, Resources): 18rem.
- Item: 13/16 padding; title 14px/600; meta 12px muted.
- Active: weight 600.
- Phone: `xl+` only so 1024 doesn’t wrap the bar.
- CTA: `.btn-primary` “Get Funding Today”.
- Hover on home dark nav: white 8% wash (not tint).

### Mobile nav

- Full-viewport `100dvh` overlay, tint background, scroll lock.
- Collapsed sections; chevron rotates when open.
- Primary + outline CTAs at the bottom.

### Hero

- **Home:** black band, split H1 (7 + aside 4 start 9), 16:9 then 21:9 media, caption row with H2 span 10 + body start 7.
- **Inner pages:** `.page-hero-pad`, H1 + lead, then full-width media. No breadcrumbs in the hero.

### Eyebrow

- Default `.eyebrow.eyebrow--line`: uppercase, 13px, black, 48px rule **right**.
- `.eyebrow--center`: rule **above**.
- `.on-dark` / footer: currentColor (white on black).

### Buttons

| Class | Rest | Hover | Notes |
| --- | --- | --- | --- |
| `.btn-primary` / `.btn-accent` | `#5b21b6` fill, white type, 13×24, square | `#4c1d95` | Falcon exception |
| `.btn-on-dark` | white fill, ink type | tint | |
| `.btn-outline-dark` | 1px grey-ink border | ink fill, white type | Lives in `global.css` |
| `.btn-outline-light` | 1px white | white fill, ink type | |

BX `.bx-button` is a 999px pill, black, 0.3s, yellow focus — **not copied**.

### Link underline draw

`.link`, `.link-draw`, prose `<a>` except buttons: gradient underline, size 0→100% × 1px, 350ms. No `text-decoration` hover (that fought the draw).

### Circle-arrow links

`.arrow-cta` + `.circle-arrow` (44px outline). Hover: circle fills ink, glyph inverts. `.arrow-cta--on-dark` inverts to white fill. Used for “Learn more” / “Apply”.

### Link list (BMACX Explore More)

Home Services only: `.pilot-ll-*` in `PilotLinkList.astro`. Measured from `bmacx.com` `wp-block-blackstone-v2-link-list` / `.bx-link-list` (Wayback `20261001234616`, `blackstone-v2` `frontend.css` + `frontend.js` `tabsscript`).

- **H2:** display light (Falcon serif role), then **32 / 40 / 48px** space before the first rule (`--spacing-32/40/48`).
- **Rows:** full content width. **1px (`0.063rem`) black** rules top and bottom of the stack. Padding **32px** mobile, **40px** ≥768.
- **Desktop 12-col:** title + gray range cols **1–6**; teaser (16px, 2-line clamp) start **8** span 4, top-aligned with the title; circle arrow col **12**, vertically centered.
- **Title:** sans **400**, **24px** mobile / **28px** ≥768, black. Range under the title: **14px**, `--color-muted`, one line.
- **Circle:** BMACX 40×40 SVG (border + arrow + evenodd fill). Rest = outlined circle + black arrow (`fill` opacity 0). Hover/focus = fill opacity 1, arrow opacity 0, icon **scale(1.1666666667)**. Transitions: transform **0.3s**, opacity **0.3s**.
- **Siblings:** list `:hover` / `:focus-within` sets other rows to **opacity 0.36** (BMACX `.bx-link-list__title-animation`). Hovered/focused row stays 1.
- **A11y:** the whole row is the link; `:focus-visible` is 2px `--color-accent` (not BX yellow); Space activates the row; `prefers-reduced-motion` drops scale and transitions.
- Does **not** restyle `.pilot-circle` / `.pilot-arrow`.

### Cards

- Insights / blog: 16:9 crop, zoom 1.06, square corners, no shadow, category + title.
- No boxed chrome; hairlines or whitespace separate.
- `.tile-card` is tint padding for partner / credit-prep tiles (not a BX card).

### Accordions

- **FAQ** `.bx-accordion`: slate hairline; closed = muted + **outline circle** chevron; open = ink + **filled black circle**, chevron 180°.
- **Credit strategies** `.bx-accordion--strategies`: **black** rules; closed = **plain chevron** (no circle); open = filled circle. Panel ~50% width ≥1024, square bullets, amount/term line, two arrow CTAs.
- Height: `grid-template-rows: 0fr / 1fr`. Shared binder: `src/scripts/accordion.ts`.

### Stats

`HeroStats` (`.stats-bx`, scoped in the component). BXCI `.bx-stat-featured` from the v2 bundle:

- Featured label: sans 300, **24px** (&lt;768) / **32px** (≥768). Not the 13px eyebrow.
- Featured value: display 300, **5rem / 11rem / 9rem / 10rem** at 375 / 768 / 1280 / 1440, `line-height: 1`, **40–64px** gap under the label. One line; published ranges compact to `$10K-$1M`.
- Side pair from **768**: two columns, sans 16px label, display **32 / 40 / 48px** value, **1px** rule under the value. Desktop ≥1280 sits them to the right of the featured figure (8+3+3 of 16 mapped to 6 + 2 + 2 of 12).
- No footnote superscripts, Note, or numbered list.
- Skip when amounts are non-numeric (`Tailored to your business`). Home and MCA pilots reuse this component (not the old compact `.stats-grid` strip).

### Quote

`.quote-split` (About): 3:4 portrait cols 1–4, quote start 6 span 7, **sans** light, name 700 small, role muted, bottom-right. **Live Dwight copy only.** `.page-hero-media figure:not(.bx-grid)` so the split keeps `display:grid`. Do not render placeholder testimonials.

### Tables / charts

`.chart-table`: CHART | TABLE tabs, uppercase, ink underline on selected. Bars = published ranges only. `.r-table`: hairline cells; stacked blocks &lt;768 with `data-label`. No vertical rules on the performance table.

### CTA band

Falcon `.bg-cta` lilac + ink type (Ling). Not BX yellow. Insights subscribe uses a **black** split (`.insights-cta`) like BX Insights.

### Footer

Black band, 3-column `.footer-cols` from 768 (nested grid; do not put 3 cols inside `.bx-grid` at tablet). Eyebrows + text links. Bottom legal row.

### Forms

BX: floating 14px light label, 16px inset, focus lifts label, error `#ea4334`. Falcon apply uses Jotform embed (untouched). Loan calculator `.lc-*` stays page-local (range + result), using ink/tint/white on the dark hero.

---

## Falcon exceptions (do not “fix” toward BX)

1. Fonts: At Gambit + Inter.
2. Buttons: purple squares, not black pills / yellow focus.
3. `.bg-cta` and `.btn-outline-dark` stay in `global.css`.
4. No fabricated people, quotes, numbers, or testimonials.
5. Compact header (not BX’s 7–12rem).

---

## Visual assets

Blackstone is **not** image-heavy. Pages are mostly type and whitespace. Photos exist to **pace** the scroll, give a section a breath, and point attention — typically **hero + 1–3 well-placed visuals**. Do not put a picture on every block.

| Pattern | Where BX / BREIT uses it | Ratio | Grid | Spacing | Role |
| --- | --- | --- | --- | --- | --- |
| Hero still | Home `#slide-1-2`; BXCI / Insights / The Firm title + full-width photo | 16:9; home ~21:9 from 768 | Full content width (`.bx-full` / `.page-hero-media`) | 40–56px under title row | Open the page; one strong still |
| Full-bleed between sections | Rare. Home caption row sits *under* the hero, not a second photo | — | — | Section padding, not extra photos | Breathing room is **whitespace**, not more images |
| Split image + text | BXCI What we do (portrait left, list right); statement / featured-content bands | 3:4 portrait or 4:3 | Image cols 1–6; copy start 8 span 5 | 80px H2→content; 24px gutter | Anchor a dark or statement band |
| Quote + portrait | BREIT | 3:4 | Photo span 4; quote start 6 span 7 | Same grid row | One real person, one sentence |
| Image cards | Insights article grid | 16:9 | 3× span 4 | 16:9 crop, square corners, zoom 1.06 | Index pacing — only on listing pages |
| Charts / tables | BREIT performance; BXCI stats | n/a (data) | Full or span 12 | Hairlines, not photos | Numbers, not decoration |
| Icons | Nav chevrons, circle-arrows, small UI | 16–44px | Inline | — | Wayfinding, not illustration |
| Video | Occasional BX hero video | 16:9 | Full | Same as hero still | Falcon has **no** video |
| Photo on a black band | Insights subscribe; BXCI statement | 3:4 or 4:3 in half the grid | Span 6 | Band uses `--bx-section` | Contrast after a long type section |

**Falcon component:** `Media` (`src/components/Media.astro`). Pass a real `image` when one exists in `src/assets/`; otherwise a **labeled** placeholder: `Image placeholder: {intent} ({ratio})`. `ImageSlot` is a thin alias. Do not invent people.

**Density by page type**

Blackstone typically uses **hero + 1–3** stills. Do not add a picture to every section. Do not repeat the same still in hero, statement, and overview.

| Page | Visuals | Skip |
| --- | --- | --- |
| Home (pilot) | 1 hero (`hero-falcon.jpg`); 12 industry 16:9 **labeled** cards; BREIT quote portrait; 3 published insight covers | Process, services list, CTA — type only. Do not reuse the falcon still. |
| Inner landing (FAQ, apply, legal, 404, calculator) | 0 | No decorative hero |
| Service landing (MCA pilot) | Hero still + What we do 3:4 **labeled** placeholder (not a second crop of the hero) | Overview accordion, process, FAQ, CTA — type only |
| Service landing (other products) | Hero still + statement-band 4:3 (same product photo, second crop) | Overview, FAQ, use cases — type only |
| Industry landing | Hero placeholder + What we do 3:4 | Accordion, FAQ, principles — type only. Related article thumbs are a listing, not decoration |
| Directory (industries, blog, services rows) | Grid thumbs *are* the page | No second full-bleed hero |
| About | 1 quote portrait (`dwight-holly.webp`) | No headshot per role |
| Contact / partners | 1 split still (labeled map / handshake) | No extra hero |
| Credit repair | 1 labeled 16:9 hero | Programs, process, use cases — type only |
| Insights CTA (blog) | 1 portrait on the black band | — |

---

## File map

| File | Role |
| --- | --- |
| `src/styles/tokens.css` | Colors, type, space, grid tokens |
| `src/styles/global.css` | Fonts, Tailwind `@theme`, base type, Falcon buttons, `.bg-cta` |
| `src/components/HeroStats.astro` | Scoped BXCI featured stats (`.stats-bx`). Reused on the pilot. |
| `src/styles/blackstone.css` | Grid utilities + components for non-pilot pages |
| `src/styles/pilot.css` | Namespaced `.pilot-*` layer for `/` and `/services/merchant-cash-advance` |
| `src/components/pilot/PilotHero.astro` | Home `#slide-1-2` + BREIT promo-carousel caption: black band, 8+4 title row, 16:9→21:9 still, H2 cols 1–6 / body+Learn more cols 8–12 top-aligned |
| `src/components/pilot/PilotPageHero.astro` | Inner-page hero: H1 span 7, lead span 5, one 16:9 still |
| `src/components/pilot/PilotEyebrow.astro` | Left = 48×2px rule to the right; `align="center"` = rule above the label |
| `src/components/pilot/PilotArrow.astro` | Circle-arrow + drawn underline (350ms). `tone="light"` inverts the hover fill |
| `src/components/pilot/PilotLinkList.astro` | Home Services rows: title + gray range cols 1–6, teaser start 8 (16px, 2 lines), circle arrow col 12 centered. Hover: hovered row black + filled circle; siblings 36% opacity. Icon scale 1.1667 and fill/arrow opacity **0.3s**. Focus-visible: 2px Falcon accent. Reduced-motion: no scale/transitions. |
| `src/components/pilot/PilotWhatWeDo.astro` | BXCI black band: H2 span 10, 3:4 portrait cols 1–6, stacked items start 8 |
| `src/components/pilot/PilotImageCard.astro` | Insights 16:9 card: zoom 1.06, category kicker (no 48px rule), title draw, optional body |
| `src/components/pilot/PilotProcess.astro` | Three numbered columns, type only |
| `src/components/pilot/PilotQuote.astro` | BREIT split: 3:4 portrait span 4, sans-light quote start 6 span 7, name/role bottom-right |
| `src/components/pilot/PilotAccordion.astro` | FAQ (slate hairline, outline→filled circle) or `variant="strategies"` (black rules, plain chevron closed) |
| `src/components/pilot/PilotCta.astro` | Falcon lilac band, not BX yellow |
| `src/components/Media.astro` | Real asset or labeled placeholder |
| `docs/blackstone-design-notes.md` | Earlier pass notes; this file is the system |
| `docs/redesign/content-home.md` | Approved home copy outline |
| `docs/redesign/content-merchant-cash-advance.md` | Approved MCA copy outline |

### Pilot pages

**Home** (`/`): Blackstone `#slide-1-2` hero (static falcon; desktop H1 `Fuel Success with` / `Fast Business Funding` with nested-8 offset) → BXCI featured stats (24-48h, `$100M+`, 98% for qualified applicants) → **Services** rows (title + range cols 1–6, teaser start 8, circle arrow col 12; sibling-hover 36%) → 12 industry image cards → process → BREIT quote (Dwight Holly, Founder & CFO) → 3 published Insights cards → Falcon lilac CTA. No testimonials. No Explore more.

**Merchant Cash Advance** (`/services/merchant-cash-advance`): inner hero → BXCI What we do (uses, labeled 3:4) → product stats → Overview strategies accordion (Who / Amounts / Terms / Requirements from the live spec, plus remittance) → process → FAQ → CTA. Other service URLs still use `src/pages/services/[slug].astro`.
