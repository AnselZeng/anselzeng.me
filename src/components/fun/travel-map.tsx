'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import World from '@react-map/world';
import Usa from '@react-map/usa';
import { CanadaMap } from '@/components/fun/canada-map';

export type TravelMapView = 'world' | 'canada' | 'usa';

const EMBER = '#E4580B';

const mapProps = {
  size: 600,
  mapColor: '#F2EDE3',
  strokeColor: '#E4DCCE',
  strokeWidth: 1,
  hoverColor: '#C74A08',
  selectColor: '#E4580B',
  hintTextColor: '#1B1713',
  hintBackgroundColor: '#FAF7F1',
  hintPadding: '6px 8px',
  hintBorderRadius: 2,
} as const;

const visitedCountryColors: Record<string, string> = {
  Netherlands: EMBER,
  China: EMBER,
  'Hong Kong': EMBER,
  Maldives: EMBER,
  France: EMBER,
  Monaco: EMBER,
  Thailand: EMBER,
  Vietnam: EMBER,
  Philippines: EMBER,
  Malaysia: EMBER,
  Greece: EMBER,
  Canada: EMBER,
  'United States': EMBER,
  Aruba: EMBER,
  Mexico: EMBER,
  Panama: EMBER,
  'Costa Rica': EMBER,
  'Puerto Rico': EMBER,
  Cuba: EMBER,
  Curaçao: EMBER,
  Bonaire: EMBER,
  'Sint Maarten': EMBER,
  Anguilla: EMBER,
  Austria: EMBER,
  'Czech Republic': EMBER,
  Czechia: EMBER,
};

const visitedCanadaColors: Record<string, string> = {
  Alberta: EMBER,
  'British Columbia': EMBER,
  'New Brunswick': EMBER,
  'Northwest Territories': EMBER,
  'Nova Scotia': EMBER,
  Ontario: EMBER,
  'Prince Edward Island': EMBER,
  Quebec: EMBER,
};

const visitedUsaColors: Record<string, string> = {
  Arizona: EMBER,
  California: EMBER,
  Florida: EMBER,
  Illinois: EMBER,
  Massachusetts: EMBER,
  Michigan: EMBER,
  Nevada: EMBER,
  'New York': EMBER,
  Utah: EMBER,
  Washington: EMBER,
  'Washington, DC': EMBER,
};

const VIEW_COPY: Record<TravelMapView, { fig: string; title: string; hint: string }> = {
  world: {
    fig: '01',
    title: 'World map',
    hint: 'Click Canada or the United States.',
  },
  canada: {
    fig: '02',
    title: 'Canada',
    hint: 'Provinces and territories.',
  },
  usa: {
    fig: '03',
    title: 'United States',
    hint: 'States and D.C.',
  },
};

export function travelMapFigLabel(view: TravelMapView) {
  return `Fig. ${VIEW_COPY[view].fig} — ${VIEW_COPY[view].title}`;
}

export function TravelMap({
  size,
  view,
  onViewChange,
}: {
  size: number;
  view: TravelMapView;
  onViewChange: (view: TravelMapView) => void;
}) {
  const [worldKey, setWorldKey] = useState(0);
  const shared = { ...mapProps, size };

  return (
    <div className="flex w-full flex-col">
      <div className="flex h-7 items-center">
        {view !== 'world' && (
          <button
            type="button"
            onClick={() => onViewChange('world')}
            className="micro-label flex items-center gap-2 text-ink-muted transition-colors hover:text-ember-600"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            World map
          </button>
        )}
      </div>

      <div className="flex h-[260px] w-full items-center justify-center lg:h-[400px] [&_.map]:flex [&_.map]:!h-full [&_.map]:!w-full [&_.map]:items-center [&_.map]:justify-center [&_svg]:h-full [&_svg]:w-full [&_svg]:max-h-full [&_svg]:max-w-full">
        {view === 'world' && (
          <World
            key={worldKey}
            type="select-single"
            {...shared}
            hints
            disableClick={false}
            cityColors={visitedCountryColors}
            onSelect={(country) => {
              if (country === 'Canada') onViewChange('canada');
              else if (country === 'United States') onViewChange('usa');
              else if (country) setWorldKey((k) => k + 1);
            }}
          />
        )}
        {view === 'canada' && <CanadaMap visited={visitedCanadaColors} />}
        {view === 'usa' && (
          <Usa
            type="select-multiple"
            {...shared}
            hints
            disableClick
            cityColors={visitedUsaColors}
          />
        )}
      </div>

      <p className="micro-label mt-4 min-h-4 text-ink-muted">{VIEW_COPY[view].hint}</p>
    </div>
  );
}
