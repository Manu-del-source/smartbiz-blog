import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { CATEGORIES } from '../content/categories';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-paper dark:border-night-line dark:bg-night">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted dark:text-muted-dark">
              Practical advice on websites, SEO, and getting found on Google — written for
              small business owners in Eldoret and across Kenya.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-ink dark:text-paper-ink">
              Categories
            </h3>
            <ul className="space-y-3 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.name}>
                  <Link
                    to={`/category/${encodeURIComponent(cat.name)}`}
                    className="text-muted transition-colors hover:text-accent dark:text-muted-dark"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-ink dark:text-paper-ink">
              SmartBiz
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-muted transition-colors hover:text-accent dark:text-muted-dark">
                  About this blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted transition-colors hover:text-accent dark:text-muted-dark">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://smartbiz365.site/"
                  className="text-muted transition-colors hover:text-accent dark:text-muted-dark"
                >
                  Main website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 dark:border-night-line sm:flex-row">
          <p className="text-sm text-muted dark:text-muted-dark">
            &copy; {new Date().getFullYear()} SmartBiz. All rights reserved.
          </p>
          <p className="text-sm text-muted dark:text-muted-dark">
            Built in Eldoret, for businesses across Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
}
