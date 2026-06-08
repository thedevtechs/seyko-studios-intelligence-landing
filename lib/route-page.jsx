import { getBodyHtml, getRouteMeta } from './static-site';

export function makeRouteMetadata(slug = 'home') {
  const meta = getRouteMeta(slug);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: meta.path
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.path
    },
    twitter: {
      title: meta.title,
      description: meta.description
    }
  };
}

export function StaticRoutePage({ slug = 'home' }) {
  return <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: getBodyHtml(slug) }} />;
}
