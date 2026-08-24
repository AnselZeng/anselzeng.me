'use client';

import { motion, useReducedMotion, useScroll, useSpring, type SpringOptions } from 'framer-motion';
import { cn } from '@/lib/utils';

export type ScrollProgressProps = {
  className?: string;
  springOptions?: SpringOptions;
};

const DEFAULT_SPRING_OPTIONS: SpringOptions = {
  stiffness: 180,
  damping: 32,
  restDelta: 0.001,
};

export function ScrollProgress({ className, springOptions }: ScrollProgressProps) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    ...DEFAULT_SPRING_OPTIONS,
    ...springOptions,
  });

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      className={cn('origin-left', className)}
      style={{ scaleX }}
    />
  );
}
