/**
 * Build-time content validation for SmartBiz Blog articles.
 *
 * Fails the build (non-zero exit) on invalid *required* metadata:
 * missing/duplicate slug or title, unknown category or author,
 * invalid dates, slug/filename mismatch.
 *
 * Warns (exit 0) on quality signals that deserve human attention:
 * short descriptions, unusually short bodies, missing internal links,
 * missing sources, future dates. Warnings never fail the build —
 * word count is not a substitute for editorial quality.
 *
 * Run: `node validate_articles.cjs` (also wired into `prebuild`).
 */
const fs = require('fs');
const path = require('path');
const fm = require('front-matter');

// Keep in sync with src/content/categories.ts
const CATEGORIES = ['Web Design', 'SEO', 'Business', 'Guides'];
// Keep in sync with src/content/authors.ts
const AUTHORS = ['Emmanuel Kiptoo'];

const articlesDir = path.join(__dirname, 'src', 'content', 'articles');
const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith('.md'));

const errors = [];
const warnings = [];
const seenSlugs = new Map();
const seenTitles = new Map();

function isValidDate(value) {
  return typeof value === 'string' && !Number.isNaN(new Date(value).getTime());
}

files.forEach((file) => {
  const label = `articles/${file}`;
  const raw = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
  let parsed;
  try {
    parsed = fm(raw);
  } catch (err) {
    errors.push(`${label}: frontmatter does not parse (${err.message})`);
    return;
  }
  const a = parsed.attributes || {};
  const body = (parsed.body || '').trim();
  const bodyWords = body ? body.split(/\s+/).length : 0;

  // ---- Required fields (errors) ----
  if (!a.title || typeof a.title !== 'string') errors.push(`${label}: missing required "title"`);
  if (!a.description || typeof a.description !== 'string') errors.push(`${label}: missing required "description"`);
  if (!a.slug || typeof a.slug !== 'string') {
    errors.push(`${label}: missing required "slug"`);
  } else {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(a.slug)) {
      errors.push(`${label}: slug "${a.slug}" is not kebab-case`);
    }
    if (`${a.slug}.md` !== file) {
      errors.push(`${label}: slug "${a.slug}" does not match filename "${file}"`);
    }
    if (seenSlugs.has(a.slug)) {
      errors.push(`${label}: duplicate slug "${a.slug}" (also in ${seenSlugs.get(a.slug)})`);
    } else {
      seenSlugs.set(a.slug, label);
    }
  }
  if (a.title) {
    if (seenTitles.has(a.title)) {
      errors.push(`${label}: duplicate title (also in ${seenTitles.get(a.title)})`);
    } else {
      seenTitles.set(a.title, label);
    }
  }
  if (!a.category) {
    errors.push(`${label}: missing required "category"`);
  } else if (!CATEGORIES.includes(a.category)) {
    errors.push(`${label}: unknown category "${a.category}" (expected one of: ${CATEGORIES.join(', ')})`);
  }
  if (!a.author) {
    errors.push(`${label}: missing required "author"`);
  } else if (!AUTHORS.includes(a.author)) {
    errors.push(`${label}: unknown author "${a.author}" (expected one of: ${AUTHORS.join(', ')})`);
  }
  if (!a.publishedAt) {
    errors.push(`${label}: missing required "publishedAt"`);
  } else if (!isValidDate(a.publishedAt)) {
    errors.push(`${label}: "publishedAt" is not a valid date: ${a.publishedAt}`);
  }
  if (a.updatedAt) {
    if (!isValidDate(a.updatedAt)) {
      errors.push(`${label}: "updatedAt" is not a valid date: ${a.updatedAt}`);
    } else if (isValidDate(a.publishedAt) && new Date(a.updatedAt) < new Date(a.publishedAt)) {
      errors.push(`${label}: "updatedAt" (${a.updatedAt}) is before "publishedAt" (${a.publishedAt})`);
    }
  }
  if (!Array.isArray(a.tags) || a.tags.length === 0) {
    errors.push(`${label}: missing required non-empty "tags" array`);
  }
  if (!a.readingTime || !/^\d+\s+min read$/.test(String(a.readingTime))) {
    errors.push(`${label}: "readingTime" must look like "N min read" (got: ${a.readingTime})`);
  }
  if (!a.featuredImage || typeof a.featuredImage !== 'string') {
    errors.push(`${label}: missing required "featuredImage"`);
  }
  if (a.sources !== undefined) {
    if (!Array.isArray(a.sources)) {
      errors.push(`${label}: "sources" must be an array of {title, url}`);
    } else {
      a.sources.forEach((s, i) => {
        if (!s || typeof s.title !== 'string' || typeof s.url !== 'string' || !/^https?:\/\//.test(s.url)) {
          errors.push(`${label}: sources[${i}] must be {title, url} with an absolute http(s) URL`);
        }
      });
    }
  }
  if (bodyWords === 0) errors.push(`${label}: article body is empty`);

  // ---- Quality signals (warnings) ----
  if (a.description && (a.description.length < 50 || a.description.length > 220)) {
    warnings.push(`${label}: description is ${a.description.length} chars (aim for 50–220)`);
  }
  if (bodyWords > 0 && bodyWords < 500) {
    warnings.push(`${label}: body is ${bodyWords} words — unusually short, review for depth`);
  }
  const internalLinks = (body.match(/\]\(\//g) || []).length;
  if (internalLinks === 0) {
    warnings.push(`${label}: no internal links to other blog articles`);
  }
  if (!a.sources || a.sources.length === 0) {
    warnings.push(`${label}: no sources listed — add citations if the article makes factual claims`);
  }
  if (isValidDate(a.publishedAt) && new Date(a.publishedAt) > new Date()) {
    warnings.push(`${label}: publishedAt (${a.publishedAt}) is in the future`);
  }
  const h2Count = (body.match(/^##\s+/gm) || []).length;
  if (bodyWords > 0 && h2Count === 0) {
    warnings.push(`${label}: no H2 headings — long text without structure is hard to read`);
  }
});

console.log(`Validated ${files.length} articles.`);
warnings.forEach((w) => console.warn(`WARN: ${w}`));
errors.forEach((e) => console.error(`ERROR: ${e}`));

if (errors.length > 0) {
  console.error(`\nValidation failed with ${errors.length} error(s).`);
  process.exit(1);
}
console.log('Validation passed.');
