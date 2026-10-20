# Content outline: Merchant Cash Advance

Pilot service page for the Blackstone rebuild. **Content only.** Do not change design or code from this file.

**Page:** `/services/merchant-cash-advance`  
**Source of numbers:** live `falconequity.ai` spec (Who it's for / Amounts / Terms / Requirements). Do not invent rates, factor rates, or new amounts.

---

## Why this page

Compared every service page against the shared template in `src/pages/services/[slug].astro` and the copy in `src/data/services.ts`.

**Merchant Cash Advance is the most duplicated page.** Not Line of Credit, not Consolidation.

- The product is named three ways on one page: Merchant Cash Advance, working capital, and working capital bridge. Summary, option name, SEO description, and application steps all restate the same dual label. There is only one option in the data: `Merchant cash advance / working capital bridge`.
- The four typical uses appear three times: Statement band (all four titles), Typical use / Principles (first three titles plus the hero headline as the H2), Use cases (three situations that retell the same uses).
- Speed is the page's only message, said in the hero headline, intro, summary, stats, FAQ, and the sitewide CTA.
- Amounts and terms sit in both the BXCI stats band and the Overview spec block. Who it's for restates the requirements list.

Line of Credit is the other crowded page: two options with identical figures appear in the statement band and again in an options accordion, then a second FAQ accordion. That is template duplication. MCA's problem is content: the same four uses and the same speed claim, plus a second product name that is not a second product.

MCA is also home featured-1, so it is the right one-page pilot.

Working Capital is not a separate route. It is the MCA option's other name. Keep one product; treat "working capital bridge" as a use, not a second accordion row.

**Explore more:** already removed from industry and service pages. It stays out of this outline. Do not add it back.

---

## Current section order (with copy)

Rendered by `src/pages/services/[slug].astro` for this slug. Accordion is FAQ (not options) because `options.length === 1`. There is no process section on the page, even though `steps` exist in the data. There is no Explore more.

### 1. Hero — Blackstone inner page hero

- **H1:** Merchant Cash Advance
- **Lead (headline):** Speed is your edge. We bring the capital.
- **Media:** existing 16:9 service still (`merchant-cash-advance.jpg`)
- No eyebrow on H1 (design-system rule).

### 2. Stats band — BXCI featured stats (`HeroStats`)

- Featured label / value: Typical amounts / `$5,000 – $5,000,000` (compacted on screen to `$5K-$5M`)
- Side: Terms / `3 – 18 months`; Funding speed / `Same-day funding`

### 3. Statement band — dark split image + list (same product photo, 4:3 crop)

Four titles, no bodies, from `idealUses`:

1. Seizing a time-sensitive inventory deal
2. Bridging a slow season
3. Funding a marketing push
4. Covering urgent repairs or replacements

### 4. Accordion — FAQ (standing in for options)

- **Eyebrow:** FAQ
- **H2:** Cash Advance questions

| Q | A |
| --- | --- |
| Is a merchant cash advance a loan? | No. An MCA is a purchase of future receivables. Instead of a fixed loan payment, remittances are based on your sales under the terms of your agreement. |
| How fast can I get funded? | Merchant cash advances can fund the same day once you are approved and your agreement is signed. Timing depends on how quickly documents are provided. |
| Does my credit score matter? | Revenue and bank activity carry the most weight, but your specialist will review your full profile. Approval is never guaranteed. |

### 5. Overview — `FeatureSplit`

- **Eyebrow:** Overview
- **H2 (the intro, used as the title):** A merchant cash advance provides a lump sum in exchange for a portion of your future receivables. Approval focuses on your revenue and bank activity, which makes it one of the fastest ways to fund a business.
- **Spec block** (live site):
  - Who it's for: Businesses with $10K+ monthly revenue and 3+ months in operation.
  - Amounts: `$5,000 – $5,000,000`
  - Terms: `3 – 18 months`
  - Requirements: 3+ months in business; $10K+ monthly revenue; Active business bank account
- **CTA:** Apply for this product → `/apply`

### 6. Typical use — `Principles`

- **Eyebrow:** Typical use
- **H2:** Speed is your edge. We bring the capital. *(same string as the hero lead)*
- Items (first three `idealUses`, titles only):
  1. Seizing a time-sensitive inventory deal
  2. Bridging a slow season
  3. Funding a marketing push

### 7. Use cases — `UseCases`

- **Eyebrow:** Use cases
- **H2:** Situations owners bring to Falcon.
- **Note:** Generic situations. Not real clients or results.
- Three cards:

| Industry | Title | Body |
| --- | --- | --- |
| Retail | A supplier discount will not wait on a bank. | An advance based on future sales can fund a time-sensitive inventory buy, often the same day after approval. |
| Landscaping | A slow season still has payroll and rent. | A working-capital bridge covers the off-season until peak work returns. |
| Hospitality | A marketing push before a busy stretch. | Revenue-based capital can fund the campaign while approval looks at bank activity more than a credit score. |

### 8. CTA band — sitewide

- **H2:** Get funding today
- **Body:** One short application. A specialist reviews your file promptly. Many products fund within 24-48 hours of approval.
- **Buttons:** Get Funding Today → `/apply`; Direct phone `+1 (917) 245-5277`

### Present in data, not on the page

**Steps** (`standardSteps('working capital')`):

1. Apply in minutes — Complete one short online application. Tell us about your business and how much working capital you need.
2. Review with a specialist — A Falcon funding specialist reviews your file, asks for anything missing, and walks you through your options.
3. Approve and fund — Once approved, review and sign your agreement. Funds can arrive in as little as 24–48 hours.

**Summary** (used on `/services` rows and SEO, not as a visible section here): Fast working capital based on your future sales, also used as a working capital bridge. $5K to $5M with same-day funding.

**SEO:** Merchant cash advances and working capital bridges from $5,000 to $5,000,000, with same-day funding and 3 – 18 month terms.

---

## Duplicated or repeated messages

Each row is one message. "Where it appears" is the current page unless noted.

| Message | Where it appears now | Keep once in |
| --- | --- | --- |
| Speed / same-day funding | Hero headline ("Speed is your edge"); intro ("one of the fastest ways"); summary; HeroStats "Funding speed"; FAQ "How fast can I get funded?"; use case inventory body ("often the same day"); sitewide CTA ("24-48 hours") | Stats (the figure). FAQ keeps only the document-timing caveat. Hero keeps the punch line, not the figure. |
| Amounts `$5,000 – $5,000,000` | HeroStats; spec Amounts; summary; SEO | Stats featured + terms accordion |
| Terms `3 – 18 months` | HeroStats; spec Terms; SEO | Stats side + terms accordion |
| Who it's for = 3+ months and $10K+ revenue | Spec whoFor; spec requirements (same two facts); FAQ credit answer (revenue/bank activity) | Terms accordion, Requirements row. Who-for sentence moves into What we do body, without restating the two bullets. |
| MCA is a purchase of future receivables, not a loan | Intro; FAQ "Is a merchant cash advance a loan?"; inventory use-case body | What we do body (one sentence) + FAQ (the legal distinction) |
| Approval looks at revenue and bank activity more than credit | Intro; FAQ "Does my credit score matter?"; hospitality use-case body | FAQ. Drop from use-case body. |
| Time-sensitive inventory | Statement band item 1; Principles item 1; Retail use case | What we do item 1 |
| Bridging a slow season | Statement band item 2; Principles item 2; Landscaping use case ("working-capital bridge") | What we do item 2 |
| Funding a marketing push | Statement band item 3; Principles item 3; Hospitality use case | What we do item 3 |
| Urgent repairs or replacements | Statement band item 4 only (no body, not in Principles or Use cases) | What we do item 4 |
| Hero headline reused as a later H2 | Hero lead and Principles H2 are the same sentence | Hero only |
| MCA / working capital / working capital bridge as if two products | Summary; option name; SEO; step 1 ("how much working capital"); landscaping use case | One product name on the page (Merchant Cash Advance). "Working capital bridge" is a use, not a second accordion product. |
| Apply | Overview arrow CTA and closing CTA band | Closing CTA band only |
| Explore more | Removed from this page and industry pages in the Blackstone pass | Stay omitted |

**Not duplicates — leave them:** the three FAQ questions are distinct once speed and credit are no longer also the intro. The three use-case *stories* can survive as the bodies of What we do items. Process copy is unused, so bringing it on is not a repeat.

---

## Deduplicated outline

Seven sections. Each maps to a Blackstone / BXCI / BREIT pattern from `docs/blackstone-design-system.md`. Copy is reused and trimmed. New sentences only where a gap is marked.

Do not add Explore more. Do not add testimonials. Do not publish factor rates (still unconfirmed). Do not add people, quotes, or numbers that are not already on this page or in `STATS` / the live spec.

### 1. Hero

- **Pattern:** Blackstone inner-page hero (H1 span 7, lead span 5, then one 16:9 still). No eyebrow on H1.
- **Purpose:** Name the product and state the one idea that is not a number: speed.
- **Eyebrow:** none
- **Headline (H1):** Merchant Cash Advance
- **Lead:** Speed is your edge. We bring the capital.
- **Media:** existing service still, 16:9. Do not reuse it in a later section (design-system: one still in the hero, optional second crop only if a What we do portrait is needed).
- **Notes:** Drop "working capital bridge" from the title. The H1 is the product name from the live site.

### 2. What we do

- **Pattern:** BXCI What we do — H2 span 10; portrait cols 1–6; stacked items start 8 span 5. Combines current Overview + Statement band + Typical use + Use cases.
- **Purpose:** Say what an MCA is, who it fits, and the four uses — once.
- **Eyebrow:** What we do
- **Headline (H2):** A lump sum against your future sales.
- **Body (section lead, trimmed from intro + whoFor):** A merchant cash advance is a purchase of a portion of your future receivables, not a loan. Approval focuses on revenue and bank activity. It fits businesses with $10K+ in monthly revenue and 3+ months in operation.
- **Items** (titles from `idealUses`, bodies from existing use cases; fourth body is a gap fill from the title only):

  1. **Seizing a time-sensitive inventory deal** — An advance based on future sales can fund a time-sensitive inventory buy, often the same day after approval.
  2. **Bridging a slow season** — Payroll, rent and insurance still run in the off-season. A working-capital bridge covers that stretch until peak work returns.
  3. **Funding a marketing push** — Revenue-based capital can fund a campaign before a busy stretch.
  4. **Covering urgent repairs or replacements** — Use this when a repair or replacement cannot wait on retained earnings. *(gap: no existing body; do not add a dollar result or a named shop)*

- **Media:** labeled 3:4 portrait, empty of people. Do not reuse the hero still. If no distinct asset exists, use `Image placeholder: MCA what-we-do portrait (3:4)`.
- **Dropped from this section:** spec amounts/terms (stats + accordion); Apply arrow (closing CTA); the hero headline as H2; the "Generic situations. Not real clients" disclaimer (the items are uses, not testimonials).

### 3. Stats band

- **Pattern:** BXCI `.bx-stat-featured` (`HeroStats`). Featured figure + two side stats. No footnotes, Note, or numbered list.
- **Purpose:** The three published figures, once, at the size Blackstone uses for numbers.
- **Eyebrow:** none (stats are not an H2 section)
- **Headline:** none
- **Featured:** Typical amounts — `$5,000 – $5,000,000`
- **Side:** Terms — `3 – 18 months`; Funding speed — `Same-day funding`
- **Notes:** Compact on screen as today (`$5K-$5M`, `3-18 mo`, `Same day`). Do not add 98%, $100M+, or Kandy-style figures. Skip this band only if amounts become non-numeric.

### 4. Products / terms accordion

- **Pattern:** BXCI Credit strategies accordion (black rules, plain chevron closed, filled circle open). One product, so the rows are terms — not a fake second product.
- **Purpose:** Who / amounts / terms / requirements / how remittance works, in one place. Replaces the Overview spec block and stops MCA vs working-capital-bridge from looking like two options.
- **Eyebrow:** Terms
- **Headline (H2):** What you can expect.
- **Rows** (reuse spec + FAQ; do not invent rates):

  1. **Typical amounts** — `$5,000 – $5,000,000`. Final amounts depend on underwriting.
  2. **Terms** — `3 – 18 months`. Remittances follow your sales under the agreement, not a fixed loan payment.
  3. **Requirements** — 3+ months in business; $10K+ monthly revenue; active business bank account.
  4. **How remittance works** — An MCA is a purchase of future receivables. You remit an agreed share of sales until the purchased amount is delivered. It is not a loan.

- **Do not add:** a "Working capital bridge" row; interest rates; factor rates; `[PLACEHOLDER]` numbers.
- **CTA inside the open row (optional, existing pattern):** Apply → `/apply`. If present, drop the duplicate Apply in Overview.

### 5. Process

- **Pattern:** Home process (three numbered columns). Blackstone uses type here, not photos.
- **Purpose:** How to get this product. The copy already exists in `STANDARD_STEPS` / MCA `steps` and is unused on the page today.
- **Eyebrow:** Process
- **Headline (H2):** How you get approved.
- **Body:** none beyond the three steps.

  1. **Apply in minutes** — Complete one short online application. Tell us about your business and how much capital you need. *(trimmed "working capital" so this page does not reintroduce the second product name)*
  2. **Review with a specialist** — A Falcon funding specialist reviews your file, asks for anything missing, and walks you through your options.
  3. **Approve and fund** — Once approved, review and sign your agreement. Funds can arrive in as little as 24–48 hours.

- **Notes:** Same three titles as home. That is intentional (one process firm-wide). Do not add a fourth step.

### 6. FAQ accordion

- **Pattern:** Blackstone FAQ accordion (slate hairline, outline circle closed, filled circle open).
- **Purpose:** Objections that are not already answered by stats or the terms rows.
- **Eyebrow:** FAQ
- **Headline (H2):** Cash Advance questions.

| Q | A | Edit |
| --- | --- | --- |
| Is a merchant cash advance a loan? | No. An MCA is a purchase of future receivables. Instead of a fixed loan payment, remittances are based on your sales under the terms of your agreement. | Keep. Terms accordion says this too in shorter form; FAQ is the place people look. |
| How fast can I get funded? | Timing depends on how quickly documents are provided. Once you are approved and the agreement is signed, merchant cash advances can fund the same day. | Keep, but lead with the caveat. The same-day figure already lives in stats. |
| Does my credit score matter? | Revenue and bank activity carry the most weight, but your specialist will review your full profile. Approval is never guaranteed. | Keep. Only home for this. |

Do not add "How much can I get?" or "What are the terms?" — those are the stats/accordion.

### 7. CTA

- **Pattern:** Falcon `.bg-cta` lilac band (not BX yellow). H2 span 10, body start 7.
- **Purpose:** Close. One apply path.
- **Eyebrow:** none (CTA is not an eyebrow section)
- **Headline (H2):** Get funding today
- **Body:** One short application. A specialist reviews your file promptly. Many products fund within 24-48 hours of approval.
- **Buttons:** Get Funding Today → `/apply`; Direct `+1 (917) 245-5277`

---

## What this outline removes

- Statement band as its own section
- Typical use / Principles (and the reused hero headline as an H2)
- Use cases as a third retelling
- Overview spec amounts/terms (kept in stats + accordion)
- Overview Apply arrow (kept on the closing band)
- Dual option name in the accordion
- Explore more (already gone; stays gone)

## Open questions

1. **Ling: is "Dwight Holly, Founder & CFO" the right credit?** The About quote keeps that attribution as it is today. Flagged there and on the home outline; not used on this service page.
2. Confirm with Dwight/Ling that Merchant Cash Advance and "working capital bridge" stay **one product** on this URL. If they ever split, that is a new page, not a second accordion row with the same spec.
3. Factor rates and APRs stay unpublished until Dwight confirms (existing TODO). Do not lift numbers from the factor-rate blog into this page.
4. Fourth What we do item has no existing body. The gap sentence above is title-only. Replace if Dwight has a real (non-identifying) situation.
5. Process step 1 currently says "how much working capital you need." Outline trims that to "capital" so the second product name does not return. Confirm.
6. Do not use Jotform applicant data, including SSNs, as examples.
7. Domain stays `falconequity.ai` until Ling approves a switch. Do not merge PR #1 from this work.
