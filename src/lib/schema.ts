import { site } from '../config/site';
import { navAreas } from '../data/nav';
import type { FAQ } from '../data/types';

export const abs = (base: URL | string, path: string) => new URL(path, base).toString();
const strip = (html: string) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

export function orgSchema(siteUrl: URL) {
  const id = abs(siteUrl, '/#business');
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': id,
    name: site.brand.name,
    url: abs(siteUrl, '/'),
    telephone: site.phone.tel,
    ...(site.email ? { email: site.email } : {}),
    description: site.coverageLine,
    image: abs(siteUrl, '/og-default.png'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.base.locality,
      addressRegion: site.base.region,
      addressCountry: site.base.country,
    },
    areaServed: [
      ...navAreas.map((a) => ({ '@type': 'AdministrativeArea', name: a.name })),
    ],
    openingHoursSpecification: site.hours.schema.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    // No aggregateRating: the reviews shown are of Certify Services Ltd, not T&T (src/data/reviews.ts).
  };
}

export function serviceSchema(siteUrl: URL, o: { name: string; serviceType: string; description: string; path: string; area?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: o.name,
    serviceType: o.serviceType,
    description: o.description,
    url: abs(siteUrl, o.path),
    provider: { '@id': abs(siteUrl, '/#business') },
    areaServed: o.area ? { '@type': 'AdministrativeArea', name: o.area } : navAreas.filter((a) => !('parent' in a)).map((a) => ({ '@type': 'AdministrativeArea', name: a.name })),
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: strip(f.a) },
    })),
  };
}

export type Crumb = { name: string; href: string };
export function breadcrumbSchema(siteUrl: URL, crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(siteUrl, c.href) })),
  };
}

export function articleSchema(siteUrl: URL, o: { title: string; description: string; path: string; updated: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: o.title,
    description: o.description,
    mainEntityOfPage: abs(siteUrl, o.path),
    dateModified: o.updated,
    datePublished: o.updated,
    inLanguage: 'en-GB',
    author: { '@type': 'Organization', name: site.brand.name, url: abs(siteUrl, '/') },
    publisher: { '@id': abs(siteUrl, '/#business') },
  };
}
