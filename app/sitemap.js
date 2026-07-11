import { siteUrl } from '../lib/seo.js';
import { routeList, siteUpdatedIso } from '../lib/site-pages.js';

export const monthlyRoutes = new Set([
  '/',
  '/services',
  '/branding',
  '/web-development',
  '/seo',
  '/data-intelligence',
  '/marketing',
  '/operator-intelligence',
  '/market-intelligence-agency',
  '/business-data-intelligence',
  '/industry-intelligence',
  '/methodology',
  '/sample-market-intelligence-report',
  '/competitive-intelligence-services',
  '/insights',
  '/pricing',
  '/request-snapshot'
]);

export const routePriority = {
  '/': 1,
  '/request-snapshot': 0.9,
  '/services': 0.9,
  '/branding': 0.84,
  '/web-development': 0.84,
  '/seo': 0.84,
  '/data-intelligence': 0.84,
  '/marketing': 0.84,
  '/operator-intelligence': 0.89,
  '/market-intelligence-agency': 0.88,
  '/business-data-intelligence': 0.86,
  '/industry-intelligence': 0.86,
  '/methodology': 0.84,
  '/sample-market-intelligence-report': 0.84,
  '/competitive-intelligence-services': 0.85,
  '/insights': 0.82,
  '/pricing': 0.85,
  '/elective-healthcare': 0.8,
  '/local-services': 0.8,
  '/b2b-services': 0.8,
  '/how-it-works': 0.8,
  '/about': 0.65
};

export default function sitemap() {
  return routeList.map(route => ({
    url: `${siteUrl}${route.path === '/' ? '' : route.path}`,
    lastModified: new Date(`${siteUpdatedIso}T00:00:00.000Z`),
    changeFrequency: monthlyRoutes.has(route.path) || route.path.startsWith('/insights/') ? 'monthly' : 'yearly',
    priority: routePriority[route.path] || (route.path.startsWith('/insights/') ? 0.76 : 0.55)
  }));
}
