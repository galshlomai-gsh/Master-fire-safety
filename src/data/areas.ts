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
      'Fire risk assessments for London blocks, conversions and HMOs in all 32 boroughs and the City, plus fire door, alarm and AOV servicing. Call 020 8066 2499.',
    heroSub:
      'Fire risk assessments and fire safety servicing for blocks, HMOs and commercial premises from Brent and Barnet to Croydon, Hackney, Newham and Westminster.',
    intro: [
      'T&T Fire Safety carries out fire risk assessments across Greater London for freeholders, residents’ management companies, managing agents, HMO landlords and businesses. In London that mostly means converted terraces, council and housing association blocks, new-build towers, and shops with flats above.',
      'Fire safety law in the capital is enforced by the London Fire Brigade, which inspects premises in the 32 boroughs and the City of London and can serve alterations, enforcement and prohibition notices. Alongside assessments we inspect fire doors and service fire alarms, emergency lighting, AOVs and smoke control systems in the common parts of residential blocks.',
    ],
    places: [
      'Westminster', 'Camden', 'Brent', 'Barnet', 'Ealing', 'Harrow', 'Hackney', 'Islington',
      'Tower Hamlets', 'Newham', 'Waltham Forest', 'Haringey', 'Enfield', 'Croydon', 'Lewisham',
      'Southwark',
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
    nearby: ['hertfordshire', 'essex', 'kent', 'surrey'],
  },

  // ───────────────────────────── Kent ─────────────────────────────
  {
    slug: 'kent',
    name: 'Kent',
    nation: 'England',
    metaTitle: 'Fire Risk Assessments in Kent & Medway | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in Kent and Medway for coastal HMOs, converted flats, guest houses and blocks, from Margate to Chatham. Get a quote: 020 8066 2499.',
    heroSub:
      'Fire risk assessments and fire safety servicing across Kent and Medway, including Canterbury, Maidstone, Margate, Folkestone, Dartford, Chatham and Gillingham.',
    intro: [
      'We carry out fire risk assessments across Kent and Medway for landlords, letting agents, freeholders and managing agents, and for the guest houses, shops and small businesses that make up much of the county’s coastal and town-centre property. Typical buildings include seaside villas split into flats, shared houses near the Canterbury universities, terraced HMOs in the Medway towns and purpose-built blocks around Dartford and Ashford.',
      'Kent Fire and Rescue Service enforces fire safety law in both Kent County Council’s area and Medway, even though Medway is a separate unitary council. The same range of work applies across both: fire risk assessments, fire door inspections, fire alarm and emergency lighting servicing, and AOV checks in blocks with smoke ventilation.',
    ],
    places: [
      'Canterbury', 'Maidstone', 'Thanet (Margate, Ramsgate, Broadstairs)', 'Folkestone & Hythe', 'Dover',
      'Ashford', 'Dartford', 'Gravesham', 'Swale', 'Sevenoaks', 'Tonbridge & Malling', 'Tunbridge Wells',
      'Medway (Chatham, Gillingham, Rochester, Strood)',
    ],
    housingTitle: 'Seaside conversions and Medway terraces',
    housing: [
      'Much of the Kent coast was built for visitors. In Margate, Cliftonville, Ramsgate, Folkestone and Herne Bay, large Victorian and Edwardian boarding houses and hotels were later divided into bedsits and flats, often around a shared stair with poor fire separation. Margate Central and Cliftonville West were once among the most deprived 3% of wards nationally, which is why Thanet ran selective licensing there from 2011 to 2016. Tall buildings are rarer, but Arlington House in Margate, an 18-storey block, prompted a joint visit by Thanet District Council, the Building Safety Regulator and KFRS in March 2025.',
      'Inland the picture changes. Chatham, Gillingham and Strood have long streets of terraced private lets, some converted to HMOs, where one staircase is the only way out. Canterbury’s student population, at the University of Kent and Canterbury Christ Church University, keeps demand high for shared houses near the city centre. In converted property like this the assessment usually turns on three questions: is the escape stair protected, are the doors onto it genuinely fire-resisting, and does detection cover every room that opens onto it?',
    ],
    licensingTitle: 'HMO and selective licensing in Kent and Medway',
    licensing: [
      `${ext('https://www.medway.gov.uk/propertylicensing', 'Medway Council')} has made a selective licensing designation for seven wards: Chatham Central & Brompton, Fort Pitt, Gillingham North, Gillingham South, Luton, Strood North & Frindsbury, and Watling. It has also consulted on additional HMO licensing in six of those wards. Published sources give different start dates for these schemes, so check the current position with the council before relying on any date.`,
      `Elsewhere in Kent, mandatory licensing (five or more people forming two or more households) is the main requirement. ${ext('https://www.thanet.gov.uk/info-pages/selective-licensing-information', 'Thanet District Council')} says its old selective scheme has ended and it no longer accepts applications. ${ext('https://www.gravesham.gov.uk/downloads/file/618/hmo-policy', 'Gravesham Borough Council')} has no additional or selective scheme and had 107 licensed HMOs at the end of March 2026. We have not found current discretionary schemes in Canterbury or the other districts, but any council can propose one, so confirm with your district council before you let.`,
    ],
    lawTitle: 'Fire safety law for Kent’s HMOs and guest houses',
    law: [
      'In Kent, the Regulatory Reform (Fire Safety) Order 2005 covers the common parts of HMOs and converted blocks, the structure and external walls of any building with two or more flats (as the Fire Safety Act 2021 made clear), and every guest house, holiday let and business. The written record is not optional: since 1 October 2023 every responsible person must record the full findings. KFRS has prosecuted a managing agent over a Cliftonville building that went almost three years without a fire risk assessment after the agent took over its management; the agent was fined £10,000.',
      'For shared houses, councils and fire services use the LACORS housing fire safety guidance as the benchmark for detection, escape routes and fire doors, and the council can act on fire hazards under the Housing Act 2004 whether or not the property is licensed. Converted blocks with two or more flats also fall under the Fire Safety (England) Regulations 2022: residents must be given fire safety instructions and fire door information, and blocks whose top storey is above 11 metres need three-monthly communal door checks.',
    ],
    enforcer: { name: 'Kent Fire and Rescue Service', url: 'https://www.kent.fire-uk.org/' },
    faqs: [
      {
        q: 'Does Medway’s new licensing affect my rental?',
        a: 'It may. If the property is in Chatham Central & Brompton, Fort Pitt, Gillingham North or South, Luton, Strood North & Frindsbury or Watling, it falls within Medway’s selective designation. Sources give different start dates, so confirm the date and fees with Medway Council directly.',
      },
      {
        q: 'Who enforces fire safety in Medway?',
        a: 'Kent Fire and Rescue Service. Medway is a separate council from Kent County Council for housing and licensing, but KFRS is the fire authority for both areas.',
      },
      {
        q: 'I run a guest house in Margate. Do I need a fire risk assessment?',
        a: 'Yes. Guest houses, B&Bs and self-catering holiday lets are covered by the Fire Safety Order, and whoever runs them must carry out and record a fire risk assessment. Our guide <a href="/guides/do-i-need-a-fire-risk-assessment">Do I need a fire risk assessment?</a> covers who the duty falls on.',
      },
      {
        q: 'Can a managing agent be prosecuted for not having a fire risk assessment?',
        a: 'Yes. In one Kent case a managing agent was fined £10,000 after a Cliftonville property went nearly three years without an assessment. Depending on who controls the premises, the responsible person can be the agent, the freeholder or both.',
      },
    ],
    sources: [
      { label: 'Medway Council: property licensing', url: 'https://www.medway.gov.uk/propertylicensing' },
      { label: 'Thanet District Council: selective licensing information', url: 'https://www.thanet.gov.uk/info-pages/selective-licensing-information' },
      { label: 'Thanet District Council: Arlington House hazard awareness notice', url: 'https://www.thanet.gov.uk/thanet-district-council-to-serve-hazard-awareness-notice-on-owner-of-arlington-house' },
      { label: 'Gravesham Borough Council: HMO policy', url: 'https://www.gravesham.gov.uk/downloads/file/618/hmo-policy' },
      { label: 'KentOnline: managing agent fined over fire safety', url: 'https://www.kentonline.co.uk/thanet/news/managing-agent-fined-for-fire-25748/' },
      { label: 'LACORS Housing – Fire Safety guidance (hosted by Cambridgeshire FRS)', url: 'https://www.cambsfire.gov.uk/media/1556/housing-fire-safety-lacors-guide.pdf' },
      { label: 'Building Safety Act 2022, s.156 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/ukpga/2022/30/section/156' },
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
      'Fire risk assessments in Surrey for Woking towers, Guildford HMOs and converted flats, plus fire door, alarm and lighting servicing. Call 020 8066 2499.',
    heroSub:
      'Fire risk assessments and fire safety servicing in Woking, Guildford, Epsom, Reigate, Staines, Camberley, Weybridge and the rest of Surrey.',
    intro: [
      'T&T Fire Safety works across Surrey’s eleven boroughs and districts for block freeholders, residents’ management companies, HMO landlords, care providers and commercial occupiers. The county has fewer tall buildings than London, but a growing number of town-centre apartment schemes, older villas and offices converted to flats, and shared houses around Guildford and Egham.',
      'Surrey Fire and Rescue Service, part of Surrey County Council, enforces fire safety law across the county. After Grenfell its officers checked materials on Surrey buildings over 18 metres, and it now has a team that works only on buildings above 11 metres.',
    ],
    places: [
      'Woking', 'Guildford', 'Elmbridge', 'Epsom & Ewell', 'Mole Valley', 'Reigate & Banstead',
      'Runnymede', 'Spelthorne', 'Surrey Heath', 'Tandridge', 'Waverley',
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
    nearby: ['greater-london', 'berkshire', 'hampshire', 'kent'],
  },

  // ───────────────────────────── Essex ─────────────────────────────
  {
    slug: 'essex',
    name: 'Essex',
    nation: 'England',
    metaTitle: 'Fire Risk Assessments in Essex | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in Essex, Southend and Thurrock for HMOs, converted office blocks and flats, with fire door and alarm servicing. Call 020 8066 2499.',
    heroSub:
      'Fire risk assessments and fire safety servicing in Chelmsford, Colchester, Southend-on-Sea, Basildon, Harlow, Thurrock, Brentwood and across Essex.',
    intro: [
      'We carry out fire risk assessments throughout Essex, Southend-on-Sea and Thurrock for landlords, managing agents, freeholders, housing providers and business owners. The property mix is wide: seafront conversions in Southend and Westcliff, post-war new-town blocks in Harlow and Basildon, former office buildings turned into flats, student lets in Colchester and commercial premises along the A12 and A127.',
      'Essex County Fire and Rescue Service enforces fire safety law across the county and both unitary councils, an area of more than 1,400 square miles with around 1.8 million residents. As well as assessments, we inspect fire doors and service fire alarms, emergency lighting and smoke ventilation in shared buildings.',
    ],
    places: [
      'Chelmsford', 'Colchester', 'Southend-on-Sea', 'Thurrock', 'Basildon', 'Harlow', 'Brentwood',
      'Braintree', 'Castle Point', 'Epping Forest', 'Maldon', 'Rochford', 'Tendring', 'Uttlesford',
    ],
    housingTitle: 'New towns, office conversions and seafront flats',
    housing: [
      'Harlow and Basildon were among the first post-war new towns, and Harlow in particular saw many office blocks turned into flats under permitted development. By March 2019, 13 office buildings in Harlow had been converted into more than 1,000 homes; Terminus House alone became 214 small flats, and some units in Templefields House are around 18 square metres. These buildings were not designed as housing, so the separation between flats, the protection of the stair and whether a commercial alarm system suits people sleeping in the building all need careful checking.',
      'Southend-on-Sea has a different profile. Private renting there rose from 22% of households in 2011 to 26.5% in 2021, concentrated in Southend Central and Westcliff, where large Victorian and Edwardian houses have been divided into flats and bedsits. Colchester, home to the University of Essex, has its own student HMO market, and a Thurrock council report records that Essex Police and the fire service supported wider HMO licensing there because of fire risk and anti-social behaviour.',
    ],
    licensingTitle: 'Licensing in Thurrock, Southend and the Essex districts',
    licensing: [
      `${ext('https://www.thurrock.gov.uk/houses-in-multiple-occupation/selective-licensing-scheme', 'Thurrock Council')} runs a selective licensing scheme that survived a court challenge in 2026. The High Court refused permission for judicial review, and the challenge was later dismissed after an oral renewal hearing, with costs awarded to the council. The scheme is in force, and landlords of private lets in the designated area need a licence.`,
      `${ext('https://www.southend.gov.uk/private-housing/selective-licensing-scheme/2', 'Southend-on-Sea City Council')}’s selective scheme covers parts of Milton, Kursaal, Victoria and Chalkwell wards and is due to end on 30 November 2026. We have not seen a decision on a replacement. ${ext('https://www.colchester.gov.uk/private-sector-housing/hmo-licensing/', 'Colchester City Council')} applies mandatory licensing only, and we have not found discretionary schemes in Basildon, Harlow, Chelmsford or Tendring. Essex schemes can start or lapse at short notice, so confirm the current rules with the council for your property’s area.`,
    ],
    lawTitle: 'Fire safety law for converted and shared buildings in Essex',
    law: [
      'Essex buildings fall under the Regulatory Reform (Fire Safety) Order 2005. For a former office block in Harlow or a divided house in Westcliff, that means the responsible person must assess the common parts, the structure, the external walls and every flat entrance door, as the Fire Safety Act 2021 confirmed. A full written record has been required in every case since 1 October 2023.',
      'Permitted development conversions are also caught by the Fire Safety (England) Regulations 2022. Every building with two or more flats must give residents fire safety instructions and fire door information, and conversions with a top storey above 11 metres, which includes several former office blocks, need three-monthly checks of communal fire doors and annual checks of flat entrance doors. The council can also act on fire hazards under the Housing Act 2004, which is often how problems in converted buildings first come to light.',
    ],
    enforcer: { name: 'Essex County Fire and Rescue Service', url: 'https://www.essex-fire.gov.uk/' },
    faqs: [
      {
        q: 'Is Thurrock’s landlord licensing scheme lawful after the court challenge?',
        a: 'Yes. The High Court refused permission for judicial review and the challenge was dismissed after an oral renewal hearing, so the scheme stands. Check the designated area and fees on Thurrock Council’s website.',
      },
      {
        q: 'Southend’s selective licensing is due to end. Do I still need a fire risk assessment?',
        a: 'Yes. Licensing and fire safety are separate duties. Whatever happens to the selective scheme after 30 November 2026, the common parts of HMOs and blocks of flats stay under the Fire Safety Order.',
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
      { label: 'Southend-on-Sea City Council: selective licensing scheme', url: 'https://www.southend.gov.uk/private-housing/selective-licensing-scheme/2' },
      { label: 'ONS: Southend-on-Sea census area changes', url: 'https://www.ons.gov.uk/visualisations/censusareachanges/E06000033' },
      { label: 'Planning Resource: why Harlow wants to stop office-to-residential conversions', url: 'https://www.planningresource.co.uk/article/1582846/why-harlow-wants-stop-office-to-residential-conversions' },
      { label: 'Harlow Council: Terminus House purchase', url: 'https://www.harlow.gov.uk/news/harlow-council-set-buy-and-redevelop-terminus-house-its-most-bold-purchase-date' },
      { label: 'Colchester City Council: HMO licensing', url: 'https://www.colchester.gov.uk/private-sector-housing/hmo-licensing/' },
      { label: 'HMICFRS: Essex County Fire and Rescue Service', url: 'https://hmicfrs.justiceinspectorates.gov.uk/fire-and-rescue-services/essex/' },
    ],
    nearby: ['greater-london', 'hertfordshire', 'kent'],
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
    nearby: ['greater-london', 'essex', 'berkshire'],
  },

  // ───────────────────────────── Berkshire ─────────────────────────────
  {
    slug: 'berkshire',
    name: 'Berkshire',
    nation: 'England',
    metaTitle: 'Fire Risk Assessments in Berkshire | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in Reading, Slough and across Berkshire for HMOs, blocks and businesses, plus fire door and alarm servicing. Call 020 8066 2499.',
    heroSub:
      'Fire risk assessments and fire safety servicing in Reading, Slough, Bracknell, Wokingham, Maidenhead, Windsor and Newbury.',
    intro: [
      'We carry out fire risk assessments across Berkshire’s six unitary council areas for private landlords, HMO operators, block managers, employers and housing providers. The work ranges from terraced shared houses in Reading and Slough to new-town flats in Bracknell and newer apartment blocks near Reading and Maidenhead stations.',
      'Royal Berkshire Fire and Rescue Service enforces fire safety law across Bracknell Forest, Reading, Slough, West Berkshire, Windsor and Maidenhead, and Wokingham, on behalf of the Royal Berkshire Fire Authority, whose members are drawn from all six councils.',
    ],
    places: [
      'Reading', 'Slough', 'Bracknell Forest', 'Wokingham', 'Windsor & Maidenhead', 'West Berkshire (Newbury)',
      'Thatcham', 'Ascot',
    ],
    housingTitle: 'Overcrowding in Slough, terraces in Reading',
    housing: [
      'Slough has seen the sharpest growth in private renting in the South East, from 24.3% of households in 2011 to 30.7% in 2021. The council’s 2026 licensing evidence counts 16,710 privately rented homes, 28.6% of its stock, and its monitoring report gives an average of 27.2 square metres of living space per person, against 36.5 in comparable towns. Overcrowded HMOs, large shared households and outbuildings used as living space (the “beds in sheds” problem the council has reported) all make a fire more likely and escape harder.',
      'Reading’s private rented stock is dominated by Victorian and Edwardian terraces, many let to University of Reading students or young professionals. Bracknell, a post-war new town, has estates of low-rise flats with shared stairs, while Windsor, Maidenhead and Wokingham have more owner-occupied homes and purpose-built blocks run by managing agents. In a terraced HMO the assessment focuses on the single escape stair; in a managed block it is more about doors, detection in the common parts and the condition of compartment walls.',
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
    nearby: ['surrey', 'hampshire', 'greater-london'],
  },

  // ───────────────────────────── Hampshire ─────────────────────────────
  {
    slug: 'hampshire',
    name: 'Hampshire',
    nation: 'England',
    metaTitle: 'Fire Risk Assessments in Hampshire | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments for HMOs, converted flats and blocks in Southampton, Portsmouth, Hampshire and the Isle of Wight. Get a quote on 020 8066 2499.',
    heroSub:
      'Fire risk assessments and fire safety servicing in Southampton, Portsmouth, Winchester, Basingstoke, Eastleigh, Fareham, Aldershot and the Isle of Wight.',
    intro: [
      'T&T Fire Safety carries out fire risk assessments across Hampshire, Southampton, Portsmouth and the Isle of Wight for HMO landlords, student housing providers, freeholders, managing agents and businesses. The two cities have some of the densest shared housing on the south coast, while the county districts have more purpose-built blocks, care settings and commercial premises.',
      'Hampshire and Isle of Wight Fire and Rescue Service enforces fire safety law across the whole area. It was formed on 1 April 2021 when the Hampshire and Isle of Wight services merged, and answers to a combined fire authority made up of Hampshire County Council, the Isle of Wight Council, Portsmouth City Council and Southampton City Council.',
    ],
    places: [
      'Southampton', 'Portsmouth', 'Winchester', 'Basingstoke & Deane', 'Eastleigh', 'Fareham', 'Gosport',
      'Havant', 'Rushmoor (Aldershot, Farnborough)', 'Hart', 'Test Valley', 'East Hampshire', 'New Forest',
      'Isle of Wight',
    ],
    housingTitle: 'Island-city terraces and student streets',
    housing: [
      'Portsmouth is a densely built island city of terraced streets, many let as HMOs to students and young workers. It also has a large number of older houses converted into self-contained flats before the 1991 Building Regulations, known as section 257 HMOs. These conversions often have thin floors between flats, original doors onto a shared hall and no detection in the common parts, which is part of why Portsmouth chose to include them in its licensing.',
      'Southampton has around 2,500 HMOs under mandatory licensing, and the council expected its additional scheme to bring in thousands more. Student shared houses cluster in Portswood, Swaythling, Bevois and Bassett, close to the University of Southampton and Solent University. The typical building is a two or three-storey terrace or semi with bedrooms on every floor, so the fire risk assessment concentrates on detection, the protection of the stair and whether every bedroom has a safe route to the front door.',
    ],
    licensingTitle: 'Additional licensing in Southampton and Portsmouth',
    licensing: [
      `${ext('https://southampton.gov.uk/modernGov/ieDecisionDetails.aspx?ID=3491', 'Southampton City Council')} runs additional HMO licensing in nine wards: Bevois, Bargate, Banister & Polygon, Portswood, Swaythling, Shirley, Bassett, Freemantle and Millbrook. The scheme runs from 1 October 2025 to 30 September 2030 and covers smaller HMOs below the mandatory threshold. Southampton has no selective licensing scheme.`,
      `${ext('https://democracy.portsmouth.gov.uk/documents/s46929/Mandatory%20Licensing%20of%20Houses%20in%20Multiple%20Occupation.pdf', 'Portsmouth City Council')} has run city-wide additional HMO licensing since 1 September 2023. It covers every class of HMO, including section 257 converted blocks where the flats are mainly or wholly let. We have not found discretionary schemes in the Hampshire districts or on the Isle of Wight. Each scheme has a fixed term and is reviewed before renewal, so confirm the current position with the council before you let.`,
    ],
    lawTitle: 'The law for HMOs and section 257 conversions',
    law: [
      'The Regulatory Reform (Fire Safety) Order 2005 covers the common parts of Hampshire’s HMOs and converted blocks. In a section 257 building, the Fire Safety Act 2021 made clear that the assessment must also consider the structure, the external walls and each flat entrance door, which in older conversions are often the weakest point between a flat fire and the shared stair. Every assessment must be recorded in full, a duty that has applied to all responsible persons since 1 October 2023.',
      'For licensed HMOs, councils and HIWFRS generally judge fire precautions against the LACORS housing fire safety guidance, covering detection, fire doors and the protected route out. Converted buildings with two or more flats must also meet the Fire Safety (England) Regulations 2022, which require fire safety instructions and fire door information to be given to residents and refreshed at least once a year.',
    ],
    enforcer: { name: 'Hampshire and Isle of Wight Fire and Rescue Service', url: 'https://www.hantsfire.gov.uk/' },
    faqs: [
      {
        q: 'Does my Portswood student house need a licence?',
        a: 'If three or four tenants from more than one household share it, yes. Southampton’s additional scheme covers Portswood and eight other wards from 1 October 2025 to 30 September 2030. Larger HMOs need a mandatory licence anywhere in the city.',
      },
      {
        q: 'Does Portsmouth license converted flats?',
        a: 'Yes. Portsmouth’s city-wide additional scheme, in force since 1 September 2023, includes section 257 HMOs: buildings converted into self-contained flats that do not meet the 1991 Building Regulations, where most of the flats are let.',
      },
      {
        q: 'Who is the fire authority for Southampton and the Isle of Wight?',
        a: 'Hampshire and Isle of Wight Fire and Rescue Service, formed on 1 April 2021. It covers the county, both cities and the island.',
      },
      {
        q: 'Do you assess inside the flats in a converted building?',
        a: 'A standard assessment covers the common parts and the elements that separate them from the flats, including flat entrance doors. Assessing inside individual flats is a wider scope that can be arranged separately. See our <a href="/services/fire-risk-assessments">fire risk assessment service</a>.',
      },
    ],
    sources: [
      { label: 'Hampshire and Isle of Wight FRS: services combine', url: 'https://www.hantsfire.gov.uk/momentous-day-as-fire-services-combine/' },
      { label: 'Southampton City Council: additional licensing decision', url: 'https://southampton.gov.uk/modernGov/ieDecisionDetails.aspx?ID=3491' },
      { label: 'Southampton additional licensing designation notice', url: 'https://publicnoticeportal.uk/notice/statutory/68909586ce503d1bc0cab625' },
      { label: 'Southampton City Council: consultation on new HMO scheme', url: 'https://www.southampton.gov.uk/news/article/scc-consults-new-hmo-scheme' },
      { label: 'Portsmouth City Council: HMO licensing report', url: 'https://democracy.portsmouth.gov.uk/documents/s46929/Mandatory%20Licensing%20of%20Houses%20in%20Multiple%20Occupation.pdf' },
      { label: 'LACORS Housing – Fire Safety guidance (hosted by Hastings BC)', url: 'https://www.hastings.gov.uk/content/fire-assessments/LACORS_Fire_safety_guidance.pdf' },
      { label: 'Fire Safety Act 2021, s.1 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/ukpga/2021/24/section/1' },
    ],
    nearby: ['surrey', 'berkshire'],
  },

  // ───────────────────────────── West Midlands ─────────────────────────────
  {
    slug: 'west-midlands',
    name: 'West Midlands',
    nation: 'England',
    metaTitle: 'Fire Risk Assessments in the West Midlands | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in Birmingham, Coventry and the Black Country for tower blocks, student HMOs and businesses, plus servicing. Call 020 8066 2499.',
    heroSub:
      'Fire risk assessments and fire safety servicing in Birmingham, Coventry, Wolverhampton, Dudley, Walsall, West Bromwich and Solihull.',
    intro: [
      'We carry out fire risk assessments across the seven West Midlands metropolitan boroughs for landlords, housing providers, block managers, student accommodation operators and businesses. The region combines a large post-war tower stock, dense student areas in Birmingham and Coventry, and a fast-growing HMO and supported housing sector in the Black Country.',
      'West Midlands Fire Service enforces fire safety law in Birmingham, Coventry, Dudley, Sandwell, Solihull, Walsall and Wolverhampton. It hosted the launch of the West Midlands Remediation Acceleration Plan in September 2025, which commits the region’s partners to fixing unsafe cladding on all known buildings of 18 metres and over by the end of 2029.',
    ],
    places: [
      'Birmingham', 'Coventry', 'Wolverhampton', 'Dudley', 'Sandwell (West Bromwich, Oldbury, Smethwick)',
      'Walsall', 'Solihull', 'Sutton Coldfield', 'Selly Oak',
    ],
    housingTitle: 'Post-war towers and student HMOs',
    housing: [
      'Birmingham built 464 blocks of five or more storeys between 1950 and 1971. Many are still lived in, and the council is refurbishing some: a £23 million programme announced in November 2025 covers eight blocks, including six six-storey towers at Hollybank Road in Moseley. Older towers like these rely on compartmentation and a stay-put strategy, so the state of flat entrance doors, service risers and refuse chutes matters a great deal.',
      'Student housing is concentrated in Selly Oak and Bournbrook near the University of Birmingham, and in Coventry around Coventry University and the University of Warwick. In the Black Country, Sandwell has been described in the local press as an HMO and exempt accommodation hotspot after a sharp rise in applications. Shared and supported housing of this kind often has more occupants, cooking in bedrooms and residents who may need help to get out, all of which the fire risk assessment has to reflect.',
    ],
    licensingTitle: 'Licensing in Birmingham, Coventry and Sandwell',
    licensing: [
      `${ext('https://www.birmingham.gov.uk/info/20175/private_housing/2649/selective_licence', 'Birmingham City Council')} started additional HMO licensing for smaller HMOs and selective licensing in 25 wards, including Bournbrook & Selly Park, on 5 June 2023. Published sources describe the extent of the additional scheme differently (city-wide or a list of wards), so check the council’s ward list for your property.`,
      `${ext('https://www.coventry.gov.uk/housing-enforcement/additional-licensing-scheme-2025', 'Coventry City Council')}’s Additional HMO Licensing Scheme 2025 is city-wide, runs from 4 May 2025 to 3 May 2030, and covers three and four-person HMOs and section 257 converted blocks. ${ext('https://sandwell.gov.uk/news/article/439/sandwell-landlords-urged-to-check-if-they-need-housing-licence-under-new-scheme', 'Sandwell Council')} brought in borough-wide additional licensing on 1 October 2024 and has an Article 4 direction controlling new HMOs. We have not found discretionary licensing in Wolverhampton, Walsall, Dudley or Solihull. Councils review their schemes regularly, so check with yours for the current rules.`,
    ],
    lawTitle: 'Fire safety duties for West Midlands towers',
    law: [
      'The Regulatory Reform (Fire Safety) Order 2005 applies to the common parts of every block and HMO in the region. For a Birmingham council tower, the Fire Safety Act 2021 confirmed that the responsible person’s assessment must cover the structure, the external walls and every flat entrance door, and it must reflect the true state of any cladding. A full written record naming the assessor has been required since 1 October 2023.',
      'Blocks above 11 metres must also meet the Fire Safety (England) Regulations 2022, including three-monthly communal fire door checks and annual checks of flat entrance doors. At 18 metres or seven storeys, the responsible person must provide a secure information box, send plans and external wall information to West Midlands Fire Service, check lifts and firefighting equipment monthly and, since 6 April 2026, offer evacuation plans to residents who would struggle to leave unaided.',
    ],
    enforcer: { name: 'West Midlands Fire Service', url: 'https://www.wmfs.net/' },
    faqs: [
      {
        q: 'Do I need an HMO licence for a three-bed student let in Selly Oak?',
        a: 'Very likely. Birmingham’s additional scheme covers smaller HMOs, and Bournbrook & Selly Park is also in the selective scheme that began on 5 June 2023. Check the council’s ward list, and see our <a href="/sectors/landlords-hmos">landlords and HMOs page</a> for the fire safety side.',
      },
      {
        q: 'Is all of Coventry covered by HMO licensing?',
        a: 'Yes. Coventry’s Additional HMO Licensing Scheme 2025 is city-wide and runs from 4 May 2025 to 3 May 2030, covering smaller HMOs and section 257 converted blocks.',
      },
      {
        q: 'What is the West Midlands deadline for fixing unsafe cladding?',
        a: 'The regional Remediation Acceleration Plan aims to remediate all known buildings of 18 metres and over with unsafe cladding by the end of 2029. For buildings over 11 metres it expects remediation, a confirmed completion date or enforcement action.',
      },
      {
        q: 'When did Sandwell’s licensing start?',
        a: 'Borough-wide additional HMO licensing has been in force in Sandwell since 1 October 2024. It sits alongside the mandatory scheme for larger HMOs.',
      },
    ],
    sources: [
      { label: 'Urban History: the suburban high flat in post-war Birmingham', url: 'https://www.cambridge.org/core/journals/urban-history/article/suburban-high-flat-in-the-postwar-reconstruction-of-birmingham-194571/8536F4E3509583A925B512688EDE1982' },
      { label: 'Birmingham City Council: council housing block refurbishment', url: 'https://growth.birmingham.gov.uk/news/article/15/transformation-of-council-housing-blocks-across-the-city' },
      { label: 'Birmingham City Council: selective licence', url: 'https://www.birmingham.gov.uk/info/20175/private_housing/2649/selective_licence' },
      { label: 'Coventry City Council: additional licensing scheme 2025', url: 'https://www.coventry.gov.uk/housing-enforcement/additional-licensing-scheme-2025' },
      { label: 'Sandwell Council: new licensing scheme', url: 'https://sandwell.gov.uk/news/article/439/sandwell-landlords-urged-to-check-if-they-need-housing-licence-under-new-scheme' },
      { label: 'Express & Star: Sandwell HMO hotspot', url: 'https://www.expressandstar.com/news/sandwell/black-country-borough-branded-uks-hmo-hotspot-after-seeing-10-fold-increase-in-hostel-applications-6568717' },
      { label: 'WMCA: plan to speed up removal of unsafe cladding', url: 'https://www.wmca.org.uk/news/plan-launched-to-speed-up-removal-of-unsafe-cladding-from-region-s-tower-blocks' },
    ],
    nearby: ['greater-manchester', 'west-yorkshire', 'south-wales'],
  },

  // ───────────────────────────── Greater Manchester ─────────────────────────────
  {
    slug: 'greater-manchester',
    name: 'Greater Manchester',
    nation: 'England',
    metaTitle: 'Fire Risk Assessments Greater Manchester | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in Manchester, Salford and Greater Manchester for apartment blocks, HMOs and flats above shops, plus servicing. Call 020 8066 2499.',
    heroSub:
      'Fire risk assessments and fire safety servicing in Manchester, Salford, Bolton, Stockport, Oldham, Rochdale, Wigan and Trafford.',
    intro: [
      'T&T Fire Safety carries out fire risk assessments across Greater Manchester’s ten boroughs for apartment block managers, residents’ management companies, student accommodation providers, HMO landlords and businesses. Central Manchester and Salford are dominated by apartments, while the surrounding towns have terraced HMOs, flats above shops and post-war council blocks.',
      'Greater Manchester Fire and Rescue Service enforces fire safety law across all ten boroughs. Since Grenfell it has worked with the councils through the Greater Manchester High Rise Task Force, which oversees high-rise and building safety in the city region.',
    ],
    places: [
      'Manchester', 'Salford', 'Bolton', 'Bury', 'Oldham', 'Rochdale', 'Stockport', 'Tameside', 'Trafford',
      'Wigan',
    ],
    housingTitle: 'City-centre apartments and mid-rise risk',
    housing: [
      'Private renting in Greater Manchester grew faster than in England as a whole, up 34% (60,939 households) between 2011 and 2021 against 29% nationally. In Manchester itself around 32% of households rent privately, rising to 73% in Deansgate and over 50% in Piccadilly and in Ancoats & Beswick. Those neighbourhoods are almost entirely apartment blocks, from converted mills and warehouses to towers built since 2000, with smoke ventilation systems and evacuation strategies that need to match how the building actually performs.',
      'The fire at The Cube in Bolton on 15 November 2019 showed that external wall risk is not limited to tall buildings. The six-storey student block was recorded as under 18 metres, yet fire spread rapidly up its high-pressure laminate cladding from the fourth floor to the sixth, and around 200 firefighters attended. Beyond the centre, Oldham, Rochdale and Salford have older terraces and flats above shops, where the risk is more often a shop or takeaway below a flat with no separation or alarm between them.',
    ],
    licensingTitle: 'Licensing across the ten boroughs',
    licensing: [
      `${ext('https://www.manchester.gov.uk/news-stories/2025/landlord-licensing-extends-to-1900-more-properties-across-manchester', 'Manchester City Council')} uses selective licensing street by street. From 24 February 2025 it added 1,863 properties in Cheetham, Crumpsall, Harpurhey, Longsight, Miles Platting & Newton Heath and Moss Side, including flats above shops in Cheetham. ${ext('https://www.oldham.gov.uk/a_to_z/service/487/selective_licensing_of_private_landlords', 'Oldham Council')} runs selective licensing in 11 wards from 4 July 2022 to 3 July 2027, and ${ext('https://publicnoticeportal.uk/notice/statutory/67eed1158c71511ccfc52e21', 'Rochdale Borough Council')} has borough-wide additional licensing for three and four-person HMOs from 28 April 2025 to 28 April 2030.`,
      `${ext('https://www.salford.gov.uk/housing/information-for-landlords/landlord-licensing/additional-hmo-licensing/', 'Salford City Council')}’s 2021 city-wide additional HMO scheme ended on 19 July 2026. On 11 August 2026 the council made a new city-wide designation aimed at section 257 HMOs (converted buildings of self-contained flats), but we have not confirmed its start date. We have not found discretionary schemes in Bolton, Bury, Stockport, Tameside, Trafford or Wigan. Ten councils means ten sets of rules, and they change, so check with the borough your property is in.`,
    ],
    lawTitle: 'Cladding, mid-rise blocks and the law',
    law: [
      'Greater Manchester’s apartment blocks and HMOs fall under the Regulatory Reform (Fire Safety) Order 2005. The Fire Safety Act 2021 made clear that in any building with two or more homes the responsible person’s assessment covers the external walls, so cladding, balconies and windows are part of the fire risk assessment, as are flat entrance doors. Since 1 October 2023 every assessment must be recorded in full.',
      'For the region’s many mid-rise blocks between 11 and 18 metres, the Fire Safety (England) Regulations 2022 require three-monthly checks of communal fire doors, best-endeavours annual checks of flat entrance doors and fire safety instructions for residents. Taller blocks need a secure information box, wayfinding signage, plans shared with GMFRS and monthly checks of lifts and firefighting equipment. Where a block over 11 metres has switched to simultaneous evacuation while cladding is fixed, the Residential Evacuation Plans regulations have applied since 6 April 2026.',
    ],
    enforcer: { name: 'Greater Manchester Fire and Rescue Service', url: 'https://www.manchesterfire.gov.uk/' },
    faqs: [
      {
        q: 'What does the fire at The Cube in Bolton mean for mid-rise blocks?',
        a: 'It showed that fire can spread quickly up combustible cladding on a building under 18 metres. A fire risk assessment for a mid-rise block should record what is known about the external walls and whether further investigation is needed. See our <a href="/sectors/blocks-of-flats">blocks of flats page</a>.',
      },
      {
        q: 'Is my Moss Side or Cheetham property in Manchester’s licensing zone?',
        a: 'Possibly. Manchester’s February 2025 designations cover named streets in six wards, including Viscount Street and Heald Grove in Moss Side and flats above shops in Cheetham. Check the street lists on Manchester City Council’s website.',
      },
      {
        q: 'Does Rochdale require licences for small HMOs?',
        a: 'Yes. Rochdale’s additional scheme covers three and four-person HMOs across the borough from 28 April 2025 to 28 April 2030.',
      },
      {
        q: 'Has Salford’s HMO licensing ended?',
        a: 'The 2021 additional scheme ended on 19 July 2026. A new city-wide designation for section 257 HMOs was made on 11 August 2026, so check its start date with Salford City Council.',
      },
    ],
    sources: [
      { label: 'GMCA: housing tenure in Greater Manchester (Census 2021)', url: 'https://www.greatermanchester-ca.gov.uk/media/7877/230414-housing-tenure-accessible.pdf' },
      { label: 'Manchester City Council: Census 2021 overview', url: 'https://www.manchester.gov.uk/info/500388/census_2021/8622/census_2021_-_overview' },
      { label: 'GMFRS: The Cube incident report and key observations', url: 'https://www.manchesterfire.gov.uk/media/2092/the-cube_incident-report-and-key-observations_final.pdf' },
      { label: 'GMCA: Greater Manchester High Rise Task Force', url: 'https://www.greatermanchester-ca.gov.uk/what-we-do/police-and-fire/greater-manchester-high-rise-task-force/' },
      { label: 'Manchester City Council: landlord licensing extends', url: 'https://www.manchester.gov.uk/news-stories/2025/landlord-licensing-extends-to-1900-more-properties-across-manchester' },
      { label: 'Salford City Council: additional HMO licensing', url: 'https://www.salford.gov.uk/housing/information-for-landlords/landlord-licensing/additional-hmo-licensing/' },
      { label: 'Oldham Council: selective licensing', url: 'https://www.oldham.gov.uk/a_to_z/service/487/selective_licensing_of_private_landlords' },
      { label: 'Rochdale additional licensing designation notice', url: 'https://publicnoticeportal.uk/notice/statutory/67eed1158c71511ccfc52e21' },
    ],
    nearby: ['west-yorkshire', 'west-midlands'],
  },

  // ───────────────────────────── West Yorkshire ─────────────────────────────
  {
    slug: 'west-yorkshire',
    name: 'West Yorkshire',
    nation: 'England',
    metaTitle: 'Fire Risk Assessments in West Yorkshire | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in Leeds, Bradford, Huddersfield and Wakefield for back-to-back HMOs, student lets and apartment towers. Call 020 8066 2499.',
    heroSub:
      'Fire risk assessments and fire safety servicing in Leeds, Bradford, Huddersfield, Halifax, Wakefield and Dewsbury.',
    intro: [
      'We carry out fire risk assessments across Leeds, Bradford, Kirklees, Calderdale and Wakefield for private landlords, student housing providers, block managers, housing associations and businesses. The region’s stock runs from back-to-back terraces and stone-built mill-town houses to apartment towers in Leeds city centre.',
      'West Yorkshire Fire and Rescue Service enforces fire safety law across the five districts, serving around 2.35 million people. It estimates there are about 550 residential and non-commercial high-rise buildings in its area, with Leeds holding the largest share.',
    ],
    places: [
      'Leeds', 'Bradford', 'Kirklees (Huddersfield, Dewsbury)', 'Calderdale (Halifax)', 'Wakefield',
      'Headingley', 'Keighley', 'Pontefract',
    ],
    housingTitle: 'Back-to-backs, stone terraces and city-centre towers',
    housing: [
      'Leeds still has about 19,500 pre-1919 back-to-back houses, most of them privately rented, and the city carried on building them into the 1930s, long after they had been banned nationally. A back-to-back has no rear door, so the front door is the only exit. Where one is let as a shared house, the fire risk assessment has to look closely at early warning and at a protected route from the upper floors and attic rooms to that single door.',
      'Headingley, Hyde Park and Woodhouse are dominated by student HMOs, and Leeds has used an Article 4 direction since 2012 so that turning a house into a small HMO there needs planning permission. Bradford, Huddersfield and Halifax have large areas of Victorian stone terraces, many split into flats or let as shared houses. Leeds city centre adds the high-rise element: towers of apartments and student rooms with lifts and smoke control that bring extra duties under the 2022 Regulations.',
    ],
    licensingTitle: 'Selective licensing in Leeds and the other districts',
    licensing: [
      `${ext('https://leeds.gov.uk/housing/information-for-landlords/selective-licensing', 'Leeds City Council')}’s new selective licensing scheme came into force on 9 February 2026 and runs to 8 February 2031. It covers parts of six wards (Armley, Beeston & Holbeck, Burmantofts & Richmond Hill, Gipton & Harehills, Hunslet & Riverside, and Farnley & Wortley), about 12,500 properties, and follows the earlier Beeston and Harehills schemes of 2020 to 2025. We have not found an additional HMO licensing scheme in Leeds.`,
      `${ext('https://www.bradford.gov.uk/housing/houses-in-multiple-occupation/do-i-need-a-hmo-licence/', 'Bradford Council')} and ${ext('https://www.kirklees.gov.uk/beta/housing/houses-in-multiple-occupation.aspx', 'Kirklees Council')} confirm mandatory licensing for HMOs with five or more people in two or more households. We have not been able to confirm any discretionary scheme in Bradford, Kirklees, Calderdale or Wakefield. A designation lasts at most five years and new ones are proposed regularly, so check with the council before you let.`,
    ],
    lawTitle: 'From back-to-backs to high-rise: the law that applies',
    law: [
      'The Regulatory Reform (Fire Safety) Order 2005 applies to the common parts of West Yorkshire’s HMOs and blocks of flats and to all non-domestic premises. A back-to-back let to one household is a single dwelling outside the Order, but the same house let as an HMO falls under the HMO management regulations and the council’s Housing Act 2004 powers, and a written fire risk assessment is the standard way to show its precautions are adequate. Since 1 October 2023 every responsible person must record the assessment in full.',
      'Leeds’ apartment towers sit at the other end of the scale. Under the Fire Safety (England) Regulations 2022, high-rise residential buildings must have a secure information box, up-to-date floor plans and external wall information sent to WYFRS, monthly checks of firefighting lifts and equipment, and floor identification signage that can be read in smoke. Blocks over 11 metres need three-monthly communal fire door checks, and every block with two or more flats must give residents fire safety instructions.',
    ],
    enforcer: { name: 'West Yorkshire Fire and Rescue Service', url: 'https://www.westyorksfire.gov.uk/' },
    faqs: [
      {
        q: 'Do back-to-back houses in Leeds need special fire safety consideration?',
        a: 'Yes, when they are let as HMOs or flats. With only one exit, escape depends on early warning and a protected route to the front door, so the assessment focuses on interlinked detection, fire doors and any attic or cellar rooms.',
      },
      {
        q: 'Is my property in Harehills or Beeston covered by Leeds licensing in 2026?',
        a: 'Parts of Gipton & Harehills and Beeston & Holbeck are in the selective scheme running from 9 February 2026 to 8 February 2031. The designation follows street boundaries, so check your address on Leeds City Council’s website.',
      },
      {
        q: 'Do I need planning permission to turn a house in Headingley into an HMO?',
        a: 'Usually yes. Leeds’ Article 4 direction, in force since 10 February 2012, removes the permitted development right to convert a house into a small HMO in areas including Headingley, Hyde Park and Woodhouse. Planning and licensing are separate from your fire safety duties.',
      },
      {
        q: 'How many high-rise buildings does West Yorkshire Fire and Rescue Service cover?',
        a: 'WYFRS estimates about 550 residential and non-commercial high-rise buildings in West Yorkshire, most of them in Leeds. Our guide to the <a href="/guides/fire-safety-england-regulations-2022">Fire Safety (England) Regulations 2022</a> explains the extra duties for tall blocks.',
      },
    ],
    sources: [
      { label: 'WYFRS: Community Risk Management Plan 2025–28', url: 'https://www.wyfs.co.uk/sites/default/files/2025-07/crmp_-_your_fire_and_rescue_service_2025-28.pdf' },
      { label: 'Leeds City Council: back-to-back housing (appendix)', url: 'https://democracy.leeds.gov.uk/documents/s62980/Appendix%207.pdf' },
      { label: 'Leeds City Council: HMO Article 4 direction', url: 'https://www.leeds.gov.uk/planning/planning-policy/supplementary-planning-documents-and-guidance/houses-in-multiple-occupation-article-4-direction' },
      { label: 'Leeds City Council: selective licensing', url: 'https://leeds.gov.uk/housing/information-for-landlords/selective-licensing' },
      { label: 'Housing Today: Leeds approves PRS licensing scheme', url: 'https://www.housingtoday.co.uk/news/leeds-council-approves-prs-licensing-scheme/5138761.article' },
      { label: 'Bradford Council: do I need an HMO licence?', url: 'https://www.bradford.gov.uk/housing/houses-in-multiple-occupation/do-i-need-a-hmo-licence/' },
      { label: 'Kirklees Council: houses in multiple occupation', url: 'https://www.kirklees.gov.uk/beta/housing/houses-in-multiple-occupation.aspx' },
    ],
    nearby: ['greater-manchester', 'west-midlands', 'central-scotland'],
  },

  // ───────────────────────────── South Wales ─────────────────────────────
  {
    slug: 'south-wales',
    name: 'South Wales',
    nation: 'Wales',
    metaTitle: 'Fire Risk Assessments in South Wales | T&T Fire Safety',
    metaDescription:
      'Fire risk assessments in Cardiff, Newport, Swansea and the Valleys under Welsh law, for HMOs, blocks and businesses. Get a quote on 020 8066 2499.',
    heroSub:
      'Fire risk assessments and fire safety servicing in Cardiff, Newport, Bridgend, Pontypridd, Merthyr Tydfil, Caerphilly, Swansea and the Valleys.',
    intro: [
      'T&T Fire Safety carries out fire risk assessments across South Wales for landlords, letting agents, block managers, housing associations and businesses, working to Welsh law rather than English rules. Buildings range from student HMOs in Cardiff and Swansea to Valleys terraces, shops with flats above, and newer apartment blocks in Cardiff Bay and Newport.',
      'South Wales Fire and Rescue Service enforces fire safety law across ten council areas, from Cardiff and the Vale of Glamorgan to Blaenau Gwent and Monmouthshire. Swansea and Neath Port Talbot are covered by Mid and West Wales Fire and Rescue Service instead, so the enforcing authority depends on which side of that boundary your building sits.',
    ],
    places: [
      'Cardiff', 'Newport', 'Bridgend', 'Vale of Glamorgan', 'Rhondda Cynon Taf', 'Merthyr Tydfil',
      'Caerphilly', 'Blaenau Gwent', 'Torfaen', 'Monmouthshire', 'Swansea', 'Neath Port Talbot',
    ],
    housingTitle: 'Valleys terraces and Cardiff student streets',
    housing: [
      'Terraced housing dominates the old coalfield. In the Rhondda, Cynon and Merthyr valleys, rows of late 19th and early 20th century terraces climb steep hillsides, often with the back of the house a storey higher or lower than the front. When these houses are converted into flats or let as HMOs, the escape route, the position of the kitchen and any stair down to a lower ground floor need careful assessment, and fire engine access can be limited on narrow streets.',
      'Cardiff’s shared housing is concentrated in Cathays and Plasnewydd (Roath), close to Cardiff University, which is why both areas have been designated for additional licensing. For taller buildings, the Welsh Government’s route to remediation covers all residential buildings of 11 metres and over, with or without cladding, and more than £200 million has been allocated to it since 2021.',
    ],
    licensingTitle: 'HMO licensing in South Wales',
    licensing: [
      'Wales uses a narrower test for mandatory HMO licensing than England: it applies to HMOs of three or more storeys with five or more people in two or more households. Welsh councils fill the gap with additional licensing, and at 31 March 2025 there were more additional licences (5,186) than mandatory ones (3,010) in force across Wales. Every private landlord must also register with Rent Smart Wales, and whoever lets and manages a property must hold a Rent Smart Wales licence.',
      `${ext('https://rctcbc.gov.uk/EN/Business/LandlordGuidance/HousesinMultipleOccupationHMOsAdditionalLicensingPublicNotice–RhonddaCynonTaf.aspx', 'Rhondda Cynon Taf Council')} runs additional licensing in every electoral ward from 1 April 2024 to 31 March 2029, so smaller HMOs anywhere in the county borough need a licence. ${ext('https://cardiff.moderngov.co.uk/documents/s64282/Cabinet%2020%20October%202022%20Cathays%20add%20licensing%20App%201.pdf', 'Cardiff Council')} reintroduced additional licensing in Cathays from 1 February 2023 for five years; its Plasnewydd designation ran to the end of 2025 and the council consulted on renewing it, so check the current position. ${ext('https://swansea.gov.uk/article/41182/Changes-to-HMO-Licensing-in-Swansea-in-2026', 'Swansea Council')}’s scheme for Castle, Uplands, St Thomas and Waterfront runs from 14 February 2026 to 14 February 2031. We have not found schemes in Newport, Bridgend or the Vale of Glamorgan. Schemes are renewed and redrawn, so confirm with your council before letting.`,
    ],
    lawTitle: 'Welsh fire safety law: what differs from England',
    law: [
      'The Regulatory Reform (Fire Safety) Order 2005 applies in Wales as well as England and covers the common parts of blocks and HMOs, including the structure, external walls and flat entrance doors (the relevant Fire Safety Act 2021 provision has been in force in Wales since 1 October 2021). Since 1 October 2023 responsible persons in Wales must record the whole assessment and their fire safety arrangements. The Fire Safety (England) Regulations 2022 do not apply in Wales, so England’s three-monthly door checks and secure information boxes are not legal requirements here.',
      'Tenancies are governed by the Renting Homes (Wales) Act 2016. Under the fitness for human habitation regulations, landlords must provide a working, interlinked, mains-powered smoke alarm on every storey and a carbon monoxide alarm in any room with a gas, oil or solid-fuel appliance; a home without them is treated as unfit. The law is also changing: the Building Safety (Wales) Act 2026 received Royal Assent on 27 April 2026 and will move multi-occupied residential buildings and most HMOs into a new accountable person regime, but most of it has not yet been commenced. Until it is, the Fire Safety Order continues to apply.',
    ],
    enforcer: { name: 'South Wales Fire and Rescue Service', url: 'https://www.southwales-fire.gov.uk/' },
    faqs: [
      {
        q: 'Do the Fire Safety (England) Regulations 2022 apply to my block in Cardiff?',
        a: 'No, they apply in England only. Your block’s common parts are covered by the Fire Safety Order, which does apply in Wales, and the assessment must be recorded in writing. Wales is introducing its own regime under the Building Safety (Wales) Act 2026.',
      },
      {
        q: 'Is every HMO in Rhondda Cynon Taf licensable?',
        a: 'Effectively yes. RCT’s additional scheme covers all wards from 1 April 2024 to 31 March 2029, so smaller HMOs need a licence, not only those with three storeys and five occupants.',
      },
      {
        q: 'Do I need a licence for a student house in Cathays?',
        a: 'Yes, if it is an HMO. Cathays has been an additional licensing area since 1 February 2023. You also need to be registered with Rent Smart Wales. Our <a href="/sectors/landlords-hmos">landlords and HMOs page</a> covers the fire safety side.',
      },
      {
        q: 'Which fire service covers Swansea?',
        a: 'Mid and West Wales Fire and Rescue Service, not South Wales Fire and Rescue Service. The law is the same either way: the Fire Safety Order for common parts, with tenancy standards set by the Renting Homes (Wales) Act 2016.',
      },
    ],
    sources: [
      { label: 'Welsh Government: fire and rescue authority areas', url: 'https://gov.wales/node/21959' },
      { label: 'Mid and West Wales Fire and Rescue Service', url: 'https://www.mawwfire.gov.uk/' },
      { label: 'Welsh Government: section 156 Building Safety Act guidance', url: 'https://www.gov.wales/fire-safety-responsibilities-under-section-156-building-safety-act-2022-guidance-html' },
      { label: 'Renting Homes (Fitness for Human Habitation) (Wales) Regulations 2022, reg. 5', url: 'https://www.legislation.gov.uk/wsi/2022/6/regulation/5/made' },
      { label: 'Welsh Government: Building Safety (Wales) Act 2026', url: 'https://www.gov.wales/building-safety-wales-act-2026' },
      { label: 'Welsh Government: HMO licensing statistics at 31 March 2025', url: 'https://www.gov.wales/houses-multiple-occupation-hmo-licensing-31-march-2025-html' },
      { label: 'Licensing of HMOs (Prescribed Descriptions) (Wales) Order 2006', url: 'https://www.legislation.gov.uk/wsi/2006/1712/article/3/made' },
      { label: 'Rhondda Cynon Taf: additional licensing public notice', url: 'https://rctcbc.gov.uk/EN/Business/LandlordGuidance/HousesinMultipleOccupationHMOsAdditionalLicensingPublicNotice–RhonddaCynonTaf.aspx' },
      { label: 'Cardiff Council: Cathays additional licensing', url: 'https://cardiff.moderngov.co.uk/documents/s64282/Cabinet%2020%20October%202022%20Cathays%20add%20licensing%20App%201.pdf' },
      { label: 'Swansea Council: changes to HMO licensing in 2026', url: 'https://swansea.gov.uk/article/41182/Changes-to-HMO-Licensing-in-Swansea-in-2026' },
      { label: 'Welsh Government: route to remediation for high-rise buildings', url: 'https://www.gov.wales/all-residential-high-rise-buildings-wales-route-remediation' },
    ],
    nearby: ['west-midlands', 'berkshire'],
  },

  // ───────────────────────────── Central Scotland ─────────────────────────────
  {
    slug: 'central-scotland',
    name: 'Central Scotland',
    nation: 'Scotland',
    metaTitle: 'Fire Risk Assessments in Central Scotland | T&T Fire Safety',
    metaDescription:
      'Fire safety risk assessments in Glasgow, Edinburgh, Stirling and Central Scotland for HMOs, tenements and businesses under Scottish law. Call 020 8066 2499.',
    heroSub:
      'Fire safety risk assessments and servicing in Glasgow, Edinburgh, Stirling, Falkirk, Livingston, Paisley, Motherwell and Hamilton.',
    intro: [
      'T&T Fire Safety carries out fire safety risk assessments across Central Scotland, from Glasgow and Renfrewshire in the west to Edinburgh and West Lothian in the east, for HMO landlords, letting agents, factors, short-term let hosts and businesses. The council areas we cover are listed below.',
      'Scotland has its own fire safety law and a single national fire service. The Scottish Fire and Rescue Service carries out fire safety audits and enforcement across the whole country, and we work to the Fire (Scotland) Act 2005, not the Fire Safety Order that applies in England and Wales.',
    ],
    places: [
      'Glasgow', 'Edinburgh', 'Stirling', 'Falkirk', 'North Lanarkshire', 'South Lanarkshire', 'West Lothian',
      'Clackmannanshire', 'Renfrewshire', 'East Dunbartonshire',
    ],
    housingTitle: 'Tenements, flatshares and multi-storey blocks',
    housing: [
      'Tenements define much of the housing here. Across Scotland they made up about 24% of all dwellings in 2019, and Glasgow alone has over 77,000 pre-1919 homes, about a quarter of its stock. In one council sample survey a third of tenement buildings had no factor, which often means nobody is clearly managing the common close and stair. Scottish Government analysis puts the chance of a fire death per incident at 2.1% in tenements against 3.5% in purpose-built low-rise flats, but in a tenement the shared stair is still the only way out for every flat above the fire.',
      'Edinburgh is a city of flats: 56% of residents live in one, against 28% across Scotland, and 23% of households rent privately. Glasgow built more than 230 multi-storey blocks between 1955 and 1975; some, such as the Wyndford towers in Maryhill, are being demolished. Under the Housing (Cladding Remediation) (Scotland) Act 2024, flatted buildings of 11 metres and over with cladding, built or refurbished between June 1992 and June 2022, can be assessed and entered on the Cladding Assurance Register.',
    ],
    licensingTitle: 'HMO licensing in Scotland',
    licensing: [
      'Scotland does not have additional or selective licensing. Instead, under Part 5 of the Housing (Scotland) Act 2006, every HMO needs a licence from the local council: any property that is the only or main home of three or more people from three or more families who share a toilet, bathroom or kitchen. That threshold is far lower than England’s mandatory test, so an ordinary three-person flatshare usually counts. Operating an HMO without a licence can lead to a fine of up to £50,000.',
      `The numbers vary widely. At 31 March 2025 Scotland had 15,449 HMO licences in force, and the City of Edinburgh holds 44% of them. In 2024 Edinburgh had 6,325, Glasgow 3,364 and Stirling 763, while Falkirk had just 28, most held by the council, NHS Forth Valley or housing associations. Glasgow City Council is tightening its licence conditions, and ${ext('https://consultationhub.edinburgh.gov.uk/sfc/house-in-multiple-occupation-conditions', 'the City of Edinburgh Council')} has consulted on its own. Each council sets and updates its own conditions and fees, so check with the council that will issue your licence.`,
    ],
    lawTitle: 'The Fire (Scotland) Act 2005 and duty holders',
    law: [
      'The Regulatory Reform (Fire Safety) Order 2005 does not apply in Scotland. Duties come from Part 3 of the Fire (Scotland) Act 2005 and the Fire Safety (Scotland) Regulations 2006. Instead of a “responsible person”, Scottish law places duties on the “duty holder”: the employer, or anyone with control of relevant premises, who must carry out a fire safety risk assessment and keep it under review. Licensed HMOs, workplaces, care homes and short-term lets are all relevant premises. A written record is required where there are five or more employees, where the premises are licensed or registered, or where an alterations notice requires it.',
      'The common parts of ordinary blocks of flats and tenements (the close, stair and landings) are excluded from Part 3 by section 78(4) of the Act, so a fire safety risk assessment of them is not a legal requirement. We still recommend one, as Scottish Government guidance does for high-rise domestic blocks, because it gives owners and factors a clear list of what needs fixing. SFRS enforces fire safety independently of council licensing.',
    ],
    enforcer: { name: 'Scottish Fire and Rescue Service', url: 'https://www.firescotland.gov.uk/' },
    faqs: [
      {
        q: 'Is a fire risk assessment in Scotland the same as in England?',
        a: 'No. Scotland uses the Fire (Scotland) Act 2005 and the Fire Safety (Scotland) Regulations 2006, and the duty is called a fire safety risk assessment. It is enforced by the Scottish Fire and Rescue Service, and unlike in England and Wales a written record is only required in certain cases.',
      },
      {
        q: 'Which fire service enforces fire safety in Glasgow?',
        a: 'The Scottish Fire and Rescue Service, a single national service since 2013. It enforces mainly through fire safety audits and can serve enforcement, prohibition and alterations notices, with appeals to the sheriff.',
      },
      {
        q: 'How many people make an HMO in Edinburgh?',
        a: 'Three or more people from three or more families who share a toilet, bathroom or kitchen and live there as their only or main home. The test is the same across Scotland, so many Edinburgh and Glasgow flatshares need a licence.',
      },
      {
        q: 'What alarms must a Glasgow tenement flat have?',
        a: 'Since February 2022 every Scottish home needs interlinked smoke alarms in the living room and every hallway and landing, a heat alarm in the kitchen, and a carbon monoxide detector where there is a fixed carbon-fuelled appliance or flue. See our <a href="/services/fire-alarm-servicing-installation">fire alarm servicing</a> page.',
      },
    ],
    sources: [
      { label: 'Fire (Scotland) Act 2005, Part 3 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/asp/2005/5/part/3' },
      { label: 'Fire Safety (Scotland) Regulations 2006 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/ssi/2006/456' },
      { label: 'Scottish Government: practical fire safety guidance for existing high-rise domestic buildings', url: 'https://www.gov.scot/publications/practical-fire-safety-guidance-existing-high-rise-domestic-buildings-updated-march-2021/pages/8/' },
      { label: 'Housing (Scotland) Act 2006, s.125', url: 'https://www.legislation.gov.uk/asp/2006/1/section/125' },
      { label: 'mygov.scot: HMO licence', url: 'https://www.mygov.scot/landlord-hmo-licence' },
      { label: 'Scottish Government: housing statistics 2025, HMOs', url: 'https://www.gov.scot/publications/housing-statistics-2025-key-trends-summary/pages/houses-in-multiple-occupation-hmo/' },
      { label: 'Falkirk Council: report on houses in multiple occupation', url: 'https://www.falkirk.gov.uk/news/council/report-to-executive-on-houses-in-multiple-occupation-hmos' },
      { label: 'Glasgow City Council: plan to safeguard pre-1919 tenements', url: 'https://www.glasgow.gov.uk/article/2877/Plan-to-safeguard-pre-1919-tenements-in-Glasgow' },
      { label: 'City of Edinburgh Council: Census 2022', url: 'https://www.edinburgh.gov.uk/strategy-performance-research/census-2022/4' },
      { label: 'Scottish Government: fire fatalities beyond the dwelling of fire origin', url: 'https://www.gov.scot/publications/fire-fatalities-beyond-dwelling-fire-origin-scotland/pages/7/' },
      { label: 'Scottish Government: tolerable standard guidance on fire and CO detection', url: 'https://www.gov.scot/publications/tolerable-standard-guidance-satisfactory-fire-carbon-monoxide-detection/' },
      { label: 'Scottish Government: cladding remediation', url: 'https://www.gov.scot/policies/building-standards/cladding/' },
    ],
    nearby: ['west-yorkshire', 'greater-manchester'],
  },
];
