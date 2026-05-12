export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://seykostudios.com').replace(/\/$/, '');

export const seoTitle = 'Seyko Studios | Growth Intelligence for Plastic Surgery Practices';

export const seoDescription =
  'Growth intelligence for plastic surgery practices: demand radar, competitive analysis, growth opportunities, reporting, and revenue intelligence from Seyko Studios.';

export const seoKeywords = [
  'plastic surgery growth intelligence',
  'plastic surgery practice growth',
  'plastic surgery business intelligence',
  'plastic surgery competitive analysis',
  'aesthetic practice revenue intelligence',
  'plastic surgery pricing benchmarks',
  'plastic surgery demand radar',
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
      'Demand radar',
      'Competitive analysis',
      'Growth opportunities and reporting',
      'Revenue intelligence engine'
    ],
    slogan: 'Growth intelligence for plastic surgery practices.'
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
          text: "Because focus compounds. Our pricing benchmarks, demand radar, and surgeon-level comparisons all get sharper with every practice we serve. We considered dental, med spa, and derm - plastic surgery is the right combination of ticket size, demand variance, and how much operators want a real partner. We're committed to never serving a second vertical."
        }
      },
      {
        '@type': 'Question',
        name: 'Are you a marketing agency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "No. We don't run your ads, post your reels, or manage your SEO. We tell you which procedures to push, where, at what price, and which competitors to ignore. Your in-house marketing or external agency executes - and they actually have a brief for the first time."
        }
      },
      {
        '@type': 'Question',
        name: 'What size practice is this for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Sweet spot is $5M-$50M ARR, founder-led or PE-platform, with 2+ surgeons. Below $5M, the math doesn't really work. Above $50M and you'll want the Platform tier. Either way, an intro call is the right way to find out - it costs you nothing."
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
          text: "Because demand signals take 2-3 cycles to read past noise, pricing tests need a quarter to compound, and referral rings need a season to land. Shorter than that and we'd just be selling reports. We're not selling reports."
        }
      },
      {
        '@type': 'Question',
        name: "What if we're not a fit?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "We say so on the intro call and send you a short list of three operators we trust. We've turned down 11 retainers since we started - the cap on capacity is real, and we'd rather you go somewhere you'll be served well."
        }
      }
    ]
  }
];
