# `/industries` — structure plan and measurements

**Page:** Industries overview (the index above the twelve `/industries/<slug>` pages).
**Built:** 23 Oct 2026. **Brief (Ling):** *"Create a page 'Industries' as the industries overview
page, looking just like this: blackstone.com/insights/market-views."*

Reference: `https://www.blackstone.com/insights/market-views/` — measured **live**, not from an
archive or a screenshot: real Chrome over CDP, computed styles at 1440 / 1280 / 1024 / 768 / 390,
after the cookie bar was dismissed. The reference is a Cloudflare-protected site (403 to curl and to
headless), so the capture used an ordinary Chrome window parked offscreen.

**Division of sources:** the reference supplies *layout* — band order, grid columns, gaps, pad
rhythm, type sizes. Falcon's `DESIGN-SYSTEM.md` supplies *brand* — palette, faces, components, CTA
rules. Nothing from Blackstone's own styling (its serif, its near-black, its weights) was imported.

## The reference, section by section

| # | Section | What the reference actually is | Ours |
|---|---|---|---|
| 1 | Page header | **H1 only.** No eyebrow, standfirst, CTA, filter row or breadcrumb. 48px above, 120px below. H1 spans 9 of 16 tracks (704 of 1264) at 56/84, weight 300 | Same anatomy: one H1, nothing else. Weight stays **400** — Ling set the family's page-title weight on the twelve industry pages, and the index must match them, not Blackstone |
| 2 | Card grid | 4-up in a 1264 container: 4 × 298 + 3 × 24 gutter. Rows 120px apart (64 pad under the row + 56 above the next). 3 rows of 4 = twelve cards | 12 industry cards, same 4 × 298 + 24 arithmetic in the same container, same 120px row pitch |
| — | Pagination / load more | none on the reference | none — twelve industries is the whole population |
| — | Closing CTA | none on the reference (its CTA lives in the nav) | the sitewide `SiteCta` band from `BaseLayout`, as on every Falcon page |

### Card anatomy, reference → ours

| Element | Reference | Ours | Note |
|---|---|---|---|
| Media | 16:9 still, `object-fit: cover`, 298 × 168 | industry still from `INDUSTRY_STILLS`, 16:9, 298 × 168 | same ratio, same 32px gap under it |
| Title | 20/30, weight 300, letter-spacing 0.16px, 32px below the image | 20/30, weight 300, letter-spacing 0.16px, 32px below the image | numbers copied exactly; face is Falcon's display face |
| Meta line | post date, 16/24, letter-spacing 0.32px, **pinned to the card foot** with 40px of pad above it, so dates line up across a row | the sector blurb, 16/24, letter-spacing 0.32px, **pinned to the card foot** with 40px of pad above it | stated adaptation: our equivalent of a date is the one-line-of-copy we hold per sector. Because it is pinned, the blurbs still bottom-align across a row exactly as the dates do |
| Link | whole card is a link (image and title both) | whole card is a link, one `<a>` per card | |
| Hover | (title/image treatment) | underline draws under the title in 0.3s, plus a 2px focus ring | site's own card motion, not the reference's |

Two smaller adaptations, both deliberate: card titles are one line here against the reference's two
or three (industry names are short), and there is no per-card arrow — the reference has none, and the
whole card is already the target.

## Measured at 1440 — reference vs ours

| | Reference | Ours (built page) |
|---|---|---|
| Content width / left edge | 1264 at x=81 | 1264 at x=81 |
| H1 box | 704 × 84 at x=81, 56/84, w300 | x=81, 56/84, **w400** (family spec) |
| H1 → first image | 120px | 120px |
| Card width / x positions | 298; x = 81, 403, 725, 1047 | 298; x = 81, 403, 725, 1047 |
| Column gap / row gap | 24 / 120 | 24 / 120 |
| Image | 298 × 167.6, 16:9, cover | 298 × 167.6, 16:9, cover |
| Title | 20/30, 32px below image | 20/30, 32px below image |
| Meta | 16/24, 40px pad above, pinned to card foot | 16/24, 40px pad above, pinned to card foot |
| Card height (row) | 354, equal across the row | 342, equal across the row (one-line titles) |

## Responsive

| Viewport | Reference | Ours |
|---|---|---|
| 390 | 1-up, 88px rows, H1 40/60, page pad 31 | 1-up, 88px rows, H1 40/**44** (`--ind-h1`'s 1.1 leading), pad 31 |
| 768–1024 | 2-up, 96px rows, H1 48/72 | 2-up, 96px rows, H1 **40/44** |
| 1280 | 4-up, 112px rows, content 1136 | 4-up, 112px rows, content 1136 |
| 1440 | 4-up, 120px rows, content 1264 | 4-up, 120px rows, content 1264 |

Two type deviations, both on purpose: the reference steps its H1 to 48/72 at tablet, and runs 0.9
line-height at mobile; Falcon's `.ind-h1` (the twelve industry pages) has one step, 40 → 56 at 80em,
with 1.1 leading. The index follows the family — an index titled differently from the pages it lists
is the more visible inconsistency.

## Content

- H1: `Industries`. Card titles: the twelve names from `src/data/industries.ts`, in nav order (no
  invented ranking).
- Card copy: each industry's existing `blurb` — no new copy written for this page.
- Description (meta): sectors listed + the funding promise; no rate, percentage, review score or
  market statistic.
- Schema: `BreadcrumbList` (Home → Industries) + `ItemList` of the twelve pages, both rendered in the
  built HTML and counted in QA.
- Stills: `INDUSTRY_STILLS` (Ling's photographs, already used by the home Sectors band), with their
  authored alt text.

## Route lift (a page is not built until it stops redirecting)

`/industries` was a 301 to `/#industries-heading` in **four** places. All four changed, because
`public/_redirects` wins over `netlify.toml` and the sitemap has its own allow-list:

| Place | Change |
|---|---|
| `netlify.toml` | `/industries → /#industries-heading` rule deleted; the comment above the industry slug rules now says why it must not come back |
| `public/_redirects` | same line deleted |
| `astro.config.mjs` | `'/industries'` added to `livePaths`, removed from the static `retired` map (both the Astro-level and Netlify-level redirects came from there) |
| links | header Industries panel card → `/industries`; footer Company + Quick links → `/industries`; the twelve industry pages' breadcrumb schema → `/industries`; the home Sectors band's fallback `href` → `/industries` |
| `tests/nav.spec.mjs` | the Industries panel-card href expectation, `/#industries-heading` → `/industries` |

## Verification

- `npm run build` → 22 pages (21 before; this page is the 22nd). `npm run check` → 0 errors, 0
  warnings, 4 hints.
- `dist/industries.html`: 54,185 bytes, `<title>Industries | Falcon Equity Group`, real `<h1>`,
  **no `http-equiv="refresh"`**, 12 `/industries/<slug>` links, `ItemList` with `numberOfItems: 12`.
- `sitemap-0.xml`: `/industries` plus all twelve slugs.
- Real-Chrome sweep at 390 / 768 / 1024 / 1280 / 1440 / 1920: `scrollWidth == clientWidth` at every
  width (overflow 0), all **12 card images loaded** (`loaded: 12/12` — checked after a scroll pass, so
  lazy loading is not hiding a broken file).
- `npm run test:nav` on this build: **46 pass, 3 fail** — `home-testimonial-slider`,
  `home-section-spacing`, `nav-inflow-on-return`. All three fail identically on a clean build of HEAD
  with this work stashed, so they are branch state from the recent header/testimonial work, not this
  page. Worth a separate pass.
