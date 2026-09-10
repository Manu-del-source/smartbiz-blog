import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticlesByCategory } from '../utils/articles';
import ArticleCard from '../components/ArticleCard';
import SEO from '../components/SEO';
import { ChevronRight } from 'lucide-react';
import { CATEGORIES, getCategoryDescription } from '../content/categories';

export default function CategoryView() {
  const { category } = useParams<{ category: string }>();

  if (!category) {
    return <div>Category not found</div>;
  }

  const decodedCategory = decodeURIComponent(category);
  const articles = getArticlesByCategory(decodedCategory);
  const description = getCategoryDescription(decodedCategory);
  const [featured, ...rest] = articles;

  return (
    <div className="bg-paper transition-colors dark:bg-night">
      <SEO
        title={`${decodedCategory} Articles`}
        description={`${description} From the SmartBiz Blog.`}
      />

      <div className="border-b border-line dark:border-night-line">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
          <nav className="mb-6 flex items-center text-sm text-muted dark:text-muted-dark" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="mx-2 h-3.5 w-3.5" />
            <span className="text-ink dark:text-paper-ink">{decodedCategory}</span>
          </nav>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-ink dark:text-paper-ink md:text-5xl">
            {decodedCategory}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted dark:text-muted-dark">
            {description}
          </p>
          {articles.length > 0 && (
            <p className="mt-4 text-sm font-medium text-muted dark:text-muted-dark">
              {articles.length} {articles.length === 1 ? 'article' : 'articles'}
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-14 sm:px-6 lg:flex-row lg:px-8 lg:py-20">
        <main className="flex-1">
          {articles.length === 0 ? (
            <div className="py-12 text-center">
              <h2 className="mb-4 font-serif text-2xl font-semibold text-ink dark:text-paper-ink">
                No articles in this category yet.
              </h2>
              <Link to="/" className="font-medium text-accent hover:text-accent-dark">
                Return home
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              {featured && <ArticleCard article={featured} featured />}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {rest.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              )}
            </div>
          )}
        </main>

        <aside className="w-full shrink-0 lg:w-64">
          <div className="sticky top-24">
            <h3 className="mb-4 border-b border-line pb-2 text-sm font-semibold text-ink dark:border-night-line dark:text-paper-ink">
              All Categories
            </h3>
            <ul className="space-y-3">
              {CATEGORIES.map((cat) => (
                <li key={cat.name}>
                  <Link
                    to={`/category/${encodeURIComponent(cat.name)}`}
                    className={`text-base font-medium transition-colors ${
                      cat.name === decodedCategory
                        ? 'text-accent'
                        : 'text-muted hover:text-accent dark:text-muted-dark'
                    }`}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 border border-line p-6 dark:border-night-line">
              <h4 className="mb-2 font-serif text-base font-semibold text-ink dark:text-paper-ink">
                Need a Website?
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-muted dark:text-muted-dark">
                SmartBiz provides professional web design services in Eldoret and beyond.
              </p>
              <a
                href="https://smartbiz365.site/"
                className="block rounded-md bg-ink px-4 py-2.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-accent dark:bg-paper-ink dark:text-night"
              >
                Contact SmartBiz
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
