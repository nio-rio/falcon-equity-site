import type { ImageMetadata } from 'astro';
import type { IndustrySlug } from './industries';
import retail from '@/assets/industries/retail.webp';
import transportationLogistics from '@/assets/industries/transportation-logistics.webp';
import restaurantsFoodService from '@/assets/industries/restaurants-food-service.webp';
import realEstate from '@/assets/industries/real-estate.webp';
import healthcare from '@/assets/industries/healthcare.webp';
import construction from '@/assets/industries/construction.webp';
import ecommerce from '@/assets/industries/e-commerce.webp';
import autoServices from '@/assets/industries/auto-services.webp';
import manufacturing from '@/assets/industries/manufacturing.webp';
import professionalServices from '@/assets/industries/professional-services.webp';
import education from '@/assets/industries/education.webp';
import travelHospitality from '@/assets/industries/travel-hospitality.webp';

/** Home Industries tab stills. Ling-supplied photos mapped by closest sector name. */
export type IndustryStill = {
  image: ImageMetadata;
  imageAlt: string;
  imageIntent: string;
};

export const INDUSTRY_STILLS: Record<IndustrySlug, IndustryStill> = {
  retail: {
    image: retail,
    imageAlt:
      'Shopper in a black sweater reaching for folded jeans on a white store shelf, holding a denim jacket beside a clothing rack.',
    imageIntent: 'clothing store still',
  },
  'transportation-logistics': {
    image: transportationLogistics,
    imageAlt:
      'Overhead view of tractor-trailers parked at a warehouse loading dock, with one blue trailer angled into the yard.',
    imageIntent: 'freight yard still',
  },
  'restaurants-food-service': {
    image: restaurantsFoodService,
    imageAlt:
      'Chef in a white coat, black apron, and tall toque cracking an egg at a stainless prep line, with another chef working behind her.',
    imageIntent: 'restaurant kitchen still',
  },
  'real-estate': {
    image: realEstate,
    imageAlt:
      'Couple and an agent walking toward a blue two-story house with white trim across a green lawn.',
    imageIntent: 'house showing still',
  },
  healthcare: {
    image: healthcare,
    imageAlt:
      'Clinician in a white coat performing an ultrasound on a smiling pregnant patient beside a monitor showing the scan.',
    imageIntent: 'clinic ultrasound still',
  },
  construction: {
    image: construction,
    imageAlt:
      'Hard-hatted workers in safety vests reviewing a tablet in front of a scaffolded concrete building at sunset.',
    imageIntent: 'construction site still',
  },
  'e-commerce': {
    image: ecommerce,
    imageAlt:
      'Woman in glasses packing an open cardboard box at a desk with a laptop, surrounded by shipping cartons and clothing on a rack.',
    imageIntent: 'home fulfillment still',
  },
  'auto-services': {
    image: autoServices,
    imageAlt:
      'Mechanic in a navy coverall and grey gloves using a ratchet on an engine under an open car hood.',
    imageIntent: 'auto shop still',
  },
  manufacturing: {
    image: manufacturing,
    imageAlt: 'CNC cutting head sending orange sparks across a metal plate on a shop floor.',
    imageIntent: 'CNC machine still',
  },
  'professional-services': {
    image: professionalServices,
    imageAlt:
      'Three colleagues in business attire reviewing a printed document and a tablet at a conference table.',
    imageIntent: 'conference table still',
  },
  education: {
    image: education,
    imageAlt:
      'Instructor and two students assembling a wheeled robot at a classroom table, with classmates at a laptop in the background.',
    imageIntent: 'classroom robotics still',
  },
  'travel-hospitality': {
    image: travelHospitality,
    imageAlt:
      'Hotel staff at a wood-paneled reception desk greeting guests with a luggage cart, tablet, and rolling suitcases.',
    imageIntent: 'hotel lobby still',
  },
};
