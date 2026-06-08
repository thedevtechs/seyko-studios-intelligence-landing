import {
  businessDataIntelligenceFaq,
  competitiveIntelligenceServicesFaq,
  industryIntelligenceFaq,
  insightUpdated,
  marketIntelligenceAgencyFaq,
  methodologyFaq,
  operatorInsights,
  operatorIntelligenceFaq,
  sampleMarketReportFaq,
  siteUpdatedIso
} from './site-pages.js';
import { seoDescription, seoTitle, siteUrl } from './seo.js';

const absoluteUrl = path => `${siteUrl}${path === '/' ? '' : path}`;

function escapeXml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function textBlock(lines = []) {
  return `${lines.join('\n').trim()}\n`;
}

export function renderAtomFeed() {
  const updated = `${siteUpdatedIso}T00:00:00.000Z`;
  const entries = operatorInsights
    .map(insight => `
  <entry>
    <title>${escapeXml(insight.title)}</title>
    <link href="${escapeXml(absoluteUrl(insight.path))}" />
    <id>${escapeXml(absoluteUrl(insight.path))}</id>
    <updated>${updated}</updated>
    <published>${updated}</published>
    <author><name>Seyko Studios</name></author>
    <summary>${escapeXml(insight.summary)}</summary>
    <category term="${escapeXml(insight.eyebrow)}" />
    ${(insight.searchTerms || []).map(term => `<category term="${escapeXml(term)}" />`).join('\n    ')}
    <content type="html">${escapeXml(`<p>${insight.answer}</p>${(insight.faq || []).map(item => `<h2>${item[0]}</h2><p>${item[1]}</p>`).join('')}`)}</content>
  </entry>`)
    .join('');

  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(seoTitle)}</title>
  <subtitle>${escapeXml(seoDescription)}</subtitle>
  <link href="${escapeXml(`${siteUrl}/feed.xml`)}" rel="self" />
  <link href="${escapeXml(siteUrl)}" />
  <id>${escapeXml(`${siteUrl}/#operator-insights-feed`)}</id>
  <updated>${updated}</updated>${entries}
</feed>`;
}

export function renderContentIndex() {
  const insightLines = operatorInsights.flatMap(insight => [
    `- ${insight.title}`,
    `  URL: ${absoluteUrl(insight.path)}`,
    `  Topic: ${insight.eyebrow}`,
    `  Search terms: ${(insight.searchTerms || []).join(', ')}`,
    `  Summary: ${insight.summary}`,
    `  Short answer: ${insight.answer}`,
    ...(insight.faq || []).flatMap(item => [
      `  FAQ: ${item[0]}`,
      `  Answer: ${item[1]}`
    ])
  ]);

  const faqLines = industryIntelligenceFaq.flatMap(item => [
    `- ${item[0]}`,
    `  Answer: ${item[1]}`
  ]);

  return textBlock([
    'Seyko Studios Content Index',
    `Updated: ${insightUpdated}`,
    `Canonical site: ${siteUrl}`,
    '',
    'Positioning',
    'Seyko Studios helps operators use business data, industry intelligence, market intelligence, competitive intelligence, and demand intelligence before spending more on growth.',
    '',
    'Primary operator intelligence pages',
    `- Operator Intelligence Briefs: ${siteUrl}/operator-intelligence`,
    `- Market Intelligence Agency for Operators: ${siteUrl}/market-intelligence-agency`,
    `- Business Data Intelligence Services for Operators: ${siteUrl}/business-data-intelligence`,
    `- Industry Intelligence for Operators: ${siteUrl}/industry-intelligence`,
    `- Market Intelligence Methodology: ${siteUrl}/methodology`,
    `- Sample Market Intelligence Report: ${siteUrl}/sample-market-intelligence-report`,
    `- Competitive Intelligence Services: ${siteUrl}/competitive-intelligence-services`,
    `- Operator Insights hub: ${siteUrl}/insights`,
    `- Human-readable site map: ${siteUrl}/site-map`,
    '',
    'Operator insight articles',
    ...insightLines,
    '',
    'Industry intelligence FAQ',
    ...faqLines,
    '',
    'Operator intelligence FAQ',
    ...operatorIntelligenceFaq.flatMap(item => [
      `- ${item[0]}`,
      `  Answer: ${item[1]}`
    ]),
    '',
    'Market intelligence agency FAQ',
    ...marketIntelligenceAgencyFaq.flatMap(item => [
      `- ${item[0]}`,
      `  Answer: ${item[1]}`
    ]),
    '',
    'Business data intelligence FAQ',
    ...businessDataIntelligenceFaq.flatMap(item => [
      `- ${item[0]}`,
      `  Answer: ${item[1]}`
    ]),
    '',
    'Market intelligence methodology FAQ',
    ...methodologyFaq.flatMap(item => [
      `- ${item[0]}`,
      `  Answer: ${item[1]}`
    ]),
    '',
    'Sample market intelligence report FAQ',
    ...sampleMarketReportFaq.flatMap(item => [
      `- ${item[0]}`,
      `  Answer: ${item[1]}`
    ]),
    '',
    'Competitive intelligence services FAQ',
    ...competitiveIntelligenceServicesFaq.flatMap(item => [
      `- ${item[0]}`,
      `  Answer: ${item[1]}`
    ]),
    '',
    'Conversion path',
    `Request a demand snapshot: ${siteUrl}/request-snapshot`,
    `Pricing: ${siteUrl}/pricing`
  ]);
}
