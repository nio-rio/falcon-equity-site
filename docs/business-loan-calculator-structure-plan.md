# Business loan calculator — structure plan (`/resources/business-loan-calculator`)

Ling: *"Create the 'Business Loan Calculator' page, with just the calculator, and CTA section and footer. Do some research and see what a business loan calculator should be like, and then build it."*

Copy source: the Notion note `Business loan calculator — page copy (/resources/business-loan-calculator)`
(`402eacd0-19c7-816e-924e-e1d85e6aa715`) is **not readable by the integration** — `/v1/pages/<id>` returns
the title but `/v1/blocks/<id>/children` returns `object_not_found` for all three keys, and `/v1/search`
does not list it (its sibling notes, e.g. Credit Repair & Loan Prep, are readable). So the page copy here is
written fresh in the site voice and is open to Ling's edit; the structure below follows the research.

## What the research says a business loan calculator is

| Site | Inputs | Outputs | Notes |
| --- | --- | --- | --- |
| [NerdWallet](https://www.nerdwallet.com/business/loans/calculators/business-loan) | loan type preset (SBA 7(a) / online term loan / LOC), loan amount ($99 – $2,000,000), term in months, APR | monthly payment, total principal, total interest, total principal & interest, payment-by-payment breakdown | factor rates are pushed to a **separate** "factor rate to APR calculator" |
| [Bankrate](https://www.bankrate.com/loans/small-business/business-loan-calculator/) | loan amount, loan term, interest rate | monthly payment | has a "what if my loan uses a factor rate?" section: factor × principal = payback |
| [LendingTree](https://www.lendingtree.com/business/business-loan-calculator/) | loan amount, interest rate (not APR — the page says so), term | monthly payment, total interest, amortization schedule | "Can you use a factor rate with a business loan calculator?" — answer: **convert it elsewhere first**, do not type it into the interest field |
| [OnDeck](https://www.ondeck.com/resources/business-loan-calculator) | loan amount, APR, term, applicable fees | payment estimate | fee field exists because APR folds fees in |
| [calculator.net](https://www.calculator.net/business-loan-calculator.html) | amount, rate, term, compounding, origination + documentation fee | payment, true APR, amortization table | the fee-aware APR is the most rigorous of the five |

Three things every one of them gets right, and this page must too:

1. **Amount, term and rate are the only required inputs.** Nothing else is asked before the first number appears.
2. **The outputs are payment + total cost in dollars.** Total repaid is the number that survives comparison; the headline rate is not.
3. **Short-term / high-risk quotes are the weak spot.** NerdWallet ships a second calculator for factor rates, LendingTree tells the reader to go convert it somewhere else, Bankrate only explains the arithmetic in prose. Falcon's own borrowers mostly hold factor-rate quotes, so the gap in the market is exactly where this page sits.

Confirmed by our own guide, `src/content/blog/how-to-read-a-factor-rate.md`: factor × advance = total repayment
($50,000 at 1.30 → $65,000), and the annualized comparison is `cost ÷ advance × 365 ÷ days in the term`
(1.30 over 6 months ≈ 61%, over 12 months 30%). **The calculator must use that same formula**, or the tool and
the blog will disagree in public.

## Structure

One page, one section. `BaseLayout` supplies the header, the Site CTA band and the footer, so the page itself is
only the calculator — as asked.

1. **Band 1 (`data-band="light"`, the only band)**
   - `Eyebrow` "Resources"; `h1` "Business loan calculator"; one lead paragraph naming the three numbers the page
     returns (payment, total cost, annualized cost). Sibling inner pages' type: 49/61 at 390, 55/57 from 64em.
   - **The tool**, in two columns from 64em.
     - Mode tabs: **Term loan (APR)** / **Cash advance (factor rate)**. Radios under the hood, so keyboard and
       screen-reader behaviour is free. Factor rate is the default tab — it is the differentiator and it is the
       quote Falcon's borrowers actually hold.
     - Field surfaces follow the home page's sector field: Lilac Light fill, **2px ink bottom rule**, square.
       Each number also gets a range slider. Bounds are the live `#services` spec, word for word: term loan
       `$10,000 – $2,000,000` / `6 – 36 months`; MCA `$5,000 – $5,000,000` / `3 – 18 months`.
     - Results: one Lilac panel. Big payment figure in At Gambit, then total repayment / cost rows, then a
       principal-vs-cost bar so the split is visible without reading numbers.
   - **Three definitions** under the tool: Payment, Total cost, Annualized cost. These are what make the figures
     mean anything; they are copy, not a second band.
   - No Apply button in this band — `SiteCta` sits directly below it.
2. **Site CTA band** (from `BaseLayout`) — unchanged.
3. **Footer** (from `BaseLayout`) — carries `PAGE_DISCLOSURE`.

## Rates and compliance

- **No Falcon rate is published.** The term tab's APR field starts empty and is labelled as *the rate on your
  offer*; the page never states a Falcon APR.
- The factor tab is pre-filled with **1.30 on $50,000 over 12 months** — the worked example already published in
  our factor-rate guide, cited on the page as such. It is an example quote, not our pricing.
- `0% agreement fee` is stated once, in the results panel, and no fee input is offered because there is no Falcon
  fee to add. Never "0% interest", never "0% APR".
- Annualized cost is labelled a comparison, not a regulated APR disclosure — the same caveat the blog uses.

## Files

- `src/pages/resources/business-loan-calculator.astro`
- `src/styles/loan-calculator.css`
- `src/scripts/loan-calculator.ts`
- Redirects dropped: `astro.config.mjs`, `netlify.toml`, `public/_redirects` (the `/resources/*` catch-all stays
  for the routes that really are retired; Netlify only lets it shadow a real file if the rule is forced, and it
  is not).
- `Header.astro`: Resources → Tools → "Loan Calculator" now points at this page instead of `/apply`.
