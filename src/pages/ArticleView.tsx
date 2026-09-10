import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from '../components/Image';
import ArticleThumb from '../components/ArticleThumb';
import { getArticleBySlug, getArticlesByCategory } from '../utils/articles';
import SEO from '../components/SEO';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import { extractHeadings, slugify, nodeToText } from '../utils/headings';

const SITE_URL = 'https://blog.smartbiz365.site';

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const article = slug ? getArticleBySlug(slug) : undefined;

  const headings = useMemo(
    () => (article ? extractHeadings(article.content) : []),
    [article],
  );

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const isoDate = new Date(article.publishedAt).toISOString();
  const articleUrl = `${SITE_URL}/${article.slug}`;
  const imageUrl = article.featuredImage.startsWith('http')
    ? article.featuredImage
    : `${SITE_URL}/og-image.svg`;

  const relatedArticles = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      image: [imageUrl],
      datePublished: isoDate,
      dateModified: isoDate,
      mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
      author: {
        '@type': 'Organization',
        name: article.author,
        url: 'https://smartbiz365.site/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'SmartBiz',
        url: 'https://smartbiz365.site/',
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/favicon.svg`,
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: article.category,
          item: `${SITE_URL}/category/${encodeURIComponent(article.category)}`,
        },
        { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
      ],
    },
  ];

  return (
    <div className="bg-paper pb-20 transition-colors dark:bg-night">
      <div className="pointer-events-none fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent">
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <SEO
        title={article.title}
        description={article.description}
        type="article"
        url={articleUrl}
        image={imageUrl}
        publishedAt={isoDate}
        author={article.author}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Header */}
      <header className="border-b border-line pb-10 pt-12 dark:border-night-line">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex items-center text-sm text-muted dark:text-muted-dark" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="mx-2 h-3.5 w-3.5" />
            <Link to={`/category/${encodeURIComponent(article.category)}`} className="hover:text-accent">
              {article.category}
            </Link>
          </nav>

          <h1 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-ink dark:text-paper-ink md:text-4xl">
            {article.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-muted dark:text-muted-dark">
            {article.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted dark:text-muted-dark">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/10 font-serif text-sm font-semibold text-accent">
                S
              </span>
              <span className="font-medium text-ink dark:text-paper-ink">{article.author}</span>
            </div>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {article.readingTime}
            </span>
          </div>
        </div>
      </header>

      {/* Body + rail */}
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-12">
          <div className="mx-auto w-full max-w-3xl lg:mx-0">
            <ArticleThumb
              src={article.featuredImage}
              alt={article.title}
              category={article.category}
              wrapperClassName="mb-10 aspect-[16/8] w-full border border-line dark:border-night-line"
            />

            <article className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-serif prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-blockquote:border-accent prose-blockquote:font-serif prose-blockquote:not-italic prose-strong:text-ink dark:prose-strong:text-paper-ink prose-p:leading-relaxed prose-li:leading-relaxed prose-img:border prose-img:border-line dark:prose-img:border-night-line">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => {
                    const id = slugify(nodeToText(children));
                    return (
                      <h2 id={id} className="scroll-mt-24">
                        {children}
                      </h2>
                    );
                  },
                  h3: ({ children }) => {
                    const id = slugify(nodeToText(children));
                    return (
                      <h3 id={id} className="scroll-mt-24">
                        {children}
                      </h3>
                    );
                  },
                  img: (props) => (
                    <Image
                      src={props.src || ''}
                      alt={props.alt || ''}
                      wrapperClassName="my-8"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  ),
                }}
              >
                {article.content}
              </ReactMarkdown>
            </article>

            {article.tags?.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8 dark:border-night-line">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 text-sm text-muted dark:border-night-line dark:text-muted-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-14 border border-line bg-paper-dim p-8 text-center dark:border-night-line dark:bg-night-dim">
              <h3 className="mb-3 font-serif text-2xl font-semibold text-ink dark:text-paper-ink">
                Need a professional website for your business?
              </h3>
              <p className="mb-6 text-muted dark:text-muted-dark">
                SmartBiz builds fast, SEO-friendly websites for businesses in Eldoret and
                across Kenya.
              </p>
              <a
                href="https://smartbiz365.site/"
                className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-paper transition-colors hover:bg-accent-dark"
              >
                Work with SmartBiz
              </a>
            </div>
          </div>

          {/* Right rail */}
          <aside className="mt-12 hidden lg:mt-0 lg:block">
            <div className="sticky top-24 space-y-8">
              {headings.length > 1 && (
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-ink dark:text-paper-ink">
                    Contents
                  </h3>
                  <ul className="space-y-2.5 border-l border-line dark:border-night-line">
                    {headings.map((h) => (
                      <li key={h.id} className={h.depth === 3 ? 'pl-7' : 'pl-4'}>
                        <a
                          href={`#${h.id}`}
                          className="block border-l-2 border-transparent pl-0 text-sm text-muted transition-colors hover:text-accent dark:text-muted-dark"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="border border-line p-5 dark:border-night-line">
                <h4 className="mb-2 font-serif text-base font-semibold text-ink dark:text-paper-ink">
                  Need a website?
                </h4>
                <p className="mb-4 text-sm leading-relaxed text-muted dark:text-muted-dark">
                  SmartBiz designs and builds websites for businesses across Kenya.
                </p>
                <a
                  href="https://smartbiz365.site/"
                  className="block rounded-md bg-ink px-4 py-2.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-accent dark:bg-paper-ink dark:text-night"
                >
                  Get a Website
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related */}
      {relatedArticles.length > 0 && (
        <div className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h3 className="mb-8 border-b border-line pb-4 font-serif text-2xl font-semibold text-ink dark:border-night-line dark:text-paper-ink">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {relatedArticles.map((related) => (
              <ArticleCard key={related.slug} article={related} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
