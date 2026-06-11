# Seyko SEO Launch and Indexing Checklist

Last updated: June 8, 2026

## Goal

Get the operator intelligence pages discovered, indexed, measured, and improved against searches for business data intelligence, industry intelligence, market intelligence, competitive intelligence, and demand intelligence.

## Before Deployment

- Set `NEXT_PUBLIC_SITE_URL=https://seykostudios.com` in production.
- Set `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-T2RCPXHQRX`.
- Set `NEXT_PUBLIC_HUBSPOT_PORTAL_ID=51463302`.
- Add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` after Google Search Console provides the token.
- Add `NEXT_PUBLIC_MICROSOFT_SITE_VERIFICATION` after Bing Webmaster Tools provides the token.
- Run `npm run generate:og` after any major positioning or visual change.
- Run `npm run seo:urls` and keep the generated priority list handy for URL inspection and rank tracking.
- Run `npm run verify:seo`.
- Run `npm run build`.

## Immediate Post-Deploy Checks

- Open `https://seykostudios.com/robots.txt` and confirm it points to `https://seykostudios.com/sitemap.xml`.
- Open `https://seykostudios.com/sitemap.xml` and confirm the priority pages are present.
- Open `https://seykostudios.com/feed.xml` and confirm operator insights are present.
- Open `https://seykostudios.com/content-index.txt` and confirm the business data intelligence services phrase is present.
- Open `https://seykostudios.com/og-image.png` and confirm the Demand Radar preview image loads.
- View source on `/business-data-intelligence` and confirm JSON-LD, canonical, Open Graph, and Twitter metadata are present.

## Submit First In Google Search Console

Submit the sitemap first:

- `https://seykostudios.com/sitemap.xml`

Then inspect and request indexing for these URLs first:

- `https://seykostudios.com/`
- `https://seykostudios.com/operator-intelligence`
- `https://seykostudios.com/market-intelligence-agency`
- `https://seykostudios.com/business-data-intelligence`
- `https://seykostudios.com/industry-intelligence`
- `https://seykostudios.com/competitive-intelligence-services`
- `https://seykostudios.com/sample-market-intelligence-report`
- `https://seykostudios.com/methodology`
- `https://seykostudios.com/insights`
- `https://seykostudios.com/insights/business-data-market-intelligence`
- `https://seykostudios.com/insights/business-data-checklist-growth-decisions`
- `https://seykostudios.com/insights/industry-intelligence-service-businesses`
- `https://seykostudios.com/insights/market-intelligence-report-service-businesses`
- `https://seykostudios.com/insights/competitive-intelligence-local-markets`
- `https://seykostudios.com/insights/market-intelligence-vs-business-intelligence`
- `https://seykostudios.com/insights/business-intelligence-service-businesses`
- `https://seykostudios.com/insights/demand-intelligence-vs-lead-generation`
- `https://seykostudios.com/insights/choose-market-before-increasing-ad-spend`
- `https://seykostudios.com/insights/before-hiring-marketing-agency`
- `https://seykostudios.com/pricing`
- `https://seykostudios.com/request-snapshot`

## Submit In Bing Webmaster Tools

- Submit `https://seykostudios.com/sitemap.xml`.
- Inspect the same priority URLs listed above.
- Confirm Bing can fetch `robots.txt`, `sitemap.xml`, and `content-index.txt`.

## Rank Tracker Seeds

Add these terms first:

- business data intelligence services
- operator intelligence brief
- operator intelligence for operators
- business data intelligence for operators
- business data checklist
- what business data should I track
- business data market intelligence
- business data insights for growth
- how to use business data for marketing
- market intelligence agency
- market intelligence services
- industry intelligence for operators
- industry intelligence for service businesses
- industry insights for growth strategy
- market intelligence report for service businesses
- sample market intelligence report
- competitive intelligence services
- competitive intelligence for service businesses
- demand intelligence vs lead generation
- choose a market before increasing ad spend
- market selection before advertising
- business data before ad spend
- before hiring marketing agency

## First 8 Weeks

- Check Google Search Console weekly for impressions, position, and click-through rate.
- Improve pages with average position 8-30 before creating more content.
- Watch for queries where Google rewrites titles or snippets; tighten titles/descriptions only when the rewrite points to a mismatch.
- Compare request-snapshot events by landing page in GA4.
- Add one new page only when Search Console shows repeated impressions for a query the current site does not answer directly.
