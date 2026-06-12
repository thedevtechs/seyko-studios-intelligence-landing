import { getInlineStyle, getScreenLabel } from '../lib/static-site';
import { ogImage, seoDescription, seoKeywords, seoTitle, siteUrl, structuredData } from '../lib/seo';
import Script from 'next/script';
import '../assets/styles.css';

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-T2RCPXHQRX';
const hubspotPortalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || process.env.HUBSPOT_PORTAL_ID || '51463302';
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || process.env.GOOGLE_SITE_VERIFICATION || '';
const microsoftSiteVerification = process.env.NEXT_PUBLIC_MICROSOFT_SITE_VERIFICATION || process.env.MICROSOFT_SITE_VERIFICATION || '';
const faviconVersion = 'nav-s-centered-20260612';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: '%s | Seyko Studios'
  },
  description: seoDescription,
  applicationName: 'Seyko Studios',
  keywords: seoKeywords,
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: [
      {
        url: `/favicon.ico?v=${faviconVersion}`,
        sizes: 'any'
      },
      {
        url: `/favicon.svg?v=${faviconVersion}`,
        type: 'image/svg+xml'
      },
      {
        url: `/favicon-32x32.png?v=${faviconVersion}`,
        type: 'image/png',
        sizes: '32x32'
      }
    ],
    shortcut: `/favicon.ico?v=${faviconVersion}`,
    apple: [
      {
        url: `/apple-touch-icon.png?v=${faviconVersion}`,
        sizes: '180x180',
        type: 'image/png'
      }
    ]
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: '/',
    siteName: 'Seyko Studios',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: ogImage.path,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt,
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: seoTitle,
    description: seoDescription,
    images: [ogImage.path]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1
    }
  },
  category: 'business intelligence'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: getInlineStyle() }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {googleSiteVerification ? <meta name="google-site-verification" content={googleSiteVerification} /> : null}
        {microsoftSiteVerification ? <meta name="msvalidate.01" content={microsoftSiteVerification} /> : null}
        <link rel="alternate" type="application/atom+xml" title="Seyko Studios Operator Insights" href="/feed.xml" />
        <link rel="alternate" type="text/plain" title="Seyko Studios Content Index" href="/content-index.txt" />
      </head>
      <body data-screen-label={getScreenLabel()} data-ga-measurement-id={googleAnalyticsId || undefined} suppressHydrationWarning>
        {children}
        {googleAnalyticsId ? (
          <>
            <Script
              id="google-tag-loader"
              src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(googleAnalyticsId)}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  window.gtag = window.gtag || gtag;
                  gtag('js', new Date());
                  gtag('config', ${JSON.stringify(googleAnalyticsId)});
                `
              }}
            />
          </>
        ) : null}
        {hubspotPortalId ? (
          <Script
            id="hs-script-loader"
            src={`https://js.hs-scripts.com/${encodeURIComponent(hubspotPortalId)}.js`}
            strategy="afterInteractive"
          />
        ) : null}
        <Script src="/assets/site.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
