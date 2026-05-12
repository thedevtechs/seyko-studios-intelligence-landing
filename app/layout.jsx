import Script from 'next/script';
import { getInlineStyle, getScreenLabel } from '../lib/static-site';
import { seoDescription, seoKeywords, seoTitle, siteUrl, structuredData } from '../lib/seo';
import '../assets/styles.css';

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
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: '/',
    siteName: 'Seyko Studios',
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary',
    title: seoTitle,
    description: seoDescription
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
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: getInlineStyle() }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body data-screen-label={getScreenLabel()} suppressHydrationWarning>
        {children}
        <Script src="/assets/site.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
