import { makeRouteMetadata, StaticRoutePage } from '../../lib/route-page';

const slug = 'b2b-services';

export function generateMetadata() {
  return makeRouteMetadata(slug);
}

export default function Page() {
  return <StaticRoutePage slug={slug} />;
}
