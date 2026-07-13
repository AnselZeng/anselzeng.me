'use client';

import { ElementType, useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

type AnimationType = 'text' | 'word' | 'character' | 'line';

interface TextAnimateProps {
  children: string;
  className?: string;
  segmentClassName?: string;
  delay?: number;
  duration?: number;
  as?: ElementType;
  by?: AnimationType;
  startOnView?: boolean;
  once?: boolean;
}

const staggerTimings: Record<AnimationType, number> = {
  text: 0.06,
  word: 0.04,
  character: 0.02,
  line: 0.06,
};

export function TextAnimate({
  children,
  delay = 0,
  duration = 0.5,
  className,
  segmentClassName,
  as: Component = 'p',
  startOnView = true,
  once = true,
  by = 'word',
}: TextAnimateProps) {
  const create = (motion as unknown as { create?: typeof motion }).create ?? motion;
  const MotionComponent = create(Component as ElementType);
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once, margin: '-40px' });
  const show = !startOnView || inViewResult;

  let segments: string[] = [];
  switch (by) {
    case 'word':
      segments = children.split(/(\s+)/);
      break;
    case 'character':
      segments = children.split('');
      break;
    case 'line':
      segments = children.split('\n');
      break;
    case 'text':
    default:
      segments = [children];
      break;
  }

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerTimings[by],
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <MotionComponent
      ref={ref}
      variants={container}
      initial="hidden"
      animate={show ? 'show' : 'hidden'}
      className={cn('whitespace-pre-wrap', className)}
    >
      {segments.map((segment, i) => (
        <motion.span
          key={`${by}-${segment}-${i}`}
          variants={item}
          className={cn(
            by === 'line' ? 'block' : 'inline-block whitespace-pre',
            segmentClassName,
          )}
        >
          {segment}
        </motion.span>
      ))}
    </MotionComponent>
  );
}

export default TextAnimate;
