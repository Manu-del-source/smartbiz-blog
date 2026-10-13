import fs from 'node:fs';
import path from 'node:path';
import fm from 'front-matter';

const dist = path.resolve('dist');
const indexPath = path.join(dist, 'index.html');
const articlesDir = path.resolve('src/content/articles');
const baseUrl = 'https://blog.smartbiz365.site';

const validPaths = JSON.parse(
  fs.readFileSync(path.join(dist, 'valid-paths.json'), 'utf8'),
);

const paths = [
  '/',
  ...validPaths.categories.map((category) => '/category/' + encodeURIComponent(category)),
  ...validPaths.slugs.map((slug) => '/' + slug),
  '/about',
  '/contact',
  '/editorial-policy',
  '/privacy',
  '/terms',
];

const template = fs.readFileSync(indexPath, 'utf8');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function upsertMeta(html, attribute, key, content) {
  const pattern = new RegExp(
    "<meta\\s+[^>]*\\b" + attribute + "=\"" + key + "\"[^>]*>",
    'i',
  );
  const tag = '<meta ' + attribute + '="' + key + '" content="' + escapeHtml(content) + '" />';

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace('</head>', '  ' + tag + '\n  </head>');
}

function upsertCanonical(html, canonical) {
  const tag = '<link rel="canonical" href="' + escapeHtml(canonical) + '" />';
  const pattern = /<link\s+[^>]*rel=["']canonical["'][^>]*>/i;

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace('</head>', '  ' + tag + '\n  </head>');
}

function getArticleMetadata(slug) {
  const articlePath = path.join(articlesDir, slug + '.md');
  if (!fs.existsSync(articlePath)) return null;

  const parsed = fm(fs.readFileSync(articlePath, 'utf8'));
  const attrs = parsed.attributes || {};
  if (!attrs.title || !attrs.description) return null;

  return { title: attrs.title, description: attrs.description };
}

for (const route of paths) {
  const normalized = route === '/' ? '/' : route.replace(/\/+$/, '');
  const canonical = baseUrl + normalized;
  let html = template;

  // Put article-specific metadata in the static HTML delivered to crawlers.
  // React Helmet continues to manage metadata during client-side navigation.
  if (normalized !== '/' && !normalized.startsWith('/category/')) {
    const article = getArticleMetadata(normalized.slice(1));

    if (article) {
      html = html.replace(/<title>[\s\S]*?<\/title>/i, '<title>' + escapeHtml(article.title) + '</title>');
      html = upsertMeta(html, 'name', 'description', article.description);
      html = upsertMeta(html, 'property', 'og:title', article.title);
      html = upsertMeta(html, 'property', 'og:description', article.description);
      html = upsertMeta(html, 'property', 'og:type', 'article');
      html = upsertMeta(html, 'name', 'twitter:title', article.title);
      html = upsertMeta(html, 'name', 'twitter:description', article.description);
    }
  }

  html = upsertCanonical(html, canonical);

  if (normalized === '/') {
    fs.writeFileSync(indexPath, html);
    continue;
  }

  const outputPath = path.join(dist, normalized.slice(1) + '.html');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html);
}

console.log('Generated canonical and route-specific SEO metadata for ' + paths.length + ' routes.');
