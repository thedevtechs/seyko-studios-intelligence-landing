import { siteUrl } from '../lib/seo';
import { routeList } from '../lib/site-pages';

export default function sitemap() {
  return routeList.map(route => ({
    url: `${siteUrl}${route.path === '/' ? '' : route.path}`,
    lastModified: new Date(),
    changeFrequency: route.path === '/' ? 'monthly' : 'yearly',
    priority: route.path === '/' ? 1 : route.path === '/request-snapshot' ? 0.9 : 0.7
  }));
}
