import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-[70vh] flex flex-col items-center justify-center px-4 transition-colors duration-200">
      <SEO title="Page Not Found | SmartBiz Blog" description="The page you are looking for does not exist." />
      <div className="text-center">
        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">404 Error</p>
        <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white tracking-tight sm:text-5xl transition-colors">Page not found</h1>
        <p className="mt-6 text-base text-gray-500 dark:text-gray-400 max-w-md mx-auto transition-colors">
          Sorry, we couldn't find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            Go back home
          </Link>
          <a href="https://smartbiz365.site/" className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
