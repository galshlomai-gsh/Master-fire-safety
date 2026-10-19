/** Lightweight lists used by header, footer and link rows (no page content imported). */
export const navServices = [
  { key: 'fra', name: 'Fire Risk Assessments', href: '/services/fire-risk-assessments' },
  { key: 'doors', name: 'Fire Door Inspections', href: '/services/fire-door-inspections' },
  { key: 'alarms', name: 'Fire Alarm Servicing & Installation', href: '/services/fire-alarm-servicing-installation' },
  { key: 'lighting', name: 'Emergency Lighting Servicing & Installation', href: '/services/emergency-lighting-servicing-installation' },
  { key: 'aov', name: 'AOV & Smoke Control Servicing', href: '/services/aov-smoke-control-servicing' },
] as const;

export const navSectors = [
  { slug: 'blocks-of-flats', name: 'Blocks of Flats' },
  { slug: 'landlords-hmos', name: 'Landlords & HMOs' },
  { slug: 'offices', name: 'Offices' },
  { slug: 'healthcare-care-homes', name: 'Healthcare & Care Homes' },
  { slug: 'education', name: 'Education' },
  { slug: 'retail', name: 'Retail' },
  { slug: 'hospitality', name: 'Hospitality' },
  { slug: 'industrial-warehousing', name: 'Industrial & Warehousing' },
].map((s) => ({ ...s, href: `/sectors/${s.slug}` }));

/** Confirmed coverage (Philip, Oct 2026): London first, then the Home Counties he can reach. */
export const navAreas: { slug: string; name: string; parent?: string; href: string }[] = [
  { slug: 'greater-london', name: 'Greater London' },
  { slug: 'barnet', name: 'Barnet', parent: 'greater-london' },
  { slug: 'brent', name: 'Brent', parent: 'greater-london' },
  { slug: 'camden', name: 'Camden', parent: 'greater-london' },
  { slug: 'harrow', name: 'Harrow', parent: 'greater-london' },
  { slug: 'haringey', name: 'Haringey', parent: 'greater-london' },
  { slug: 'islington', name: 'Islington', parent: 'greater-london' },
  { slug: 'hertfordshire', name: 'Hertfordshire' },
  { slug: 'essex', name: 'Essex' },
  { slug: 'kent', name: 'Kent' },
  { slug: 'surrey', name: 'Surrey' },
  { slug: 'berkshire', name: 'Berkshire' },
  { slug: 'buckinghamshire', name: 'Buckinghamshire' },
].map((a) => ({ ...a, href: `/areas/${a.slug}` }));

export const propertyTypes = [
  'Block of Flats',
  'HMO / Residential',
  'Office / Workplace',
  'Retail / Hospitality',
  'Care / Healthcare',
  'Education',
  'Industrial / Warehouse',
  'Other',
];

export const serviceOptions = [
  'Fire Risk Assessment',
  'Fire Door Inspection',
  'Fire Alarm Servicing / Installation',
  'Emergency Lighting Servicing / Installation',
  'AOV / Smoke Control Servicing',
  'Not sure / several services',
];

/** The 6 property types shown on service pages (as designed). */
export const designPropertyTypes = navSectors.filter((s) =>
  ['blocks-of-flats', 'landlords-hmos', 'offices', 'healthcare-care-homes', 'retail', 'hospitality'].includes(s.slug),
);
