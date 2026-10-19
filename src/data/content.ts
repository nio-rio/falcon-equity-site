import { CONSOLIDATION_SAVINGS } from './site';

export const FLIGHT_PATH = ['Apply', 'Review', 'Approved', 'Funded'] as const;

/**
 * Only claims already published on falconequity.ai. Additional GFE-style claims
 * (limited paperwork, e-sign, soft credit pull) are pending Dwight's confirmation.
 */
export const WHY_FALCON = [
  { icon: 'zap', title: 'Same-day approvals', body: 'Decisions move fast so you can act while the opportunity is still on the table.' },
  { icon: 'timer', title: 'Funded in 24-48h', body: 'Approved and signed? Funds can land in as little as 24-48 hours.' },
  { icon: 'layers', title: 'Consolidation specialists', body: `Clients save ${CONSOLIDATION_SAVINGS} on average on daily or weekly payments.` },
  { icon: 'users', title: 'A dedicated specialist', body: 'One point of contact who knows your file and guides every step.' },
  { icon: 'target', title: 'Tailored solutions', body: 'Seven funding products, matched to your goals instead of forced into one box.' },
  { icon: 'bitcoin', title: 'Digital asset ready', body: 'Crypto onboarding and custody for businesses building on new rails.' },
] as const;

export const QUALIFY = [
  { icon: 'calendar-clock', title: 'Time in business', value: '3+ months', body: 'Most products start at 3–6 months of operating history.' },
  { icon: 'trending-up', title: 'Monthly revenue', value: '$10K+', body: 'Consistent deposits show you can support a payment.' },
  { icon: 'gauge', title: 'Credit', value: '550+ for loans', body: 'Revenue-based products weigh credit less heavily.' },
  { icon: 'file-text', title: 'Bank statements', value: '6 months', body: 'Complete PDFs of the last six months from your business bank account.' },
] as const;

/** Documents requested with the current Jotform application. Keep apply + FAQ in sync. */
export const APPLICATION_DOCS = [
  '6 months of business bank statements (complete PDFs)',
  'A government-issued photo ID',
  'A voided check from the business account',
  'A debt schedule of any open advances or loans',
] as const;

export const WHEN_TO_APPLY = [
  { icon: 'trending-up', title: 'Grow', body: 'Open a location, add a product line, or hire ahead of demand.' },
  { icon: 'sun-snow', title: 'Bridge a slow season', body: 'Cover payroll and rent while revenue catches up with the calendar.' },
  { icon: 'target', title: 'Seize an opportunity', body: 'Lock in a bulk discount, a contract or a property before someone else does.' },
  { icon: 'settings', title: 'Run day-to-day operations', body: 'Keep inventory, repairs and vendors current without draining reserves.' },
] as const;

/**
 * Illustrative examples only. No real clients, names, quotes, photos or ratings.
 * TODO(Dwight): replace with real client stories, with written permission.
 */
export const CLIENT_STORIES = [
  {
    industry: 'Auto Services',
    product: 'Business Term Loan',
    title: 'An auto parts retailer looking for expansion capital.',
    body: 'A second location, extra inventory or new equipment might point to a term loan or a line of credit.',
    intent: 'auto parts counter, daylight, empty of people',
  },
  {
    industry: 'Agriculture',
    product: 'Consolidation of Positions',
    title: 'A Southwest agricultural services company with an existing advance, looking to expand.',
    body: 'With an advance already open, the next step is often new capital, consolidation, or both.',
    intent: 'open agricultural yard, late afternoon',
  },
  {
    industry: 'Landscaping',
    product: 'Merchant Cash Advance',
    title: 'A landscaping company bridging a slow season.',
    body: 'Payroll, leases and insurance still run in the off-season. A working-capital bridge is one option before peak season.',
    intent: 'landscaping equipment in a yard, morning',
  },
] as const;

/**
 * PLACEHOLDERS. Replace with real, consented client testimonials before production.
 * Do not invent names, businesses, quotes, or amounts.
 */
export const TESTIMONIALS = [
  {
    quote: '[Client quote — 1–2 sentences about their funding experience]',
    amount: '$[Amount] funded',
    business: '[Business name]',
    owner: '[Owner name], [Title]',
    industry: '[Industry]',
    product: '[Product]',
  },
  {
    quote: '[Client quote — 1–2 sentences about their funding experience]',
    amount: '$[Amount] funded',
    business: '[Business name]',
    owner: '[Owner name], [Title]',
    industry: '[Industry]',
    product: '[Product]',
  },
  {
    quote: '[Client quote — 1–2 sentences about their funding experience]',
    amount: '$[Amount] funded',
    business: '[Business name]',
    owner: '[Owner name], [Title]',
    industry: '[Industry]',
    product: '[Product]',
  },
] as const;

export const CREDIT_PREP_USE_CASES = [
  {
    industry: 'Retail',
    product: 'Credit Repair & Loan Prep',
    title: 'A file that is not yet ready for a term loan.',
    body: 'Term Loan Prep works FICO SBSS and underwriting documents before the application goes in.',
    intent: 'closed loan file and statements on a desk, even light',
  },
  {
    industry: 'Professional Services',
    product: 'Credit Repair & Loan Prep',
    title: 'A new LLC that needs personal credit work first.',
    body: 'Startup Capital Prep pairs formation with personal credit improvement so a first facility is even possible.',
    intent: 'empty office with formation paperwork on a table, daylight',
  },
  {
    industry: 'Hospitality',
    product: 'Credit Repair & Loan Prep',
    title: 'Personal credit standing in the way of a mortgage.',
    body: 'Mortgage & Loan Prep includes certified FICO work aimed at a stronger personal file.',
    intent: 'quiet dining room before open, morning light',
  },
  {
    industry: 'Construction',
    product: 'Credit Repair & Loan Prep',
    title: 'Vendor tradelines and PAYDEX before applying.',
    body: 'Credit Ready Business focuses on repair, vendor tradelines and PAYDEX score growth.',
    intent: 'jobsite materials staged, daylight, empty of people',
  },
] as const;

export const FAQS = [
  {
    q: 'How fast can I get funded?',
    a: 'Many products fund the same day or within about 24–48 hours of approval and a signed agreement. Longer-term products, such as real estate loans, typically take about two weeks. Timing depends on the product and how quickly documents are provided.',
  },
  {
    q: 'Is approval guaranteed?',
    a: 'No. Every application is reviewed by underwriting. Our 98% approval rate applies to qualified applicants, and final terms depend on your business profile.',
  },
  {
    q: 'What do I need to apply?',
    a: 'Have ready: 6 months of business bank statements (complete PDFs), a government-issued photo ID, a voided check from the business account, and a debt schedule of any open advances or loans. Some products also ask for an equipment quote or a list of open invoices.',
  },
  {
    q: 'What else does the application ask?',
    a: 'The application also asks about bankruptcy and tax liens; any prior advances (lender, amount, date and remaining balance); ownership percentage; and whether there are co-borrowers. Answer these fully so underwriting can review your file without delay.',
  },
  {
    q: 'Why do you need a voided check and a debt schedule?',
    a: 'A voided check confirms the business account that would receive funds. A debt schedule lists each open advance or loan so we can see current payments and, if needed, look at consolidation.',
  },
  {
    q: 'Will applying affect my credit?',
    a: 'Ask your Falcon specialist how your application will be reviewed before any credit check is run. We will explain the process up front.',
  },
  {
    q: 'What credit score do I need?',
    a: 'It depends on the product. Term loans and consolidation typically look for 550+, while revenue-based products such as merchant cash advances weigh credit less heavily.',
  },
  {
    q: 'How much can I get?',
    a: 'Amounts start at $5,000. Depending on the product, files can go up to $10 million (secured lines and AR factoring) or $20 million (term loans and real estate). Final amounts depend on underwriting.',
  },
  {
    q: 'Can you help if I already have advances open?',
    a: `Yes. Consolidation of Positions combines stacked advances into one position. Falcon clients save ${CONSOLIDATION_SAVINGS} on average on daily or weekly payments. List each lender, amount, date and remaining balance on your application.`,
  },
  {
    q: 'Do you work with startups?',
    a: 'Most products require at least 3–6 months in business. If you are earlier than that, our Credit Repair & Loan Prep program can help you get ready.',
  },
] as const;

/** Role titles only. Names and photos are filled later. Do not invent identities. */
export const TEAM_ROLES = [
  'Senior Funding Advisor',
  'Funding Advisor',
  'Underwriting Manager',
  'Senior Underwriter',
  'Underwriter',
  'Client Success Lead',
  'Client Success Manager',
  'Placement Specialist',
  'Operations Analyst',
  'Operations Manager',
  'ISO Relationship Manager',
  'Broker Desk Lead',
  'Consolidation Specialist',
  'Digital Assets Specialist',
  'Credit Analyst',
  'Funding Coordinator',
  'Compliance Analyst',
] as const;

export const VALUES = [
  { icon: 'eye', name: 'Vision', body: 'We look at the whole file, not a single score.' },
  { icon: 'zap', name: 'Speed', body: 'Decisions in hours. Many products fund within 24-48 hours of approval.' },
  { icon: 'target', name: 'Precision', body: 'The product and size should match the use of proceeds.' },
  { icon: 'handshake', name: 'Partnership', body: 'Long relationships over one-off transactions.' },
] as const;
