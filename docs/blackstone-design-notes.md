# Blackstone / BREIT design notes

Studied 19 Oct 2026 from live pages (`breit.com`, `breit.com/performance/`, `blackstone.com/insights/`, `blackstone.com/the-firm/`, `blackstone.com/our-businesses/credit-and-insurance-bxci/`) plus Ling’s five attached frames. Falcon keeps At Gambit + Inter and the existing purple/tint tokens. **Blackstone wins** on spacing, dividers, hovers, eyebrows, cards, and link motion. Hard exceptions: no fabricated people, quotes, or numbers; do not edit `.afterabsolute`.

## Principles adopted

1. **Whitespace first.** Section padding is large (≈80–120px). Cards are not boxed with heavy chrome; rows and grids breathe.
2. **Hairline structure.** Horizontal 1px rules (`#e5e5e5` / ink at 10%) separate tables, FAQs, and “Explore more” rows. No 1px box around every cell.
3. **Drawn underlines.** Inline text links and key titles use a left-to-right `background-size` underline (0 → 100%, ~350ms). Not a purple color change.
4. **Circle arrows.** Outline circle + arrow; the circle fills on hover and the arrow inverts. Used on Explore rows, “Learn more about…” CTAs, and the Insights subscribe/apply band.
5. **Image-led cards.** Most teasers have a 16:9 image. Hover zooms the crop slightly (~1.06) and draws the title underline. Square corners, no drop shadow.
6. **Inactive vs active lists.** In an Explore list, unhovered rows recede to muted grey; the hovered row returns to full ink and fills its arrow.
7. **Black bands where Blackstone uses them.** The Insights subscribe CTA is a full-bleed near-black (`#0a0a0a`) split: line-eyebrow + large heading + text/arrow on the left, image on the right. Falcon maps Subscribe → Apply (no new email product).
8. **Quote split.** Portrait left, oversized quote right, name/title bottom-right of the quote column. Light ground. Live Dwight copy only.
9. **Tables.** Uppercase muted headers, thin row lines, no vertical rules. Wide tables scroll horizontally with a track/thumb under the grid. CHART / TABLE tabs when we have numeric series.
10. **Business-page rhythm (BXCI).** Large H1 + lead, full-width image, a short stat row of published figures, then long-form sections and an Explore list of sibling products.

## Components mapped

| Blackstone / BREIT | Falcon |
| --- | --- |
| Insights article card (image, kicker, title, hover zoom + underline) | `PostCard`, industry index cards |
| Insights black subscribe CTA | `InsightsCta` on blog index/category |
| “Learn more about our people” (underlined label + filled circle arrow) | `ArrowCta` on About |
| Explore-more row list | `ExploreList` on service + industry pages |
| Founder / people quote (photo \| quote) | `QuoteSplit` on About |
| Performance CHART/TABLE + scroll progress | `ChartTable` wrapping compare + consolidation figures |
| BXCI product/business landing | `/services/[slug]`, `/industries/[slug]` |
| Generous section scale | `src/styles/blackstone.css` overrides on `.section` |

## Data rules

Charts and tables only plot **already published** Falcon figures (product ranges, site stats) or the existing **labeled hypothetical** consolidation example. No new testimonials, staff names, or performance claims.
