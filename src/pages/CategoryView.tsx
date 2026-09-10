import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticlesByCategory, getCategories } from '../utils/articles';
import ArticleCard from '../components/ArticleCard';
import SEO from '../components/SEO';
import { ChevronRight } from 'lucide-react';

export default function CategoryView() {
  const { category } = useParams<{ category: string }>();
  
  if (!category) {
    return <div>Category not found</div>;
  }

  const decodedCategory = decodeURIComponent(category);
  const articles = getArticlesByCategory(decodedCategory);
  const allCategories = getCategories();

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <SEO 
        title={`${decodedCategory} Articles | SmartBiz Blog`}
        description={`Read the latest insights and guides about ${decodedCategory} for Kenyan businesses.`} 
      />
      
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-12 md:py-16 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 dark:text-gray-100">{decodedCategory}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4 transition-colors">
            {decodedCategory}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl transition-colors">
            Latest insights, tips, and strategies related to {decodedCategory.toLowerCase()}.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col md:flex-row gap-12">
        <main className="flex-1">
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No articles found in this category.</h2>
              <Link to="/" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Return home</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map(article => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </main>
        
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 border-b border-gray-100 dark:border-gray-800 pb-2 transition-colors">
              All Categories
            </h3>
            <ul className="space-y-3">
              {allCategories.map(cat => (
                <li key={cat}>
                  <Link 
                    to={`/category/${encodeURIComponent(cat)}`}
                    className={`text-base font-medium transition-colors ${cat === decodedCategory ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300'}`}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-900/50 transition-colors">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Need a Website?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">SmartBiz provides professional web design services in Eldoret.</p>
              <a href="https://smartbiz365.site/" className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors">
                Contact SmartBiz
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
