# Blackstone / BREIT design notes

Studied 19 Oct 2026 from live pages (`breit.com`, `breit.com/performance/`, `blackstone.com/insights/`, `blackstone.com/the-firm/`, `blackstone.com/our-businesses/credit-and-insurance-bxci/`, `blackstone.com/#slide-1-2`) plus Ling’s attached frames, including the Private Wealth column overlay. Falcon keeps At Gambit + Inter and the existing purple/tint tokens. **Blackstone wins** on spacing, dividers, hovers, eyebrows, cards, link motion, and the site-wide grid. Hard exceptions: no fabricated people, quotes, or numbers; do not edit `.afterabsolute`.

Blackstone.com is behind Cloudflare from this environment, so computed CSS could not be read live (CDP returned empty). Grid numbers below combine the overlay inspector (`content__inner` **1648×7900**), the Private Wealth column overlay, and Blackstone’s usual 12-column frontend tokens.

## Grid (site-wide)

Implemented as `--bx-*` tokens and `.bx-grid` / `.bx-span-*` / `.bx-start-*` utilities in `src/styles/blackstone.css`. `.container-site` is the `content__inner` equivalent.

| Token | Mobile `<768` | Tablet `768–1023` | Desktop `≥1024` |
| --- | --- | --- | --- |
| Columns | 4 | 8 | 12 |
| Gutter | 16px | 24px | 24px |
| Outer margin | 20px | 40px | 80px |
| Section padding | 4rem (64px) | 5.5rem (88px) | 7.5rem (120px) |
| Container max | 1648px content | 1648px content | 1648px content |

**Container math.** `.container-site` is `max-width: calc(1648px + 2 * var(--bx-margin))` with `padding-inline: var(--bx-margin)`. At desktop that is an 1808px outer box and a **1648px** inner grid — matching the overlay’s `content__inner` width. Wider viewports add auto side space; narrower viewports keep the 20 / 40 / 80px margins.

**Breakpoints.** `768px` (tablet, 8 columns) and `1024px` (desktop, 12 columns). These are the points Blackstone-style layouts typically switch column count. A third implied edge is the 1808px container cap.

**Offsets (Private Wealth).** Text does not always start at column 1.

- Heading block: columns 1–5 (`.lg:bx-span-5`)
- Body / CTA indented one column: start 2, span 4 (`.lg:bx-start-2.lg:bx-span-4`)
- Right-hand list: start 7, span 6 (`.lg:bx-start-7.lg:bx-span-6`)
- Page heroes: title span 7, lead span 5
- Article column: start 3, span 8
- Home H1 second line indented ~one column of the 7-col title (`.home-hero-line2`)

On a 4-column mobile grid, spans ≥4 fill the row and `lg:bx-start-*` is ignored, so offsets collapse cleanly. Span utilities set `grid-column-end` so they compose with `bx-start-*`.

**Usage.**

```html
<div class="container-site">
  <div class="bx-grid">
    <h2 class="bx-span-4 lg:bx-span-5">Title</h2>
    <p class="bx-span-4 lg:bx-span-4 lg:bx-start-2">Indented body</p>
    <ul class="bx-span-4 lg:bx-span-6 lg:bx-start-7">…</ul>
  </div>
</div>
```

## Spacing scale (desktop first)

| Role | Value |
| --- | --- |
| Section block | 120px (`7.5rem`) |
| Gutter | 24px |
| Outer margin | 80px |
| Eyebrow rule | 2.25rem × 1px |
| Hairline | 1px `#e5e5e5` |
| Card / list row padding | ~1.75rem |

## Principles adopted

1. **Whitespace first.** Section padding is large (64 / 88 / 120px). Cards are not boxed with heavy chrome.
2. **Hairline structure.** Horizontal 1px rules separate tables, FAQs, and Explore rows.
3. **Drawn underlines.** Left-to-right `background-size` underline (~350ms).
4. **Circle arrows.** Outline circle fills on hover; arrow inverts.
5. **Image-led cards.** 16:9 crop, hover zoom ~1.06, square corners, no shadow.
6. **Inactive vs active lists.** Unhovered Explore rows recede; the hovered row returns to ink and fills its arrow.
7. **Black bands** where Blackstone uses them: home hero, Insights CTA, statement band.
8. **Quote split.** Portrait left, oversized quote right. Live Dwight copy only.
9. **Tables.** Uppercase muted headers, thin row lines, no vertical rules.
10. **BXCI landing rhythm.** Hero title + lead + image → stat row → black statement band (image left, list right) → accordion → feature + image → 3-column principles → related cards → quote only if real copy exists.
11. **Eyebrows.** Default: uppercase tracked label + short rule to the **right**. When the heading is centered: rule **above** the label (`.eyebrow--center`).
12. **FAQ accordion.** Full-width rows, thin rules. Closed: muted title + outline circle chevron. Open: ink title + filled black circle (chevron rotates). Height animates with `grid-template-rows`.

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
| BXCI product/business landing | `PageHero`, `StatementBand`, `FaqList`, `FeatureSplit`, `Principles` on `/services/[slug]` and `/industries/[slug]` |
| WHAT WE DO ——— eyebrow | `Eyebrow` |
| FAQ accordion | `FaqList` |

## Data rules

Charts and tables only plot **already published** Falcon figures (product ranges, site stats) or the existing **labeled hypothetical** consolidation example. No new testimonials, staff names, or performance claims. Quote bands render only where live copy exists (About / Dwight).
