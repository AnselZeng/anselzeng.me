'use client';

import { useEffect } from 'react';
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
};

export function AnimatedNumber({
  value,
  className,
  suffix = '',
  duration = 1.4,
  delay = 0,
}: AnimatedNumberProps) {
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const display = useTransform(motionValue, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    if (reduceMotion) {
      motionValue.set(value);
      return;
    }
    const controls = animate(motionValue, value, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [delay, duration, motionValue, reduceMotion, value]);

  if (reduceMotion) {
    return (
      <span className={className}>
        {value.toLocaleString()}
        {suffix}
      </span>
    );
  }

  return (
    <span className={cn('tabular-nums', className)}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
