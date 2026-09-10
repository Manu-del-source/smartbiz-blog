import React from 'react';
import { Link } from 'react-router-dom';
import { getAllArticles } from '../utils/articles';
import ArticleCard from '../components/ArticleCard';
import SEO from '../components/SEO';
import { CATEGORIES } from '../content/categories';

export default function Home() {
  const articles = getAllArticles();
  const featuredArticle = articles[0];
  const recentArticles = articles.slice(1, 7);

  return (
    <div className="bg-paper transition-colors dark:bg-night">
      <SEO
        title="Web Design & SEO Blog for Kenyan Businesses"
        description="Practical insights on web design, SEO, and digital strategy for ambitious Kenyan businesses. Brought to you by SmartBiz."
      />

      {/* Hero */}
      <section className="border-b border-line dark:border-night-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-8">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-accent">
              SmartBiz Blog
            </p>
            <h1 className="max-w-xl font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-ink dark:text-paper-ink md:text-5xl">
              Practical insights for growing your business online
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted dark:text-muted-dark">
              We share straightforward advice about websites, SEO, and getting found on
              Google — written for hotel, restaurant, retail, and service business owners
              across Kenya.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://smartbiz365.site/"
                className="inline-flex items-center rounded-md bg-ink px-6 py-3 text-base font-semibold text-paper transition-colors hover:bg-accent dark:bg-paper-ink dark:text-night dark:hover:bg-accent dark:hover:text-paper"
              >
                Get a Website
              </a>
              <Link
                to="/search"
                className="inline-flex items-center rounded-md border border-line px-6 py-3 text-base font-semibold text-ink transition-colors hover:border-accent hover:text-accent dark:border-night-line dark:text-paper-ink"
              >
                Explore Articles
              </Link>
            </div>
          </div>

          <div className="border border-line bg-paper-dim/60 p-6 dark:border-night-line dark:bg-night-dim/60 lg:p-8">
            <h2 className="mb-5 text-sm font-semibold text-ink dark:text-paper-ink">
              What you'll find here
            </h2>
            <ul className="space-y-5">
              {CATEGORIES.map((cat) => (
                <li key={cat.name}>
                  <Link
                    to={`/category/${encodeURIComponent(cat.name)}`}
                    className="group block"
                  >
                    <span className="font-serif text-base font-semibold text-ink transition-colors group-hover:text-accent dark:text-paper-ink">
                      {cat.name}
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-muted dark:text-muted-dark">
                      {cat.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-sm font-semibold text-muted dark:text-muted-dark">
              Latest article
            </h2>
            <ArticleCard article={featuredArticle} featured />
          </div>
        </section>
      )}

      {/* Recent Articles */}
      <section className="border-t border-line py-14 dark:border-night-line md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-serif text-2xl font-semibold text-ink dark:text-paper-ink">
              Recent Articles
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink dark:bg-night-dim">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-paper md:text-4xl">
            Ready to improve your business's online presence?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-paper/70">
            SmartBiz builds fast, SEO-friendly websites for businesses in Eldoret and across
            Kenya — from simple brochure sites to full booking and e-commerce platforms.
          </p>
          <a
            href="https://smartbiz365.site/"
            className="mt-9 inline-flex items-center rounded-md bg-accent px-8 py-4 text-base font-semibold text-paper transition-colors hover:bg-accent-dark"
          >
            See what SmartBiz can build for you
          </a>
        </div>
      </section>
    </div>
  );
}
