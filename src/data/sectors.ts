import type { Sector } from './types';
import { extraSectors } from './sectors.extra';

export const sectors: Sector[] = [
  {
    slug: 'blocks-of-flats',
    name: 'Blocks of Flats',
    tile: 'Communal fire risk assessments for purpose-built and converted blocks.',
    propertyType: 'Block of Flats',
    h1: 'Fire risk assessments for blocks of flats',
    heroSub: 'Fire risk assessments for the communal areas of purpose-built and converted blocks of flats.',
    image: null,
    imageLabel: 'Photo needed: exterior of a purpose-built or converted block of flats',
    metaTitle: 'Fire Risk Assessments for Blocks of Flats | T&T Fire Safety',
    metaDescription:
      'Communal-area fire risk assessments for purpose-built and converted blocks of flats, for freeholders, RMCs and managing agents. Prioritised action plan. Free quote.',
    introTitle: 'Fire Risk Assessments for Blocks of Flats',
    intro: [
      'T&T Fire Safety carries out fire risk assessments for purpose-built and converted blocks of flats, supporting landlords, freeholders, managing agents and property managers.',
      'The assessment considers the relevant fire risks, escape arrangements and fire-safety measures within the scope of the premises being assessed.',
    ],
    considerTitle: 'What we consider',
    consider: [
      { title: 'Communal escape routes', text: 'Stairways, corridors, final exits and the routes residents use to leave the building.' },
      { title: 'Flat entrance doors', text: 'The role and condition of flat entrance doors where relevant and accessible to the assessment.' },
      { title: 'Communal fire doors', text: 'Fire-resisting doors protecting stairs, corridors, cupboards and other communal areas.' },
      { title: 'Compartmentation', text: 'Accessible elements of fire separation and any visible breaches or defects relevant to the assessment.' },
      { title: 'Fire detection & emergency lighting', text: 'Communal alarm and detection arrangements where provided, and emergency lighting to escape routes.' },
      { title: 'Fire-safety management', text: 'Signage, maintenance records, resident information and arrangements for managing fire safety.' },
    ],
    contextTitle: 'What the law expects of a block’s Responsible Person',
    context: [
      'In England the common parts of a block of flats are covered by the Regulatory Reform (Fire Safety) Order 2005. Since the Fire Safety Act 2021, that explicitly includes the building’s structure, external walls (including windows and balconies) and the flat entrance doors that open onto the common parts.',
      'In England, the Fire Safety (England) Regulations 2022 add duties that scale with height: fire-safety instructions and fire door information for residents in every block with two or more flats; quarterly checks of communal fire doors and annual best-endeavours checks of flat entrance doors in blocks over 11 metres; and further duties for high-rise buildings. Our assessment records whether those arrangements are in place.',
    ],
    services: ['fra', 'doors', 'lighting', 'aov', 'alarms'],
    ctaTitle: 'Managing a block, or a portfolio of them? Get one quote for the lot.',
    faqs: [
      { q: 'Does the assessment cover the inside of flats?', a: 'A communal-areas assessment covers the shared parts and the elements separating them from the flats, including flat entrance doors where they are accessible from the communal side. Assessing inside flats is a wider scope, arranged separately.' },
      { q: 'Who is responsible for arranging it?', a: 'The person or organisation in control of the communal areas: usually the freeholder or landlord, or a residents’ management company, often with a managing agent arranging the assessment on their behalf.' },
      { q: 'Is the evacuation strategy considered?', a: 'Yes. The assessment records the strategy in place, whether stay put or simultaneous evacuation, and whether the arrangements and resident information are consistent with it.' },
      { q: 'Do you open up construction to check compartmentation?', a: 'No. The assessment is non-destructive and covers accessible elements and visible defects. Where there is doubt about concealed construction, further investigation is recommended.' },
      { q: 'What about buildings with a single staircase?', a: 'Escape arrangements are assessed as they are, including the protection of the single escape route and the arrangements for residents who would need assistance to leave.' },
      { q: 'How often should it be reviewed?', a: 'There is no single interval that applies to every block. It must be kept up to date and reviewed whenever there is a significant change, such as alterations, a change of use or occupancy, or a fire or near miss.' },
    ],
    relatedGuides: ['fire-safety-england-regulations-2022', 'how-often-should-a-fire-risk-assessment-be-reviewed', 'do-i-need-a-fire-risk-assessment'],
    sources: [
      { label: 'Fire Safety Act 2021 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/ukpga/2021/24/contents' },
      { label: 'Fire Safety (England) Regulations 2022 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2022/547/contents/made' },
      { label: 'Fire Safety (England) Regulations 2022: guidance (GOV.UK)', url: 'https://www.gov.uk/government/publications/fire-safety-england-regulations-2022' },
    ],
  },
  ...extraSectors,
];

export const sectorUrl = (s: Sector) => `/sectors/${s.slug}`;
