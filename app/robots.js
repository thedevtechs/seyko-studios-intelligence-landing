import { siteUrl } from '../lib/seo';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/'
      },
      {
        userAgent: 'Googlebot',
        allow: '/'
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/'
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/'
      },
      {
        userAgent: 'GPTBot',
        allow: '/'
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
