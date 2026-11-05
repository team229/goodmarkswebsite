import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

// Check the actual static HTML after `npm run build`, including React SSR output.
const dist = path.resolve(process.argv[2] ?? 'dist');
const site = 'https://www.goodmarksclasses.com';
const organizationId = `${site}/#organization`;
const sectorAreas = [
  ...Array.from({ length: 22 }, (_, i) => `gurgaon-sector-${i + 78}`),
  ...Array.from({ length: 5 }, (_, i) => `manesar-sector-${i + 1}`)
];
const expectedLocationSlugs = ['jee-coaching', 'neet-coaching', 'cbse-tuition']
  .flatMap(prefix => sectorAreas.map(area => `${prefix}-${area}`));
const tuitionSlugs = ['physics', 'chemistry', 'maths', 'biology']
  .flatMap(subject => ['gurgaon', 'manesar'].map(area => `${subject}-tuition-classes-${area}`));

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(entries.map(entry => entry.isDirectory()
    ? htmlFiles(path.join(directory, entry.name))
    : entry.name.endsWith('.html') ? [path.join(directory, entry.name)] : []));
  return groups.flat();
}

function* nodes(value) {
  if (Array.isArray(value)) {
    for (const item of value) yield* nodes(item);
  } else if (value && typeof value === 'object') {
    yield value;
    for (const item of Object.values(value)) yield* nodes(item);
  }
}

const types = value => [].concat(value?.['@type'] ?? []);
const decode = text => text
  .replace(/&#(?:x([\da-f]+)|(\d+));/gi, (_, hex, dec) => String.fromCodePoint(parseInt(hex ?? dec, hex ? 16 : 10)))
  .replaceAll('&quot;', '"').replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&amp;', '&');
const pages = new Map();
let jsonLdCount = 0;
let organizationPages = 0;
let referenceOrganization;

for (const file of await htmlFiles(dist)) {
  const relative = path.relative(dist, file).split(path.sep).join('/');
  const html = await readFile(file, 'utf8');
  const roots = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map(match => {
      jsonLdCount++;
      try { return JSON.parse(match[1]); }
      catch (error) { throw new Error(`Invalid JSON-LD in ${relative}: ${error.message}`); }
    });
  const allNodes = [...nodes(roots)];
  const organizations = roots.filter(node => types(node).some(type => ['Organization', 'EducationalOrganization', 'LocalBusiness'].includes(type)));
  if (roots.length) {
    assert.equal(organizations.length, 1, `${relative}: emit one shared organization definition`);
    const org = organizations[0];
    assert.equal(org['@id'], organizationId, relative);
    assert.equal(org.address?.['@type'], 'PostalAddress', relative);
    assert.equal(org.address.streetAddress, 'Sector 85', relative);
    assert.equal(org.address.addressLocality, 'Gurugram', relative);
    assert.equal(org.address.addressRegion, 'Haryana', relative);
    assert.equal(org.address.addressCountry, 'IN', relative);
    assert.ok(!Array.isArray(org.location), `${relative}: one physical teaching centre`);
    assert.equal(org.location?.['@type'], 'Place', relative);
    assert.deepEqual(org.location.address, org.address, relative);
    assert.equal(org.location.name, 'Good Marks Classes – Sector 85, Gurugram', relative);
    assert.ok(Number.isFinite(org.geo.latitude) && Number.isFinite(org.geo.longitude), relative);
    assert.equal(org.hasMap, org.location.hasMap, relative);
    const areas = org.areaServed.map(area => {
      assert.equal(area['@type'], 'Place', relative);
      assert.ok(!area.address && !area.geo, `${relative}: coverage is not a branch`);
      return area.name;
    });
    for (const name of ['Gurgaon Sector 78', 'Gurgaon Sector 85', 'Gurgaon Sector 99', 'Gurgaon Sector 88A', 'Manesar Sector 1', 'Manesar Sector 5', 'NSG Manesar']) {
      assert.ok(areas.includes(name), `${relative}: missing coverage for ${name}`);
    }
    referenceOrganization ??= org;
    assert.deepEqual(org, referenceOrganization, `${relative}: inconsistent organization`);
    organizationPages++;
  }
  for (const node of allNodes) {
    if (types(node).includes('PostalAddress')) {
      assert.equal(node.streetAddress, 'Sector 85', `${relative}: unsupported physical address`);
      assert.equal(node.addressLocality, 'Gurugram', `${relative}: unsupported physical locality`);
      assert.ok(!node.description, `${relative}: service areas do not belong in an address description`);
    }
    assert.ok(!/\/locations\/.*#organization/.test(node['@id'] ?? ''), `${relative}: service page must not invent an organization`);
    assert.ok(!/Good Marks Classes.*Manesar/i.test(node.name ?? '') || !types(node).some(type => ['Place', 'Organization', 'EducationalOrganization', 'LocalBusiness'].includes(type)), `${relative}: unsupported Manesar branch`);
  }
  const visible = decode(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ''));
  assert.ok(!/Manesar cent(?:er|re)|based in Manesar itself|without leaving Manesar/i.test(visible), `${relative}: unsupported Manesar-centre copy`);
  pages.set(relative, { html, roots, visible });
}

const sitemap = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
const index = pages.get('locations/index.html');
assert.ok(index?.visible.includes('Areas We Serve'));
assert.ok(index.visible.includes('Sector 85, Gurugram'));
const list = index.roots.find(node => node['@type'] === 'ItemList');
assert.equal(list.itemListElement.length, expectedLocationSlugs.length);

function checkServicePage(route, areaName) {
  const page = pages.get(`${route}/index.html`);
  assert.ok(page, `Missing preserved route: ${route}`);
  const services = page.roots.filter(node => node['@type'] === 'Service');
  assert.equal(services.length, 1, `${route}: one service, not a branch`);
  const service = services[0];
  assert.equal(service.provider['@id'], organizationId, route);
  assert.equal(service.areaServed['@type'], 'Place', route);
  assert.equal(service.areaServed.name, areaName, route);
  assert.ok(!service.address && !service.location && !service.geo && !service.parentOrganization, route);
  assert.ok(page.visible.includes('Sector 85, Gurugram'), `${route}: visible centre address`);
  assert.ok(page.visible.includes('subject to'), `${route}: availability qualification`);
  assert.ok(!/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(page.html), route);
  assert.ok(page.html.includes(`rel="canonical" href="${site}/${route}/"`), `${route}: canonical URL`);
  assert.ok(sitemap.includes(`<loc>${site}/${route}/</loc>`), `${route}: sitemap entry`);
  const faq = page.roots.find(node => node['@type'] === 'FAQPage');
  for (const question of faq?.mainEntity ?? []) {
    assert.ok(page.visible.includes(question.acceptedAnswer.text), `${route}: FAQ markup must match visible answers`);
  }
}

for (const slug of expectedLocationSlugs) {
  const [, city, sector] = slug.match(/(gurgaon|manesar)-sector-(\d+)$/);
  checkServicePage(`locations/${slug}`, `${city === 'manesar' ? 'Manesar' : 'Gurgaon'} Sector ${sector}`);
  assert.ok(index.html.includes(`href="/locations/${slug}"`), `${slug}: preserved directory link`);
  assert.ok(list.itemListElement.some(item => item.url === `${site}/locations/${slug}`), `${slug}: preserved ItemList entry`);
}
for (const slug of tuitionSlugs) {
  checkServicePage(`tuition/${slug}`, slug.endsWith('manesar') ? 'Manesar' : 'Gurgaon');
}
const contact = pages.get('contact/index.html');
assert.equal(contact.roots.find(node => node['@type'] === 'ContactPage').mainEntity['@id'], organizationId);
console.log(`PASS: ${pages.size} HTML files; ${jsonLdCount} JSON-LD blocks parsed; ${organizationPages} consistent organization definitions; ${expectedLocationSlugs.length} sector pages and ${tuitionSlugs.length} city tuition pages preserved, linked and validated.`);
