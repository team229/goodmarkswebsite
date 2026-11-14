// Sector 85 is the verified teaching centre. Other places are service areas.
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': 'https://www.goodmarksclasses.com/#organization',
  name: 'Good Marks Classes',
  url: 'https://www.goodmarksclasses.com',
  logo: 'https://www.goodmarksclasses.com/good-marks-logo.png',
  image: 'https://www.goodmarksclasses.com/good-marks-logo.png',
  telephone: '+918800880028',
  email: 'info@goodmarksclasses.com',
  founder: { '@type': 'Person', name: 'Sunil Gola', description: 'Founder, B.Tech, Delhi Technological University (DTU)' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sector 85',
    addressLocality: 'Gurugram',
    addressRegion: 'Haryana',
    addressCountry: 'IN'
  },
  geo: { '@type': 'GeoCoordinates', latitude: 28.39628499476872, longitude: 76.9489722760682 },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=GOOD+MARKS+CLASSES+28.39628499476872,76.9489722760682',
  areaServed: [
    { '@type': 'Place', name: 'Gurgaon Sector 78' },
    { '@type': 'Place', name: 'Gurgaon Sector 79' },
    { '@type': 'Place', name: 'Gurgaon Sector 80' },
    { '@type': 'Place', name: 'Gurgaon Sector 81' },
    { '@type': 'Place', name: 'Gurgaon Sector 82' },
    { '@type': 'Place', name: 'Gurgaon Sector 83' },
    { '@type': 'Place', name: 'Gurgaon Sector 84' },
    { '@type': 'Place', name: 'Gurgaon Sector 85' },
    { '@type': 'Place', name: 'Gurgaon Sector 86' },
    { '@type': 'Place', name: 'Gurgaon Sector 87' },
    { '@type': 'Place', name: 'Gurgaon Sector 88' },
    { '@type': 'Place', name: 'Gurgaon Sector 88A' },
    { '@type': 'Place', name: 'Gurgaon Sector 89' },
    { '@type': 'Place', name: 'Gurgaon Sector 90' },
    { '@type': 'Place', name: 'Gurgaon Sector 91' },
    { '@type': 'Place', name: 'Gurgaon Sector 92' },
    { '@type': 'Place', name: 'Gurgaon Sector 93' },
    { '@type': 'Place', name: 'Gurgaon Sector 94' },
    { '@type': 'Place', name: 'Gurgaon Sector 95' },
    { '@type': 'Place', name: 'Gurgaon Sector 96' },
    { '@type': 'Place', name: 'Gurgaon Sector 97' },
    { '@type': 'Place', name: 'Gurgaon Sector 98' },
    { '@type': 'Place', name: 'Gurgaon Sector 99' },
    { '@type': 'Place', name: 'Manesar Sector 1' },
    { '@type': 'Place', name: 'Manesar Sector 2' },
    { '@type': 'Place', name: 'Manesar Sector 3' },
    { '@type': 'Place', name: 'Manesar Sector 4' },
    { '@type': 'Place', name: 'Manesar Sector 5' },
    { '@type': 'Place', name: 'NSG Manesar' }
  ],
  contactPoint: {
    '@type': 'ContactPoint', telephone: '+918800880028',
    email: 'info@goodmarksclasses.com', contactType: 'Customer Support',
    availableLanguage: ['en', 'hi']
  },
  sameAs: [
    'https://www.instagram.com/goodmarksclassesgurgaon/',
    'https://youtube.com/@sunilgolaphysicsclasses?si=4yL9JVuHUPDfdTYQ'
  ]
};
