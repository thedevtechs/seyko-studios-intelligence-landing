import { makeRouteMetadata, StaticRoutePage } from '../../../lib/route-page';

const slug = 'before-hiring-marketing-agency';

export function generateMetadata() {
  return makeRouteMetadata(slug);
}

export default function Page() {
  return <StaticRoutePage slug={slug} />;
}
