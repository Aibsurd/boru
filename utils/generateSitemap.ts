import { INSIGHTS_DATA } from '../constants';

/**
 * Generates XML sitemap dynamically from blog articles
 * This utility can be used to regenerate sitemap.xml when new articles are added
 */
export function generateSitemap(): string {
  const baseUrl = 'https://www.boruconsulting.com';
  const today = new Date().toISOString().split('T')[0];
  
  const urls = [
    {
      loc: `${baseUrl}/`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: INSIGHTS_DATA[0]?.date ? new Date(INSIGHTS_DATA[0].date).toISOString().split('T')[0] : today,
      changefreq: 'weekly',
      priority: '0.9'
    },
    ...INSIGHTS_DATA.map(article => ({
      loc: `${baseUrl}/blog/${article.slug}`,
      lastmod: new Date(article.date).toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.8'
    }))
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('')}
  
</urlset>`;

  return xml;
}

/**
 * Generates RSS feed dynamically from blog articles
 */
export function generateRSS(): string {
  const baseUrl = 'https://www.boruconsulting.com';
  const buildDate = new Date().toUTCString();
  
  const items = INSIGHTS_DATA.map(article => {
    const pubDate = new Date(article.date).toUTCString();
    const articleUrl = `${baseUrl}/blog/${article.slug}`;
    
    return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <dc:creator>${escapeXml(article.author)}</dc:creator>
      <category>${escapeXml(article.category)}</category>
      <description><![CDATA[${article.excerpt}]]></description>
    </item>`;
  }).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Boru Consulting | Insights &amp; Analysis</title>
    <link>${baseUrl}/blog</link>
    <description>Expert insights on global entity setup, tax strategy, corporate governance, and cross-border compliance from Boru Consulting Group.</description>
    <language>en-gb</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <copyright>Copyright ${new Date().getFullYear()} Boru Consulting Group</copyright>
    <managingEditor>info@boruconsulting.com (Boru Consulting)</managingEditor>
    <webMaster>info@boruconsulting.com (Boru Consulting)</webMaster>
    ${items}
  </channel>
</rss>`;

  return rss;
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Usage example (can be run as a build script):
// import fs from 'fs';
// fs.writeFileSync('public/sitemap.xml', generateSitemap());
// fs.writeFileSync('public/rss.xml', generateRSS());
