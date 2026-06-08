import { getPageMeta, hasPage, renderPage, siteInlineStyle } from './site-pages';

export function getInlineStyle() {
  return siteInlineStyle;
}

export function getScreenLabel() {
  return 'Seyko Studios Site';
}

export function getBodyHtml(slug = 'home') {
  return renderPage(slug);
}

export function getRouteMeta(slug = 'home') {
  return getPageMeta(slug);
}

export function routeExists(slug = 'home') {
  return hasPage(slug);
}
