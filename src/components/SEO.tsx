import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  author?: string;
}

export default function SEO({ 
  title, 
  description, 
  url = 'https://blog.smartbiz365.site', 
  image = 'https://blog.smartbiz365.site/og-image.svg', 
  type = 'website',
  publishedAt,
  author
}: SEOProps) {
  const siteName = 'SmartBiz Blog';
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {type === 'article' && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      <link rel="canonical" href={url} />
    </Helmet>
  );
}
