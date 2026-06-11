import {
  businessDataIntelligenceFaq,
  competitiveIntelligenceServicesFaq,
  industries,
  industryIntelligenceFaq,
  marketIntelligenceAgencyFaq,
  methodologyFaq,
  operatorInsights,
  operatorIntelligenceFaq,
  sampleMarketReportFaq,
  routeList,
  siteUpdatedIso
} from './site-pages.js';

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://seykostudios.com').replace(/\/$/, '');

export const seoTitle = 'Demand and Industry Intelligence for Operators | Seyko Studios';

export const seoDescription =
  'Seyko Studios turns search, competitor, review, market, and business data signals into demand and industry intelligence for high-value service operators.';

export const ogImage = {
  path: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Seyko Studios demand and industry intelligence for operators'
};

export const seoKeywords = [
  'industry intelligence for operators',
  'operator intelligence',
  'operator intelligence brief',
  'business data intelligence',
  'market intelligence agency',
  'competitive intelligence for service businesses',
  'operator intelligence brief',
  'business data insights',
  'industry insight for growth',
  'market insight for operators',
  'demand intelligence for operators',
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

const absoluteUrl = path => `${siteUrl}${path === '/' ? '' : path}`;

const offerItems = pricedOffers.map(offer => ({
  '@type': 'Offer',
  name: offer[0],
  description: offer[2],
  url: `${siteUrl}/pricing`,
  priceCurrency: 'USD',
  price: offer[1]
}));

export const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Seyko Studios',
    url: siteUrl,
    email: 'partners@seykostudios.com',
    description: seoDescription,
    slogan: 'Demand and industry intelligence for operators in high-value service markets.',
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
      'Operator intelligence briefs',
      'Industry intelligence agency',
      'Market intelligence agency',
      'Business data intelligence',
      'Competitive intelligence',
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
      'Industry intelligence',
      'Market intelligence',
      'Business data insights',
      'Competitive intelligence',
      'Operator intelligence briefs',
      'Operator intelligence',
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
        ...offerItems
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

function findRoute(slug = 'home') {
  return routeList.find(route => route.slug === slug) || routeList[0];
}

function getBreadcrumbItems(route) {
  const home = { name: 'Home', url: siteUrl };
  if (route.path === '/') return [home];

  const insight = operatorInsights.find(item => item.slug === route.slug);
  if (route.slug === 'insights') return [home, { name: 'Insights', url: `${siteUrl}/insights` }];
  if (insight) {
    return [
      home,
      { name: 'Insights', url: `${siteUrl}/insights` },
      { name: insight.navLabel, url: absoluteUrl(insight.path) }
    ];
  }

  const industry = industries.find(item => item.slug === route.slug);
  if (industry) {
    return [
      home,
      { name: 'Industries', url: `${siteUrl}/#industries` },
      { name: industry.name, url: absoluteUrl(industry.path) }
    ];
  }

  return [home, { name: route.navLabel || route.title, url: absoluteUrl(route.path) }];
}

function routeArticle(route) {
  const insight = operatorInsights.find(item => item.slug === route.slug);
  if (!insight) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${absoluteUrl(insight.path)}#article`,
    headline: insight.title,
    description: insight.summary,
    url: absoluteUrl(insight.path),
    mainEntityOfPage: {
      '@id': `${absoluteUrl(insight.path)}#webpage`
    },
    author: {
      '@id': `${siteUrl}/#organization`
    },
    publisher: {
      '@id': `${siteUrl}/#organization`
    },
    datePublished: siteUpdatedIso,
    dateModified: siteUpdatedIso,
    inLanguage: 'en-US',
    about: [
      'Business data intelligence',
      'Industry intelligence',
      'Market intelligence',
      'Competitive intelligence',
      'Operator decision making'
    ],
    ...(insight.searchTerms?.length ? { keywords: insight.searchTerms.join(', ') } : {}),
    articleSection: 'Operator Insights'
  };
}

function routeInsightCollection(route) {
  if (route.slug !== 'insights') return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${siteUrl}/insights#insight-list`,
    name: 'Seyko Studios Operator Insights',
    description:
      'Operator-facing answers about business data, industry intelligence, market intelligence, competitive intelligence, demand intelligence, and agency evaluation.',
    itemListElement: operatorInsights.map((insight, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: insight.title,
      description: insight.summary,
      url: absoluteUrl(insight.path)
    }))
  };
}

function insightCreativeWorks() {
  return operatorInsights.map(insight => ({
    '@type': 'Article',
    name: insight.title,
    headline: insight.title,
    description: insight.summary,
    url: absoluteUrl(insight.path)
  }));
}

function routeFaq(route) {
  const insight = operatorInsights.find(item => item.slug === route.slug);
  const faqItems =
    insight?.faq ||
    (route.slug === 'industry-intelligence' ? industryIntelligenceFaq : null) ||
    (route.slug === 'operator-intelligence' ? operatorIntelligenceFaq : null) ||
    (route.slug === 'market-intelligence-agency' ? marketIntelligenceAgencyFaq : null) ||
    (route.slug === 'business-data-intelligence' ? businessDataIntelligenceFaq : null) ||
    (route.slug === 'methodology' ? methodologyFaq : null) ||
    (route.slug === 'sample-market-intelligence-report' ? sampleMarketReportFaq : null) ||
    (route.slug === 'competitive-intelligence-services' ? competitiveIntelligenceServicesFaq : null);
  if (!faqItems?.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(route.path)}#faq`,
    url: absoluteUrl(route.path),
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item[0],
      acceptedAnswer: {
        '@type': 'Answer',
        text: item[1]
      }
    }))
  };
}

function routeService(route) {
  const industry = industries.find(item => item.slug === route.slug);

  if (route.slug === 'market-intelligence-agency') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${absoluteUrl(route.path)}#service`,
      name: 'Market Intelligence Agency for Operators',
      url: absoluteUrl(route.path),
      provider: {
        '@id': `${siteUrl}/#organization`
      },
      serviceType: [
        'Market intelligence agency',
        'Market intelligence services',
        'Business data intelligence',
        'Competitive intelligence services',
        'Industry intelligence agency',
        'Demand intelligence'
      ],
      description:
        'Demand, competitor, review, search, and business data briefs for operators deciding where to focus growth budget.',
      areaServed: {
        '@type': 'Place',
        name: 'North America'
      },
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'High-value service operators'
      },
      offers: offerItems,
      hasPart: insightCreativeWorks(),
      potentialAction: {
        '@type': 'CommunicateAction',
        name: 'Request a demand snapshot',
        target: `${siteUrl}/request-snapshot`
      }
    };
  }

  if (route.slug === 'operator-intelligence') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${absoluteUrl(route.path)}#service`,
      name: 'Operator Intelligence Briefs',
      url: absoluteUrl(route.path),
      provider: {
        '@id': `${siteUrl}/#organization`
      },
      serviceType: [
        'Operator intelligence',
        'Operator intelligence brief',
        'Business data intelligence for operators',
        'Industry intelligence for operators',
        'Decision intelligence for operators',
        'Market intelligence for operators'
      ],
      description:
        'Operator intelligence briefs connecting business data, industry intelligence, market demand, competitor pressure, and conversion friction into clearer growth decisions.',
      areaServed: {
        '@type': 'Place',
        name: 'North America'
      },
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'High-value service operators'
      },
      offers: offerItems,
      hasPart: insightCreativeWorks(),
      potentialAction: {
        '@type': 'CommunicateAction',
        name: 'Request a demand snapshot',
        target: `${siteUrl}/request-snapshot`
      }
    };
  }

  if (route.slug === 'business-data-intelligence') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${absoluteUrl(route.path)}#service`,
      name: 'Business Data Intelligence for Operators',
      url: absoluteUrl(route.path),
      provider: {
        '@id': `${siteUrl}/#organization`
      },
      serviceType: [
        'Business data intelligence',
        'Business data intelligence services',
        'Business data insights',
        'Market intelligence',
        'Demand intelligence',
        'Competitive intelligence'
      ],
      description:
        'Business data intelligence services turning CRM, sales, website, market, and competitor signals into growth decisions for operators.',
      areaServed: {
        '@type': 'Place',
        name: 'North America'
      },
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'High-value service operators'
      },
      offers: offerItems,
      hasPart: insightCreativeWorks(),
      potentialAction: {
        '@type': 'CommunicateAction',
        name: 'Request a demand snapshot',
        target: `${siteUrl}/request-snapshot`
      }
    };
  }

  if (route.slug === 'industry-intelligence') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${absoluteUrl(route.path)}#service`,
      name: 'Industry Intelligence for Operators',
      url: absoluteUrl(route.path),
      provider: {
        '@id': `${siteUrl}/#organization`
      },
      serviceType: [
        'Industry intelligence',
        'Business data intelligence',
        'Market intelligence',
        'Competitive intelligence',
        'Operator intelligence briefs'
      ],
      description:
        'Business data, market insight, competitor pressure, buyer questions, and conversion gap briefs for operators deciding where to focus next.',
      areaServed: {
        '@type': 'Place',
        name: 'North America'
      },
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'High-value service operators'
      },
      offers: offerItems,
      potentialAction: {
        '@type': 'CommunicateAction',
        name: 'Request a demand snapshot',
        target: `${siteUrl}/request-snapshot`
      }
    };
  }

  if (route.slug === 'competitive-intelligence-services') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${absoluteUrl(route.path)}#service`,
      name: 'Competitive Intelligence Services for Operators',
      url: absoluteUrl(route.path),
      provider: {
        '@id': `${siteUrl}/#organization`
      },
      serviceType: [
        'Competitive intelligence services',
        'Competitive intelligence for service businesses',
        'Competitor analysis for service business',
        'Local competitor analysis',
        'Market intelligence',
        'Demand intelligence'
      ],
      description:
        'Competitor pages, offers, reviews, proof, pricing cues, and conversion paths turned into sharper market decisions for service operators.',
      areaServed: {
        '@type': 'Place',
        name: 'North America'
      },
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'High-value service operators'
      },
      offers: offerItems,
      hasPart: insightCreativeWorks(),
      potentialAction: {
        '@type': 'CommunicateAction',
        name: 'Request a demand snapshot',
        target: `${siteUrl}/request-snapshot`
      }
    };
  }

  if (!industry) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(route.path)}#service`,
    name: industry.offer,
    url: absoluteUrl(industry.path),
    provider: {
      '@id': `${siteUrl}/#organization`
    },
    serviceType: [industry.offer, industry.name, 'Demand intelligence', 'Market intelligence'],
    description: industry.outcome,
    areaServed: {
      '@type': 'Place',
      name: 'North America'
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: industry.buyers
    },
    offers: offerItems,
    potentialAction: {
      '@type': 'CommunicateAction',
      name: 'Request a demand snapshot',
      target: `${siteUrl}/request-snapshot`
    }
  };
}

function routeReport(route) {
  if (route.slug !== 'sample-market-intelligence-report') return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Report',
    '@id': `${absoluteUrl(route.path)}#report`,
    name: 'Sample Market Intelligence Report',
    headline: 'Sample Market Intelligence Report',
    description:
      'A representative Demand Radar report showing demand lanes, competitor pressure, buyer objections, confidence labels, and recommended next moves.',
    url: absoluteUrl(route.path),
    author: {
      '@id': `${siteUrl}/#organization`
    },
    publisher: {
      '@id': `${siteUrl}/#organization`
    },
    datePublished: siteUpdatedIso,
    dateModified: siteUpdatedIso,
    inLanguage: 'en-US',
    about: [
      'Sample market intelligence report',
      'Market intelligence report example',
      'Demand intelligence',
      'Competitive intelligence',
      'Business data intelligence'
    ],
    keywords: 'sample market intelligence report, market intelligence report example, sample demand radar, business data intelligence report example'
  };
}

export function getRouteStructuredData(slug = 'home') {
  const route = findRoute(slug);
  const url = absoluteUrl(route.path);
  const breadcrumbItems = getBreadcrumbItems(route);
  const service = routeService(route);
  const article = routeArticle(route);
  const report = routeReport(route);
  const insightCollection = routeInsightCollection(route);
  const faq = routeFaq(route);
  const hasInsightParts = ['home', 'operator-intelligence', 'market-intelligence-agency', 'business-data-intelligence', 'industry-intelligence', 'insights'].includes(route.slug);

  return [
    {
      '@context': 'https://schema.org',
      '@type': route.slug === 'insights' ? 'CollectionPage' : 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: route.title,
      description: route.description,
      isPartOf: {
        '@id': `${siteUrl}/#website`
      },
      publisher: {
        '@id': `${siteUrl}/#organization`
      },
      inLanguage: 'en-US',
      about: service
        ? { '@id': service['@id'] }
        : article
          ? { '@id': article['@id'] }
          : report
            ? { '@id': report['@id'] }
          : { '@id': `${siteUrl}/#service` },
      ...(hasInsightParts ? { hasPart: insightCreativeWorks() } : {}),
      ...(faq ? { mainEntity: { '@id': faq['@id'] } } : {})
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumbs`,
      itemListElement: breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    },
    ...(service ? [service] : []),
    ...(article ? [article] : []),
    ...(report ? [report] : []),
    ...(insightCollection ? [insightCollection] : []),
    ...(faq ? [faq] : [])
  ];
}
