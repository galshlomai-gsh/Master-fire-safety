import type { Guide } from './types';

const CTA = (lead: string, text: string) =>
  `<div class="callout"><p><strong>${lead}</strong> ${text} <a href="/quote">Get a free quote</a> or call <a href="tel:+442080662499">020 8066 2499</a>.</p></div>`;

const DISCLAIMER =
  '<p class="disclaimer">This guide is general information, not legal advice. Check the current legislation for your premises, or ask us.</p>';

const c = (n: number) => `<sup><a href="#s${n}">[${n}]</a></sup>`;

export const guides: Guide[] = [
  // ─────────────────────────────────────────────────────────────── 1
  {
    slug: 'do-i-need-a-fire-risk-assessment',
    title: 'Do I Need a Fire Risk Assessment?',
    metaTitle: 'Do I Need a Fire Risk Assessment? UK Guide',
    metaDescription:
      'Find out if the law requires a fire risk assessment for your flats, HMO, holiday let or business in England. Get a free quote today.',
    summary:
      'Who legally needs a fire risk assessment in England: employers, landlords, managing agents, HMOs, blocks of flats and holiday lets.',
    readingMinutes: 7,
    updated: '2026-10-19',
    service: 'fra',
    body: `
<p><strong>Short answer:</strong> in England, almost every premises that is not a single private home needs a fire risk assessment, and since 1 October 2023 it must be written down in full. That includes workplaces, holiday lets, HMOs and the common parts of blocks of flats. Scotland and Wales have their own rules, summarised briefly at the end.</p>

<h2>The legal test in England</h2>
<p>The Regulatory Reform (Fire Safety) Order 2005, usually called the Fire Safety Order or FSO, applies in England and Wales${c(1)}. Home Office guidance says it applies to “virtually all premises” other than single private dwellings such as houses, bungalows and individual flats${c(2)}. Where the Order applies, the responsible person must make a “suitable and sufficient” assessment of the fire risks under article 9${c(3)}.</p>
<p>So there are two questions to answer. Is your building covered? And are you the responsible person for it?</p>

<h2>Are you the responsible person?</h2>
<p>Article 3 of the Order sets out who the responsible person is${c(1)}:</p>
<ul>
  <li>in a workplace, the employer, if the workplace is to any extent under their control;</li>
  <li>in other premises, the person who has control of the premises in connection with a trade, business or other undertaking (profit-making or not);</li>
  <li>failing that, the owner.</li>
</ul>
<p>In practice that usually means the business owner, the landlord or managing agent of an HMO, the freeholder, residents’ management company or right to manage company of a block of flats, or the owner of a holiday let. A building can have more than one responsible person, for example a shop on the ground floor with flats above. Since October 2023, responsible persons who share a building must co-operate and share information${c(4)}.</p>
<p>You can pay someone to carry out the assessment, but GOV.UK is clear that you stay legally responsible for it${c(5)}.</p>

<h2>Which premises need one?</h2>
<table>
  <thead><tr><th>Premises</th><th>Fire risk assessment under the FSO?</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Offices, shops, factories, warehouses</td><td>Yes</td><td>The employer or person in control is the responsible person.</td></tr>
    <tr><td>Pubs, restaurants, hotels, B&amp;Bs</td><td>Yes</td><td>Sleeping accommodation carries extra risk.</td></tr>
    <tr><td>Self-catering holiday lets</td><td>Yes</td><td>The person letting it must carry out the assessment${c(6)}.</td></tr>
    <tr><td>Blocks of flats (two or more dwellings)</td><td>Yes, for the parts outside the flats</td><td>Common parts, structure, external walls and flat entrance doors${c(7)}.</td></tr>
    <tr><td>HMOs</td><td>Yes, for the common parts</td><td>See the note on shared houses below.</td></tr>
    <tr><td>A single house or flat let to one household</td><td>No</td><td>Housing law still applies (see below).</td></tr>
    <tr><td>Your own home</td><td>No</td><td>Single private dwellings are outside the Order${c(2)}.</td></tr>
  </tbody>
</table>

<h2>Landlords: single lets, HMOs and blocks</h2>
<h3>A house or flat let to one household</h3>
<p>The Fire Safety Order does not apply inside a single private dwelling${c(2)}. That does not mean there are no fire rules. In England, private and social landlords must fit a smoke alarm on every storey with living accommodation and a carbon monoxide alarm in any room with a fixed combustion appliance (other than a gas cooker), and councils can impose penalties of up to £5,000${c(8)}. If the flat sits in a block, the block’s responsible person still has duties for the common parts, the structure and the front door of your flat${c(7)}.</p>
<h3>HMOs</h3>
<p>Home Office guidance treats the common parts of HMOs, such as shared corridors and stairways, as covered by the Order${c(2)}. For bedsit-style HMOs with separate tenancies, plan on needing an assessment. For a shared house let to one group on a single tenancy, councils and fire services do not all take the same view, so ask before assuming you are exempt. Councils also apply housing law to HMOs through licensing and management rules, which is why many HMO landlords are asked for an assessment as a licence condition. Our <a href="/sectors/landlords-hmos">landlords and HMOs page</a> covers this in more detail.</p>
<h3>Blocks of flats</h3>
<p>The Fire Safety Act 2021 made it clear that, in any building with two or more sets of domestic premises, the Order covers the structure, the external walls (including windows, balconies and cladding) and all doors between flats and the common parts, such as flat entrance doors${c(7)}. It still does not reach inside the individual flats${c(2)}. If you manage a block, see our <a href="/sectors/blocks-of-flats">blocks of flats page</a> and, for buildings in England, our guide to the Fire Safety (England) Regulations 2022.</p>

<h2>Holiday lets and small paid accommodation</h2>
<p>Self-catering holiday lets are covered by the Fire Safety Order, so the person letting them must carry out a fire risk assessment${c(6)}. The government booklet for small paying guest accommodation is aimed at premises on the ground floor, or ground and first floor, with no more than 10 guests and no more than four bedrooms on the first floor${c(9)}. For anything larger or more complex, GOV.UK points to the fuller sleeping accommodation guide${c(6)}.</p>

<h2>It has to be written down</h2>
<p>Before October 2023, a written record was only needed in some cases, such as where five or more people were employed. Since 1 October 2023, every responsible person in England must make a record of the assessment, and it must cover all the findings, not just the “significant” ones${c(4)}. The record must also identify who carried out the assessment, meaning the name of the individual and/or organisation${c(4)}. A verbal “we walked round and it looked fine” no longer meets the law.</p>

${CTA('Not sure if your building is covered?', 'Tell us the address, what it is used for and who lives or works there, and we will tell you plainly whether you need an assessment and what it should cover.')}

<h2>Scotland and Wales</h2>
<p>This guide is written for premises in England. The rules differ elsewhere. In Scotland the Fire Safety Order does not apply: duties come from Part 3 of the Fire (Scotland) Act 2005 and the Fire Safety (Scotland) Regulations 2006${c(11)}. They cover non-domestic premises, licensed HMOs and care homes, but exclude the common parts of ordinary blocks of flats${c(12)}, although Scottish Government guidance recommends an assessment for high-rise domestic blocks${c(13)}. A written record is only required in some cases${c(14)}, and short-term let hosts have their own duties${c(15)}. In Wales the Fire Safety Order still applies for now, including the October 2023 recording duty${c(10)}, but the Building Safety (Wales) Act 2026 will move multi-occupied residential buildings and many HMOs to a new regime once its fire safety provisions are in force${c(16)}.</p>

<h2>What happens if you don’t have one?</h2>
<p>The local fire and rescue authority enforces the Order. It can inspect, serve notices requiring improvements and, where the risk is serious, restrict or prohibit use of the premises${c(17)}. Failing to comply is a criminal offence: on conviction in the Crown Court the penalty can be an unlimited fine and up to two years’ imprisonment, and the magistrates’ court can also impose an unlimited fine${c(17)}. Insurers, lenders and councils often ask to see an assessment too. If you have already had a letter, read our guide to <a href="/guides/council-and-insurer-fire-safety-letters">council and insurer fire safety letters</a>.</p>

<h2>Who should carry it out?</h2>
<p>You can carry out the assessment yourself if you have the knowledge and time. If not, you should appoint a competent person, and GOV.UK recommends choosing someone with third-party certification${c(5)}. The government has consulted on making certification of fire risk assessors compulsory, but that is not law yet. For what affects the price, see our guide to <a href="/guides/fire-risk-assessment-cost">fire risk assessment costs</a>, or go straight to our <a href="/services/fire-risk-assessments">fire risk assessment service</a>.</p>

${DISCLAIMER}
`,
    faqs: [
      { q: 'I only let one flat in a block. Do I need my own fire risk assessment?', a: 'Not for the inside of your flat under the Fire Safety Order. The freeholder or managing agent is usually responsible for the common parts, structure and flat entrance doors. You still have smoke and carbon monoxide alarm duties as a landlord in England.' },
      { q: 'Does a sole trader with no employees need one?', a: 'Yes, if you control non-domestic premises such as a shop or salon. The duty is based on control of the premises, not on how many staff you employ, and since October 2023 the assessment must be written down.' },
      { q: 'Can I use a free online template?', a: 'A template can help you structure your thinking, but the assessment has to be “suitable and sufficient” for your actual building. A filled-in form that does not reflect what is on site will not meet the law. If in doubt, <a href="/quote">ask us for a quote</a>.' },
      { q: 'Does a new-build block need a fire risk assessment straight away?', a: 'Yes. Once the building is occupied, the responsible person needs an assessment of the common parts. In England, building regulations require the person carrying out the work to hand over fire safety information to the responsible person, which makes the first assessment quicker.' },
      { q: 'Is a fire risk assessment the same as a fire safety certificate?', a: 'No. The Fire Safety Order is based on self-assessment: the duty is on the responsible person to assess the risk, keep a written record and act on the findings. There is no certificate that replaces that duty.' },
    ],
    sources: [
      { label: 'Regulatory Reform (Fire Safety) Order 2005 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2005/1541/contents' },
      { label: 'Home Office: A guide for persons with duties under fire safety legislation (GOV.UK)', url: 'https://www.gov.uk/government/publications/people-with-duties-under-fire-safety-laws/a-guide-for-persons-with-duties-under-fire-safety-legislation-accessible' },
      { label: 'Fire Safety Order, article 9: risk assessment (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2005/1541/article/9' },
      { label: 'Fire safety responsibilities under section 156 of the Building Safety Act 2022 (GOV.UK)', url: 'https://www.gov.uk/government/publications/check-your-fire-safety-responsibilities-under-section-156-of-the-building-safety-act-2022/fire-safety-responsibilities-under-section-156-of-the-building-safety-act-2022' },
      { label: 'Workplace fire safety: fire risk assessments (GOV.UK)', url: 'https://www.gov.uk/workplace-fire-safety-your-responsibilities/fire-risk-assessments' },
      { label: 'Letting out a self-catering holiday home in England: rules and regulations (GOV.UK)', url: 'https://www.gov.uk/guidance/letting-out-a-self-catering-holiday-home-in-england-rules-and-regulations' },
      { label: 'Fire Safety Act 2021, section 1 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/ukpga/2021/24/section/1' },
      { label: 'Smoke and Carbon Monoxide Alarm (England) Regulations 2015: Q&A booklet (GOV.UK)', url: 'https://www.gov.uk/government/publications/smoke-and-carbon-monoxide-alarms-explanatory-booklet-for-landlords/the-smoke-and-carbon-monoxide-alarm-england-regulations-2015-qa-booklet-for-the-private-rented-sector-landlords-and-tenants' },
      { label: 'Making your small paying guest accommodation safe from fire (GOV.UK)', url: 'https://www.gov.uk/government/publications/making-your-small-paying-guest-accommodation-safe-from-fire/making-your-small-paying-guest-accommodation-safe-from-fire-accessible' },
      { label: 'Welsh Government: fire safety responsibilities under section 156 of the Building Safety Act 2022', url: 'https://www.gov.wales/fire-safety-responsibilities-under-section-156-building-safety-act-2022-guidance-html' },
      { label: 'Fire (Scotland) Act 2005, Part 3 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/asp/2005/5/part/3' },
      { label: 'Scottish Government: practical fire safety guidance for existing specialised housing (relevant premises)', url: 'https://www.gov.scot/publications/practical-fire-safety-guidance-existing-specialised-housing-similar-premises-2/pages/6/' },
      { label: 'Scottish Government: practical fire safety guidance for existing high rise domestic buildings', url: 'https://www.gov.scot/publications/practical-fire-safety-guidance-existing-high-rise-domestic-buildings-updated-march-2021/pages/8/' },
      { label: 'Scottish Fire and Rescue Service: fire risk assessment', url: 'https://www.firescotland.gov.uk/businesses-and-landlords/fire-risk-assessment/' },
      { label: 'Scottish Fire and Rescue Service: short-term lets', url: 'https://www.firescotland.gov.uk/businesses-and-landlords/short-term-lets/' },
      { label: 'Welsh Government: Building Safety (Wales) Act 2026', url: 'https://www.gov.wales/building-safety-wales-act-2026' },
      { label: 'Fire Safety Order: enforcement and sanctions for non-compliance (GOV.UK)', url: 'https://www.gov.uk/government/publications/fire-safety-order-enforcement-and-sanctions-for-non-compliance/enforcement-and-sanctions-for-non-compliance-accessible' },
    ],
    related: ['fire-risk-assessment-cost', 'what-happens-during-a-fire-risk-assessment', 'how-often-should-a-fire-risk-assessment-be-reviewed'],
  },

  // ─────────────────────────────────────────────────────────────── 2
  {
    slug: 'how-long-does-a-fire-risk-assessment-take',
    title: 'How Long Does a Fire Risk Assessment Take?',
    metaTitle: 'How Long Does a Fire Risk Assessment Take?',
    metaDescription:
      'Typical on-site times for fire risk assessments by property type, what slows a visit down and how to speed it up. Get a free quote with timings confirmed.',
    summary:
      'Typical on-site times for a fire risk assessment by property type, what makes a visit longer, and how to prepare so it runs quickly.',
    readingMinutes: 5,
    updated: '2026-10-19',
    service: 'fra',
    body: `
<p><strong>Short answer:</strong> there is no legal or official duration for a fire risk assessment. A small single-unit premises is often under an hour on site; a larger or more complex building takes longer, sometimes a full day or more. The written report is prepared after the visit, and we confirm timings when we quote.</p>

<h2>Why there is no fixed time</h2>
<p>The law does not set a duration. It requires the responsible person to make a “suitable and sufficient” assessment of the fire risks${c(1)}. The GOV.UK five-step checklist describes what the assessment has to do: identify fire hazards, identify people at risk, evaluate and reduce the risk, record and plan, and review${c(2)}. How long that takes depends on how much building there is to look at, how it is used and how easy it is to get round.</p>
<p>So when someone quotes you a time without asking about your building, treat it as a guess.</p>

<h2>Typical site time by property type</h2>
<p>The ranges below are typical from practice. They are not guaranteed and they are not set by any regulation. Your quote will give a time for your building.</p>
<table>
  <thead><tr><th>Property</th><th>Typical time on site</th></tr></thead>
  <tbody>
    <tr><td>Small shop, café or office suite on one floor</td><td>Often under an hour</td></tr>
    <tr><td>Small HMO in a house (two or three storeys)</td><td>Typically 1 to 2 hours</td></tr>
    <tr><td>Small block of flats, common parts only (up to three storeys)</td><td>Typically 1 to 2 hours</td></tr>
    <tr><td>Medium block of flats, larger HMO or multi-floor office</td><td>Typically 2 to 4 hours</td></tr>
    <tr><td>High-rise block, care home, hotel, school, warehouse or mixed-use building</td><td>Typically half a day to a full day or more, sometimes over more than one visit</td></tr>
  </tbody>
</table>
<p>These figures assume reasonable access and a building in normal use. They do not include travel or report writing.</p>

<h2>Then comes the report</h2>
<p>The site visit is only part of the job. Since 1 October 2023, the written record has to cover all the findings, not just the significant ones, and it must identify who carried out the assessment${c(3)}. A proper report sets out what was found, who is at risk, what is already in place and a prioritised list of actions. Writing that up carefully takes time after the visit. We give you a delivery date when we quote, and if you are working to a deadline from a council, fire service or insurer, tell us at the start.</p>

<h2>What makes an assessment take longer</h2>
<ul>
  <li><strong>Size and layout.</strong> More floors, rooms, stairs and plant areas means more walking and more to record.</li>
  <li><strong>Use and sleeping risk.</strong> Buildings where people sleep, such as HMOs, hotels and care homes, need closer attention to escape routes, detection and night-time arrangements.</li>
  <li><strong>Who is at risk.</strong> Residents or staff who would need help to escape, lone workers or members of the public all add questions.</li>
  <li><strong>Fire safety systems.</strong> A building with a fire alarm, emergency lighting, smoke ventilation, sprinklers and a firefighting lift has more to check than one with smoke alarms and a single stair.</li>
  <li><strong>Blocks of flats.</strong> The assessment covers the structure, external walls and flat entrance doors as well as the common parts. Checking the structure means a visual inspection, with intrusive inspection only if the assessor has serious concerns${c(4)}. Looking at a sample of flat entrance doors needs access to the landings and, sometimes, co-operation from residents.</li>
  <li><strong>Access problems.</strong> Locked plant rooms, riser cupboards, roof access or bin stores with no key on site are the most common cause of delay.</li>
  <li><strong>Missing records.</strong> If nobody can say when the alarm was last serviced, the assessor has to record that as a gap and may need to follow it up.</li>
  <li><strong>First assessment or review.</strong> A first assessment, or one replacing a poor previous report, takes longer than reviewing a sound, recent one.</li>
</ul>

${CTA('Working to a deadline?', 'Send us the address, the type of building and the date you need the report by, and we will give you a fixed quote with the site time and report date in writing.')}

<h2>How to make the visit quicker</h2>
<p>Most of the time saved comes from preparation. Before the visit, gather what you have:</p>
<ol>
  <li>The previous fire risk assessment and any action plan, with notes on what has been done.</li>
  <li>Fire alarm test logs and service records. If you need a service, see our <a href="/services/fire-alarm-servicing-installation">fire alarm servicing</a> page.</li>
  <li>Emergency lighting test logs and service certificates (<a href="/services/emergency-lighting-servicing-installation">emergency lighting servicing</a>).</li>
  <li>Fire door check records, and smoke ventilation or AOV service records if the building has them.</li>
  <li>Floor plans, if you have them, and any fire safety information handed over by the developer.</li>
  <li>The electrical installation report and any records of contractor work, such as hot works.</li>
  <li>Names and contact details of anyone else with responsibility for the building, such as a commercial tenant.</li>
</ol>
<p>On the day, make sure keys are available for every area, warn residents or staff that someone will be walking round, and have someone available for a few minutes at the start and end to answer questions. In blocks of flats, letting residents know in advance makes sampling flat entrance doors much easier.</p>

<h2>Be wary of very quick assessments</h2>
<p>A ten-minute walk-through of a block of flats, or an assessment done entirely from photos and a questionnaire, is unlikely to be “suitable and sufficient” for anything but the simplest premises${c(1)}. If the report later turns out to be inadequate, the responsibility stays with you, not the assessor: GOV.UK is clear that you remain legally responsible even when someone else does the assessment${c(5)}. A realistic time on site is part of what you are paying for. For more on that, read our guide to <a href="/guides/fire-risk-assessment-cost">what a fire risk assessment costs</a>.</p>

<h2>Will it disrupt the building?</h2>
<p>Usually very little. The assessor walks the building, opens doors and cupboards, looks at the alarm panel and fittings, takes photographs and makes notes. The assessment does not involve testing the fire alarm or emergency lighting; the assessor looks at the records of those tests instead. Residents and staff can carry on as normal. To see the visit step by step, read <a href="/guides/what-happens-during-a-fire-risk-assessment">what happens during a fire risk assessment</a>, or book through our <a href="/services/fire-risk-assessments">fire risk assessment service</a>.</p>

${DISCLAIMER}
`,
    faqs: [
      { q: 'Do I need to be there for the whole visit?', a: 'No. Someone should let the assessor in, hand over keys and records, and be available for a short conversation at the start or end. The walk-round itself does not need you.' },
      { q: 'Can the assessment be done out of hours?', a: 'Often, yes, especially for offices and shops. Some things, such as how the building runs when occupied, are easier to judge during normal use, so we agree the best time when we quote.' },
      { q: 'Does a review take as long as the first assessment?', a: 'Usually less, as long as the previous assessment was sound and nothing major has changed. If the building, its use or the law has changed significantly, a review can take almost as long as a fresh assessment.' },
      { q: 'Will you need to go inside individual flats?', a: 'Not for an assessment of the common parts. We look at flat entrance doors from the landing. Going inside flats is only needed if that is part of the agreed scope.' },
    ],
    sources: [
      { label: 'Fire Safety Order, article 9: risk assessment (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2005/1541/article/9' },
      { label: 'Fire safety risk assessment: 5-step checklist (GOV.UK)', url: 'https://www.gov.uk/government/publications/fire-safety-risk-assessment-5-step-checklist/fire-safety-risk-assessment-5-step-checklist-accessible' },
      { label: 'Fire safety responsibilities under section 156 of the Building Safety Act 2022 (GOV.UK)', url: 'https://www.gov.uk/government/publications/check-your-fire-safety-responsibilities-under-section-156-of-the-building-safety-act-2022/fire-safety-responsibilities-under-section-156-of-the-building-safety-act-2022' },
      { label: 'Fire Safety Act 2021 factsheet: commencement of sections 1 and 3 (GOV.UK)', url: 'https://www.gov.uk/government/publications/fire-safety-act-2021/fire-safety-act-2021-factscheet-information-on-commencement-of-sections-1-and-3-of-the-fire-safety-act' },
      { label: 'Workplace fire safety: fire risk assessments (GOV.UK)', url: 'https://www.gov.uk/workplace-fire-safety-your-responsibilities/fire-risk-assessments' },
    ],
    related: ['what-happens-during-a-fire-risk-assessment', 'fire-risk-assessment-cost', 'do-i-need-a-fire-risk-assessment'],
  },

  // ─────────────────────────────────────────────────────────────── 3
  {
    slug: 'fire-risk-assessment-cost',
    title: 'How Much Does a Fire Risk Assessment Cost?',
    metaTitle: 'Fire Risk Assessment Cost: What Affects the Price',
    metaDescription:
      'What drives the cost of a fire risk assessment, why cheap template reports can cost you more, and how to choose a competent assessor. Get a fixed quote.',
    summary:
      'There is no official price for a fire risk assessment. Here is what drives the cost, the risks of cheap template reports and how to compare quotes.',
    readingMinutes: 5,
    updated: '2026-10-19',
    service: 'fra',
    body: `
<p><strong>Short answer:</strong> there is no official or fixed price for a fire risk assessment. The cost depends mainly on the size and layout of the building, how it is used, whether people sleep there and how much needs to be inspected. The reliable way to compare is a fixed written quote based on your actual building.</p>

<h2>Why there is no standard price</h2>
<p>The law requires a “suitable and sufficient” assessment${c(1)}. It does not set a price, a format or a time on site. We have not found any government-published price list for fire risk assessments in the UK. Figures you see online are commercial prices from individual firms, usually for a narrowly defined building, and they rarely say what is included.</p>
<p>Two quotes for the “same” assessment can differ because one includes a proper walk-round of every floor, a sample of flat entrance doors and a full written action plan, and the other does not. Ask what you are getting before you compare the number.</p>

<h2>What drives the cost</h2>
<table>
  <thead><tr><th>Factor</th><th>Why it affects the price</th></tr></thead>
  <tbody>
    <tr><td>Size and number of floors</td><td>More area and more storeys mean more time on site and more to record.</td></tr>
    <tr><td>Use of the building</td><td>An office is simpler than a building where people sleep, such as an HMO, hotel or care home.</td></tr>
    <tr><td>Who is at risk</td><td>Residents who would need help to escape, members of the public or lone workers add questions and recommendations.</td></tr>
    <tr><td>Fire safety systems</td><td>Alarm systems, emergency lighting, smoke ventilation and firefighting lifts all need their arrangements and records checked.</td></tr>
    <tr><td>Type of assessment for flats</td><td>Common parts only, or common parts and flats, non-destructive or destructive (see below).</td></tr>
    <tr><td>Access and records</td><td>Missing keys, locked areas or no maintenance records mean extra time or a second visit.</td></tr>
    <tr><td>First assessment or review</td><td>Reviewing a sound, recent assessment is usually quicker than starting from scratch.</td></tr>
    <tr><td>Deadline</td><td>Tell us if a council, fire service, lender or insurer has set a date so we can plan around it.</td></tr>
  </tbody>
</table>

<h2>Types 1 to 4 for blocks of flats</h2>
<p>For purpose-built blocks of flats, assessors often use the four types of assessment described in the 2011 Local Government Group guide, “Fire safety in purpose-built blocks of flats”${c(2)}:</p>
<ul>
  <li><strong>Type 1:</strong> common parts only, non-destructive. The usual starting point for most purpose-built blocks.</li>
  <li><strong>Type 2:</strong> common parts only, with some destructive inspection on a sampling basis, for example opening up to check compartmentation.</li>
  <li><strong>Type 3:</strong> common parts and the inside of flats, non-destructive.</li>
  <li><strong>Type 4:</strong> common parts and flats, with destructive inspection. Normally only used in limited circumstances, such as where serious problems are suspected.</li>
</ul>
<p>GOV.UK still hosts that guide for fire safety professionals as an interim measure but says it is no longer fully up to date and a revised version has been commissioned${c(2)}. Separately, Home Office guidance on the Fire Safety Act 2021 says checking the structure means a visual inspection, with intrusive inspection only where the assessor has serious concerns${c(3)}. Destructive types need contractors, access to flats and making good afterwards, so they cost considerably more. A good assessor will recommend one only if there is a reason.</p>

<h2>What you should get for the money</h2>
<ul>
  <li>An on-site inspection of all the areas in scope, not just a questionnaire.</li>
  <li>A written record of all the findings, as the law has required since 1 October 2023${c(4)}.</li>
  <li>The name of the person and/or organisation who carried out the assessment, which the record must now include${c(4)}.</li>
  <li>A prioritised action plan you can work through and hand to contractors.</li>
  <li>A clear statement of scope: what was inspected, what was not, and why.</li>
</ul>
<p>For housing, BSI published BS 9792:2025, a code of practice for fire risk assessment of housing, which replaced PAS 79-2:2020${c(5)}. You can ask an assessor which method they work to.</p>

${CTA('Want a price you can rely on?', 'Send us the address, the type of building and anything you know about the fire safety systems, and we will give you a fixed written quote with the scope set out.')}

<h2>The problem with cheap template assessments</h2>
<p>Some low-cost assessments are produced remotely from photos or a questionnaire, or are a standard template with the address changed. The Scottish Government has warned short-term let hosts to be wary of suppliers selling assessments, such as fire risk or legionella assessments, that are “not valid or overpriced”${c(6)}. A report that does not reflect your building is unlikely to be suitable and sufficient, and you stay legally responsible even when someone else does the work${c(7)}.</p>
<p>The real cost of a poor assessment usually appears later: an enforcement notice, a council asking for a fresh report, an insurer querying a claim, or works ordered that a proper assessment would have scoped correctly the first time. Failing to comply with the Fire Safety Order can lead to an unlimited fine and, in serious cases, up to two years’ imprisonment${c(8)}.</p>

<h2>Competence: what the law says now</h2>
<p>Under article 18 of the Fire Safety Order, the responsible person must appoint one or more competent persons to help them, and GOV.UK recommends choosing an assessor with third-party certification${c(7)}${c(9)}. A specific duty to use a competent assessor (article 9A) was added by the Building Safety Act 2022, but it has not been brought into force in England${c(10)}. The government consulted from March to June 2026 on making certification compulsory, so that assessors’ competence is independently checked by a UKAS-accredited body${c(11)}. Until that becomes law, it is up to you to check.</p>
<p>Useful reference points when choosing an assessor:</p>
<ul>
  <li>The Fire Sector Federation’s “A guide to choosing a competent fire risk assessor”, which explains company certification, person certification and professional registration${c(12)}.</li>
  <li>BS 8674:2025, a voluntary BSI code of practice setting out a competence framework for individual fire risk assessors at three levels by building complexity${c(13)}.</li>
</ul>
<p>Our own assessors are members of the Institute of Fire Safety Managers (IFSM), and we use the BS 8674:2025 framework to match assessor competence to the building. Whoever you choose, ask: what experience do you have with this type of building, which method do you work to, what will the report include, and what will you not inspect?</p>

<h2>How to get an accurate quote</h2>
<p>The more we know, the firmer the quote. Useful details are the address, what the building is used for, the number of floors and flats or units, rough floor area, which fire safety systems are installed, the date of the last assessment and any deadline you are working to. If a fire door survey, alarm service or emergency lighting test is also due, we can quote for <a href="/services/fire-door-inspections">fire door inspections</a> and other services at the same time. Request a quote through our <a href="/services/fire-risk-assessments">fire risk assessment</a> page or check <a href="/areas">the areas we cover</a>. For landlords, see also <a href="/sectors/landlords-hmos">landlords and HMOs</a>.</p>

${DISCLAIMER}
`,
    faqs: [
      { q: 'Is the fire risk assessment price a one-off cost?', a: 'The assessment itself is a one-off charge, but it needs to be reviewed regularly and whenever something significant changes. A review of a sound, recent assessment is usually quicker than a first assessment.' },
      { q: 'Does the quote include fixing the problems found?', a: 'No. The assessment identifies what needs doing and prioritises it. Remedial work, such as fire door repairs or alarm upgrades, is quoted separately. We can undertake or arrange it if you wish, but you are not obliged to use us and can use any competent contractor.' },
      { q: 'Can a managing agent recharge the cost to leaseholders?', a: 'That depends on the terms of the leases and the service charge rules, not on fire safety law. Check the lease or take advice before assuming it can or cannot be recharged.' },
      { q: 'Why do quotes vary so much between firms?', a: 'Usually because the scope is different: time on site, how many areas are inspected, whether flat entrance doors are sampled and how detailed the report is. Ask each firm to set out exactly what is included.' },
    ],
    sources: [
      { label: 'Fire Safety Order, article 9: risk assessment (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2005/1541/article/9' },
      { label: 'Fire safety in purpose-built blocks of flats (GOV.UK)', url: 'https://www.gov.uk/government/publications/fire-safety-in-purpose-built-blocks-of-flats' },
      { label: 'Fire Safety Act 2021 factsheet: commencement of sections 1 and 3 (GOV.UK)', url: 'https://www.gov.uk/government/publications/fire-safety-act-2021/fire-safety-act-2021-factscheet-information-on-commencement-of-sections-1-and-3-of-the-fire-safety-act' },
      { label: 'Fire safety responsibilities under section 156 of the Building Safety Act 2022 (GOV.UK)', url: 'https://www.gov.uk/government/publications/check-your-fire-safety-responsibilities-under-section-156-of-the-building-safety-act-2022/fire-safety-responsibilities-under-section-156-of-the-building-safety-act-2022' },
      { label: 'BSI: BS 9792:2025 Fire risk assessment. Housing. Code of practice', url: 'https://knowledge.bsigroup.com/products/fire-risk-assessment-housing-code-of-practice' },
      { label: 'Scottish Government: Short-term lets business and regulatory impact assessment, consumer assessment', url: 'https://www.gov.scot/publications/short-term-lets-business-regulatory-impact-assessment/pages/10/' },
      { label: 'Workplace fire safety: fire risk assessments (GOV.UK)', url: 'https://www.gov.uk/workplace-fire-safety-your-responsibilities/fire-risk-assessments' },
      { label: 'Fire Safety Order: enforcement and sanctions for non-compliance (GOV.UK)', url: 'https://www.gov.uk/government/publications/fire-safety-order-enforcement-and-sanctions-for-non-compliance/enforcement-and-sanctions-for-non-compliance-accessible' },
      { label: 'Check your fire safety responsibilities under the Fire Safety Order (GOV.UK)', url: 'https://www.gov.uk/guidance/check-your-fire-safety-responsibilities-under-the-fire-safety-order' },
      { label: 'Building Safety Act 2022, section 156 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/ukpga/2022/30/section/156' },
      { label: 'MHCLG consultation: Fire risk assessors profession (GOV.UK)', url: 'https://www.gov.uk/government/consultations/fire-risk-assessors-profession/fire-risk-assessors-profession' },
      { label: 'Fire Sector Federation: A guide to choosing a competent fire risk assessor (hosted by London Fire Brigade)', url: 'https://www.london-fire.gov.uk/media/5496/fsf_guide_october_20.pdf' },
      { label: 'BSI: BS 8674:2025 Framework for competence of individual fire risk assessors', url: 'https://knowledge.bsigroup.com/products/built-environment-framework-for-competence-of-individual-fire-risk-assessors-code-of-practice' },
    ],
    related: ['do-i-need-a-fire-risk-assessment', 'how-long-does-a-fire-risk-assessment-take', 'what-happens-during-a-fire-risk-assessment'],
  },
  // ─────────────────────────────────────────────────────────────── 4
  {
    slug: 'how-often-should-a-fire-risk-assessment-be-reviewed',
    title: 'How Often Should a Fire Risk Assessment Be Reviewed?',
    metaTitle: 'How Often Should a Fire Risk Assessment Be Reviewed?',
    metaDescription:
      'What the law says about reviewing a fire risk assessment, the changes that trigger a review and a sensible schedule for your building. Book a review today.',
    summary:
      'The law says “regularly” and after significant change, not “annually”. What triggers a review, and a practical schedule for flats, HMOs and workplaces.',
    readingMinutes: 5,
    updated: '2026-10-19',
    service: 'fra',
    body: `
<p><strong>Short answer:</strong> the law says a fire risk assessment must be reviewed regularly to keep it up to date, and straight away if there is reason to think it is no longer valid or there has been a significant change. No statute sets a fixed annual interval. In practice, many assessors, us included, suggest a formal review at least once a year for most premises, and more often where the risk is higher.</p>

<h2>What the law actually says</h2>
<p>In England, article 9(3) of the Fire Safety Order requires the responsible person to review the assessment “regularly so as to keep it up to date”, and in particular if:${c(1)}</p>
<ul>
  <li>there is reason to suspect that it is no longer valid; or</li>
  <li>there has been a significant change in the matters to which it relates.</li>
</ul>
<p>GOV.UK guidance uses the same language: review it regularly and if there are any significant changes${c(2)}${c(3)}. Since 1 October 2023, the responsible person must also make a record of each assessment or review${c(4)}. A review that happened only in someone’s head does not count.</p>

<h2>Is there a legal requirement to review every year?</h2>
<p>No. The Fire Safety Order does not say “annually”, and neither does the GOV.UK guidance${c(1)}${c(3)}. If someone tells you the law requires a new fire risk assessment every 12 months, ask them which regulation says so.</p>
<p>The confusion often comes from the Fire Safety (England) Regulations 2022, which do set fixed intervals, but for checks, not for the fire risk assessment:</p>
<ul>
  <li>In buildings with a top storey above 11 metres, communal fire doors must be checked at least every three months, and flat entrance doors (on a best endeavours basis) at least every 12 months${c(6)}.</li>
  <li>In high-rise residential buildings (at least 18 metres or seven storeys), firefighting lifts and essential firefighting equipment must be checked monthly${c(7)}, and the secure information box at least once a year${c(5)}.</li>
</ul>
<p>Those checks feed into the assessment, but they are not a review of it. Our <a href="/guides/fire-safety-england-regulations-2022">guide to the 2022 regulations</a> covers them in full.</p>

<h2>Changes that mean you should review now</h2>
<p>These are the common triggers for a review, whatever date the last one was done:</p>
<ul>
  <li>Building work, alterations or refurbishment, especially anything affecting escape routes, walls, ceilings or doors.</li>
  <li>A change of use, such as offices converted to flats, a house converted to an HMO, or a shop adding sleeping accommodation upstairs.</li>
  <li>A change in who uses the building: more occupants, residents or staff who would need help to escape, or night-time occupation.</li>
  <li>A fire, a near miss or a pattern of false alarms.</li>
  <li>A letter, audit or notice from the fire service, council, insurer or lender.</li>
  <li>New or upgraded fire safety systems, or systems that keep failing their tests.</li>
  <li>Changes in the law. When the Fire Safety Act 2021 brought the structure, external walls and flat entrance doors of blocks of flats into scope, responsible persons had to check their assessments covered them${c(8)}.</li>
  <li>A new responsible person or managing agent taking over the building.</li>
  <li>Significant actions from the last assessment being completed, so the risk rating can be updated.</li>
</ul>

<h2>Review or new assessment?</h2>
<p>A review checks whether the existing assessment is still valid: the assessor walks the building again, checks what has changed, checks progress on the action plan and updates the findings. A new assessment starts from scratch. You will usually need a new one if the building has been substantially altered, its use has changed, or the previous assessment was thin, out of date or did not cover the areas the law now requires.</p>

${CTA('Is your assessment more than a year old, or has something changed?', 'Send us your current report and we will tell you whether a review is enough or a fresh assessment makes more sense.')}

<h2>A practical review schedule</h2>
<p>The table below reflects common practice, not legal intervals. The legal requirements in the right-hand column apply in England.</p>
<table>
  <thead><tr><th>Premises</th><th>Common practice for a formal review</th><th>Fixed legal checks alongside it (England)</th></tr></thead>
  <tbody>
    <tr><td>Small, low-risk office or shop</td><td>At least yearly, plus after any change</td><td>None set by the 2022 regulations</td></tr>
    <tr><td>HMO or block of flats up to 11 metres</td><td>At least yearly, plus after any change</td><td>Fire door information to residents every 12 months${c(6)}</td></tr>
    <tr><td>Block of flats over 11 metres</td><td>At least yearly, plus after any change</td><td>Communal fire doors every 3 months, flat entrance doors every 12 months (best endeavours)${c(6)}</td></tr>
    <tr><td>High-rise residential building</td><td>At least yearly, often more frequently</td><td>As above, plus monthly lift and equipment checks${c(7)} and an annual secure information box check${c(5)}</td></tr>
    <tr><td>Care homes, hotels and other sleeping accommodation</td><td>At least yearly, often more frequently</td><td>Depends on the building</td></tr>
  </tbody>
</table>
<p>If you need the door checks carried out, see our <a href="/services/fire-door-inspections">fire door inspection service</a>.</p>

<h2>Scotland</h2>
<p>Scotland has its own legislation, but the position on reviews is similar: the Fire Safety (Scotland) Regulations 2006 also require regular review with no fixed interval${c(9)}, and a written record is only required in some cases${c(10)}.</p>

<h2>What a good review includes</h2>
<ul>
  <li>A walk-round of the building, not just a desk check of the old report.</li>
  <li>Progress on every item in the previous action plan, with dates completed.</li>
  <li>A check of maintenance records: fire alarm, emergency lighting, fire doors, smoke ventilation and firefighting equipment. The Fire Safety Order requires these to be kept in efficient working order and good repair where they are needed to protect people${c(11)}.</li>
  <li>Updated findings, actions and risk rating.</li>
  <li>The date of the review and who carried it out, recorded in writing${c(4)}.</li>
</ul>
<p>If your systems need attention, we also offer <a href="/services/fire-alarm-servicing-installation">fire alarm servicing</a> and <a href="/services/aov-smoke-control-servicing">AOV and smoke control servicing</a>. To book a review, go to our <a href="/services/fire-risk-assessments">fire risk assessment</a> page.</p>

${DISCLAIMER}
`,
    faqs: [
      { q: 'Who is allowed to carry out the review?', a: 'The responsible person must make sure it is done. You can do it yourself if you are competent, or appoint someone who is. If the original assessor is no longer available, a different competent assessor can review it.' },
      { q: 'My insurer says the assessment must be annual. Is that the law?', a: 'Not under fire safety legislation. An insurer can make an annual review a condition of your policy, though, and breaching a policy condition can affect cover, so follow it.' },
      { q: 'Does a new tenant moving in count as a significant change?', a: 'Not usually on its own. It can be, if the new occupier changes how the building is used, brings in higher-risk activities or includes people who would need help to escape.' },
      { q: 'What happens to the assessment if I sell the building or change managing agent?', a: 'In England, an outgoing responsible person must pass relevant fire safety information, including the assessment records, to the incoming one. The new responsible person should then check whether a review is needed.' },
    ],
    sources: [
      { label: 'Fire Safety Order, article 9: risk assessment (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2005/1541/article/9' },
      { label: 'Workplace fire safety: fire risk assessments (GOV.UK)', url: 'https://www.gov.uk/workplace-fire-safety-your-responsibilities/fire-risk-assessments' },
      { label: 'Fire safety risk assessment: 5-step checklist (GOV.UK)', url: 'https://www.gov.uk/government/publications/fire-safety-risk-assessment-5-step-checklist/fire-safety-risk-assessment-5-step-checklist-accessible' },
      { label: 'Fire safety responsibilities under section 156 of the Building Safety Act 2022 (GOV.UK)', url: 'https://www.gov.uk/government/publications/check-your-fire-safety-responsibilities-under-section-156-of-the-building-safety-act-2022/fire-safety-responsibilities-under-section-156-of-the-building-safety-act-2022' },
      { label: 'Fire Safety (England) Regulations 2022 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2022/547' },
      { label: 'Fire Safety (England) Regulations 2022: fact sheet, fire doors (regulation 10) (GOV.UK)', url: 'https://www.gov.uk/government/publications/fire-safety-england-regulations-2022/fact-sheet-fire-doors-regulation-10' },
      { label: 'Fire Safety (England) Regulations 2022, regulation 7 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2022/547/regulation/7/made' },
      { label: 'Fire Safety Act 2021 factsheet: commencement of sections 1 and 3 (GOV.UK)', url: 'https://www.gov.uk/government/publications/fire-safety-act-2021/fire-safety-act-2021-factscheet-information-on-commencement-of-sections-1-and-3-of-the-fire-safety-act' },
      { label: 'Fire Safety (Scotland) Regulations 2006 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/ssi/2006/456' },
      { label: 'Scottish Fire and Rescue Service: fire risk assessment', url: 'https://www.firescotland.gov.uk/businesses-and-landlords/fire-risk-assessment/' },
      { label: 'Fire Safety Order, article 17: maintenance (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2005/1541/article/17' },
    ],
    related: ['do-i-need-a-fire-risk-assessment', 'fire-safety-england-regulations-2022', 'what-happens-during-a-fire-risk-assessment'],
  },

  // ─────────────────────────────────────────────────────────────── 5
  {
    slug: 'fire-safety-england-regulations-2022',
    title: 'The Fire Safety (England) Regulations 2022 Explained',
    metaTitle: 'Fire Safety (England) Regulations 2022 Explained',
    metaDescription:
      'Duties for blocks of flats in England by building height: fire door checks, resident information, high-rise rules and 2026 evacuation plans. Get a quote.',
    summary:
      'What the Fire Safety (England) Regulations 2022 require for blocks of flats under 11m, over 11m and over 18m, plus the 2026 evacuation plan rules.',
    readingMinutes: 5,
    updated: '2026-10-19',
    service: 'doors',
    body: `
<p><strong>Short answer:</strong> the Fire Safety (England) Regulations 2022 came into force on 23 January 2023 and apply in England only, to buildings with two or more sets of domestic premises. Every such building needs fire safety instructions and fire door information for residents; buildings over 11 metres need regular fire door checks; and high-rise buildings (18 metres or seven storeys) have extra duties on plans, signage, lifts and information for firefighters.</p>

<h2>Who the regulations apply to</h2>
<p>The regulations were made under article 24 of the Fire Safety Order and apply in England only${c(1)}. They cover buildings containing two or more sets of domestic premises, such as blocks of flats and converted houses, with duties that increase with height${c(1)}${c(2)}. The duties fall on the responsible person, usually the freeholder, residents’ management company, right to manage company or the managing agent acting for them.</p>
<p>They sit on top of the Fire Safety Order, not instead of it. Since the Fire Safety Act 2021, the Order covers the structure, external walls and flat entrance doors of these buildings as well as the common parts${c(3)}, so your fire risk assessment should already be looking at all of them.</p>

<h2>The duties at a glance</h2>
<table>
  <thead><tr><th>Duty</th><th>Regulation</th><th>2+ dwellings</th><th>Top storey over 11m</th><th>High-rise (18m or 7 storeys)</th></tr></thead>
  <tbody>
    <tr><td>Fire safety instructions for residents</td><td>9</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
    <tr><td>Fire door information for residents</td><td>10</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
    <tr><td>Communal fire door checks every 3 months</td><td>10</td><td>No</td><td>Yes</td><td>Yes</td></tr>
    <tr><td>Flat entrance door checks every 12 months (best endeavours)</td><td>10</td><td>No</td><td>Yes</td><td>Yes</td></tr>
    <tr><td>Secure information box</td><td>4</td><td>No</td><td>No</td><td>Yes</td></tr>
    <tr><td>External wall information</td><td>5</td><td>No</td><td>No</td><td>Yes</td></tr>
    <tr><td>Floor plans and building plan</td><td>6</td><td>No</td><td>No</td><td>Yes</td></tr>
    <tr><td>Monthly lift and firefighting equipment checks</td><td>7</td><td>No</td><td>No</td><td>Yes</td></tr>
    <tr><td>Wayfinding signage</td><td>8</td><td>No</td><td>No</td><td>Yes</td></tr>
    <tr><td>Information sent to the fire and rescue service</td><td>11</td><td>No</td><td>No</td><td>Yes</td></tr>
  </tbody>
</table>

<h2>All buildings with two or more dwellings</h2>
<h3>Fire safety instructions (regulation 9)</h3>
<p>Where residents would use common parts to evacuate, the responsible person must display fire safety instructions in a conspicuous place and give them to residents: to new residents as soon as reasonably practicable, to all residents at least every 12 months, and again after any material change${c(1)}${c(4)}.</p>
<h3>Fire door information (regulation 10)</h3>
<p>Residents must be told that fire doors should be kept shut, that they must not tamper with self-closing devices, and that they should report faults or damage. This goes to new residents as soon as reasonably practicable and to all residents every 12 months${c(5)}.</p>

<h2>Buildings with a top storey above 11 metres</h2>
<p>In these buildings, regulation 10 also requires the responsible person to${c(5)}${c(6)}:</p>
<ul>
  <li>check all fire doors in the common parts at least every three months;</li>
  <li>use best endeavours to check all flat entrance doors at least every 12 months;</li>
  <li>include self-closing devices in the checks; and</li>
  <li>keep records of the checks.</li>
</ul>
<p>“Best endeavours” for flat entrance doors means you have to make real efforts to get access, so keep a record of letters, appointments offered and missed visits. Routine checks look for things like closers that do not shut the door fully, damaged or missing seals, excessive gaps, damaged leaves and wedged-open doors. Where checks turn up repeated problems, a more detailed <a href="/services/fire-door-inspections">fire door inspection</a> helps you plan repairs.</p>

<h2>High-rise residential buildings</h2>
<p>A high-rise residential building is one that is at least 18 metres high or has at least seven storeys${c(1)}. On top of the duties above, the responsible person must:</p>
<ul>
  <li><strong>Regulation 4, secure information box:</strong> install a box that firefighters can access, that can hold the required documents and is reasonably protected from tampering; keep the responsible person’s UK contact details and hard copies of the floor plans and building plan in it; and inspect it at least once a year${c(1)}.</li>
  <li><strong>Regulation 5, external walls:</strong> record the design and materials of the external walls, including the level of risk they present, and update the record after significant changes${c(1)}.</li>
  <li><strong>Regulation 6, plans:</strong> prepare floor plans and a building plan showing lifts and key firefighting equipment, and keep them up to date${c(1)}.</li>
  <li><strong>Regulation 7, lifts and equipment:</strong> check firefighting and evacuation lifts and essential firefighting equipment monthly, report any fault not fixed within 24 hours to the fire and rescue service electronically, and record the checks and make the records available to residents${c(7)}.</li>
  <li><strong>Regulation 8, wayfinding signage:</strong> install floor and flat number signage that is visible in low light or smoky conditions${c(2)}.</li>
  <li><strong>Regulation 11, information to the fire service:</strong> send electronic copies of the external wall information and the plans to the local fire and rescue service${c(1)}.</li>
</ul>
<p>High-rise buildings with at least two residential units also come under the Building Safety Act 2022 higher-risk building regime, including registration with the Building Safety Regulator and duties on the Principal Accountable Person${c(8)}.</p>

${CTA('Over 11 metres and behind on your door checks?', 'We can carry out fire door inspections and review your fire risk assessment so your records line up with the regulations.')}

<h2>Residential evacuation plans from 6 April 2026</h2>
<p>The Fire Safety (Residential Evacuation Plans) (England) Regulations 2025 came into force on 6 April 2026${c(9)}. They apply to high-rise residential buildings and to residential buildings over 11 metres that have a simultaneous evacuation strategy. The responsible person must:</p>
<ul>
  <li>make reasonable endeavours to identify residents who would have difficulty evacuating without help;</li>
  <li>offer each of them a person-centred fire risk assessment and a residential personal emergency evacuation plan (PEEP); and</li>
  <li>with the resident’s consent, share basic information with the fire and rescue service${c(9)}.</li>
</ul>
<p>If your building is in scope, your fire risk assessment and evacuation strategy need to reflect this.</p>

<h2>How this links to your fire risk assessment and maintenance</h2>
<p>The 2022 regulations do not replace the fire risk assessment, and the door and equipment checks are not a review of it. Your assessment should still be reviewed regularly and after significant changes (see <a href="/guides/how-often-should-a-fire-risk-assessment-be-reviewed">how often to review</a>). Separately, the Fire Safety Order requires fire safety facilities and equipment, such as fire alarms, emergency lighting and smoke ventilation, to be subject to a suitable system of maintenance and kept in efficient working order and good repair${c(10)}. If your building has smoke vents, see our <a href="/services/aov-smoke-control-servicing">AOV and smoke control servicing</a>. Our <a href="/sectors/blocks-of-flats">blocks of flats page</a> sets out how we work with managing agents.</p>

<h2>Wales and Scotland</h2>
<p>The 2022 regulations apply in England only. In Wales the Fire Safety Order still covers the common parts, structure, external walls and flat entrance doors of blocks of flats, and the Building Safety (Wales) Act 2026 will introduce a new regime for multi-occupied residential buildings once its provisions are in force${c(11)}. In Scotland, Part 3 of the Fire (Scotland) Act 2005 generally excludes the common parts of ordinary blocks of flats, though Scottish Government guidance recommends a fire risk assessment for high-rise domestic buildings${c(12)}${c(13)}.</p>

${DISCLAIMER}
`,
    faqs: [
      { q: 'How is the 11 metre height measured?', a: 'Regulation 10 refers to buildings whose top storey is above 11 metres. If your building is close to the threshold, check the measurement against the regulation and guidance or ask us to confirm before you decide which duties apply.' },
      { q: 'What if a leaseholder will not let us check their front door?', a: 'The duty for flat entrance doors is to use best endeavours. Keep a record of every attempt: letters, emails, appointments offered and missed. Persistent refusals should be noted in your records and the fire risk assessment.' },
      { q: 'Do converted houses split into flats count?', a: 'Yes, if the building contains two or more sets of domestic premises. Most converted houses are below 11 metres, so the resident information duties apply rather than the quarterly door checks.' },
      { q: 'Can the door checks be done by the caretaker?', a: 'The regulations require the checks to be carried out and recorded, and GOV.UK fire door guidance explains what a routine check involves. A trained member of staff can do routine checks; a specialist inspection is useful where faults keep recurring or doors need assessing for repair.' },
    ],
    sources: [
      { label: 'Fire Safety (England) Regulations 2022 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2022/547' },
      { label: 'Fire Safety (England) Regulations 2022: guidance collection (GOV.UK)', url: 'https://www.gov.uk/government/publications/fire-safety-england-regulations-2022' },
      { label: 'Fire Safety Act 2021, section 1 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/ukpga/2021/24/section/1' },
      { label: 'Check your fire safety responsibilities under the Fire Safety (England) Regulations 2022 (GOV.UK PDF)', url: 'https://assets.publishing.service.gov.uk/media/6538ec5ed10f3500139a68e1/Check+your+fire+safety+responsibilities+under+the+Fire+Safety+_England_+Regulations+2022.pdf' },
      { label: 'Fire Safety (England) Regulations 2022, regulation 10 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2022/547/regulation/10' },
      { label: 'Fire Safety (England) Regulations 2022: fact sheet, fire doors (regulation 10) (GOV.UK)', url: 'https://www.gov.uk/government/publications/fire-safety-england-regulations-2022/fact-sheet-fire-doors-regulation-10' },
      { label: 'Fire Safety (England) Regulations 2022, regulation 7 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2022/547/regulation/7/made' },
      { label: 'Safety in high-rise residential buildings: accountable persons (GOV.UK)', url: 'https://www.gov.uk/guidance/safety-in-high-rise-residential-buildings-accountable-persons' },
      { label: 'Residential PEEPs: guidance for responsible persons (GOV.UK)', url: 'https://www.gov.uk/government/publications/residential-personal-emergency-evacuation-plans-residential-peeps/residential-peeps-guidance-for-responsible-persons' },
      { label: 'Fire Safety Order, article 17: maintenance (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2005/1541/article/17' },
      { label: 'Welsh Government: Building Safety (Wales) Act 2026', url: 'https://www.gov.wales/building-safety-wales-act-2026' },
      { label: 'Fire (Scotland) Act 2005, Part 3 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/asp/2005/5/part/3' },
      { label: 'Scottish Government: practical fire safety guidance for existing high rise domestic buildings', url: 'https://www.gov.scot/publications/practical-fire-safety-guidance-existing-high-rise-domestic-buildings-updated-march-2021/pages/8/' },
    ],
    related: ['how-often-should-a-fire-risk-assessment-be-reviewed', 'do-i-need-a-fire-risk-assessment', 'council-and-insurer-fire-safety-letters'],
  },
  // ─────────────────────────────────────────────────────────────── 6
  {
    slug: 'council-and-insurer-fire-safety-letters',
    title: 'Had a Fire Safety Letter From the Council or Your Insurer?',
    metaTitle: 'Fire Safety Letter From the Council or Insurer?',
    metaDescription:
      'What council, fire service and insurer fire safety letters mean, the notices and penalties behind them and what to do in the first 48 hours. Call us today.',
    summary:
      'What fire safety letters from councils, fire services, insurers and lenders mean, the law behind each one and what to do in the first 48 hours.',
    readingMinutes: 6,
    updated: '2026-10-19',
    service: 'fra',
    body: `
<p><strong>Short answer:</strong> first work out who sent the letter and under what power. Council letters usually come under the Housing Act 2004, fire service letters under the Fire Safety Order, and insurer, lender or freeholder requests under a contract. Note every deadline, do not ignore it, deal with any immediate danger and get a fire risk assessment or review booked.</p>

<h2>Step one: who sent it?</h2>
<table>
  <thead><tr><th>Sender</th><th>Usual legal basis</th><th>What the letter often asks for</th></tr></thead>
  <tbody>
    <tr><td>Council (private sector housing or HMO licensing team)</td><td>Housing Act 2004: hazard rating, licensing and HMO management rules</td><td>An inspection, works, licence conditions, a fire risk assessment, alarm or door certificates</td></tr>
    <tr><td>Fire and rescue service</td><td>Regulatory Reform (Fire Safety) Order 2005</td><td>An audit, information, works, or a formal notice</td></tr>
    <tr><td>Insurer, lender, freeholder or managing agent</td><td>The policy, mortgage, lease or management contract</td><td>A current fire risk assessment, maintenance records or completed actions</td></tr>
  </tbody>
</table>

<h2>Letters from the council</h2>
<h3>Housing hazards</h3>
<p>Councils assess rented homes using the Housing Health and Safety Rating System (HHSRS) under Part 1 of the Housing Act 2004. They must act on Category 1 hazards and may act on Category 2 hazards. The options include an improvement notice, a prohibition order, a hazard awareness notice and emergency action${c(1)}. Before acting on a prescribed fire hazard in an HMO or the common parts of flats, the council must consult the fire and rescue authority${c(1)}, which is why letters sometimes mention both.</p>
<p>In England the system was reformed for inspections started on or after 23 June 2026: the number of hazards fell from 29 to 21, with new banding and new operating guidance that includes a part on fire and explosions${c(2)}${c(3)}.</p>
<h3>HMO licensing and management</h3>
<p>In England, mandatory HMO licensing applies to HMOs occupied by five or more people forming two or more households, and councils can also run additional and selective licensing schemes${c(4)}. Licence conditions often ask for a fire risk assessment, fire alarm and emergency lighting certificates or fire door works. Separately, the HMO management regulations apply to every HMO, licensed or not: escape routes must be kept clear and in good repair, and fire alarms and firefighting equipment kept in good working order${c(5)}. If you let HMOs, our <a href="/sectors/landlords-hmos">landlords and HMOs page</a> sets out what is usually needed.</p>
<h3>Civil penalties</h3>
<p>Government guidance says that, for offences committed on or after 1 May 2026, councils in England can impose civil penalties of up to £40,000 (previously £30,000) for offences including failing to comply with an improvement notice, licensing offences and breaching the HMO management regulations. A new lower tier of penalties of up to £7,000 applies to certain breaches${c(6)}. Separately, councils can impose penalties of up to £5,000 under the smoke and carbon monoxide alarm rules${c(7)}.</p>

<h2>Letters from the fire and rescue service</h2>
<p>In England the local fire and rescue authority is the main enforcing authority for the Fire Safety Order. It can inspect premises and serve notices${c(8)}. Fire services often start informally, for example with a letter or report after an audit listing the deficiencies they found and what they expect you to do. Treat that seriously: it is often the step before a formal notice. The formal notices are:</p>
<ul>
  <li><strong>Alterations notice (article 29):</strong> served where premises pose a serious risk, or would if their use changed. While it is in force you must tell the fire service before making changes that could significantly increase the risk${c(9)}.</li>
  <li><strong>Enforcement notice (article 30):</strong> served where the fire service believes you have failed to comply with the Order. It must say what the failure is and give you at least 28 days to put it right${c(9)}.</li>
  <li><strong>Prohibition notice (article 31):</strong> the most serious step. It prohibits or restricts use of the premises where the risk to people is so serious that this is needed${c(9)}.</li>
</ul>
<p>You can appeal a notice to the magistrates’ court within 21 days. An appeal suspends an alterations or enforcement notice, but not a prohibition notice unless the court directs otherwise${c(10)}${c(11)}. Failing to comply with the Order is a criminal offence: on conviction in the Crown Court the penalty can be an unlimited fine and up to two years’ imprisonment${c(12)}.</p>

<h2>Requests from insurers, lenders and freeholders</h2>
<p>An insurer has no statutory power to demand a fire risk assessment. When it asks for one, the requirement comes from your policy terms and conditions. The same goes for lenders, freeholders and managing agents relying on a lease or contract. That does not make it optional: breaching a policy condition can affect cover, and a lender can hold up a mortgage or sale. Read exactly what they are asking for: a new assessment, a review, a particular date, evidence that actions are complete, or maintenance certificates for the <a href="/services/fire-alarm-servicing-installation">fire alarm</a> or <a href="/services/emergency-lighting-servicing-installation">emergency lighting</a>. If the wording is unclear, ask them in writing.</p>

${CTA('Got a letter with a deadline?', 'Send us a copy and the property address. We will tell you what it is asking for and quote for the assessment or works needed to answer it.')}

<h2>What to do in the first 48 hours</h2>
<ol>
  <li><strong>Read it properly.</strong> Note who sent it, which law or policy clause it relies on, what it asks for and every date in it.</li>
  <li><strong>Do not ignore it.</strong> Acknowledge it in writing, give a named contact and ask any questions. A quick, sensible reply usually helps.</li>
  <li><strong>Deal with immediate danger now.</strong> Clear blocked escape routes, remove stored rubbish from stairs and corridors, unwedge fire doors and get any faulty alarm or emergency lighting looked at.</li>
  <li><strong>Gather your records.</strong> The current fire risk assessment, action plan, alarm and emergency lighting logs, service certificates and fire door check records.</li>
  <li><strong>Book a fire risk assessment or review.</strong> If yours is missing, out of date or does not cover what the letter raises, get one booked and tell the sender when it will be done.</li>
  <li><strong>Watch the appeal window.</strong> If you disagree with a formal fire service notice, the appeal period is 21 days from service${c(10)}. Take legal advice early.</li>
  <li><strong>Keep a paper trail.</strong> Save every letter, email, quote, invoice and photo of completed work.</li>
</ol>
<p>Our <a href="/services/fire-risk-assessments">fire risk assessment service</a> produces a written report with a prioritised action plan you can send back to the council, fire service or insurer.</p>

<h2>Scotland and Wales</h2>
<p>This guide is written for England. In Scotland the Scottish Fire and Rescue Service enforces Part 3 of the Fire (Scotland) Act 2005 through fire safety audits and its own notices${c(13)}${c(14)}, and HMO licensing and penalties follow Scottish housing law${c(15)}${c(16)}. In Wales the Fire Safety Order notices described above apply, but HMO licensing thresholds differ${c(17)} and the Building Safety (Wales) Act 2026 will change the regime for blocks of flats and many HMOs once it is in force${c(18)}.</p>

${DISCLAIMER}
`,
    faqs: [
      { q: 'Can the council and the fire service both take action on the same building?', a: 'Yes. For HMOs and the common parts of flats, housing law and the Fire Safety Order can both apply. The council must consult the fire service before acting on certain fire hazards, and the two often agree who will lead.' },
      { q: 'Is an insurer’s request for a fire risk assessment legally binding?', a: 'Not as a matter of fire safety law. It is a contract term. Ignoring it can still affect your cover or a claim, so treat the deadline seriously.' },
      { q: 'Will a fire risk assessment satisfy the council on its own?', a: 'Not always. The council may also want evidence that works are done, such as fire door repairs or alarm certificates. The assessment tells you what is needed and in what order, which gives you a credible plan to send back.' },
      { q: 'What if I cannot meet the deadline?', a: 'Contact the sender before it passes, explain what you have done so far and give a realistic date. Show evidence such as a booked assessment or contractor quotes. Silence is the worst option.' },
    ],
    sources: [
      { label: 'Landlord and agent guide to the Housing Health and Safety Rating System (GOV.UK)', url: 'https://www.gov.uk/government/publications/housing-health-and-safety-rating-system-hhsrs-landlord-and-agent-guide/landlord-and-agent-guide-to-the-housing-health-and-safety-rating-system-hhsrs' },
      { label: 'Housing Health and Safety Rating System (England) (Amendment) Regulations 2026 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2026/571' },
      { label: 'HHSRS operating guidance (GOV.UK)', url: 'https://www.gov.uk/government/publications/housing-health-and-safety-rating-system-hhsrs-operating-guidance' },
      { label: 'HMO and residential property licensing reform: guidance for local housing authorities (GOV.UK)', url: 'https://www.gov.uk/government/publications/houses-in-multiple-occupation-and-residential-property-licensing-reform-guidance-for-local-housing-authorities/houses-in-multiple-occupation-and-residential-property-licensing-reform-guidance-for-local-housing-authorities' },
      { label: 'Management of Houses in Multiple Occupation (England) Regulations 2006 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2006/372/made' },
      { label: 'Civil penalties under the Renters’ Rights Act 2025 and other housing legislation (GOV.UK)', url: 'https://www.gov.uk/government/publications/civil-penalties-under-the-renters-rights-act-2025-and-other-housing-legislation/civil-penalties-under-the-renters-rights-act-2025-and-other-housing-legislation' },
      { label: 'Smoke and Carbon Monoxide Alarm (England) Regulations 2015: Q&A booklet (GOV.UK)', url: 'https://www.gov.uk/government/publications/smoke-and-carbon-monoxide-alarms-explanatory-booklet-for-landlords/the-smoke-and-carbon-monoxide-alarm-england-regulations-2015-qa-booklet-for-the-private-rented-sector-landlords-and-tenants' },
      { label: 'Check your fire safety responsibilities under the Fire Safety Order (GOV.UK)', url: 'https://www.gov.uk/guidance/check-your-fire-safety-responsibilities-under-the-fire-safety-order' },
      { label: 'Fire Safety Order guidance note 1: enforcement (GOV.UK PDF)', url: 'https://assets.publishing.service.gov.uk/media/5a79a38de5274a684690b029/guidance1enforcement2005.pdf' },
      { label: 'Regulatory Reform (Fire Safety) Order 2005 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2005/1541/contents' },
      { label: 'North Yorkshire Fire and Rescue Service: enforcement notices procedure', url: 'https://www.northyorksfire.gov.uk/about-us/who-and-what/strategies-policies-and-procedures/enforcement-notices-procedure-for-failure-to-comply-with-provisions-of-the-order/' },
      { label: 'Fire Safety Order: enforcement and sanctions for non-compliance (GOV.UK)', url: 'https://www.gov.uk/government/publications/fire-safety-order-enforcement-and-sanctions-for-non-compliance/enforcement-and-sanctions-for-non-compliance-accessible' },
      { label: 'Scottish Fire and Rescue Service: fire safety audits', url: 'https://www.firescotland.gov.uk/businesses-and-landlords/fire-safety-audits/' },
      { label: 'Fire (Scotland) Act 2005, Part 3 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/asp/2005/5/part/3' },
      { label: 'Housing (Scotland) Act 2006, section 125 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/asp/2006/1/section/125' },
      { label: 'mygov.scot: HMO licence for landlords', url: 'https://www.mygov.scot/landlord-hmo-licence' },
      { label: 'Licensing of Houses in Multiple Occupation (Prescribed Descriptions) (Wales) Order 2006, article 3 (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/wsi/2006/1712/article/3/made' },
      { label: 'Welsh Government: Building Safety (Wales) Act 2026', url: 'https://www.gov.wales/building-safety-wales-act-2026' },
    ],
    related: ['do-i-need-a-fire-risk-assessment', 'what-happens-during-a-fire-risk-assessment', 'fire-risk-assessment-cost'],
  },

  // ─────────────────────────────────────────────────────────────── 7
  {
    slug: 'what-happens-during-a-fire-risk-assessment',
    title: 'What Happens During a Fire Risk Assessment?',
    metaTitle: 'What Happens During a Fire Risk Assessment?',
    metaDescription:
      'What to prepare, what the assessor checks on the day, the questions you will be asked and what is in the report and action plan. Book your assessment now.',
    summary:
      'A step-by-step look at a fire risk assessment: what to prepare, what the assessor checks on site, the questions asked and what the report contains.',
    readingMinutes: 5,
    updated: '2026-10-19',
    service: 'fra',
    body: `
<p><strong>Short answer:</strong> the assessor agrees the scope with you, walks the premises looking at fire hazards, the people at risk, escape routes, fire doors, alarms, emergency lighting and how the building is managed, checks your records and asks you some questions. You then get a written report with the findings and a prioritised action plan. The process follows the five steps in the GOV.UK checklist.</p>

<h2>Before the visit</h2>
<h3>Agreeing the scope</h3>
<p>A good assessment starts with a clear scope: which building, which parts of it, and what the assessment will and will not cover. For a block of flats, that usually means the common parts, the structure and external walls (visually), and the flat entrance doors, but not the inside of the flats${c(3)}${c(5)}. For a mixed-use building, it means agreeing which areas you control. Getting this right at quote stage avoids gaps later.</p>
<h3>Documents to have ready</h3>
<ul>
  <li>The previous fire risk assessment and action plan, with notes on what has been done.</li>
  <li>Fire alarm test records and service certificates.</li>
  <li>Emergency lighting test records and service certificates.</li>
  <li>Fire door check records, and AOV or smoke ventilation service records if fitted.</li>
  <li>Fire extinguisher service records, if provided.</li>
  <li>The electrical installation condition report and gas safety records where relevant.</li>
  <li>Floor plans and any fire safety information from the developer or previous owner.</li>
  <li>Staff fire training and fire drill records (workplaces).</li>
  <li>For blocks in England, any records kept under the Fire Safety (England) Regulations 2022, such as resident information and door checks${c(10)}.</li>
</ul>
<h3>Access</h3>
<p>Arrange keys or codes for plant rooms, riser and meter cupboards, roof access, bin stores, car parks and any locked stores. Let residents or staff know someone will be walking round.</p>

<h2>On the day: the five steps</h2>
<p>GOV.UK sets out a fire risk assessment in five steps${c(1)}. Here is what each looks like on site.</p>
<h3>1. Identify fire hazards</h3>
<p>The assessor looks for sources of ignition (electrical equipment, heaters, cooking, smoking, hot works), fuel (stored rubbish, furniture, packaging, flammable liquids) and anything that could help a fire spread.</p>
<h3>2. Identify people at risk</h3>
<p>Who is in the building, when, and how quickly they could get out: residents, staff, visitors, contractors, people who are asleep, lone workers and anyone who would need help to escape.</p>
<h3>3. Evaluate, remove, reduce and protect from risk</h3>
<p>This is the bulk of the walk-round. The assessor judges whether existing precautions are adequate for the risk: escape routes, fire doors, compartmentation, detection and warning, emergency lighting, signage and firefighting equipment.</p>
<h3>4. Record, plan, inform, instruct and train</h3>
<p>The assessor looks at what is written down, what residents or staff are told, the evacuation arrangements and training, and then records the findings.</p>
<h3>5. Review</h3>
<p>The report should say when and in what circumstances the assessment should be reviewed. The law requires regular review and review after significant change${c(2)}.</p>

<h2>What the assessor will look at</h2>
<ul>
  <li><strong>Escape routes:</strong> whether corridors and stairs are clear, the travel distances, final exits and how doors on the escape route open.</li>
  <li><strong>Fire doors:</strong> self-closers, seals, gaps, damage, signage and whether doors are wedged open. For detailed door surveys, see our <a href="/services/fire-door-inspections">fire door inspection service</a>.</li>
  <li><strong>Compartmentation:</strong> visible holes around pipes and cables, missing fire stopping, and damaged walls or ceilings. In blocks of flats, checking the structure means a visual inspection unless there are serious concerns${c(3)}.</li>
  <li><strong>Fire detection and alarm:</strong> the type of system, coverage, panel condition and test records.</li>
  <li><strong>Emergency lighting:</strong> coverage of escape routes and test records.</li>
  <li><strong>Smoke control:</strong> AOVs and vents, their condition and service records.</li>
  <li><strong>Signage and information:</strong> fire action notices and wayfinding.</li>
  <li><strong>Housekeeping and storage:</strong> rubbish, mobility scooters, bikes and combustible storage in common areas.</li>
  <li><strong>External walls:</strong> what can be seen of the cladding, balconies and windows.</li>
</ul>
<p>The assessor does not test the alarm or emergency lighting during the assessment. They look at the records of those tests. If you need testing or servicing, see our <a href="/services/fire-alarm-servicing-installation">fire alarm</a>, <a href="/services/emergency-lighting-servicing-installation">emergency lighting</a> and <a href="/services/aov-smoke-control-servicing">AOV servicing</a> pages.</p>

${CTA('Ready to book?', 'Tell us about the building and we will confirm the scope, what to have ready and the time on site in a written quote.')}

<h2>Questions you are likely to be asked</h2>
<ul>
  <li>Who lives or works here, and is anyone likely to need help to get out?</li>
  <li>What is the evacuation strategy: stay put, or simultaneous evacuation?</li>
  <li>Who tests the alarm and emergency lighting, and how often?</li>
  <li>Have there been any fires, false alarms or near misses?</li>
  <li>Has any building work been done since the last assessment?</li>
  <li>Are there any other responsible persons in the building, such as a commercial tenant?</li>
  <li>How do residents or staff get fire safety information?</li>
</ul>

<h2>After the visit: the report</h2>
<p>Since 1 October 2023 the written record must cover all the findings, and it must identify who carried out the assessment, by the name of the individual and/or organisation${c(4)}. A useful report includes:</p>
<ul>
  <li>a description of the premises, its use and the people at risk;</li>
  <li>the scope, including any areas not inspected and why;</li>
  <li>the findings for each area, with photographs where they help;</li>
  <li>an overall risk rating; and</li>
  <li>a prioritised action plan, so you know what to fix first.</li>
</ul>
<p>For housing, BSI’s BS 9792:2025 code of practice for fire risk assessment replaced PAS 79-2:2020; PAS 79-1:2020 remains the reference for other premises${c(6)}${c(7)}.</p>

<h2>Your responsibilities afterwards</h2>
<p>The report is the start, not the end. You remain legally responsible for fire safety even when someone else carries out the assessment${c(8)}. You need to work through the action plan in order of priority, keep records of what is done, share the required information (in England, responsible persons in multi-occupied residential buildings must share their name and UK address with residents${c(9)}), and review the assessment regularly and after any significant change. Our guide on <a href="/guides/how-often-should-a-fire-risk-assessment-be-reviewed">how often to review</a> covers that, and our <a href="/services/fire-risk-assessments">fire risk assessment</a> page explains how to book.</p>

${DISCLAIMER}
`,
    faqs: [
      { q: 'Will the assessor need to lift floorboards or open up walls?', a: 'Not in a standard, non-destructive assessment. Opening up is only done where it has been agreed in the scope, usually because there is a specific reason to suspect hidden problems.' },
      { q: 'Should the building be empty during the visit?', a: 'No. It is usually better to see the building in normal use, so the assessor can see how people actually use the escape routes and common areas.' },
      { q: 'What if the assessor finds something dangerous on the day?', a: 'A good assessor will tell you straight away rather than waiting for the report, so you can deal with it, for example by clearing an obstructed escape route.' },
      { q: 'Can I see a sample report before booking?', a: 'You can ask any assessor what their report covers and how actions are prioritised. <a href="/quote">Ask us for a quote</a> and we will explain what you will receive.' },
    ],
    sources: [
      { label: 'Fire safety risk assessment: 5-step checklist (GOV.UK)', url: 'https://www.gov.uk/government/publications/fire-safety-risk-assessment-5-step-checklist/fire-safety-risk-assessment-5-step-checklist-accessible' },
      { label: 'Fire Safety Order, article 9: risk assessment (legislation.gov.uk)', url: 'https://www.legislation.gov.uk/uksi/2005/1541/article/9' },
      { label: 'Fire Safety Act 2021 factsheet: commencement of sections 1 and 3 (GOV.UK)', url: 'https://www.gov.uk/government/publications/fire-safety-act-2021/fire-safety-act-2021-factscheet-information-on-commencement-of-sections-1-and-3-of-the-fire-safety-act' },
      { label: 'Fire safety responsibilities under section 156 of the Building Safety Act 2022 (GOV.UK)', url: 'https://www.gov.uk/government/publications/check-your-fire-safety-responsibilities-under-section-156-of-the-building-safety-act-2022/fire-safety-responsibilities-under-section-156-of-the-building-safety-act-2022' },
      { label: 'Home Office: A guide for persons with duties under fire safety legislation (GOV.UK)', url: 'https://www.gov.uk/government/publications/people-with-duties-under-fire-safety-laws/a-guide-for-persons-with-duties-under-fire-safety-legislation-accessible' },
      { label: 'BSI: BS 9792:2025 Fire risk assessment. Housing. Code of practice', url: 'https://knowledge.bsigroup.com/products/fire-risk-assessment-housing-code-of-practice' },
      { label: 'NBS: BS 9792:2025 publication details', url: 'https://www.thenbs.com/publicationindex/documents/details?Pub=BSI&DocId=349159' },
      { label: 'Workplace fire safety: fire risk assessments (GOV.UK)', url: 'https://www.gov.uk/workplace-fire-safety-your-responsibilities/fire-risk-assessments' },
      { label: 'Responsible persons in England: changes in fire safety legislation (GOV.UK)', url: 'https://www.gov.uk/government/publications/responsible-persons-in-england-changes-in-fire-safety-legislation/responsible-persons-in-england-changes-in-fire-safety-legislation' },
      { label: 'Fire Safety (England) Regulations 2022: guidance collection (GOV.UK)', url: 'https://www.gov.uk/government/publications/fire-safety-england-regulations-2022' },
    ],
    related: ['how-long-does-a-fire-risk-assessment-take', 'fire-risk-assessment-cost', 'how-often-should-a-fire-risk-assessment-be-reviewed'],
  },
];
