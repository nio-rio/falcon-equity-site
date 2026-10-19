# Blackstone / BREIT design notes

Studied 19 Oct 2026 from live pages (`breit.com`, `breit.com/performance/`, `blackstone.com/insights/`, `blackstone.com/the-firm/`, `blackstone.com/our-businesses/credit-and-insurance-bxci/`, `blackstone.com/#slide-1-2`) plus Ling’s attached frames, including the Private Wealth column overlay. Falcon keeps At Gambit + Inter and the existing purple/tint tokens. **Blackstone wins** on spacing, dividers, hovers, eyebrows, cards, link motion, and the site-wide grid. Hard exceptions: no fabricated people, quotes, or numbers; do not edit `.afterabsolute`.

Blackstone.com is behind Cloudflare from this environment, so computed CSS could not be read live (CDP returned empty). An overlay inspector once reported `content__inner` at **1648px**; that figure was a DevTools label on a hi-DPI (likely 2×) screenshot, not CSS pixels. At a **1440px** viewport Blackstone’s content is about **1280px** with **~80px** side margins.

## Grid (site-wide)

Implemented as `--bx-*` tokens and `.bx-grid` / `.bx-span-*` / `.bx-lg-span-*` / `.bx-lg-start-*` in `src/styles/blackstone.css`. `.container-site` is the `content__inner` equivalent. Class names are unprefixed (`bx-lg-span-6`, not `lg:bx-span-6`) so Tailwind v4 cannot drop them.

| Token | Mobile `<768` | Tablet `768–1023` | Desktop `1024–1439` | Wide `≥1440` | Source |
| --- | --- | --- | --- | --- | --- |
| Columns `--bx-columns` | 4 | 8 | 12 | 12 | Bundle `--columns`; Falcon uses 12 from 1024 (BX 16-col at 80em mapped to 12) |
| Gutter `--bx-gutter` | 16px | 24px | 24px | 24px | Bundle `--column-gap: 2em` at desktop → 24px at 12px root; 16px mobile from screenshot |
| Outer margin `--bx-margin` | 15px | 40px | 40px | 80px | Bundle default 15px; `--pad-container-md-plus: 80px` at 90em |
| Section padding `--bx-section` | 4rem (64px) | 5.5rem (88px) | 7.5rem (120px) | 7.5rem (120px) | Ling + BXCI 120px desktop |
| Content max `--bx-max` | 20.5→23rem | 43rem | 71rem | **79rem (1264px)** | Bundle `--container-width`: 20.5 / 23 / 43 / 71 / 79 / 103rem at 0 / 26em / 48em / 80em / 90em / 120em |

**Container math.** `.container-site` is `max-width: calc(var(--bx-max) + 2 * var(--bx-margin))` with `padding-inline: var(--bx-margin)`. At a **1440** viewport: `--bx-max: 79rem` (1264px) + 80px sides ≈ Ling’s 1280/80. Measured inner grid at 1440 = **1264px**, pad **80px** (8px leftover centering). At 1024 the viewport is narrower than 71rem, so the grid is 1024 − 80 = **944px**. Do not apply the 43rem tablet cap while using 12 columns.

## Colors (from blackstone-v2 bundle, Wayback `20260925104209`)

| Token | Value | Falcon | Source |
| --- | --- | --- | --- |
| `--c-black` | `#000000` | `--color-ink` | Bundle |
| `--c-variant-black` | `#202020` | `--color-ink-soft` | Bundle |
| `--c-slate-1` | `#515256` | `--color-muted` | Bundle |
| `--c-slate-2` | `#d5d8df` | `--color-line` | Bundle |
| `--c-slate-3` / `--c-highlight-light` | `#f4f5f7` | `--color-tint` | Bundle |
| `--c-yellow` | `#fdf147` | not used as CTA fill | Bundle (focus/highlight only) |
| Falcon CTA | `#5b21b6` | `--color-accent` | Existing Falcon purple; not BX yellow |

**Breakpoints.** `768px` (tablet, 8 columns), `1024px` (desktop, 12 columns), `1440px` (80px page margin).

**Composition.** Span utilities set **only** `grid-column-end: span N`. Start utilities set `grid-column-start`. Never use the `grid-column: span N` shorthand: it writes `start: span N` and, when a start class overwrites start, the item collapses to **one track** (word-by-word wrap). Full-width items use `grid-column: 1 / -1` (`.bx-full`).

**Offsets (tech-and-innovations section header, site-wide).**

- Eyebrow + H2: `.section-head.bx-lg-span-10` (columns 1–10)
- Body copy / lists / accordions / circle-arrow: `.section-body.bx-lg-start-7.bx-lg-span-6` (columns 7–12)
- Heading-then-cards: section-head span 10 (leftover 2 cols cannot fit a span-4 card, so cards wrap), then 3× span 4
- Page heroes: title span 7, lead span 5
- Article column: start 3, span 8
- Home H1 second line indented one column of the 7-col title, **desktop ≥1024 only** (`.home-hero-line2`)
- BXCI “What we do” (industry needs): H2 span 10, then portrait cols 1–6 and list start 8 span 5

On a 4-column mobile grid, spans ≥4 fill the row and `bx-lg-start-*` is ignored, so offsets collapse cleanly.

**Usage.**

```html
<div class="container-site">
  <div class="bx-grid">
    <h2 class="bx-span-4 bx-lg-span-5">Title</h2>
    <p class="bx-span-4 bx-lg-span-4 bx-lg-start-2">Indented body</p>
    <ul class="bx-span-4 bx-lg-span-6 bx-lg-start-7">…</ul>
  </div>
</div>
```

## Spacing scale (desktop first)

| Role | Value | Source |
| --- | --- | --- |
| Section block | 120px (`7.5rem`, `--bx-section` at ≥1024) | Bundle `--pad` / Ling |
| Gutter | 24px | Bundle `--column-gap` |
| Outer margin | 80px at ≥1440 | Bundle `--pad-container-md-plus` |
| Eyebrow → H2 | 40px (`--bx-space-40`) | Tech-and-innovations screenshot |
| H2 → body | 48px (`--bx-space-48`; grid row-gap at ≥1024) | Bundle title `padding-bottom` + screenshot |
| Body → circle-arrow | 40px (`.section-cta`) | Screenshot |
| What-we-do H2 → content | 80px (`--bx-space-80`) | BXCI screenshot (estimated from 1440 frame) |
| What-we-do list item gap | 56px (`--bx-space-56`) | BXCI screenshot |
| Eyebrow rule | 48×2px, 16px from label | Bundle `:after` width `--spacing-48`, height 2px |
| Hairline | 1px `#d5d8df` (`--c-slate-2`) | Bundle |
| Card / list row padding | ~1.75rem | Screenshot |

## Type (section headers)

| Role | Size | Weight | Color | Source |
| --- | --- | --- | --- | --- |
| H2 `.bx-headers-one__title` | 32 / 40 / 48px at 0 / 768 / 1440 | 300 | `#000` | Bundle `--fs-32/40/48`, `--fw-light`; screenshot ~44–48px, 1.25 lh |
| Eyebrow | 13px (`0.8125rem`) | 400 | `#000` (not grey) | Screenshot 12–13px; bundle `--fs-14` / `letter-spacing: .08em` |
| Body | 16px / 1.6 | 400 | `#202020` | Bundle `--fs-16`; screenshot |
| What-we-do item title | 24px serif | 400 | `#fff` | BXCI screenshot |
| What-we-do item body | 16px / 1.6 | 400 | white ~88% | BXCI screenshot |

## Principles adopted

1. **Whitespace first.** Section padding is large (64 / 88 / 120px). Cards are not boxed with heavy chrome.
2. **Hairline structure.** Horizontal 1px rules separate tables, FAQs, and Explore rows.
3. **Drawn underlines.** Left-to-right `background-size` underline (~350ms).
4. **Circle arrows.** Outline circle fills on hover; arrow inverts.
5. **Image-led cards.** 16:9 crop, hover zoom ~1.06, square corners, no shadow.
6. **Inactive vs active lists.** Unhovered Explore rows recede; the hovered row returns to ink and fills its arrow.
7. **Black bands** where Blackstone uses them: home hero, Insights CTA, statement band.
8. **Quote split.** Portrait left (4 of 12, 3:4 crop), large **sans** quote right (start 6, span 7), name bold + title bottom-right. Live Dwight copy only. `.page-hero-media figure` must not force `display:block` on `.quote-split`.
9. **Tables.** Uppercase muted headers, thin row lines, no vertical rules.
10. **BXCI landing rhythm.** Hero title + lead + image → stat row → black statement band (image left, list right) → accordion → feature + image → 3-column principles → related cards → quote only if real copy exists.
11. **Eyebrows.** Default: uppercase tracked label + short rule to the **right**. When the heading is centered: rule **above** the label (`.eyebrow--center`).
12. **FAQ accordion.** Full-width rows, thin rules. Closed: muted title + outline circle chevron. Open: ink title + filled black circle (chevron rotates). Height animates with `grid-template-rows`.
13. **Credit strategies accordion.** Same rows as FAQ, but **black** rules and a **plain chevron** when closed. Open state matches FAQ (filled black circle). Panel copy is ~50% width, then square bullets, amount/term line, and two circle-arrow links.

## Components mapped

| Blackstone / BREIT | Falcon |
| --- | --- |
| `content__inner` + 12-col grid | `.container-site` + `.bx-grid` |
| `#slide-1-2` home hero | Home `.home-hero` (existing copy only, no slider) |
| Private Wealth split (title / indented CTA / right list) | Home services |
| Insights article card | `PostCard` |
| Insights black subscribe CTA | `InsightsCta` |
| “Learn more about…” circle arrow | `ArrowCta` |
| Explore-more rows | `ExploreList` |
| Founder quote | `QuoteSplit` on About |
| Performance CHART/TABLE | `ChartTable` |
| BXCI product/business landing | `PageHero`, `HeroStats`, `WhatWeDo` (industries), `StatementBand` (services), `FaqList`, `FeatureSplit`, `Principles` |
| BXCI Credit strategies accordion | `ProductStrategies` on all 12 industry pages (plain closed chevron, filled circle open) |
| BXCI “What we do” | `WhatWeDo` on all 12 industry pages (needs list, no accordion) |
| Tech-and-innovations section header | `.section-head` + `.section-body` + `.section-cta` |
| WHAT WE DO ——— eyebrow | `Eyebrow` (black on light, white on dark; 48px rule) |
| BXCI featured stats | `HeroStats` (published figures only) |
| FAQ accordion | `FaqList` |

## Data rules

Charts and tables only plot **already published** Falcon figures (product ranges, site stats) or the existing **labeled hypothetical** consolidation example. No new testimonials, staff names, or performance claims. Quote bands render only where live copy exists (About / Dwight).
