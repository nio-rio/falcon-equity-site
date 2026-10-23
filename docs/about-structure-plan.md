# About page — structure plan (23 Oct 2026)

Built on Ling's instruction (*"Yes build about page"*, 23 Oct 2026) after confirming `/about` did not
exist: the page had been deleted in `5207b6b` ("Keep only the home page and apply"), the route 301'd to
`/`, and both nav and footer pointed "About" at `/#main`.

Copy contract: `~/Sites/falcon-page-drafts/resources-and-firm-content.md` §5 (approved 22 Oct 2026,
pushed to Notion the same day). Ten bands, in the order written there — no band added, none dropped.

Donor ids are from `docs/section-library-live/LIBRARY.md`. Numbers below were measured on the live
reference in real Chrome over CDP, not read off a screenshot.

## Revision 3 — 23 Oct 2026: the home stats band, and the BXMA quote band

Two more instructions, same day, both with a visual: *"This is how the quote section should look like.
Learn exact spacing, font sizes, responsiveness etc"* (with a crop of
`blackstone.com/our-businesses/blackstone-multi-asset-investing-bxma/`) and *"Stats section should just
copy the one from home page and swap the data."*

### Band 3, by the numbers — the home component, different figures

The band is now `<PilotStats />`, the exact component the home page renders, fed `$100M+ / Funding
deployed` as the featured figure and `15 / Years of experience`, `300+ / Businesses helped` beside it. No
goodbye to the copy contract and no new component: one component, two pages.

`pilot.css` is imported by `index.astro` only, so dropping the component in gave an unstyled band (the
featured figure measured 16px). Rather than ship the home page's 54KB stylesheet to About, the
`.pilot-stats-*` rules — and the two `.pilot-stats-rule` reveal rules — moved verbatim into
`src/styles/pilot-stats.css`, which the component imports. Measured the home band at 1440 before and after
the move: **0 differences** across section box, padding, grid, featured label/value type, and both side
cells.

### Band 5, founder — the BXMA quote band

Measured live in a real Chrome over CDP at 1440 / 1024 / 768 / 390 (the page is Cloudflare-protected, so
curl and headless both fail; the offscreen real window reads it). `.bx-quote-block`:

| | reference | ours |
| --- | --- | --- |
| band | full-bleed, bg `rgb(0,0,0)`, padding 160 / 96 / 96 / 80 | full-bleed, house dark token `#14101f`, 160 / 96 / 96 / 80 |
| grid | 16 tracks of 64, 16px gaps, container 1264 | `.abt-shell`, same tracks |
| portrait | 4 of 16 tracks = 304 wide, 3:4 (natural 965×1280 = 0.754), top-aligned | 304 wide, 3:4, top-aligned |
| still → quote | 176 at 1440, 104 at 1024 and 768 | same rule (empty tracks 5–6 at 16, column 4 at 8) |
| quote | 40/60 w300, ls 0.32, white, 20px below the still's top; 32/48 at 1024 & 768; 24/36 at 390 | same sizes, house display face |
| quote → credit | 96 at 1440, 80 at 1024/768, 48 at 390 | same |
| credit | right-aligned in the last 4 tracks: name 20/30 w400 over role 16/24 w300, 12 apart, both ls 0.32, white | same, `text-align: right` on the quote column |
| under 48em | still, 76 gap, quote, credit — all full width | same |

The reference's quote face is Guardian Sans, their body face; ours is At Gambit with the same weight and
letter-spacing, so the band reads as this site rather than as a pasted Blackstone band. The reference has
no eyebrow and no heading, and neither does this band — the `<h2>` stays `sr-only`.

### Band 6, our people — top space added

The band above is now dark, and the black padding belongs to the black. Without a top pad the "Our people"
eyebrow sat on the seam, so this band now carries 80 / 104 / 144 top as well as bottom.

### Verified (revision 3)

Probed at 1440 / 1024 / 768 / 390: founder padding 160 / 96 / 96 / 80, portrait 304×405 at 1440 and
328×437 at 390, still → quote 176 / 136 / 104, quote 40/60 → 32/48 → 24/36, quote → credit 96 / 80 / 48,
name 20/30 w400 over role 16/24 w300 12 apart, credit flush with the quote column's right edge, stats
band rendering the home component's 160px featured figure. `overflow: 0` at every width, `npm run build`
clean, `npm run check` 0 errors, `test:titles` passes.

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
| 6 | Our people | The intro paragraph under the H2 is not in the note — removed. The 17 entries now carry Ling's approved names over their titles (revision 4), in OP-01's measured type. |
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
| 6 | Our people | **OP-01** again | blackstone.com/the-firm/our-people/ | The same 4-track roster, now carrying the 17 name → title pairs Ling approved on 23 Oct: name 18/27 w300 tracking 0.144, title 14/21 w400 tracking 0.32 six pixels under it, 96px column and 64px row gaps. No photographs and no biographies. |
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

## Revision 4 — 23 Oct 2026: names for the people band

Ling sent the 17 title → name pairs with *"Add to people section. Remember to learn the spacing and font
size from example site."* The band had shipped titles only, because the copy contract held names back
until they were approved.

The pairs are **OP-01's own anatomy**, measured on `blackstone.com/the-firm/our-people/` (not guessed):
name **18/27 w300, tracking 0.144px** on the body face, the title **6px under it at 14/21 w400, tracking
0.32px**, both at full ink, in 4 tracks of 244px with 96px column and 64px row gaps. Verified on our
build with the same probe — `18px/27px w300 ls 0.144` then `14px/21px w400 ls 0.32`, 244px item, 10px
between the name's text box and the title — and the render matches the reference's roster row for row
(five rows, the last holding one person).

## Revision 5 — 23 Oct 2026: the values band rebuilt on blackstone.com/the-firm/

Ling: *"Learn the 'our value' section from this page and use it on ours. We can just use 3 values. And
use a value slogan for the H2."* The band was rebuilt from a live measurement of that section in a real
Chrome over CDP at 1440 and 390, not from the library entry — which had the card type wrong (it said
20px title over 16/24 body; the reference is 24/36 over 18/27).

**What was learned and used:** label 16/24 w400, tracking 1.28, uppercase with a 56px rule beside it;
cards split 5 / 6 / 5 of the 16 tracks (384 / 464 / 384, 16px gutters — the middle column is wider, so
its title wraps); title 24/36 w300 tracking 0.192 with 24px under it; body 18/27 w300 tracking 0.32; no
chrome of any kind. At 390 the label drops to 14/21 tracking 1.12 and the cards stack at 72px.

**Three values, slogan H2.** `Vision` came out (its line, "we look at the whole file, not a single
score", was saying what `Precision` says). H2 is now the slogan **"Three things we don't bend on."** and
the eyebrow reads "Our values". Body copy is the contract's, verbatim.

**One deviation, stated:** the reference leaves 344px between its label and its first card, because the
label is the only text in its head. Ours spends that air on the slogan, so the grid starts 96px under
the H2 (the house head-to-content rhythm). Everything from the first card down is the reference's own
geometry — verified on our build with the same probe: 384px card, 24/36 w300 ls 0.192, 24px to the
body, 18/27 w300 ls 0.32.

## Still open

- The two legal routes (`/privacy-policy`,
  `/terms-conditions`) are still home-page anchors.
- `Partners`, `Contact` and `How It Works` in the header still point at placeholders; they are the next
  pages in the queue, and `/contact` is currently served by the contact overlay.
