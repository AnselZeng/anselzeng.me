'use client';

import { type ElementType } from 'react';
import { TextEffect } from '@/components/motion/text-effect';

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

export function TextAnimate({
  children,
  delay = 0,
  className,
  segmentClassName,
  as = 'p',
  by = 'word',
}: TextAnimateProps) {
  return (
    <TextEffect
      as={as as keyof React.JSX.IntrinsicElements}
      per={by === 'character' ? 'char' : by === 'line' ? 'line' : 'word'}
      delay={delay}
      className={className}
      segmentWrapperClassName={segmentClassName}
      preset="slide"
      speedReveal={1.2}
      segmentTransition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </TextEffect>
  );
}

export default TextAnimate;
