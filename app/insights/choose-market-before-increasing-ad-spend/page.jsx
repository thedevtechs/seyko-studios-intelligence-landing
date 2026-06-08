import { makeRouteMetadata, StaticRoutePage } from '../../../lib/route-page';

const slug = 'choose-market-before-increasing-ad-spend';

export function generateMetadata() {
  return makeRouteMetadata(slug);
}

export default function Page() {
  return <StaticRoutePage slug={slug} />;
}
