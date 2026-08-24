'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Spotlight } from '@/components/motion/spotlight';
import { ProtectedImage } from '@/components/ui/protected-image';
import type { WorkEntry } from '@/lib/site-data';

export function WorkCard({ work }: { work: WorkEntry }) {
  return (
    <Link href={work.href} className="group block">
      <div className="relative overflow-hidden rounded-sm border border-bone-line transition-[border-color,box-shadow] duration-500 ease-out group-hover:border-ember-200/80 group-hover:shadow-[0_18px_40px_-28px_rgba(27,23,19,0.35)]">
        <div
          className="aspect-[4/3] overflow-hidden"
          style={{ backgroundColor: work.palette.tint }}
        >
          <Spotlight size={280} className="from-ember-200/50 via-ember-100/18 to-transparent" />
          <ProtectedImage
            src={work.image}
            alt={`${work.org} — ${work.project}`}
            className="relative h-full w-full object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-[1.03] lg:p-10"
          />
        </div>
        <span className="micro-label absolute left-4 top-4 rounded-full border border-bone-line/70 bg-bone/90 px-3 py-1.5 text-ink backdrop-blur-sm">
          {work.index}
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-serif text-xl font-medium leading-snug transition-colors group-hover:text-ember-700 lg:text-2xl">
            {work.org}
            <span className="text-ink-muted"> — {work.project}</span>
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
            {work.description}
          </p>
          <p className="micro-label mt-3 text-ink-muted">{work.tags.join('  ·  ')}</p>
        </div>
        <ArrowUpRight
          className="mt-1.5 h-5 w-5 shrink-0 text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember-600"
          aria-hidden
        />
      </div>
    </Link>
  );
}
