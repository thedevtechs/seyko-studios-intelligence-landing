import { renderAtomFeed } from '../../lib/content-feed.js';

export const dynamic = 'force-static';

export function GET() {
  return new Response(renderAtomFeed(), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
    }
  });
}
