import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Image from './Image';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const GENERIC_PLACEHOLDERS = new Set(['/placeholder.jpg', '/placeholder.svg']);

interface ArticleThumbProps {
  src: string;
  alt: string;
  category: string;
  wrapperClassName?: string;
  imageClassName?: string;
}

/**
 * Renders the real featured image when one exists, or a tasteful,
 * on-brand fallback panel (rather than a generic gray placeholder box)
 * when an article has no photo of its own yet.
 */
export default function ArticleThumb({
  src,
  alt,
  category,
  wrapperClassName,
  imageClassName,
}: ArticleThumbProps) {
  if (GENERIC_PLACEHOLDERS.has(src)) {
    return (
      <div
        className={cn(
          'relative flex items-center justify-center overflow-hidden bg-paper-dim dark:bg-night-dim',
          wrapperClassName,
        )}
        role="img"
        aria-label={alt}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 -right-4 select-none font-serif text-[7rem] font-semibold leading-none text-ink/5 dark:text-paper-ink/10"
        >
          S
        </span>
        <div className="relative z-10 flex flex-col items-center gap-2.5 px-6 text-center">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 font-serif text-base font-semibold text-accent">
            S
          </span>
          <span className="text-xs font-semibold tracking-wide text-muted dark:text-muted-dark">
            {category}
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      wrapperClassName={wrapperClassName}
      className={imageClassName}
    />
  );
}
