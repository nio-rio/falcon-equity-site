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

export const HOME_TESTIMONIAL: HomeTestimonial = {
  quote:
    'After covid, I thought my startup was out of options. Falcon Equity Group turned things around with their debt consolidation solution, saving me 40% on payments and freeing up cash flow. Their expertise and care gave my business a new lease on life!',
  business: 'JJJ Enterprise Trucking',
  imageAlt: 'Abstract winding road representing trucking and transport.',
  image: trucking,
  imageIntent: 'trucking and transport still',
};

/**
 * TODO: confirm the real business names for the retail MCA and line-of-credit
 * quotes. Credits below are clearly marked placeholders until Ling confirms.
 * Do not invent owner names, photos, or amounts.
 */
export const HOME_TESTIMONIALS: HomeTestimonial[] = [
  HOME_TESTIMONIAL,
  {
    quote:
      'Falcon Equity Group has been a game-changer for my retail business. I needed quick capital to expand our inventory, and their merchant cash advance came through in record time. Their team guided me every step of the way, making the process seamless and stress-free. With Falcon, I know I have a partner I can trust to fuel my business dreams!',
    business: 'Retail business',
    imageAlt: 'Abstract stacked blocks used as a placeholder still for a retail client.',
    image: retail,
    imageIntent: 'retail still (placeholder)',
  },
  {
    quote:
      'The application process with Falcon Equity Group was incredibly smooth and fast. I submitted my form online, and within hours, my personal consultant, Mark, reached out to strategize. Two days later, the funds from their business line of credit were in my account, helping me cover unexpected expenses. I\'m so grateful for their speed and support!',
    business: 'Business line of credit client',
    imageAlt: 'Abstract slider graphic used as a placeholder still for a line of credit client.',
    image: lineOfCredit,
    imageIntent: 'line of credit still (placeholder)',
  },
];
