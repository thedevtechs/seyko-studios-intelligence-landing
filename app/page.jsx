import { getBodyHtml } from '../lib/static-site';

export const dynamic = 'force-dynamic';

export default function Page() {
  return <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: getBodyHtml() }} />;
}
