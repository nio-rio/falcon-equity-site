export const SITE = {
  name: 'Falcon Equity Group',
  legalName: 'Falcon Equity Group',
  url: 'https://falconequity.ai',
  tagline: 'Get funding today. We move at your pace.',
  description:
    'Falcon Equity Group delivers fast business funding from New York City: merchant cash advances, lines of credit, term loans, invoice factoring, consolidation and digital asset solutions. Funding in as little as 24–48 hours.',
  email: 'information@falconequity.ai',
  phones: {
    office: { label: 'Office', display: '+1 (917) 645-3826', href: 'tel:+19176453826' },
    direct: { label: 'Direct', display: '+1 (917) 245-5277', href: 'tel:+19172455277' },
    fax: { label: 'Fax', display: '+1 (917) 810-2494', href: 'tel:+19178102494' },
  },
  address: {
    street: '11 Broadway Suite 615',
    city: 'New York',
    region: 'NY',
    postalCode: '10004',
    country: 'US',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=11+Broadway+Suite+615+New+York+NY+10004',
  },
  social: {
    x: 'https://x.com/FalconEquitynyc',
    xHandle: '@FalconEquitynyc',
  },
  partner: {
    name: 'Cardiff',
    url: 'https://cardiffinc.sjv.io/qzRbrj',
    logo: '/images/partners/cardiff-logo.png',
  },
  founder: {
    name: 'Dwight Holly',
    title: 'Founder & CFO',
    /** From the live falconequity.ai About page. Do not invent additional bio. */
    bio: 'Elite expertise in business funding',
  },
} as const;

/** Confirmed by Ling. Keep every page in sync from here; do not publish a customer-satisfaction figure. */
export const STATS = [
  { value: '$100M+', label: 'Funding deployed' },
  { value: '15', label: 'Years of experience' },
  { value: '300+', label: 'Businesses helped' },
  { value: '24-48h', label: 'Average funding time' },
  { value: '98%', label: 'Approval for qualified applicants' },
] as const;

export const CONSOLIDATION_SAVINGS = '30–50%';

export const PRIMARY_PHONE = SITE.phones.direct;

export type NavLink = { label: string; href: string; description?: string };

export const RESOURCE_LINKS: NavLink[] = [
  { label: 'Blog', href: '/blog', description: 'Practical funding guides' },
  { label: 'Loan Calculator', href: '/resources/loan-calculator', description: 'Estimate payments in seconds' },
  {
    label: 'Credit Repair & Loan Prep',
    href: '/resources/credit-repair-loan-prep',
    description: 'Get your file loan-ready',
  },
  { label: 'FAQ', href: '/faq', description: 'Straight answers' },
];

export const FIRM_LINKS: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact', href: '/contact' },
];

export const COMPANY_LINKS: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact', href: '/contact' },
  { label: 'Apply', href: '/apply' },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
];
