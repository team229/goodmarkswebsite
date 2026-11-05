import { organizationId, serviceAreaNames, siteUrl, teachingCentre } from '../data/business';

// One identity on every page. Area-specific services reference this provider.
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': organizationId,
  name: 'Good Marks Classes',
  url: siteUrl,
  logo: `${siteUrl}/good-marks-logo.png`,
  image: `${siteUrl}/good-marks-logo.png`,
  telephone: '+918800880028',
  email: 'info@goodmarksclasses.com',
  address: teachingCentre.address,
  geo: teachingCentre.geo,
  hasMap: teachingCentre.mapsUrl,
  location: {
    '@type': 'Place',
    '@id': `${siteUrl}/#sector-85-centre`,
    name: teachingCentre.name,
    address: teachingCentre.address,
    geo: teachingCentre.geo,
    hasMap: teachingCentre.mapsUrl
  },
  areaServed: serviceAreaNames.map(name => ({ '@type': 'Place', name })),
  founder: {
    '@type': 'Person',
    name: 'Sunil Gola',
    description: 'Founder, B.Tech, Delhi Technological University (DTU)'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+918800880028',
    email: 'info@goodmarksclasses.com',
    contactType: 'Customer Support',
    availableLanguage: ['en', 'hi']
  },
  sameAs: [
    'https://www.instagram.com/goodmarksclassesgurgaon/',
    'https://youtube.com/@sunilgolaphysicsclasses?si=4yL9JVuHUPDfdTYQ'
  ]
};
