import { makeRouteMetadata, StaticRoutePage } from '../../../lib/route-page';

const slug = 'business-data-checklist-growth-decisions';

export function generateMetadata() {
  return makeRouteMetadata(slug);
}

export default function Page() {
  return <StaticRoutePage slug={slug} />;
}
