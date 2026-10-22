# Falcon Equity design system

Ling approved the current home page as-is. This file is the **single source of truth** for visual and content rules on every new page. Tokens live in code (`src/styles/tokens.css`, Tailwind `@theme` in `src/styles/global.css`). Shared components are the Astro files listed below. Do not invent a second palette, type scale, or CTA.

When this file and a mapping note disagree, **this file wins**. Blackstone / Goldman notes in `docs/` are provenance, not the Falcon system.

**Do not change the home page’s appearance to “match” this document.** Home is the spec. New pages consume these tokens and components.

---

## How to use it

| Need | Use |
| --- | --- |
| Color, type, space, grid | CSS custom properties in `src/styles/tokens.css`. Tailwind utilities from `@theme` in `src/styles/global.css` (`bg-martinique`, `text-lilac`, `text-ink-a72`, `p-bx-24`, `text-h2`, …). |
| Home / MCA layout | Namespaced `.pilot-*` in `src/styles/pilot.css` + `src/components/pilot/`. |
| Site chrome | `Header`, `Button040`, `SiteCta`, `Footer`, `.container-site`, `.bx-grid`. |
| Product figures | `src/data/services.ts` (`ServiceSpec`). Copy amounts and terms **word for word**. |
| Confirmed stats | `src/data/site.ts` `STATS` only. |
| Home quotes | `src/data/home-testimonial.ts` only. |

Do **not** add hex greys, reds, extra typefaces, or a parallel spacing scale. Do **not** override Tailwind’s numeric `--spacing-8` (that is 2rem); Falcon’s 8px scale is `--bx-space-*` / `p-bx-8`.

---

## Non-negotiable rules

1. **Palette.** Solids are **white (`#ffffff`, kept because home uses it)** plus the Martinique and Lilac ramps below. No reds. No cool greys as hex. Error states use **Martinique** (`--color-error`). `#000` / `#0000` appear only inside `mask-image` gradients on `.site-cta__wheel` (`src/styles/blackstone.css`) — masks, never painted colour, and the only allowed pure-black exception.
2. **No fabricated numbers, quotes, names, or testimonials.** Publish only Ling-confirmed stats, the three home quotes, and service specs from the live `#services` block (in code: `src/data/services.ts`). Placeholder credits stay `Falcon client` until real business names are confirmed. Do not invent owner names, portraits, dollar results, rates, or a customer-satisfaction figure.
3. **Nothing near a CTA may give the user second thoughts.** No disclaimer, footnote, asterisk, or legal line under Apply, the Why marquee, the hero caption, or `.site-cta`. Legal copy belongs in the **footer** (`src/components/Footer.astro`).
4. **Service numbers are copied word for word** from the live home `#services` spec (Who / Amounts / Terms / Requirements). See [Service figures](#service-figures-from-services). Do not round, convert en-dashes, or rewrite ranges.
5. **Links inherit** the surrounding text color. Never purple, never a separate link hue.
6. **Prefer existing components** over new ones. New pages compose Header, Footer, SiteCta, Button040, Media, Pilot\* patterns, ResponsiveTable.
7. **Decorative elements must not look clickable.** Steps use **numbers**, not arrows (see Why choose us). Circle-arrows and 040 pills are the clickable wayfinding; rules, step numerals, and stills are not.
8. **Divider rules survive animations.** Static 2px (services) and 1.5px (Why rows) rules stay in place while a hover draw runs and after it snaps off. Do not hide or restyle the standing rule to make the animation work.
9. **Testimonials are real quotes only.** They must fit on one screen; trim for length rather than shrinking type or stacking a second screen of quote. No invented quotes, names, or amounts.
10. **Scroll-ins start early, are staggered, and follow reading order.** Default start is `top 90%`; stagger is 400ms (150ms per services row). Controls play before content (`data-reveal-after` on the following block). Skip hero, testimonial slider, and the CTA wheel.
11. **Styling is learned from the home page only.** Do not restyle toward Goldman or Blackstone. Mapping notes in `docs/` are provenance.
12. **Never invent facts or numbers.** If a figure, name, quote, rate, or testimonial is not in `src/data/` (or the live `#services` spec), it does not ship.

---

## Color

Defined in `src/styles/tokens.css`. Tailwind `@theme` aliases the same names so utilities exist (`bg-martinique`, `text-lilac-darker`, `border-ink-a16`, `text-error`).

### Solids (the only fills)

| Token | Hex | CSS | Tailwind | Use |
| --- | --- | --- | --- | --- |
| White | `#ffffff` | `--color-white` / `--bx-white` | `bg-white` / `text-white` | **Allowed.** Page, light type on dark, square on-dark buttons. Home uses it. |
| Martinique | `#332a4e` | `--color-martinique` / `--bx-martinique` | `bg-martinique` | Button-040 dark pill, light-variant type and arrow circle, **errors** |
| Martinique Dark | `#28213e` | `--color-martinique-dark` | `bg-martinique-dark` | Soft ink, square-button hover, default 040 arrow fill |
| Martinique Darker | `#14101f` | `--color-martinique-darker` / `--bx-black` | `bg-martinique-darker` / `bg-ink` | Site black: header/hero/footer/CTA band, body ink, square buttons |
| Martinique Darkest | `#0f0c17` | `--color-martinique-darkest` | `bg-martinique-darkest` | Ink in alpha greys (`--ink-a*`). Do not swap in for Darker fills |
| Martinique Light | `#524a68` | `--color-martinique-light` | `text-martinique-light` / `text-muted` | Muted copy on light |
| Martinique Lighter | `#605a7b` | `--color-martinique-lighter` | `text-martinique-lighter` | CTA wheel “past” lines, `--color-brand-light` |
| Martinique Lightest | `#696286` | `--color-martinique-lightest` | `text-martinique-lightest` | **Approved, not on home.** |
| Lilac lightest | `#fdfdfe` | `--color-lilac-lightest` | `bg-lilac-lightest` | **Approved, not on home.** |
| Lilac lighter | `#fcfcfe` | `--color-lilac-lighter` | `bg-lilac-lighter` | **Approved, not on home.** |
| Lilac Light | `#f6f5fc` | `--color-lilac-light` | `bg-lilac-light` | Soft washes, Industries field + list |
| Lilac | `#f3f2fb` | `--color-lilac` | `bg-lilac` / `bg-tint` | Tints, button-040 light pill |
| Lilac Dark | `#e5e4f2` | `--color-lilac-dark` | `bg-lilac-dark` | Light-nav divider, unselected Industries hover |
| Lilac Darker | `#c4bfe1` | `--color-lilac-darker` | `bg-lilac-darker` / `border-line` | Hairlines, Apply arrow circle on dark 040, selected Industries row |
| Lilac darkest | `#a6a0c3` | `--color-lilac-darkest` | `bg-lilac-darkest` | **Approved, not on home.** |

`--color-error` **is** `--color-martinique`. Do not introduce `#b80000`, `#ea4334`, or any red.

### Greys (named alpha only)

Do not pick a new grey. On **light** surfaces, mix **Martinique Darkest** `rgb(15 12 23 / X%)`. On **dark** surfaces, mix **white**.

| Token | Value | Typical use |
| --- | --- | --- |
| `--ink-a72` / `--color-ink-a72` | `rgb(15 12 23 / 0.72)` | Strong secondary on light |
| `--ink-a65` | `rgb(15 12 23 / 0.65)` | |
| `--ink-a63` | `rgb(15 12 23 / 0.63)` | |
| `--ink-a40` / `--color-ink-a40` | `rgb(15 12 23 / 0.4)` | Services hover: standing divider at 40% while the draw runs |
| `--ink-a36` | `rgb(15 12 23 / 0.36)` | `--bx-grey-300`, `.btn-outline-dark` border |
| `--ink-a32` / `--bx-overlay` | `rgb(15 12 23 / 0.32)` | Nav page overlay |
| `--ink-a16` | `rgb(15 12 23 / 0.16)` | Hairline on light |
| `--ink-a9` | `rgb(15 12 23 / 0.09)` | |
| `--ink-a4` | `rgb(15 12 23 / 0.04)` | |
| `--ink-a3` | `rgb(15 12 23 / 0.03)` | Whisper wash |
| `--white-a88` / `--bx-on-dark` | `rgb(255 255 255 / 0.88)` | Body on dark |
| `--white-a82` / `--bx-on-dark-muted` | `rgb(255 255 255 / 0.82)` | Secondary on dark |
| `--white-a50` | `rgb(255 255 255 / 0.5)` | CTA wheel inactive lines |
| `--white-a34` | `rgb(255 255 255 / 0.34)` | |
| `--white-a16` / `--bx-on-dark-rule` | `rgb(255 255 255 / 0.16)` | Rules on dark |
| `--white-a12` | `rgb(255 255 255 / 0.12)` | |

`--bx-overlay` is `--ink-a32` (`rgb(15 12 23 / 0.32)`) for the nav page overlay only. Do not mix Darker (`#14101f`) into alphas — Darkest (`#0f0c17`) on light, white on dark.

**Mask exception:** `.site-cta__wheel` uses `#000` / `#0000` inside `mask-image` / `-webkit-mask-image` only (`src/styles/blackstone.css`). Those stops are never painted. Do not use `#000` as a fill.

### Semantic (do not retarget)

| Token | Resolves to | Use |
| --- | --- | --- |
| `--color-ink` | Darker | Headings, square button fill |
| `--color-ink-soft` | Dark | Body |
| `--color-muted` | Light | Range lines, table labels |
| `--color-line` | Lilac Darker | Hairlines |
| `--color-tint` | Lilac | Panels, image fallback |
| `--color-accent` / `--color-cta` / `--color-surface-dark` | Darker | Focus ring, featured, footer/CTA band |
| `--color-accent-hover` | Dark | Square button hover |

**Don’t** use Goldman purple, BX yellow, or hex `#666` / `#f7f7fa`. **Don’t** use Darkest as the page black — Darker is site black.

---

## Type

**Headings:** At Gambit (`--font-display` / `--font-heading`), weights 300 / 400 / 600 / 700. Manrope covers glyphs outside At Gambit’s `unicode-range` (`$ % & ' " + / ( )` en-dash, …).  
**Body, UI, buttons, quotes, nav, tables:** Archivo variable (`--font-sans` / `--font-body`) with metric-matched Arial fallback.  
Faces are registered in `src/styles/global.css`. Do not add a third family.

Base body is **16px / 24px** (`--type-body-size` / `--type-body-lh`). Do not bump body to 18px.

Letter-spacing is **normal** on titles unless a pattern sets `0.008em` (home hero / some section titles). Eyebrows are `0.08em` uppercase.

### Roles (global base)

Wired in `src/styles/global.css` `@layer base` from `--type-*` in `tokens.css`. Home hero **overrides** H1/H2 locally.

| Role | Family | Weight | Size (mobile → 768 → 1440) | Line-height | Tracking | Token |
| --- | --- | --- | --- | --- | --- | --- |
| **H1** inner page | display | 300 | `clamp(2.75rem, 8.83vw + 0.6rem, 6.25rem)` | 1 | normal | `--type-h1-*` |
| **H2** section | display | 300 | 32 → 40 → 48px | 1.25 | normal | `--type-h2-*` (`text-h2`) |
| **H3** | display | 400 | 24px | 1.25 | normal | `--type-h3-*` (`text-h3`) |
| **H4** | display | 500 | 20px | 1.2 | normal | `--type-h4-*` |
| **H5 / H6** | sans | 500 | 16 / 14 | 1.4 | normal | `--type-h5-*` / `--type-h6-*` |
| **Body** | sans | 400 | 16px | **1.5rem (24px)** — a length, not a unitless 1.5 | normal | `--type-body-*` (`text-body`) |
| **Lead** | sans | 400 | 16px | 1.6 | normal | `--type-lead-*` (`text-lead`) |
| **Eyebrow** | sans | 400 | 13px | 1.5 | 0.08em, uppercase | `--type-eyebrow-*` (`text-eyebrow`). Rule: **48×2px**, 16px from the label, **to the right** (`.pilot-eyebrow--line::after` in `src/styles/pilot.css`). Centered headings: rule **above**. |
| **Caption / meta** | sans | 400 | 14px | 1.45 | normal | `--type-caption-*` |
| **Button 040** | sans | 400 | 16px default; nav 17px | 1 | normal | `.button-040` |
| **Square button** | sans | 500 | 16 / 20 | 20px | normal | `.btn-primary` |
| **Nav label** | sans | 400 | 16px | 1 | normal | `.site-header` |

Scale primitives (`--bx-fs-12` … `--bx-fs-176`) stay in `tokens.css` for component CSS.

### Home-only type (do not reuse as the site H1)

`src/styles/pilot.css` `.pilot-hero`. Fixed steps, no clamp, tracking `0.008em`.

| Role | &lt;48em | 48em | 80em (1280) | 90em (1440) | LH |
| --- | --- | --- | --- | --- | --- |
| Hero H1 | 32px | 48px | **64px** | **72px** | 1 |
| Hero aside | 16px / 300 | 18px | 20px | 24px | 1.5 |
| Caption H2 | 24px | 28px | 32px | 40px | 1.5 |
| Caption body | 16px / 300 | 18px | 18px | 20px | 1.5 |
| Caption CTA | 18px label, 40px circle | same | same | same | 1.5 |
| Stat featured label | 24px / 300 | 32px from 768 | 32px | 32px | 1.5 |
| Stat featured value | 5rem | 11rem from 768 | 9rem | 10rem | 1 |
| Stat side label | 16px / 300 | 16px | 16px | 16px | 24px |
| Stat side value | 40px | 32px (768) | 40px | 48px | 1 |
| Services row title | 24px / 400 | 28px from 768 | 28px | 28px | — |
| Services range | 14px muted | 14px | 14px | 14px | — |
| Quote | display 300 | 32px at 80em | 32px | 40px | 1.5 / 0.008em |

**Do:** use `--type-h2-*` for new section titles. **Don’t:** copy the home hero clamp or 64/72 H1 onto inner pages unless the pattern is a home-scale promo header.

---

## Spacing and section rhythm

8px scale in `tokens.css`: `--bx-space-8` (0.5rem) through `--bx-space-120` (7.5rem). Tailwind: `p-bx-24`, `gap-bx-40`, … **not** `p-8` (that is Tailwind 2rem).

| Role | Token | Mobile | 768 | 1280 | 1440 |
| --- | --- | --- | --- | --- | --- |
| Home / CTA band pad | `--pilot-section-y` (`p-section`) | 80px | 96px | 144px | 160px |
| Same-bg follower (collapse) | `--pilot-section-y-stack` (`p-section-stack`) | 40px | 40px | 48px | 56px |
| Inner-page section | `--bx-section` | 64px | 88px | 120px | 120px |
| Heading → list/cards | `--space-head-to-content` (`--pilot-heading-to-items`) | 72px | 72px | 96px | 104px |
| Eyebrow → H2 | `--bx-space-40` | 40px | 40px | 40px | 40px |
| Outer margin | `--bx-margin` | 15px | 40px | 40px | **80px** |
| Gutter | `--bx-gutter` | 16px | 24px | 24px | 24px |
| Header | `--bx-header` | 102px | 108px | 108px | 108px |
| Hairline | `--bx-rule` | 1px | | | |
| Eyebrow rule | `.pilot-eyebrow--line::after` | **48×2px**, 16px gap, `currentColor` | same | same | same |
| Why row rules | `.pilot-why-row` | **1.5px** `--bx-on-dark-rule` (`--white-a16`) under rows 1–2 (`1.5px` / `0.094rem`) | same | same | same |

Home bands use `[data-band="light"|"dark"]`. Adjacent bands of the **same** theme collapse the follower’s top pad to `--pilot-section-y-stack` (`src/styles/blackstone.css`). Different-theme neighbors keep full pad on both sides.

**Do:** mark every full-width band with `data-band`. **Don’t:** add extra padding because a section “needs air” — use the tokens. **Don’t** put a disclaimer under a band to fill space.

---

## Containers and grid

`.container-site` (`src/styles/blackstone.css`):

```
max-width: calc(var(--bx-max) + 2 * var(--bx-margin));
padding-inline: var(--bx-margin);
margin-inline: auto;
```

| Viewport | `--bx-max` | Columns |
| --- | --- | --- |
| default | 20.5rem | 4 |
| 26em | 23rem | 4 |
| 768 | 43rem | 8 |
| 1024 | 71rem | 12 |
| 1440 | **79rem (1264px)** | 12 |
| 1920 | 103rem | 12 |

At 1440 the shell is 80 + 1264 + 80. Home hero / stats / services / industries use a **scoped 16-col / 16px** grid inside `.pilot-*`; the site `.bx-grid` stays 12 / 24 from 1024.

**Span rule:** `grid-column-end: span N` and `grid-column-start` separately (`.bx-lg-span-*` / `.bx-lg-start-*`). Never `grid-column: span N`. Full bleed: `.bx-full` (`1 / -1`).

Header inner **drops the content cap** from 375px–48em so logo + Apply + hamburger share the viewport (`src/styles/blackstone.css`).

---

## Buttons and CTAs

### Button 040 (primary Apply)

**Where:** `src/components/Button040.astro`, `src/styles/button-040.css`. Ling structure: in-flow ghost icon + translated text pill + absolute duplicate circle.

| Variant | Pill | Type | Arrow circle | Arrow | Where |
| --- | --- | --- | --- | --- | --- |
| `light` | Lilac `#f3f2fb` | Martinique | Martinique | Lilac | Dark header, `.site-cta` |
| `dark` | Martinique `#332a4e` | Lilac | Lilac Darker `#c4bfe1` | Martinique | White header, drawer Apply |

Root control fill is `transparent` (not `#0000`). Hover (fine pointer, motion allowed): ghost circle scales in from the left, duplicate scales out, text translates to rest, arrow rotates 0°. `prefers-reduced-motion` skips the swap.

**Do:** one Apply per band; label **Apply for funding** (accessible name always the full phrase). **Don’t:** put a square `.btn-primary` next to 040. **Don’t** add a second CTA in the hero.

### Nav Apply rules (current, required)

**Where:** `src/components/Header.astro`, `src/styles/blackstone.css` (`.site-header__apply--bar`), `src/styles/button-040.css`.

Apply stays on the bar as long as it fits. Drop chrome in this order:

| Width | Phone | Apply |
| --- | --- | --- |
| **&lt; 375px** (`&lt; 23.4375em`) | In the drawer | **In the drawer**, sticky at the **top** of the menu, full label + icons. Never at the end of the list. |
| **375px – 33em** (528px) | Drawer only | **On the bar**, extra-compact. Visible label **`Apply`**. **No arrow** (both `.button-040__icon-wrap` hidden) so the word is fully readable in ~70px. `0.75rem` / `2.5em` height / `0.85em` pad. Zero the `--button-040-translate-x` token only — do not set `translate` on `.button-040__text-wrap` (that beats the hover slide). Drawer Apply hidden. |
| **33em – 38em** (528–608px) | Drawer only | **On the bar**, compact **full** label `Apply for funding`, icons restored, `0.875rem` / `2.5em` / `0.85em`. Same 040 markup and hover slide as SiteCta. |
| **≥ 38em** | Drawer until 50em | On the bar at nav size: `1.0625rem` / `3em` / `1.25em`. |
| **≥ 50em** (800px) | **On the bar** (16px, inherit, 1px underline, no icon) | On the bar. Extra `0.7em` between phone and pill. |
| **≥ 90em** | On the bar | On the bar with desktop nav. |

Hamburger until `90em`. Opening a menu locks page scroll without `overflow: hidden` on html/body. Drilled mobile submenus: reset scroll on open, clip overflow-x, overflow-y auto, hide the covering drawer CTA while drilled.

**Do:** keep extra-compact **without** the arrow at 375–33em. When the arrow is visible, keep Ling’s original 040 internals (ghost icon + translated pill + duplicate circle) so hover matches SiteCta. **Don’t:** overlap Apply with the logo or hamburger. **Don’t** hide Apply before the phone. **Don’t** wrap the header row. **Don’t** set `translate` or collapse the ghost wrap on `.site-header__apply--bar` — those overrides beat the hover slide.

### Square buttons (secondary)

`.btn-primary` / `.btn-accent` in `src/styles/global.css`: Darker fill, white type, 13×24, square, Dark hover. `.btn-on-dark`: white fill. `.btn-outline-dark` / `.btn-outline-light`: 1px border. Prefer **circle-arrow text links** in body copy; squares are the exception.

### Circle-arrow / Learn more

`.arrow-cta` + `.circle-arrow` (`src/components/CircleArrow.astro`, `src/components/pilot/PilotArrow.astro`). 44px outline (hero caption 40px circle / 44px tall). Hover: circle fills ink, glyph inverts. Drawn underline 350ms. Accessible name describes the destination (`{Industry} funding`, not “Learn more”).

### Site CTA band

**Where:** `src/components/SiteCta.astro`, styles in `src/styles/blackstone.css`. In `BaseLayout` above the footer on every page.

Darker band. Lead **Need funding to** + eight phrases (purchase inventory, cover payroll, expand or renovate, launch marketing campaigns, stabilize cash flow, upgrade equipment, hire more employees, consolidate business debt) in At Gambit light. Active line white; past lines Martinique Lighter; rest `--white-a50`. Apply is 040 **light**, larger than nav (1.375 / 1.5 / 1.75 / 1.875rem at 0 / 48em / 80em / 90em, height 3em). Hold 1200ms + ease 400ms. Reduced motion: static first phrase.

**Don’t** put a footnote under this band.

---

## Cards

No boxed chrome, no drop shadow, square corners.

| Pattern | Where | Anatomy | Do / don’t |
| --- | --- | --- | --- |
| Insights / blog | `PilotNews.astro`, `PilotImageCard.astro` | 16:9 still, title, optional excerpt, Read More + 40px circle. Hover zoom **1.06**. | Category kicker allowed; no date on the card. |
| Service row (home) | `PilotLinkList.astro` | Not a card: full-width row, title + range, teaser, circle. | See Services pattern. |
| Tile | `.tile-card` | Lilac padding, no photo required. | Partners / credit-prep only. |
| Quote still | `PilotTestimonial.astro` | 3:4 cover crop. | Real Ling stills; no invented portraits. |
| Industry panel | `PilotIndustryTabs.astro` | 16:9 still, Lilac Dark fill behind crop. | One visible still; others lazy. |

---

## Section patterns (home)

Home composition: `src/pages/index.astro`. Chrome (header / SiteCta / footer) comes from `src/layouts/BaseLayout.astro`.

### Header

**Where:** `src/components/Header.astro`, `src/styles/blackstone.css`, `src/scripts/nav.ts`.  
Fixed bar, spacer below. The home nav stays **dark until the hero has fully passed out from under the nav**: `IntersectionObserver` on `[data-home-hero]` uses `threshold: 0` and `rootMargin` equal to the visible bar height (`nav.ts`), and the bar is dark while the hero’s bottom edge is still at or below the bar’s bottom. Inner pages: white bar, ink type. Logo: live lockup (`src/components/Logo.astro`) — mark `currentColor` + “Falcon Equity Group” in At Gambit. Mega-menus of real pages only. Overlay: `blur(5px)` + `--bx-overlay` (`--ink-a32`). No hairline under the bar.

Top-level items: Services, Industries, **How It Works** (plain link to `/how-it-works`, no dropdown), Resources, Our Firm. Adding How It Works is the only allowed home-page change.

**Do:** phone `+1 (917) 245-5277` from `src/data/site.ts`. **Don’t:** invent social links in the nav.

### Hero banner

**Where:** `src/components/pilot/PilotHero.astro`, `.pilot-hero` in `src/styles/pilot.css`.  
Darker band. Two-line H1 (“Fuel Success with” / “Fast Funding”); line 2 indents on a nested 8-col from 80em. Aside end-aligned cols 11–16. Full-bleed still **out of** `.container-site` (viewport width, `overflow-x: clip`). Box **1800 / 771** from 48em; 16:9 below 48em with `object-position: 30% 50%` so the perched falcon stays in frame. Only this image is `fetchpriority=high`. Caption: H2 + body + circle-arrow “Apply for funding” → `/apply`. Copy stays in `.container-site`.

**Do:** one still, one CTA. **Don’t:** stack a disclaimer under the caption. **Don’t** use a flying-falcon alt — the photo is a perched peregrine.

### Stats

**Where:** `src/components/pilot/PilotStats.astro`, `STATS` in `src/data/site.ts`.  
Featured **`24-48h` / Average funding time**. Sides **`$100M+` / Funding deployed** then **`98%` / Approval for qualified applicants**. 16-col grid from 48em; labels top-aligned; 1px ink rule under side values. Other confirmed stats (`15` Years, `300+` Businesses helped) exist in `STATS` but are **not** on home.

**Do:** pull from `STATS`. **Don’t:** add a footnote, superscript, or extra metric. **Don’t** invent a satisfaction score.

### Services (`#services`)

**Where:** `src/components/pilot/PilotLinkList.astro`, `getHomeServices()` in `src/data/services.ts`.  
Eyebrow **Services** + H2 “How we can bring you victory.” Heading→rows = `--pilot-heading-to-items`. 2px ink rules. Row: title + muted `rangeLine` (~1em under title) cols 1–6; teaser start 8 (16px, 2-line clamp); circle col 12. Hover: siblings opacity 0.36; bottom line draws `scaleX` 0.5s ease-out and **snaps** off. Reduced motion: static 2px rules.

#### Service figures (from `#services`)

Copy **exactly** — including spaced en-dashes. Source: `ServiceSpec` in `src/data/services.ts`. Home `rangeLine` is `{amounts} · {terms}`.

| Product | Amounts | Terms |
| --- | --- | --- |
| Collateral & Asset Loans | `$10,000 – $1,000,000` | `12 – 60 months` |
| Business Line of Credit | `$10,000 – $500,000` | `Revolving` |
| Merchant Cash Advance | `$5,000 – $5,000,000` | `3 – 18 months` |
| Business Term Loan | `$10,000 – $2,000,000` | `6 – 36 months` |
| Invoice Factoring Tool | `$10,000 – $3,000,000` | `Ongoing facility` |
| Consolidation of Positions | `$10,000 – $2,000,000` | `6 – 36 months` |
| Decentralized Business Financing | no live spec — `Tailored to your business` | `Consultative` |

**Don’t** invent a spec for Decentralized Business Financing. **Don’t** publish interest or factor rates (none are shown today).

### Testimonials

**Where:** `src/components/pilot/PilotTestimonial.astro`, `src/data/home-testimonial.ts`, `src/scripts/testimonial-slider.ts`.  
EARNINGS layout: eyebrow + serif quote (typographic quotes, ink, no red) + 3:4 still + `Falcon client` credit + prev/next circle-arrows. Three Ling quotes, in order. Stills: `invoice-factoring-trucking`, `healthcare-working-capital`, `restaurant-working-capital`. Autoplay 5s; reduced motion crossfade. Quotes must **fit on one screen**; trim length rather than wrapping to a second viewport of quote.

**Do:** credit the business only; keep the quote on one screen. **Don’t:** invent names, amounts, or extra quotes.

### Industries

**Where:** `src/components/pilot/PilotIndustryTabs.astro`, `src/data/industry-stills.ts`.  
Dropdown at every breakpoint (not a tab row). Lilac Light field, placeholder “Select your sector”, selected row Lilac Darker + Martinique check, hover Lilac Dark. Panel: title + existing blurb + “{Industry} funding” circle-arrow + Ling 16:9 still. Panel in: `fadeInUp` 0.5s.

**Don’t:** add a card grid of all twelve stills on home.

### Why choose us

**Where:** `src/components/pilot/PilotWhy.astro`.  
Dark band. Eyebrow + H2 “Capital, without the runaround.” + body + circle-arrow “See how it works” → `/how-it-works`. Right card: three **numbered** steps (At Gambit numerals, not arrows, not links). Rows 1–2 sit on **1.5px** `--bx-on-dark-rule` dividers. Marquee “**Apply** for funding” → `/apply`, 125px/s, pauses on reduced motion.

**Don’t:** add a funding-timing footnote or † after “same day.”

### Insights

**Where:** `src/components/pilot/PilotNews.astro`.  
Three published posts (ids in `index.astro`). Heading→cards = `--pilot-heading-to-items`. 16:9 covers, curtain reveal on scroll-in.

### Footer

**Where:** `src/components/Footer.astro`, `src/styles/blackstone.css`.  
Darker band, white type. Lockup left; Quick Links + Get in Touch (email, phone, address, X). 1px white rule; copyright; Privacy / Terms. **This is the only legal home.** Real URLs only (X is the only social). Inner pages may pass `disclosure` into `BaseLayout` / `Footer` (`.site-footer__disclosure`, `--white-a82`). Home omits it so the footer stays unchanged. Never put that line under SiteCta or any Apply.

---

## Tables

**Where:** `src/styles/global.css` (`.r-table`), `src/components/ResponsiveTable.astro`, `src/components/ProductTermsTable.astro`.

Desktop: semantic `<table>`, hairline cells (`1px solid var(--color-line)`), 0.75rem 1rem padding, header weight 500.

**Mobile stacked-card rule (`max-width: 767px`):**

- `thead` is visually hidden (clip), not removed from the accessibility tree.
- Each `tbody tr` becomes a **block card**: vertical padding 1rem, hairline top/bottom, no cell borders.
- First cell is the card title (weight 600).
- Later cells use `data-label` from the column header: `attr(data-label) ': '` in muted, then the value.

`ProductTermsTable` always renders Amounts / Terms / optional Funding speed from the service spec. Skip the table when amounts are non-numeric (`Tailored to your business`).

**Do:** pass `data-label` on every non-first cell (ResponsiveTable does this). **Don’t:** force a side-scrolling table as the only mobile layout. **Don’t** put unpublished rates in the table.

---

## Icons

| Kind | Where | Size | Notes |
| --- | --- | --- | --- |
| Lucide set | `src/components/Icon.astro` | 24 default, stroke 1.75 | Wayfinding only, `currentColor`, `aria-hidden`. |
| Circle-arrow | `CircleArrow.astro`, `PilotArrow.astro`, Services/News SVG | 40–44px | Outline at rest; fill on hover. |
| Button 040 arrow | inline SVG in `Button040.astro` | 1em | Rotates on hover. |
| Nav chevron / hamburger | `Header.astro` | 12px chevron; 34×24 toggle | Hamburger closed / X open — never both. |

**Do:** inherit color. **Don’t:** use icons as illustration, don’t add a new icon library, don’t show red “alert” glyphs — errors are Martinique type/border.

---

## Image treatments

**Where:** `src/components/Media.astro` (alias `ImageSlot.astro`). AVIF/WebP `srcset` via `astro:assets` `Picture`. Fallback WebP. Square crop, `object-fit: cover`, Lilac tint behind. **No border-radius, no shadow.**

| Pattern | Ratio | Loading |
| --- | --- | --- |
| Home hero | 1800/771 (≥48em); 16:9 cropped `30% 50%` below | eager, **high** (only one) |
| Industry panel | 16:9 | lazy |
| Testimonial | 3:4 | lazy |
| Insights / blog cards | 16:9, zoom 1.06 | lazy |
| Inner hero | 16:9 | as needed |
| Quote portrait (About) | 3:4 | — |

Home density: **one** full-bleed hero + testimonial stills + one visible industry still + three insight covers. Whitespace, not more photos, paces the page. Falcon has **no** video.

**Do:** pass a real `alt` that describes the photo. **Don’t:** invent people; use a labeled placeholder (`Image placeholder: {intent} ({ratio})`) when no asset exists. **Don’t** mark more than the home hero as high priority.

---

## Motion

| Token / pattern | Value | Where |
| --- | --- | --- |
| `--bx-ease` / `--bx-duration` | `0.3s ease` | Default UI |
| Link underline | 1px gradient, 0→100%, **350ms** | `.link`, `.arrow-cta` |
| Circle-arrow fill | 250–300ms | `.circle-arrow` |
| Button 040 swap | 0.6s / 0.735s + 0.05s delay, Ling easings | `button-040.css` |
| Accordion | `grid-template-rows` 350ms; icon 250ms | `src/scripts/accordion.ts` |
| Image zoom | `scale(1.06)` ~350ms | news / image cards |
| Header dropdown | Osmo timings; chevron 0.3s | `src/scripts/nav.ts`, `docs/refs/osmo-mega-nav.md` |
| Home scroll-in | GSAP `y: 20` + autoAlpha **800ms**, stagger **400ms**, start `top 90%` (early), once, reading order. Controls before content (`data-reveal-after`). Services: `top 85%`, 150ms/row. Stats fade 0.75s + line `scaleX` 1.125s. News curtain 1s + image 0.5s / 0.4s delay. **Skip** hero, testimonial slider, CTA wheel. | `src/scripts/scroll-in.ts` |
| Testimonial | SplitText + circular clip; autoplay 5s | `src/scripts/testimonial-slider.ts` |
| CTA wheel | 1200ms hold + 400ms ease | `SiteCta.astro` |
| Why marquee | 125px/s | `PilotWhy.astro` |
| Reduced motion | Animations/transitions ~off; 040 swap off; wheel static; marquee paused; scroll-in skipped | `global.css` `@layer base` |
| No JS / failed JS | Reveals stay **visible**. Hide styles apply only under `html.has-js` + `prefers-reduced-motion: no-preference` (`src/styles/pilot.css`). The home inline script adds `has-js` and removes it after 2.5s if `scroll-in.ts` never sets `__pilotRevealReady`. Without JS, `has-js` is never added. | `src/pages/index.astro`, `src/scripts/scroll-in.ts` |

Focus: `2px solid var(--color-accent)` (white on `.on-dark`). Not BX yellow.

---

## Shared components (use these)

| Component | Path | Role |
| --- | --- | --- |
| Tokens | `src/styles/tokens.css` | Palette, type, space, grid |
| Tailwind theme | `src/styles/global.css` `@theme` | Utilities for the same tokens |
| Base type / tables / square buttons | `src/styles/global.css` | `h1–h6`, `.eyebrow`, `.r-table`, `.btn-*` |
| Site chrome CSS | `src/styles/blackstone.css` | Container, grid, header, footer, SiteCta, bands |
| Home / MCA CSS | `src/styles/pilot.css` | `.pilot-*` only |
| Button 040 | `src/components/Button040.astro` | Apply pill |
| Header / Footer / SiteCta | `src/components/Header.astro`, `Footer.astro`, `SiteCta.astro` | Every page via `BaseLayout` |
| Logo | `src/components/Logo.astro` | Mark + wordmark |
| Media | `src/components/Media.astro` | Stills / placeholders |
| Tables | `ResponsiveTable.astro`, `ProductTermsTable.astro` | Stacked cards &lt;768 |
| Home sections | `src/components/pilot/Pilot*.astro` | Hero, stats, services, quote, industries, why, news |
| Data | `src/data/services.ts`, `site.ts`, `home-testimonial.ts` | Figures and quotes |

Inner-page pilots (`PilotPageHero`, `PilotWhatWeDo`, `PilotAccordion`, `PilotProcess`, `PilotQuote`) follow the same tokens; they are not the home composition.

---

## Inner-page patterns (round 1)

Used on `/services/merchant-cash-advance`, `/industries/retail`, `/how-it-works`, and `/about`. Same tokens as home. New CSS lives in `src/styles/pilot.css` under `.pilot-*`. Do not restyle toward Blackstone or OnDeck — those sites supplied **layout order** only.

| Pattern | Component | Anatomy | Do / don’t |
| --- | --- | --- | --- |
| Inner hero | `PilotPageHero.astro` | H1 span 7, lead span 5, optional circle-arrow CTA, 16:9 still. Labeled placeholder when there is no asset. | One Apply-style arrow in the hero is allowed on inner pages. **Don’t** add 040 in the hero. **Don’t** invent people in the still. |
| Answer first | `PilotAnswer.astro` | Eyebrow **In short**, 1-paragraph direct answer, four takeaways as a list with 8×2px ticks (not arrows, not links). | Visible content, not a schema experiment. **Don’t** put a CTA under the answer. |
| At a glance / requirements | `PilotGlance.astro` | Four cells. Figures variant: display 24px value, 14px muted label. Requirements variant: body-size value. Stacked → 2-col → 4-col. Hairline band. | Copy amounts **word for word** (`$5,000 – $5,000,000`). **Don’t** run `compactStatValue`. Cells are not links. |
| Fit / “not this product” | `PilotFit.astro` | Tinted section, numbered `01` columns (At Gambit), type only. | Numbers, not arrows. **Don’t** claim consolidation savings. |
| Process notes | `PilotProcess.astro` `note` | Italic 14px muted line under each step body. | Factual hand-off only (“you provide…”, “you get…”). |
| Intent cards | `PilotIntent.astro` | Four **links** to real product routes. Title, body, italic product hint, circle-arrow. | The card is the clickable; the hint is not a nested link. Soft hints, no amounts. |
| Documents | `PilotDocs.astro` | Numbered `01–04` rows. | Numbers, not document-icon buttons. |
| Eligibility | `PilotQualify.astro` | Heading + requirements glance + optional “what we look at” + note (markdown links allowed). | Published criteria only. **Don’t** add credit-pull claims. |
| Product list | `PilotProductList.astro` | Numbered rows, verbatim amounts, circle-arrow to the live service route. | Seven products on About. Decentralized stays consultative — no invented spec. |
| Text band | `PilotTextBand.astro` | Numbered columns for use cases, values, Why Falcon. Optional trailing circle-arrow. | No photos, no awards. |
| Trust row | `PilotTrust.astro` | Confirmed STATS (`$100M+`, `300+`, `15`) + 24-48 hours line + Direct phone + human line. | Phone is a real `tel:` link. **Don’t** add Apply here — SiteCta follows. **Don’t** put the disclosure under this band. |
| FAQ links | `PilotAccordion.astro` | `[label](/path)` in answers becomes a `.link`. | Internal, `tel:`, or `mailto:` only (`src/lib/inlineLinks.ts`). |
| Tables | `ResponsiveTable.astro` | Desktop table; stacked cards &lt;768 with `data-label`. | Product names in the retail table are links to real service routes. |
| Disclosure | `PAGE_DISCLOSURE` in `src/data/disclosure.ts` | Small type **in the footer**, above the lockup. | Never under a CTA, SiteCta, or trust row. Omit on home. |

**About stats** reuse `PilotStats` with `$100M+` featured and `15` / `300+` on the sides. No satisfaction figure. No 98% (home only).

**Retail** is a dedicated page (`src/pages/industries/retail.astro`). Other industry slugs keep the existing `[slug].astro` template until those pages are rebuilt.

---

## Provenance (not the source of truth)

| File | Role |
| --- | --- |
| `docs/blackstone-design-system.md` | Falcon ↔ Blackstone mapping. Stale if it disagrees with this file. |
| `docs/blackstone-design-notes.md` | Earlier pass notes. |
| `docs/design-tokens.md` | Historical Goldman measurements. Purple fills are **retired**. |
| `docs/refs/*` | Measured BX / Osmo values used to build home. |

New page work starts here, then the components and tokens above. Do not start from Goldman or Blackstone and restyle toward Falcon.
