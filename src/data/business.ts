// Add a physical centre only after its address and teaching operations are verified.
// Service areas below describe coverage, not additional branches.
export const siteUrl = 'https://www.goodmarksclasses.com';
export const organizationId = `${siteUrl}/#organization`;

export const teachingCentre = {
  name: 'Good Marks Classes – Sector 85, Gurugram',
  addressLabel: 'Sector 85, Gurugram, Haryana, India',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sector 85',
    addressLocality: 'Gurugram',
    addressRegion: 'Haryana',
    addressCountry: 'IN'
  },
  // Retained from the existing contact-page map; no new geocoding claim.
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.39628499476872,
    longitude: 76.9489722760682
  },
  mapsUrl: 'https://share.google/vhB5jd28c0iT57ikX'
};

export const serviceAreaNames = [
  ...Array.from({ length: 22 }, (_, i) => `Gurgaon Sector ${i + 78}`),
  'Gurgaon Sector 88A',
  ...Array.from({ length: 5 }, (_, i) => `Manesar Sector ${i + 1}`),
  'NSG Manesar'
];

export const locationAnswer = 'Our main teaching centre is in Sector 85, Gurugram, Haryana. We serve families across Gurgaon Sectors 78–99, including Sector 88A, Manesar Sectors 1–5 and NSG Manesar. Classroom sessions take place at Sector 85; live online classes, hybrid programmes and home tuition are available subject to course and tutor availability. Contact us to confirm a suitable format and timetable.';

export const learningFormatsAnswer = 'We offer classroom sessions at our Sector 85, Gurugram centre, live online classes, hybrid programmes and home tuition for families across Gurgaon and Manesar. Course, timetable and home-tutor availability are confirmed when you enquire.';
