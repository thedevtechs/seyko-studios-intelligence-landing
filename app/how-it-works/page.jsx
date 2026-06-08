import { makeRouteMetadata, StaticRoutePage } from '../../lib/route-page';

const slug = 'how-it-works';

export function generateMetadata() {
  return makeRouteMetadata(slug);
}

export default function Page() {
  return <StaticRoutePage slug={slug} />;
}
