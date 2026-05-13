export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://seykostudios.com').replace(/\/$/, '');

export const seoTitle = 'Seyko Studios | Demand Intelligence for Plastic Surgery Practices';

export const seoDescription =
  'Demand intelligence for plastic surgery practices. Demand Radar shows what patients are asking, how competing surgeons earn trust, and where consults are being lost before patients reach the form.';

export const ogImage = {
  path: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Seyko Studios demand intelligence for plastic surgery practices'
};

export const seoKeywords = [
  'plastic surgery demand intelligence',
  'plastic surgery demand radar',
  'plastic surgery consult economics',
  'plastic surgery patient acquisition strategy',
  'plastic surgery consult demand',
  'plastic surgery competitor visibility',
  'plastic surgery consult friction analysis',
  'plastic surgery procedure demand tracking',
  'plastic surgery growth intelligence',
  'plastic surgery business intelligence',
  'aesthetic practice revenue intelligence',
  'Seyko Studios'
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
      audienceType: 'Plastic surgery practices'
    },
    serviceType: [
      'Demand intelligence',
      'Demand Radar Diagnostic',
      'Ongoing Demand Radar',
      'Multi-Location Group',
      'Patient demand read',
      'Competitor read',
      'Consult hesitation review',
      'More consult opportunities',
      'Procedure page priorities',
      'Consult economics',
      'Market intelligence',
      'Revenue context'
    ],
    knowsAbout: [
      'Patient questions before booking',
      'Procedure demand',
      'Competitor positioning',
      'Consult hesitation',
      'Consult economics',
      'Patient acquisition strategy',
      'Qualified consult demand',
      'Revenue context for plastic surgery practices'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Seyko Studios engagements',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Short Demand Radar breakdown',
          description:
            'A short sample of patient concerns, competitor patterns, consult hesitation points, and procedure demand.'
        },
        {
          '@type': 'Offer',
          name: 'Demand Radar Diagnostic',
          description:
            'A 7-day, one-time diagnostic covering patient demand, competitor positioning, consult hesitation, more consult opportunities, procedure page priorities, and an owner briefing.',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: 5000,
            maxPrice: 8000
          }
        },
        {
          '@type': 'Offer',
          name: 'Ongoing Demand Radar',
          description:
            'A monthly read for plastic surgery practice owners, including patient concerns, competitor movement, procedure demand, consult economics, landing-page priorities, and owner review.',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'USD',
            price: 10000,
            unitText: 'month'
          }
        },
        {
          '@type': 'Offer',
          name: 'Multi-Location Group',
          description:
            'A monthly engagement for premium multi-location plastic surgery practices, covering location-by-location demand, surgeon and procedure benchmarking, pricing and capacity observations, and group operator review.',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: 18000,
            maxPrice: 28000
          }
        }
      ]
    },
    slogan: 'Demand intelligence for plastic surgery practices.'
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
    '@type': 'WebPage',
    '@id': `${siteUrl}/#webpage`,
    url: siteUrl,
    name: seoTitle,
    description: seoDescription,
    isPartOf: {
      '@id': `${siteUrl}/#website`
    },
    about: {
      '@id': `${siteUrl}/#service`
    },
    inLanguage: 'en-US'
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteUrl}/#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does the diagnostic actually tell us?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It tells you where patient interest is showing up, what concerns are slowing people down, which competing surgeons are easier to trust, and which pages or proof points deserve attention first. The output is built for owner decisions, not a slide deck that dies in a folder.'
        }
      },
      {
        '@type': 'Question',
        name: 'How is this different from an SEO or ads audit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most audits start with channels: rankings, traffic, campaigns, conversion rate. We start with the patient decision: what they are afraid of, how they compare surgeons, what proof they need, and where your practice becomes harder to choose. Your agency can still execute; this gives them a sharper brief.'
        }
      },
      {
        '@type': 'Question',
        name: 'What evidence do you use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We review search behavior, Google results, People Also Ask, Reddit and forum threads, review language, competitor pages, before-and-after context, pricing cues, and the practice’s own consult path. We do not treat any single source as truth; the useful patterns are the ones that repeat across places patients actually use.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do we need to give you internal data?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not for the short breakdown. For the 7-day diagnostic, internal data helps but is not required. If you can share consult volume by procedure, booked consult rate, surgery conversion, average ticket, and top lead sources, we can tie the outside market read to the economics inside the practice.'
        }
      },
      {
        '@type': 'Question',
        name: 'What happens after the read?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You decide whether the opportunities are worth acting on. Some practices take the diagnostic and hand priorities to their internal team. Some ask us to stay close with a monthly Demand Radar. Buildouts only come after the read shows a clear reason to do them.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do you handle sensitive practice data?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sensitive materials stay in a private cloud workspace with restricted access, not scattered across personal drives or generic AI tools. We can work from public-market research alone, but when a practice shares internal numbers, we keep them separated by client, limit access to the engagement team, and use them only to connect the outside demand read to practice economics.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do you avoid becoming another vendor in the stack?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We do not ask to own every channel. The work is designed to make existing teams sharper: what to say, what to prove, which procedure pages need attention, and where patient hesitation is showing up. If you already have an agency, creative team, or internal marketer, Demand Radar should give them better priorities.'
        }
      }
    ]
  }
];
