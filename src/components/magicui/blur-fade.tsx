'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion, type UseInViewOptions, type Variants } from 'framer-motion';

type MarginType = UseInViewOptions['margin'];

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: MarginType;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.5,
  delay = 0,
  yOffset = 10,
  inView = false,
  inViewMargin = '-64px',
}: BlurFadeProps) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variant || defaultVariants}
      transition={{
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default BlurFade;
