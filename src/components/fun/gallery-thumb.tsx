'use client';

import { cn } from '@/lib/utils';

export function GalleryThumb({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={640}
      height={480}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'low'}
      decoding="async"
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      className={cn('aspect-[4/3] h-auto w-full object-cover', className)}
    />
  );
}
