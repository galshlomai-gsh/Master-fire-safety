/**
 * Single source of truth for brand, contact and trust details.
 * Anything marked CONFIRM is waiting on Philip — see QUESTIONS-FOR-PHILIP.md.
 */

export type Credential = {
  label: string;
  holder: string;
  /** Only `confirmed` credentials are ever rendered. */
  status: 'confirmed' | 'pending';
};

export type Review = {
  text: string;
  name: string;
  date: string; // ISO date
  rating: 1 | 2 | 3 | 4 | 5;
  source: 'Google' | 'Trustpilot' | 'Other';
};

export const site = {
  // CONFIRM: T&T standalone vs Certify. Change these and the logo follows.
  brand: {
    name: 'T&T Fire Safety',
    wordmark: 'T&T',
    descriptor: 'FIRE SAFETY',
    /** Fire mark option A (design p9) is NOT approved. Flip to true only after sign-off. */
    fireMarkApproved: false,
  },
  legal: {
    // CONFIRM: trading entity. Philip's company is Certify Services Ltd; T&T may trade through it.
    companyName: null as string | null,
    companyNumber: null as string | null,
    registeredAddress: null as string | null,
  },
  phone: {
    display: '020 8066 2499',
    tel: '+442080662499',
  },
  /** CONFIRM: enquiries@ address. While null, the site shows "address to confirm". */
  email: null as string | null,
  hours: {
    display: 'Monday–Friday, 8am–6pm',
    schema: [{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' }],
  },
  /** Base used for LocalBusiness schema. Address withheld until confirmed (service-area business). */
  base: {
    locality: 'London',
    region: 'Greater London',
    postcodeDistrict: 'NW2',
    country: 'GB',
  },
  coverageLine: 'Fire risk assessments and related fire-safety services across England, Wales and Scotland.',

  /**
   * Credentials. HARD RULE: nothing pending is published.
   * FireQual Level 5, IFE registration and BS 8674:2025 alignment appear in the design
   * but are unconfirmed — kept here as slots only.
   */
  credentials: [
    { label: 'FPA Level 3 Fire Risk Assessment', holder: 'Philip Roberts', status: 'confirmed' },
    { label: 'FireQual Level 5 Certificate in Advanced Fire Risk Assessment', holder: 'CONFIRM: who holds this', status: 'pending' },
    { label: 'IFE Registered Fire Risk Assessor', holder: 'CONFIRM: who holds this', status: 'pending' },
    { label: 'Competency aligned with BS 8674:2025 (Intermediate / Advanced)', holder: 'CONFIRM', status: 'pending' },
  ] as Credential[],

  /** HARD RULE: real reviews only. While empty, the reviews section does not render. */
  reviews: [] as Review[],
  reviewsSource: { name: 'Google', url: null as string | null },

  tracking: {
    gtmId: (import.meta.env.PUBLIC_GTM_ID as string | undefined) || '',
  },
} as const;

export const confirmedCredentials = site.credentials.filter((c) => c.status === 'confirmed');
export const emailDisplay = site.email ?? 'enquiries@ (address to confirm)';
