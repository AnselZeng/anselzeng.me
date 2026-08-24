'use client';

import Link from 'next/link';
import { Magnetic } from '@/components/motion/magnetic';
import { cn } from '@/lib/utils';

type MagneticLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function MagneticLink({ href, children, className, external }: MagneticLinkProps) {
  const shared = cn('inline-flex items-center', className);

  return (
    <Magnetic intensity={0.14} range={64} className="inline-flex">
      {external || href.startsWith('mailto:') || href.startsWith('http') ? (
        <a
          href={href}
          className={shared}
          {...(href.startsWith('http')
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          {children}
        </a>
      ) : (
        <Link href={href} className={shared}>
          {children}
        </Link>
      )}
    </Magnetic>
  );
}
