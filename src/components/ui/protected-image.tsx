'use client';

import { cn } from '@/lib/utils';

interface ProtectedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function ProtectedImage({ className, ...props }: ProtectedImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      className={cn('select-none', className)}
    />
  );
}

export default ProtectedImage;
