'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, type SpringOptions } from 'framer-motion';

const SPRING_CONFIG: SpringOptions = { stiffness: 180, damping: 16, mass: 0.35 };

export type MagneticProps = {
  children: React.ReactNode;
  intensity?: number;
  range?: number;
  actionArea?: 'self' | 'parent' | 'global';
  springOptions?: SpringOptions;
  className?: string;
};

export function Magnetic({
  children,
  intensity = 0.16,
  range = 72,
  actionArea = 'self',
  springOptions = SPRING_CONFIG,
  className,
}: MagneticProps) {
  const reduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springOptions);
  const springY = useSpring(y, springOptions);

  useEffect(() => {
    if (reduceMotion) return;

    const calculateDistance = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const absoluteDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (isHovered && absoluteDistance <= range) {
        const scale = 1 - absoluteDistance / range;
        x.set(distanceX * intensity * scale);
        y.set(distanceY * intensity * scale);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    document.addEventListener('mousemove', calculateDistance);
    return () => document.removeEventListener('mousemove', calculateDistance);
  }, [intensity, isHovered, range, reduceMotion, x, y]);

  useEffect(() => {
    if (actionArea === 'parent' && ref.current?.parentElement) {
      const parent = ref.current.parentElement;
      const handleParentEnter = () => setIsHovered(true);
      const handleParentLeave = () => setIsHovered(false);
      parent.addEventListener('mouseenter', handleParentEnter);
      parent.addEventListener('mouseleave', handleParentLeave);
      return () => {
        parent.removeEventListener('mouseenter', handleParentEnter);
        parent.removeEventListener('mouseleave', handleParentLeave);
      };
    }
    if (actionArea === 'global') {
      setIsHovered(true);
    }
  }, [actionArea]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseEnter={actionArea === 'self' ? () => setIsHovered(true) : undefined}
      onMouseLeave={
        actionArea === 'self'
          ? () => {
              setIsHovered(false);
              x.set(0);
              y.set(0);
            }
          : undefined
      }
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}
