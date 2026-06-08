import { makeRouteMetadata, StaticRoutePage } from '../../lib/route-page';
import Script from 'next/script';

const slug = 'request-snapshot';
const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export function generateMetadata() {
  return makeRouteMetadata(slug);
}

export default function Page() {
  return (
    <>
      <StaticRoutePage slug={slug} />
      {recaptchaSiteKey ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(recaptchaSiteKey)}`}
          strategy="afterInteractive"
        />
      ) : null}
    </>
  );
}
