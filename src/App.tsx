/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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

export default function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-gray-950 transition-colors duration-200">
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
