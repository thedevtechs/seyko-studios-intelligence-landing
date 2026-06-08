import { industries, routeList } from './site-pages';

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://seykostudios.com').replace(/\/$/, '');

export const seoTitle = 'Seyko Studios | Demand Intelligence Systems';

export const seoDescription =
  'Seyko Studios is a family-run demand intelligence agency serving elective healthcare, high-ticket local services, and B2B services.';

export const ogImage = {
  path: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Seyko Studios demand intelligence systems'
};

export const seoKeywords = [
  'demand intelligence systems',
  'buyer demand intelligence',
  'high-value service business marketing',
  'elective healthcare demand intelligence',
  'local services demand radar',
  'B2B buyer intent intelligence',
  'competitor angle map',
  'buyer objection brief',
  'conversion opportunity map',
  'Seyko Studios'
];

const pricedOffers = [
  ['Demand Snapshot', '2500', 'One focused market read for one offer, market, and demand lane.'],
  ['Radar Buildout', '7500', 'A deeper demand, competitor, objection, and conversion brief for execution planning.'],
  ['Monthly Demand Radar', '9500', 'Ongoing market intelligence for demand, competitor movement, and priority calls.'],
  ['Embedded Intelligence', '18000', 'Multi-market or account-level intelligence for larger service businesses.']
];

export const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Seyko Studios',
    url: siteUrl,
    email: 'partners@seykostudios.com',
    description: seoDescription,
    slogan: 'A demand intelligence agency for three high-value service markets.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'partners@seykostudios.com',
      contactType: 'partnerships',
      availableLanguage: 'English'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#service`,
    name: 'Seyko Studios',
    url: siteUrl,
    provider: {
      '@id': `${siteUrl}/#organization`
    },
    areaServed: {
      '@type': 'Place',
      name: 'North America'
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'High-value service businesses'
    },
    serviceType: [
      'Demand intelligence agency',
      'Demand intelligence systems',
      'Procedure Demand Radar',
      'Project Demand Radar',
      'Buyer Demand Radar',
      'Demand snapshot',
      'Competitor angle map',
      'Buyer objection brief',
      'Page, ad, and outreach angle plan'
    ],
    knowsAbout: [
      'Buyer intent',
      'Procedure demand',
      'High-ticket local service demand',
      'B2B buyer intent',
      'Competitor positioning',
      'Conversion friction',
      'Qualified consults',
      'Booked estimates',
      'Qualified sales conversations'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Seyko Studios demand radar systems',
      itemListElement: [
        ...industries.map(industry => ({
          '@type': 'Offer',
          name: industry.offer,
          description: industry.outcome,
          category: industry.name,
          url: `${siteUrl}${industry.path}`
        })),
        ...pricedOffers.map(offer => ({
          '@type': 'Offer',
          name: offer[0],
          description: offer[2],
          url: `${siteUrl}/pricing`,
          priceCurrency: 'USD',
          price: offer[1]
        }))
      ]
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Seyko Studios',
    url: siteUrl,
    publisher: {
      '@id': `${siteUrl}/#organization`
    },
    inLanguage: 'en-US'
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${siteUrl}/#site-pages`,
    name: 'Seyko Studios pages',
    itemListElement: routeList.map((route, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: route.navLabel,
      url: `${siteUrl}${route.path === '/' ? '' : route.path}`
    }))
  }
];
