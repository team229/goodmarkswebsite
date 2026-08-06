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
redirects['/courses/foundation'] = '/courses/cbse';

export default defineConfig({
  site: 'https://www.goodmarksclasses.com',
  integrations: [react(), sitemap({
    serialize(item) {
      if (item.url.includes('/thank-you')) {
        return undefined;
      }
      return item;
    }
  })],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  redirects,
});
