/**
 * Single source of truth for brand, contact and trust details.
 * Updated with Philip's answers of Oct 2026; open items are listed in QUESTIONS-FOR-PHILIP.md.
 */

export type Credential = {
  label: string;
  detail: string;
  /** Only `confirmed` items are ever rendered. */
  status: 'confirmed' | 'pending';
};

export const site = {
  brand: {
    name: 'T&T Fire Safety',
    wordmark: 'T&T',
    descriptor: 'FIRE SAFETY',
    /** Fire mark option A (design p9), chosen Oct 2026. */
    fireMarkApproved: true,
  },
  /**
   * Operating company. Philip wants T&T presented as an independent brand, so these appear
   * only where the law requires them: the footer small print and the legal pages
   * (Companies Act 2006 trading disclosures). Not in schema, headings or body copy.
   */
  legal: {
    companyName: 'Certify Services Ltd' as string | null,
    companyNumber: '13558383' as string | null,
    registeredIn: 'England and Wales',
    registeredAddress: '2nd Floor Parkgates, Bury New Road, Prestwich, Manchester M25 0TL' as string | null,
  },
  domain: 'tntfiresafety.co.uk',
  phone: {
    display: '020 8066 2499',
    tel: '+442080662499',
  },
  /** Branded address agreed with Philip. Must exist (domain + mailbox/forwarder) before launch. */
  email: 'hello@tntfiresafety.co.uk' as string | null,
  hours: {
    display: 'Mon–Thu 8:30am–6pm, Fri 8:30am–3pm',
    schema: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '08:30', closes: '18:00' },
      { days: ['Friday'], opens: '08:30', closes: '15:00' },
    ],
  },
  /** Service-area business: no street address published. */
  base: {
    locality: 'London',
    region: 'Greater London',
    country: 'GB',
  },
  coverageLine: 'Fire risk assessments and related fire-safety services across London and the Home Counties.',
  coverageShort: 'London and the Home Counties',
  /** Not yet confirmed as consistently achievable. Set e.g. '3–5 working days' to publish it. */
  reportTurnaround: null as string | null,

  /**
   * Trust points confirmed by Philip (Oct 2026). No individual assessors are named.
   * BS 8674:2025 is framed as the standard for individual assessor competence, never as a
   * company accreditation. No company-level accreditations are held.
   */
  credentials: [
    { label: 'IFSM members', detail: 'All our fire risk assessors are members of the Institute of Fire Safety Managers.', status: 'confirmed' },
    { label: 'BS 8674:2025 competence framework', detail: 'Assessor competence is matched to the premises using the British Standard for individual fire risk assessors.', status: 'confirmed' },
    { label: 'Professional indemnity insurance', detail: '£500,000 per claim.', status: 'confirmed' },
    { label: 'Public liability insurance', detail: '£2 million.', status: 'confirmed' },
  ] as Credential[],

  /** Reviews: real Google reviews of Certify Services Ltd, always labelled as such. See src/data/reviews.ts. */

  tracking: {
    /** Certify Services Ltd container for the fire safety site (Gal has Publish access). */
    gtmId: (import.meta.env.PUBLIC_GTM_ID as string | undefined) || 'GTM-K5HWQDK9',
  },
} as const;

export const confirmedCredentials = site.credentials.filter((c) => c.status === 'confirmed');
export const emailDisplay = site.email ?? 'enquiries@ (address to confirm)';
