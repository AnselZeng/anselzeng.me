'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

export type ImageLightboxNavigation = {
  onPrev: () => void;
  onNext: () => void;
};

export interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt: string;
  navigation?: ImageLightboxNavigation;
}

export function ImageLightboxModal({
  isOpen,
  onClose,
  imageSrc,
  alt,
  navigation,
}: ImageLightboxModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') navigation?.onPrev();
      if (e.key === 'ArrowRight') navigation?.onNext();
    };
    window.addEventListener('keydown', handleKey);

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previous;
    };
  }, [isOpen, onClose, navigation]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed inset-0 z-[1100] flex flex-col items-center justify-center bg-ink/90 px-5 py-14 backdrop-blur-sm lg:px-14"
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="micro-label absolute right-5 top-5 flex items-center gap-2 border border-bone/25 px-3 py-2 text-bone/80 transition-colors hover:border-bone/60 hover:text-bone lg:right-8 lg:top-7"
          >
            Close
            <X className="h-3.5 w-3.5" aria-hidden />
          </button>

          <motion.figure
            initial={{ opacity: 0, scale: 0.975, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.985, y: 4 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex max-h-full max-w-full flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageSrc}
              alt={alt}
              loading="eager"
              decoding="async"
              className="max-h-[76vh] max-w-full border border-bone/20 object-contain"
            />
            <figcaption className="micro-label mt-4 flex w-full items-center justify-between gap-6 text-bone/60">
              <span className="truncate">{alt}</span>
              {navigation && (
                <span className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={navigation.onPrev}
                    className="flex h-9 w-9 items-center justify-center border border-bone/25 text-bone/80 transition-colors hover:border-bone/60 hover:text-bone"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden />
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={navigation.onNext}
                    className="flex h-9 w-9 items-center justify-center border border-bone/25 text-bone/80 transition-colors hover:border-bone/60 hover:text-bone"
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                </span>
              )}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
