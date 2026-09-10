const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, 'src', 'content', 'articles');
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));
const baseUrl = 'https://blog.smartbiz365.site';

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <priority>0.8</priority>
  </url>
`;

files.forEach(file => {
  const content = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
  const slugMatch = content.match(/slug:\s+"([^"]+)"/);
  if (slugMatch && slugMatch[1]) {
    sitemap += `  <url>
    <loc>${baseUrl}/${slugMatch[1]}</loc>
    <priority>0.9</priority>
  </url>\n`;
  }
});

sitemap += `</urlset>`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap generated');
