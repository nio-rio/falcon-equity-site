export type IconName =
  | 'landmark'
  | 'wallet'
  | 'zap'
  | 'calendar-clock'
  | 'file-text'
  | 'layers'
  | 'bitcoin';

export type ServiceOption = {
  name: string;
  amounts: string;
  speed?: string;
  terms?: string;
};

export type Service = {
  slug: string;
  /** Names must match the current site exactly (Oct 18 decision). */
  name: string;
  shortName: string;
  icon: IconName;
  summary: string;
  /**
   * Home bento featured flag. `1` = top 2-col card (featured-1.jpg on the right).
   * `2` = lower 2-col card (featured-2.jpg). Leave unset for a standard white card.
   * Swap these values between products to change which two are featured.
   */
  featured?: 1 | 2;
  headline: string;
  intro: string;
  whoFor: string;
  /**
   * Amounts, speed and terms come from Falcon's product one-pager (Oct 19); requirements from the current site.
   * TODO(Dwight): confirm interest rates and factor rates before any are published. None are shown today.
   */
  amounts: string;
  /** Compact range for menus; falls back to `amounts`. */
  amountsShort?: string;
  /**
   * Compact amount + term line for home and /services cards.
   * Built only from `amounts` / `amountsShort` / `terms` — no new figures.
   */
  rangeLine: string;
  /** Short “Best for” phrase for the /services compare table, from whoFor or idealUses. */
  bestFor: string;
  terms: string;
  speed?: string;
  options?: ServiceOption[];
  requirements: string[];
  idealUses: string[];
  /** Illustrative situations only. No names, quotes, dollar results or new claims. */
  useCases: { title: string; body: string; industry: string; intent: string }[];
  steps: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  seoTitle: string;
  seoDescription: string;
};

/** Home process cards. Same titles/bodies as each product’s standard steps. */
export const STANDARD_STEPS = [
  {
    title: 'Apply in minutes',
    body: 'Complete one short online application. Tell us about your business and how much capital you need.',
  },
  {
    title: 'Review with a specialist',
    body: 'A Falcon funding specialist reviews your file, asks for anything missing, and walks you through your options.',
  },
  {
    title: 'Approve and fund',
    body: 'Once approved, review and sign your agreement. Funds can arrive in as little as 24–48 hours.',
  },
] as const;

const standardSteps = (product: string) => [
  {
    title: STANDARD_STEPS[0].title,
    body: `Complete one short online application. Tell us about your business and how much ${product} you need.`,
  },
  { title: STANDARD_STEPS[1].title, body: STANDARD_STEPS[1].body },
  { title: STANDARD_STEPS[2].title, body: STANDARD_STEPS[2].body },
];

export const SERVICES: Service[] = [
  {
    slug: 'collateral-asset-loans',
    name: 'Collateral & Asset Loans',
    shortName: 'Collateral & Asset',
    icon: 'landmark',
    summary:
      'Real-estate and collateral-secured business loans that put the assets you already own to work for growth and expansion.',
    headline: 'Put your assets to work.',
    intro:
      'Your property, equipment and other business assets carry value. A collateral-secured loan converts that value into working capital, so you can grow without waiting on months of retained earnings.',
    whoFor: 'Businesses purchasing machinery, vehicles, technology, or other equipment.',
    amounts: 'Up to 100% of equipment value · Real estate $150K – $20M',
    amountsShort: 'Equipment & real estate to $20M',
    rangeLine: 'Up to 100% of equipment · $150K – $20M · 1 – 30 years',
    bestFor: 'Buying or upgrading equipment',
    terms: '1 – 30 years',
    speed: 'About 2 days (equipment) · about 2 weeks (real estate)',
    options: [
      { name: 'Equipment financing', amounts: 'Up to 100% of equipment value', speed: 'About 2 days', terms: '1 – 8 years' },
      { name: 'Real estate loans', amounts: '$150,000 – $20,000,000', speed: 'About 2 weeks', terms: '1 – 30 years' },
    ],
    requirements: ['Equipment quote or invoice', '6+ months in business', 'Active business'],
    idealUses: [
      'Buying or upgrading equipment and vehicles',
      'Expanding into a new location',
      'Unlocking equity in commercial real estate',
      'Financing technology and infrastructure',
    ],
    useCases: [
      {
        industry: 'Manufacturing',
        title: 'A machine failed before a large order.',
        body: 'Equipment financing can replace it, typically up to 100% of the equipment value, without waiting on retained earnings.',
        intent: 'idle machine on a warehouse floor, daylight, empty of people',
      },
      {
        industry: 'Retail',
        title: 'Opening a second location.',
        body: 'A collateral-secured loan can put commercial real estate to work for the expansion.',
        intent: 'empty storefront interior, morning light',
      },
      {
        industry: 'Transportation',
        title: 'The fleet needs new vehicles.',
        body: 'Equipment and vehicle financing keeps operating cash in the business while the assets go to work.',
        intent: 'parked work vans in a yard, daylight, empty of people',
      },
      {
        industry: 'Construction',
        title: 'Upgrading technology and site infrastructure.',
        body: 'A collateral loan converts equipment you already own, or new kit you are buying, into working capital.',
        intent: 'staged construction equipment, late afternoon, empty of people',
      },
    ],
    steps: standardSteps('capital'),
    faqs: [
      {
        q: 'What can I use as collateral?',
        a: 'Commercial real estate, equipment, vehicles and other business assets may qualify. Your specialist will confirm what fits your file.',
      },
      {
        q: 'Do I need an equipment quote to apply?',
        a: 'For equipment purchases, yes. An equipment quote or invoice helps underwriting size the loan correctly.',
      },
      {
        q: 'How long are the terms?',
        a: 'Equipment financing typically runs 1 to 8 years. Real estate loans can run 1 to 30 years. Final terms depend on the asset and your business profile.',
      },
      {
        q: 'How fast is funding?',
        a: 'Equipment financing is typically funded in about 2 days. Real estate loans take about 2 weeks.',
      },
    ],
    seoTitle: 'Collateral & Asset Loans',
    seoDescription:
      'Equipment financing up to 100% of value with 1–8 year terms, and real estate loans from $150K to $20M with 1–30 year terms.',
  },
  {
    slug: 'business-line-of-credit',
    name: 'Business Line of Credit',
    shortName: 'Line of Credit',
    icon: 'wallet',
    summary:
      'Flexible, revolving working capital. Draw what you need, when you need it, and pay interest only on the amount you use.',
    featured: 2,
    headline: 'Capital on standby, ready when you strike.',
    intro:
      'A business line of credit gives you a revolving pool of funds. Draw on it to cover payroll, inventory or an unexpected opportunity, repay, and draw again. You only pay interest on what you borrow.',
    whoFor: 'Businesses needing flexible, on-demand access to working capital.',
    amounts: '$5,000 – $10,000,000',
    rangeLine: '$5K – $10M · 6 months – 2 years',
    bestFor: 'Smoothing out uneven cash flow',
    terms: '6 months – 2 years',
    speed: 'Same-day funding',
    options: [
      { name: 'Unsecured line of credit', amounts: '$5,000 – $250,000', speed: 'Same day', terms: '6 months – 2 years' },
      { name: 'Secured line of credit', amounts: '$100,000 – $10,000,000', speed: 'Same day', terms: '6 months – 2 years' },
    ],
    requirements: ['6+ months in business', '$10K+ monthly revenue', 'Active bank account'],
    idealUses: [
      'Smoothing out uneven cash flow',
      'Covering payroll between receivables',
      'Restocking inventory quickly',
      'Keeping a cushion for unexpected costs',
    ],
    useCases: [
      {
        industry: 'Professional Services',
        title: 'Payroll is due before invoices land.',
        body: 'Draw on the line to cover payroll, repay when receivables come in, and draw again.',
        intent: 'office desk with an open ledger, warm light, empty of people',
      },
      {
        industry: 'Retail',
        title: 'Inventory needs restocking this week.',
        body: 'A revolving line lets you draw what you need for stock and pay interest only on the amount used.',
        intent: 'stockroom shelves, daylight, empty of people',
      },
      {
        industry: 'Hospitality',
        title: 'Cash flow is uneven across the year.',
        body: 'Keep a line on standby and draw during slow stretches, then repay when covers fill.',
        intent: 'empty dining room before open, morning light',
      },
      {
        industry: 'Auto Services',
        title: 'An unexpected repair bill landed.',
        body: 'The line is there as a cushion so an unplanned cost does not drain the operating account.',
        intent: 'service bay with a lift, daylight, empty of people',
      },
    ],
    steps: standardSteps('working capital'),
    faqs: [
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
    ],
    seoTitle: 'Business Line of Credit',
    seoDescription:
      'Business lines of credit: unsecured from $5K to $250K, secured from $100K to $10M, with same-day funding and 6-month to 2-year terms.',
  },
  {
    slug: 'merchant-cash-advance',
    name: 'Merchant Cash Advance',
    shortName: 'Cash Advance',
    icon: 'zap',
    summary:
      'Fast working capital based on your future sales, also used as a working capital bridge. $5K to $5M with same-day funding.',
    featured: 1,
    headline: 'Speed is your edge. We bring the capital.',
    intro:
      'A merchant cash advance provides a lump sum in exchange for a portion of your future receivables. Approval focuses on your revenue and bank activity, which makes it one of the fastest ways to fund a business.',
    whoFor: 'Businesses with $10K+ monthly revenue and 3+ months in operation.',
    amounts: '$5,000 – $5,000,000',
    rangeLine: '$5K – $5M · 3 months – 2 years',
    bestFor: 'Time-sensitive inventory',
    terms: '3 months – 2 years',
    speed: 'Same-day funding',
    options: [
      { name: 'Merchant cash advance / working capital bridge', amounts: '$5,000 – $5,000,000', speed: 'Same day', terms: '3 months – 2 years' },
    ],
    requirements: ['3+ months in business', '$10K+ monthly revenue', 'Active business bank account'],
    idealUses: [
      'Seizing a time-sensitive inventory deal',
      'Bridging a slow season',
      'Funding a marketing push',
      'Covering urgent repairs or replacements',
    ],
    useCases: [
      {
        industry: 'Retail',
        title: 'A supplier discount will not wait on a bank.',
        body: 'An advance based on future sales can fund a time-sensitive inventory buy, often the same day after approval.',
        intent: 'packed cartons in a stockroom, daylight, empty of people',
      },
      {
        industry: 'Landscaping',
        title: 'A slow season still has payroll and rent.',
        body: 'A working-capital bridge covers the off-season until peak work returns.',
        intent: 'parked mowers in a yard, morning, empty of people',
      },
      {
        industry: 'Hospitality',
        title: 'A marketing push before a busy stretch.',
        body: 'Revenue-based capital can fund the campaign while approval looks at bank activity more than a credit score.',
        intent: 'empty cafe counter with a card terminal, warm light',
      },
      {
        industry: 'Auto Services',
        title: 'Equipment broke and work is backing up.',
        body: 'Same-day funding after approval can cover an urgent repair or replacement.',
        intent: 'open hood in an empty bay, daylight',
      },
    ],
    steps: standardSteps('working capital'),
    faqs: [
      {
        q: 'Is a merchant cash advance a loan?',
        a: 'No. An MCA is a purchase of future receivables. Instead of a fixed loan payment, remittances are based on your sales under the terms of your agreement.',
      },
      {
        q: 'How fast can I get funded?',
        a: 'Merchant cash advances can fund the same day once you are approved and your agreement is signed. Timing depends on how quickly documents are provided.',
      },
      {
        q: 'Does my credit score matter?',
        a: 'Revenue and bank activity carry the most weight, but your specialist will review your full profile. Approval is never guaranteed.',
      },
    ],
    seoTitle: 'Merchant Cash Advance',
    seoDescription:
      'Merchant cash advances and working capital bridges from $5,000 to $5,000,000, with same-day funding and 3-month to 2-year terms.',
  },
  {
    slug: 'business-term-loan',
    name: 'Business Term Loan',
    shortName: 'Term Loan',
    icon: 'calendar-clock',
    summary:
      'Long-term loans from $25K to $20M with 5–30 year terms, plus short-term loans from $5K to $5M funded the same day.',
    headline: 'Structured capital for your next big move.',
    intro:
      'A business term loan delivers a lump sum with a predictable repayment schedule. Long terms of 5 to 30 years suit established businesses planning an expansion, a remodel or another major investment, while short-term loans cover faster, smaller needs.',
    whoFor: 'Established businesses seeking structured financing for growth or operations.',
    amounts: '$5,000 – $20,000,000',
    rangeLine: '$5K – $20M · 3 months – 30 years',
    bestFor: 'Opening a new location',
    terms: '3 months – 30 years',
    speed: 'About 2 days (term) · same day (short-term)',
    options: [
      { name: 'Business term loan', amounts: '$25,000 – $20,000,000', speed: 'About 2 days', terms: '5 – 30 years' },
      { name: 'Short-term loan', amounts: '$5,000 – $5,000,000', speed: 'Same day', terms: '3 months – 2 years' },
    ],
    requirements: ['6+ months in business', '$15K+ monthly revenue', '550+ credit score'],
    idealUses: [
      'Opening a new location',
      'Remodeling or upgrading a facility',
      'Hiring ahead of growth',
      'Large, planned purchases',
    ],
    useCases: [
      {
        industry: 'Retail',
        title: 'Opening a new location.',
        body: 'A term loan delivers a lump sum with a set repayment schedule for a planned expansion.',
        intent: 'empty shop interior after opening, morning light',
      },
      {
        industry: 'Hospitality',
        title: 'A remodel before the next season.',
        body: 'Longer terms of 5 to 30 years suit a facility upgrade that should be paid over years, not weeks.',
        intent: 'stripped dining room mid-remodel, daylight, empty of people',
      },
      {
        industry: 'Healthcare',
        title: 'Hiring ahead of demand.',
        body: 'Structured capital can cover payroll for new staff while revenue catches up.',
        intent: 'empty clinic waiting room, even light',
      },
      {
        industry: 'Manufacturing',
        title: 'A large, planned purchase.',
        body: 'Short-term loans cover faster, smaller needs; term loans fit bigger investments on a predictable schedule.',
        intent: 'crate of new parts on a warehouse floor, daylight',
      },
    ],
    steps: standardSteps('capital'),
    faqs: [
      {
        q: 'What is the difference between a term loan and a short-term loan?',
        a: 'A business term loan ($25K–$20M) runs 5 to 30 years and is typically funded in about 2 days. A short-term loan ($5K–$5M) runs 3 months to 2 years and can fund the same day.',
      },
      {
        q: 'What rate will I get?',
        a: 'Rates depend on the product, term and your business profile. Your specialist will show you the full cost of any offer before you sign.',
      },
      {
        q: 'What credit score do I need?',
        a: 'Typically 550 or higher, along with 6+ months in business and $15K+ monthly revenue. Final terms depend on underwriting.',
      },
      {
        q: 'Can I pay it off early?',
        a: 'Prepayment terms vary by agreement. Your specialist will explain them before you sign.',
      },
    ],
    seoTitle: 'Business Term Loan',
    seoDescription:
      'Business term loans from $25K to $20M with 5–30 year terms, and short-term loans from $5K to $5M with same-day funding.',
  },
  {
    slug: 'invoice-factoring-tool',
    name: 'Invoice Factoring Tool',
    shortName: 'Invoice Factoring',
    icon: 'file-text',
    summary:
      'An underwritten transaction in which your business sells its receivables at a discount in exchange for cash today.',
    headline: 'Stop waiting on net-60. Get paid today.',
    intro:
      'Invoice factoring turns unpaid B2B invoices into immediate cash. Instead of waiting 30, 60 or 90 days for customers to pay, you sell those receivables at a discount and put the money to work now.',
    whoFor: 'B2B businesses with outstanding invoices from creditworthy clients.',
    amounts: 'Up to 100% of invoice value · AR factoring $100K – $10M',
    amountsShort: 'Up to 100% of invoice value',
    rangeLine: 'Up to 100% of invoice value · Ongoing facility',
    bestFor: 'Outstanding B2B invoices',
    terms: 'Ongoing facility',
    options: [
      { name: 'Invoice financing', amounts: 'Up to 100% of the invoice' },
      { name: 'Accounts receivable (AR) factoring', amounts: '$100,000 – $10,000,000', terms: 'Ongoing facility' },
    ],
    requirements: ['B2B invoices', 'Creditworthy customers', '3+ months in business'],
    idealUses: [
      'Covering payroll while invoices are outstanding',
      'Taking on larger contracts',
      'Smoothing cash flow from slow-paying clients',
      'Funding growth without new debt',
    ],
    useCases: [
      {
        industry: 'Professional Services',
        title: 'Payroll is due and invoices sit at net-60.',
        body: 'Selling those B2B receivables turns the outstanding invoices into cash today.',
        intent: 'stacked invoices on a desk, even light, empty of people',
      },
      {
        industry: 'Construction',
        title: 'A larger contract than cash on hand allows.',
        body: 'Factoring can fund materials and labor against invoices from creditworthy customers.',
        intent: 'shipping dock with packed pallets, daylight, empty of people',
      },
      {
        industry: 'Manufacturing',
        title: 'Clients pay slowly, vendors do not.',
        body: 'An ongoing AR facility smooths cash flow as receivables turn over.',
        intent: 'packed goods waiting on a dock, daylight, empty of people',
      },
      {
        industry: 'Transportation',
        title: 'Growth without taking on a new loan.',
        body: 'Factoring is a sale of receivables at a discount, not a loan, so approval leans on customer credit.',
        intent: 'empty loading bay, morning light',
      },
    ],
    steps: standardSteps('funding'),
    faqs: [
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
    ],
    seoTitle: 'Invoice Factoring',
    seoDescription:
      'Invoice financing up to 100% of the invoice and AR factoring from $100K to $10M. Turn outstanding B2B invoices into cash.',
  },
  {
    slug: 'consolidation-of-positions',
    name: 'Consolidation of Positions',
    shortName: 'Consolidation',
    icon: 'layers',
    summary:
      'Combine stacked advances into one position and save 30%–50% on your current daily or weekly payments, with immediate access to working capital.',
    headline: 'Consolidate. Save 30\u2060–\u206050%. Breathe again.',
    intro:
      'Multiple stacked advances can drain your daily cash flow. Consolidation of Positions combines them into a single, more manageable position. Falcon clients save 30%–50% on average on their daily or weekly payments and gain working capital in the process.',
    whoFor:
      'Established businesses carrying multiple advances or loans that want one lower, more manageable payment.',
    amounts: '$10,000 – $2,000,000',
    rangeLine: '$10K – $2M · 6 – 36 months',
    bestFor: 'Replacing several daily payments',
    terms: '6 – 36 months',
    requirements: ['6+ months in business', '$15K+ monthly revenue', '550+ credit score'],
    idealUses: [
      'Replacing several daily payments with one',
      'Lowering total daily or weekly remittances',
      'Freeing up cash flow for operations',
      'Getting off the stacking treadmill',
    ],
    useCases: [
      {
        industry: 'Retail',
        title: 'Several daily payments hitting at once.',
        body: 'Consolidation combines stacked advances into one position so the account is not drained every morning.',
        intent: 'desk with stacked statements, even light, empty of people',
      },
      {
        industry: 'Agriculture',
        title: 'An existing advance and a need to expand.',
        body: 'A single position can replace stacking and still leave working capital for the next season.',
        intent: 'open agricultural yard, late afternoon, empty of people',
      },
      {
        industry: 'Hospitality',
        title: 'Daily remittances leaving no room to operate.',
        body: 'Falcon clients save 30%–50% on average on daily or weekly payments; actual savings depend on the file.',
        intent: 'empty restaurant pass, morning light',
      },
      {
        industry: 'Auto Services',
        title: 'Getting off the stacking treadmill.',
        body: 'List each open position. A specialist models one lower payment instead of another stack.',
        intent: 'service counter with a closed ledger, daylight, empty of people',
      },
    ],
    steps: [
      {
        title: 'Share your current positions',
        body: 'Apply online and list your open advances or loans, including balances and payment amounts.',
      },
      {
        title: 'Get a consolidation plan',
        body: 'A Falcon consolidation specialist models a single position with a lower daily or weekly payment.',
      },
      {
        title: 'Consolidate and save',
        body: 'Once approved, existing positions are paid off or restructured and you move to one payment.',
      },
    ],
    faqs: [
      {
        q: 'How much can I save?',
        a: 'Falcon clients save 30%–50% on average on their current daily or weekly payments. Your actual savings depend on your existing positions and underwriting.',
      },
      {
        q: 'Do I need to stop taking new advances?',
        a: 'Consolidation works best when it replaces stacking. Your specialist will walk through a plan that keeps cash flow healthy.',
      },
      {
        q: 'What information do I need?',
        a: 'Recent bank statements and the details of each open position, such as the funder, balance and payment amount.',
      },
    ],
    seoTitle: 'Consolidation of Positions',
    seoDescription:
      'Consolidate stacked merchant cash advances and business loans into one position. Falcon clients save 30–50% on average on daily or weekly payments.',
  },
  {
    slug: 'decentralized-business-financing',
    name: 'Decentralized Business Financing',
    shortName: 'Digital Assets',
    icon: 'bitcoin',
    summary:
      'Next-generation digital asset solutions for modern businesses, including crypto onboarding and crypto custodial services.',
    headline: 'Next-generation capital for modern businesses.',
    intro:
      'Digital assets are becoming part of how modern businesses hold value and move money. Falcon helps you bring them into your financial strategy with guided onboarding and secure custodial services.',
    whoFor: 'Businesses exploring or already holding digital assets that want expert, secure guidance.',
    amounts: 'Tailored to your business',
    rangeLine: 'Tailored to your business · Consultative',
    bestFor: 'Crypto onboarding and custody',
    terms: 'Consultative',
    requirements: ['Active business', 'Consultation with a Digital Assets specialist'],
    idealUses: [
      'Crypto onboarding: integrating digital assets into your financial strategy',
      'Crypto custodial services: secure management and protection of digital assets',
      'Planning treasury strategy that includes digital assets',
      'Understanding risks before you commit',
    ],
    useCases: [
      {
        industry: 'Professional Services',
        title: 'Bringing digital assets onto the books.',
        body: 'Crypto onboarding is guided integration into the financial strategy, from setup to day-to-day handling.',
        intent: 'quiet office workstation with two dark screens, cool light',
      },
      {
        industry: 'Retail',
        title: 'The business already holds crypto.',
        body: 'Custodial services cover secure management and protection of those digital assets.',
        intent: 'empty back office with a closed laptop, even light',
      },
      {
        industry: 'Real Estate',
        title: 'Treasury planning that includes digital assets.',
        body: 'A consultation maps onboarding and custody to the business and its risk tolerance.',
        intent: 'conference table with a closed notebook, daylight, empty of people',
      },
      {
        industry: 'E-commerce',
        title: 'Understanding the risks before committing.',
        body: 'Digital asset values can be volatile. We discuss those risks before any decision.',
        intent: 'packed shipping table, daylight, empty of people',
      },
    ],
    steps: [
      {
        title: 'Book a consultation',
        body: 'Apply or call to speak with Falcon about your goals for digital assets.',
      },
      {
        title: 'Build your plan',
        body: 'We map an onboarding and custody approach that fits your business and risk tolerance.',
      },
      {
        title: 'Onboard securely',
        body: 'Move forward with guided onboarding and custodial services designed to protect your assets.',
      },
    ],
    faqs: [
      {
        q: 'What is crypto onboarding?',
        a: 'Guided integration of digital assets into your business’s financial strategy, from setup to day-to-day handling.',
      },
      {
        q: 'What are crypto custodial services?',
        a: 'Secure management and protection of digital assets held on behalf of your business.',
      },
      {
        q: 'Are digital assets risky?',
        a: 'Yes. Digital asset values can be volatile. We will discuss the risks with you before you make any decision.',
      },
    ],
    seoTitle: 'Decentralized Business Financing',
    seoDescription:
      'Decentralized business financing from Falcon Equity Group: crypto onboarding and crypto custodial services for modern businesses.',
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

/** Amount portion of `rangeLine` (everything before the final ` · terms`). */
export const rangeAmount = (service: Service) => {
  const suffix = ` · ${service.terms}`;
  return service.rangeLine.endsWith(suffix) ? service.rangeLine.slice(0, -suffix.length) : service.rangeLine;
};

export type HomeServiceArea = 'f1' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f2';

export type HomeServiceCard = {
  href: string;
  name: string;
  teaser: string;
  rangeLine: string;
  featured?: 1 | 2;
  area: HomeServiceArea;
};

/** One-line home descriptions, shortened from each product summary. */
const HOME_TEASERS: Record<string, string> = {
  'collateral-asset-loans':
    'Real-estate and collateral-secured loans that put the assets you already own to work.',
  'business-line-of-credit':
    'Flexible revolving capital. Draw what you need and pay interest only on what you use.',
  'merchant-cash-advance': 'Fast working capital based on your future sales, from $5K to $5M.',
  'business-term-loan': 'Structured loans from $5K to $20M, from same-day short-term to 30-year terms.',
  'invoice-factoring-tool': 'Turn unpaid B2B invoices into cash today instead of waiting on net-60.',
  'consolidation-of-positions':
    'Combine stacked advances into one position and save 30%–50% on daily or weekly payments.',
  'decentralized-business-financing':
    'Crypto onboarding and custodial services for businesses holding digital assets.',
};

const toHomeCard = (service: Service, featured?: 1 | 2): Omit<HomeServiceCard, 'area'> => ({
  href: `/services/${service.slug}`,
  name: service.name,
  teaser: HOME_TEASERS[service.slug] ?? service.summary,
  rangeLine: service.rangeLine,
  featured,
});

/**
 * Home bento order (3-col desktop, 7 products):
 * row 1 = featured 1 (2 cols) + small; row 2 = 3 small; row 3 = small + featured 2 (2 cols).
 */
export const getHomeServices = (): HomeServiceCard[] => {
  const slot1 =
    SERVICES.find((s) => s.featured === 1) ?? getService('merchant-cash-advance')!;
  const slot2 =
    SERVICES.find((s) => s.featured === 2) ?? getService('business-line-of-credit')!;
  const rest = SERVICES.filter((s) => s.slug !== slot1.slug && s.slug !== slot2.slug);

  const cards: Omit<HomeServiceCard, 'area'>[] = [
    toHomeCard(slot1, 1),
    ...rest.map((s) => toHomeCard(s)),
    toHomeCard(slot2, 2),
  ];

  const areas: HomeServiceArea[] = ['f1', 'a', 'b', 'c', 'd', 'e', 'f2'];
  return cards.map((card, i) => ({ ...card, area: areas[i] ?? 'e' }));
};
