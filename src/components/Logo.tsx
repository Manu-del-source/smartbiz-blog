import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  withBlogTag?: boolean;
  className?: string;
}

export default function Logo({ withBlogTag = true, className = '' }: LogoProps) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 shrink-0 ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink dark:bg-paper-ink shrink-0">
        <span className="font-serif text-lg font-semibold text-paper dark:text-night leading-none">
          S
        </span>
      </span>
      <span className="flex items-baseline gap-2">
        <span className="font-serif text-lg font-semibold tracking-tight text-ink dark:text-paper-ink">
          SmartBiz
        </span>
        {withBlogTag && (
          <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
            Blog
          </span>
        )}
      </span>
    </Link>
  );
}
