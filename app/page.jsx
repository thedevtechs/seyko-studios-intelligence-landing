import { getBodyHtml } from '../lib/static-site';

export default function Page() {
  return <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: getBodyHtml() }} />;
}
