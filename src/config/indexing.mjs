/**
 * Pages kept out of search engines. Shared by the pages themselves (noindex meta) and the
 * sitemap (astro.config.mjs), so the sitemap never lists a page Google is told not to index.
 */

/** Set to true once Philip has approved the privacy, terms and cookie pages. */
export const legalApproved = false;

/** Paths that are always noindex. */
const ALWAYS = ['/thank-you', '/404'];
const LEGAL = ['/privacy', '/terms', '/cookies'];

export const noindexPaths = [...ALWAYS, ...(legalApproved ? [] : LEGAL)];
