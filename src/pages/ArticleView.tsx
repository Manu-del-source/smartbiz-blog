import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from '../components/Image';
import { getArticleBySlug, getArticlesByCategory } from '../utils/articles';
import SEO from '../components/SEO';
import { Calendar, Clock, ChevronRight, Share2, ArrowLeft } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';

export default function ArticleView() {
  const { slug } = useParams<{ slug: string }>();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation in case the page is loaded already scrolled
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const relatedArticles = getArticlesByCategory(article.category)
    .filter(a => a.slug !== article.slug)
    .slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "image": [`https://blog.smartbiz365.site${article.featuredImage}`],
      "datePublished": new Date(article.publishedAt).toISOString(),
      "author": [{
          "@type": "Organization",
          "name": article.author,
          "url": "https://smartbiz365.site/"
      }]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://blog.smartbiz365.site/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": article.category,
          "item": `https://blog.smartbiz365.site/category/${encodeURIComponent(article.category)}`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": article.title,
          "item": `https://blog.smartbiz365.site/${article.slug}`
        }
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-950 pb-20 transition-colors duration-200">
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent pointer-events-none">
        <div 
          className="h-full bg-blue-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <SEO 
        title={article.title}
        description={article.description}
        type="article"
        url={`https://blog.smartbiz365.site/${article.slug}`}
        image={`https://blog.smartbiz365.site${article.featuredImage}`}
        publishedAt={new Date(article.publishedAt).toISOString()}
        author={article.author}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* Article Header */}
      <header className="pt-16 pb-12 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors duration-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to={`/category/${article.category}`} className="hover:text-blue-600 dark:hover:text-blue-400">{article.category}</Link>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight mb-6 transition-colors">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-300 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold transition-colors">
                SB
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{article.author}</p>
                <p className="text-xs">SmartBiz Web Design</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-l border-gray-200 dark:border-gray-800 pl-6 transition-colors">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {formattedDate}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readingTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <Image 
          src={article.featuredImage} 
          alt={article.title}
          wrapperClassName="aspect-[21/9] w-full rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-colors"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </div>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
        <article className="prose prose-base sm:prose-lg dark:prose-invert prose-blue max-w-none prose-headings:tracking-tight prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-700 dark:hover:prose-a:text-blue-300 prose-p:leading-relaxed prose-li:leading-relaxed">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              img: (props) => (
                <Image 
                  src={props.src || ''} 
                  alt={props.alt || ''} 
                  wrapperClassName="my-8 rounded-xl"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              )
            }}
          >
            {article.content}
          </ReactMarkdown>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-2 transition-colors">
          {article.tags?.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium transition-colors">
              #{tag}
            </span>
          ))}
        </div>
        
        {/* Inline CTA */}
        <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50 rounded-2xl p-8 text-center transition-colors">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Need a professional website for your business?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">SmartBiz builds high-converting, SEO-optimized websites for businesses in Eldoret and across Kenya.</p>
          <a
            href="https://smartbiz365.site/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Work with SmartBiz
          </a>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-gray-800 pb-4 transition-colors">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map(related => (
              <ArticleCard key={related.slug} article={related} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
