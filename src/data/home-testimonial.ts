import type { ImageMetadata } from 'astro';
import trucking from '@/assets/testimonials/1-trucking.webp';
import dentist from '@/assets/testimonials/2-dentist.webp';
import kitchen from '@/assets/testimonials/3-kitchen.webp';

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
    imageAlt: 'Overhead view of a row of white and red semi-trucks parked in a freight yard.',
    image: trucking,
    imageIntent: 'trucking fleet still',
  },
  {
    quote:
      'The team and Dwight got me the cash I needed to float some business expenses during a time of decreased business. The period of time it took was incredibly fast (about 24 hours) and they worked with me on a rate and weekly payment that I could handle in my current situation.',
    business: 'Falcon client',
    imageAlt: 'Dentist in a white coat and mask treating a patient reclined in a clinic chair.',
    image: dentist,
    imageIntent: 'dental office still',
  },
  {
    quote:
      'Second round with Falcon and it went smooth. Everything was disclosed up front on one page: the fee, what actually lands in the account, total repayment, prepayment terms. Approved and funded fast, and our rep answered every question I threw at him.',
    business: 'Falcon client',
    imageAlt: 'Chef in a white coat plating a dish at a stainless-steel restaurant pass.',
    image: kitchen,
    imageIntent: 'restaurant kitchen still',
  },
];
