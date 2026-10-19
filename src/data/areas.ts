import type { Area } from './types';

const ext = (url: string, label: string) =>
  `<a href="${url}" rel="nofollow noopener" target="_blank">${label}</a>`;

export const areas: Area[] = [
  // ───────────────────────────── Greater London ─────────────────────────────
  {
    slug: 'greater-london',
    name: 'Greater London',
    nation: 'England',
    metaTitle: 'Fire Risk Assessments in London | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments for London blocks, conversions and HMOs, centred on Barnet, Brent, Camden, Harrow, Haringey and Islington. Call 020 8066 2499.',
    heroSub:
      'Fire risk assessments and fire safety servicing across Greater London, centred on Barnet, Brent, Camden, Harrow, Haringey and Islington and the boroughs around them.',
    intro: [
      'T&T Fire Safety carries out fire risk assessments across Greater London for freeholders, residents’ management companies, managing agents, HMO landlords and businesses. Our work is centred on north and north-west London, in <a href="/areas/barnet">Barnet</a>, <a href="/areas/brent">Brent</a>, <a href="/areas/camden">Camden</a>, <a href="/areas/harrow">Harrow</a>, <a href="/areas/haringey">Haringey</a> and <a href="/areas/islington">Islington</a> and their neighbours, and we cover the rest of the capital too. In London that mostly means converted terraces, council and housing association blocks, new-build towers, and shops with flats above.',
      'Fire safety law in the capital is enforced by the London Fire Brigade, which inspects premises in the 32 boroughs and the City of London and can serve alterations, enforcement and prohibition notices. Alongside assessments we inspect fire doors and service fire alarms, emergency lighting, AOVs and smoke control systems in the common parts of residential blocks.',
    ],
    places: [
      'Barnet', 'Brent', 'Camden', 'Harrow', 'Haringey', 'Islington', 'Enfield', 'Ealing', 'Hillingdon',
      'Westminster', 'Kensington & Chelsea', 'Hammersmith & Fulham', 'Hackney', 'Waltham Forest',
      'All other London boroughs and the City',
    ],
    housingTitle: 'London housing: flats, conversions and towers',
    housing: [
      'At the 2021 Census, 54% of London households lived in a flat, maisonette or apartment, far more than in any other English region, and about 30% rented privately against roughly 20% across England and Wales. The result is a huge number of buildings with shared stairs and corridors, each with a responsible person who may not know it.',
      'The stock falls into three broad groups. Victorian and Edwardian houses converted into flats, many of them section 257 HMOs because the conversion predates modern Building Regulations, tend to have timber stairs, original panel doors and gaps in the separation between flats. Post-war council blocks from the 1960s and 1970s depend on compartmentation that later cabling, pipework and replacement doors have often breached. Newer towers raise questions about cladding, smoke control and evacuation: as of April 2026, London had 1,078 buildings in government remediation schemes where works had not started, more than every other English region combined.',
    ],
    licensingTitle: 'Property licensing across the London boroughs',
    licensing: [
      `London uses discretionary licensing more heavily than anywhere else in England. ${ext('https://www.newham.gov.uk/housing-homes-homelessness/rented-property-licensing/7', 'Newham')} has borough-wide selective licensing to 31 May 2028, excluding Royal Victoria and Stratford Olympic Park wards. ${ext('https://www.brent.gov.uk/news-in-brent/2026/february/all-landlords-in-brent-must-now-be-licensed', 'Brent')} added borough-wide additional HMO licensing on 2 February 2026 on top of selective designations covering every ward except Wembley Park, so almost every private let there now needs a licence. ${ext('https://www.walthamforest.gov.uk/housing/private-sector-housing/private-rented-property-licensing-prpl/property-licensing-schemes', 'Waltham Forest')} has borough-wide additional licensing from 1 April 2025 and selective licensing in 20 of its 22 wards, and ${ext('https://www.lbbd.gov.uk/news/2025/barking-and-dagenham-council-introduce-new-selective-licensing-scheme-improve-private', 'Barking and Dagenham')} began a borough-wide selective scheme on 6 April 2025.`,
      `Newer schemes include Hackney’s selective (17 wards) and borough-wide additional licensing from 1 May 2026, and ${ext('https://www.croydon.gov.uk/housing/landlords/selective-and-additional-hmo-licensing-schemes/additional-hmo-licensing-scheme-2026', 'Croydon')}’s borough-wide additional and 14-ward selective schemes from 25 September 2026. Royal Greenwich consulted in 2026 on a wider selective scheme. London schemes start, end and change their boundaries often, so check the current rules with your borough before you let; a licence never replaces the fire risk assessment for the common parts.`,
    ],
    lawTitle: 'The law for London’s blocks and towers',
    law: [
      'The Regulatory Reform (Fire Safety) Order 2005 applies to the common parts of every London block and HMO and to all non-domestic premises. The Fire Safety Act 2021 confirmed that in any building with two or more homes it covers the structure, the external walls (including cladding and balconies) and every flat entrance door. Since 1 October 2023 every responsible person must keep a written record of the full assessment, whatever the size of the building, and the record must name who carried it out.',
      'London’s tall stock is where the Fire Safety (England) Regulations 2022 bite hardest. Blocks of 18 metres or seven storeys need a secure information box, floor and building plans and external wall information sent to the London Fire Brigade, wayfinding signage and monthly checks of lifts and firefighting equipment. Above 11 metres, communal fire doors must be checked every three months and flat entrance doors every 12 months on a best-endeavours basis. Since 6 April 2026, high-rise blocks and 11m+ blocks with simultaneous evacuation must also offer residents who would struggle to leave a personal evacuation plan.',
    ],
    enforcer: { name: 'London Fire Brigade', url: 'https://www.london-fire.gov.uk/' },
    faqs: [
      {
        q: 'Do I need a licence as well as a fire risk assessment for my London rental?',
        a: 'Quite possibly. In boroughs such as Newham, Brent and Barking and Dagenham, selective or additional licensing now reaches most private lets. Licensing is a housing requirement run by the borough; the fire risk assessment for any common parts is a separate duty under the Fire Safety Order. Our <a href="/sectors/landlords-hmos">landlords and HMOs page</a> explains how the two fit together.',
      },
      {
        q: 'My block is waiting for cladding remediation. What should the fire risk assessment cover?',
        a: 'It should record the external wall risk as it stands now and the interim measures being relied on, such as a change of evacuation strategy or extra detection, and it should be reviewed when works start and finish. With over a thousand London buildings in government schemes still waiting for works in April 2026, this is a common position.',
      },
      {
        q: 'Does the London Fire Brigade inspect residential blocks?',
        a: 'Yes. LFB enforces the Fire Safety Order across Greater London, including the common parts of blocks of flats. If you have received a letter, our guide to <a href="/guides/council-and-insurer-fire-safety-letters">fire safety letters</a> explains what is usually being asked for.',
      },
      {
        q: 'My block in Croydon is 12 metres tall. Which extra rules apply?',
        a: 'The Fire Safety (England) Regulations 2022 apply in every borough. Above 11 metres you need three-monthly checks of communal fire doors and best-endeavours annual checks of flat entrance doors, plus fire safety instructions for residents. Our <a href="/guides/fire-safety-england-regulations-2022">guide to the 2022 Regulations</a> sets out each duty.',
      },
    ],
    sources: [
      { label: 'GLA Housing Research Note 9: London’s private rented market', url: 'https://london.gov.uk/sites/default/files/2023-06/Housing%20Research%20Note%209%20-%20Understanding%20recent%20rental%20trends%20in%20London%27s%20private%20rented%20market.pdf' },
      { label: 'ONS: Housing, England and Wales, Census 2021', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/housing/bulletins/housingenglandandwales/census2021' },
      { label: 'Mayor of London: London Remediation Acceleration Plan', url: 'https://www.london.gov.uk/new-plan-published-speed-removal-dangerous-cladding-across-capital' },
      { label: 'London Fire Brigade FOI response on high-rise premises (May 2024)', url: 'https://www.london-fire.gov.uk/media/trmicdus/foi-response-86251-high-rise.pdf' },
      { label: 'Newham Council: rented property licensing', url: 'https://www.newham.gov.uk/housing-homes-homelessness/rented-property-licensing/7' },
      { label: 'Brent Council: all landlords must now be licensed', url: 'https://www.brent.gov.uk/news-in-brent/2026/february/all-landlords-in-brent-must-now-be-licensed' },
      { label: 'Waltham Forest Council: property licensing schemes', url: 'https://www.walthamforest.gov.uk/housing/private-sector-housing/private-rented-property-licensing-prpl/property-licensing-schemes' },
      { label: 'Croydon Council: additional HMO licensing scheme 2026', url: 'https://www.croydon.gov.uk/housing/landlords/selective-and-additional-hmo-licensing-schemes/additional-hmo-licensing-scheme-2026' },
      { label: 'Hackney Council: selective licensing designation', url: 'https://hackney.moderngov.co.uk/documents/s95584/Appendix+7+Designation+SL.docx.pdf' },
      { label: 'Fire Safety (England) Regulations 2022 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2022/547' },
    ],
    nearby: ['hertfordshire', 'buckinghamshire', 'essex', 'kent', 'surrey', 'berkshire'],
  },

  // ───────────────────────────── Barnet ─────────────────────────────
  {
    slug: 'barnet',
    name: 'Barnet',
    nation: 'England',
    parent: 'greater-london',
    metaTitle: 'Fire Risk Assessments in Barnet | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in Barnet for converted semis, HMOs and Colindale’s new blocks, plus fire door, alarm and AOV servicing. Call 020 8066 2499 for a quote.',
    heroSub:
      'Fire risk assessments and fire safety servicing in Colindale, Hendon, Finchley, Golders Green, Edgware, Burnt Oak, Chipping Barnet and Friern Barnet.',
    intro: [
      'T&T Fire Safety carries out fire risk assessments across Barnet for freeholders, residents’ management companies, managing agents, HMO landlords and local businesses. The borough runs from the Victorian streets of Cricklewood and Finchley to the new apartment districts of Colindale and the suburban semis of Edgware, so buildings vary a great deal between postcodes.',
      'The London Fire Brigade enforces fire safety law in Barnet, while the council deals with housing standards and licensing. Alongside assessments we inspect fire doors and service fire alarms, emergency lighting and smoke ventilation in the shared parts of blocks and HMOs.',
    ],
    places: [
      'Colindale', 'Hendon', 'West Hendon', 'Golders Green', 'Childs Hill', 'Cricklewood', 'Finchley',
      'East Finchley', 'Friern Barnet', 'Edgware', 'Burnt Oak', 'Mill Hill', 'Chipping Barnet', 'New Southgate',
    ],
    housingTitle: 'From suburban semis to Colindale’s new blocks',
    housing: [
      'Much of Barnet was built between the wars as semi-detached and terraced family housing. Many of those houses have since been divided into flats or let room by room, often with a loft conversion added along the way. A three-storey shared house of this kind depends on a single staircase, and once the original doors have been swapped for lightweight or glazed ones there may be little to stop smoke reaching it. In flat conversions, the floors between flats and boxed-in service risers are other weak points.',
      'Colindale has changed faster than most of outer London. The Grahame Park estate is being rebuilt by Notting Hill Genesis with Barnet Council in a programme the council puts at around 4,000 new homes, and former institutional sites nearby now hold apartment blocks well above 11 metres. Newer blocks bring their own checks: smoke ventilation and AOV systems, fire stopping where services pass through compartment walls, and the height-based duties under the 2022 Regulations.',
    ],
    licensingTitle: 'Property licensing in Barnet',
    licensing: [
      `${ext('https://barnet.gov.uk/HMOlicensing', 'Barnet Council')} runs a borough-wide additional licensing scheme for HMOs that began on 27 October 2022 and is due to end on 27 October 2027. It covers smaller shared houses below the mandatory threshold, so a house let to three or four people from more than one household normally needs a licence, and larger HMOs need a mandatory licence.`,
      `Selective licensing has had a longer road. The council approved a first phase for Burnt Oak, Colindale North and Colindale South, but its start was delayed, and in February 2026 ${ext('https://barnet.moderngov.co.uk/documents/s93732/Private%20Sector%20Housing%20Licensing%20Scheme.pdf', 'Cabinet agreed a fresh consultation')} on a selective scheme for ten wards, including West Hendon, Golders Green, Cricklewood, Childs Hill and Friern Barnet. We have not seen a confirmed start date, so check the current position with the council before letting a single-household property in those wards.`,
    ],
    lawTitle: 'The law that applies to Barnet’s blocks and HMOs',
    law: [
      'The Regulatory Reform (Fire Safety) Order 2005 places the duty on the responsible person: usually the freeholder, managing agent or HMO landlord who controls the shared parts. For a Barnet house split into flats, the Fire Safety Act 2021 means the assessment has to consider the building’s structure, its external walls and each front door opening onto the common stair, not only the hallway itself. The findings must be written down in full, as every responsible person has had to since 1 October 2023.',
      'Colindale’s taller blocks also come under the Fire Safety (England) Regulations 2022. Where the top storey is above 11 metres, communal fire doors need checking at least every three months and flat entrance doors at least once a year on a best-endeavours basis; at 18 metres or seven storeys the building also needs a secure information box, wayfinding signs and plans shared with the London Fire Brigade. Every block with two or more flats must give residents fire safety instructions at least once a year.',
    ],
    enforcer: { name: 'London Fire Brigade', url: 'https://www.london-fire.gov.uk/' },
    faqs: [
      {
        q: 'My shared house in Finchley has three tenants. Does it need a licence?',
        a: 'If the three tenants form more than one household, it is an HMO within Barnet’s additional licensing scheme, which runs to 27 October 2027. The common parts should also be covered by a fire risk assessment; our <a href="/sectors/landlords-hmos">landlords and HMOs page</a> explains what that involves.',
      },
      {
        q: 'Is selective licensing in force in Burnt Oak and Colindale?',
        a: 'Not as far as we can find. The first phase was approved but delayed, and the council consulted again in 2026 on a ten-ward scheme. Check Barnet Council’s licensing pages for the latest decision before you let.',
      },
      {
        q: 'Our Colindale block has an AOV system. Does it need servicing?',
        a: 'Yes. The Fire Safety Order requires fire safety equipment to be kept in efficient working order, and smoke ventilation is part of how the stair is kept usable for escape and firefighting. See our <a href="/services/aov-smoke-control-servicing">AOV and smoke control servicing</a> page.',
      },
      {
        q: 'Who is the responsible person in a converted house with a share of freehold?',
        a: 'Usually the freehold company, acting through its directors or a managing agent. Where several people share control, each has duties for the parts they control and they must co-operate. Our guide <a href="/guides/do-i-need-a-fire-risk-assessment">Do I need a fire risk assessment?</a> explains how control decides who is responsible.',
      },
    ],
    sources: [
      { label: 'Barnet Council: changes to property licensing including HMOs', url: 'https://barnet.gov.uk/HMOlicensing' },
      { label: 'Barnet Council Cabinet: private sector housing licensing scheme (2026)', url: 'https://barnet.moderngov.co.uk/documents/s93732/Private%20Sector%20Housing%20Licensing%20Scheme.pdf' },
      { label: 'Barnet Council: Grahame Park regeneration', url: 'https://www.barnet.gov.uk/local-regeneration-and-growth-barnet/colindale/grahame-park' },
      { label: 'Fire Safety Act 2021, s.1 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/ukpga/2021/24/section/1' },
      { label: 'Fire Safety (England) Regulations 2022 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2022/547' },
      { label: 'GOV.UK: fire safety responsibilities under section 156 of the Building Safety Act 2022', url: 'https://www.gov.uk/government/publications/check-your-fire-safety-responsibilities-under-section-156-of-the-building-safety-act-2022/fire-safety-responsibilities-under-section-156-of-the-building-safety-act-2022' },
    ],
    nearby: ['brent', 'harrow', 'haringey', 'camden', 'hertfordshire', 'greater-london'],
  },

  // ───────────────────────────── Brent ─────────────────────────────
  {
    slug: 'brent',
    name: 'Brent',
    nation: 'England',
    parent: 'greater-london',
    metaTitle: 'Fire Risk Assessments in Brent | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in Brent for Wembley Park towers, Kilburn and Harlesden conversions and licensed HMOs, plus fire door and alarm servicing. Call us.',
    heroSub:
      'Fire risk assessments and fire safety servicing in Wembley, Kilburn, Harlesden, Willesden, Neasden, Kingsbury, Kensal Green and Dollis Hill.',
    intro: [
      'We carry out fire risk assessments in Brent for block owners, managing agents, private landlords and businesses. Brent is one of the few London boroughs where almost every private let now needs a licence, which puts the condition of rented homes, fire precautions included, under closer scrutiny than in most places.',
      'The London Fire Brigade enforces the Fire Safety Order in Brent. The work here splits roughly in two: tall, recently built blocks around Wembley Park and the wider Wembley regeneration area, and older terraces and conversions in Kilburn, Willesden, Harlesden and Kensal Green. We also inspect fire doors and service alarms, emergency lighting and AOVs in both kinds of building.',
    ],
    places: [
      'Wembley', 'Wembley Park', 'Alperton', 'Kilburn', 'Queen’s Park', 'Willesden', 'Harlesden', 'Kensal Green',
      'Neasden', 'Dollis Hill', 'Kingsbury', 'Stonebridge', 'Sudbury', 'Cricklewood (Brent side)',
    ],
    housingTitle: 'Wembley Park towers and Kilburn conversions',
    housing: [
      'Wembley Park has become one of the largest build-to-rent districts in the country. Quintain’s scheme around the stadium has outline consent for about 8,500 homes, most of them in mid-rise and high-rise blocks, and many are let and managed by a single operator. Buildings like these carry the full set of high-rise duties, and the fire risk assessment has to sit alongside the smoke control design, evacuation strategy and building safety records the owner already holds.',
      'South of the North Circular the stock is older. Kilburn, Queen’s Park and Willesden have streets of large Victorian houses divided into flats over the past century, while Harlesden and Stonebridge mix terraced private lets with post-war and rebuilt estates. In a Kilburn conversion the questions are often about what was done when the house was split: whether the stair was enclosed, whether ceilings between flats give any real fire resistance, and whether anyone has taken responsibility for maintaining the communal alarm.',
    ],
    licensingTitle: 'Licensing in Brent: almost every let',
    licensing: [
      `${ext('https://www.brent.gov.uk/news-in-brent/2026/february/all-landlords-in-brent-must-now-be-licensed', 'Brent Council')} brought in borough-wide additional HMO licensing on 2 February 2026, covering shared houses below the mandatory threshold. It sits alongside two selective licensing designations for single-household lets: one for Dollis Hill, Harlesden & Kensal Green and Willesden Green, running from 1 August 2023 to 31 July 2028, and one for the borough’s other wards apart from Wembley Park, running from 1 April 2024 to 31 March 2029.`,
      'The council’s own summary is that all landlords in Brent must now be licensed. The main exception is a single-household let in Wembley Park ward, which falls outside the selective designations; an HMO there still needs a licence. A licence and its conditions are separate from the Fire Safety Order, so holding one does not mean the common parts have been assessed.',
    ],
    lawTitle: 'How fire safety law applies in Brent',
    law: [
      'Whoever controls the shared parts of a Brent block or HMO is the responsible person under the Regulatory Reform (Fire Safety) Order 2005, and must make and keep under review a suitable and sufficient fire risk assessment. Since the Fire Safety Act 2021, in any building with two or more homes that assessment extends to external walls, balconies and flat entrance doors, which is relevant to the large clad and glazed facades common in Wembley. The full record has had to be kept in writing since 1 October 2023, naming whoever carried it out.',
      'For the tallest blocks, the Fire Safety (England) Regulations 2022 add monthly checks of firefighting lifts and equipment, with any fault not fixed within 24 hours reported to the London Fire Brigade, plus an information box, wayfinding signs and building plans. Since 6 April 2026, residents of those blocks who would struggle to evacuate must be offered a person-centred fire risk assessment and a personal evacuation plan.',
    ],
    enforcer: { name: 'London Fire Brigade', url: 'https://www.london-fire.gov.uk/' },
    faqs: [
      {
        q: 'Do I need a licence for a flat I let to a family in Willesden?',
        a: 'Yes. Willesden Green is in Brent’s 2023 selective designation, which runs to 31 July 2028, so single-household lets there need a selective licence. Check the fee and conditions on Brent Council’s website.',
      },
      {
        q: 'Is Wembley Park exempt from licensing?',
        a: 'Only partly. Single-household lets in Wembley Park ward are outside the selective schemes, but HMOs there need either a mandatory or an additional licence.',
      },
      {
        q: 'Our Wembley block is over 18 metres. What does the fire risk assessment need to cover?',
        a: 'The common parts, structure, external walls and flat entrance doors, plus a check that the high-rise duties are being met: information box, wayfinding signs, monthly equipment checks and evacuation plans for residents who need them. Our <a href="/sectors/blocks-of-flats">blocks of flats page</a> has more.',
      },
      {
        q: 'Can Brent Council take action over fire safety in an HMO?',
        a: 'Yes. The council can act on fire hazards under the Housing Act 2004 whether or not the house is licensed, and it must consult the fire authority before doing so in an HMO. Our guide to <a href="/guides/council-and-insurer-fire-safety-letters">fire safety letters</a> explains what is usually asked for.',
      },
    ],
    sources: [
      { label: 'Brent Council: all landlords in Brent must now be licensed', url: 'https://www.brent.gov.uk/news-in-brent/2026/february/all-landlords-in-brent-must-now-be-licensed' },
      { label: 'Brent Council: notice of designation for additional licensing', url: 'https://www.brent.gov.uk/housing/landlords/property-licensing/notice-of-designation-of-an-area-for-additional-licensing-3-2025' },
      { label: 'Brent Council: selective licensing designation 2023', url: 'https://democracy.brent.gov.uk/documents/s134057/12.%20Selective%20licensing%20Designation%202023-2.pdf' },
      { label: 'New London Architecture: Wembley Park', url: 'https://www.nla.london/index.php/projects/wembley-park' },
      { label: 'Fire Safety (England) Regulations 2022, reg. 7 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2022/547/regulation/7/made' },
      { label: 'Residential PEEPs guidance for responsible persons (GOV.UK)', url: 'https://www.gov.uk/government/publications/residential-personal-emergency-evacuation-plans-residential-peeps/residential-peeps-guidance-for-responsible-persons' },
    ],
    nearby: ['barnet', 'harrow', 'camden', 'greater-london'],
  },

  // ───────────────────────────── Camden ─────────────────────────────
  {
    slug: 'camden',
    name: 'Camden',
    nation: 'England',
    parent: 'greater-london',
    metaTitle: 'Fire Risk Assessments in Camden | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in Camden for Georgian and Victorian conversions, mansion blocks, estates and HMOs, with fire door and alarm servicing. Call us today.',
    heroSub:
      'Fire risk assessments and fire safety servicing in Kentish Town, Camden Town, Hampstead, Swiss Cottage, West Hampstead, Kilburn, Bloomsbury and Holborn.',
    intro: [
      'T&T Fire Safety carries out fire risk assessments in Camden for residents’ management companies, freeholders, managing agents, HMO landlords and commercial occupiers. Few boroughs pack as many building types into so small an area: Georgian terraces in Bloomsbury, Victorian villas in Hampstead and Belsize Park, red-brick mansion blocks in West Hampstead, large council estates, and offices and shops with flats above around Camden Town and Holborn.',
      'Fire safety law in Camden is enforced by the London Fire Brigade, and the borough’s housing team runs one of London’s longest-standing HMO licensing regimes. Alongside assessments we inspect fire doors and service fire alarms, emergency lighting and AOVs in shared residential and mixed-use buildings.',
    ],
    places: [
      'Camden Town', 'Kentish Town', 'Gospel Oak', 'Hampstead', 'Belsize Park', 'Swiss Cottage', 'West Hampstead',
      'Kilburn', 'Primrose Hill', 'Somers Town', 'King’s Cross', 'Bloomsbury', 'Holborn', 'Highgate (Camden side)',
    ],
    housingTitle: 'Period conversions, mansion blocks and estates',
    housing: [
      'Many Camden flats are in houses built in the eighteenth and nineteenth centuries and divided long before modern Building Regulations. Listed status and conservation areas add a complication: replacing a panelled door or adding a lobby may need consent, so the fire risk assessment has to find ways to protect the escape route without harming the building, such as upgrading existing doors, adding intumescent seals or improving detection. Mansion blocks raise different issues, including lifts set within the stairwell, rear service stairs and old refuse chutes.',
      'Camden is also a major social landlord, and its post-war towers are a reminder of why the law changed. On 23 June 2017, nine days after the Grenfell Tower fire, the council evacuated four of the five towers on the Chalcots Estate in Swiss Cottage after inspectors found problems with cladding, fire doors and gas pipe insulation. The lesson for any block is that external walls, front doors and service routes have to be assessed together, not one at a time.',
    ],
    licensingTitle: 'HMO licensing in Camden',
    licensing: [
      `${ext('https://www.camden.gov.uk/hmo-consultation', 'Camden Council')} has run borough-wide additional HMO licensing since 2015. Its current designation, agreed on 2 July 2025, took effect on 8 December 2025 and runs to 8 December 2030. It covers HMOs below the mandatory threshold, and the council can grant shorter two-year licences where it has concerns about how a property is managed or its condition.`,
      'We have not found a selective licensing scheme in Camden, so single-household lets do not currently appear to need a licence there; check with the council before you let, because schemes change. HMO licences carry their own conditions, and the fire risk assessment for the common parts is a separate duty under the Fire Safety Order.',
    ],
    lawTitle: 'Fire safety law for Camden’s older buildings',
    law: [
      'The Regulatory Reform (Fire Safety) Order 2005 applies to the common parts of Camden’s converted houses, mansion blocks and estates, and to every shop, office and restaurant. Following the Fire Safety Act 2021, the assessment of any building with two or more flats must take in the structure, the external walls and the flat entrance doors, which in period conversions are often original timber doors never designed to resist fire. Every assessment, however small the building, has had to be recorded in full since 1 October 2023.',
      'In mixed-use buildings, such as a restaurant with flats above on Camden High Street, there are often two responsible persons: the business for its premises and the freeholder for the residential parts. The law requires them to co-operate and share information. Residential parts with two or more flats also come under the Fire Safety (England) Regulations 2022, which require fire safety instructions and fire door information to be given to residents every year.',
    ],
    enforcer: { name: 'London Fire Brigade', url: 'https://www.london-fire.gov.uk/' },
    faqs: [
      {
        q: 'My building in Kentish Town is listed. Can it still meet fire safety requirements?',
        a: 'Usually, yes. Upgrading existing doors, fitting intumescent strips and smoke seals and improving detection can often protect the escape route with little impact on the building. Speak to the council’s conservation team before changing doors or partitions in a listed building.',
      },
      {
        q: 'When does Camden’s current HMO licensing scheme end?',
        a: 'The borough-wide additional licensing designation runs from 8 December 2025 to 8 December 2030, unless the council revokes it earlier.',
      },
      {
        q: 'Who is responsible for fire safety in a shop with flats above?',
        a: 'Each person who controls part of the building has duties for that part. The shop operator assesses the shop; the freeholder or managing agent assesses the common parts and the building as a whole. Our <a href="/sectors/retail">retail page</a> covers the commercial side.',
      },
      {
        q: 'Does our mansion block need a fire risk assessment if it is under 11 metres?',
        a: 'Yes. The Fire Safety Order applies to the common parts of any block with shared areas, whatever its height. Height only changes which extra duties apply under the 2022 Regulations. See our <a href="/sectors/blocks-of-flats">blocks of flats page</a>.',
      },
    ],
    sources: [
      { label: 'Camden Council: new additional HMO licensing scheme designation agreed', url: 'https://www.camden.gov.uk/hmo-consultation' },
      { label: 'Camden Council: Camden renews HMO licensing scheme', url: 'https://news.camden.gov.uk/camden-renews-hmo-licensing-scheme-to-drive-up-housing-standards-for-private-renters/' },
      { label: 'Arab News (AP): hundreds evacuated from London towers, June 2017', url: 'https://www.arabnews.com/node/1119851' },
      { label: 'Fire Safety Act 2021, s.1 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/ukpga/2021/24/section/1' },
      { label: 'GOV.UK: responsible persons in England, changes in fire safety legislation', url: 'https://www.gov.uk/government/publications/responsible-persons-in-england-changes-in-fire-safety-legislation/responsible-persons-in-england-changes-in-fire-safety-legislation' },
      { label: 'Fire Safety (England) Regulations 2022 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2022/547' },
    ],
    nearby: ['islington', 'haringey', 'brent', 'barnet', 'greater-london'],
  },

  // ───────────────────────────── Harrow ─────────────────────────────
  {
    slug: 'harrow',
    name: 'Harrow',
    nation: 'England',
    parent: 'greater-london',
    metaTitle: 'Fire Risk Assessments in Harrow | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in Harrow for shared houses, converted homes and new town-centre blocks in Wealdstone, Edgware and beyond. Call 020 8066 2499 today.',
    heroSub:
      'Fire risk assessments and fire safety servicing in Harrow, Wealdstone, Harrow on the Hill, South Harrow, Rayners Lane, Pinner, Stanmore and Edgware.',
    intro: [
      'We carry out fire risk assessments in Harrow for landlords, letting agents, block managers, residents’ management companies and businesses. Harrow is a largely suburban borough, but it has a sizeable market in family houses let as shared homes, and its town centre and Wealdstone are being reshaped with new apartment buildings.',
      'The London Fire Brigade enforces fire safety law here, and Harrow Council licenses HMOs and, in several wards, ordinary private lets. We also inspect fire doors and service fire alarms, emergency lighting and AOVs in shared buildings.',
    ],
    places: [
      'Harrow town centre', 'Wealdstone', 'Harrow on the Hill', 'Greenhill', 'Marlborough', 'South Harrow', 'Roxeth',
      'Rayners Lane', 'North Harrow', 'Pinner', 'Hatch End', 'Stanmore', 'Edgware', 'Kenton',
    ],
    housingTitle: 'Suburban shared houses and a changing town centre',
    housing: [
      'Most of Harrow was built out as Metro-land between the wars, with semi-detached and terraced houses along the Metropolitan and Bakerloo lines. Many are now let to sharers, sometimes with extra bedrooms in a loft or a converted garage. In a house like this the assessment looks at whether every bedroom can reach the front door without passing through a kitchen or living room, whether smoke alarms are interlinked, and whether the doors onto the stair close properly.',
      'The town centre and Wealdstone are the focus of the borough’s growth, with former offices, car parks and industrial land giving way to taller blocks of flats, and some older office buildings converted to housing. These buildings bring a different set of checks: compartmentation between the flats and any commercial ground floor, smoke control in the corridors, and the height-based duties for blocks above 11 metres.',
    ],
    licensingTitle: 'Selective and HMO licensing in Harrow',
    licensing: [
      `${ext('https://www.harrow.gov.uk/licences/selective-licensing/6', 'Harrow Council')} has extended its selective licensing to six wards in 2026, each designation lasting five years from its start: Edgware and Roxeth from 27 April 2026, Greenhill and Marlborough from 6 July 2026, and Wealdstone North and Wealdstone South from 1 September 2026. Single-household private lets in those wards need a licence.`,
      `Harrow’s borough-wide additional HMO licensing scheme, made in 2021, was due to end on 5 August 2026, and the council ${ext('https://talk.harrow.gov.uk/additionalhmo-licensing', 'consulted on renewing it')} between December 2025 and February 2026. We could not confirm whether a new designation is in force, so check the current position with the council before letting a three or four-person shared house. HMOs with five or more people in two or more households need a mandatory licence regardless.`,
    ],
    lawTitle: 'What the law requires in Harrow',
    law: [
      'The responsible person for a Harrow HMO or block, usually the landlord, freeholder or managing agent, must carry out a fire risk assessment under the Regulatory Reform (Fire Safety) Order 2005 and keep it up to date. The law sets no fixed review interval, but the assessment must be revisited when something significant changes, such as a loft conversion, a change in the number of tenants or new building work. Since 1 October 2023 it must be recorded in full.',
      'The Fire Safety Act 2021 brought external walls and flat entrance doors into scope for any building with two or more homes, which matters in Harrow’s new town-centre blocks. Those blocks also fall under the Fire Safety (England) Regulations 2022, with resident fire safety instructions in every case and quarterly communal door checks once the top storey is above 11 metres. Shared houses must also meet the HMO management regulations, which require escape routes to be kept clear and alarms in working order.',
    ],
    enforcer: { name: 'London Fire Brigade', url: 'https://www.london-fire.gov.uk/' },
    faqs: [
      {
        q: 'Does my rented house in Wealdstone need a licence?',
        a: 'If it is let to a single household in Wealdstone North or Wealdstone South, it has fallen within Harrow’s selective licensing since 1 September 2026. If it is an HMO, check whether it needs a mandatory or additional licence.',
      },
      {
        q: 'Is Harrow’s additional HMO licensing still running?',
        a: 'The 2021 scheme was due to end on 5 August 2026 and the council consulted on renewal. We have not been able to confirm a new designation, so ask Harrow Council before relying on either answer.',
      },
      {
        q: 'I’ve added a loft bedroom to my shared house. Do I need a new fire risk assessment?',
        a: 'You need at least a review. An extra storey can lengthen the escape route and may change what detection and door protection are needed. See our guide on <a href="/guides/how-often-should-a-fire-risk-assessment-be-reviewed">how often to review a fire risk assessment</a>.',
      },
      {
        q: 'Who checks fire safety in Harrow?',
        a: 'The London Fire Brigade enforces the Fire Safety Order. Harrow Council handles licensing and housing standards, including fire hazards in rented homes under the Housing Act 2004.',
      },
    ],
    sources: [
      { label: 'Harrow Council: extension of the selective licensing scheme from 2026', url: 'https://www.harrow.gov.uk/licences/selective-licensing/6' },
      { label: 'Harrow Council: additional HMO licensing consultation', url: 'https://talk.harrow.gov.uk/additionalhmo-licensing' },
      { label: 'Harrow Council Cabinet report: additional HMO licensing', url: 'https://harrow.moderngov.co.uk/documents/s196800/Cabinet%20Report%20Additional%20HMO%20Licensing.pdf' },
      { label: 'Regulatory Reform (Fire Safety) Order 2005, art. 9 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2005/1541/article/9' },
      { label: 'Management of HMOs (England) Regulations 2006', url: 'https://www.legislation.gov.uk/uksi/2006/372/made' },
    ],
    nearby: ['brent', 'barnet', 'hertfordshire', 'buckinghamshire', 'greater-london'],
  },

  // ───────────────────────────── Haringey ─────────────────────────────
  {
    slug: 'haringey',
    name: 'Haringey',
    nation: 'England',
    parent: 'greater-london',
    metaTitle: 'Fire Risk Assessments in Haringey | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in Haringey for Tottenham and Wood Green HMOs, converted terraces and estate blocks, plus fire door and alarm servicing. Call us today.',
    heroSub:
      'Fire risk assessments and fire safety servicing in Tottenham, Wood Green, Hornsey, Crouch End, Muswell Hill, Harringay, Seven Sisters and Highgate.',
    intro: [
      'T&T Fire Safety carries out fire risk assessments in Haringey for private landlords, managing agents, freeholders, housing providers and businesses. The borough divides fairly sharply: the west, around Muswell Hill, Crouch End and Highgate, has large Edwardian houses converted into flats, while the east, in Tottenham, Wood Green and Northumberland Park, has denser private renting, many HMOs and large council estates.',
      'The London Fire Brigade enforces fire safety law across Haringey, and the council runs both additional and selective licensing. Alongside assessments we inspect fire doors and service fire alarms, emergency lighting and AOVs.',
    ],
    places: [
      'Tottenham', 'Tottenham Hale', 'Northumberland Park', 'Seven Sisters', 'Bruce Grove', 'Wood Green', 'Noel Park',
      'Bounds Green', 'Harringay', 'Hornsey', 'Crouch End', 'Muswell Hill', 'Highgate', 'Stroud Green',
    ],
    housingTitle: 'HMOs, conversions and Broadwater Farm',
    housing: [
      'The terraced streets of Tottenham, Harringay and Wood Green, including the Harringay Ladder, were built for families around the turn of the twentieth century. A large share are now flats or shared houses, and some have been subdivided more than once. Flats over shops on the main roads, such as Tottenham High Road and Green Lanes, are another common type, where the only way out of the flats may run beside or through the commercial premises below.',
      'Haringey’s estates show how structure and fire safety connect. On Broadwater Farm in Tottenham, surveys in 2018 found that the Tangmere and Northolt blocks, built with a large panel system, were at risk of progressive collapse from a gas explosion or similar force. The council removed piped gas, chose to demolish and rebuild rather than strengthen, and has since let contracts for the work. Most buildings are far simpler, but the case shows why an assessment should record how a block is built and what has changed since.',
    ],
    licensingTitle: 'Additional and selective licensing in Haringey',
    licensing: [
      `${ext('https://haringey.gov.uk/housing/housing-resident-engagement/consultations-housing/proposed-new-additional-licensing-scheme-houses-multiple-occupation-2024-2029', 'Haringey Council')} runs borough-wide additional HMO licensing from 27 May 2024 to 26 May 2029, so shared houses below the mandatory threshold need a licence wherever they are in the borough. Larger HMOs need a mandatory licence.`,
      `Its ${ext('https://www.haringey.gov.uk/sites/default/files/2023-11/notice_of_selective_licensing_designation_final.pdf', 'selective licensing designation')} covers 14 wards, mostly in the east, including Bounds Green, Harringay, Noel Park, Tottenham Hale and Woodside, from 17 November 2022 to 17 November 2027. The council has begun reviewing whether to renew it, so landlords in those wards should look out for a consultation. Check the ward list on the council’s website, as boundaries matter.`,
    ],
    lawTitle: 'Fire safety law for Haringey’s shared homes',
    law: [
      'The Regulatory Reform (Fire Safety) Order 2005 covers the common parts of Haringey’s HMOs, converted houses and blocks, and the Fire Safety Act 2021 confirmed that in buildings with two or more homes it also reaches the structure, external walls and flat entrance doors. A full written record of the assessment and its findings has been required since 1 October 2023, with the name of the person or firm who carried it out.',
      'For HMOs, councils and fire services generally judge fire precautions against the LACORS housing fire safety guidance, which sets out expected levels of detection, fire doors and escape route protection for different sizes of house. The council can also act on fire hazards under the Housing Act 2004, and under the Renters’ Rights Act 2025 the maximum civil penalty for licensing and HMO management offences has risen to £40,000.',
    ],
    enforcer: { name: 'London Fire Brigade', url: 'https://www.london-fire.gov.uk/' },
    faqs: [
      {
        q: 'Does my house share in Tottenham need a licence?',
        a: 'Almost certainly. If it is an HMO it needs an additional or mandatory licence anywhere in Haringey, and if it is let to one household in a selective ward, such as Tottenham Hale or Noel Park, it needs a selective licence while that designation runs.',
      },
      {
        q: 'What happens when Haringey’s selective scheme ends in 2027?',
        a: 'A designation cannot simply be extended; the council would have to consult and make a new one. Haringey has started reviewing the scheme, so check its website for any consultation or decision.',
      },
      {
        q: 'I let flats above a shop on Green Lanes. What should the assessment cover?',
        a: 'The route from the flats to the street, the separation between the shop and the flats, detection in the common parts and the front door to each flat. If the shop is let separately, its operator has their own duties and must co-operate with you.',
      },
      {
        q: 'Which guidance do HMO fire risk assessments in Haringey follow?',
        a: 'Most use the LACORS housing fire safety guidance as the benchmark, alongside BS 9792, the code of practice for fire risk assessment in housing. Our <a href="/sectors/landlords-hmos">landlords and HMOs page</a> explains more.',
      },
    ],
    sources: [
      { label: 'Haringey Council: additional licensing scheme for HMOs 2024–2029', url: 'https://haringey.gov.uk/housing/housing-resident-engagement/consultations-housing/proposed-new-additional-licensing-scheme-houses-multiple-occupation-2024-2029' },
      { label: 'Haringey Council: notice of selective licensing designation', url: 'https://www.haringey.gov.uk/sites/default/files/2023-11/notice_of_selective_licensing_designation_final.pdf' },
      { label: 'Haringey Council Cabinet: demolition of Tangmere block, Broadwater Farm', url: 'https://www.minutes.haringey.gov.uk/documents/s129328/10%20Demolition%20of%20Tangmere%20block%20on%20Broadwater%20Farm%20-%20Award%20of%20Contract.pdf' },
      { label: 'OnLondon: demolition of two Broadwater Farm blocks', url: 'https://www.onlondon.co.uk/haringey-corbyn-council-recommended-to-demolish-two-broadwater-farm-blocks-with-strong-resident-support/' },
      { label: 'LACORS Housing – Fire Safety guidance (hosted by Hastings BC)', url: 'https://www.hastings.gov.uk/content/fire-assessments/LACORS_Fire_safety_guidance.pdf' },
      { label: 'GOV.UK: civil penalties under the Renters’ Rights Act 2025', url: 'https://www.gov.uk/government/publications/civil-penalties-under-the-renters-rights-act-2025-and-other-housing-legislation/civil-penalties-under-the-renters-rights-act-2025-and-other-housing-legislation' },
    ],
    nearby: ['islington', 'barnet', 'camden', 'hertfordshire', 'greater-london'],
  },

  // ───────────────────────────── Islington ─────────────────────────────
  {
    slug: 'islington',
    name: 'Islington',
    nation: 'England',
    parent: 'greater-london',
    metaTitle: 'Fire Risk Assessments in Islington | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in Islington for Georgian and Victorian conversions, council blocks and licensed HMOs, plus fire door and alarm servicing. Call us.',
    heroSub:
      'Fire risk assessments and fire safety servicing in Highbury, Holloway, Archway, Finsbury Park, Angel, Barnsbury, Canonbury, Tufnell Park and Clerkenwell.',
    intro: [
      'We carry out fire risk assessments in Islington for freeholders, residents’ management companies, housing providers, managing agents and landlords. It is one of the most densely populated boroughs in England, and most residents live in flats: in squares and terraces of converted Georgian and Victorian houses, in council and housing association blocks, and in newer developments around Angel, Archway and King’s Cross.',
      'The London Fire Brigade enforces fire safety law in Islington. The council runs borough-wide HMO licensing and is widening selective licensing in 2026, so many landlords are dealing with licence conditions and fire safety at the same time. We also inspect fire doors and service fire alarms, emergency lighting and AOVs.',
    ],
    places: [
      'Angel', 'Barnsbury', 'Canonbury', 'Highbury', 'Holloway', 'Archway', 'Tufnell Park', 'Finsbury Park',
      'Stroud Green', 'Hillrise', 'Tollington', 'Mildmay', 'Clerkenwell', 'Caledonian Road',
    ],
    housingTitle: 'Georgian squares, council estates and new blocks',
    housing: [
      'Barnsbury, Canonbury and much of the south of the borough are lined with late Georgian and early Victorian terraces, many now split into two to five flats. Common findings in these conversions include an unenclosed stair at basement or ground level, lath and plaster ceilings that have been patched or taken down, and electricity and gas meters on the escape route. Because many streets are in conservation areas, the practical fixes are often in detection, door closers and sealing gaps around services rather than structural change.',
      'Islington is also one of London’s larger council landlords, with estates ranging from 1930s walk-up blocks to post-war towers, and many blocks now house a mix of council tenants, leaseholders and private sub-tenants. In mixed-tenure blocks, work done inside flats, such as new front doors fitted by leaseholders or boxing around new pipework, can affect the common parts, so the assessment looks at how alterations are controlled.',
    ],
    licensingTitle: 'Additional and selective licensing in Islington',
    licensing: [
      `Islington has licensed smaller HMOs across the whole borough since 2021. In ${ext('https://opengovernment.network/councils/islington/decisions/174327', 'October 2025')} the council agreed to renew borough-wide additional licensing beyond February 2026 for a further five years, covering homes shared by three or four people from more than one household. Check the exact dates and fee with the council.`,
      `Selective licensing has applied to private lets in Finsbury Park, Tollington and Hillrise wards since 2024. A ${ext('https://publicnoticeportal.uk/notice/statutory/6a8ffd291f34326c1cc206cc', 'new designation')} made on 21 August 2026 extends it to Barnsbury, Caledonian, Tufnell Park, Mildmay, Highbury, Junction and Laycock from 23 November 2026 to 22 November 2031. If you let a flat or house to a single household in those wards, you will need a licence from that date.`,
    ],
    lawTitle: 'Fire safety law for Islington’s conversions and blocks',
    law: [
      'In Islington, as across England, the Regulatory Reform (Fire Safety) Order 2005 requires whoever controls the shared parts of a block or converted house to assess the fire risk and act on it. The Fire Safety Act 2021 means that assessment must cover the structure, external walls and the doors from each flat onto the common parts. Every assessment and its findings must be recorded in writing, a duty in force since 1 October 2023, and residents must be told who the responsible person is and given a UK address for them.',
      'Blocks with two or more flats must also follow the Fire Safety (England) Regulations 2022. Every such building needs fire safety instructions displayed and given to residents, with information about fire doors, at least every 12 months. Taller estate blocks with a top storey above 11 metres need communal fire doors checked every three months, and those at 18 metres or seven storeys carry the full high-rise duties, including residential evacuation plans since 6 April 2026.',
    ],
    enforcer: { name: 'London Fire Brigade', url: 'https://www.london-fire.gov.uk/' },
    faqs: [
      {
        q: 'Does selective licensing apply to my flat in Highbury?',
        a: 'From 23 November 2026, yes, if you let it to a single household and it is in Highbury ward. Highbury is one of seven wards in Islington’s new designation, which runs to 22 November 2031.',
      },
      {
        q: 'My HMO already has a licence. Do I also need a selective licence?',
        a: 'No. A property licensed as an HMO does not also need a selective licence. It does still need a fire risk assessment for any common parts.',
      },
      {
        q: 'A leaseholder replaced their front door. Does that affect the block’s fire safety?',
        a: 'It can. Flat entrance doors onto a common corridor are part of the building’s fire protection, and a replacement without a fire rating weakens it. The fire risk assessment should pick up such doors, and our <a href="/services/fire-door-inspections">fire door inspection</a> service checks them in detail.',
      },
      {
        q: 'How often do the communal fire doors in our block need checking?',
        a: 'If the top storey is above 11 metres, at least every three months under the 2022 Regulations, with flat entrance doors checked at least yearly on a best-endeavours basis. Lower blocks have no fixed interval, but doors must be kept in good repair. See our <a href="/guides/fire-safety-england-regulations-2022">guide to the 2022 Regulations</a>.',
      },
    ],
    sources: [
      { label: 'Islington Council: selective licensing designation notice (August 2026)', url: 'https://publicnoticeportal.uk/notice/statutory/6a8ffd291f34326c1cc206cc' },
      { label: 'Islington Council: selective licensing report (2023)', url: 'https://democracy.islington.gov.uk/documents/s33680/Selective%20Licensing%20Report.pdf' },
      { label: 'Islington Council decision: discretionary property licensing (October 2025)', url: 'https://opengovernment.network/councils/islington/decisions/174327' },
      { label: 'GOV.UK: fire safety responsibilities under section 156 of the Building Safety Act 2022', url: 'https://www.gov.uk/government/publications/check-your-fire-safety-responsibilities-under-section-156-of-the-building-safety-act-2022/fire-safety-responsibilities-under-section-156-of-the-building-safety-act-2022' },
      { label: 'GOV.UK: fire doors fact sheet (regulation 10)', url: 'https://www.gov.uk/government/publications/fire-safety-england-regulations-2022/fact-sheet-fire-doors-regulation-10' },
      { label: 'Residential PEEPs guidance for responsible persons (GOV.UK)', url: 'https://www.gov.uk/government/publications/residential-personal-emergency-evacuation-plans-residential-peeps/residential-peeps-guidance-for-responsible-persons' },
    ],
    nearby: ['camden', 'haringey', 'barnet', 'greater-london'],
  },

  // ───────────────────────────── Hertfordshire ─────────────────────────────
  {
    slug: 'hertfordshire',
    name: 'Hertfordshire',
    nation: 'England',
    metaTitle: 'Fire Risk Assessments in Hertfordshire | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in Hertfordshire for new-town blocks, Hatfield student HMOs and Watford flats, plus fire door and alarm servicing. Call 020 8066 2499.',
    heroSub:
      'Fire risk assessments and fire safety servicing in Watford, St Albans, Stevenage, Hemel Hempstead, Hatfield, Welwyn Garden City, Hertford and Hitchin.',
    intro: [
      'T&T Fire Safety carries out fire risk assessments across Hertfordshire’s ten districts for landlords, letting agents, block managers, housing associations and employers. The county’s buildings reflect its new-town history: low-rise flats and maisonettes from the 1950s to the 1970s, student shared houses around Hatfield, and newer apartment blocks near the stations on the commuter lines into London.',
      'Hertfordshire Fire and Rescue Service, part of Hertfordshire County Council, enforces fire safety law across the county. We also inspect fire doors and service fire alarm, emergency lighting and AOV systems in shared residential and commercial buildings.',
    ],
    places: [
      'Watford', 'St Albans', 'Stevenage', 'Dacorum (Hemel Hempstead)', 'Welwyn Hatfield', 'East Herts',
      'North Herts', 'Hertsmere', 'Three Rivers', 'Broxbourne',
    ],
    housingTitle: 'New-town estates and student shared houses',
    housing: [
      'Stevenage was the first new town designated under the New Towns Act 1946, followed by Hemel Hempstead in 1947 and Hatfield and Welwyn Garden City in 1948. Their estates include walk-up blocks and maisonettes with shared stairwells, landings and stores, many now in mixed ownership with leaseholders and council tenants side by side. Over the decades, replacement front doors, new service runs and boxed-in meters can quietly undo the fire separation these buildings depend on.',
      'Hatfield has a concentration of student HMOs linked to the University of Hertfordshire, and a Three Rivers council review noted that Welwyn Hatfield has significantly more HMOs than its neighbour. Watford, with fast trains to London, has a sizeable shared-housing market of its own and publishes a monthly register of licensed HMOs. In a typical student house the assessment looks at the route out from each bedroom, whether the kitchen opens onto the stair, and whether the alarm system is interlinked and working.',
    ],
    licensingTitle: 'HMO licensing in Hertfordshire',
    licensing: [
      `Hertfordshire landlords mostly deal with mandatory HMO licensing, which applies to any HMO with five or more people forming two or more households. ${ext('https://www.watford.gov.uk/downloads/file/2152/hmo-register-june-2026', 'Watford Borough Council')} runs mandatory licensing and publishes its HMO register every month. At the time of writing we have not found an additional or selective licensing scheme in St Albans, Stevenage, Welwyn Hatfield or the other Hertfordshire districts.`,
      'Some councils also use planning controls (Article 4 directions) to manage where new HMOs can open, which is a separate question from licensing. Policies in this area are under review in several districts, so check with your district council before converting a property or letting rooms.',
    ],
    lawTitle: 'What the law requires in Hertfordshire',
    law: [
      'The Regulatory Reform (Fire Safety) Order 2005 applies to the common parts of Hertfordshire’s blocks and HMOs and to every workplace. For a block of maisonettes in Stevenage or Hemel Hempstead, the Fire Safety Act 2021 confirmed that the assessment must cover the building’s structure, its external walls and the flat entrance doors onto shared landings, which on older estates are often replacements of unknown fire rating. Since 1 October 2023 the full assessment must be written down.',
      'For student and professional HMOs, the council can act on fire hazards under the Housing Act 2004, and the HMO management regulations require escape routes to be kept clear and fire alarms kept in working order whether or not the house is licensed. The Fire Safety (England) Regulations 2022 add duties for every building with two or more flats: fire safety instructions for residents and information about keeping fire doors shut, repeated at least every 12 months.',
    ],
    enforcer: { name: 'Hertfordshire Fire and Rescue Service', url: 'https://www.hertfordshire.gov.uk/services/fire-and-rescue/' },
    faqs: [
      {
        q: 'Do Hertfordshire councils run additional HMO licensing?',
        a: 'We have not found a current additional scheme in any Hertfordshire district, but this can change, so check with your council. Mandatory licensing still applies to HMOs with five or more people in two or more households, and the common parts of an HMO should be covered by a fire risk assessment.',
      },
      {
        q: 'I let to University of Hertfordshire students in Hatfield. What fire safety applies?',
        a: 'A shared student house is an HMO. Expect the assessment to check interlinked smoke detection, a protected route from bedrooms to the front door, and fire doors to the kitchen and bedrooms, in line with the LACORS housing guidance councils use. Our <a href="/sectors/landlords-hmos">landlords and HMOs page</a> has more detail.',
      },
      {
        q: 'Where can I check whether a Watford HMO is licensed?',
        a: 'Watford Borough Council publishes a public HMO register, updated monthly, on its website.',
      },
      {
        q: 'Who enforces fire safety in Hertfordshire?',
        a: 'Hertfordshire Fire and Rescue Service, which is part of Hertfordshire County Council. The ten district and borough councils deal with housing standards and HMO licensing.',
      },
    ],
    sources: [
      { label: 'Watford Borough Council: HMO register (June 2026)', url: 'https://www.watford.gov.uk/downloads/file/2152/hmo-register-june-2026' },
      { label: 'Three Rivers DC: review of HMO additional licensing and Article 4', url: 'https://moderngov.threerivers.gov.uk/documents/s16806/Review%20of%20HMO%20Additional%20Licencing%20and%20consideration%20of%20Article%204%20direction%20-%20Final.pdf' },
      { label: 'TCPA: Stevenage new town', url: 'https://www.tcpa.org.uk/new-town/stevenage/' },
      { label: 'Herts Memories: Hertfordshire’s new towns', url: 'https://www.hertsmemories.org.uk/?p=67669' },
      { label: 'Licensing of HMOs (Prescribed Description) (England) Order 2018', url: 'https://www.legislation.gov.uk/uksi/2018/221/made' },
      { label: 'Management of HMOs (England) Regulations 2006', url: 'https://www.legislation.gov.uk/uksi/2006/372/made' },
    ],
    nearby: ['greater-london', 'barnet', 'buckinghamshire', 'essex'],
  },

  // ───────────────────────────── Essex ─────────────────────────────
  {
    slug: 'essex',
    name: 'Essex',
    nation: 'England',
    metaTitle: 'Fire Risk Assessments in Essex | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in Essex for HMOs, converted office blocks and flats in Brentwood, Chelmsford, Basildon, Harlow, Epping and Thurrock. Call for a quote.',
    heroSub:
      'Fire risk assessments and fire safety servicing in the Essex towns nearest London: Brentwood, Chelmsford, Basildon, Harlow, Epping, Loughton and Thurrock.',
    intro: [
      'We cover Essex, focusing on the districts closest to London: Brentwood, Chelmsford, Basildon, Harlow, Epping Forest and Thurrock. We carry out fire risk assessments there for landlords, managing agents, freeholders, housing providers and business owners. The property mix is wide: post-war new-town blocks in Harlow and Basildon, former office buildings turned into flats, commuter apartments near Brentwood and Shenfield stations, terraced lets in Grays and Tilbury, and commercial premises along the A12 and A127.',
      'Essex County Fire and Rescue Service enforces fire safety law across the county and both unitary councils, an area of more than 1,400 square miles with around 1.8 million residents. As well as assessments, we inspect fire doors and service fire alarms, emergency lighting and smoke ventilation in shared buildings.',
    ],
    places: [
      'Brentwood', 'Shenfield', 'Chelmsford', 'Basildon', 'Harlow', 'Epping Forest (Epping, Loughton, Waltham Abbey)',
      'Thurrock (Grays, Tilbury, Purfleet)',
    ],
    housingTitle: 'New towns, office conversions and seafront flats',
    housing: [
      'Harlow and Basildon were among the first post-war new towns, and Harlow in particular saw many office blocks turned into flats under permitted development. By March 2019, 13 office buildings in Harlow had been converted into more than 1,000 homes; Terminus House alone became 214 small flats, and some units in Templefields House are around 18 square metres. These buildings were not designed as housing, so the separation between flats, the protection of the stair and whether a commercial alarm system suits people sleeping in the building all need careful checking.',
      'Thurrock, on the Thames beside Havering, has terraced private lets and shared houses in Grays and Tilbury, and a Thurrock council report records that Essex Police and the fire service supported wider HMO licensing there because of fire risk and anti-social behaviour. Brentwood, Chelmsford and the Epping Forest towns of Loughton and Epping are more owner-occupied, but have plenty of flats in converted houses and small purpose-built blocks, where the usual problems are fire doors that no longer close, gaps around service pipes and storage on the stairs.',
    ],
    licensingTitle: 'Licensing in Thurrock and the Essex districts',
    licensing: [
      `${ext('https://www.thurrock.gov.uk/houses-in-multiple-occupation/selective-licensing-scheme', 'Thurrock Council')} runs a selective licensing scheme that survived a court challenge in 2026. The High Court refused permission for judicial review, and the challenge was later dismissed after an oral renewal hearing, with costs awarded to the council. The scheme is in force, and landlords of private lets in the designated area need a licence.`,
      'We have not found discretionary schemes in Basildon, Harlow or Chelmsford, where mandatory licensing of HMOs with five or more people in two or more households is the main requirement. Essex schemes can start or lapse at short notice, so confirm the current rules with the council for your property’s area.',
    ],
    lawTitle: 'Fire safety law for converted and shared buildings in Essex',
    law: [
      'Essex buildings fall under the Regulatory Reform (Fire Safety) Order 2005. For a former office block in Harlow or a divided house in Grays, that means the responsible person must assess the common parts, the structure, the external walls and every flat entrance door, as the Fire Safety Act 2021 confirmed. A full written record has been required in every case since 1 October 2023.',
      'Permitted development conversions are also caught by the Fire Safety (England) Regulations 2022. Every building with two or more flats must give residents fire safety instructions and fire door information, and conversions with a top storey above 11 metres, which includes several former office blocks, need three-monthly checks of communal fire doors and annual checks of flat entrance doors. The council can also act on fire hazards under the Housing Act 2004, which is often how problems in converted buildings first come to light.',
    ],
    enforcer: { name: 'Essex County Fire and Rescue Service', url: 'https://www.essex-fire.gov.uk/' },
    faqs: [
      {
        q: 'Is Thurrock’s landlord licensing scheme lawful after the court challenge?',
        a: 'Yes. The High Court refused permission for judicial review and the challenge was dismissed after an oral renewal hearing, so the scheme stands. Check the designated area and fees on Thurrock Council’s website.',
      },
      {
        q: 'Does the fire service or the council deal with my Basildon HMO?',
        a: 'Both can. Essex County Fire and Rescue Service enforces the Fire Safety Order in the common parts, while Basildon Council deals with licensing and with housing hazards under the Housing Act 2004. Our <a href="/sectors/landlords-hmos">landlords and HMOs page</a> sets out what each body looks for.',
      },
      {
        q: 'Do converted office blocks in Harlow need a different kind of assessment?',
        a: 'The legal duty is the same, but the building raises different questions: whether walls and floors between flats were upgraded to residential standards, whether the alarm system suits a building where people sleep, and whether the stair is properly protected. See our <a href="/sectors/blocks-of-flats">blocks of flats page</a>.',
      },
      {
        q: 'What does a fire risk assessment cost in Essex?',
        a: 'Cost depends on the building’s size, layout and how much of it needs inspecting, not on the town it is in. Our <a href="/guides/fire-risk-assessment-cost">fire risk assessment cost guide</a> explains the factors, or call 020 8066 2499 for a quote.',
      },
    ],
    sources: [
      { label: 'Thurrock Council: court upholds selective licensing scheme', url: 'https://www.thurrock.gov.uk/news/court-upholds-councils-selective-licensing-scheme' },
      { label: 'Local Government Lawyer: challenge to Thurrock scheme dismissed', url: 'https://localgovernmentlawyer.co.uk/housing-law/397-housing-news/101305-court-dismisses-challenge-to-selective-licensing-scheme-after-oral-renewal-hearing' },
      { label: 'Thurrock Council: additional licensing of HMOs report', url: 'https://democracy.thurrock.gov.uk/documents/s22839/Additional%20Licensing%20of%20Houses%20in%20Multiple%20Occupation.pdf' },
      { label: 'Planning Resource: why Harlow wants to stop office-to-residential conversions', url: 'https://www.planningresource.co.uk/article/1582846/why-harlow-wants-stop-office-to-residential-conversions' },
      { label: 'Harlow Council: Terminus House purchase', url: 'https://www.harlow.gov.uk/news/harlow-council-set-buy-and-redevelop-terminus-house-its-most-bold-purchase-date' },
      { label: 'HMICFRS: Essex County Fire and Rescue Service', url: 'https://hmicfrs.justiceinspectorates.gov.uk/fire-and-rescue-services/essex/' },
    ],
    nearby: ['greater-london', 'hertfordshire', 'kent'],
  },

  // ───────────────────────────── Kent ─────────────────────────────
  {
    slug: 'kent',
    name: 'Kent',
    nation: 'England',
    metaTitle: 'Fire Risk Assessments in Kent | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in west Kent for HMOs, converted flats and blocks in Dartford, Gravesend, Sevenoaks, Tonbridge and Maidstone. Call 020 8066 2499.',
    heroSub:
      'Fire risk assessments and fire safety servicing in the Kent towns nearest London, including Dartford, Gravesend, Swanley, Sevenoaks, Tonbridge and Maidstone.',
    intro: [
      'We cover Kent, focusing on the towns within easy reach of London: Dartford and Ebbsfleet, Gravesend, Swanley and the towns along the Bromley border, Sevenoaks, Tonbridge and Maidstone. Our work there is for landlords, letting agents, freeholders and managing agents, and for the shops and small businesses in those town centres. Typical buildings include Victorian terraces let as shared houses, older houses split into flats, and newer apartment blocks around Dartford and Ebbsfleet.',
      'Kent Fire and Rescue Service enforces fire safety law across Kent County Council’s area and in Medway, which is a separate unitary council. The same range of work applies throughout: fire risk assessments, fire door inspections, fire alarm and emergency lighting servicing, and AOV checks in blocks with smoke ventilation.',
    ],
    places: [
      'Dartford', 'Ebbsfleet', 'Gravesend (Gravesham)', 'Swanley', 'Westerham', 'Sevenoaks', 'Tonbridge',
      'Tonbridge & Malling', 'West Malling', 'Maidstone',
    ],
    housingTitle: 'Thames-side terraces and commuter towns',
    housing: [
      'Along the Thames, Dartford and Gravesend have long streets of Victorian and Edwardian terraces, many now let privately and some converted to shared houses or flats; Gravesham Borough Council had 107 licensed HMOs at the end of March 2026. Ebbsfleet, between the two towns, is adding new homes, including apartment blocks with shared stairs, lifts and smoke ventilation. In converted property the assessment usually turns on three questions: is the escape stair protected, are the doors onto it genuinely fire-resisting, and does detection cover every room that opens onto it?',
      'Further south, Sevenoaks and Tonbridge are commuter towns with a mix of period houses divided into flats and small purpose-built blocks, while Maidstone, the county town, has flats above shops and buildings converted from offices. Where offices have become homes, the building was not designed around people sleeping in it, so the separation between flats, the protection of the stair and the type of alarm system all need checking.',
    ],
    licensingTitle: 'HMO licensing in west Kent',
    licensing: [
      `In the west Kent districts, mandatory licensing (five or more people forming two or more households) is the main requirement. ${ext('https://www.gravesham.gov.uk/downloads/file/618/hmo-policy', 'Gravesham Borough Council')} has no additional or selective scheme. We have not found current discretionary schemes in Dartford, Sevenoaks, Tonbridge & Malling or Maidstone, but any council can propose one, so confirm with your district council before you let.`,
      'Kent County Council does not license HMOs itself. Licensing and housing standards are run by the district councils, while fire safety enforcement sits with KFRS, and both can become involved in the same building. That is a good reason to keep the licence file and the fire risk assessment consistent with each other.',
    ],
    lawTitle: 'Fire safety law for Kent’s HMOs and flats',
    law: [
      'In Kent, the Regulatory Reform (Fire Safety) Order 2005 covers the common parts of HMOs and converted blocks, the structure and external walls of any building with two or more flats (as the Fire Safety Act 2021 made clear), and every guest house, holiday let and business. The written record is not optional: since 1 October 2023 every responsible person must record the full findings. KFRS has prosecuted a managing agent over a Cliftonville building that went almost three years without a fire risk assessment after the agent took over its management; the agent was fined £10,000.',
      'For shared houses, councils and fire services use the LACORS housing fire safety guidance as the benchmark for detection, escape routes and fire doors, and the council can act on fire hazards under the Housing Act 2004 whether or not the property is licensed. Converted blocks with two or more flats also fall under the Fire Safety (England) Regulations 2022: residents must be given fire safety instructions and fire door information, and blocks whose top storey is above 11 metres need three-monthly communal door checks.',
    ],
    enforcer: { name: 'Kent Fire and Rescue Service', url: 'https://www.kent.fire-uk.org/' },
    faqs: [
      {
        q: 'Which parts of Kent do you cover?',
        a: 'We focus on the towns nearest London: Dartford, Ebbsfleet, Gravesend, Swanley, Sevenoaks, Tonbridge, Maidstone and the villages around them. Call 020 8066 2499 to check your property’s location.',
      },
      {
        q: 'Does my Gravesend HMO need a licence?',
        a: 'Only if five or more people forming two or more households live there, as Gravesham has no additional licensing scheme. A smaller HMO must still meet the HMO management regulations and should have a fire risk assessment of its shared parts.',
      },
      {
        q: 'Who enforces fire safety in Kent?',
        a: 'Kent Fire and Rescue Service, which covers both Kent County Council’s area and Medway. The district councils deal with HMO licensing and housing standards.',
      },
      {
        q: 'Can a managing agent be prosecuted for not having a fire risk assessment?',
        a: 'Yes. In one Kent case a managing agent was fined £10,000 after a Cliftonville property went nearly three years without an assessment. Depending on who controls the premises, the responsible person can be the agent, the freeholder or both.',
      },
    ],
    sources: [
      { label: 'Gravesham Borough Council: HMO policy', url: 'https://www.gravesham.gov.uk/downloads/file/618/hmo-policy' },
      { label: 'Gravesham Borough Council: extending powers over HMOs', url: 'https://www.gravesham.gov.uk/news/article/271/gravesham-borough-council-seeks-to-extend-powers-over-hmos' },
      { label: 'KentOnline: managing agent fined over fire safety', url: 'https://www.kentonline.co.uk/thanet/news/managing-agent-fined-for-fire-25748/' },
      { label: 'LACORS Housing – Fire Safety guidance (hosted by Cambridgeshire FRS)', url: 'https://www.cambsfire.gov.uk/media/1556/housing-fire-safety-lacors-guide.pdf' },
      { label: 'Building Safety Act 2022, s.156 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/ukpga/2022/30/section/156' },
      { label: 'Fire Safety (England) Regulations 2022 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2022/547' },
    ],
    nearby: ['greater-london', 'essex', 'surrey'],
  },

  // ───────────────────────────── Surrey ─────────────────────────────
  {
    slug: 'surrey',
    name: 'Surrey',
    nation: 'England',
    metaTitle: 'Fire Risk Assessments in Surrey | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in Surrey for Woking towers, Guildford HMOs and converted flats in Epsom, Reigate and Weybridge, plus fire door and alarm servicing.',
    heroSub:
      'Fire risk assessments and fire safety servicing in the Surrey towns nearest London, including Woking, Guildford, Epsom, Reigate, Staines, Egham and Weybridge.',
    intro: [
      'We cover Surrey, focusing on the boroughs closest to London: Elmbridge, Epsom & Ewell, Reigate & Banstead, Spelthorne, Runnymede, Woking and Guildford. T&T Fire Safety works there for block freeholders, residents’ management companies, HMO landlords, care providers and commercial occupiers. The county has fewer tall buildings than London, but a growing number of town-centre apartment schemes, older villas and offices converted to flats, and shared houses around Guildford and Egham.',
      'Surrey Fire and Rescue Service, part of Surrey County Council, enforces fire safety law across the county. After Grenfell its officers checked materials on Surrey buildings over 18 metres, and it now has a team that works only on buildings above 11 metres.',
    ],
    places: [
      'Elmbridge (Weybridge, Walton-on-Thames, Esher)', 'Epsom & Ewell', 'Reigate & Banstead',
      'Spelthorne (Staines, Ashford, Sunbury)', 'Runnymede (Egham, Addlestone)', 'Woking', 'Guildford',
    ],
    housingTitle: 'Woking towers and commuter conversions',
    housing: [
      'Woking has changed fastest. Victoria Square Residential Tower 1, at 34 floors and about 112 metres, is now the tallest building in the borough, taking the title from Export House, and a 37-storey block on Goldsworth Road has been approved on appeal. Buildings of this height carry the full set of high-rise duties: a secure information box, wayfinding signage, monthly lift and equipment checks and, since April 2026, residential evacuation plans.',
      'Elsewhere Surrey’s stock is mostly commuter housing: large Edwardian and interwar houses in Weybridge, Epsom and Reigate split into flats, low-rise blocks built between the 1960s and the 2000s, and student shared houses near the University of Surrey in Guildford. In higher-value conversions, later changes such as loft rooms, open-plan kitchens and glazed internal doors often remove the protected route the original conversion relied on, which is one of the first things a fire risk assessment checks.',
    ],
    licensingTitle: 'Licensing in Surrey, and the move to two councils',
    licensing: [
      `${ext('https://www.woking.gov.uk/housing/private-rented-housing/additional-hmo-licensing-scheme', 'Woking Borough Council')} introduced borough-wide additional HMO licensing on 5 January 2026, running to 4 January 2031. It covers HMOs of three or four occupants that fall below the mandatory threshold, so a typical three-bedroom shared house in Woking now needs a licence. ${ext('https://guildford.gov.uk/article/24615/Do-I-need-a-HMO-licence', 'Guildford Borough Council')} and ${ext('https://www.elmbridge.gov.uk/housing/houses-in-multiple-occupation-hmos/', 'Elmbridge Borough Council')} apply mandatory licensing only, for HMOs of five or more people in two or more households.`,
      'Surrey’s council structure changes on 1 April 2027, when the county council and the eleven districts are replaced by two unitary councils: East Surrey (Elmbridge, Epsom & Ewell, Mole Valley, Reigate & Banstead and Tandridge) and West Surrey (Guildford, Runnymede, Spelthorne, Surrey Heath, Waverley and Woking). HMO licensing and housing enforcement will pass to the new councils, so forms, fees and contacts are likely to change. Check with the council responsible for your property for the scheme that applies.',
    ],
    lawTitle: 'The legal framework for Surrey’s blocks and HMOs',
    law: [
      'Every block, HMO and business in Surrey falls under the Regulatory Reform (Fire Safety) Order 2005, which requires the responsible person to make a suitable and sufficient fire risk assessment and keep it up to date. Since 1 October 2023 the whole assessment must be recorded in writing, including the name of whoever carried it out. For buildings with two or more flats, the Fire Safety Act 2021 brought the structure, external walls and flat entrance doors clearly into scope.',
      'Woking’s towers are a clear case for the Fire Safety (England) Regulations 2022 and the Fire Safety (Residential Evacuation Plans) (England) Regulations 2025, in force since 6 April 2026. In buildings of 18 metres or seven storeys, responsible persons must take reasonable steps to identify residents who would have difficulty evacuating and offer them a person-centred fire risk assessment and evacuation plan. Surrey Fire and Rescue Service has briefed responsible persons on these duties, and a fire risk assessment is a sensible point to confirm they are in place.',
    ],
    enforcer: { name: 'Surrey Fire and Rescue Service', url: 'https://www.surreycc.gov.uk/community/fire-and-rescue' },
    faqs: [
      {
        q: 'I let a three-bedroom shared house in Woking. Do I need a licence?',
        a: 'If three or more tenants from more than one household share it, yes. Woking’s additional HMO licensing has applied across the borough since 5 January 2026. The house should also have a fire risk assessment covering escape routes, detection and fire doors; see our <a href="/sectors/landlords-hmos">landlords and HMOs page</a>.',
      },
      {
        q: 'What changes when Surrey becomes two councils in April 2027?',
        a: 'HMO licensing, housing standards and planning move to East Surrey Council or West Surrey Council, depending on where the property is. Your duties under the Fire Safety Order are not affected by the reorganisation.',
      },
      {
        q: 'How often should the fire risk assessment for my Surrey block be reviewed?',
        a: 'The law sets no fixed interval. It must be reviewed regularly and whenever something significant changes, such as building work or a change in who lives there. Our guide on <a href="/guides/how-often-should-a-fire-risk-assessment-be-reviewed">how often to review a fire risk assessment</a> explains the triggers.',
      },
      {
        q: 'Do residential evacuation plans apply to my block in Woking?',
        a: 'They do if the building is at least 18 metres high or has at least seven storeys, or is over 11 metres with a simultaneous evacuation strategy, from 6 April 2026. Lower blocks with a stay-put strategy fall outside these regulations.',
      },
    ],
    sources: [
      { label: 'Woking Borough Council: additional HMO licensing scheme', url: 'https://www.woking.gov.uk/housing/private-rented-housing/additional-hmo-licensing-scheme' },
      { label: 'Woking Borough Council: designation notice', url: 'https://www.woking.gov.uk/your-council/have-your-say/public-notices/additional-hmo-licensing-scheme-designation' },
      { label: 'Guildford Borough Council: do I need an HMO licence?', url: 'https://guildford.gov.uk/article/24615/Do-I-need-a-HMO-licence' },
      { label: 'Surrey County Council: local government reorganisation confirmed', url: 'https://www.surreycc.gov.uk/community/news/categories/your-council/government-lgr-confirmation' },
      { label: 'Surrey FRS: high-rise buildings and cladding', url: 'https://www.surreycc.gov.uk/community/fire-and-rescue/businesses/buildings/high-rises/cladding' },
      { label: 'Business Surrey: new fire safety rules for high-rise residential', url: 'https://www.businesssurrey.co.uk/new-fire-safety-rules-to-reshape-high-rise-residential-management/' },
      { label: 'CTBUH Skyscraper Center: Victoria Square Residential Tower 1', url: 'https://www.skyscrapercenter.com/building/victoria-square-residential-tower-1/38986' },
      { label: 'Residential PEEPs guidance for responsible persons (GOV.UK)', url: 'https://www.gov.uk/government/publications/residential-personal-emergency-evacuation-plans-residential-peeps/residential-peeps-guidance-for-responsible-persons' },
    ],
    nearby: ['greater-london', 'berkshire', 'kent'],
  },

  // ───────────────────────────── Berkshire ─────────────────────────────
  {
    slug: 'berkshire',
    name: 'Berkshire',
    nation: 'England',
    metaTitle: 'Fire Risk Assessments in Berkshire | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in Slough, Windsor, Maidenhead, Bracknell and Reading for HMOs, blocks and businesses, plus fire door and alarm servicing. Call us.',
    heroSub:
      'Fire risk assessments and fire safety servicing in the Berkshire towns nearest London: Slough, Windsor, Maidenhead, Ascot, Bracknell and Reading.',
    intro: [
      'We cover Berkshire, focusing on the east of the county and Reading: Slough, Windsor and Maidenhead, Bracknell Forest and Reading. Our fire risk assessments there are for private landlords, HMO operators, block managers, employers and housing providers. The work ranges from terraced shared houses in Reading and Slough to new-town flats in Bracknell and newer apartment blocks near Reading and Maidenhead stations.',
      'Royal Berkshire Fire and Rescue Service enforces fire safety law across Bracknell Forest, Reading, Slough, West Berkshire, Windsor and Maidenhead, and Wokingham, on behalf of the Royal Berkshire Fire Authority, whose members are drawn from all six councils.',
    ],
    places: [
      'Slough', 'Windsor', 'Maidenhead', 'Ascot', 'Bracknell Forest', 'Reading',
    ],
    housingTitle: 'Overcrowding in Slough, terraces in Reading',
    housing: [
      'Slough has seen the sharpest growth in private renting in the South East, from 24.3% of households in 2011 to 30.7% in 2021. The council’s 2026 licensing evidence counts 16,710 privately rented homes, 28.6% of its stock, and its monitoring report gives an average of 27.2 square metres of living space per person, against 36.5 in comparable towns. Overcrowded HMOs, large shared households and outbuildings used as living space (the “beds in sheds” problem the council has reported) all make a fire more likely and escape harder.',
      'Reading’s private rented stock is dominated by Victorian and Edwardian terraces, many let to University of Reading students or young professionals. Bracknell, a post-war new town, has estates of low-rise flats with shared stairs, while Windsor, Maidenhead and Ascot have more owner-occupied homes and purpose-built blocks run by managing agents. In a terraced HMO the assessment focuses on the single escape stair; in a managed block it is more about doors, detection in the common parts and the condition of compartment walls.',
    ],
    licensingTitle: 'Licensing in Reading and Slough',
    licensing: [
      `${ext('https://www.reading.gov.uk/housing/private-renting/landlords/landlord-newsletter-and-events/landlord-focus-summer-2025', 'Reading Borough Council')} brought in borough-wide additional HMO licensing on 1 March 2026, covering HMOs of three or four occupants. The council has also published plans for selective licensing in Battle, Park and Redlands wards in later years, so landlords in those wards should watch for consultations.`,
      `${ext('https://slough.citizenspace.com/housing/privaterentedpropertylicensing/', 'Slough Borough Council')} ran licensing schemes from 2019 to 2024, with selective licensing then limited to Chalvey and Slough Central. It consulted from July to September 2026 on new borough-wide additional and selective licensing covering around 17,000 private rented homes, with a cabinet decision still pending in October 2026. We have not found discretionary schemes in Bracknell Forest, West Berkshire, Windsor and Maidenhead or Wokingham. Schemes are added and changed regularly, so check with the relevant council before you let.`,
    ],
    lawTitle: 'Fire safety and housing law in Berkshire',
    law: [
      'In Berkshire, as elsewhere in England, the Regulatory Reform (Fire Safety) Order 2005 requires the responsible person for a block, HMO or business to carry out a fire risk assessment and keep it under review. In overcrowded or converted housing that duty runs alongside the council’s powers under the Housing Act 2004: the council must consult the fire authority before acting on a fire hazard in an HMO, and can serve improvement notices or prohibition orders.',
      'Since 1 October 2023 every fire risk assessment must be recorded in full and must name the person or organisation that carried it out, which matters when a licensing officer or an RBFRS inspector asks to see it. Blocks with two or more flats must also meet the Fire Safety (England) Regulations 2022, which require fire safety instructions and fire door information for residents, with three-monthly communal door checks in blocks above 11 metres.',
    ],
    enforcer: { name: 'Royal Berkshire Fire and Rescue Service', url: 'https://www.rbfrs.co.uk/' },
    faqs: [
      {
        q: 'Do small HMOs in Reading need a licence now?',
        a: 'Yes. Since 1 March 2026, HMOs with three or four occupants anywhere in Reading need an additional licence, and larger HMOs still need a mandatory licence.',
      },
      {
        q: 'Is Slough introducing landlord licensing?',
        a: 'Slough consulted in summer 2026 on borough-wide additional and selective licensing for about 17,000 private rented homes. Cabinet was due to decide after the consultation, so check Slough Borough Council’s website for the outcome.',
      },
      {
        q: 'Who enforces fire safety across Berkshire’s six councils?',
        a: 'Royal Berkshire Fire and Rescue Service, on behalf of the Royal Berkshire Fire Authority. Housing standards and licensing are handled by each unitary council.',
      },
      {
        q: 'I’ve had a council letter about fire safety in my Slough HMO. What now?',
        a: 'Note what the letter asks for and by when. Our guide to <a href="/guides/council-and-insurer-fire-safety-letters">council and insurer fire safety letters</a> explains the common requests, and a current written fire risk assessment is usually the first thing to provide.',
      },
    ],
    sources: [
      { label: 'RBFRS: about us and the Fire Authority', url: 'https://www.rbfrs.co.uk/your-service/fire-authority/' },
      { label: 'ONS: Slough census area changes', url: 'https://www.ons.gov.uk/visualisations/censusareachanges/E06000039' },
      { label: 'Slough BC: discretionary licensing evidence report 2026', url: 'https://slough.citizenspace.com/housing/privaterentedpropertylicensing/user_uploads/discretionary-licensing-evidence-report-2026-2.pdf' },
      { label: 'Slough BC: annual monitoring report 2024–25', url: 'https://www.slough.gov.uk/downloads/file/4813/ldf-annual-monitoring-report-2024-25' },
      { label: 'Slough BC: consultation on property licensing schemes', url: 'https://www.slough.gov.uk/news/article/681/consultation-on-property-licensing-schemes' },
      { label: 'Reading BC: landlord focus summer 2025', url: 'https://www.reading.gov.uk/housing/private-renting/landlords/landlord-newsletter-and-events/landlord-focus-summer-2025' },
      { label: 'Reading BC: new licensing scheme proposed', url: 'https://www.reading.gov.uk/housing-news/new-licensing-scheme-proposed-to-improve-private-rented-property' },
      { label: 'HHSRS landlord and agent guide (GOV.UK)', url: 'https://www.gov.uk/government/publications/housing-health-and-safety-rating-system-hhsrs-landlord-and-agent-guide/landlord-and-agent-guide-to-the-housing-health-and-safety-rating-system-hhsrs' },
    ],
    nearby: ['buckinghamshire', 'surrey', 'greater-london'],
  },

  // ───────────────────────────── Buckinghamshire ─────────────────────────────
  {
    slug: 'buckinghamshire',
    name: 'Buckinghamshire',
    nation: 'England',
    metaTitle: 'Fire Risk Assessments in Buckinghamshire | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in south Buckinghamshire for High Wycombe HMOs, Chiltern conversions and Aylesbury blocks, plus fire door and alarm servicing. Call us.',
    heroSub:
      'Fire risk assessments and fire safety servicing in High Wycombe, Amersham, Chesham, Beaconsfield, Gerrards Cross, Denham, Iver and Aylesbury.',
    intro: [
      'We cover Buckinghamshire, focusing on the south of the county nearest London: the former Chiltern and South Bucks districts, High Wycombe and Aylesbury. We work there for landlords, letting agents, block managers and employers, in buildings ranging from commuter flats near the Metropolitan line and Chiltern Railways stations to shared houses in High Wycombe and new estates around Aylesbury.',
      'Buckinghamshire Fire & Rescue Service enforces fire safety law across the county and in Milton Keynes, which has its own unitary council. Since 1 April 2020, housing and HMO licensing in the rest of the county have been run by Buckinghamshire Council, a single unitary authority that replaced the county council and the four districts of Aylesbury Vale, Chiltern, South Bucks and Wycombe.',
    ],
    places: [
      'High Wycombe', 'Amersham', 'Chesham', 'Beaconsfield', 'Gerrards Cross', 'Chalfont St Peter', 'Denham', 'Iver',
      'Burnham', 'Princes Risborough', 'Aylesbury',
    ],
    housingTitle: 'Chiltern commuter towns and High Wycombe terraces',
    housing: [
      'High Wycombe, one of the county’s largest towns, has the most varied rented stock: Victorian and Edwardian terraces in the valley streets, many let as shared houses, along with flats above shops and former offices converted to housing near the centre. Students at Buckinghamshire New University add to the demand for rooms. In a terraced HMO the escape route usually runs down a single stair to the front door, so detection, the fire resistance of the doors onto that stair and keeping it free of storage are the main concerns.',
      'To the east, Amersham, Chesham, Beaconsfield and Gerrards Cross are mostly owner-occupied, but they have a steady supply of flats: low-rise blocks from the 1960s onwards, large Edwardian and interwar houses split into apartments, and newer retirement and apartment schemes near the stations. Aylesbury has grown quickly, with new estates and town-centre flats. In smaller managed blocks the most frequent gaps are fire doors that no longer close, missing smoke seals and service holes left open after maintenance work.',
    ],
    licensingTitle: 'HMO licensing in Buckinghamshire',
    licensing: [
      `${ext('https://www.buckinghamshire.gov.uk/housing-and-benefits/housing/housing-conditions/houses-in-multiple-occupation-hmos/licensing-a-hmo/', 'Buckinghamshire Council')} applies mandatory HMO licensing to houses occupied by five or more people forming two or more households. Licences are normally granted for up to five years, applications are made online, and the council keeps a public register of licensed HMOs. Running a licensable HMO without a licence is a criminal offence.`,
      'We have not found an additional or selective licensing scheme in Buckinghamshire, so smaller shared houses and single-household lets do not appear to need a licence at present; councils can introduce new schemes, so check the current position before you let. Every HMO, licensed or not, must still meet the HMO management regulations on escape routes and alarms. Milton Keynes City Council runs its own licensing, separate from Buckinghamshire Council.',
    ],
    lawTitle: 'The fire safety rules in Buckinghamshire',
    law: [
      'The Regulatory Reform (Fire Safety) Order 2005 applies to the common parts of Buckinghamshire’s blocks and HMOs and to every workplace, shop and holiday let. For blocks with two or more flats, the Fire Safety Act 2021 made clear that the assessment includes the structure, the external walls and flat entrance doors. Since 1 October 2023 the responsible person must keep a written record of the whole assessment, and an outgoing responsible person must pass relevant fire safety information to whoever takes over.',
      'Most residential blocks in Buckinghamshire are low or mid-rise, so they face the lighter end of the Fire Safety (England) Regulations 2022: fire safety instructions and fire door information for residents, refreshed at least once a year. Any block whose top storey is above 11 metres adds three-monthly checks of communal fire doors. The fire service’s business safety team audits premises under the Fire Safety Order, concentrating on higher-risk buildings and places that have had fires.',
    ],
    enforcer: { name: 'Buckinghamshire Fire & Rescue Service', url: 'https://bucksfire.gov.uk/' },
    faqs: [
      {
        q: 'Do I need a licence for a four-person shared house in High Wycombe?',
        a: 'Not under the current rules as far as we have found. Buckinghamshire Council licenses HMOs with five or more people in two or more households. A smaller HMO must still meet the management regulations and should have a fire risk assessment covering its shared parts.',
      },
      {
        q: 'Who enforces fire safety in Buckinghamshire?',
        a: 'Buckinghamshire Fire & Rescue Service, which also covers Milton Keynes. Buckinghamshire Council deals with housing standards and HMO licensing.',
      },
      {
        q: 'Our Amersham block has a new managing agent. What happens to the fire risk assessment?',
        a: 'Where the responsible person changes, the outgoing one must pass on relevant fire safety information, including the assessment record. The new agent should check the assessment is current and review it if anything has changed. Our guide on <a href="/guides/how-often-should-a-fire-risk-assessment-be-reviewed">reviewing a fire risk assessment</a> explains when that is needed.',
      },
      {
        q: 'Do holiday lets in the Chilterns need a fire risk assessment?',
        a: 'Yes. A self-catering cottage or B&B is not treated as a private home under the Fire Safety Order, so the person letting it must assess the fire risk and keep a written record. Our guide <a href="/guides/do-i-need-a-fire-risk-assessment">Do I need a fire risk assessment?</a> explains who the duty falls on.',
      },
    ],
    sources: [
      { label: 'Buckinghamshire Council: apply for, renew or change an HMO licence', url: 'https://www.buckinghamshire.gov.uk/housing-and-benefits/housing/housing-conditions/houses-in-multiple-occupation-hmos/licensing-a-hmo/' },
      { label: 'Buckinghamshire Council: public register of HMOs', url: 'https://www.buckinghamshire.gov.uk/housing-and-benefits/housing/housing-conditions/houses-in-multiple-occupation-hmos/hmo-registers/' },
      { label: 'Buckinghamshire Fire & Rescue Service: our business safety team', url: 'https://bucksfire.gov.uk/safety-hub/our-business-safety-team' },
      { label: 'Buckinghamshire Fire & Rescue Service: business engagement framework 2025', url: 'https://bucksfire.gov.uk/publications/business-engagement-framework-2025' },
      { label: 'GOV.UK: responsible persons in England, changes in fire safety legislation', url: 'https://www.gov.uk/government/publications/responsible-persons-in-england-changes-in-fire-safety-legislation/responsible-persons-in-england-changes-in-fire-safety-legislation' },
      { label: 'Management of HMOs (England) Regulations 2006', url: 'https://www.legislation.gov.uk/uksi/2006/372/made' },
    ],
    nearby: ['hertfordshire', 'berkshire', 'harrow', 'greater-london'],
  },

];
