import React, { useState, useEffect, useRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  wrapperClassName?: string;
}

export default function Image({ 
  src, 
  alt, 
  className,
  wrapperClassName,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw", 
  srcSet,
  loading = "lazy",
  ...props 
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  // Generate a responsive srcSet to enforce responsive image loading practices.
  // In a real production app, you would pass real CDNs with dynamic resizing here.
  const generatedSrcSet = srcSet || `${src}?w=400 400w, ${src}?w=800 800w, ${src}?w=1200 1200w`;

  return (
    <div className={cn("relative overflow-hidden bg-gray-100 dark:bg-gray-800", wrapperClassName)}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        srcSet={generatedSrcSet}
        sizes={sizes}
        loading={loading}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={cn("w-full h-full object-cover", className)}
        {...props}
      />
      {/* Blur-up placeholder overlay */}
      <div 
        className={cn(
          "absolute inset-0 bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-xl transition-opacity duration-700 ease-in-out pointer-events-none",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
        aria-hidden="true"
      />
    </div>
  );
}
