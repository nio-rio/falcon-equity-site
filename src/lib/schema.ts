import { PRIMARY_PHONE, SITE } from '@/data/site';

const orgId = `${SITE.url}/#organization`;

/** Home JSON-LD is Organization / FinancialService only. Do not add Review
 *  or aggregateRating — testimonials are credited as “Falcon client”. */

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['FinancialService', 'Organization'],
  '@id': orgId,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE.url}${SITE.logo}`,
    width: 512,
    height: 512,
  },
  image: `${SITE.url}/og-default.jpg`,
  description: SITE.description,
  email: SITE.email,
  telephone: PRIMARY_PHONE.href.replace('tel:', ''),
  faxNumber: SITE.phones.fax.href.replace('tel:', ''),
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: PRIMARY_PHONE.href.replace('tel:', ''),
      email: SITE.email,
      areaServed: 'US',
      availableLanguage: 'en',
    },
  ],
  sameAs: [SITE.social.x],
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: new URL(item.path, SITE.url).href,
  })),
});

const stripMdLinks = (text: string) => text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');

export const faqSchema = (faqs: readonly { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: stripMdLinks(f.a) },
  })),
});

export const serviceSchema = (service: { name: string; summary: string; slug: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.summary,
  url: `${SITE.url}/services/${service.slug}`,
  provider: { '@id': orgId },
  areaServed: 'US',
  serviceType: 'Business financing',
});

export const articleSchema = (post: {
  title: string;
  description: string;
  slug: string;
  date: Date;
  updated?: Date;
  author: string;
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': ['BlogPosting', 'Article'],
  headline: post.title,
  description: post.description,
  image: post.image
    ? { '@type': 'ImageObject', url: new URL(post.image, SITE.url).href }
    : undefined,
  datePublished: post.date.toISOString(),
  dateModified: (post.updated ?? post.date).toISOString(),
  author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  publisher: {
    '@id': orgId,
    '@type': 'Organization',
    name: SITE.name,
    logo: { '@type': 'ImageObject', url: `${SITE.url}${SITE.logo}`, width: 512, height: 512 },
  },
  mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
});
