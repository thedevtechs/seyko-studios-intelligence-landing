import { makeRouteMetadata, StaticRoutePage } from '../lib/route-page';

export function generateMetadata() {
  return makeRouteMetadata('home');
}

export default function Page() {
  return <StaticRoutePage slug="home" />;
}
