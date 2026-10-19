
export type FAQ = { q: string; a: string }; // `a` may contain simple inline HTML (links, <p>)
export type Item = { title: string; text: string };
export type ServiceKey = 'fra' | 'doors' | 'alarms' | 'lighting' | 'aov';

/** Optional content blocks rendered between the main grid and the property-types row. */
export type Block =
  | { kind: 'strip'; title: string; items: Item[]; numbered?: boolean; warm?: boolean }
  | { kind: 'grid'; title: string; items: Item[]; note?: string }
  | { kind: 'text'; title: string; text: string; warm?: boolean }
  | { kind: 'credentials'; title: string; paragraphs: string[] }
  | { kind: 'list'; title: string; intro?: string; items: string[]; warm?: boolean };

export type Service = {
  key: ServiceKey;
  slug: string;
  name: string; // nav / list label
  formValue: string; // quote form <option> value
  h1: string;
  heroSub: string;
  image: string; // image slot key (see src/config/images.ts)
  metaTitle: string;
  metaDescription: string;
  introTitle: string;
  intro: string[];
  gridTitle: string;
  grid: Item[];
  gridNote?: string;
  blocks: Block[];
  ctaTitle: string; // mid-page CTA band heading
  faqs: FAQ[];
  relatedGuides: string[]; // guide slugs
  schemaServiceType: string;
};

export type Sector = {
  slug: string;
  name: string;
  tile: string; // short tile description (home sector grid)
  propertyType: string; // quote form property type value
  h1: string;
  heroSub: string;
  image: string | null; // image slot key; null → illustration
  imageLabel: string; // placeholder label / what real photo is needed
  metaTitle: string;
  metaDescription: string;
  introTitle: string;
  intro: string[];
  considerTitle: string;
  consider: Item[];
  /** sector-specific legal / responsibility context, shown as a warm text band */
  contextTitle: string;
  context: string[];
  services: ServiceKey[]; // most relevant services, first = form default
  ctaTitle: string;
  faqs: FAQ[];
  relatedGuides: string[];
  sources?: { label: string; url: string }[];
};

export type Area = {
  slug: string;
  name: string;
  nation: 'England';
  /** London boroughs set parent: 'greater-london' and are served at /areas/{slug} */
  parent?: string;
  metaTitle: string;
  metaDescription: string;
  heroSub: string;
  intro: string[]; // 2 paragraphs
  places: string[]; // towns / boroughs / council areas covered
  housingTitle: string;
  housing: string[]; // local housing stock paragraphs
  licensingTitle: string;
  licensing: string[]; // HMO / licensing paragraphs (may include inline links)
  lawTitle: string;
  law: string[]; // the legal framework that applies in this nation/region
  enforcer: { name: string; url: string };
  faqs: FAQ[];
  sources: { label: string; url: string }[];
  nearby: string[]; // area slugs
};

export type Guide = {
  slug: string;
  title: string; // H1
  metaTitle: string;
  metaDescription: string;
  summary: string; // card + hero sub
  readingMinutes: number;
  updated: string; // ISO date
  service: ServiceKey; // primary service for CTA + form default
  body: string; // HTML string; citations as <sup><a href="#s1">[1]</a></sup>
  faqs: FAQ[];
  sources: { label: string; url: string }[];
  related: string[]; // guide slugs
};
