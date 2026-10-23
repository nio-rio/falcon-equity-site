# About page — structure plan (23 Oct 2026)

Built on Ling's instruction (*"Yes build about page"*, 23 Oct 2026) after confirming `/about` did not
exist: the page had been deleted in `5207b6b` ("Keep only the home page and apply"), the route 301'd to
`/`, and both nav and footer pointed "About" at `/#main`.

Copy contract: `~/Sites/falcon-page-drafts/resources-and-firm-content.md` §5 (approved 22 Oct 2026,
pushed to Notion the same day). Ten bands, in the order written there — no band added, none dropped.

Donor ids are from `docs/section-library-live/LIBRARY.md`. Numbers below were measured on the live
reference in real Chrome over CDP, not read off a screenshot.

## Revision 2 — 23 Oct 2026: copy and structure re-cut from Notion

Ling revised the note itself (*"I have changed about page copy and structure on notion"*) and asked for the
page to follow it. The note keeps its original 1–10 numbering, which is the cheapest record of what moved:
**bands 2 (answer first), 4 (what we do) and 8 (who we fund) were deleted**, so the page is now seven bands —
1 hero, 3 by the numbers, 5 founder, 6 our people, 7 values, 9 how we're different, 10 where we are.

| # | Band | Change from v1 |
| --- | --- | --- |
| 1 | Hero | The H1 is now the tagline on two lines ("We're more than a funding provider. / We're your partner."), the NYC sentence is the lead in columns 12–16, and the still is 5:2 instead of 16:9. |
| 3 | By the numbers | Unchanged. |
| 5 | Founder | Unchanged except the bio line under the credit, which the note no longer lists — removed. |
| 6 | Our people | The intro paragraph under the H2 is not in the note — removed. The 17 titles are unchanged. |
| 7 | Values | Unchanged. |
| 9 | How we're different | Unchanged. |
| 10 | Where we are | **Office +1 (917) 645-3826 added to `SITE.phones.office`** and printed as its own row; the address row is now labelled "Address" (it read "Office", which would have printed two offices); Fax is no longer printed on this page. |

The `<title>` is the note's meta line, "About Falcon Equity Group | Business funding, New York". The note's
meta block still lists the H1 as "About Falcon Equity Group" while its hero band makes the tagline the H1 —
the hero band is the later edit and the one that renders, so the tagline is the H1; the entity name is carried
by the title tag, the breadcrumb schema and the nav. One line to swap it back if that reading is wrong.

## Bands (v1 record — 22 Oct contract)

| # | Band | Donor | Source | Ours |
| --- | --- | --- | --- | --- |
| 1 | Hero | **TF-00** header + **TF-01** still | blackstone.com/the-firm/ | H1 in columns 1–7 at 55/57 w400 (house page-title weight, not the reference's 300), lead in columns 10–13 aligned to the H1's baseline, then a 16:9 labelled placeholder across 1264. No CTA in the hero. `text-wrap: balance` on the H1 only, because 7 columns at 1440 orphaned "Group". |
| 2 | Answer first | **TF-02** rows-beside-a-claim, flipped to white | blackstone.com/the-firm/ | The 51-word answer in the display face at 26/39 w300 in columns 1–7; the four takeaways as rows in columns 9–16 with 1px rules at 20% ink, 20px pad top and bottom. |
| 3 | By the numbers | **FAL-01** | falconequity.ai home (approved) | One featured figure (`$100M+`, 120px display) then two side figures (15, 300+) each over a 1px ink rule, right-hand columns. Values read from `STATS`; the 98% approval figure stays on the home page. |
| 4 | What we do | **OP-01** | blackstone.com/the-firm/our-people/ | 4 tracks of 244px, 96px column gap, 64px row gap (4 × 244 + 3 × 96 = 1264). Name 18/27 w300, spec 14/21 w400, one note line 16/24 w300. Seven products → 4 + 3, each linked to its service page except Decentralized Business Financing, which has no page. Ranges and terms are read from `SERVICES`, never retyped. |
| 5 | Founder | **FAL-03** | falconequity.ai home (approved) | 3:4 portrait in columns 1–5 (`src/assets/images/dwight-holly.webp`), the live site's quote at 32/48 w300 in columns 7–16, credit and one line under it. No second founder, no invented bio. |
| 6 | Our people | **OP-01** again, names only | blackstone.com/the-firm/our-people/ | The same 4-track roster carrying the 17 approved titles, no photographs and no biographies. |
| 7 | Values | **TF-05** | blackstone.com/the-firm/ | Four values instead of three: 4-up titled prose, 64px gaps, name 20/30 w400, body 16/24 w300, no card chrome. |
| 8 | Who we fund | **TF-03** row directory, re-cut | blackstone.com/the-firm/ | Twelve sectors as a 4-column link grid on 1px rules, generated from `INDUSTRIES` so the names and hrefs cannot drift from the industry pages; one `ArrowCta` to `/industries`. |
| 9 | How we're different | **APM-01** numbered columns | blackstone.com/pws/accessing-private-markets/ | Four numbered items instead of three, 2×2 at 768 and up: numeral 28px at 45% ink, title 20/30 w400, body 16/24 w300. |
| 10 | Where we are | contact rows + buttons | — | Address, email, direct line and fax from `SITE` in label/value rows on 1px rules in columns 9–16, heading left; `Button040` "Get funding today" → `/apply` and an `ArrowCta` "See all services" → `/#services`. |
| — | CTA | sitewide `SiteCta` in `BaseLayout` | — | Unchanged. It renders after band 10, so the page closes like every other inner page. |

## Deviations, stated

1. **No visible breadcrumb.** The copy's meta block lists `Home / Our Firm / About`; the reference
   site prints no breadcrumb on any page in the library, and no Falcon page prints one. The path ships
   as `BreadcrumbList` JSON-LD instead, so the structure is machine-readable without adding furniture.
2. ~~"Office +1 (917) 645-3826" is not published.~~ **Closed in revision 2:** the line is in
   `SITE.phones.office` and prints as the last contact row. Fax stays in `site.ts` (the Apply page and the
   contact overlay use it) but is no longer printed on About.
3. **"See all services" → `/#services`, not `/services`.** There is no `/services` index; the route is
   retired to `/#services`, so the link goes straight there rather than through a 301.
4. ~~The products roster links only where a page exists.~~ **Moot in revision 2:** the "what we do" band
   was deleted, so the services roster is no longer on this page. The `.abt-roster` pattern now carries only
   the 17 people titles, and the product wording lives on `/services/*`.
5. **No `AboutPage` node was added by hand.** `src/lib/schema.ts` already types `/about` as
   `AboutPage`; the page adds only the breadcrumb, so there is exactly one `AboutPage` in the head.

## Route lift (all four places)

- `astro.config.mjs` — `/about` into `livePaths`, out of `retired`.
- `public/_redirects` — the `/about` 301 removed (this file wins over the config).
- `netlify.toml` — the `/about` 301 removed.
- In-app links — `Header.astro` "Our Firm → About", `FIRM_LINKS`, `COMPANY_LINKS` and
  `FOOTER_QUICK_LINKS` in `src/data/site.ts`.

## Verified on the build

v1: `dist/about.html` was 53,957 bytes with ten bands. Revision 2: 47,404 bytes, `<title>About Falcon
Equity Group | Business funding, New York</title>`, one `<h1>`, seven sections in the note's order
(hero, stats, founder, people, values, different, contact), 17 roster titles, the office line present, no
`http-equiv="refresh"`, `AboutPage` + `BreadcrumbList` in the head. No horizontal overflow at 390 / 768 /
1024 / 1440 / 1920 (`overflow: 0` at every width). Crops reviewed band by band at 1440 and 390.
`npm run check` 0 errors, `npm run test:titles` passes.

## Still open

- The two legal routes (`/privacy-policy`,
  `/terms-conditions`) are still home-page anchors.
- `Partners`, `Contact` and `How It Works` in the header still point at placeholders; they are the next
  pages in the queue, and `/contact` is currently served by the contact overlay.
