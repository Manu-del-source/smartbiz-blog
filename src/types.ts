export interface ArticleSource {
  title: string;
  url: string;
}

export interface Article {
  title: string;
  description: string;
  slug: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  /** ISO date (YYYY-MM-DD). Present when the article was substantially revised after first publication. */
  updatedAt?: string;
  readingTime: string;
  featuredImage: string;
  /** Authoritative references / further reading, rendered as a sources section. */
  sources?: ArticleSource[];
  content: string;
}
