import sitemap from '../app/sitemap.js';
import { routePriority } from '../app/sitemap.js';
import { operatorInsights } from '../lib/site-pages.js';
import { siteUrl } from '../lib/seo.js';

const priorityNotes = {
  '/': 'Homepage positioning and industry routes',
  '/operator-intelligence': 'Commercial operator intelligence brief intent',
  '/market-intelligence-agency': 'Commercial market intelligence agency intent',
  '/business-data-intelligence': 'Commercial business data intelligence services intent',
  '/industry-intelligence': 'Core industry intelligence intent',
  '/competitive-intelligence-services': 'Commercial competitive intelligence services intent',
  '/sample-market-intelligence-report': 'Sample report and report example intent',
  '/methodology': 'Trust and methodology intent',
  '/insights': 'Operator insight hub',
  '/pricing': 'Qualified-lead filter',
  '/request-snapshot': 'Conversion path'
};

const insightNotes = Object.fromEntries(
  operatorInsights.map(insight => [insight.path, `${insight.eyebrow}: ${insight.searchTerms?.slice(0, 2).join(', ')}`])
);

function pathFromUrl(url) {
  const parsed = new URL(url);
  return parsed.pathname === '/' ? '/' : parsed.pathname.replace(/\/$/, '');
}

function priorityFor(path) {
  if (path in routePriority) return routePriority[path];
  if (path.startsWith('/insights/')) return 0.76;
  return 0.55;
}

function noteFor(path) {
  return priorityNotes[path] || insightNotes[path] || 'Supporting route';
}

const rows = sitemap()
  .map(entry => {
    const path = pathFromUrl(entry.url);
    return {
      path,
      url: entry.url,
      priority: priorityFor(path),
      changeFrequency: entry.changeFrequency,
      note: noteFor(path)
    };
  })
  .filter(row => row.priority >= 0.76)
  .sort((a, b) => b.priority - a.priority || a.path.localeCompare(b.path));

console.log(`Seyko SEO priority URLs for indexing and rank tracking`);
console.log(`Canonical site: ${siteUrl}`);
console.log(`Total priority URLs: ${rows.length}`);
console.log('');
console.log('| Priority | URL | Change frequency | Why it matters |');
console.log('| --- | --- | --- | --- |');
for (const row of rows) {
  console.log(`| ${row.priority.toFixed(2)} | ${row.url} | ${row.changeFrequency} | ${row.note} |`);
}
