import React, { useState, useMemo } from 'react';
import { getAllArticles } from '../utils/articles';
import ArticleCard from '../components/ArticleCard';
import SEO from '../components/SEO';
import { Search as SearchIcon } from 'lucide-react';

export default function Search() {
  const [query, setQuery] = useState('');
  const allArticles = getAllArticles();

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerms = query.toLowerCase().split(' ').filter(Boolean);

    return allArticles.filter((article) => {
      const searchString = `${article.title} ${article.description} ${article.category} ${article.tags.join(' ')}`.toLowerCase();
      return searchTerms.every((term) => searchString.includes(term));
    });
  }, [query, allArticles]);

  return (
    <div className="min-h-screen bg-paper transition-colors dark:bg-night">
      <SEO
        title="Search Articles"
        description="Search for articles about web design, SEO, and business growth on the SmartBiz Blog."
      />

      <div className="border-b border-line dark:border-night-line">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
          <h1 className="mb-8 font-serif text-3xl font-semibold tracking-tight text-ink dark:text-paper-ink md:text-4xl">
            Search Articles
          </h1>

          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted dark:text-muted-dark" />
            <input
              type="text"
              className="w-full border border-line bg-paper py-3.5 pl-12 pr-4 text-base text-ink placeholder:text-muted focus:border-accent focus:outline-none dark:border-night-line dark:bg-night-dim dark:text-paper-ink dark:placeholder:text-muted-dark"
              placeholder="Search by topic, keyword, or category..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 md:py-20">
        {query.trim() === '' ? (
          <p className="py-12 text-center text-lg text-muted dark:text-muted-dark">
            Type something to start searching.
          </p>
        ) : results.length > 0 ? (
          <div>
            <h2 className="mb-8 text-sm font-semibold text-muted dark:text-muted-dark">
              {results.length} {results.length === 1 ? 'result' : 'results'} for &ldquo;{query}&rdquo;
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {results.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        ) : (
          <div className="py-12 text-center">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-ink dark:text-paper-ink">
              No results for &ldquo;{query}&rdquo;
            </h2>
            <p className="text-muted dark:text-muted-dark">
              Try a different keyword, or browse a category from the menu above.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
