import { siteUrl } from '../lib/seo.js';

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
        userAgent: 'Bingbot',
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
    host: siteUrl,
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
