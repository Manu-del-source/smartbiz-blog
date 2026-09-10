import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import { Calendar, Clock } from 'lucide-react';
import ArticleThumb from './ArticleThumb';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (featured) {
    return (
      <article className="group flex flex-col overflow-hidden border border-line bg-paper transition-colors dark:border-night-line dark:bg-night md:flex-row">
        <ArticleThumb
          src={article.featuredImage}
          alt={article.title}
          category={article.category}
          wrapperClassName="h-56 shrink-0 md:h-auto md:w-2/5"
          imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="flex flex-col justify-center p-6 md:w-3/5 md:p-10">
          <div className="mb-4 flex items-center gap-4 text-xs text-muted dark:text-muted-dark">
            <Link
              to={`/category/${encodeURIComponent(article.category)}`}
              className="font-semibold text-accent hover:text-accent-dark"
            >
              {article.category}
            </Link>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> {formattedDate}
            </span>
          </div>
          <Link to={`/${article.slug}`}>
            <h2 className="mb-4 font-serif text-2xl font-semibold leading-tight text-ink transition-colors group-hover:text-accent dark:text-paper-ink md:text-3xl">
              {article.title}
            </h2>
          </Link>
          <p className="mb-6 leading-relaxed text-muted line-clamp-3 dark:text-muted-dark md:line-clamp-4">
            {article.description}
          </p>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-sm font-medium text-ink/80 dark:text-paper-ink/80">
              {article.author}
            </span>
            <Link
              to={`/${article.slug}`}
              className="text-sm font-semibold text-accent hover:text-accent-dark"
            >
              Read article
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-line bg-paper transition-colors dark:border-night-line dark:bg-night">
      <ArticleThumb
        src={article.featuredImage}
        alt={article.title}
        category={article.category}
        wrapperClassName="aspect-[16/9]"
        imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between">
          <Link
            to={`/category/${encodeURIComponent(article.category)}`}
            className="text-xs font-semibold text-accent hover:text-accent-dark"
          >
            {article.category}
          </Link>
          <span className="flex items-center gap-1.5 text-xs text-muted dark:text-muted-dark">
            <Clock className="h-3.5 w-3.5" /> {article.readingTime}
          </span>
        </div>
        <Link to={`/${article.slug}`} className="mb-2 block">
          <h3 className="font-serif text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-accent dark:text-paper-ink line-clamp-2">
            {article.title}
          </h3>
        </Link>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted line-clamp-2 dark:text-muted-dark">
          {article.description}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-line pt-4 dark:border-night-line">
          <span className="text-xs font-medium text-muted dark:text-muted-dark">
            {formattedDate}
          </span>
          <Link
            to={`/${article.slug}`}
            className="text-sm font-semibold text-accent hover:text-accent-dark"
          >
            Read <span className="sr-only">{article.title}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
