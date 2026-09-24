import fm from 'front-matter';
import { Article, ArticleSource } from '../types';

interface FrontmatterAttrs {
  title: string;
  description: string;
  slug: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  featuredImage: string;
  sources?: ArticleSource[];
}

// Use Vite's import.meta.glob to load all markdown files in the articles directory
const modules = import.meta.glob('../content/articles/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export function getAllArticles(): Article[] {
  const articles: Article[] = [];

  for (const path in modules) {
    const rawContent = modules[path];
    const parsed = fm<FrontmatterAttrs>(rawContent as string);
    articles.push({
      ...parsed.attributes,
      // updatedAt falls back to publishedAt so consumers always have a modified date.
      updatedAt: parsed.attributes.updatedAt ?? parsed.attributes.publishedAt,
      sources: parsed.attributes.sources ?? [],
      content: parsed.body,
    });
  }

  // Sort by publishedAt descending
  return articles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find(article => article.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter(article => article.category === category);
}

export function getCategories(): string[] {
  const articles = getAllArticles();
  const categories = new Set<string>();
  articles.forEach(article => categories.add(article.category));
  return Array.from(categories).sort();
}

/**
 * Related articles: same category first, then articles sharing tags,
 * so that no article ends up with an empty "Related" section while
 * small categories are still growing.
 */
export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const all = getAllArticles().filter((a) => a.slug !== article.slug);
  const scored = all.map((candidate) => {
    let score = 0;
    if (candidate.category === article.category) score += 10;
    const sharedTags = candidate.tags.filter((t) => article.tags.includes(t)).length;
    score += sharedTags * 3;
    return { candidate, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}
