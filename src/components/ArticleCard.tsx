import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import Image from './Image';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (featured) {
    return (
      <article className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row duration-200">
        <Image 
          src={article.featuredImage} 
          alt={article.title}
          wrapperClassName="md:w-1/2 shrink-0"
          className="h-64 md:h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="p-6 md:p-10 flex flex-col justify-center md:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            <Link to={`/category/${article.category}`} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
              {article.category}
            </Link>
            <span className="flex items-center text-xs text-gray-500 dark:text-gray-400 gap-1">
              <Calendar className="w-3 h-3" /> {formattedDate}
            </span>
          </div>
          <Link to={`/${article.slug}`} className="block">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight mb-4">
              {article.title}
            </h2>
          </Link>
          <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 md:line-clamp-4 leading-relaxed">
            {article.description}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">
                SB
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{article.author}</span>
            </div>
            <Link to={`/${article.slug}`} className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
              Read article <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all flex flex-col h-full duration-200">
      <Image 
        src={article.featuredImage} 
        alt={article.title}
        wrapperClassName="aspect-[16/9]"
        className="group-hover:scale-105 transition-transform duration-500"
      />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <Link to={`/category/${article.category}`} className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors uppercase tracking-wider">
            {article.category}
          </Link>
          <span className="flex items-center text-xs text-gray-400 gap-1">
            <Clock className="w-3 h-3" /> {article.readingTime}
          </span>
        </div>
        <Link to={`/${article.slug}`} className="block mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
            {article.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 line-clamp-2 flex-1">
          {article.description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-800 mt-auto transition-colors">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{formattedDate}</span>
          <Link to={`/${article.slug}`} className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
            Read <span className="sr-only">{article.title}</span> &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
