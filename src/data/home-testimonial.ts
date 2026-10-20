import type { ImageMetadata } from 'astro';
import trucking from '@/assets/blog/trucking-factoring-vs-business-loan.jpg';

/** Home testimonial. Consented client quote; credit the business only. */
export type HomeTestimonial = {
  quote: string;
  business: string;
  imageAlt: string;
  image: ImageMetadata;
};

export const HOME_TESTIMONIAL: HomeTestimonial = {
  quote:
    'After covid, I thought my startup was out of options. Falcon Equity Group turned things around with their debt consolidation solution, saving me 40% on payments and freeing up cash flow. Their expertise and care gave my business a new lease on life!',
  business: 'JJJ Enterprise Trucking',
  imageAlt: 'Abstract winding road representing trucking and transport.',
  image: trucking,
};

/**
 * TODO: append consented client testimonials here as they are approved.
 * Do not invent names, businesses, quotes, photos, or amounts.
 * Each entry needs a real quote, business credit, and still.
 */
export const HOME_TESTIMONIALS: HomeTestimonial[] = [HOME_TESTIMONIAL];
