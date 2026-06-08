import { makeRouteMetadata, StaticRoutePage } from '../../lib/route-page';

const slug = 'competitive-intelligence-services';

export function generateMetadata() {
  return makeRouteMetadata(slug);
}

export default function Page() {
  return <StaticRoutePage slug={slug} />;
}
