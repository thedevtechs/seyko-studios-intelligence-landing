import { StaticRoutePage } from '../lib/route-page';

export const metadata = {
  title: 'Page Not Found',
  description: 'The requested Seyko Studios page could not be found.',
  robots: {
    index: false,
    follow: true
  }
};

export default function NotFound() {
  return <StaticRoutePage slug="not-found" />;
}
