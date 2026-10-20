import type { ImageMetadata } from 'astro';
import trucking from '@/assets/blog/trucking-factoring-vs-business-loan.jpg';
import retail from '@/assets/blog/retail-inventory-financing-holiday-season.jpg';
import lineOfCredit from '@/assets/services/business-line-of-credit.jpg';

/** Home testimonial. Consented client quote; credit the business only. */
export type HomeTestimonial = {
  quote: string;
  business: string;
  imageAlt: string;
  image: ImageMetadata;
  imageIntent: string;
};

/**
 * TODO: confirm the real business names (and portraits, if any) for these three
 * Ling-supplied quotes. Credits below are clearly marked placeholders until
 * Ling confirms. Do not invent owner names, photos, or amounts. Dwight in quote
 * 2 is verbatim quote text, not a credit line.
 */
export const HOME_TESTIMONIALS: HomeTestimonial[] = [
  {
    quote:
      'Excellent service… they helped me really fast to get my credit! High amount, verification and approval same day!',
    business: 'Falcon client',
    imageAlt: 'Abstract winding road used as a placeholder still.',
    image: trucking,
    imageIntent: 'placeholder still',
  },
  {
    quote:
      'The team and Dwight got me the cash I needed to float some business expenses during a time of decreased business. The period of time it took was incredibly fast (about 24 hours) and they worked with me on a rate and weekly payment that I could handle in my current situation. I look forward to working with them in the future as needed.',
    business: 'Falcon client',
    imageAlt: 'Abstract stacked blocks used as a placeholder still.',
    image: retail,
    imageIntent: 'placeholder still',
  },
  {
    quote:
      'Second round with Falcon and it went smooth. Everything was disclosed up front on one page: the fee, what actually lands in the account, total repayment, prepayment terms. Approved and funded fast, and our rep answered every question I threw at him.',
    business: 'Falcon client',
    imageAlt: 'Abstract slider graphic used as a placeholder still.',
    image: lineOfCredit,
    imageIntent: 'placeholder still',
  },
];
