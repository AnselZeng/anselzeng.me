'use client';

import { useState } from 'react';
import { ProtectedImage } from '@/components/ui/protected-image';
import { ImageLightboxModal } from '@/components/ui/ImageLightboxModal';

export function AlbumCover({
  thumbSrc,
  fullSrc,
  alt,
}: {
  thumbSrc: string;
  fullSrc: string;
  alt: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open ${alt}`}
        className="w-36 shrink-0 cursor-pointer overflow-hidden rounded-sm border border-bone-line bg-transparent p-0"
      >
        <ProtectedImage
          src={thumbSrc}
          alt={alt}
          className="aspect-square w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
        />
      </button>
      <ImageLightboxModal isOpen={open} onClose={() => setOpen(false)} imageSrc={fullSrc} alt={alt} />
    </>
  );
}
