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

## Update, same day — the article pages, the H1 gap, and the pager

**Each guide now has its own page** at `/blog/<slug>` (`src/pages/blog/[slug].astro` +
`src/styles/blog-article.css`), built from the reference article
`blackstone.com/insights/article/softbank-ceo-masayoshi-son-…` measured live at 1440 and 390:

| Element | Reference | Ours |
| --- | --- | --- |
| title | 704–784 wide (cols 1–10), 48/72 w300, 32/48 at 390 | same sizes, weight 400 |
| media | 784 wide, 16:9, 32px under the title | the post's cover, same slot |
| body | 704 wide (cols 1–9), p 18/27 w300 ls .32 | same |
| h2 / h3 | 40/60 w300 ls .32 / 20/30 w400 ls .16 | same |
| rail | 304 wide (cols 13–16), pad-top 32, sticky, modules 24 apart behind 1px rules | same |
| rail content | category + date · author · "Watch on YouTube" CTA · newsletter · share | category + date · **one Falcon CTA** |

Ling: *"On the right, change watch on youtube and the subscribe part to a CTA, that basically says
Falcon provide fast business funding. and a button: see your options."* The author block is gone too —
there is nobody to credit, and CLAUDE.md forbids inventing people. The CTA links to `/#services`,
because "see your options" should land on the six products, not a form. Category + date print under the
title below 80em, where the reference simply drops them.

**Route lift for the post family:** `/blog/<slug>` out of `retired` and into `livePaths` in
`astro.config.mjs`; the `/blog/*` wildcard in `netlify.toml` and `public/_redirects` replaced by four
explicit `/blog/category/<slug>` rules (Netlify has no exclusion syntax, and a wildcard would 301 the
real post pages).

**Two corrections on the index after review:**

- *"Our blog page H1 'blog' and the blog lists below has too much space."* The header band and the
  list band were both `[data-band="light"]`, so the sitewide
  `[data-band="light"] + [data-band="light"]` rule added 48px on top of the header's own 120px. The
  header is a page header, not a themed band — dropping the attribute leaves exactly the reference's
  gap (120 at 1440, 96 at 1024/768).
- *"This pagination should we have more blog posts. Let's test this pagination by having only 4 blog
  posts on load."* The pager is back — Load More + a dot per page, the reference's own measurements
  (18/27 label, 40px circle-arrow turned down, 1px × 40 divider with 24px margins, 12px dots 16 apart,
  the current page carrying a 24px ring) — with `PAGE_SIZE = 4`. Eight published guides therefore load
  as 4 + 4, the button reveals the second row, and the row hides itself once the last page is showing.

## Third pass — one template, the reference's spacing, and the H2/list corrections

All eight guides render from the single template `src/pages/blog/[slug].astro` (`getStaticPaths`
over `getPublicPosts()`), styled by `src/styles/blog-article.css`. There is no per-post layout.

Ling: *"learn the spacing from H1 to content, spacing between left and right, spacing between the
elements on the right etc. And make sure your H2 is smaller than H1, maybe use the H2 size on home
page. And check if your bullet list or number list is formatted correctly."*

| Spacing | Reference | Ours (before → after) |
| --- | --- | --- |
| H1 → media | 32 (H1 ends 452, media starts 484) | 56 → **32** (the header carried a 24px pad-bottom under a 32px media gap) |
| media → body | ~72 | 72 ✓ |
| body column → rail | 256 at 1440 (body ends 785, rail starts 1041) | 256 ✓ |
| rail modules | 24 apart, a 1px 20%-ink rule at the top of each, text ~5–8 under it | 48 apart with 24px inner padding → **24 apart, 1px rule, 8px in**; the first module has no rule |
| rail width | 304 (cols 13–16) | 304 at 1440 ✓ (fluid below) |

**H2 ladder.** The article H1 steps 32 → 40 → 48. The H2 used to mirror the reference's 40 from 48em
up, which made H2 and H1 the same size at 768 and below. The H2 now steps **24 → 32 → 40**, so it sits
one step under the H1 at every width and lands on the home page's section-heading size (40px) at 1440.

**Lists.** Tailwind's preflight sets `ol, ul { list-style: none }`, so the first pass rendered bullets
and numbers with no markers at all — 6 `<ul>` per article, all bare. Both are now explicit in the
article scope: `ul { list-style: disc }`, `ol { list-style: decimal }`, 8px item gaps, ink markers, a
circle marker for nested lists. Task lists (`- [ ]`) keep no marker and keep their checkbox.
Verified on `/blog/bridging-a-slow-season`: the 1-2-3 list renders "1. 2. 3." and the bulleted list
renders "•" with a hanging indent.

## Fourth pass — the rail now copies the reference's sticky content

Ling, with a screenshot of the reference rail: *"This is what's supposed to be on the right. Author
just write Falcon Equity Group. change 'Stay up-to-date' to 'Small business funding', change 'Sign up
for our latest insights and firm announcements.' to a sentence that is similar to 'Consult Falcon
Equity for a funding solution for my business'. And use the button design on the example. I want all
the small share buttons under as well. Let's just copy their right sticky content."*

Four modules, measured on the reference at 1440 (rail 304 wide, sticky 140 from the top, modules 24
apart behind 1px rules, a closing rule under the share row):

| Module | Reference | Ours |
| --- | --- | --- |
| category + date | category 14/21 UPPERCASE, date 16/24 w500 | same |
| author | avatar 40 + 16, name 16/24 w400, role 14/21 w300 | **Falcon Equity Group**, role "Business funding", logo as the avatar — no invented person |
| eyebrow + sentence + button | "Stay up-to-date" 14/21 ls 1.12 · 20/30 sentence · 210×48 ink pill, radius 100, label 16/24 w500, 40px circle-arrow | "SMALL BUSINESS FUNDING" · "Ask Falcon Equity about a funding solution for your business." · same pill, "See your options" |
| share | print · 1px rule · LinkedIn, X, Facebook, email at 24px, 24 apart | same five, print wired to `window.print()` |

The earlier dark Falcon CTA panel is gone — the reference's module is white with a black pill button,
so that is what the page does now.
