/**
 * Product FAQs — the one source for every question-and-answer pair on the site.
 *
 * The product pages and `/faq` both read these arrays, so an answer can only be
 * edited in one place and the two pages cannot drift apart.
 *
 * The arrays were lifted VERBATIM out of `src/pages/services/*.astro` on
 * 23 Oct 2026 — same wording, same order, nothing re-written. The old site's
 * /faq page is retired copy and was not used.
 */

export type FaqItem = { q: string; a: string };

export type ServiceFaqSlug =
  | 'collateral-asset-loans'
  | 'business-line-of-credit'
  | 'merchant-cash-advance'
  | 'business-term-loan'
  | 'invoice-factoring-tool'
  | 'consolidation-of-positions'
  | 'decentralized-business-financing';

export const SERVICE_FAQS: Record<ServiceFaqSlug, FaqItem[]> = {
  'collateral-asset-loans': [
    {
      q: 'What can I use as collateral?',
      a: 'Commercial real estate, equipment, vehicles and other business assets may qualify. Your specialist will confirm what fits your file.',
    },
    {
      q: 'Do I need an equipment quote to apply?',
      a: 'For equipment purchases, yes. Equipment quote or invoice helps underwriting size the loan correctly.',
    },
    {
      q: 'How long are the terms?',
      a: 'Terms run 12 – 60 months. Final terms depend on the asset and your business profile.',
    },
    {
      q: 'How fast is funding?',
      a: 'Equipment financing is typically funded in about 2 days. Real estate loans take about 2 weeks.',
    },
    {
      q: 'What does it cost?',
      a: 'Falcon charges a 0% agreement fee. Rates are competitive, and no specific rate is published on this page — your specialist shows you the full cost of the loan before you sign.',
    },
    {
      q: 'What do I need to apply?',
      a: 'Equipment quote or invoice, six months of business bank statements, a government-issued photo ID, a voided check and a list of any open advances or loans.',
    },
  ],
  'business-line-of-credit': [
    {
      q: 'How is a line of credit different from a loan?',
      a: 'A loan delivers a lump sum up front. A line of credit lets you draw funds as needed up to your limit, and you pay interest only on what you draw.',
    },
    {
      q: 'Can I draw again after I repay?',
      a: 'Yes. The line is revolving, so repaid amounts become available to draw again, subject to your agreement.',
    },
    {
      q: 'What do I need to qualify?',
      a: 'Typically 6+ months in business, $10K+ in monthly revenue and an active bank account. Final approval depends on underwriting.',
    },
    {
      q: 'How fast can I get funded?',
      a: 'Funding can happen the same day once you are approved and have signed. Timing depends on how quickly you send your documents.',
    },
    {
      q: 'What does it cost?',
      a: 'Falcon charges a 0% agreement fee. Rates are competitive, and no specific rate is published on this page — you pay for what you draw, and your specialist shows you the cost before you sign.',
    },
    {
      q: 'Is the line secured or unsecured?',
      a: 'Both options exist. An unsecured line does not put business assets behind it; a secured line does. Your specialist will explain which fits your file.',
    },
  ],
  'merchant-cash-advance': [
    {
      q: 'Is a merchant cash advance a loan?',
      a: "No. You're selling a share of your future sales for cash today. Instead of one fixed payment a month, you pay a set percentage of your daily or weekly sales, under the agreement you sign.",
    },
    {
      q: 'How much can I get?',
      a: "$5,000 – $5,000,000. The amount depends on your monthly sales, how long you've been open and your bank activity. The final number is confirmed once your file is reviewed.",
    },
    {
      q: 'What does it cost?',
      a: "Falcon charges a 0% agreement fee. Pricing is shown as two numbers before you sign: the total amount you're selling and the percentage of sales that goes toward it. Both depend on your file, so there's no single rate published here.",
    },
    {
      q: 'How fast can I get funded?',
      a: "It depends on how quickly you send your documents. Once you're approved and have signed, funding can happen the same day.",
    },
    {
      q: 'Does my credit score matter?',
      a: 'Your sales and bank activity carry the most weight. Your credit score is part of the picture, not the whole decision, and your specialist reviews your full profile. Approval is never guaranteed.',
    },
    {
      q: 'How do the payments work?',
      a: "A set percentage of your daily or weekly sales goes toward the purchase, as spelled out in the agreement you sign. You'll see that percentage and the total amount before you commit.",
    },
    {
      q: 'What do I need to apply?',
      a: 'Six months of business bank statements, a government-issued photo ID, a voided check and a list of any open advances or loans.',
    },
  ],
  'business-term-loan': [
    {
      q: 'What is the difference between a term loan and a short-term loan?',
      a: 'Term loans typically run $10,000 – $2,000,000 with 6 – 36 month terms. Funding is often about 2 days after approval; some files fund the same day. Final terms depend on underwriting.',
    },
    {
      q: 'What rate will I get?',
      a: 'Rates are competitive. They depend on the product, term and your business profile, and no specific rate is published on this page. Your specialist will show you the full cost of any offer before you sign.',
    },
    {
      q: 'What credit score do I need?',
      a: 'Typically 550 or higher, along with 6+ months in business and $15K+ monthly revenue. Final terms depend on underwriting.',
    },
    {
      q: 'Can I pay it off early?',
      a: 'Prepayment terms vary by agreement. Your specialist will explain them before you sign.',
    },
    {
      q: 'What does it cost?',
      a: 'Falcon charges a 0% agreement fee. The cost of the loan itself is disclosed in full before you sign.',
    },
    {
      q: 'What do I need to apply?',
      a: 'Six months of business bank statements, a government-issued photo ID, a voided check and a list of any open advances or loans.',
    },
  ],
  'invoice-factoring-tool': [
    {
      q: 'Is factoring a loan?',
      a: 'No. Factoring is the sale of your receivables at a discount. Approval leans heavily on the creditworthiness of your customers.',
    },
    {
      q: 'Which invoices qualify?',
      a: 'Outstanding B2B invoices from creditworthy commercial or government customers are the strongest fit.',
    },
    {
      q: 'Is it a one-time deal?',
      a: 'It can be ongoing. Many businesses use factoring as a continuing facility that grows with their sales.',
    },
    {
      q: 'What does it cost?',
      a: 'Falcon charges a 0% agreement fee. Factoring is priced as a discount on the invoices you sell, which your specialist discloses before you sign. No specific rate is published on this page.',
    },
    {
      q: 'How fast can I get funded?',
      a: 'Timing depends on the invoices and how quickly you send your documents. Your specialist will tell you what to expect for your file.',
    },
    {
      q: 'What do I need to apply?',
      a: 'Six months of business bank statements, a government-issued photo ID, a voided check, a list of any open advances or loans, and the outstanding invoices you want to factor.',
    },
  ],
  'consolidation-of-positions': [
    {
      q: 'Do I need to stop taking new advances?',
      a: 'Consolidation works best when it replaces stacking. Your specialist will walk through a plan that keeps cash flow healthy.',
    },
    {
      q: 'What information do I need?',
      a: 'Recent bank statements and the details of each open position, such as the funder, balance and payment amount.',
    },
    {
      q: 'What happens to my existing positions?',
      a: 'They are paid off or restructured as part of the new position, so you are left with one payment instead of several.',
    },
    {
      q: 'How much will I save?',
      a: 'Falcon clients save 30%–50% on average on their current daily or weekly payments. Your actual savings depend on your existing positions and underwriting, so your specialist models the new payment against your current ones and shows you both before you sign.',
    },
    {
      q: 'What does it cost?',
      a: 'Falcon charges a 0% agreement fee. Rates are competitive, and no specific rate is published on this page. The full cost of the new position is disclosed before you sign.',
    },
    {
      q: 'What do I need to apply?',
      a: 'Six months of business bank statements, a government-issued photo ID, a voided check and the funder, balance and payment amount for every open position.',
    },
  ],
  /**
   * Decentralized Business Financing. Questions 4-6 and 8-9 carry Dwight's
   * answered positions of 24 Oct 2026 (custody, counterparty, fees, securities,
   * licensed payment partners) rather than draft wording. Source: Notion
   * "Decentralized Business Financing - page copy v3", section 08 + Answers.
   */
  'decentralized-business-financing': [
    {
      q: 'Do you recommend which asset to buy or hold?',
      a: 'No. That is not the service. We explain how things work, structure what the business needs, and run the operations. Any decision about an investment is yours, taken with your own advisors.',
    },
    {
      q: 'What does "crypto onboarding" actually mean here?',
      a: 'Integrating digital assets into how the business already holds and moves money: which accounts, which network, what stays liquid, and who can approve a transfer. It is the seamless integration of digital assets into your financial strategy.',
    },
    {
      q: 'Do I need to own crypto already?',
      a: 'No. Many conversations start with nothing on-chain. The first engagement is usually the explanation and fit conversation.',
    },
    {
      q: 'Who holds the assets, and who can move them?',
      a: 'Digital assets are held by independent, regulated third-party qualified custodians selected by the client. Falcon Equity Group does not custody client assets. Which custodian, in whose name, and which people can approve a transfer is decided in the structure phase and written down before anything is transferred.',
    },
    {
      q: 'Who provides these services?',
      a: 'Services are provided by Falcon Equity Group LLC. Digital-asset related work is limited to structuring and advisory support; Falcon does not itself custody assets or act as a virtual-currency business.',
    },
    {
      q: 'What does it cost?',
      a: 'Fees are scoped per engagement and may include a fixed consulting fee, a retainer, and/or a success-based component depending on the scope of work. The number is in writing before work starts, and nothing on this page is a price. Engagements are typically sized to justify the complexity of structuring and regulatory coordination; minimums are discussed confidentially once the scope is understood.',
    },
    {
      q: 'Is this legal and regulated?',
      a: 'Digital assets sit inside securities, money-transmission and custody rules that change with the structure and the state. Each structure is built with counsel, and one that cannot be documented cleanly is not built. Falcon assists clients in structuring vehicles and documentation; it does not offer, sell or distribute tokenized interests or other securities to investors. Any stablecoin or digital-asset payment flow runs through licensed third-party partners.',
    },
    {
      q: 'What are the real risks?',
      a: 'Smart-contract failure, forced liquidation on volatile collateral, a stablecoin losing its peg, oracle failure, thin markets, counterparty failure, and regulation that is still moving. That list is the reason the structure phase exists.',
    },
    {
      q: 'How long does it take?',
      a: 'A structure takes weeks, not days, and operations start after it. Anything digital-asset that promises the same day is skipping the legal work.',
    },
    {
      q: 'What if I just need working capital?',
      a: 'Then this is not the product. A merchant cash advance, term loan or line of credit is built for that and funds far faster. Start there, and come back to this when digital assets are actually part of how the business holds or moves money.',
    },
  ],
};
