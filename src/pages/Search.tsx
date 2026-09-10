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
    
    return allArticles.filter(article => {
      const searchString = `${article.title} ${article.description} ${article.category} ${article.tags.join(' ')}`.toLowerCase();
      // Must match ALL terms (AND logic)
      return searchTerms.every(term => searchString.includes(term));
    });
  }, [query, allArticles]);

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        title="Search Articles | SmartBiz Blog" 
        description="Search for articles about web design, SEO, and business growth on the SmartBiz Blog." 
      />
      
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-12 md:py-16 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-8 transition-colors">
            Search Articles
          </h1>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 border-0 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 bg-white dark:bg-gray-800 rounded-xl text-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:focus:ring-blue-500 shadow-sm transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
              placeholder="Search by topic, keyword, or category..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {query.trim() === '' ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500 dark:text-gray-400 transition-colors">Type something to start searching.</p>
          </div>
        ) : results.length > 0 ? (
          <div>
            <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-8 transition-colors">
              Found {results.length} {results.length === 1 ? 'result' : 'results'} for "{query}"
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map(article => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">No results found for "{query}"</h2>
            <p className="text-gray-600 dark:text-gray-400 transition-colors">Try adjusting your search terms or browse our categories.</p>
          </div>
        )}
      </div>
    </div>
  );
}
