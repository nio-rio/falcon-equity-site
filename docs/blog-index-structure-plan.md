# /blog — the article list

Route: `/blog`. Built 23 Oct 2026, then cut back to the reference's own shape at Ling's
instruction (*"Don't use the notion note for blog page. Just a simple page that listed out all the
articles. Just learn or even copy the layout from the insight page I sent you."*).

Reference: **blackstone.com/insights**, captured live in a real Chrome over CDP at 1440 / 1024 / 768
/ 390 and re-measured on our build with the same probe. The reference page is two things — a page
header and a grid of article cards — and so is this one.

## The reference, measured

| Element | 1440 | 1024 / 768 | 390 |
| --- | --- | --- | --- |
| page header pad (top / bottom) | 48 / 120 | 56 / 96 | 40 / 80 |
| H1 | 56 / 84, w300, ls 0.008em, columns 1–9 | 48 / 72 | 40 / 60 |
| grid | 4-up, card 298 wide, column gap 24 | 2-up | 1-up |
| card image | 298 × 168 = 16:9, `object-fit: cover` | — | 328 × 185 |
| category label | 14 / 21 w400, ls .32, UPPERCASE, pad 32 / 0 / 16 | same | same |
| card title | 20 / 30 w300, ls .16 | same | same |
| card date | 16 / 24 w300, ls .32, pad-top 40, `margin-top: auto` | same | same |
| row rhythm | 120 | 88 | 80 |
| link hover | 1px rule draws left → right in 0.3s (`background-size` 0 → 100%) | same | same |

## What the page is

| Band | Source | Notes |
| --- | --- | --- |
| Page header — H1 in columns 1–9 | `.bx-page-header` | "Blog". No standfirst, no hero image: the reference has neither, and Ling asked for the layout as it is. |
| Article list — 4-up grid, newest first | `.bx-article-row` / `.bx-article-card` | Every published guide (`getPublicPosts()`): category label, title, date. No excerpt, no author, no read time — the reference's cards carry none of those either. |
| CTA | house | The shared `SiteCta` that `BaseLayout` renders above the footer. Not built here. |

No intro band, no answer block, no category filter, no Load More/pager. Eight guides are published,
so all eight are listed and there is nothing to page. A pager was built and verified in the first
pass, then removed with the rest of the contract sections.

## Deviations (both small)

- **H1 weight 400**, not the reference's 300. The house page title is 400 (`.mca-hero h1`,
  `.ind-h1`), and a 300 H1 here would be the only one on the site.
- **Fluid card tracks** (`1fr`) instead of the reference's fixed 298px flex items, which leave 68px
  of slack on a 688px container at 1024. Card width at 1440 is still exactly 298.

## Not built, and why

**`/blog/<slug>` post pages.** No template exists, so each card links to `/blog/<slug>` and lands on
the home page via the `/blog/*` 301 until that template ships. That is the next dependency and a
design decision of its own (article page), not something to invent inside this ticket.

## Verification (measured on the built page)

- `dist/blog.html`: real `<h1>`, no `http-equiv="refresh"`, 8 cards, 2434px tall at 1440; route in
  `sitemap-0.xml`. No leftover hooks from the removed bands (answer / takeaways / categories /
  pager / count = 0 occurrences).
- Geometry measured against the table above: H1 84px tall at 56/84 with the header padding at
  48/0/120; card 298 × 391 with a 298 × 168 image (ratio 1.778); label, title and date typography
  identical to the reference; row gap 120, column gap 24; 2-up at 1024 and 768, 1-up at 390 at
  48/72 and 40/60. No horizontal overflow at 320 / 390 / 768 / 1024 / 1440.
- Dates align across a row with 2- and 3-line titles (`margin-top: auto`).
- `npm run build`, `npm run check` (0 errors, 0 warnings) and `npm run test:titles` (now asserts this
  route's `<title>` and `<h1>`) pass.

## Route lift (the four places a route lives)

1. `astro.config.mjs` — `/blog` added to `livePaths`, `'/blog': '/'` removed from `retired`.
   `/blog/<slug>` and `/blog/category/<slug>` stay retired.
2. `netlify.toml` — the exact `/blog` redirect removed; the `/blog/*` wildcard stays.
3. `public/_redirects` — the `/blog` line removed, `/blog/*` kept (`_redirects` wins over the config).
4. `src/data/site.ts` + `src/components/Header.astro` — the Blog nav entries point at `/blog`
   instead of `/#insights-heading`.
