import { makeRouteMetadata, StaticRoutePage } from '../../lib/route-page';

const slug = 'sample-market-intelligence-report';

export function generateMetadata() {
  return makeRouteMetadata(slug);
}

export default function Page() {
  return <StaticRoutePage slug={slug} />;
}
