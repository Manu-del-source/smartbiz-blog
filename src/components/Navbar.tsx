import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import { CATEGORIES } from '../content/categories';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = CATEGORIES.map((c) => ({
    name: c.name,
    path: `/category/${encodeURIComponent(c.name)}`,
  }));

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-paper/90 dark:bg-night/90 backdrop-blur transition-shadow duration-200',
        scrolled
          ? 'shadow-[0_1px_0_0_var(--color-line)] dark:shadow-[0_1px_0_0_var(--color-night-line)]'
          : 'shadow-none border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <Link
            to="/"
            className={cn(
              'text-sm font-medium transition-colors hover:text-accent',
              isActive('/') ? 'text-accent' : 'text-ink/80 dark:text-paper-ink/80',
            )}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-accent',
                isActive(link.path) ? 'text-accent' : 'text-ink/80 dark:text-paper-ink/80',
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Link
            to="/search"
            aria-label="Search articles"
            className="text-ink/60 transition-colors hover:text-accent dark:text-paper-ink/60"
          >
            <Search className="h-[18px] w-[18px]" />
          </Link>
          <ThemeToggle />
          <a
            href="https://smartbiz365.site/"
            className="inline-flex items-center rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-accent dark:bg-paper-ink dark:text-night dark:hover:bg-accent dark:hover:text-paper"
          >
            Get a Website
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <Link
            to="/search"
            aria-label="Search articles"
            className="p-2 text-ink/70 transition-colors hover:text-accent dark:text-paper-ink/70"
          >
            <Search className="h-5 w-5" />
          </Link>
          <ThemeToggle />
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="p-2 text-ink/70 transition-colors hover:text-accent dark:text-paper-ink/70"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          'overflow-hidden border-t border-line bg-paper transition-[max-height] duration-300 ease-in-out dark:border-night-line dark:bg-night lg:hidden',
          isOpen ? 'max-h-96' : 'max-h-0 border-t-0',
        )}
      >
        <div className="space-y-1 px-4 py-4 sm:px-6">
          <Link
            to="/"
            className={cn(
              'block rounded-md px-3 py-2.5 text-base font-medium',
              isActive('/')
                ? 'bg-accent-soft text-accent-dark dark:bg-accent-soft-dark dark:text-accent-bright'
                : 'text-ink/80 dark:text-paper-ink/80',
            )}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'block rounded-md px-3 py-2.5 text-base font-medium',
                isActive(link.path)
                  ? 'bg-accent-soft text-accent-dark dark:bg-accent-soft-dark dark:text-accent-bright'
                  : 'text-ink/80 dark:text-paper-ink/80',
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3">
            <a
              href="https://smartbiz365.site/"
              className="block w-full rounded-md bg-ink px-4 py-3 text-center text-base font-semibold text-paper dark:bg-paper-ink dark:text-night"
            >
              Get a Website
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
