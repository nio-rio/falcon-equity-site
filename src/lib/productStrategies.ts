import type { Industry } from '@/data/industries';
import type { Service } from '@/data/services';

export type StrategyItem = {
  name: string;
  href: string;
  body: string;
  bullets: string[];
  figures: string;
  applyHref: string;
};

type WeightedPhrase = { phrase: string; weight: number };

/** Existing use-case copy only. Phrases match published titles/bodies; no invented bullets. */
const PRODUCT_PHRASES: Record<string, WeightedPhrase[]> = {
  'invoice-factoring-tool': [
    { phrase: 'factor', weight: 6 },
    { phrase: 'invoice', weight: 4 },
    { phrase: 'pay app', weight: 5 },
    { phrase: 'receivable', weight: 4 },
    { phrase: 'billing', weight: 2 },
  ],
  'collateral-asset-loans': [
    { phrase: 'equipment', weight: 5 },
    { phrase: 'machine', weight: 4 },
    { phrase: 'skid', weight: 5 },
    { phrase: 'hvac', weight: 5 },
    { phrase: 'cnc', weight: 5 },
    { phrase: 'playground', weight: 5 },
    { phrase: 'walk-in', weight: 4 },
    { phrase: 'refriger', weight: 4 },
    { phrase: 'furniture', weight: 4 },
    { phrase: 'imaging', weight: 4 },
    { phrase: 'fixture', weight: 3 },
    { phrase: 'trailer', weight: 3 },
    { phrase: 'lift', weight: 3 },
    { phrase: ' van', weight: 3 },
    { phrase: 'vehicle', weight: 3 },
    { phrase: 'pos', weight: 3 },
    { phrase: 'seating', weight: 2 },
  ],
  'business-line-of-credit': [
    { phrase: 'line of credit', weight: 8 },
    { phrase: 'credit line', weight: 8 },
    { phrase: 'draws on', weight: 6 },
    { phrase: 'short draw', weight: 5 },
    { phrase: 'payroll', weight: 3 },
    { phrase: 'materials', weight: 2 },
    { phrase: 'inventory', weight: 2 },
    { phrase: 'deposit', weight: 2 },
    { phrase: 'off-season', weight: 3 },
    { phrase: 'summer', weight: 2 },
    { phrase: 'fuel', weight: 2 },
  ],
  'merchant-cash-advance': [
    { phrase: 'sales-based advance', weight: 8 },
    { phrase: 'cash advance', weight: 8 },
    { phrase: 'stock out', weight: 5 },
    { phrase: 'sku', weight: 5 },
    { phrase: 'card-heavy', weight: 4 },
  ],
  'business-term-loan': [
    { phrase: 'term loan', weight: 8 },
    { phrase: 'product line', weight: 5 },
    { phrase: 'build-out', weight: 4 },
    { phrase: 'infant', weight: 4 },
    { phrase: 'packaging', weight: 4 },
    { phrase: 'provider', weight: 3 },
    { phrase: 'office', weight: 2 },
    { phrase: 'location', weight: 2 },
  ],
};

const scoreUseCase = (haystack: string, phrases: WeightedPhrase[]) =>
  phrases.reduce((sum, { phrase, weight }) => (haystack.includes(phrase) ? sum + weight : sum), 0);

const assignUseCases = (industry: Industry) => {
  const bulletsBySlug: Record<string, string[]> = {};
  for (const item of industry.products) bulletsBySlug[item.slug] = [];

  for (const useCase of industry.useCases) {
    const haystack = `${useCase.title} ${useCase.body}`.toLowerCase();
    let bestSlug = '';
    let bestScore = 0;
    for (const item of industry.products) {
      const phrases = PRODUCT_PHRASES[item.slug];
      if (!phrases) continue;
      const score = scoreUseCase(haystack, phrases);
      if (score > bestScore) {
        bestScore = score;
        bestSlug = item.slug;
      }
    }
    if (bestSlug && bestScore > 0) bulletsBySlug[bestSlug].push(useCase.title);
  }

  return bulletsBySlug;
};

export const strategiesForIndustry = (industry: Industry, services: readonly Service[]): StrategyItem[] => {
  const bulletsBySlug = assignUseCases(industry);
  return industry.products.map((item) => {
    const service = services.find((s) => s.slug === item.slug);
    if (!service) throw new Error(`Unknown service slug on industry page: ${item.slug}`);
    const amounts = service.spec?.amounts ?? service.amounts;
    const terms = service.spec?.terms ?? service.terms;
    return {
      name: service.name,
      href: `/services/${service.slug}`,
      body: item.copy,
      bullets: bulletsBySlug[item.slug] ?? [],
      figures: `${amounts}, ${terms}`,
      applyHref: '/apply',
    };
  });
};
