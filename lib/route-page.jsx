import { getBodyHtml, getRouteMeta } from './static-site';
import { getRouteStructuredData, ogImage } from './seo';

export function makeRouteMetadata(slug = 'home') {
  const meta = getRouteMeta(slug);

  return {
    title: meta.title,
    description: meta.description,
    ...(meta.keywords?.length ? { keywords: meta.keywords } : {}),
    alternates: {
      canonical: meta.path
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.path,
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
      title: meta.title,
      description: meta.description,
      images: [ogImage.path]
    }
  };
}

export function StaticRoutePage({ slug = 'home' }) {
  const routeStructuredData = JSON.stringify(getRouteStructuredData(slug)).replace(/</g, '\\u003c');
  const bodyHtml = getBodyHtml(slug);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: routeStructuredData }}
      />
      <div
        style={{ display: 'contents' }}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </>
  );
}
