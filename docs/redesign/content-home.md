# Content outline: Home

Pilot landing for the Blackstone rebuild. **Content only.** Do not change design or code from this file.

**Page:** `/`  
**Pair with:** `docs/redesign/content-merchant-cash-advance.md` (the one service-page pilot).

Numbers on this page come from `STATS` in `src/data/site.ts` (confirmed by Ling). Do not copy Kandy Capital. Do not invent people, quotes, or extra figures. The home testimonial is the consented JJJ Enterprise Trucking quote. Real applicant / Jotform data (including SSNs) is never copy.

---

## Current section order

Rendered by `src/pages/index.astro`.

### 1. Hero — Blackstone home slide (`#slide-1-2`)

Dark band, split H1, 16:9 then 21:9 media, caption row under the still.

- **H1 line 1:** Fuel Success with
- **H1 line 2:** Fast Funding *(nested 8-col offset from 1024; wraps as one phrase below)*
- **Aside:** Unlock rapid financial solutions tailored to your business needs.
- **Media:** `hero-meeting.webp` — Advisor meeting with two clients at a table. Alt: “Advisor smiling as she reviews documents with two clients at a conference table”. `object-position: 50% 40%`.
- **Caption H2:** Apply to get same-day funding
- **Caption body:** One short application. A specialist reviews your file promptly. Many products fund within 24-48 hours of approval.
- **Caption CTA:** Learn more → `/apply`

No eyebrow on the H1 (design-system rule). The caption row is the Blackstone "title under the still" pattern, not a second photo.

### 2. Stats strip — compact `.stats-grid` (`StatsBar`)

All five Ling-confirmed figures, equal weight, no featured number:

| Value | Label |
| --- | --- |
| $100M+ | Funding deployed |
| 15 | Years of experience |
| 300+ | Businesses helped |
| 24-48h | Average funding time |
| 98% | Approval for qualified applicants |

### 3. Services — link list (not the old bento)

- **Eyebrow:** Services
- **H2:** How we can bring you victory.
- **Rows** (name + `rangeLine` left, teaser middle, circle arrow right):

| Name | Range line shown | Teaser in data (unused on home today) |
| --- | --- | --- |
| Merchant Cash Advance | $5,000 – $5,000,000 · 3 – 18 months | Fast working capital based on your future sales, from $5,000 to $5,000,000. |
| Collateral & Asset Loans | $10,000 – $1,000,000 · 12 – 60 months | Real-estate and collateral-secured loans that put the assets you already own to work. |
| Business Term Loan | $10,000 – $2,000,000 · 6 – 36 months | Structured loans from $10,000 to $2,000,000 with 6 – 36 month terms. |
| Invoice Factoring Tool | $10,000 – $3,000,000 · Ongoing facility | Turn unpaid B2B invoices into cash today instead of waiting on net-60. |
| Consolidation of Positions | $10,000 – $2,000,000 · 6 – 36 months | Combine stacked advances into one position and save 30%–50% on daily or weekly payments. |
| Decentralized Business Financing | Tailored to your business · Consultative | Crypto onboarding and custodial services for businesses holding digital assets. |
| Business Line of Credit | $10,000 – $500,000 · Revolving | Flexible revolving capital. Draw what you need and pay interest only on what you use. |

Order follows `getHomeServices()`: featured-1 (MCA) first, then the five non-featured products, featured-2 (Line of Credit) last.

- **CTA:** Learn more → `/services`

### 4. Testimonial

- **Eyebrow:** Testimonial
- **Quote (verbatim):** After covid, I thought my startup was out of options. Falcon Equity Group turned things around with their debt consolidation solution, saving me 40% on payments and freeing up cash flow. Their expertise and care gave my business a new lease on life!
- **Credit:** JJJ Enterprise Trucking (business only; no owner-name line)
- **Media:** existing trucking/transport still (`trucking-factoring-vs-business-loan.jpg`)
- **Layout:** EARNINGS announcement (quote left, 3:4 still, credit bottom-right)

### 5. Process

- **Eyebrow:** Process
- **H2:** How you get approved.
- Three columns from `STANDARD_STEPS`:

  1. **Apply in minutes** — Complete one short online application. Tell us about your business and how much capital you need.
  2. **Review with a specialist** — A Falcon funding specialist reviews your file, asks for anything missing, and walks you through your options.
  3. **Approve and fund** — Once approved, review and sign your agreement. Funds can arrive in as little as 24–48 hours.

No photos (Blackstone: process is type).

### 6. CTA band

Sitewide Govwell-style wheel in the layout, above the footer. Lead “Need funding to” and eight rotating uses (purchase inventory through consolidate business debt), both body/Inter, 4.5rem pitch, plain white when active, Lilac/Martinique “Apply for funding”. No “for your business” tail. Band matches the footer (`--color-surface-dark`).

### Nearby copy, not currently on home

Usable later without inventing:

- **When to apply** (`WHEN_TO_APPLY`): Grow; Bridge a slow season; Seize an opportunity; Run day-to-day operations.
- **Why Falcon** (`WHY_FALCON`): Same-day approvals; Funded in 24-48h; Consolidation specialists (30–50% on average on daily or weekly payments); A dedicated specialist; Tailored solutions (seven products); Digital asset ready.
- **Qualify** (`QUALIFY`): 3+ months; $10K+ monthly revenue; 550+ for loans; 6 months of statements.
- **Founder quote** (About, live-site sentence): “Falcon Equity Group empowers your business with fast, tailored funding solutions, expertly navigating the complex financial landscape to ensure your wealth works for you.” Credited **Dwight Holly, Founder & CFO**.
- **Twelve industries** with names, blurbs, and uses in `src/data/industries.ts`.
- **Eight published posts** (plus twelve draft industry articles that stay preview-only).

---

## Problems with the current order

- Hero caption, process step 3, and the CTA band all say the same 24–48 hour / one-application line.
- Stats are a compact five-up strip. BXCI leads with one featured figure; the five-up fights that.
- Services is a range list. The teasers already written for home never appear, so the section does not say what Falcon *does*.
- Testimonials are a hole: the heading exists in code, the quotes are placeholders, the section is hidden. Do not fill it with fake reviews.
- Home never shows industries, insights, or the founder. Blackstone home / Insights / The Firm and BREIT all pace the scroll with those blocks.
- Explore more is gone from industry and service pages. Do not add an Explore more row here either.

---

## Proposed order

Keep hero, services, and Insights. Restyle stats to the Tac Opps featured band (`$100M+` large). Industries uses a sector dropdown. Founder quote lives on About. Home testimonial is the consented JJJ Enterprise Trucking quote. Pre-footer CTA is the layout `.site-cta` wheel (not the old Get-funding band).

| # | Section | Status | Blackstone / BREIT model |
| --- | --- | --- | --- |
| 1 | Hero | Keep | `blackstone.com` home `#slide-1-2` |
| 2 | By the numbers | Keep, restyle | BXCI `.bx-stat-featured` |
| 3 | Services | Keep, show teasers | BXCI / home "our businesses" list |
| 4 | Industries | **Add** | Insights 16:9 image cards |
| 5 | How it works | Keep | BX process-as-type; three columns |
| 6 | Founder quote | **Add** | `breit.com` quote split |
| 7 | Insights | **Add** | `blackstone.com/insights/` strip |
| 8 | CTA | **Layout wheel** | Govwell-style rotating phrase band above the footer |

That is three additions (industries, quote, insights) plus a stats restyle. A fourth candidate, "When to apply" from `WHEN_TO_APPLY`, is parked below — only add it if the services list stays names-and-ranges and needs a narrative. Prefer showing the existing teasers over adding another section.

Visual density: **one photo in the hero.** Industries and Insights may use 16:9 cards (those grids *are* the visual). Quote uses the existing Dwight portrait. Process and CTA stay type-only. Do not put a picture on every block.

---

### 1. Hero

- **Pattern:** Blackstone home slide + BREIT promo-carousel caption. Split H1 (span 8 + aside start 9 span 4), full-width still, caption row (H2 cols 1–6, body+Learn more start 8 span 5, top-aligned).
- **Purpose:** Name the firm in a sentence, then the speed claim that is Falcon's actual offer.
- **Eyebrow:** none
- **Headline (H1):** Fuel Success with / Fast Funding
- **Aside:** Unlock rapid financial solutions tailored to your business needs.
- **Caption H2:** Apply to get same-day funding
- **Caption body:** One short application. A specialist reviews your file promptly. Many products fund within 24-48 hours of approval.
- **Caption CTA:** Learn more → `/apply` *(or "Get Funding Today" if Ling wants one label on every primary)*
- **Media:** existing falcon still only. No second hero photo.
- **Trim:** Keep the 24–48 hour line here. Process and CTA should not repeat the full paragraph (see those sections).

### 2. By the numbers

- **Pattern:** BXCI featured stats, not the equal five-up. Featured label is sans 24/32, value is the large display figure; two side stats from 768.
- **Purpose:** Proof, using only Ling-confirmed figures. This is the Blackstone "by the numbers" band the current strip is trying to be.
- **Eyebrow:** none (stats are not an H2 section)
- **Headline:** none
- **Featured:** Funding deployed — `$100M+`
- **Side (pick two, keep the qualifier on 98%):**
  - Years of experience — `15`
  - Average funding time — `24-48h`
- **Where the other two go:** `300+` Businesses helped and `98%` Approval for qualified applicants stay in the dataset. If a third side slot is ever added, 98% **must** keep "for qualified applicants". Do not promote 98% as a bare featured number. Do not add a customer-satisfaction figure (explicitly unpublished).
- **Do not use:** Kandy numbers; Jotform counts; unverified monthly volume.

Industry pages already use `$100M+` / `15` / `24-48h` in this layout. Home should match.

### 3. Services

- **Pattern:** Section header (eyebrow + H2 span 10, body start 7) plus a list of seven products. Closer to BXCI / "our businesses" than to a bento of photos. No product photos on home (design-system: home visuals = the hero still only).
- **Purpose:** The offer. MCA remains the first row (featured-1). Line of Credit last (featured-2).
- **Eyebrow:** Services
- **Headline (H2):** How we can bring you victory.
- **Body:** Seven funding products, matched to the file instead of forced into one box. *(trimmed from `WHY_FALCON` "Tailored solutions"; new as a lead only if teasers are not shown)*
- **Rows:** name + existing teaser + range line. Showing the teasers removes the need for a separate "What we do" essay.

  1. **Merchant Cash Advance** — Fast working capital based on your future sales, from $5,000 to $5,000,000. `$5,000 – $5,000,000 · 3 – 18 months`
  2. **Collateral & Asset Loans** — Real-estate and collateral-secured loans that put the assets you already own to work. `$10,000 – $1,000,000 · 12 – 60 months`
  3. **Business Term Loan** — Structured loans from $10,000 to $2,000,000 with 6 – 36 month terms. `$10,000 – $2,000,000 · 6 – 36 months`
  4. **Invoice Factoring Tool** — Turn unpaid B2B invoices into cash today instead of waiting on net-60. `$10,000 – $3,000,000 · Ongoing facility`
  5. **Consolidation of Positions** — Combine stacked advances into one position and save 30%–50% on daily or weekly payments. `$10,000 – $2,000,000 · 6 – 36 months`
  6. **Decentralized Business Financing** — Crypto onboarding and custodial services for businesses holding digital assets. `Tailored to your business · Consultative`
  7. **Business Line of Credit** — Flexible revolving capital. Draw what you need and pay interest only on what you use. `$10,000 – $500,000 · Revolving`

- **CTA:** Learn more → `/services`
- **Notes:** Decentralized stays "Tailored" until Dwight confirms a spec. Do not invent amounts for it. Do not add an Explore more heading.

### 4. Industries — complementary (add)

- **Pattern:** Blackstone Insights image cards: 16:9 crop, square corners, zoom 1.06, category-or-name + title, no boxed chrome. Three cards per row (`bx-lg-span-4`).
- **Purpose:** Show that Falcon funds operating companies in specific trades, then send people to `/industries`. Home currently has no industry surface.
- **Eyebrow:** Industries
- **Eyebrow:** Industries
- **Headline (H2):** Sectors we fund.
- **Body:** We fund businesses across these twelve sectors, and others with steady revenue. *(existing `/industries` lead)*
- **Cards:** six of the twelve published industry pages. **Not a ranking** — there is no volume data. Remaining six stay on `/industries`. Each card: name + existing blurb (or the three `uses` joined, as the index does today).

  | Name | Blurb (existing) |
  | --- | --- |
  | Retail | Stock the shelves before the rush, not after it. Capital that keeps pace with your selling seasons. |
  | Transportation & Logistics | Keep trucks rolling and routes covered, even when fuel spikes or a broker pays late. |
  | Restaurants & Food Service | From a new walk-in cooler to a patio build-out, funding that respects thin margins and busy nights. |
  | Construction | Win the bid, then mobilize. Capital for materials, crews and machinery before the first draw lands. |
  | Healthcare | Practices run on reimbursements that arrive on someone else’s schedule. We help close the gap. |
  | Professional Services | Agencies, firms and consultancies grow by hiring ahead of demand. Capital that funds your next hire. |

- **Media:** labeled 16:9 placeholders from `INDUSTRY_PLACEHOLDERS` (empty of people). Do not generate people. Do not reuse the falcon hero.
- **CTA:** View all industries → `/industries`
- **Do not add:** an Explore more row of other industries under this grid.

### 5. How it works (process)

- **Pattern:** Three columns after a span-10 header. Type only.
- **Purpose:** The path. Same three steps as the MCA pilot so the firm has one process.
- **Eyebrow:** Process
- **Headline (H2):** How you get approved.
- **Steps:** keep the three `STANDARD_STEPS` bodies as they are (home already says "capital", not "working capital").
- **Trim vs hero/CTA:** do not add the hero caption paragraph above the cards. Step 3 already covers 24–48 hours.

### 6. Founder quote — complementary (add)

- **Pattern:** BREIT quote split. 3:4 portrait span 4; quote start 6 span 7; **sans** light; name 700 small, role muted, bottom-right.
- **Purpose:** One real person, one live-site sentence. This is the BREIT pattern; About already uses it. Home currently has no voice except the H1.
- **Eyebrow:** none (the quote *is* the section)
- **Headline:** none
- **Quote (unchanged, live About copy only):** “Falcon Equity Group empowers your business with fast, tailored funding solutions, expertly navigating the complex financial landscape to ensure your wealth works for you.”
- **Credit (unchanged until Ling answers):** Dwight Holly, Founder & CFO
- **Photo:** existing `dwight-holly.webp`. Do not generate a different person. Do not add staff headshots.
- **Open question for Ling:** is **Dwight Holly, Founder & CFO** the right credit? Keep this attribution as it is on About today. Do not change the name or title in copy until she says so. (Ling calls him Shaun; the live site and `SITE.founder` say Dwight Holly, Founder & CFO.)
- **Do not:** invent a second quote; use placeholder testimonials in this slot; imply the sentence is a client review.

### 7. Insights — complementary (add)

- **Pattern:** `blackstone.com/insights/` — three 16:9 article cards (category eyebrow, title, image zoom). Not a full blog index.
- **Purpose:** Pace the lower page with useful writing, and give the eight published posts a home besides `/blog`.
- **Eyebrow:** Insights
- **Headline (H2):** Guides for getting funded.
- **Body:** Short guides on getting approved, comparing options, costs, and cash flow. *(existing `/blog` lead)*
- **Cards:** three of the **published** posts only (`draft: false`). Draft industry articles stay off home. Suggested three, all existing:

  1. **Getting Approved** — Your 24–48 hour funding checklist
  2. **Compare Options** — Merchant Cash Advance vs. Business Term Loan: which wins for your business?
  3. **Cash Flow & Debt** — Bridging a slow season without burning your savings

  Alternates if Ling prefers cost education: *How to read a factor rate*; *What your bank statements say before anyone reads your application*.

- **Media:** existing post covers. No new people.
- **CTA:** View all → `/blog`
- **Notes:** Handover: blog posts still need Dwight/Ling approval before production merge. On preview this strip is fine. Do not put draft posts here.

### 8. CTA

Removed sitewide. Header Apply remains the primary conversion control (black button). Hero caption still has “Apply for funding”.

---

## Parked (do not add unless a gap remains)

**When to apply** (`WHEN_TO_APPLY`) as a BXCI What we do band: Grow; Bridge a slow season; Seize an opportunity; Run day-to-day operations. Use this only if services stay a range list with no teasers. Prefer teasers.

**Why Falcon** six cards. Several items duplicate stats (same-day, 24–48h) or the services intro (seven products). Skip on home.

**Qualify** four cards. Better on `/faq` and `/apply`, which already use `APPLICATION_DOCS`.

**Extra testimonials.** The unused `TESTIMONIALS` stubs in `content.ts` stay out of the public page. Do not invent additional reviews.

**Explore more.** Removed from industry and service pages. Not a home section.

---

## Duplicates this outline removes on home

| Repeat | Now | After |
| --- | --- | --- |
| One application + 24–48 hours | Hero caption, process step 3, CTA body | Hero caption; process step 3 keeps the funding-time fact; CTA body trimmed |
| Five equal stats vs one featured story | Compact five-up | BXCI featured `$100M+` + two sides |
| Services names without meaning | Range lines only; teasers unused | Name + existing teaser + range |
| Empty testimonials heading | Hidden placeholders | Section omitted |
| No industries / no insights / no founder | Missing | Three complementary sections, existing copy only |
| Explore more | Already gone on inner pages | Stay gone |

---

## Open questions

1. **Ling: is "Dwight Holly, Founder & CFO" the right credit** on the BREIT quote (home and About)? Keep the credit exactly as it is until she answers.
2. Which two side stats sit next to `$100M+` — `15` years and `24-48h` (as industry pages do), or swap in `300+` businesses?
3. Six industry cards vs all twelve on home. Outline uses six plus "View all" so the grid stays an Insights-style strip, not a second `/industries`.
4. Insights strip: the three posts above, or Ling's pick among the eight published.
5. Blog posts still need approval before production; Insights on a passworded preview is the safe place to try the strip.
6. Hero caption CTA says "Learn more" while the closing band says "Get Funding Today". One label?
7. CTA body: accept the trimmed sentence, or reuse the hero paragraph and live with the repeat.
8. Domain stays `falconequity.ai`. Do not merge PR #1. Do not spend money. Do not send email.
