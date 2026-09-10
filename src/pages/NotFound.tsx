import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-paper px-4 transition-colors dark:bg-night">
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">404</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink dark:text-paper-ink sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base text-muted dark:text-muted-dark">
          Sorry, we couldn't find the page you're looking for. It might have been moved,
          renamed, or is temporarily unavailable.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent dark:bg-paper-ink dark:text-night"
          >
            Go back home
          </Link>
          <a
            href="https://smartbiz365.site/"
            className="text-sm font-semibold text-ink transition-colors hover:text-accent dark:text-paper-ink"
          >
            Contact SmartBiz
          </a>
        </div>
      </div>
    </div>
  );
}
