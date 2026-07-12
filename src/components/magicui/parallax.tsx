'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  /** Pixels of drift over a full viewport of scroll. Negative = moves up slower. */
  offset?: number;
}

/**
 * Shifts its children vertically at a different rate than the page scroll,
 * creating gentle depth between layout layers.
 */
export function Parallax({ children, className, offset = -40 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset * -1, offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={cn('will-change-transform', className)}>
      {children}
    </motion.div>
  );
}

export default Parallax;
