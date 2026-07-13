'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  emoji: string;
}

interface NavSection {
  label: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    label: 'Work',
    items: [
      { href: '/work/telus', label: 'Telus', emoji: '🗼' },
      { href: '/work/ips', label: 'Ivey Product Society', emoji: '🎧' },
      { href: '/work/rbc', label: 'RBC', emoji: '🏦' },
      { href: '/work/tweebaa', label: 'Tweebaa', emoji: '📱' },
    ],
  },
  {
    label: 'Fun',
    items: [
      { href: '/fun/design', label: 'Design', emoji: '🎨' },
      { href: '/fun/travels', label: 'Travels', emoji: '✈️' },
      { href: '/fun/blog', label: 'Blog', emoji: '✏️' },
    ],
  },
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isSectionActive(pathname: string, section: NavSection) {
  const first = section.items[0]?.href.split('/').filter(Boolean)[0];
  return first ? pathname === `/${first}` || pathname.startsWith(`/${first}/`) : false;
}

function DesktopDropdown({ section, pathname }: { section: NavSection; pathname: string }) {
  const active = isSectionActive(pathname, section);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          'micro-label flex items-center gap-1.5 px-3 py-2 transition-colors hover:text-ember-600',
          active ? 'text-ember-600' : 'text-ink-soft',
        )}
      >
        {section.label}
        <ChevronDown
          className={cn('h-3 w-3 transition-transform', open && 'rotate-180')}
          aria-hidden
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute left-0 top-full pt-2"
          >
            <div className="min-w-[13rem] border border-bone-line bg-bone p-2 shadow-lg shadow-ink/5">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors hover:bg-bone-subtle hover:text-ember-600',
                    isActive(pathname, item.href) ? 'text-ember-600' : 'text-ink-soft',
                  )}
                >
                  <span aria-hidden>{item.emoji}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileOverlay({
  isOpen,
  onClose,
  pathname,
}: {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed inset-0 z-[1000] flex min-h-[100dvh] flex-col overflow-y-auto bg-bone/[0.98] px-6 pb-10 pt-24 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut', delay: 0.05 }}
            className="mx-auto w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href="/"
              onClick={onClose}
              className={cn(
                'block border-b border-bone-line py-4 font-serif text-3xl font-medium',
                isActive(pathname, '/') ? 'text-ember-600' : 'text-ink',
              )}
            >
              Home
            </Link>
            {navSections.map((section) => (
              <div key={section.label} className="border-b border-bone-line py-4">
                <p className="micro-label mb-2 text-ink-muted">{section.label}</p>
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      'flex items-baseline gap-3 py-2 font-serif text-2xl font-medium',
                      isActive(pathname, item.href) ? 'text-ember-600' : 'text-ink',
                    )}
                  >
                    <span aria-hidden className="text-lg">
                      {item.emoji}
                    </span>
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/about"
              onClick={onClose}
              className={cn(
                'block py-4 font-serif text-3xl font-medium',
                isActive(pathname, '/about') ? 'text-ember-600' : 'text-ink',
              )}
            >
              About
            </Link>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 64rem)');
    const closeOnDesktop = () => {
      if (mq.matches) setIsMenuOpen(false);
    };
    mq.addEventListener('change', closeOnDesktop);
    return () => mq.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[1001] transition-all duration-300',
          scrolled
            ? 'border-b border-bone-line bg-bone/90 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-10">
          <Link
            href="/"
            className="font-serif text-2xl font-semibold tracking-tight text-ink transition-colors hover:text-ember-600"
          >
            AZ<span className="text-ember-500">.</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <Link
              href="/"
              className={cn(
                'micro-label px-3 py-2 transition-colors hover:text-ember-600',
                isActive(pathname, '/') ? 'text-ember-600' : 'text-ink-soft',
              )}
            >
              Home
            </Link>
            {navSections.map((section) => (
              <DesktopDropdown key={section.label} section={section} pathname={pathname} />
            ))}
            <Link
              href="/about"
              className={cn(
                'micro-label px-3 py-2 transition-colors hover:text-ember-600',
                isActive(pathname, '/about') ? 'text-ember-600' : 'text-ink-soft',
              )}
            >
              About
            </Link>
          </nav>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="z-[1002] flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-ember-600 lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <MobileOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} pathname={pathname} />
    </>
  );
}
