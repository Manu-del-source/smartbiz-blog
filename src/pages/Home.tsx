import React from 'react';
import { getAllArticles } from '../utils/articles';
import ArticleCard from '../components/ArticleCard';
import SEO from '../components/SEO';

export default function Home() {
  const articles = getAllArticles();
  const featuredArticle = articles[0];
  const recentArticles = articles.slice(1, 7);

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-200">
      <SEO 
        title="SmartBiz Web Design & SEO Blog Kenya" 
        description="Expert insights on web design, SEO, and digital marketing for businesses in Eldoret and across Kenya. Learn how to grow your business online with SmartBiz." 
      />
      
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-16 md:py-24 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-6 transition-colors">
            Grow Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Online</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed transition-colors">
            Practical insights on web design, SEO, and digital strategy for ambitious Kenyan businesses. Brought to you by SmartBiz.
          </p>
          <a
            href="https://smartbiz365.site/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow transition-all"
          >
            Start Your Website Project
          </a>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-8 transition-colors">Latest Insight</h2>
            <ArticleCard article={featuredArticle} featured />
          </div>
        </section>
      )}

      {/* Recent Articles Grid */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight transition-colors">Recent Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to improve your business's online presence?</h2>
          <p className="text-blue-100 text-lg mb-10">
            Join other successful businesses in Eldoret and across Kenya who trust SmartBiz for their web development and SEO needs.
          </p>
          <a
            href="https://smartbiz365.site/"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-blue-600 bg-white hover:bg-gray-50 shadow-md transition-all"
          >
            See what SmartBiz can build for you
          </a>
        </div>
      </section>
    </div>
  );
}
