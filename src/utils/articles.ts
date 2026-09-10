import fm from 'front-matter';
import { Article } from '../types';

interface FrontmatterAttrs {
  title: string;
  description: string;
  slug: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  readingTime: string;
  featuredImage: string;
}

// Use Vite's import.meta.glob to load all markdown files in the articles directory
const modules = import.meta.glob('../content/articles/*.md', { as: 'raw', eager: true });

export function getAllArticles(): Article[] {
  const articles: Article[] = [];
  
  for (const path in modules) {
    const rawContent = modules[path];
    const parsed = fm<FrontmatterAttrs>(rawContent as string);
    articles.push({
      ...parsed.attributes,
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
