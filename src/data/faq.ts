import { SERVICES } from './services';
import { SERVICE_FAQS, type FaqItem, type ServiceFaqSlug } from './service-faqs';

export type FaqGroup = {
  /** Matches the product route, so a row can link back to the product page. */
  slug: ServiceFaqSlug;
  /** Product name taken from SERVICES — the heading cannot drift from the nav. */
  title: string;
  items: FaqItem[];
};

/**
 * The FAQ page's groups, in the order the products are listed in `SERVICES`.
 *
 * Same source as the product pages (see `service-faqs.ts`), so nothing here is
 * re-typed. There is deliberately no "general" group: the old /faq page is
 * retired copy and inventing site-wide answers would mean writing claims nobody
 * has approved.
 */
export const FAQ_GROUPS: FaqGroup[] = SERVICES.filter((service) =>
  Object.prototype.hasOwnProperty.call(SERVICE_FAQS, service.slug),
).map((service) => ({
  slug: service.slug as ServiceFaqSlug,
  title: service.name,
  items: SERVICE_FAQS[service.slug as ServiceFaqSlug],
}));

export const FAQ_COUNT = FAQ_GROUPS.reduce((total, group) => total + group.items.length, 0);
