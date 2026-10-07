import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { getArticleBySlug } from './utils/articles';
import './index.css';

const SITE_URL = 'https://blog.smartbiz365.site';

function setInitialCanonical() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  let canonicalPath: string | null = null;

  if (path === '/' || ['/about', '/contact', '/editorial-policy', '/privacy', '/terms'].includes(path)) {
    canonicalPath = path;
  } else if (path.startsWith('/category/')) {
    canonicalPath = path;
  } else if (path !== '/search' && getArticleBySlug(path.slice(1))) {
    canonicalPath = path;
  }

  if (!canonicalPath) return;

  let canonical = document.head.querySelector<HTMLLinkElement>('link[data-smartbiz-canonical]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.dataset.smartbizCanonical = 'true';
    document.head.appendChild(canonical);
  }

  canonical.href = `${SITE_URL}${canonicalPath}`;
}

setInitialCanonical();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
