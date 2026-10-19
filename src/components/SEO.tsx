import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  /** Canonical URL of this page. Omit for non-indexable screens such as 404. */
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  const selector = 'meta[' + attribute + '="' + CSS.escape(key) + '"]';
  const matches = Array.from(document.head.querySelectorAll<HTMLMetaElement>(selector));
  const meta = matches.shift() ?? document.createElement('meta');
  for (const duplicate of matches) duplicate.remove();
  meta.setAttribute(attribute, key);
  meta.content = content;
  if (!meta.isConnected) document.head.appendChild(meta);
}

function removeMeta(attribute: 'name' | 'property', key: string) {
  document.head.querySelectorAll('meta[' + attribute + '="' + CSS.escape(key) + '"]').forEach((node) => node.remove());
}

function upsertCanonical(url?: string) {
  const links = Array.from(document.head.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]'));
  const canonical = links.shift() ?? document.createElement('link');
  for (const duplicate of links) duplicate.remove();

  if (!url) {
    canonical.remove();
    return;
  }

  canonical.rel = 'canonical';
  canonical.href = url;
  if (!canonical.isConnected) document.head.appendChild(canonical);
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
  tags = [],
  noindex = false,
}: SEOProps) {
  const siteName = 'SmartBiz Blog';
  const fullTitle = title.endsWith(' | ' + siteName) ? title : title + ' | ' + siteName;

  useEffect(() => {
    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:image:alt', fullTitle);
    upsertMeta('property', 'og:site_name', siteName);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);

    if (url && !noindex) upsertMeta('property', 'og:url', url);
    else removeMeta('property', 'og:url');

    if (noindex) upsertMeta('name', 'robots', 'noindex, nofollow');
    else removeMeta('name', 'robots');

    upsertCanonical(noindex ? undefined : url);

    const articleMeta: Array<[string, string, string | undefined]> = [
      ['article:published_time', publishedAt ?? '', type === 'article' ? publishedAt : undefined],
      ['article:modified_time', updatedAt ?? '', type === 'article' ? updatedAt : undefined],
      ['article:author', author ?? '', type === 'article' ? author : undefined],
      ['article:section', section ?? '', type === 'article' ? section : undefined],
    ];

    for (const [key, , value] of articleMeta) {
      if (value) upsertMeta('property', key, value);
      else removeMeta('property', key);
    }

    const existingTags = Array.from(document.head.querySelectorAll<HTMLMetaElement>('meta[property="article:tag"]'));
    existingTags.forEach((tag) => tag.remove());
    if (type === 'article') {
      for (const tag of tags) upsertMeta('property', 'article:tag', tag);
    }
  }, [fullTitle, description, url, image, type, publishedAt, updatedAt, author, section, tags, noindex]);

  return null;
}
