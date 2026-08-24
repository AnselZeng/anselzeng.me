'use client';

import { useState } from 'react';
import { canadaMapPaths, canadaMapViewBox } from '@/data/canada-map-paths';

const HOVER = '#C74A08';
const FILL = '#F2EDE3';
const STROKE = '#E4DCCE';

export function CanadaMap({
  visited,
}: {
  visited: Record<string, string>;
}) {
  const [hint, setHint] = useState<{ name: string; x: number; y: number } | null>(null);

  return (
    <>
      <svg
        viewBox={canadaMapViewBox}
        aria-label="Canada provinces and territories"
        className="h-full w-full overflow-visible"
      >
        {Object.entries(canadaMapPaths).map(([name, d]) => {
          const isHint = hint?.name === name;
          const fill = isHint ? HOVER : visited[name] ?? FILL;
          return (
            <path
              key={name}
              d={d}
              fill={fill}
              stroke={STROKE}
              strokeWidth={1}
              onMouseEnter={(event) => {
                setHint({ name, x: event.clientX, y: event.clientY });
              }}
              onMouseMove={(event) => {
                setHint({ name, x: event.clientX, y: event.clientY });
              }}
              onMouseLeave={() => setHint(null)}
            />
          );
        })}
      </svg>
      {hint && (
        <div
          className="pointer-events-none fixed z-[1000] rounded-sm border border-bone-line bg-bone px-2 py-1.5 text-xs text-ink"
          style={{ top: hint.y + 16, left: hint.x + 16 }}
        >
          {hint.name}
        </div>
      )}
    </>
  );
}
