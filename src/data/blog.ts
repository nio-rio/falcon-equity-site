export const BLOG_CATEGORIES = [
  'Getting Approved',
  'Compare Options',
  'Costs & Rates',
  'Cash Flow & Debt',
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const BLOG_CATEGORY_SLUG: Record<BlogCategory, string> = {
  'Getting Approved': 'getting-approved',
  'Compare Options': 'compare-options',
  'Costs & Rates': 'costs-and-rates',
  'Cash Flow & Debt': 'cash-flow-and-debt',
};

export const BLOG_CATEGORY_DESCRIPTION: Record<BlogCategory, string> = {
  'Getting Approved':
    'What to gather before you apply for Falcon funding: six months of bank statements, a photo ID, and how underwriters read that complete file.',
  'Compare Options':
    'Plain-English comparisons of merchant cash advances, term loans, and invoice factoring so you can match a Falcon product to the job at hand.',
  'Costs & Rates':
    'How to read a merchant cash advance factor rate, test equipment break-even, and compare a Falcon quote with another offer before you sign it.',
  'Cash Flow & Debt':
    'Bridging a slow season and consolidating stacked merchant cash advances so daily or weekly payments stop draining the business bank account.',
};
