import { fileURLToPath } from 'node:url';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const locations = ['gurgaon-sector-78','gurgaon-sector-79','gurgaon-sector-80','gurgaon-sector-81','gurgaon-sector-82','gurgaon-sector-83','gurgaon-sector-84','gurgaon-sector-85','gurgaon-sector-86','gurgaon-sector-87','gurgaon-sector-88','gurgaon-sector-89','gurgaon-sector-90','gurgaon-sector-91','gurgaon-sector-92','gurgaon-sector-93','gurgaon-sector-94','gurgaon-sector-95','gurgaon-sector-96','gurgaon-sector-97','gurgaon-sector-98','gurgaon-sector-99','manesar-sector-1','manesar-sector-2','manesar-sector-3','manesar-sector-4','manesar-sector-5'];

const redirects = {};
for (const loc of locations) {
  redirects[`/locations/iit-coaching-${loc}`] = `/locations/jee-coaching-${loc}`;
}

redirects['/courses/prefoundation'] = '/courses/cbse';

/**
 * `@astrojs/sitemap` writes `sitemap-index.xml` + `sitemap-0.xml`, never a
 * bare `sitemap.xml`. The sitemap URL we advertise in robots.txt (and submit
 * in Search Console) is `/sitemap.xml`, so mirror the generated payload there
 * after each build instead of hardcoding a second sitemap generator that could
 * drift from the integration's filters.
 *
 * Single chunk -> copy that chunk. Multiple chunks -> copy the index, so
 * `/sitemap.xml` stays a complete, valid sitemap either way.
 */
function canonicalSitemapUrl() {
  return {
    name: 'canonical-sitemap-url',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const outDir = fileURLToPath(dir);
        const emitted = await readdir(outDir);
        const chunks = emitted.filter((f) => /^sitemap-\d+\.xml$/.test(f));

        const source = chunks.length === 1 ? chunks[0] : 'sitemap-index.xml';
        if (chunks.length !== 1 && !emitted.includes(source)) {
          logger.error(
            `canonical-sitemap-url: nothing to mirror (found ${chunks.length} chunk(s) and no sitemap-index.xml).`,
          );
          throw new Error('canonical-sitemap-url: @astrojs/sitemap emitted no usable sitemap.');
        }

        const xml = await readFile(path.join(outDir, source), 'utf8');
        await writeFile(path.join(outDir, 'sitemap.xml'), xml, 'utf8');
        logger.info(`canonical-sitemap-url: /sitemap.xml <- ${source} (${chunks.length} chunk(s))`);
      },
    },
  };
}

export default defineConfig({
  site: 'https://www.goodmarksclasses.com',
  // Canonical URLs site-wide use a trailing slash — emit the same in dev
  // so local preview matches production link tags.
  trailingSlash: 'always',
  integrations: [react(), sitemap({
    serialize(item) {
      // Keep conversion + error pages out of the sitemap.
      if (item.url.includes('/thank-you') || item.url.endsWith('/404') || item.url.endsWith('/404/')) {
        return undefined;
      }
      // Exclude static redirect stubs (meta-refresh pages, not content).
      if (item.url.includes('/locations/iit-coaching-') || item.url.includes('/courses/prefoundation')) {
        return undefined;
      }
      return item;
    }
  }), canonicalSitemapUrl()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  redirects,
  server: {
    host: true,
    allowedHosts: ['.trycloudflare.com', 'web.clickboostmedia.com', '.clickboostmedia.com'],
  },
});
