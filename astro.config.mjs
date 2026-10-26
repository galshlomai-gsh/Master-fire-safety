// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Production origin (canonical URLs, sitemap, schema). SITE_URL overrides it. Pages still carry
// noindex unless ALLOW_INDEXING=true (see BaseLayout), so previews are never indexed.
const site = process.env.SITE_URL || 'https://www.tandtfiresafety.co.uk';

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
