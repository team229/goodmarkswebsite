import { fileURLToPath } from 'node:url';
import { readdir, readFile, rm, writeFile } from 'node:fs/promises';
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
redirects['/cbse-practice-papers'] = '/cbse-worksheets/';

const SITEMAP_INDEX = 'sitemap-index.xml';
const SITEMAP_CANONICAL = 'sitemap.xml';

/**
 * `@astrojs/sitemap` writes `sitemap-index.xml` + `sitemap-0.xml` and never a
 * bare `sitemap.xml`. The canonical sitemap URL we advertise in robots.txt (and
 * submit in Search Console) is `/sitemap.xml`, so after each build we mirror the
 * generated payload there and drop the intermediate artifacts. Reusing the
 * integration's own output keeps it in sync with the `serialize` filters instead
 * of hand-rolling a second sitemap generator that could drift from them.
 *
 * Single chunk -> mirror the chunk, then delete both it and the index, leaving
 * `/sitemap.xml` as the one published sitemap. Multiple chunks -> mirror the
 * index and KEEP the chunks, since the index references them by URL and deleting
 * them would turn it into a dangling pointer.
 */
function canonicalSitemapUrl() {
  return {
    name: 'canonical-sitemap-url',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const outDir = fileURLToPath(dir);
        const emitted = await readdir(outDir);
        const chunks = emitted.filter((f) => /^sitemap-\d+\.xml$/.test(f));
        const hasIndex = emitted.includes(SITEMAP_INDEX);
        const single = chunks.length === 1;

        const source = single ? chunks[0] : SITEMAP_INDEX;
        if (!single && !hasIndex) {
          logger.error(
            `canonical-sitemap-url: nothing to mirror (found ${chunks.length} chunk(s) and no ${SITEMAP_INDEX}).`,
          );
          throw new Error(`canonical-sitemap-url: @astrojs/sitemap emitted no ${SITEMAP_INDEX}.`);
        }

        const xml = await readFile(path.join(outDir, source), 'utf8');
        await writeFile(path.join(outDir, SITEMAP_CANONICAL), xml, 'utf8');

        // Only safe to prune when the mirrored file no longer depends on them.
        const stale = single ? [...chunks, ...(hasIndex ? [SITEMAP_INDEX] : [])] : [];
        if (stale.length > 0) {
          await Promise.all(stale.map((f) => rm(path.join(outDir, f))));
        }

        logger.info(
          single
            ? `canonical-sitemap-url: ${SITEMAP_CANONICAL} <- ${source}; removed ${stale.join(', ')}`
            : `canonical-sitemap-url: ${SITEMAP_CANONICAL} <- ${source}; kept ${chunks.length} chunk(s) the index references`,
        );
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
      if (item.url.includes('/locations/iit-coaching-') || item.url.includes('/courses/prefoundation') || item.url.includes('/cbse-practice-papers')) {
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
