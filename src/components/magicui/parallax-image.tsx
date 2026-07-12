'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** How far the image drifts inside its frame, as a percentage. */
  strength?: number;
  /** Inline styles for the clipping frame (e.g. tinted plate backgrounds). */
  style?: React.CSSProperties;
}

/**
 * An image that drifts slowly inside its clipped frame as the page scrolls,
 * giving sections quiet depth without moving the layout itself.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  strength = 7,
  style,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} style={style} className={cn('overflow-hidden', className)}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1 + strength * 0.022 }}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className={cn('h-full w-full select-none object-cover', imgClassName)}
      />
    </div>
  );
}

export default ParallaxImage;
