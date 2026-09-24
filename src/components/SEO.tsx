import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  /**
   * Canonical URL of this page. Every indexable page must pass its own URL.
   * Omit only for non-indexable screens (e.g. the 404 page), where no
   * canonical is emitted.
   */
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
  section?: string;
  tags?: string[];
  /**
   * Set for utility-only screens (search, 404) that carry no publisher
   * content and must not be indexed.
   */
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  url,
  image = 'https://blog.smartbiz365.site/og-image.png',
  type = 'website',
  publishedAt,
  updatedAt,
  author,
  section,
  tags,
  noindex = false,
}: SEOProps) {
  const siteName = 'SmartBiz Blog';
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {type === 'article' && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {type === 'article' && updatedAt && (
        <meta property="article:modified_time" content={updatedAt} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' &&
        tags?.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

      {url && !noindex && <link rel="canonical" href={url} />}
    </Helmet>
  );
}
