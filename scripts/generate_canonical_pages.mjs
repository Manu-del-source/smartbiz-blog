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
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(
    '<meta\\s+[^>]*\\b' + attribute + '=["\\']' + escapedKey + '["\\'][^>]*>',
    'gi',
  );
  const tag = '<meta ' + attribute + '="' + key + '" content="' + escapeHtml(content) + '" />';
  let inserted = false;

  html = html.replace(pattern, () => {
    if (inserted) return '';
    inserted = true;
    return tag;
  });

  if (!inserted) {
    html = html.replace('</head>', '  ' + tag + '\\n  </head>');
  }
  return html;
}

function upsertCanonical(html, canonical) {
  const tag = '<link rel="canonical" href="' + escapeHtml(canonical) + '" />';
  const pattern = /<link\\s+[^>]*rel=["\\']canonical["\\'][^>]*>/gi;
  let inserted = false;

  html = html.replace(pattern, () => {
    if (inserted) return '';
    inserted = true;
    return tag;
  });

  if (!inserted) {
    html = html.replace('</head>', '  ' + tag + '\\n  </head>');
  }
  return html;
}

function upsertTitle(html, title) {
  const tag = '<title>' + escapeHtml(title) + '</title>';
  const pattern = /<title>[\\s\\S]*?<\\/title>/gi;
  let inserted = false;

  html = html.replace(pattern, () => {
    if (inserted) return '';
    inserted = true;
    return tag;
  });

  if (!inserted) {
    html = html.replace('</head>', '  ' + tag + '\\n  </head>');
  }
  return html;
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
  const normalized = route === '/' ? '/' : route.replace(/\\/+$/, '');
  const canonical = baseUrl + normalized;
  let html = template;

  // Generate one canonical and one title/meta tag for each static route.
  // Client-side navigation uses the shared SEO component.
  if (normalized !== '/' && !normalized.startsWith('/category/')) {
    const article = getArticleMetadata(normalized.slice(1));

    if (article) {
      upsertTitle(html, article.title + ' | SmartBiz Blog');
      html = upsertMeta(html, 'name', 'description', article.description);
      html = upsertMeta(html, 'property', 'og:title', article.title + ' | SmartBiz Blog');
      html = upsertMeta(html, 'property', 'og:description', article.description);
      html = upsertMeta(html, 'property', 'og:type', 'article');
      html = upsertMeta(html, 'name', 'twitter:title', article.title + ' | SmartBiz Blog');
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
