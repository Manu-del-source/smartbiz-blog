/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ArticleView from './pages/ArticleView';
import CategoryView from './pages/CategoryView';
import Search from './pages/Search';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const SITE_URL = 'https://blog.smartbiz365.site';

const siteJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SmartBiz',
    url: 'https://smartbiz365.site/',
    logo: `${SITE_URL}/favicon.svg`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SmartBiz Blog',
    url: `${SITE_URL}/`,
    publisher: { '@type': 'Organization', name: 'SmartBiz' },
  },
];

export default function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(siteJsonLd)}</script>
        </Helmet>
        <Router>
          <ScrollToTop />
          <div className="flex min-h-screen flex-col bg-paper font-sans text-ink transition-colors dark:bg-night dark:text-paper-ink">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/category/:category" element={<CategoryView />} />
                <Route path="/:slug" element={<ArticleView />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}
