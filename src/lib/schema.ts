import { SITE } from '@/data/site';

const orgId = `${SITE.url}/#organization`;

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['FinancialService', 'Organization'],
  '@id': orgId,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/apple-touch-icon.png`,
  image: `${SITE.url}/og-default.jpg`,
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phones.office.href.replace('tel:', ''),
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
      telephone: SITE.phones.office.href.replace('tel:', ''),
      email: SITE.email,
      areaServed: 'US',
      availableLanguage: 'en',
    },
  ],
  founder: {
    '@type': 'Person',
    name: SITE.founder.name,
    jobTitle: SITE.founder.title,
  },
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

export const faqSchema = (faqs: readonly { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
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
  '@type': 'Article',
  headline: post.title,
  description: post.description,
  mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  datePublished: post.date.toISOString(),
  dateModified: (post.updated ?? post.date).toISOString(),
  author: { '@type': post.author === SITE.name ? 'Organization' : 'Person', name: post.author },
  publisher: { '@id': orgId, '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.url}/apple-touch-icon.png` } },
  ...(post.image ? { image: new URL(post.image, SITE.url).href } : {}),
});
