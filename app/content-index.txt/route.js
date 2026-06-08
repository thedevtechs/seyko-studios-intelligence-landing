import { renderContentIndex } from '../../lib/content-feed.js';

export const dynamic = 'force-static';

export function GET() {
  return new Response(renderContentIndex(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
    }
  });
}
