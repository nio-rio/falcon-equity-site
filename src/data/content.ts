import { CONSOLIDATION_SAVINGS } from './site';

export const FLIGHT_PATH = ['Apply', 'Review', 'Approved', 'Funded'] as const;

/**
 * Only claims already published on falconequity.ai. Additional GFE-style claims
 * (limited paperwork, e-sign, soft credit pull) are pending Dwight's confirmation.
 */
export const WHY_FALCON = [
  { icon: 'zap', title: 'Same-day approvals', body: 'Decisions move fast so you can act while the opportunity is still on the table.' },
  { icon: 'timer', title: 'Funded in 24–48h', body: 'Approved and signed? Funds can land in as little as 24–48 hours.' },
  { icon: 'layers', title: 'Consolidation specialists', body: `Clients save ${CONSOLIDATION_SAVINGS} on average on daily or weekly payments.` },
  { icon: 'users', title: 'A dedicated specialist', body: 'One point of contact who knows your file and guides every step.' },
  { icon: 'target', title: 'Tailored solutions', body: 'Seven funding products, matched to your goals instead of forced into one box.' },
  { icon: 'bitcoin', title: 'Digital asset ready', body: 'Crypto onboarding and custody for businesses building on new rails.' },
] as const;

export const HOW_IT_WORKS = [
  {
    title: 'Apply in minutes',
    body: 'One short online application tells us about your business and what you need the capital for.',
  },
  {
    title: 'Review your options',
    body: 'A Falcon specialist reviews your file and lays out the products that fit, in plain English.',
  },
  {
    title: 'Get funded',
    body: 'Approve the offer you like, sign, and receive funds in as little as 24–48 hours.',
  },
] as const;

export const QUALIFY = [
  { icon: 'calendar-clock', title: 'Time in business', value: '3+ months', body: 'Most products start at 3–6 months of operating history.' },
  { icon: 'trending-up', title: 'Monthly revenue', value: '$10K+', body: 'Consistent deposits show you can support a payment.' },
  { icon: 'gauge', title: 'Credit', value: '550+ for loans', body: 'Revenue-based products weigh credit less heavily.' },
  { icon: 'file-text', title: 'Bank statements', value: 'Recent months', body: 'An active business bank account with recent statements.' },
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
    industry: 'Restaurants & Food Service',
    product: 'Merchant Cash Advance',
    title: 'A Brooklyn restaurant owner needed a new kitchen line before the holidays.',
    body: 'Their walk-in cooler and range were failing weeks before their busiest season. A merchant cash advance can provide equipment capital quickly, with remittances tied to sales, so the kitchen stays open through peak weeks.',
  },
  {
    industry: 'Transportation & Logistics',
    product: 'Consolidation of Positions',
    title: 'A New Jersey trucking company was juggling three daily payments.',
    body: 'Stacked advances were eating into fuel and maintenance money. Consolidating them into one position can lower the combined daily payment and free up cash to keep the fleet on the road.',
  },
  {
    industry: 'Professional Services',
    product: 'Invoice Factoring Tool',
    title: 'A marketing agency landed a large client that paid on net-60 terms.',
    body: 'Payroll was due long before the invoices would be paid. Factoring those B2B invoices can turn them into cash today, so the team can staff the account without waiting two months.',
  },
] as const;

export const FAQS = [
  {
    q: 'How fast can I get funded?',
    a: 'Many qualified businesses receive funds within 24–48 hours of approval and a signed agreement. Timing depends on the product and how quickly documents are provided.',
  },
  {
    q: 'Is approval guaranteed?',
    a: 'No. Every application is reviewed by underwriting. Our 98% approval rate applies to qualified applicants, and final terms depend on your business profile.',
  },
  {
    q: 'What do I need to apply?',
    a: 'Basic business and owner information, plus recent business bank statements. Some products ask for more, such as an equipment quote or a list of open invoices.',
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
    a: 'Amounts range from $5,000 up to $5,000,000 depending on the product, your revenue and time in business.',
  },
  {
    q: 'Can you help if I already have advances open?',
    a: `Yes. Consolidation of Positions combines stacked advances into one position. Falcon clients save ${CONSOLIDATION_SAVINGS} on average on daily or weekly payments.`,
  },
  {
    q: 'Do you work with startups?',
    a: 'Most products require at least 3–6 months in business. If you are earlier than that, our Credit Repair & Loan Prep program can help you get ready.',
  },
] as const;

export const DEPARTMENTS = [
  {
    icon: 'shield-check',
    name: 'Underwriting',
    body: 'Reviews every file with care and speed, matching your business to terms it can actually support.',
  },
  {
    icon: 'handshake',
    name: 'Client Success',
    body: 'Your dedicated point of contact from application to funding, and the first call when you need more.',
  },
  {
    icon: 'landmark',
    name: 'Funding Partners',
    body: 'Manages relationships with the lenders and funders behind every product, so you see strong options.',
  },
  {
    icon: 'bitcoin',
    name: 'Digital Assets',
    body: 'Guides crypto onboarding and custodial services for businesses building on digital rails.',
  },
] as const;

export const VALUES = [
  { icon: 'eye', name: 'Vision', body: 'A falcon spots opportunity from a mile up. We see what your business can become.' },
  { icon: 'zap', name: 'Speed', body: 'The fastest hunter on earth. Decisions in hours, funding in days.' },
  { icon: 'target', name: 'Precision', body: 'The right product, sized correctly, for the goal in front of you.' },
  { icon: 'handshake', name: 'Partnership', body: 'We win when you win. Long relationships over one-off deals.' },
] as const;
