# `/services/decentralized-business-financing` — structure plan

Copy source: Notion **“Decentralized Business Financing – page copy v3”** (`402eacd0-19c7-81c0-8df9-c8b147941ef3`,
nio rio workspace, edited 24 Oct 2026 01:59), including the six **Answers** pasted under *Open questions for Dwight*.

Two sources of truth, split as the house rule says they must be:

- **Layout / band order** — the measured Blackstone section library (`docs/section-library/`,
  `docs/section-library-live/`). Every row below names its donor id.
- **Brand, type, space, CTA, components** — `DESIGN-SYSTEM.md` + `src/styles/tokens.css`. No Blackstone
  colour, typeface or button enters this page. Measurements below are **Falcon's**, taken from the
  tokens and the sibling service page (`collateral-asset-loans.css`), not from the reference.

The home page is untouched.

---

## The page, section by section

| # | Section (anatomy) | Donor — what it does | Fit / layout change | Image |
| --- | --- | --- | --- | --- |
| 01 | **Hero**: H1 cols 1–8, standfirst + lead beside it cols 10–16, coverage strip full width, one CTA | `TF-00` — page header with the standfirst beside the title (H1 56/84/300 cols 1–7, lead 18/27/300 cols 10–13, pad 48/120) | H1 keeps the house 56/1.1/**400** (`--page-title-size`), not the donor's 300. The live site's sub-heading sits as the standfirst, the copy's lead under it. **The copy's term-stats grid is replaced by a 3-cell coverage strip** (Crypto onboarding · Crypto custodial services · Digital-asset advisory) on the same 2px-rule geometry as `.cal-stat` — words where the other six service pages print amounts. The copy is explicit: the grid is replaced, not faked. One CTA (`Book a consultation`, 040 dark). | none — no still was supplied for this page, and the hero is the one band on the site that carries a photograph only when one exists |
| 02 | **Start here**: eyebrow + H2 + three titled prose columns (Stablecoins / Tokenization / DeFi) | `TF-05` / `BXCI-07` — 3 short text cards, no icons, no card chrome | **House 3-column geometry, not the donor's gutters**: `.mca-cards--3` measured at 1440 = 16 tracks, cards 1/5 · 6/6 · 12/5, padding 32/56/32 → 352px measure, 104px visual gutters. Card title 24/36 **w400** (the house card role, not the donor's 300), body 18/27/300 ls .32. | none |
| 03 | **What we do**: five titled columns + one closing line | `TF-05` — the OUR VALUES band: **five** cards in a 5/6/5 split of the 16 tracks, 384/464/384, no fills, no numbers, row gap 104 | The donor's five-card shape is the reason this section is here — it is the only library band with a measured five-up. Dark band (the copy's five items are the page's longest prose; a white five-up after a white three-up reads as one very long band). Closing line full width under the grid, on a 1.5px `--bx-on-dark-rule` rule. | none |
| 04 | **Where it fits**: eyebrow + H2 + four situations in a 2×2 | `OP-01` (4-up roster geometry) read for its cell rhythm only; the shape is the `PilotFit` numbered-column pattern the design system documents (numbers, not arrows, type only) | No library band is a 4-up of **prose** — `OP-01`'s 244px tracks are too narrow for three sentences, so the cells re-cut to 2×2 (798/2 = 7 of 16 tracks each, 9→10 gutter). Numerals `01`–`04` at label scale (14/21/400 ls 1.28) mark copy order, not a sequence of steps. | none |
| 05 | **What this is not**: eyebrow + H2 + six rule-topped rows (title left, body right) | `TF-03` — titled row directory, rows starting at column 5, hairline between | **Chevrons dropped**: nothing opens and nothing links, and the design system's rule is that decorative elements must not look clickable. Title takes cols 1–6 (24/36/400), body 8–16 (18/27/300), 40px row padding, 1px `--color-line` rules. | none |
| 06 | **How we work (AI)**: claim left, body right, the AI statement full width on a rule | `TF-02` — dark claim band, claim left cols 1–8 at 48/72/300, supporting column right cols 10–16 separated by 16%-white rules | Statement set at 24/36/300 in white with a 1.5px `--white-a16` rule above — a claim, not a quotation, so no quotation marks and no attribution. **No logos**: Dwight's email said “add this with the logos” but named none, the repo has no partner/AI marks, and placing third-party logos implies a partnership nobody has approved. Flagged for Ling below. | none |
| 07 | **Process**: eyebrow + H2 + three numbered columns, each with *You provide / You get* | `APM-01` — three numbered columns under a claim; numeral scale from the house process band (`.cal-step-num`) | The two hand-off lines are a `<dl>` per step, label 14/21/400 in `--ink-a63`, value 16/24/300 in ink. Numbers not arrows. No CTA in this band — the copy asks for two CTAs on the page (hero, closing) and a third mid-page would be invented. | none |
| 08 | **FAQ**: eyebrow + H2 + 10 expandable rows | `DC-06` / `PWS-09` — the long FAQ with a lead; rendered by the one `FaqList` component every page uses (`faq-list.css` + `accordion.ts`, one row open at a time) | Copy's nine questions plus one new: **“Who is the counterparty?”**, from Dwight's own answer. Three answers rewritten to match the Answers block — see *Copy decisions*. | none |
| 09 | **Closing band**: “Start with a conversation.” left, body + one CTA right | `TF-02` skeleton again (claim left 1–8, support 10–16) at closing scale | **`cta={false}` on `BaseLayout`** — this page ends on its own closing band instead of the sitewide `SiteCta`. Reason: `SiteCta`'s wheel is funding-shaped (“Need funding to purchase inventory…”) and this page's whole argument is that it is *not* funding; the copy also fixes a different label (`Book a consultation`). One-line revert if Ling prefers the wheel. | none |

Rejected donors: `BXCI-04`/`LS-04` (portrait still + pillars — there is no photography for this page and a
stock still would have to be invented); `LS-06` tabs (hides copy from search and from an AI answer);
`APM-02` comparison matrix (a “what this is not” list is not a matrix, and the ticks would have to be
drawn as icons); `TF-01`/`TF-06` (image bands).

Band rhythm: **light → light → dark → light → light → dark → light → light → dark.** Same-theme followers
collapse their top pad to `--pilot-section-y-stack` through the global `[data-band]` rule; no page-level
`padding-top: 0` and no bespoke band pads.

---

## Copy decisions (all traceable to the note)

1. **Custody is corrected to Dwight's answer.** v3's “Not custody without controls” implied Falcon holds
   the assets. The Answers block says the opposite: *“Digital assets are held by independent, regulated
   third-party qualified custodians selected by the client. Falcon Equity Group does not custody client
   assets.”* Section 05 row 3 and the FAQ answer now say that. This is the one place where leaving v3
   alone would have published a claim the client has since contradicted.
2. **Fees.** “Scoped per engagement” is kept, and the answer's detail added: fixed consulting fee,
   retainer and/or success-based component; minimums discussed confidentially. No number appears — the
   design system and the live site both forbid one.
3. **Securities line.** The answer's wording goes into section 05 row 4 and the “Is this legal and
   regulated?” answer: Falcon assists clients in structuring vehicles and documentation, and does not
   offer, sell or distribute tokenized interests or other securities.
4. **Stablecoin rails.** “Any stablecoin or digital-asset payment flow runs through licensed third-party
   partners; Falcon does not itself transmit or exchange virtual currency.” Added to section 05 row 4.
5. **Counterparty.** “Services are provided by Falcon Equity Group LLC…” becomes its own FAQ row rather
   than sitting only in the footer disclosure.
6. **CTA label: `Book a consultation`** (v3's recommendation, and the note's own open question). It is
   the one page where “Apply for funding” would be wrong. If Ling wants the sitewide label back it is a
   one-word change in the hero and the closing band.
7. **No amounts, terms, requirements or price anywhere.** Confirmed: `SERVICES` carries
   `Tailored to your business · Consultative` and no spec, so `ProductTermsTable` is not used.

## Data changes this page forces

- `src/data/service-faqs.ts` gains a `decentralized-business-financing` key (10 Q&As). `/faq` reads
  `SERVICE_FAQS` through `FAQ_GROUPS` and filters on `SERVICES`, so **the /faq page grows a group and nine
  to ten questions the moment the route is live** — intended (one source for answers), and the group links
  back to this page now that the route exists.
- Route lift: `/services/decentralized-business-financing` stops redirecting in `astro.config.mjs`,
  `netlify.toml` and `public/_redirects`; the nav dropdown and the home services card stop pointing at
  `/#services`. Follows the skill's rule: a page is not built until its route stops redirecting.

## Still open / for Ling

1. **AI logos** — which marks, and does Dwight have permission to use them? Nothing ships until then.
2. **CTA label** — `Book a consultation` (built) vs `Apply for funding` (sitewide).
3. **Closing band vs `SiteCta`** — built as its own band; revert is `cta={true}`.
4. **The still Dwight flagged** (peregrine falcon 4K YouTube, 20 Oct) reads as brand/video material for
   the home page, not this one. Nothing on this page needs photography.
