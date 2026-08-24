import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'gallery',
};

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
