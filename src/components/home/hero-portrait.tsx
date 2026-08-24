'use client';

import { useState } from 'react';
import { TiltCard } from '@/components/magicui/tilt-card';
import { Parallax } from '@/components/magicui/parallax';
import { ProtectedImage } from '@/components/ui/protected-image';
import { ImageLightboxModal } from '@/components/ui/ImageLightboxModal';

export function HeroPortrait() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Parallax offset={-26} className="relative z-10 mx-auto max-w-[22rem] lg:ml-auto lg:mr-0">
        <div className="hero-wash" aria-hidden />
        <TiltCard maxTilt={9}>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open USC Convocation"
            className="relative z-10 block w-full cursor-pointer overflow-hidden rounded-t-[10rem] border border-bone-line bg-bone p-0 text-left"
          >
            <ProtectedImage
              src="/home/thumbs/usc-portrait.webp"
              alt="Ansel Zeng at USC convocation"
              className="aspect-[3/4] w-full object-cover"
            />
          </button>
        </TiltCard>
        <div className="micro-label mt-3 flex items-center justify-between text-ink-muted">
          <span>Fig. 01</span>
          <span>USC Convocation</span>
        </div>
      </Parallax>
      <ImageLightboxModal
        isOpen={open}
        onClose={() => setOpen(false)}
        imageSrc="/home/usc.jpeg"
        alt="USC Convocation"
      />
    </>
  );
}
