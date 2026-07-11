import { renderAtomFeed, renderContentIndex } from '../lib/content-feed.js';
import { getRouteStructuredData, ogImage, siteUrl } from '../lib/seo.js';
import {
  businessDataIntelligenceFaq,
  competitiveIntelligenceServicesFaq,
  getPageMeta,
  industries,
  industryIntelligenceFaq,
  insightUpdated,
  marketIntelligenceAgencyFaq,
  methodologyFaq,
  operatorInsights,
  operatorIntelligenceFaq,
  sampleMarketReportFaq,
  renderPage,
  routeList,
  services,
  siteUpdatedIso
} from '../lib/site-pages.js';
import sitemap, { monthlyRoutes, routePriority } from '../app/sitemap.js';
import robots from '../app/robots.js';
import { readFileSync } from 'node:fs';

const failures = [];
const routeByPath = new Map(routeList.map(route => [route.path, route]));
const titleMap = new Map();
const descriptionMap = new Map();
const sharedScript = readFileSync(new URL('../assets/site.js', import.meta.url), 'utf8');
const publicSharedScript = readFileSync(new URL('../public/assets/site.js', import.meta.url), 'utf8');
const layoutSource = readFileSync(new URL('../app/layout.jsx', import.meta.url), 'utf8');
const packageSource = readFileSync(new URL('../package.json', import.meta.url), 'utf8');
const envExampleSource = readFileSync(new URL('../.env.example', import.meta.url), 'utf8');
const requestSnapshotSource = readFileSync(new URL('../app/request-snapshot/page.jsx', import.meta.url), 'utf8');
const hubspotSubmitRouteSource = readFileSync(new URL('../app/api/hubspot/submit/route.js', import.meta.url), 'utf8');
const routePageSource = readFileSync(new URL('../lib/route-page.jsx', import.meta.url), 'utf8');
const robotsRouteSource = readFileSync(new URL('../app/robots.js', import.meta.url), 'utf8');
const llmsSource = readFileSync(new URL('../public/llms.txt', import.meta.url), 'utf8');
const feedRouteSource = readFileSync(new URL('../app/feed.xml/route.js', import.meta.url), 'utf8');
const contentIndexRouteSource = readFileSync(new URL('../app/content-index.txt/route.js', import.meta.url), 'utf8');
const launchChecklistSource = readFileSync(new URL('../docs/seo-launch-indexing-checklist.md', import.meta.url), 'utf8');
const trackingPlaybookSource = readFileSync(new URL('../docs/seo-operator-intelligence-tracking-playbook.md', import.meta.url), 'utf8');
const seoPriorityUrlsScript = readFileSync(new URL('../scripts/list-seo-priority-urls.mjs', import.meta.url), 'utf8');
const faviconSource = readFileSync(new URL('../public/favicon.svg', import.meta.url), 'utf8');
const faviconIcoBytes = readFileSync(new URL('../public/favicon.ico', import.meta.url));
const faviconPngBytes = readFileSync(new URL('../public/favicon-32x32.png', import.meta.url));
const appleTouchIconBytes = readFileSync(new URL('../public/apple-touch-icon.png', import.meta.url));
const ogImageBytes = readFileSync(new URL(`../public${ogImage.path}`, import.meta.url));
const atomFeed = renderAtomFeed();
const contentIndex = renderContentIndex();
const sitemapEntries = sitemap();
const sitemapByUrl = new Map(sitemapEntries.map(entry => [entry.url, entry]));
const robotsConfig = robots();
const insightQueryTargets = {
  'business-data-market-intelligence': ['business data', 'market intelligence', 'operators', 'business data insights for growth'],
  'business-data-checklist-growth-decisions': ['business data checklist', 'growth decisions', 'marketing decisions', 'operators'],
  'industry-intelligence-service-businesses': ['industry intelligence', 'service', 'operators', 'industry insights for growth strategy'],
  'market-intelligence-report-service-businesses': ['market intelligence report', 'service', 'operators'],
  'competitive-intelligence-local-markets': ['competitive intelligence', 'competitor', 'local'],
  'market-intelligence-vs-business-intelligence': ['market intelligence', 'business intelligence', 'operators'],
  'business-intelligence-service-businesses': ['business intelligence', 'service businesses', 'dashboards', 'market signals'],
  'demand-intelligence-vs-lead-generation': ['demand intelligence', 'lead generation', 'operators'],
  'choose-market-before-increasing-ad-spend': ['choose a market', 'increasing ad spend', 'market selection', 'operators'],
  'before-hiring-marketing-agency': ['marketing agency', 'demand', 'competitor', 'operator']
};
const visibleInsightTargets = {
  'business-data-market-intelligence': ['business data insights for growth', 'turn business data into growth insights'],
  'industry-intelligence-service-businesses': ['industry insights for growth strategy', 'shape growth strategy']
};

function fail(message) {
  failures.push(message);
}

function absoluteUrl(path) {
  return `${siteUrl}${path === '/' ? '' : path}`;
}

function flattenStructuredData(slug) {
  return getRouteStructuredData(slug).flat();
}

function htmlFor(slug) {
  return renderPage(slug).replace(/\s+/g, ' ');
}

function normalized(value = '') {
  return String(value).toLowerCase();
}

function rememberUnique(map, value, path, label) {
  const key = normalized(value);
  const existing = map.get(key);
  if (existing) fail(`${path} has duplicate ${label} with ${existing}.`);
  map.set(key, path);
}

function combinedInsightText(insight) {
  return normalized([
    insight.title,
    insight.navLabel,
    insight.eyebrow,
    insight.summary,
    insight.h1,
    insight.lead,
    insight.answer,
    ...(insight.searchTerms || []),
    ...(insight.faq || []).flat(),
    ...insight.sections.flat(),
    ...insight.checklist
  ].join(' '));
}

for (const route of routeList) {
  if (!route.slug || !route.path || !route.title || !route.description || !route.navLabel) {
    fail(`Route ${route.slug || route.path || '(unknown)'} is missing slug, path, title, description, or navLabel.`);
  }

  const renderedTitle = `${route.title} | Seyko Studios`;
  if (renderedTitle.length < 20 || renderedTitle.length > 70) {
    fail(`${route.path} rendered title length should be 20-70 characters; got ${renderedTitle.length}.`);
  }
  if (route.description.length < 50 || route.description.length > 170) {
    fail(`${route.path} meta description length should be 50-170 characters; got ${route.description.length}.`);
  }
  rememberUnique(titleMap, route.title, route.path, 'title');
  rememberUnique(descriptionMap, route.description, route.path, 'description');

  const canonical = absoluteUrl(route.path);
  const structured = flattenStructuredData(route.slug);
  const pageHtml = htmlFor(route.slug);
  const webPage = structured.find(item => item['@type'] === 'WebPage' || item['@type'] === 'CollectionPage');
  const breadcrumbs = structured.find(item => item['@type'] === 'BreadcrumbList');

  if (!webPage) fail(`${route.path} is missing WebPage/CollectionPage schema.`);
  if (webPage && webPage.url !== canonical) fail(`${route.path} schema URL does not match canonical URL.`);
  if (!breadcrumbs) fail(`${route.path} is missing BreadcrumbList schema.`);
  if (/free snapshot/i.test(pageHtml)) fail(`${route.path} should not frame the snapshot CTA as free.`);
}

const homeHtml = htmlFor('home');
if (!homeHtml.includes('Intelligence-led digital agency') || !homeHtml.includes('Bespoke digital work for operators')) {
  fail('Home should lead with the intelligence-led agency positioning.');
}

const pricingHtml = htmlFor('pricing');
if (!pricingHtml.includes('The price is part of the door') || !pricingHtml.includes('Meaningful work starts at $3,500')) {
  fail('/pricing should frame pricing as a selective qualification threshold.');
}

const insightHub = routeByPath.get('/insights');
if (!insightHub) fail('/insights route is missing.');

if (insightHub) {
  const hubStructured = flattenStructuredData(insightHub.slug);
  const hubHtml = htmlFor(insightHub.slug);
  const collectionPage = hubStructured.find(item => item['@type'] === 'CollectionPage');
  const insightList = hubStructured.find(item => item['@id'] === `${siteUrl}/insights#insight-list`);

  if (!collectionPage) fail('/insights is missing CollectionPage schema.');
  if (!insightList) fail('/insights is missing insight ItemList schema.');
  if (insightList && insightList.itemListElement.length !== operatorInsights.length) {
    fail('/insights ItemList count does not match operatorInsights.');
  }
  if (!hubHtml.includes('class="breadcrumbs"')) fail('/insights is missing visible breadcrumbs.');
  if (!hubHtml.includes('Request a strategy call')) fail('/insights is missing the primary strategy call CTA.');
  for (const insight of operatorInsights) {
    if (!hubHtml.includes(`href="${insight.path}"`)) fail(`/insights does not visibly link to ${insight.path}.`);
  }
}

const siteMapRoute = routeByPath.get('/site-map');
if (!siteMapRoute) fail('/site-map route is missing.');

if (siteMapRoute) {
  const siteMapHtml = htmlFor(siteMapRoute.slug);
  const siteMapStructured = flattenStructuredData(siteMapRoute.slug);
  const siteMapPage = siteMapStructured.find(item => item['@id'] === `${siteUrl}/site-map#webpage`);
  const expectedSiteMapLinks = [
    '/services',
    ...services.map(service => service.path),
    '/market-intelligence-agency',
    '/operator-intelligence',
    '/business-data-intelligence',
    '/industry-intelligence',
    '/methodology',
    '/sample-market-intelligence-report',
    '/competitive-intelligence-services',
    '/insights',
    '/pricing',
    '/request-snapshot',
    '/how-it-works',
    '/about',
    '/privacy',
    '/terms',
    '/data-security',
    '/accessibility',
    ...operatorInsights.map(insight => insight.path),
    ...industries.map(industry => industry.path)
  ];

  if (!siteMapHtml.includes('class="breadcrumbs"')) fail('/site-map is missing visible breadcrumbs.');
  if (!siteMapHtml.includes('href="/content-index.txt"')) fail('/site-map should link to the text content index.');
  if (!siteMapHtml.includes('href="/request-snapshot"')) fail('/site-map should link to the strategy call conversion path.');
  if (!siteMapPage) fail('/site-map is missing WebPage schema.');
  for (const path of expectedSiteMapLinks) {
    if (!siteMapHtml.includes(`href="${path}"`)) fail(`/site-map does not visibly link to ${path}.`);
  }
}

const homeRoute = routeByPath.get('/');
if (homeRoute) {
  const homeHtml = htmlFor(homeRoute.slug);
  const homeText = normalized(homeHtml);
  const homeStructured = flattenStructuredData(homeRoute.slug);
  const homePage = homeStructured.find(item => item['@id'] === `${siteUrl}#webpage`);

  for (const insight of operatorInsights) {
    if (!homeHtml.includes(`href="${insight.path}"`)) fail(`/ homepage does not visibly link to ${insight.path}.`);
  }
  if (!homeText.includes('business data market intelligence')) {
    fail('/ homepage does not visibly include the business data market intelligence target phrase.');
  }
  if (!homeText.includes('industry intelligence for operators')) {
    fail('/ homepage does not visibly include the industry intelligence for operators target phrase.');
  }
  if (!homeHtml.includes('href="/methodology"')) {
    fail('/ homepage should visibly link to the market intelligence methodology page.');
  }
  if (!homeHtml.includes('href="/operator-intelligence"')) {
    fail('/ homepage should visibly link to the operator intelligence page.');
  }
  if (!homeHtml.includes('href="/sample-market-intelligence-report"')) {
    fail('/ homepage should visibly link to the sample market intelligence report page.');
  }
  if (!homeHtml.includes('href="/competitive-intelligence-services"')) {
    fail('/ homepage should visibly link to the competitive intelligence services page.');
  }
  if (!homeHtml.includes('href="/services"')) {
    fail('/ homepage should visibly link to the services hub.');
  }
  for (const service of services) {
    if (!homeHtml.includes(`href="${service.path}"`)) fail(`/ homepage does not visibly link to ${service.path}.`);
  }
  if (!homeHtml.includes('class="operator-visual operator-board-visual"')) {
    fail('/ homepage is missing the visual operator intelligence board.');
  }
  for (const phrase of ['Visual intelligence', 'Operator intelligence board', 'Signal mix', 'Conversion leaks', 'Ranked action']) {
    if (!homeHtml.includes(phrase)) fail(`/ homepage is missing visual intelligence phrase "${phrase}".`);
  }
  if (!homePage?.hasPart || homePage.hasPart.length !== operatorInsights.length) {
    fail('/ homepage WebPage schema does not expose all operator insight pages as hasPart.');
  }
}

for (const industry of industries) {
  const pageHtml = htmlFor(industry.slug);
  if (!pageHtml.includes('class="operator-visual industry-lane-visual"')) {
    fail(`${industry.path} is missing the industry lane visual.`);
  }
  for (const phrase of ['Visual market read', 'Demand lanes', 'Friction heat', 'First action']) {
    if (!pageHtml.includes(phrase)) fail(`${industry.path} is missing industry visual phrase "${phrase}".`);
  }
  if (!pageHtml.includes(`${industry.offer} lane visual`)) {
    fail(`${industry.path} industry visual aria label should include the offer.`);
  }
}

const operatorIntelligenceRoute = routeByPath.get('/operator-intelligence');
if (!operatorIntelligenceRoute) fail('/operator-intelligence route is missing.');

if (operatorIntelligenceRoute) {
  const pageHtml = htmlFor(operatorIntelligenceRoute.slug);
  const pageText = normalized(pageHtml);
  const structured = flattenStructuredData(operatorIntelligenceRoute.slug);
  const service = structured.find(item => item['@id'] === `${siteUrl}/operator-intelligence#service`);
  const faqPage = structured.find(item => item['@type'] === 'FAQPage');
  const webPage = structured.find(item => item['@id'] === `${siteUrl}/operator-intelligence#webpage`);
  const meta = getPageMeta(operatorIntelligenceRoute.slug);

  if (!meta.keywords?.includes('operator intelligence brief')) {
    fail('/operator-intelligence metadata is missing the operator intelligence brief keyword.');
  }
  for (const phrase of [
    'operator intelligence',
    'operator intelligence briefs',
    'business data',
    'industry intelligence',
    'market demand',
    'competitor pressure',
    'decision intelligence for operators',
    'operator intelligence brief visual'
  ]) {
    if (!pageText.includes(phrase)) fail(`/operator-intelligence is missing visible phrase "${phrase}".`);
  }
  if (!pageHtml.includes('class="operator-visual operator-brief-visual"')) {
    fail('/operator-intelligence is missing the operator brief visual.');
  }
  for (const path of ['/request-snapshot', '/business-data-intelligence', '/industry-intelligence', '/pricing']) {
    if (!pageHtml.includes(`href="${path}"`)) fail(`/operator-intelligence should visibly link to ${path}.`);
  }
  if (!service) fail('/operator-intelligence is missing Service schema.');
  if (service && !service.serviceType?.includes('Operator intelligence brief')) {
    fail('/operator-intelligence Service schema is missing the operator intelligence brief serviceType.');
  }
  if (service && service.hasPart?.length !== operatorInsights.length) {
    fail('/operator-intelligence Service schema does not expose all operator insights as hasPart.');
  }
  if (!faqPage) fail('/operator-intelligence is missing FAQPage schema.');
  if (faqPage && faqPage.mainEntity.length !== operatorIntelligenceFaq.length) {
    fail('/operator-intelligence FAQPage schema count does not match visible FAQ data.');
  }
  if (webPage && webPage.mainEntity?.['@id'] !== `${siteUrl}/operator-intelligence#faq`) {
    fail('/operator-intelligence WebPage schema does not point mainEntity to the FAQ schema.');
  }
  if (webPage && webPage.hasPart?.length !== operatorInsights.length) {
    fail('/operator-intelligence WebPage schema does not expose all operator insights as hasPart.');
  }
  for (const item of operatorIntelligenceFaq) {
    if (!pageHtml.includes(item[0]) || !pageHtml.includes(item[1])) {
      fail(`/operator-intelligence does not visibly render FAQ "${item[0]}".`);
    }
    if (!faqPage?.mainEntity?.some(question => question.name === item[0] && question.acceptedAnswer?.text === item[1])) {
      fail(`/operator-intelligence FAQPage schema does not include "${item[0]}".`);
    }
  }
}

const industryIntelligenceRoute = routeByPath.get('/industry-intelligence');
if (industryIntelligenceRoute) {
  const pageHtml = htmlFor(industryIntelligenceRoute.slug);
  const structured = flattenStructuredData(industryIntelligenceRoute.slug);
  const faqPage = structured.find(item => item['@type'] === 'FAQPage');
  const webPage = structured.find(item => item['@id'] === `${siteUrl}/industry-intelligence#webpage`);

  if (!faqPage) fail('/industry-intelligence is missing FAQPage schema.');
  if (faqPage && faqPage.mainEntity.length !== industryIntelligenceFaq.length) {
    fail('/industry-intelligence FAQPage schema count does not match visible FAQ data.');
  }
  if (webPage && webPage.mainEntity?.['@id'] !== `${siteUrl}/industry-intelligence#faq`) {
    fail('/industry-intelligence WebPage schema does not point mainEntity to the FAQ schema.');
  }
  for (const item of industryIntelligenceFaq) {
    if (!pageHtml.includes(item[0]) || !pageHtml.includes(item[1])) {
      fail(`/industry-intelligence does not visibly render FAQ "${item[0]}".`);
    }
    if (!faqPage?.mainEntity?.some(question => question.name === item[0] && question.acceptedAnswer?.text === item[1])) {
      fail(`/industry-intelligence FAQPage schema does not include "${item[0]}".`);
    }
  }
}

const methodologyRoute = routeByPath.get('/methodology');
if (!methodologyRoute) fail('/methodology route is missing.');

if (methodologyRoute) {
  const pageHtml = htmlFor(methodologyRoute.slug);
  const pageText = normalized(pageHtml);
  const structured = flattenStructuredData(methodologyRoute.slug);
  const faqPage = structured.find(item => item['@type'] === 'FAQPage');
  const webPage = structured.find(item => item['@id'] === `${siteUrl}/methodology#webpage`);
  const meta = getPageMeta(methodologyRoute.slug);

  if (!meta.keywords?.includes('market intelligence methodology')) {
    fail('/methodology metadata is missing the market intelligence methodology keyword.');
  }
  for (const phrase of ['market intelligence methodology', 'business data signals', 'search demand', 'competitor pages', 'no fake precision']) {
    if (!pageText.includes(phrase)) fail(`/methodology is missing visible phrase "${phrase}".`);
  }
  for (const path of ['/request-snapshot', '/market-intelligence-agency', '/business-data-intelligence']) {
    if (!pageHtml.includes(`href="${path}"`)) fail(`/methodology should visibly link to ${path}.`);
  }
  if (!faqPage) fail('/methodology is missing FAQPage schema.');
  if (faqPage && faqPage.mainEntity.length !== methodologyFaq.length) {
    fail('/methodology FAQPage schema count does not match visible FAQ data.');
  }
  if (webPage && webPage.mainEntity?.['@id'] !== `${siteUrl}/methodology#faq`) {
    fail('/methodology WebPage schema does not point mainEntity to the FAQ schema.');
  }
  for (const item of methodologyFaq) {
    if (!pageHtml.includes(item[0]) || !pageHtml.includes(item[1])) {
      fail(`/methodology does not visibly render FAQ "${item[0]}".`);
    }
    if (!faqPage?.mainEntity?.some(question => question.name === item[0] && question.acceptedAnswer?.text === item[1])) {
      fail(`/methodology FAQPage schema does not include "${item[0]}".`);
    }
  }
}

const sampleReportRoute = routeByPath.get('/sample-market-intelligence-report');
if (!sampleReportRoute) fail('/sample-market-intelligence-report route is missing.');

if (sampleReportRoute) {
  const pageHtml = htmlFor(sampleReportRoute.slug);
  const pageText = normalized(pageHtml);
  const structured = flattenStructuredData(sampleReportRoute.slug);
  const report = structured.find(item => item['@id'] === `${siteUrl}/sample-market-intelligence-report#report`);
  const faqPage = structured.find(item => item['@type'] === 'FAQPage');
  const webPage = structured.find(item => item['@id'] === `${siteUrl}/sample-market-intelligence-report#webpage`);
  const meta = getPageMeta(sampleReportRoute.slug);

  if (!meta.keywords?.includes('sample market intelligence report')) {
    fail('/sample-market-intelligence-report metadata is missing the sample market intelligence report keyword.');
  }
  for (const phrase of ['sample market intelligence report', 'market intelligence report example', 'demand lanes', 'competitor pressure', 'buyer objections', 'confidence labels', 'visual demand radar report']) {
    if (!pageText.includes(phrase)) fail(`/sample-market-intelligence-report is missing visible phrase "${phrase}".`);
  }
  if (!pageHtml.includes('class="operator-visual report-visual"')) {
    fail('/sample-market-intelligence-report is missing the report visual dashboard.');
  }
  for (const path of ['/request-snapshot', '/methodology', '/pricing']) {
    if (!pageHtml.includes(`href="${path}"`)) fail(`/sample-market-intelligence-report should visibly link to ${path}.`);
  }
  if (!report) fail('/sample-market-intelligence-report is missing Report schema.');
  if (report && report.dateModified !== siteUpdatedIso) {
    fail('/sample-market-intelligence-report Report dateModified does not match siteUpdatedIso.');
  }
  if (!faqPage) fail('/sample-market-intelligence-report is missing FAQPage schema.');
  if (faqPage && faqPage.mainEntity.length !== sampleMarketReportFaq.length) {
    fail('/sample-market-intelligence-report FAQPage schema count does not match visible FAQ data.');
  }
  if (webPage && webPage.mainEntity?.['@id'] !== `${siteUrl}/sample-market-intelligence-report#faq`) {
    fail('/sample-market-intelligence-report WebPage schema does not point mainEntity to the FAQ schema.');
  }
  for (const item of sampleMarketReportFaq) {
    if (!pageHtml.includes(item[0]) || !pageHtml.includes(item[1])) {
      fail(`/sample-market-intelligence-report does not visibly render FAQ "${item[0]}".`);
    }
    if (!faqPage?.mainEntity?.some(question => question.name === item[0] && question.acceptedAnswer?.text === item[1])) {
      fail(`/sample-market-intelligence-report FAQPage schema does not include "${item[0]}".`);
    }
  }
}

const competitiveRoute = routeByPath.get('/competitive-intelligence-services');
if (!competitiveRoute) fail('/competitive-intelligence-services route is missing.');

if (competitiveRoute) {
  const pageHtml = htmlFor(competitiveRoute.slug);
  const pageText = normalized(pageHtml);
  const structured = flattenStructuredData(competitiveRoute.slug);
  const service = structured.find(item => item['@id'] === `${siteUrl}/competitive-intelligence-services#service`);
  const faqPage = structured.find(item => item['@type'] === 'FAQPage');
  const webPage = structured.find(item => item['@id'] === `${siteUrl}/competitive-intelligence-services#webpage`);
  const meta = getPageMeta(competitiveRoute.slug);

  if (!meta.keywords?.includes('competitive intelligence services')) {
    fail('/competitive-intelligence-services metadata is missing the competitive intelligence services keyword.');
  }
  for (const phrase of [
    'competitive intelligence services',
    'competitor analysis',
    'local competitor analysis',
    'competitor angle map',
    'competitor pressure',
    'visual competitor pressure map'
  ]) {
    if (!pageText.includes(phrase)) fail(`/competitive-intelligence-services is missing visible phrase "${phrase}".`);
  }
  if (!pageHtml.includes('class="operator-visual pressure-visual"')) {
    fail('/competitive-intelligence-services is missing the competitor pressure visual.');
  }
  for (const path of ['/request-snapshot', '/insights/competitive-intelligence-local-markets', '/pricing']) {
    if (!pageHtml.includes(`href="${path}"`)) fail(`/competitive-intelligence-services should visibly link to ${path}.`);
  }
  if (!service) fail('/competitive-intelligence-services is missing Service schema.');
  if (service && !service.serviceType?.includes('Competitive intelligence services')) {
    fail('/competitive-intelligence-services Service schema is missing the competitive intelligence services serviceType.');
  }
  if (service && service.hasPart?.length !== operatorInsights.length) {
    fail('/competitive-intelligence-services Service schema does not expose all operator insights as hasPart.');
  }
  if (!faqPage) fail('/competitive-intelligence-services is missing FAQPage schema.');
  if (faqPage && faqPage.mainEntity.length !== competitiveIntelligenceServicesFaq.length) {
    fail('/competitive-intelligence-services FAQPage schema count does not match visible FAQ data.');
  }
  if (webPage && webPage.mainEntity?.['@id'] !== `${siteUrl}/competitive-intelligence-services#faq`) {
    fail('/competitive-intelligence-services WebPage schema does not point mainEntity to the FAQ schema.');
  }
  for (const item of competitiveIntelligenceServicesFaq) {
    if (!pageHtml.includes(item[0]) || !pageHtml.includes(item[1])) {
      fail(`/competitive-intelligence-services does not visibly render FAQ "${item[0]}".`);
    }
    if (!faqPage?.mainEntity?.some(question => question.name === item[0] && question.acceptedAnswer?.text === item[1])) {
      fail(`/competitive-intelligence-services FAQPage schema does not include "${item[0]}".`);
    }
  }
}

const marketAgencyRoute = routeByPath.get('/market-intelligence-agency');
if (!marketAgencyRoute) fail('/market-intelligence-agency route is missing.');

if (marketAgencyRoute) {
  const pageHtml = htmlFor(marketAgencyRoute.slug);
  const pageText = normalized(pageHtml);
  const structured = flattenStructuredData(marketAgencyRoute.slug);
  const service = structured.find(item => item['@id'] === `${siteUrl}/market-intelligence-agency#service`);
  const faqPage = structured.find(item => item['@type'] === 'FAQPage');
  const webPage = structured.find(item => item['@id'] === `${siteUrl}/market-intelligence-agency#webpage`);
  const meta = getPageMeta(marketAgencyRoute.slug);

  if (!meta.keywords?.includes('market intelligence agency')) fail('/market-intelligence-agency metadata is missing the market intelligence agency keyword.');
  if (!pageText.includes('market intelligence agency')) fail('/market-intelligence-agency is missing the target phrase in visible copy.');
  if (!pageText.includes('market intelligence services')) fail('/market-intelligence-agency is missing the market intelligence services phrase in visible copy.');
  if (!pageHtml.includes('href="/request-snapshot"')) fail('/market-intelligence-agency is missing a visible request snapshot CTA.');
  if (!pageHtml.includes('href="/insights"')) fail('/market-intelligence-agency should link to the insight hub.');
  if (!service) fail('/market-intelligence-agency is missing Service schema.');
  if (service && !service.serviceType?.includes('Market intelligence agency')) {
    fail('/market-intelligence-agency Service schema is missing the market intelligence agency serviceType.');
  }
  if (service && service.hasPart?.length !== operatorInsights.length) {
    fail('/market-intelligence-agency Service schema does not expose all operator insights as hasPart.');
  }
  if (!faqPage) fail('/market-intelligence-agency is missing FAQPage schema.');
  if (faqPage && faqPage.mainEntity.length !== marketIntelligenceAgencyFaq.length) {
    fail('/market-intelligence-agency FAQPage schema count does not match visible FAQ data.');
  }
  if (webPage && webPage.mainEntity?.['@id'] !== `${siteUrl}/market-intelligence-agency#faq`) {
    fail('/market-intelligence-agency WebPage schema does not point mainEntity to the FAQ schema.');
  }
  for (const item of marketIntelligenceAgencyFaq) {
    if (!pageHtml.includes(item[0]) || !pageHtml.includes(item[1])) {
      fail(`/market-intelligence-agency does not visibly render FAQ "${item[0]}".`);
    }
    if (!faqPage?.mainEntity?.some(question => question.name === item[0] && question.acceptedAnswer?.text === item[1])) {
      fail(`/market-intelligence-agency FAQPage schema does not include "${item[0]}".`);
    }
  }
}

const businessDataRoute = routeByPath.get('/business-data-intelligence');
if (!businessDataRoute) fail('/business-data-intelligence route is missing.');

if (businessDataRoute) {
  const pageHtml = htmlFor(businessDataRoute.slug);
  const pageText = normalized(pageHtml);
  const structured = flattenStructuredData(businessDataRoute.slug);
  const service = structured.find(item => item['@id'] === `${siteUrl}/business-data-intelligence#service`);
  const faqPage = structured.find(item => item['@type'] === 'FAQPage');
  const webPage = structured.find(item => item['@id'] === `${siteUrl}/business-data-intelligence#webpage`);
  const meta = getPageMeta(businessDataRoute.slug);

  if (!meta.keywords?.includes('business data intelligence')) fail('/business-data-intelligence metadata is missing the business data intelligence keyword.');
  if (!pageText.includes('business data intelligence')) fail('/business-data-intelligence is missing the target phrase in visible copy.');
  if (!pageText.includes('business data intelligence services')) {
    fail('/business-data-intelligence is missing the business data intelligence services phrase in visible copy.');
  }
  if (!normalized(meta.description).includes('business data intelligence services')) {
    fail('/business-data-intelligence metadata description should target business data intelligence services.');
  }
  for (const phrase of ['source-to-decision map', 'business data checklist', 'not another dashboard', 'what business data intelligence should clarify']) {
    if (!pageText.includes(phrase)) fail(`/business-data-intelligence is missing visible phrase "${phrase}".`);
  }
  if (!pageHtml.includes('class="operator-visual data-source-visual"')) {
    fail('/business-data-intelligence is missing the source-to-decision visual.');
  }
  if (!pageHtml.includes('href="/request-snapshot"')) fail('/business-data-intelligence is missing a visible request snapshot CTA.');
  if (!pageHtml.includes('href="/insights/business-data-market-intelligence"')) {
    fail('/business-data-intelligence should link to the business data market intelligence guide.');
  }
  if (!pageHtml.includes('href="/insights/business-data-checklist-growth-decisions"')) {
    fail('/business-data-intelligence should link to the business data checklist guide.');
  }
  if (!service) fail('/business-data-intelligence is missing Service schema.');
  if (service && !service.serviceType?.includes('Business data intelligence')) {
    fail('/business-data-intelligence Service schema is missing the business data intelligence serviceType.');
  }
  if (service && service.hasPart?.length !== operatorInsights.length) {
    fail('/business-data-intelligence Service schema does not expose all operator insights as hasPart.');
  }
  if (!faqPage) fail('/business-data-intelligence is missing FAQPage schema.');
  if (faqPage && faqPage.mainEntity.length !== businessDataIntelligenceFaq.length) {
    fail('/business-data-intelligence FAQPage schema count does not match visible FAQ data.');
  }
  if (webPage && webPage.mainEntity?.['@id'] !== `${siteUrl}/business-data-intelligence#faq`) {
    fail('/business-data-intelligence WebPage schema does not point mainEntity to the FAQ schema.');
  }
  for (const item of businessDataIntelligenceFaq) {
    if (!pageHtml.includes(item[0]) || !pageHtml.includes(item[1])) {
      fail(`/business-data-intelligence does not visibly render FAQ "${item[0]}".`);
    }
    if (!faqPage?.mainEntity?.some(question => question.name === item[0] && question.acceptedAnswer?.text === item[1])) {
      fail(`/business-data-intelligence FAQPage schema does not include "${item[0]}".`);
    }
  }
}

for (const insight of operatorInsights) {
  const route = routeByPath.get(insight.path);
  if (!route) {
    fail(`${insight.path} has insight content but no route entry.`);
    continue;
  }

  const structured = flattenStructuredData(route.slug);
  const html = htmlFor(route.slug);
  const article = structured.find(item => item['@type'] === 'Article');
  const faqPage = structured.find(item => item['@type'] === 'FAQPage');
  const webPage = structured.find(item => item['@id'] === `${absoluteUrl(route.path)}#webpage`);
  const breadcrumbs = structured.find(item => item['@type'] === 'BreadcrumbList');
  const meta = getPageMeta(route.slug);

  if (!article) fail(`${insight.path} is missing Article schema.`);
  if (article && article.dateModified !== siteUpdatedIso) fail(`${insight.path} Article dateModified is not ${siteUpdatedIso}.`);
  if (article && article.headline !== insight.title) fail(`${insight.path} Article headline does not match insight title.`);
  if (!article?.keywords || !insight.searchTerms?.every(term => article.keywords.includes(term))) {
    fail(`${insight.path} Article schema is missing configured search terms.`);
  }
  if (!meta.keywords || meta.keywords.length !== insight.searchTerms?.length) {
    fail(`${insight.path} route metadata is missing configured search terms.`);
  }
  if (!insight.faq?.length || insight.faq.length < 2) fail(`${insight.path} needs at least two configured article FAQ items.`);
  if (!faqPage) fail(`${insight.path} is missing FAQPage schema.`);
  if (faqPage && faqPage.mainEntity.length !== insight.faq.length) {
    fail(`${insight.path} FAQPage schema count does not match configured FAQ data.`);
  }
  if (webPage && webPage.mainEntity?.['@id'] !== `${absoluteUrl(route.path)}#faq`) {
    fail(`${insight.path} WebPage schema does not point mainEntity to the article FAQ schema.`);
  }
  if (!breadcrumbs?.itemListElement?.some(item => item.name === insight.navLabel)) {
    fail(`${insight.path} breadcrumbs do not include the insight nav label.`);
  }
  if (!insight.related?.length) fail(`${insight.path} has no related insight links.`);
  const queryTargets = insightQueryTargets[insight.slug] || [];
  const insightText = combinedInsightText(insight);
  for (const target of queryTargets) {
    if (!insightText.includes(target)) fail(`${insight.path} is missing target query phrase "${target}".`);
  }
  const visibleTargets = visibleInsightTargets[insight.slug] || [];
  const visibleHtml = normalized(html);
  for (const target of visibleTargets) {
    if (!visibleHtml.includes(target)) fail(`${insight.path} does not visibly render target phrase "${target}".`);
  }
  if (!normalized(route.title).includes(normalized(insight.title))) {
    fail(`${insight.path} route title does not match insight title.`);
  }
  if (!normalized(route.description).includes(normalized(insight.eyebrow.split(' ')[0]))) {
    fail(`${insight.path} route description does not include the insight topic cue "${insight.eyebrow}".`);
  }
  if (!html.includes('class="breadcrumbs"')) fail(`${insight.path} is missing visible breadcrumbs.`);
  if (!html.includes('Short answer')) fail(`${insight.path} is missing answer-first visible content.`);
  if (!html.includes('class="operator-visual article-decision-visual"')) {
    fail(`${insight.path} is missing the article visual decision map.`);
  }
  if (!html.includes(`${insight.navLabel} visual decision map`)) {
    fail(`${insight.path} article visual decision map should use the insight nav label.`);
  }
  if (!html.includes('Common operator questions')) fail(`${insight.path} is missing visible article FAQ heading.`);
  if (!html.includes(`Published ${insightUpdated}`) || !html.includes(`Updated ${insightUpdated}`)) {
    fail(`${insight.path} is missing visible publish/update metadata.`);
  }
  if (!html.includes('href="/request-snapshot"')) fail(`${insight.path} is missing a visible request snapshot CTA.`);
  if (!html.includes(insight.answer)) fail(`${insight.path} does not render its configured short answer.`);
  for (const item of insight.faq || []) {
    if (!html.includes(item[0]) || !html.includes(item[1])) fail(`${insight.path} does not visibly render FAQ "${item[0]}".`);
    if (!faqPage?.mainEntity?.some(question => question.name === item[0] && question.acceptedAnswer?.text === item[1])) {
      fail(`${insight.path} FAQPage schema does not include "${item[0]}".`);
    }
  }
  for (const relatedSlug of insight.related) {
    const related = operatorInsights.find(item => item.slug === relatedSlug);
    if (!related) {
      fail(`${insight.path} references unknown related insight ${relatedSlug}.`);
      continue;
    }
    if (!html.includes(`href="${related.path}"`)) fail(`${insight.path} does not visibly link to related page ${related.path}.`);
  }
}

const requiredPaths = [
  '/',
  '/industry-intelligence',
  '/operator-intelligence',
  '/market-intelligence-agency',
  '/business-data-intelligence',
  '/methodology',
  '/sample-market-intelligence-report',
  '/competitive-intelligence-services',
  '/insights',
  '/request-snapshot',
  '/pricing',
  '/site-map',
  ...operatorInsights.map(insight => insight.path)
];

for (const path of requiredPaths) {
  if (!routeByPath.has(path)) fail(`${path} is missing from routeList.`);
  const entry = sitemapByUrl.get(absoluteUrl(path));
  if (!entry) fail(`${path} is missing from sitemap output.`);
  if (entry && entry.lastModified.toISOString() !== `${siteUpdatedIso}T00:00:00.000Z`) {
    fail(`${path} sitemap lastModified does not match siteUpdatedIso.`);
  }
}

const priorityMonthlyPaths = [
  '/',
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
];

for (const path of priorityMonthlyPaths) {
  if (!monthlyRoutes.has(path)) fail(`${path} should be configured as a monthly sitemap route.`);
  const entry = sitemapByUrl.get(absoluteUrl(path));
  if (entry && entry.changeFrequency !== 'monthly') fail(`${path} sitemap changeFrequency should be monthly.`);
}

const corePriorityFloors = {
  '/': 1,
  '/request-snapshot': 0.9,
  '/operator-intelligence': 0.89,
  '/market-intelligence-agency': 0.86,
  '/business-data-intelligence': 0.85,
  '/industry-intelligence': 0.85,
  '/methodology': 0.84,
  '/sample-market-intelligence-report': 0.84,
  '/competitive-intelligence-services': 0.85,
  '/insights': 0.82,
  '/pricing': 0.85
};

for (const [path, floor] of Object.entries(corePriorityFloors)) {
  const configuredPriority = routePriority[path];
  const entry = sitemapByUrl.get(absoluteUrl(path));
  if (typeof configuredPriority !== 'number' || configuredPriority < floor) {
    fail(`${path} sitemap configured priority should be at least ${floor}.`);
  }
  if (entry && entry.priority !== configuredPriority) {
    fail(`${path} sitemap output priority does not match configured routePriority.`);
  }
}

for (const insight of operatorInsights) {
  const entry = sitemapByUrl.get(absoluteUrl(insight.path));
  if (!entry) fail(`${insight.path} is missing from sitemap output.`);
  if (entry && entry.changeFrequency !== 'monthly') fail(`${insight.path} sitemap changeFrequency should be monthly.`);
  if (entry && entry.priority < 0.76) fail(`${insight.path} sitemap priority should be at least 0.76.`);
}

for (const service of services) {
  const entry = sitemapByUrl.get(absoluteUrl(service.path));
  if (!entry) fail(`${service.path} is missing from sitemap output.`);
  if (entry && entry.priority < 0.76) fail(`${service.path} sitemap priority should be at least 0.76.`);
}

if (!sharedScript.includes("pushAnalyticsEvent('strategy_call_cta_click'")) {
  fail('assets/site.js is missing strategy_call_cta_click tracking.');
}
if (!sharedScript.includes("pushAnalyticsEvent('generate_lead'")) {
  fail('assets/site.js is missing generate_lead tracking.');
}
if (!sharedScript.includes("pushAnalyticsEvent('strategy_call_submitted'")) {
  fail('assets/site.js is missing strategy_call_submitted tracking.');
}
if (!sharedScript.includes('initGoogleAnalytics') || !sharedScript.includes('__seykoGaInitialized')) {
  fail('assets/site.js is missing the defensive GA4 bootstrap.');
}
if (!sharedScript.includes('getCookie(\'hubspotutk\')') || !sharedScript.includes('payload.hutk')) {
  fail('assets/site.js is missing HubSpot cookie handoff for form attribution.');
}
if (sharedScript !== publicSharedScript) {
  fail('public/assets/site.js is out of sync with assets/site.js.');
}

if (!layoutSource.includes('NEXT_PUBLIC_GA_MEASUREMENT_ID') || !layoutSource.includes('G-T2RCPXHQRX')) {
  fail('app/layout.jsx is missing the GA4 measurement id configuration.');
}
if (!layoutSource.includes('data-ga-measurement-id')) {
  fail('app/layout.jsx should expose the GA4 measurement id to the shared site script.');
}
if (!layoutSource.includes('<html lang="en" suppressHydrationWarning>') || !layoutSource.includes('suppressHydrationWarning>')) {
  fail('app/layout.jsx should suppress hydration warnings on the root HTML/body shell for browser extension mutations.');
}
if (
  !layoutSource.includes('/favicon.ico') ||
  !layoutSource.includes('/favicon.svg') ||
  !layoutSource.includes('/favicon-32x32.png') ||
  !layoutSource.includes('/apple-touch-icon.png') ||
  !layoutSource.includes('nav-s-centered-20260612') ||
  !faviconSource.includes('aria-label="Seyko Studios"') ||
  !faviconSource.includes('>S</text>')
) {
  fail('The site should use the nav-logo S favicon with cache-busted ICO, SVG, PNG, and Apple touch fallbacks.');
}
if (faviconIcoBytes.length < 500 || faviconPngBytes.length < 500 || appleTouchIconBytes.length < 1000) {
  fail('The nav-logo S favicon fallback files should be present and non-empty.');
}
if (!layoutSource.includes('googletagmanager.com/gtag/js') || !layoutSource.includes('gtag(\'config\'')) {
  fail('app/layout.jsx is missing the Google tag loader/config.');
}
if (!layoutSource.includes('js.hs-scripts.com') || !layoutSource.includes('NEXT_PUBLIC_HUBSPOT_PORTAL_ID')) {
  fail('app/layout.jsx is missing the HubSpot tracking script configuration.');
}
if (!layoutSource.includes('src="/assets/site.js"')) {
  fail('app/layout.jsx should load the shared site script.');
}
for (const envKey of [
  'NEXT_PUBLIC_GA_MEASUREMENT_ID',
  'HUBSPOT_PORTAL_ID',
  'HUBSPOT_FORM_ID',
  'NEXT_PUBLIC_HUBSPOT_PORTAL_ID',
  'NEXT_PUBLIC_RECAPTCHA_SITE_KEY',
  'RECAPTCHA_SECRET_KEY',
  'RECAPTCHA_MIN_SCORE'
]) {
  if (!envExampleSource.includes(envKey)) fail(`.env.example is missing ${envKey}.`);
}
if (!requestSnapshotSource.includes('NEXT_PUBLIC_RECAPTCHA_SITE_KEY') || !requestSnapshotSource.includes('google.com/recaptcha/api.js')) {
  fail('app/request-snapshot/page.jsx is missing optional reCAPTCHA script support.');
}
if (!routePageSource.includes('type="application/ld+json"') || !routePageSource.includes('dangerouslySetInnerHTML={{ __html: routeStructuredData }}')) {
  fail('lib/route-page.jsx should render route JSON-LD as a dedicated script element.');
}
if (!routePageSource.includes('const bodyHtml = getBodyHtml(slug)') || !routePageSource.includes('dangerouslySetInnerHTML={{ __html: bodyHtml }}')) {
  fail('lib/route-page.jsx should keep body HTML separate from route JSON-LD.');
}
if (routePageSource.includes('`<script type="application/ld+json">')) {
  fail('lib/route-page.jsx should not concatenate JSON-LD script tags into the static body HTML string.');
}
if (!routePageSource.includes('suppressHydrationWarning')) {
  fail('lib/route-page.jsx should use hydration suppression for static HTML and JSON-LD output.');
}
if (!routePageSource.includes('ogImage.path') || !routePageSource.includes("card: 'summary_large_image'")) {
  fail('lib/route-page.jsx should include page-level Open Graph and Twitter image metadata.');
}
if (!packageSource.includes('"generate:og"')) {
  fail('package.json should expose an npm run generate:og command for social preview updates.');
}
if (!packageSource.includes('"seo:urls"')) {
  fail('package.json should expose an npm run seo:urls command for priority indexing URLs.');
}
for (const phrase of [
  'npm run seo:urls',
  'NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION',
  'NEXT_PUBLIC_MICROSOFT_SITE_VERIFICATION',
  'https://seykostudios.com/sitemap.xml',
  'https://seykostudios.com/operator-intelligence',
  'https://seykostudios.com/business-data-intelligence',
  'https://seykostudios.com/insights/business-data-checklist-growth-decisions',
  'operator intelligence brief',
  'business data intelligence services',
  'market intelligence services'
]) {
  if (!launchChecklistSource.includes(phrase)) fail(`SEO launch checklist is missing "${phrase}".`);
}
if (!trackingPlaybookSource.includes('seo-launch-indexing-checklist.md') || !trackingPlaybookSource.includes('npm run seo:urls')) {
  fail('SEO tracking playbook should point to the launch checklist and priority URL script.');
}
if (!llmsSource.includes('docs/seo-launch-indexing-checklist.md')) {
  fail('public/llms.txt should expose the SEO launch checklist.');
}
if (
  !seoPriorityUrlsScript.includes('routePriority') ||
  !seoPriorityUrlsScript.includes('operatorInsights') ||
  !seoPriorityUrlsScript.includes('priority >= 0.76')
) {
  fail('scripts/list-seo-priority-urls.mjs should use sitemap priority and operator insights to list priority URLs.');
}
if (ogImage.path !== '/og-image.png' || ogImage.width !== 1200 || ogImage.height !== 630) {
  fail('lib/seo.js should point to a 1200x630 PNG Open Graph image.');
}
if (!normalized(ogImage.alt).includes('demand and industry intelligence')) {
  fail('Open Graph image alt text should describe the demand and industry intelligence positioning.');
}
if (
  ogImageBytes.length < 10000 ||
  ogImageBytes[0] !== 0x89 ||
  ogImageBytes.subarray(1, 4).toString('ascii') !== 'PNG'
) {
  fail('public/og-image.png should be a non-trivial PNG asset.');
}
if (ogImageBytes.readUInt32BE(16) !== ogImage.width || ogImageBytes.readUInt32BE(20) !== ogImage.height) {
  fail('public/og-image.png dimensions do not match lib/seo.js.');
}
if (!hubspotSubmitRouteSource.includes('api.hsforms.com/submissions/v3/integration/submit')) {
  fail('HubSpot submit route is missing the Forms API submission endpoint.');
}
if (!hubspotSubmitRouteSource.includes('RECAPTCHA_SECRET_KEY') || !hubspotSubmitRouteSource.includes('google.com/recaptcha/api/siteverify')) {
  fail('HubSpot submit route is missing server-side reCAPTCHA verification support.');
}

if (!layoutSource.includes('type="application/atom+xml"') || !layoutSource.includes('href="/feed.xml"')) {
  fail('app/layout.jsx does not advertise the Atom feed.');
}
if (!layoutSource.includes('type="text/plain"') || !layoutSource.includes('href="/content-index.txt"')) {
  fail('app/layout.jsx does not advertise the text content index.');
}
if (!layoutSource.includes('G-T2RCPXHQRX') || !envExampleSource.includes('NEXT_PUBLIC_GA_MEASUREMENT_ID=G-T2RCPXHQRX')) {
  fail('GA4 should default to the G-T2RCPXHQRX measurement ID in app/layout.jsx and .env.example.');
}
if (layoutSource.includes('G-RPC43KH04G') || envExampleSource.includes('G-RPC43KH04G')) {
  fail('Old GA4 measurement ID G-RPC43KH04G should not remain in layout or env example.');
}
if (!llmsSource.includes('https://seykostudios.com/feed.xml') || !llmsSource.includes('https://seykostudios.com/content-index.txt')) {
  fail('public/llms.txt does not include machine-readable discovery URLs.');
}
if (!llmsSource.includes('/operator-intelligence')) {
  fail('public/llms.txt does not include /operator-intelligence.');
}
if (!llmsSource.includes('/market-intelligence-agency')) {
  fail('public/llms.txt does not include /market-intelligence-agency.');
}
if (!llmsSource.includes('/business-data-intelligence')) {
  fail('public/llms.txt does not include /business-data-intelligence.');
}
if (!llmsSource.includes('/methodology')) {
  fail('public/llms.txt does not include /methodology.');
}
if (!llmsSource.includes('/sample-market-intelligence-report')) {
  fail('public/llms.txt does not include /sample-market-intelligence-report.');
}
if (!llmsSource.includes('/competitive-intelligence-services')) {
  fail('public/llms.txt does not include /competitive-intelligence-services.');
}
if (!llmsSource.includes('/site-map')) {
  fail('public/llms.txt does not include /site-map.');
}
if (!robotsRouteSource.includes("from '../lib/seo.js'")) {
  fail('app/robots.js should import SEO config with an explicit ESM extension for verifier compatibility.');
}
if (robotsConfig.host !== siteUrl) {
  fail('robots config should expose the canonical host.');
}
if (robotsConfig.sitemap !== `${siteUrl}/sitemap.xml`) {
  fail('robots config should expose the canonical sitemap URL.');
}
if (!robotsConfig.rules?.some(rule => rule.userAgent === '*' && rule.allow === '/')) {
  fail('robots config should allow all crawlers to access the site.');
}
for (const crawler of ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'GPTBot']) {
  if (!robotsConfig.rules?.some(rule => rule.userAgent === crawler && rule.allow === '/')) {
    fail(`robots config should explicitly allow ${crawler}.`);
  }
}
if (!feedRouteSource.includes("dynamic = 'force-static'")) {
  fail('app/feed.xml/route.js should be force-static.');
}
if (!contentIndexRouteSource.includes("dynamic = 'force-static'")) {
  fail('app/content-index.txt/route.js should be force-static.');
}
if (!atomFeed.includes('<feed xmlns="http://www.w3.org/2005/Atom">')) {
  fail('Atom feed is missing the Atom feed root.');
}
if (!atomFeed.includes(`<updated>${siteUpdatedIso}T00:00:00.000Z</updated>`)) {
  fail('Atom feed updated timestamp does not match siteUpdatedIso.');
}
for (const insight of operatorInsights) {
  const url = absoluteUrl(insight.path);
  if (!atomFeed.includes(`<title>${insight.title}</title>`)) fail(`Atom feed is missing title for ${insight.path}.`);
  if (!atomFeed.includes(`href="${url}"`)) fail(`Atom feed is missing URL for ${insight.path}.`);
  if (!contentIndex.includes(url)) fail(`Content index is missing URL for ${insight.path}.`);
  for (const term of insight.searchTerms || []) {
    if (!atomFeed.includes(`term="${term}"`)) fail(`Atom feed is missing category term "${term}" for ${insight.path}.`);
    if (!contentIndex.includes(term)) fail(`Content index is missing search term "${term}" for ${insight.path}.`);
  }
  if (!contentIndex.includes(insight.answer)) fail(`Content index is missing short answer for ${insight.path}.`);
  for (const item of insight.faq || []) {
    if (!atomFeed.includes(item[0]) || !atomFeed.includes(item[1])) fail(`Atom feed is missing FAQ "${item[0]}" for ${insight.path}.`);
    if (!contentIndex.includes(item[0]) || !contentIndex.includes(item[1])) fail(`Content index is missing FAQ "${item[0]}" for ${insight.path}.`);
  }
}
for (const phrase of ['business data', 'industry intelligence', 'market intelligence', 'competitive intelligence', 'demand intelligence']) {
  if (!normalized(contentIndex).includes(phrase)) fail(`Content index is missing topic phrase "${phrase}".`);
}
if (!contentIndex.includes(`${siteUrl}/market-intelligence-agency`)) {
  fail('Content index is missing the market intelligence agency route.');
}
if (!contentIndex.includes(`${siteUrl}/operator-intelligence`)) {
  fail('Content index is missing the operator intelligence route.');
}
if (!contentIndex.includes('Operator Intelligence Briefs')) {
  fail('Content index is missing the operator intelligence briefs commercial phrase.');
}
if (!contentIndex.includes(`${siteUrl}/business-data-intelligence`)) {
  fail('Content index is missing the business data intelligence route.');
}
if (!contentIndex.includes('Business Data Intelligence Services for Operators')) {
  fail('Content index is missing the business data intelligence services commercial phrase.');
}
if (!contentIndex.includes(`${siteUrl}/methodology`)) {
  fail('Content index is missing the methodology route.');
}
if (!contentIndex.includes(`${siteUrl}/sample-market-intelligence-report`)) {
  fail('Content index is missing the sample market intelligence report route.');
}
if (!contentIndex.includes(`${siteUrl}/competitive-intelligence-services`)) {
  fail('Content index is missing the competitive intelligence services route.');
}
if (!contentIndex.includes(`${siteUrl}/site-map`)) {
  fail('Content index is missing the human-readable site map route.');
}
for (const item of marketIntelligenceAgencyFaq) {
  if (!contentIndex.includes(item[0]) || !contentIndex.includes(item[1])) {
    fail(`Content index is missing market intelligence agency FAQ "${item[0]}".`);
  }
}
for (const item of operatorIntelligenceFaq) {
  if (!contentIndex.includes(item[0]) || !contentIndex.includes(item[1])) {
    fail(`Content index is missing operator intelligence FAQ "${item[0]}".`);
  }
}
for (const item of businessDataIntelligenceFaq) {
  if (!contentIndex.includes(item[0]) || !contentIndex.includes(item[1])) {
    fail(`Content index is missing business data intelligence FAQ "${item[0]}".`);
  }
}
for (const item of methodologyFaq) {
  if (!contentIndex.includes(item[0]) || !contentIndex.includes(item[1])) {
    fail(`Content index is missing methodology FAQ "${item[0]}".`);
  }
}
for (const item of sampleMarketReportFaq) {
  if (!contentIndex.includes(item[0]) || !contentIndex.includes(item[1])) {
    fail(`Content index is missing sample market intelligence report FAQ "${item[0]}".`);
  }
}
for (const item of competitiveIntelligenceServicesFaq) {
  if (!contentIndex.includes(item[0]) || !contentIndex.includes(item[1])) {
    fail(`Content index is missing competitive intelligence services FAQ "${item[0]}".`);
  }
}

if (failures.length) {
  console.error(`SEO verification failed with ${failures.length} issue${failures.length === 1 ? '' : 's'}:`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO verification passed for ${routeList.length} routes and ${operatorInsights.length} operator insight pages.`);
