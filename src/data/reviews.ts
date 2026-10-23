/**
 * Real Google reviews of Certify Services Ltd, the company T&T Fire Safety trades through.
 * Philip approved showing them on the T&T site (Oct 2026). They must always be shown
 * labelled as Certify Services reviews: presenting another business's reviews as T&T's own
 * would be a misleading review under the DMCC Act 2024 and breaks Google Ads policy.
 *
 * Copied word for word (including original spelling) from Certify's Google Business Profile
 * on 13 October 2026, via the Certi-Sprint project. Add new ones the same way, never edited.
 * No aggregateRating schema: these are not reviews of T&T.
 */
export type Review = {
  /** Reviewer's name exactly as shown on Google */
  name: string;
  /** Optional context, only if the reviewer gives it */
  detail?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  /** Background colour of the Google-style letter avatar */
  color?: string;
};

export const reviewsAbout = {
  business: 'Certify Services Ltd',
  source: 'Google',
  /** Certify's Google Maps listing */
  url: 'https://maps.google.com/?cid=3744707575344296822',
};

export const reviews: Review[] = [
  {
    name: 'Chidinma Alufuo',
    rating: 5,
    color: '#689f38',
    text: 'I contacted Certify Services for a Fire Risk Assessment as part of my HMO licence application, and the service was outstanding from start to finish. An appointment was arranged very quickly, and the officer, Philip Roberts, carried out a detailed and highly professional inspection. We received the certificate within 48 hours, along with clear and accurate recommendations. Philip clearly knows his field and provided excellent guidance on how to resolve the issues identified. I’m extremely impressed and would highly recommend Certify Services Ltd.',
  },
  {
    name: 'south london',
    detail: 'South London Estate',
    rating: 5,
    color: '#e9407a',
    text: 'We have been working with Certify for over a year now and have always found them to be professional, efficient and easy to deal with. Instructions are booked in quickly, appointments are arranged without fuss, and certificates are returned promptly, which is extremely helpful when managing a large number of properties and keeping on top of compliance. A special shout-out to Philip, who has been brilliant throughout. His response times are excellent, and he is always helpful and quick to deal with any queries or issues. Great service from a reliable team. We would happily recommend Certify to other property managers and landlords.',
  },
  {
    name: 'Sally Holmes',
    rating: 5,
    color: '#0b5a46',
    text: 'The assessors at Certify Services were very helpful, informative and always fast to respond to my initial query and communication throughout the process. Extremely professional on site, would recommend their services. Many thanks Maurice & Philip.',
  },
  {
    name: 'simon klor',
    rating: 5,
    color: '#00897b',
    text: 'Very efficent and straight forward. I send an email to get certificates done and the next thing I know is the certificates in my inbox!',
  },
  {
    name: 'Ashleigh Pearson',
    rating: 5,
    color: '#0f8a72',
    text: 'I have been working with Maurice & Phillip for a little while now, and they are very easy to get along with and get the works done super quick and very good with communication, would highly recommend them!!',
  },
  {
    name: 'Yehuda Wittenberg',
    rating: 5,
    color: '#3c4043',
    text: 'Great service, fast turnaround, competitive pricing',
  },
  {
    name: 'Cj Kesselman',
    rating: 5,
    color: '#7e57c2',
    text: 'Extremely fast service and great communication. Recommended',
  },
  {
    name: 'S Bendaoud',
    rating: 5,
    color: '#5d4037',
    text: 'I would highly recommend Certify Services Ltd, they are professional.',
  },
  {
    name: 'Benjamin Senior',
    rating: 5,
    color: '#8d6e63',
    text: 'Incredible service!',
  },
];

/** The section stays hidden below this many reviews. */
export const MIN_REVIEWS = 3;
