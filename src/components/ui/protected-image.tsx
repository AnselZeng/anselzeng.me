'use client';

import { cn } from '@/lib/utils';

interface ProtectedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function ProtectedImage({ className, alt, ...props }: ProtectedImageProps) {
  return (
    <img
      {...props}
      alt={alt}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      className={cn('select-none', className)}
    />
  );
}

export default ProtectedImage;
