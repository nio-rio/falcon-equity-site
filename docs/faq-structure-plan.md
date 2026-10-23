# /faq — structure plan and measurement record

Reference: **blackstone.com/our-businesses/registered-products**, captured LIVE in a
real Chrome over CDP on 23 Oct 2026 at 1440 and 390 (Cloudflare 403s curl and the
automation browser; a real Chrome parked offscreen with a persistent profile passes).

Brief: *"Build FAQ page. Learn this layout"* — then, on review: *"We have FAQ on pages
like service, industry pages, they are all using the same FAQ component. So you should
use the same component for FAQ page."*

So the page is **the reference's architecture with the site's own FAQ component inside
it**: band sequence, header geometry, centred group headings and group rhythm come from
Blackstone; the question rows are `FaqList.astro` + `faq-list.css`, the same list the
six service pages and twelve industry pages render.

## What the reference is

Sixteen measured bands, but only three shapes: a page header, a group heading, and a
list of rows. No hero image, no intro cards, no CTA band, no breadcrumb, no filter.

| Band | Measured on the reference (1440 / 390) |
| --- | --- |
| Page header | pad 48/0/120 · 40/0/80; H1 56/84 w300 in columns 1–9 · 40/60 at 390; standfirst 18/27 in columns 12–16 (384 wide), stacked 32px under the H1 below 1280; band height 252 |
| Group heading | 48/84 w300, **centred** across columns 3–14 (944 wide) · 32/48 **left** at 390; 48/72 at the left-aligned variant |
| Rows | title 24/36 w300, max 850 (53.125rem); a 1px rule on the top **and** bottom edge of every row, so the seam reads **2px** (dark runs of exactly 2px at a 106px pitch); row pad 32 · pad 24 at 390 with the title wrapping to 2 lines; control a 40px circle at the far right, 4px in from the container edge (32px at 390) that swaps outline for a filled disc on hover in 300ms |
| Group rhythm | 56 above / 160 below at 1440 · 40 / 80 at 390; heading → first row 106 (56 heading pad + 48 list pad) |

## What shipped, band by band

| # | Band | Source | Ours |
| --- | --- | --- | --- |
| 1 | Page header — H1 left across nine columns, standfirst in the last five | reference page header | Same geometry. H1 "FAQ" at weight **400**, not the reference's 300: the house page title is 400 (`.blg-h1`, `.ind-h1`, `.mca-hero h1`). Standfirst shortened to 3 lines so the band comes out at the reference's 252 |
| 2–7 | Six groups — one per product, centred heading, then one accordion list | reference group heading + row list | Heading geometry kept exactly (48/84 centred in columns 3–14; 32/48 left at 390). **Rows replaced by the house FAQ component** (see below) |

Group order follows `SERVICES`, the same order the site lists products in:
Collateral & Asset Loans · Business Line of Credit · Merchant Cash Advance · Business
Term Loan · Invoice Factoring Tool · Consolidation of Positions. 37 questions in total.

### The two deliberate departures from the reference

1. **The rows are the site's FAQ component, not the reference's link rows.** Ling's
   instruction: the service and industry pages already share one FAQ component, so the
   FAQ page uses it. The reference's rows *leave the page* (a circle with an arrow,
   1px full-black rules); ours *open an answer* (2px rules at 40% ink that draw a solid
   line under the hovered row in 0.5s, a 32px round caret that fills on hover and turns
   180° when open, questions 20/30 → 24/36 at 768, answers 18/27 at 72% ink on a 38.5rem
   measure, panel 350ms). That component is unchanged — see `src/styles/faq-list.css`.
2. **H1 weight 400** rather than the reference's 300, for the same reason the blog page
   took 400: this site's page titles are 400.

Rejected: the reference's arrow-disc control (it points at another page, and ours opens
in place — a control that promises navigation is a lie); tabs (they hide 5/6 of the copy
from search); a "general questions" group (there is no approved copy for one — the old
/faq page is retired copy, and writing site-wide answers would invent claims).

## Copy: one source, not two

37 verbatim Q&As moved out of `src/pages/services/*.astro` into
`src/data/service-faqs.ts`; those six pages and `/faq` now both read it, so an answer
cannot exist in two versions. Proof: every one of the 37 question and answer strings is
present in the built service pages (37/37), and `/faq` renders 37 rows across 6 lists.

## The component extraction (Ling's instruction)

The widget existed as **seven clones** — `mca-faq-`, `btl-faq-`, `loc-faq-`, `ift-faq-`,
`cal-faq-`, `cons-faq-`, `abt-faq-` — with identical markup and seven stylesheets
drifting apart. Extracted to:

- `src/components/FaqList.astro` — props `items`, `idPrefix`, `class` (placement only)
- `src/styles/faq-list.css` — the `faq-` prefix, every visual rule
- the one binder, `src/scripts/accordion.ts` (at most one open row per list)

Consumers now render `<FaqList … />` and keep only their old list class as a *placement*
hook (`.btl-faq-list`, `.mca-faq-list`, …) so band gaps and grid placement are untouched.
Per-page row rules were stripped with `strip_dead_css_rules.cjs`. Verified in the build:
`btl-faq-trigger`, `btl-faq-icon`, `btl-acc-panel` and their siblings return **0** in the
built HTML across all six service pages; `data-acc-trigger` counts are unchanged
(6/6/6/6/6/7); the industry pages render `class="faq-list mca-faq-list"`.

`about.astro` still has its own `abt-` copy of the rules (that route is retired and the
page is not shipped); it is the one clone left, and it should adopt `FaqList` when /about
is built.

## QA numbers on our build

| Check | Result |
| --- | --- |
| `dist/faq.html` | 89.7 KB · real `<h1>FAQ</h1>` · no `http-equiv="refresh"` · in `sitemap-0.xml` |
| Header at 1440 | band 252 tall, pad 48/0/120; H1 704 wide in columns 1–9; intro 384 wide in columns 12–16 |
| Group heading at 1440 | 944 wide starting on column 3, 48/84, centred — the reference's own box |
| Group rhythm | 56 / 160 at 1440; 40 / 80 at 390 |
| Rows at 1440 | trigger 24/36 w300 ls .32, pad 32, caret 32px flush to the container edge, answer 616 wide at 18/27 on 72% ink, row 102 tall |
| Rows at 390 | pad 24, question 24/36 wrapping to 2 lines, caret 32px |
| Overflow | 0 at 390 / 768 / 1024 / 1440 / 1920 |
| Accordion | 6 lists; one open row per list; clicking the open row closes it; `aria-expanded` follows; panel 350ms; caret rotates 180°; icon fills on hover |
| Schema | `FAQPage` with 37 `Question` entries + breadcrumb |

Route lift (four places, plus the nav): `astro.config.mjs` (`/faq` into `livePaths`, out
of `retired`), `netlify.toml`, `public/_redirects`, `RESOURCE_LINKS` and
`FOOTER_QUICK_LINKS` in `src/data/site.ts`, and the header dropdown's hardcoded FAQ href.

Known, not ours: `npm run check` reports one error in `src/pages/about.astro:253` (a
`Media` call missing its `intent` prop), and `npm run test:titles` fails on
`dist/apply.html`'s H1 ("Apply today to get same day funding."). Both predate this page.
