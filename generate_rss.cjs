const fs = require('fs');
const path = require('path');
const fm = require('front-matter');

const articlesDir = path.join(__dirname, 'src', 'content', 'articles');
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));
const baseUrl = 'https://blog.smartbiz365.site';

let rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>SmartBiz Blog</title>
  <description>Professional web design and SEO blog for Kenyan businesses.</description>
  <link>${baseUrl}</link>
  <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
`;

const articles = files.map(file => {
  const content = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
  const parsed = fm(content);
  return parsed.attributes;
}).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

articles.forEach(article => {
  rss += `  <item>
    <title><![CDATA[${article.title}]]></title>
    <description><![CDATA[${article.description}]]></description>
    <link>${baseUrl}/${article.slug}</link>
    <guid>${baseUrl}/${article.slug}</guid>
    <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
  </item>\n`;
});

rss += `</channel>
</rss>`;

fs.writeFileSync(path.join(__dirname, 'public', 'rss.xml'), rss);
console.log('RSS generated');
