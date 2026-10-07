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
  ...validPaths.articles.map((slug) => `/${slug}`),
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

  const outputDir = path.join(dist, normalized === '/' ? '' : normalized.slice(1));
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'index.html'), html);
}

console.log(`Generated canonical HTML for ${paths.length} routes.`);
