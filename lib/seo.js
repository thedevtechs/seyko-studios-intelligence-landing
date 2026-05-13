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
        name: 'Why only plastic surgery?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Because focus compounds. Pricing, patient concerns, and surgeon comparisons all get sharper when we stay in one market. We considered dental, med spa, and derm - plastic surgery is the right mix of ticket size, decision anxiety, and founder involvement.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are you a marketing agency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "No. We don't run your ads, post your reels, or manage your SEO. We show why interested patients may not be booking: unanswered concerns, stronger competitor proof, unclear procedure pages, and the next fixes your team or agency should focus on."
        }
      },
      {
        '@type': 'Question',
        name: 'What size practice is this for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sweet spot for the ongoing Demand Radar is $5M-$50M ARR, founder-led or platform, with meaningful procedure volume. The one-time Demand Radar Diagnostic is the better starting point when you want a clear market read before committing to a retainer.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can we start with a one-time project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The Demand Radar Diagnostic is a 7-day, fixed-scope project. You get a patient demand read, competitor read, consult hesitation review, procedure page priorities, and an owner briefing.'
        }
      },
      {
        '@type': 'Question',
        name: 'How is patient data handled?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Carefully. Everything flows through signed BAAs. Our peer benchmarking is de-identified and aggregated to 5+ clinic cohorts - never re-exposed at the individual practice level. We'll refuse a project that violates this."
        }
      },
      {
        '@type': 'Question',
        name: 'Why the 12-month minimum on the retainer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Because the market changes. Patient concerns shift, competitors adjust their pages, and consult economics need enough cycles to separate a real pattern from a one-off. If you only need the initial read, start with the 7-day diagnostic.'
        }
      },
      {
        '@type': 'Question',
        name: "What if we're not a fit?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "We say so on the intro call and send you a short list of three people we trust. We've turned down 11 retainers since we started - the cap on capacity is real, and we'd rather you go somewhere you'll be served well."
        }
      }
    ]
  }
];
