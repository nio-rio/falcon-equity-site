# Blackstone design system (Falcon mapping)

Studied 19 Oct 2026 from:

- `blackstone.com` home (`#slide-1-2`)
- `blackstone.com/our-businesses/credit-and-insurance-bxci/` (BXCI)
- `blackstone.com` Technology & Innovations / Insights article headers
- `blackstone.com/the-firm/`
- `blackstone.com/insights/`
- `breit.com` (quote split, performance chart/table)

Live `blackstone.com` is behind Cloudflare in this environment, so computed CSS was read from the **blackstone-v2** bundle on Wayback `20260925104209` (`/_static` `main` CSS, cached at `/tmp/bxcss/main.raw.css`) plus screenshots from earlier passes. BREIT quote layout is from live `breit.com` frames plus the same type tokens.

Falcon keeps **At Gambit + Inter** (not Sanomat / Guardian Sans). Buttons are ink/white, not purple and not BX yellow pills. **Blackstone wins** on grid, spacing, dividers, eyebrows, cards, link motion, accordions, stats, quote split, and tables.

**Source of tokens in this repo:** `src/styles/tokens.css` (only). Tailwind `@theme` in `global.css` aliases those variables. Site-wide chrome lives in `src/styles/blackstone.css`. The **home + Merchant Cash Advance pilot** uses a separate namespaced layer: `src/styles/pilot.css` (`.pilot-*`) and `src/components/pilot/`. Other pages keep building on the existing components.

---

## Color tokens

From `:root` in the v2 bundle.

| Bundle | Hex | Falcon |
| --- | --- | --- |
| `--c-black` | `#000000` | `--bx-martinique-darker` `#14101f` via `--bx-black` / `--color-ink` / `--color-surface-dark` |
| `--c-white` | `#ffffff` | `--bx-white` |
| `--c-variant-black` | `#202020` | `--color-ink-soft` (body gray; not dark bands) |
| `--c-slate-1` | `#515256` | `--color-muted` |
| `--c-slate-2` | `#d5d8df` | `--color-line` (hairlines) |
| `--c-slate-3` / `--c-highlight-light` | `#f4f5f7` | `--color-tint` |
| `--c-yellow` | `#fdf147` | `--bx-yellow` (BX focus only; not Falcon CTA fill) |
| `--c-highlight-dark` | `#121317` | `--bx-highlight-dark` → Martinique Darker |
| `--c-grey-100` | `#f8f8f8` | table alt row |
| `--c-grey-300` | `#a3aaae` | footnotes |
| `--c-copper` | `#a95228` | BX table accent; unused at Falcon |
| `--c-red` / form error | `#b80000` / `#ea4334` | `--bx-error` |
| `--c-copy` | `var(--c-black)` | ink |
| `--c-background` | `var(--c-white)` | page |
| `--c-links` | `var(--c-black)` | inherit |
| `--c-button-background` | `var(--c-black)` | Falcon `.btn-primary` fill (ink, not purple) |
| `--c-button-copy` | `var(--c-white)` | white on accent |

Ling additions (Falcon-only):

| Token | Hex | Use |
| --- | --- | --- |
| `--bx-martinique-darker` | `#14101f` | Site black / near-black (header, hero, text, borders, overlay tint base, square buttons) |
| `--bx-martinique` | `#332a4e` | Button-040 dark (text / arrow circle on the light variant) |
| `--bx-lilac` | `#f3f2fb` | Button-040 light (pill / arrow on the light variant) |
| `--bx-overlay` | `rgba(20, 16, 31, 0.32)` | Nav page overlay tint |

Semantic on-dark copy: white `/ 0.88` body, `/ 0.82` secondary, `/ 0.16` rules.

Square `.btn-primary` fills stay **Martinique Darker / white**. Nav and CTA Apply are Ling’s `.button-040` (Lilac / Martinique via `--button-040-*`). No Falcon-purple fills. Do not use BX yellow.

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
| **Nav** | sans | 400 | 16px top-level; mega heading 20px/500 | 1 | normal | Open = 1px underline + chevron 180° |
| **Button** | sans | 500 | 16px / 20px lh | 20px | normal | Falcon square. BX pill is 18px/400, `0.016em`, 8/32 padding, 64px radius |
| **Link** | inherit | 500 (`.link`) | inherit | inherit | — | Drawn 1px underline, 350ms, left→right. Color inherit (never purple) |
| **Table header** | sans | 500 | 12px uppercase | — | 0.08em | Muted; hairline rows |
| **Table cell** | sans | 400 | 16px | 1.47–1.55 | normal | `--fs-table: 1.063rem` in bundle |

---

## Spacing and section padding

Bundle `--spacing-*` is an 8px-based scale: 8, 12, 16, 24, 32, 40, 48, 56, 64, 80, 88, 112, 120, …

| Role | Mobile | 768 | ≥1024 | ≥1440 | Source |
| --- | --- | --- | --- | --- | --- |
| Section `--bx-section` | 64px (4rem) | 88px (5.5rem) | 120px (7.5rem) | 120px | `--pad` / BXCI (inner pages) |
| Home band `--pilot-section-y` | 80px | 96px | 144px (1280) | 160px | BX base pad. Same-bg follower uses `--pilot-section-y-stack` 40 / 40 / 48 / 56. See `docs/refs/bx-section-spacing.md` |
| Outer margin `--bx-margin` | 15px | 40px | 40px | **80px** | `--pad-container-sm` / `--pad-container-md-plus` at 90em |
| Home announcement (EARNINGS) | see below | | | | `.bx-announcement` |
| Gutter `--bx-gutter` | 16px | 24px | 24px | 24px | `--column-gap: 2em` → 24px |
| Content max `--bx-max` | 20.5→23rem | 43rem | 71rem | **79rem (1264px)** | `--container-width` |
| Header height | 112px (7rem) | 140px (8.75rem) | **108px (6.75rem)** | **108px** | Captures match BX `--h-site-header--fixed`. See `docs/refs/bx-header.md` |
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
| Header dropdown | `display` toggle; chevron 180° in 0.3s; header compact `height` 0.3s ease-out |
| Reduced motion | transitions/animations off (`prefers-reduced-motion`) |
| Home scroll-in (below hero) | GSAP `y: 20` + `autoAlpha` **800ms** / stagger **400ms**, start **`50% 90%`**, play once. Stats: Fade-In **0.75s**, value wipe **0.9s** / **0.375s** delay, line **1.125s** linear. News stills: curtain **1s** + image fade **0.5s** / **0.4s** delay. Skip hero, testimonial slider, CTA wheel. Measures in `docs/refs/bx-scroll-in.md`. |

BX yellow 5px outline on `.bx-button:focus-visible` is **not** used. Falcon `:focus-visible` is 2px ink (white on dark).

---

## Components

### Nav + dropdowns

- Fixed bar (`position: fixed; z-index: 50`) like Blackstone, with a spacer so content is not covered. **Home** at the top of the hero: black, white type, bare logo (`is-color-theme-dark`). After scroll, and on **inner pages:** white bar, black type, same bare logo. Opening a menu locks page scroll (`html.has-scroll-lock` + wheel/touch preventDefault; no html/body `overflow: hidden`, which hides a scrolled fixed bar). The panel is `top: 100%` of the visible bar.
- Heights follow the compact bar in the nav captures (**108px** at 80em). Logo is the live falconequity.ai lockup: inline SVG mark (`currentColor`) + HTML “Falcon Equity Group” in At Gambit. Measured live (html 16px, one line, no second line): mark **2.3rem / 36.8px** (≤479px **2rem / 32px**); word **1.5rem / 24px / 600 / lh 1.5 / tracking normal** (≤479px **1.3rem / 20.8px**); nav gap **1.5rem / 24px** (≤479px **1rem / 16px**). Footer uses the same mark and word size, weight **400**, gap **1.2rem / 19.2px**. Not 1.25× — that would be a 46px mark / 30px word / ~342px lockup in the 108px bar. Unboxed: no padding, border, or background.
- Desktop `80em+`: logo left, nav centered, phone + Apply on the right. Top-level 16px, 24px gaps, 12px chevron. Hover and open item use a 1px `currentColor` underline (0.3s). Chevron flips 180° while `aria-expanded`. Apply is Ling’s `.button-040` (Lilac `#f3f2fb` / Martinique `#332a4e`); dark header uses the light variant, white header uses the dark variant. Phone is the real direct line `+1 (917) 245-5277`, styled like a primary nav label (16px/400, inherit color, same 1px underline hover/focus — no button or icon chrome).
- Full-width mega-menu (`top: 100%`) of real pages only: Services (2-col), Industries (2-col), Resources (Blog / Tools / Help + Apply promo), Our Firm (Our Firm / Contact). Column heading 20px/500; links 16px, 16px gaps; 48px pad-top; column-gap **88 / 96px**.
- Resources menu includes the only dropdown feature card (Apply). It follows `.site-header` theme via `--nav-widget-bg` / `--nav-widget-copy`: dark header uses Martinique Darker `#14101f` with white type; light header uses Lilac `#f3f2fb` with `#14101f` type. Learn More + 40px circle-arrow invert with those tokens (no separate card toggle). Title, body, optional eyebrow, link, and button label keep `--nav-widget-copy` at rest and hover so global `h2` / `.arrow-cta:hover` ink cannot fail WCAG AA on either card (4.5:1 body, 3:1 large text / UI). `npm run test:nav` asserts those ratios. No other dropdowns ship a feature card.
- Backdrop: `blur(5px)` + `rgba(20,16,31,.32)` (`--bx-overlay`) on the page overlay only (header and mega-panel stay opaque, `backdrop-filter: none`). Esc closes. `prefers-reduced-motion` drops transitions; overlay blur stays.
- No bottom border, box-shadow, or hairline under the bar (home, inner, scrolled, or menu-open).

### Mobile nav

- Hamburger until `80em` (2.125×1.5rem, lines/cross). Overlay from the bar, scroll lock, accordion sections, 16px chevron. Phone stays on the bar; Apply and phone also sit at the bottom of the drawer.

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
| `.btn-primary` / `.btn-accent` | `#14101f` fill, white type, 13×24, square | `#202020` | Martinique Darker, not purple |
| `.button-040` light | Lilac pill `#f3f2fb`, Martinique type `#332a4e`, Martinique arrow-circle, Lilac arrow | same | Nav on dark header; CTA Apply |
| `.button-040` dark | Inverse of light | same | Nav on white header |
| `.btn-on-dark` | white fill, ink type | tint | |
| `.btn-outline-dark` | 1px grey-ink border | ink fill, white type | Lives in `global.css` |
| `.btn-outline-light` | 1px white | white fill, ink type | |

BX `.bx-button` is a 999px pill, black, 0.3s, yellow focus — **not copied**.

### Home announcement (EARNINGS → testimonial)

Live `blackstone.com` is Cloudflare-blocked in this environment, so 1280/1440 values are the blackstone-v2 `.bx-announcement` rules (Wayback home HTML + `frontend.css`) — the same computed styles `getBoundingClientRect` / `getComputedStyle` would return at `80em` / `90em`. Gutter is **16px**. Container is `--container-width` (1136 / 1264).

| | 1280 (`80em`) | 1440 (`90em`) |
| --- | --- | --- |
| Section pad (`.bx-component-base-padding-*`) | **144px** | **160px** |
| Grid | 16 col, 16px gap | 16 col, 16px gap |
| Eyebrow | cols **1–6**, sans **16px**/0.08em/uppercase (`--fs-16` at 80em; 14px below), rule **56×2px** / gap **24px**, margin-bottom **56px** | same type, rule **64×2px**, margin-bottom **64px** |
| Title (quote) | cols **1–6**, serif 300, **32px**, lh **1.5**, tracking **0.008em** | cols **1–7**, **40px** |
| Image | cols **9–12**, **3:4**, object-fit cover, margin-top 0 | same |
| Right column | cols **14–16**, row-span 2, `justify-content: flex-end`, padding-bottom **48px** | padding-bottom **56px** |
| Right type | body sans 16px (press links on BX) | same |

`.pilot-ann-*` on home only. Copy is `HOME_TESTIMONIALS`: three Ling-supplied quotes, in order, with placeholder credits (`Falcon client`) until real names are confirmed. Credit the business only (no owner name). Typographic quotation marks live in the quote, in Falcon display serif and `--bx-black` (`#14101f`); no `--bx-red`. Prev/next reuse the site `.circle-arrow` (same 2.75rem circle as Services / arrow-cta; prev is mirrored). They sit in the right column, bottom-aligned with the image. With 3+ slides the arrows are enabled and autoplay runs. GSAP SplitText + circular clip-path follow Ling’s timings.

### Link underline draw

`.link`, `.link-draw`, prose `<a>` except buttons: gradient underline, size 0→100% × 1px, 350ms. No `text-decoration` hover (that fought the draw).

### Circle-arrow links

`.arrow-cta` + `.circle-arrow` (44px outline). Hover: circle fills ink, glyph inverts. `.arrow-cta--on-dark` inverts to white fill. Used for “Learn more” / “Apply”.

### Link list (BMACX Explore More)

Home Services only: `.pilot-ll-*` in `PilotLinkList.astro`. Measured from `bmacx.com` `wp-block-blackstone-v2-link-list` / `.bx-link-list` (Wayback `20261001234616`, `blackstone-v2` `frontend.css` + `frontend.js` `tabsscript`).

- **H2:** display light (Falcon serif role). Space before the first row is `--pilot-heading-to-items` — the Life Sciences News heading→cards gap (**40 / 48 / 96 / 104px**). Same token as `.pilot-news-head`.
- **Rows:** full content width. **2px black** rules top and bottom of the stack. Padding **32px** mobile, **40px** ≥768.
- **Desktop 12-col:** title + gray range cols **1–6**; teaser (16px, 2-line clamp) start **8** span 4, top-aligned with the title; circle arrow col **12**, vertically centered.
- **Title:** sans **400**, **24px** mobile / **28px** ≥768, black. Range under the title: **14px**, `--color-muted`, one line, **~1em** below the title.
- **Circle:** BMACX 40×40 SVG (border + arrow + evenodd fill). Rest = outlined circle + black arrow (`fill` opacity 0). Hover/focus = fill opacity 1, arrow opacity 0, icon **scale(1.1666666667)**. Transitions: transform **0.3s**, opacity **0.3s**.
- **Siblings:** list `:hover` / `:focus-within` sets other rows to **opacity 0.36** (BMACX `.bx-link-list__title-animation`). Hovered/focused row stays 1.
- **Bottom line:** each row `::after` is BMACX `.bx-link-list__animated:after` — `border-bottom: solid 2px #000`, `transform: scaleX(0)`, `transform-origin: left`. Hover/focus draws `scaleX(1)` over **0.5s ease-out**. Mouse-out **snaps** `::after` off (`transition: none` at rest) — no reverse draw. While the line runs, the static divider on that edge stays at **40%** black (`rgba(0,0,0,0.4)`) so rows stay split. `prefers-reduced-motion` hides `::after` and leaves the 2px rules in place.
- **A11y:** the whole row is the link; `:focus-visible` is 2px `--color-accent` (not BX yellow); Space activates the row; `prefers-reduced-motion` drops scale, line animation, and transitions.
- Does **not** restyle `.pilot-circle` / `.pilot-arrow`.

### Home Industries (BMACX dropdown + featured panel)

Live `bmacx.com` is Cloudflare-blocked; values from blackstone-v2 `.bx-tabs__dropdown` + `.bx-headers-two` + `.bx-featured-content` (`frontend.css`) at `80em` / `90em`. Home only: `.pilot-tabs-*` in `PilotIndustryTabs.astro`. No card grid. No tab row — a **dropdown at every breakpoint**.

| | 1280 (`80em`) | 1440 (`90em`) |
| --- | --- | --- |
| Section pad | **144px** | **160px** |
| Heading row | 16 col, 16px gap; H2 cols **1–7** serif 300 **32px** / 0.008em; intro cols **10–16** sans 300 **20px** lh 1.5 | H2 cols **1–8** **40px**; intro cols **11–16** |
| Dropdown | Light gray (`--color-tint`) field, in-field “Select your sector” until a sector is chosen, then the sector name (native-select value), 20px, padding **1.5rem**, chevron right, **2px** ink bottom only; cols **1–6** | cols **1–5** |
| Menu | same gray fill + 2px ink bottom; simple hover tint; 12 industry options | same |
| Panel | copy cols **1–6**; image cols **8–16** | copy cols **1–5**; image cols **8–16** |
| Panel title | serif 300 **32px**, pb **32px** | same (40px only at 120em) |
| Panel body | sans **18px**, pb **48px** | same |
| Image | **16:9**, height **22.25rem** (356px), cover | height **24.75rem** (396px) |
| Panel in | `fadeInUp` 0.5s (0 → 40px / opacity 1) | same |

- **12 options**, one per industry name. Picking an option swaps the featured panel (title, existing `blurb`, circle-arrow “Learn more” to `/industries/{slug}`, labeled 16:9 still).
- **A11y:** the field’s accessible name is the visible value (`aria-labelledby` on the button and listbox). Placeholder is “Select your sector”; choosing an option replaces it with that sector’s name and sets `aria-selected` on the option so the selection is announced. `aria-expanded`, `aria-haspopup=listbox`, `aria-controls`. Arrow / Home / End / Escape, visible focus (2px Falcon accent). `prefers-reduced-motion` drops the panel motion.

### Home Why choose us (Private Wealth two-up + tickertape)

Live `blackstone.com` is Cloudflare-gated; values from blackstone-v2 `.bx-two-up-content` + `.bx-tickertape` (`frontend.css` / `frontend.js`) plus `/tmp/bxhero/bxhome.html`. Home only: `.pilot-why-*` in `PilotWhy.astro`. See `docs/refs/bx-private-wealth.md`.

- Dark band `--bx-black` `#14101f`. Eyebrow + short rule, serif H2 left (32 / 40 / 48), indented 18px body, circle-arrow “Learn how it works” → `/how-it-works`.
- Right card (`color-mix(#fff 8%, #14101f)`): three rows, hairlines, decorative circle arrows (not links).
- Giant serif marquee “**Apply** for funding” at 125px/s, whole strip → `/apply`. Pauses under `prefers-reduced-motion`.
- Fine-print footnote for †. Scroll-in uses the headers preset (title / body / CTA / card).

### Cards

- Insights / blog (home): Life Sciences horizontal-static-list (`.pilot-news-*`, `docs/refs/bx-life-sciences-news.md`). Other cards: 16:9 crop, zoom 1.06, square corners, no shadow, category + title.
- No boxed chrome; hairlines or whitespace separate.
- `.tile-card` is tint padding for partner / credit-prep tiles (not a BX card).

### Accordions

- **FAQ** `.bx-accordion`: slate hairline; closed = muted + **outline circle** chevron; open = ink + **filled black circle**, chevron 180°.
- **Credit strategies** `.bx-accordion--strategies`: **black** rules; closed = **plain chevron** (no circle); open = filled circle. Panel ~50% width ≥1024, square bullets, amount/term line, two arrow CTAs.
- Height: `grid-template-rows: 0fr / 1fr`. Shared binder: `src/scripts/accordion.ts`.

### Stats

Home uses `.pilot-stats-*` (`PilotStats.astro`) matching Tac Opps featured stats (measured 1440 / 1280; `docs/refs/bx-tac-opps-stats.md`). MCA and industry landings keep `HeroStats`.

- **Home grid (16 col, 16px):** featured cols **1–8**; gap col 9; side 1 cols **10–12**; gap col 13; side 2 cols **14–16**. Featured spans both rows so small labels align to the **top** of the featured label.
- Featured label: sans 300, **24px** / **32px** from 768, lh 1.5. Featured value: display 300, **5rem / 11rem / 9rem / 10rem**, margin-top **40 / 56 / 56 / 64px**, lh **1.4** (224px at 1440).
- Side labels: sans 300 **16px**, lh 24, margin-bottom **32px**. Side values: **40px** at 1280 / **48px** at 1440, padding-bottom **16px**, **1px** black rule under the number.
- Section pad: **48 / 144** at 1280, **56 / 160** at 1440.
- Home featured figure is **`24-48h` Average funding time**; sides are **`$100M+` Funding deployed** then 98% for qualified applicants.
- No footnote superscripts, Note, or numbered list. Skip when amounts are non-numeric (`Tailored to your business`).

### Quote

`.pilot-quote` on **About** (moved off home): BREIT split, 3:4 portrait cols 1–4, quote start 6 span 7, **sans** light, name 700 small, role muted, bottom-right. Credit **Dwight Holly, Founder & CFO**. Live Dwight copy only. `.quote-split` remains in `blackstone.css` unused on About.

### Tables / charts

`.chart-table`: CHART | TABLE tabs, uppercase, ink underline on selected. Bars = published ranges only. `.r-table`: hairline cells; stacked blocks &lt;768 with `data-label`. No vertical rules on the performance table.

### CTA band

Sitewide pre-footer wheel (`.site-cta`) sits in `BaseLayout` directly above the footer. Band background is `--color-surface-dark` (same token as the footer: Martinique Darker `#14101f`). Modeled on Govwell’s `.section_cta`: sentence “Need funding to” + eight rotating phrases (purchase inventory, cover payroll, expand or renovate, launch marketing campaigns, stabilize cash flow, upgrade equipment, hire more employees, consolidate business debt), both Inter / body (no “for your business” tail). Screen-reader heading lists them in that order with “or” before the last. Pitch is **4.5rem** (1.5× the prior 3rem) in a 7-line wrap so the active line shares a baseline with the lead. Plain white on the active line, `#636363` on lines above, white/50 on the rest. Apply is Ling’s `.button-040` light variant (Lilac pill, Martinique type and arrow-circle) → `/apply`. `prefers-reduced-motion` collapses to a static line. Blog still uses the Insights split (`.insights-cta`) with a circle-arrow in-page; that is not the old Get-funding band.

### Footer

Martinique Darker band (`--color-surface-dark`), white type. Falcon lockup top-left (cols 1–4 of 16). Two columns on the right — Quick Links and Get in Touch. The X profile sits in Get in Touch as a text link (`site-footer__link`), not a separate Social column. Real Falcon URLs only (X is the only social; no invented LinkedIn/Instagram). Thin 1px white rule, then copyright + Privacy / Terms. Measured from Blackstone `.site-footer` at 80em / 90em (`docs/refs/bx-footer.md`). The Govwell-style `.site-cta` wheel sits immediately above this footer. The previous footer had no funding/broker disclaimer; none added.

### Forms

BX: floating 14px light label, 16px inset, focus lifts label, error `#ea4334`. Falcon apply uses Jotform embed (untouched). Loan calculator `.lc-*` stays page-local (range + result), using ink/tint/white on the dark hero.

---

## Falcon exceptions (do not “fix” toward BX)

1. Fonts: At Gambit + Inter.
2. Buttons: black squares (not BX pills / yellow focus). Prefer circle-arrow text links in body copy. Exception: nav Apply and the pre-footer `.site-cta` use Ling’s `.button-040` pill (sliding text + arrow-circle). Light on dark surfaces, dark on the white header. No purple.
3. `.btn-outline-dark` stays in `global.css`. No purple fills.
4. No fabricated people, quotes, numbers, or testimonials. Home testimonials are the three Ling-supplied quotes; placeholder credits (`Falcon client`) stay marked until real names are confirmed.

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
| Home (pilot) | 1 hero (`hero-meeting.webp`, advisor with two clients at a table); testimonial stills (three abstract placeholders); 12 industry 16:9 **labeled** stills (one visible in the dropdown panel); 3 published insight covers | Process (removed), services list — type only. Pre-footer `.site-cta` wheel is layout chrome. Founder quote lives on About. Do not reuse the falcon still. |
| Inner landing (FAQ, apply, legal, 404, calculator) | 0 | No decorative hero |
| Service landing (MCA pilot) | Hero still + What we do 3:4 **labeled** placeholder (not a second crop of the hero) | Overview accordion, process, FAQ — type only. Pre-footer `.site-cta` comes from the layout. |
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
| `src/styles/global.css` | Fonts, Tailwind `@theme`, base type, ink buttons |
| `src/components/Header.astro` | Sitewide Blackstone header: live SVG mark + At Gambit wordmark, 80em mega-menus of real pages, home dark / inner light, Apply promo card, blur+dim backdrop. Open menus use a 1px `#d5d8df` container-width divider; panel content shares `--bx-max` with the logo/Apply row. Measures in `docs/refs/bx-header.md`. |
| `src/components/Button040.astro` | Ling button-040: pill with sliding text and arrow-circle. `href`, `label`, `variant` (`light` on dark, `dark` on white). Nav follows header theme. |
| `src/components/SiteCta.astro` | Sitewide pre-footer wheel above the footer. Govwell structure, Falcon copy (no tail), Inter lead and phrases, 4.5rem pitch, white active line, button-040 Apply. |
| `src/components/Footer.astro` | Sitewide Blackstone footer: logo left, Quick Links / Get in Touch (X in that list), 1px rule, copyright + Privacy / Terms. Measures in `docs/refs/bx-footer.md`. |
| `src/components/HeroStats.astro` | Scoped BXCI featured stats (`.stats-bx`). MCA and industry landings. |
| `src/components/pilot/PilotStats.astro` | Home Tac Opps featured stats on the 16-col grid. |
| `src/styles/blackstone.css` | Grid utilities + components for non-pilot pages |
| `src/styles/pilot.css` | Namespaced `.pilot-*` layer for `/` and `/services/merchant-cash-advance` |
| `src/components/pilot/PilotHero.astro` | Home hero, Ling-approved BX measures (80em / 90em fixed steps, no clamp). Scoped 16-col / 16px grid. H1 64/72 nested-8, line 2 indent 1/2 cols. Aside cols 11–16 `align-self:end`. Image in container 487/542 (`hero-meeting.webp` advisor + two clients, AVIF/WebP, object-position 50% 40%). Caption top-aligned: title cols 1–7/1–8, body 456/504 flush right, “Apply for funding” 18px + 40px circle / 44px tall. |
| `src/components/pilot/PilotPageHero.astro` | Inner-page hero: H1 span 7, lead span 5, one 16:9 still |
| `src/components/pilot/PilotEyebrow.astro` | Left = 48×2px rule to the right; `align="center"` = rule above the label |
| `src/components/pilot/PilotArrow.astro` | Circle-arrow + drawn underline (350ms). `tone="light"` inverts the hover fill |
| `src/components/pilot/PilotLinkList.astro` | Home Services rows: title + gray range cols 1–6 (**~1em** under the title), teaser start 8 (16px, 2 lines), circle arrow col 12 centered. Heading→list gap is `--pilot-heading-to-items` (same as Insights). Hover: hovered row black + filled circle; siblings 36% opacity. Icon scale 1.1667 and fill/arrow opacity **0.3s**. Bottom `::after` draws `scaleX` 0.5s ease-out, origin left; mouse-out **snaps** off (no reverse). Static divider under the draw stays **40%**. **2px** rules. Focus-visible: 2px ink. Reduced-motion: no scale/transitions. |
| `src/components/pilot/PilotTestimonial.astro` | Home EARNINGS-style announcement slider: eyebrow + serif quote left (typographic quotes in ink), 3:4 still cols 9–12, business name above prev/next in cols 14–16, `.circle-arrow` buttons bottom-aligned with the image (prev mirrored). Three Ling quotes; all credits are `Falcon client` placeholders. |
| `src/data/home-testimonial.ts` | Home testimonial copy (`HOME_TESTIMONIALS`: three Ling quotes; TODO to confirm the real credits). |
| `src/scripts/testimonial-slider.ts` | GSAP 3.15 SplitText line-mask + image clip-path, autoplay 5s (paused out of view; off when one slide), ArrowLeft/Right, reduced-motion crossfade. |
| `src/scripts/scroll-in.ts` | Home scroll-in below the hero (BXCI measures). Headers/body `y:20` 800/400; stats Fade-In + data-text + line; news curtain. Skip hero / testimonial / CTA. |
| `src/components/pilot/PilotIndustryTabs.astro` | Home Industries: Industries eyebrow + heading/intro split, light-gray listbox (placeholder then selected sector name), featured panel (title + blurb + Learn more / 16:9 still). |
| `src/components/pilot/PilotNews.astro` | Home Insights from Life Sciences horizontal-static-list. Measured 1440 / 1280. Heading→cards uses `--pilot-heading-to-items` (shared with Services). |
| `src/components/pilot/PilotWhatWeDo.astro` | BXCI black band: H2 span 10, 3:4 portrait cols 1–6, stacked items start 8 |
| `src/components/pilot/PilotImageCard.astro` | Insights 16:9 card: zoom 1.06, category kicker (no 48px rule), title draw, optional body |
| `src/components/pilot/PilotProcess.astro` | Three numbered columns, type only |
| `src/components/pilot/PilotQuote.astro` | BREIT split: 3:4 portrait span 4, sans-light quote start 6 span 7, name/role bottom-right |
| `src/components/pilot/PilotAccordion.astro` | FAQ (slate hairline, outline→filled circle) or `variant="strategies"` (black rules, plain chevron closed) |
| `src/components/Media.astro` | Real asset or labeled placeholder |
| `docs/blackstone-design-notes.md` | Earlier pass notes; this file is the system |
| `docs/refs/bx-scroll-in.md` | Measured BXCI / blackstone-v2 scroll-in values (GSAP start, durations, curtain, stats). |
| `docs/redesign/content-home.md` | Approved home copy outline |
| `docs/redesign/content-merchant-cash-advance.md` | Approved MCA copy outline |

### Pilot pages

**Home** (`/`): Blackstone promo-header + carousel hero (static falcon; H1 `Fuel Success with` / `Fast Funding` 64/72 with nested-8 offset; aside “Unlock rapid financial solutions tailored to your business needs.”, cols 11–16 end-aligned) → Tac Opps featured stats (`24-48h` big; `$100M+` and 98% for qualified applicants on the right, 16-col) → **Services** rows (title + range ~1em under the title cols 1–6, teaser start 8, circle arrow col 12; sibling-hover 36%; 2px rules; bottom line draws `scaleX` 0.5s ease-out and snaps off on mouse-out, static divider 40% while drawing) → **Testimonial** slider (EARNINGS layout; three Ling quotes, `Falcon client` placeholder credits, abstract stills; arrows enabled) → **Industries** (Industries eyebrow + “Sectors we fund.”; light-gray “Select your sector” field with 2px bottom; panel = title + blurb + Learn more / labeled 16:9 still) → Life Sciences-style Insights (`PilotNews`, 3 published posts) → layout `.site-cta` wheel above the footer. No Process. No Explore more. Founder quote is on About.

**Merchant Cash Advance** (`/services/merchant-cash-advance`): inner hero → BXCI What we do (uses, labeled 3:4) → product stats → Overview strategies accordion (Who / Amounts / Terms / Requirements from the live spec, plus remittance) → process → FAQ. Pre-footer `.site-cta` comes from the layout. Other service URLs still use `src/pages/services/[slug].astro`.
