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
    'What to gather before you apply, how underwriters read bank statements, and how to show up with a complete file.',
  'Compare Options':
    'Plain-English comparisons of merchant cash advances, term loans, and invoice factoring so you can match the product to the job.',
  'Costs & Rates':
    'How to read a factor rate, test equipment break-even, and compare a quote to another offer on the table.',
  'Cash Flow & Debt':
    'Bridging a slow season and consolidating stacked advances so daily payments stop draining the account.',
};
