# `/services/decentralized-business-financing` — structure plan

Copy source: Notion **“Decentralized Business Financing – page copy v3”** (`402eacd0-19c7-81c0-8df9-c8b147941ef3`,
nio rio workspace), including the six **Answers** pasted under *Open questions for Dwight*.

Reference for this revision: **blackstone.com/our-businesses/technology-and-innovations/**, measured live in a
real Chrome over CDP at 1440 on 23 Oct 2026 (`cdp_live_measure.cjs` / `cdp_probe_component.cjs`). The live
page's band order at 1440: page header (48/120) → hero media 1264×711 with a 104 bottom pad → **WHAT WE DO**
(`bx-vertical-list`, dark, 160/160) → featured video → **OUR ROLES** (`bx-accordion`, white, 160/160) →
horizontal list → **BLACKSTONE INNOVATIONS INVESTMENTS** (`bx-headers` two-up, dark, 160/160) → featured →
quote.

Two sources of truth, split the way the house rule requires:

- **Layout / band order** — the Technology & Innovations measurements (donor ids below).
- **Brand, type, space, CTA, components** — `DESIGN-SYSTEM.md` + `src/styles/tokens.css`. No Blackstone colour,
  typeface or button enters this page. Where the donor's type sizes differ from the house ladder, the house
  wins and the row says so.

The home page is untouched.

---

## The page, section by section

| # | Section (anatomy) | Donor — what it does | Fit / layout change |
| --- | --- | --- | --- |
| 01 | **Hero**: H1 left, lede beside it, one CTA under the lede | T&I **page header** — H1 56/84/300 in 9 of 16 tracks (704), description 18/27/300 in 5 tracks (384) beside it, pad 48/120 | H1 takes the house `--page-title-size` / 1.1 / **400** (the donor is 300). The copy's sub-heading line (“Next-generation digital asset solutions…”) and the coverage strip are **removed** at Ling's instruction — the hero carries the H1, the copy's lede, and one `Book a consultation` 040 under the lede. No stat grid, no secondary link. |
| 02 | **Hero still**: 16:9 image in the container, 104px under it | T&I **hero media** — 1264×711 (16:9), band pad 0/104, image flush to the header's bottom pad | **Labelled placeholder at the donor's exact ratio** (`Media`, `labeled`, `16 / 9`, 1264 at 1440). Ling is supplying the photograph; the file drops in with no layout change. Nothing else in the band. |
| 03 | **Start here**: claim above, then a still left and three titled paragraphs stacked right, tops level with the still | T&I **WHAT WE DO** — eyebrow (16/24/400, 64px rule) + 48/72/300 claim, then a 624×832 (3:4) still in cols 1–8 and a vertical list in a 464 column (cols 11–16): title, 24px, body 18/27, 64px to the next item | Kept light at Ling's request. Head sits full width above the row; the still takes the donor's exact 3:4 slot (a labelled placeholder until the file arrives) and **the list's first line starts level with the still, not with the H2**. Titles use the house card role 24/36/400. On the phone the still stacks above the list; at 48em they split 4/4. |
| 04 | **What we do**: eyebrow + H2 + five titled columns + closing line | `TF-05` — five cards in a 5/6/5 split of the 16 tracks, no fills, no numbers, row gap 104 | House 3-column geometry: 1/5 · 6/6 · 12/5, padding 32/56/32 → 352 measure, 104 gutters; card title 24/36/400, body 18/27/300. Dark band. **The copy's closing line (“Every one of these is advisory… None of it is a recommendation to buy, sell or hold any asset”) is deleted** — it restates the first row of “What this is not” almost word for word, and Ling caught the repeat. The band now ends on the five cards. |
| 05 | **Where it fits**: eyebrow + H2 + four expandable rows | T&I **OUR ROLES** — `bx-accordion`: head above (eyebrow, 48/72 claim, description), then full-width rows with a divider, 100px closed | **Rendered by the shared `FaqList`** (`faq-list.css` + `accordion.ts`, one row open at a time, 2px rules, 20/30 → 24/36 questions, 32px caret). The donor's original icon is a plus; the house list uses a chevron that turns, and reusing the one list keeps every accordion on the site identical. Row copy is the situation as the question. |
| 06 | **What this is not**: eyebrow + H2 + six expandable rows | same `OUR ROLES` accordion | Same component, six rows. **Deliberate deviation:** the copy's six limits are now behind clicks rather than open on the page — Ling asked for the accordion. The rows are ordered so the four legal/limits rows (no advice, no return, no custody by us, not a way around the rules) sit above the two audience rows. |
| 07 | **How we work (AI)**: eyebrow + claim left, two paragraphs right, **no divider** | T&I **BLACKSTONE INNOVATIONS INVESTMENTS** — `bx-headers` two-up: eyebrow + 40/60/300 claim in cols 1–8 (624), description 20/30/300 in cols 11–16 (464), pad-bottom 56 | Claim keeps the house `--type-h2-*` ladder. Right column carries the copy's body paragraph and the recommended AI statement, **both in the body face at 20/30/300** (Ling: “both paragraphs should use body font”), held apart by a 40px gap only — no divider line. **No logos**: Dwight's email said “add this with the logos” and named none, and the repo holds no approved marks. |
| 08 | **Process**: eyebrow + H2 + three numbered columns with *You provide / You get* | `APM-01` three numbered columns; numeral scale from the service pages (`.cal-step-num`) | Structure unchanged. Spacing fixed three times over: the **h3 → paragraph gap is 16px** (the reference measures 24, but 24 read as a gap under a 198px numeral, and Ling asked for tighter); the numeral sits 32px above its title; the card row gap is 80px. Each card is a 4-row grid with the body row taking the slack, so the hand-off blocks bottom-align, and each hand-off value **reserves three lines** so all three blocks start on the same line. **Subgrid was removed** — a shared title row stretched a one-line title to the tallest title's box and pushed each paragraph ~70px down. **No type under 16px**: the `You provide / You get` labels went from 14 to 16/24. |
| 09 | **FAQ**: eyebrow + H2 + ten expandable rows | `DC-06` / `PWS-09` long FAQ, rendered by `FaqList` | The copy's nine questions plus **“Who provides these services?”** from Dwight's answer. |
| 10 | **SiteCta** (from `BaseLayout`) | every other page's closing band | Unchanged band — wheel, lead line, one 040 — with `ctaLabel="Book a consultation"` / `ctaHref="/apply"`. `SiteCta` gained optional `label`/`href` props (defaults `Apply for funding` / `/apply`) and `BaseLayout` passes them through as `ctaLabel`/`ctaHref`, so no page needs its own closing band. |

Band rhythm: **light → light (still) → light → dark → light → light → dark → light → light → dark (SiteCta).**
Same-theme followers collapse their top pad to `--pilot-section-y-stack` through the global `[data-band]` rule.

Rejected donors: `BXCI-04`/`LS-04` (portrait still + pillars — no photography for this page); `LS-06` tabs
(hides copy from search and from an AI answer); `APM-02` comparison matrix (a limits list is not a matrix).

---

## Copy decisions (all traceable to the note)

1. **Custody is corrected to Dwight's answer.** v3's “Not custody without controls” implied Falcon holds the
   assets; the Answers block says it does not. The row and the FAQ now say the assets sit with independent,
   regulated third-party qualified custodians the client selects.
2. **Fees.** “Scoped per engagement”, plus the answer's fixed consulting fee / retainer / success component and
   confidential minimums. No number appears anywhere.
3. **Securities line.** Falcon assists in structuring vehicles and documentation; it does not offer, sell or
   distribute tokenized interests or other securities.
4. **Stablecoin rails.** All digital-asset payment flows run through licensed third-party partners; Falcon does
   not itself transmit or exchange virtual currency.
5. **Counterparty.** “Services are provided by Falcon Equity Group LLC…” is its own FAQ row.
6. **CTA label `Book a consultation`** in the hero and in `SiteCta`; the link stays `/apply`.
7. **No amounts, terms, requirements or price.** `SERVICES` carries `Tailored to your business · Consultative`
   and no spec, so `ProductTermsTable` is not used.

## Data changes this page forces

- `src/data/service-faqs.ts` gains a `decentralized-business-financing` key (10 Q&As). `/faq` reads
  `SERVICE_FAQS` through `FAQ_GROUPS`, so it grows a group the moment the route is live — intended.
- Route lift: the 301 is gone from `astro.config.mjs`, `netlify.toml` and `public/_redirects`; the nav dropdown
  and the home services card no longer special-case the slug to `/#services`.

## Still open / for Ling

1. **Hero photograph** — placeholder is in at 1264×711 (16:9); send the file and it drops in.
2. **AI logos** — which marks, and does Dwight have permission? Nothing ships until then.
3. `Book a consultation` in `SiteCta` is the sitewide band with a page-specific label; say the word if the
   Apply wording should come back.
