const fs = require('fs');
const path = require('path');

// Keep this list in sync with the static <Route> entries in src/App.tsx.
const STATIC_PATHS = ['/', '/about', '/contact', '/privacy', '/terms', '/search'];

// Keep this list in sync with src/content/categories.ts.
const CATEGORIES = ['Web Design', 'SEO', 'Business', 'Guides'];

const articlesDir = path.join(__dirname, 'src', 'content', 'articles');
const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith('.md'));

const slugs = files
  .map((file) => {
    const content = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
    const match = content.match(/slug:\s+"([^"]+)"/);
    return match ? match[1] : null;
  })
  .filter(Boolean);

const manifest = {
  staticPaths: STATIC_PATHS,
  categories: CATEGORIES,
  slugs,
};

fs.writeFileSync(
  path.join(__dirname, 'public', 'valid-paths.json'),
  JSON.stringify(manifest, null, 2),
);

console.log(`valid-paths.json generated: ${STATIC_PATHS.length} static paths, ${CATEGORIES.length} categories, ${slugs.length} article slugs`);
