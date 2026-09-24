const fs = require('fs');
const path = require('path');
const fm = require('front-matter');

const articlesDir = path.join(__dirname, 'src', 'content', 'articles');
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));
const baseUrl = 'https://blog.smartbiz365.site';

// Static pages with their priorities. Deliberately excludes /search (a
// utility screen with no publisher content — it carries a noindex tag).
// Keep in sync with the static <Route> entries in src/App.tsx.
const STATIC_URLS = [
  { path: '/', priority: '1.0' },
  { path: '/about', priority: '0.8' },
  { path: '/contact', priority: '0.8' },
  { path: '/editorial-policy', priority: '0.6' },
  { path: '/privacy', priority: '0.3' },
  { path: '/terms', priority: '0.3' },
];

// Keep in sync with src/content/categories.ts.
const CATEGORIES = ['Web Design', 'SEO', 'Business', 'Guides'];

function isoDate(value) {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString().split('T')[0];
}

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

STATIC_URLS.forEach(({ path: urlPath, priority }) => {
  sitemap += `  <url>\n    <loc>${baseUrl}${urlPath}</loc>\n    <priority>${priority}</priority>\n  </url>\n`;
});

CATEGORIES.forEach((category) => {
  sitemap += `  <url>\n    <loc>${baseUrl}/category/${encodeURIComponent(category)}</loc>\n    <priority>0.7</priority>\n  </url>\n`;
});

files.forEach(file => {
  const content = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
  let slug = null;
  let lastmod = null;
  try {
    const parsed = fm(content);
    slug = parsed.attributes.slug;
    lastmod = isoDate(parsed.attributes.updatedAt || parsed.attributes.publishedAt);
  } catch {
    const slugMatch = content.match(/slug:\s+"([^"]+)"/);
    if (slugMatch && slugMatch[1]) slug = slugMatch[1];
  }
  if (slug) {
    sitemap += `  <url>\n    <loc>${baseUrl}/${slug}</loc>\n`;
    if (lastmod) sitemap += `    <lastmod>${lastmod}</lastmod>\n`;
    sitemap += `    <priority>0.9</priority>\n  </url>\n`;
  }
});

sitemap += `</urlset>`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap generated');
