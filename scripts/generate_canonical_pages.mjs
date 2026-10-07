import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const indexPath = path.join(dist, 'index.html');
const baseUrl = 'https://blog.smartbiz365.site';

const validPaths = JSON.parse(
  fs.readFileSync(path.join(dist, 'valid-paths.json'), 'utf8'),
);

const paths = [
  '/',
  ...validPaths.categories.map((category) => `/category/${encodeURIComponent(category)}`),
  ...validPaths.slugs.map((slug) => `/${slug}`),
  '/about',
  '/contact',
  '/editorial-policy',
  '/privacy',
  '/terms',
];

const template = fs.readFileSync(indexPath, 'utf8');

for (const route of paths) {
  const normalized = route === '/' ? '/' : route.replace(/\/+$/, '');
  const canonical = `${baseUrl}${normalized}`;
  const html = template.replace(
    '</head>',
    `  <link rel="canonical" href="${canonical}" />\n  </head>`,
  );

  if (normalized === '/') {
    fs.writeFileSync(indexPath, html);
    continue;
  }

  const outputPath = path.join(dist, `${normalized.slice(1)}.html`);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html);
}

console.log(`Generated canonical HTML for ${paths.length} routes.`);
