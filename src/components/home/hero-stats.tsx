import { heroStats } from '@/lib/site-data';

export function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-3 gap-6 border-t border-bone-line pt-8 lg:mt-0">
      {heroStats.map((stat) => (
        <div key={stat.label}>
          <p className="font-serif text-3xl font-medium lg:text-4xl">
            {stat.value}
            {stat.suffix}
          </p>
          <p className="micro-label mt-2 text-ink-muted">{stat.label}</p>
          <p className="mt-2 hidden text-xs leading-relaxed text-ink-muted md:block">
            {stat.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
