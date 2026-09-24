const fs = require('fs');
const path = require('path');
const fm = require('front-matter');

const articlesDir = path.join(__dirname, 'src', 'content', 'articles');
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));
const baseUrl = 'https://blog.smartbiz365.site';

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const articles = files.map(file => {
  const content = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
  const parsed = fm(content);
  return parsed.attributes;
}).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

const lastBuildDate = articles.length > 0
  ? new Date(Math.max(...articles.map(a => new Date(a.updatedAt || a.publishedAt).getTime()))).toUTCString()
  : new Date().toUTCString();

let rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>SmartBiz Blog</title>
  <description>Practical insights on web design, SEO, and digital strategy for Kenyan businesses.</description>
  <link>${baseUrl}/</link>
  <language>en</language>
  <lastBuildDate>${lastBuildDate}</lastBuildDate>
  <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
`;

articles.forEach(article => {
  const link = `${baseUrl}/${article.slug}`;
  rss += `  <item>\n    <title><![CDATA[${article.title}]]></title>\n    <description><![CDATA[${article.description}]]></description>\n    <link>${link}</link>\n    <guid isPermaLink="true">${link}</guid>\n    <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>\n`;
  if (article.category) rss += `    <category>${escapeXml(article.category)}</category>\n`;
  (article.tags || []).forEach(tag => {
    rss += `    <category>${escapeXml(tag)}</category>\n`;
  });
  rss += `  </item>\n`;
});

rss += `</channel>\n</rss>`;

fs.writeFileSync(path.join(__dirname, 'public', 'rss.xml'), rss);
console.log('RSS generated');
