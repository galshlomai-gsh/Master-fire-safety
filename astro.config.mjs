// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// SITE_URL is the production origin. Until the domain is confirmed, previews use a placeholder
// and every page carries noindex (see BaseLayout) so nothing is indexed by accident.
const site = process.env.SITE_URL || 'https://www.example-ttfiresafety.co.uk';

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  output: 'static',
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) => !/\/(thank-you|404)(\.html)?$/.test(page),
    }),
  ],
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
