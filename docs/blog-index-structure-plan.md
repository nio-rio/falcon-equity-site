# /blog — structure plan and reference measurement

Route: `/blog` — "The Falcon Brief", the blog index.
Built: 23 Oct 2026. Reference: **blackstone.com/insights**, captured live in a real Chrome
over CDP at 1440 / 1024 / 768 / 390 and re-measured on our build with the same probe.
Copy contract: Notion "Blog index — page copy (/blog)" (`402eacd0-19c7-81be-bef3-fdb370c836e8`),
child of *Resources & Our Firm — page copy (7 pages)*.

Two sources of truth, split the usual way: **Blackstone supplies layout** (band order, grid, type
sizes, card anatomy, pager) and **the copy contract supplies the content**. Nothing from the
reference's brand furniture is imported — no serif hero, no near-black, no yellow focus fill.

## What the reference actually is

Measured, not remembered:

| Element | 1440 | 1024 / 768 | 390 |
| --- | --- | --- | --- |
| page header pad (top / bottom) | 48 / 120 | 56 / 96 | 40 / 80 |
| H1 | 56 / 84, w300, ls 0.448, cols 1–9 | 48 / 72, w300, ls 0.384 | 40 / 60, w300, ls 0.32 |
| standfirst (`.bx-page-header__description`) | 18 / 27 sans, ls .02rem, cols 12–16 | same | full width under H1 |
| archive grid | 4-up, card 298 wide, column gap 24 | 2-up | 1-up |
| card image | 298 × 168 = 16:9, `object-fit: cover` | — | 328 × 185 |
| category label | 14 / 21 w400, ls .32, UPPERCASE, pad 32 / 0 / 16 | same | same |
| card title | 20 / 30 w300, ls .16 | same | same |
| card date | 16 / 24 w300, ls .32, pad-top 40, `margin-top: auto` | same | same |
| row rhythm | 120 | 88 | 80 |
| pager | "Load More" 18/27 + 40px circle-arrow rotated 90°, 24px margin, 1px × 40 divider, dots 16 apart (active 24 ring, idle 12) | same, centred | same |
| link hover | 1px rule draws left→right in 0.3s (`background-size` 0 → 100%) | same | same |

The reference page is: page header → 3 rows of 4 cards → Load More + dots. Nothing else. Its
category filtering lives in a slide-in **dialog** (`bx-directory-filters`), not on the page.

## Our page, band by band

| # | Section (anatomy) | Source | Content and the adaptation |
| --- | --- | --- | --- |
| 1 | Page header — H1 cols 1–9, standfirst 12–16 | `blackstone.com/insights` `.bx-page-header` | H1 "The Falcon Brief" + the contract's one-line lead. **No hero photograph**: the reference header has none, and a 16:9 still directly above a 16:9 card grid repeats the same gesture. The contract's placeholder alt text is therefore unused. H1 weight **400**, not the reference's 300 — the house page title is 400 (`.mca-hero h1`, `.ind-h1`) and Ling asked for that parity. |
| 2 | Answer first — answer left, four takeaways right | contract §2 (no reference donor) | House AEO block, 49-word answer at 20/30 in cols 1–9, takeaways in cols 12–16 separated by hairlines. Blackstone has no equivalent band; this is the one section on the page with no donor, and it is here because the contract requires it. |
| 3 | Start here — three cards | reference card anatomy | Contract's three guides, in the contract's order. **Three** across, not the reference's four: the copy set is three. Card component shared with band 5. |
| 4 | Browse by category — four rows, name / description / count | contract §4; the reference's *filter* function | The contract links each row to `/blog/category/<slug>`. **Those routes do not exist** — they still 301 to the home page — so the rows are buttons that filter the archive in place instead. A reader who clicks a category now sees those guides immediately, and nothing on the page points at a route that bounces. An "All guides" row was added as the way back. |
| 5 | Latest guides — the reference's archive grid + pager | `blackstone.com/insights` `.bx-article-row` / `.bx-load-more` | Newest first, category label / title / date, no excerpt, no author, no read time (contract). **4-up**, not the contract's 2-column / nine-visible grid: the contract was written before Ling named this reference, and the reference's 4-up archive is the whole point of the ask. Page size 8 (two complete rows); Load More + a dot per page render when there are more than 8 published guides. |
| 6 | Empty state | contract §6 | The contract's sentence, with its two page references changed to ones that exist ("the home page explains how funding works", "a specialist can answer…"), because `/how-it-works` and `/faq` still redirect. Renders only when nothing is published. |
| 7 | CTA | house | The shared `SiteCta` that `BaseLayout` renders above the footer. Not rebuilt. |

Deliberate deviations from the reference's own build, all of them small:

- **Fluid card tracks**, not the reference's fixed 298px flex items. At 1024 the reference's fixed
  width leaves 68px of slack on a 688 container; ours fills the row.
- **No video play badge.** The reference cards carry one because much of its library is video; ours
  is written guides only.
- **Focus states.** Every control has a `:focus-visible` ring, and the card title's underline also
  draws on focus. The reference has no visible keyboard treatment on these.
- **Category label is text, not a link.** On the reference it links to a category archive; here the
  category is printed, and the equivalent route is the filter row in band 4.

## Not built, and why

- **`/blog/<slug>` post pages.** No template exists, so eight published guides have no page of their
  own yet; `/blog/*` still 301s to the home page. **Every card on this index links to
  `/blog/<slug>` and will therefore land on the home page until that template ships.** That is the
  next dependency, and it is a design decision of its own (article page), not something to invent
  inside this ticket.
- **`/blog/category/<slug>` pages.** Same reason; the filter rows replace them for now.
- **RSS.** `/rss.xml` already exists and lists the published posts; unchanged here.

## Verification (measured on the built page, not the plan)

- `dist/blog.html`: real `<h1>`, no `http-equiv="refresh"`, 11 cards (3 start-here + 8 archive),
  5 filter buttons, page in `sitemap-0.xml`. `npm run build`, `npm run check` (0 errors, 0 warnings)
  and `npm run test:titles` (which now asserts this route's `<title>` and `<h1>`) all pass.
- Geometry at four widths, ours vs the reference table above: H1 704×84 at 56/84, header pad
  48/0/120, card 298×391 at x=81, image 298×168 (ratio 1.778), label/title/date identical to the
  character, row gap 120, column gap 24; 1024 and 768 → 2-up at 48/72 with 56/0/96 and 88; 390 →
  1-up at 40/60 with 40/0/80 and 80. No horizontal overflow at 320 / 390 / 768 / 1024 / 1440.
- Dates align across a row with 2- and 3-line titles (`margin-top: auto`, measured: all four at
  y=3245).
- Pager exercised with a temporary page size of 4 (screenshot in the session): Load More reveals the
  second row, its dot becomes current, one dot per page; a category filter shows all of that
  category's guides, hides the pager, updates the count and `aria-pressed`. At the shipped page size
  of 8 the pager is dormant with 8 published guides and appears automatically when the 9th
  publishes.

## Route lift (the four places a route lives)

1. `astro.config.mjs` — `/blog` added to `livePaths`, `'/blog': '/'` removed from `retired`.
   `/blog/<slug>` and `/blog/category/<slug>` stay retired.
2. `netlify.toml` — the exact `/blog` redirect removed; the `/blog/*` wildcard stays (there is no
   exclusion syntax, and post routes are the only thing under it).
3. `public/_redirects` — the `/blog` line removed, `/blog/*` kept (`_redirects` wins over the config).
4. `src/data/site.ts` — `RESOURCE_LINKS` and the footer list now point at `/blog` instead of
   `/#insights-heading`.
