import { BlurFade } from '@/components/magicui/blur-fade';
import { ProtectedImage } from '@/components/ui/protected-image';

const favouriteFilms = [
  {
    src: '/about/movies-shows/movies/lit.jpg',
    title: 'Lost in Translation',
    year: '2003',
    director: 'Sofia Coppola',
    blurb: 'Quiet, jet-lag melancholy and real human connection in Tokyo.',
  },
  {
    src: '/about/movies-shows/movies/lms.jpg',
    title: 'Little Miss Sunshine',
    year: '2006',
    director: 'Jonathan Dayton & Valerie Faris',
    blurb: 'Comedy and heart on one messy, impossible family road trip.',
  },
  {
    src: '/about/movies-shows/movies/whiplash.jpg',
    title: 'Whiplash',
    year: '2014',
    director: 'Damien Chazelle',
    blurb: 'Relentless creative drive, raw obsession, and what it costs.',
  },
];

const favouriteShows = [
  {
    src: '/about/movies-shows/shows/nge.jpg',
    title: 'Neon Genesis Evangelion',
    era: '1995–1996',
    byline: 'Hideaki Anno',
    blurb: 'Psychology, philosophy, and pressure under impossible stakes.',
  },
  {
    src: '/about/movies-shows/shows/got.jpg',
    title: 'Game of Thrones',
    era: '2011–2019',
    byline: 'David Benioff & D. B. Weiss',
    blurb: 'Epic fantasy that raised the bar for sheer scope on TV.',
  },
  {
    src: '/about/movies-shows/shows/bojack.jpg',
    title: 'BoJack Horseman',
    era: '2014–2020',
    byline: 'Raphael Bob-Waksberg',
    blurb: 'Animation hiding some of the heaviest character writing around.',
  },
];

const listeningMinutesByYear = [
  { year: 2020, minutes: 144_005 },
  { year: 2021, minutes: 164_498 },
  { year: 2022, minutes: 158_785 },
  { year: 2023, minutes: 153_137 },
  { year: 2024, minutes: 151_937 },
  { year: 2025, minutes: 123_437 },
];

const NOW_PLAYING = {
  title: 'Halo',
  artist: 'Tiffany Day',
  coverSrc: '/about/music/halo.png',
  albumName: "EVERYTHING I'VE EVER WANTED & DOIT4ME",
  albumTrackSrc: '/about/music/eiew.mp3',
};

const sportsTeams = [
  { name: 'New Orleans Saints', league: 'NFL', logo: '/about/sports/saints.png' },
  { name: 'San Antonio Spurs', league: 'NBA', logo: '/about/sports/spurs.png' },
  { name: 'Chicago Blackhawks', league: 'NHL', logo: '/about/sports/blackhawks.png' },
  { name: 'Toronto Blue Jays', league: 'MLB', logo: '/about/sports/jays.png' },
  { name: 'Chelsea FC', league: 'Premier League', logo: '/about/sports/chelsea.png' },
  { name: 'FC Barcelona', league: 'La Liga', logo: '/about/sports/barcelona.png' },
  { name: 'Scuderia Ferrari', league: 'Formula 1', logo: '/about/sports/ferrari.png' },
  { name: 'Netherlands (KNVB)', league: 'National team', logo: '/about/sports/knvb.png' },
  { name: 'USC Trojans', league: 'NCAA football', logo: '/about/sports/usc.png' },
];

const maxListeningMinutes = Math.max(...listeningMinutesByYear.map((y) => y.minutes));

function formatMinutes(n: number) {
  return `${n.toLocaleString('en-GB')} min`;
}

function SubsectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <p className="micro-label text-ember-600">{label}</p>
      <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-ink lg:text-3xl">
        {title}
      </h3>
    </div>
  );
}

function PickCard({
  src,
  title,
  meta,
  byline,
  blurb,
}: {
  src: string;
  title: string;
  meta: string;
  byline: string;
  blurb: string;
}) {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-sm border border-bone-line bg-bone-subtle">
        <ProtectedImage
          src={src}
          alt={title}
          className="aspect-[2/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <h4 className="mt-4 font-serif text-lg font-medium leading-snug text-ink">{title}</h4>
      <p className="micro-label mt-1.5 text-ink-muted">
        {meta} · {byline}
      </p>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{blurb}</p>
    </div>
  );
}

export default function InterestsGrid() {
  return (
    <div className="space-y-16 lg:space-y-20">
      <div className="border-t border-bone-line pt-6">
        <BlurFade inView>
          <SubsectionHeader label="Films" title="Three I return to" />
        </BlurFade>
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
          {favouriteFilms.map((m, i) => (
            <BlurFade key={m.title} inView delay={0.05 * i}>
              <PickCard
                src={m.src}
                title={m.title}
                meta={m.year}
                byline={m.director}
                blurb={m.blurb}
              />
            </BlurFade>
          ))}
        </div>
      </div>
      <div className="border-t border-bone-line pt-6">
        <BlurFade inView>
          <SubsectionHeader label="Series" title="Three that stuck" />
        </BlurFade>
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
          {favouriteShows.map((s, i) => (
            <BlurFade key={s.title} inView delay={0.05 * i}>
              <PickCard
                src={s.src}
                title={s.title}
                meta={s.era}
                byline={s.byline}
                blurb={s.blurb}
              />
            </BlurFade>
          ))}
        </div>
      </div>
      <div className="border-t border-bone-line pt-6">
        <BlurFade inView>
          <SubsectionHeader label="Music" title="Listening, by the numbers" />
        </BlurFade>
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">
          <BlurFade inView delay={0.05}>
            <div>
              <p className="max-w-md text-sm leading-relaxed text-ink-soft">
                Minutes streamed per year, taken from my Spotify Wrapped.
              </p>
              <div className="mt-6 space-y-5">
                {listeningMinutesByYear.map(({ year, minutes }) => (
                  <div key={year}>
                    <div className="mb-2 flex items-baseline justify-between">
                      <span className="micro-label text-ink">{year}</span>
                      <span className="font-mono text-xs tabular-nums text-ink-muted">
                        {formatMinutes(minutes)}
                      </span>
                    </div>
                    <div className="h-px w-full bg-bone-line">
                      <div
                        className="h-[3px] -translate-y-[1px] bg-ember-500 transition-[width] duration-700 ease-out"
                        style={{ width: `${(minutes / maxListeningMinutes) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.1}>
            <div className="flex h-full flex-col rounded-sm border border-bone-line bg-bone-subtle/60 p-6">
              <p className="micro-label text-ember-600">On repeat right now</p>
              <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="w-36 shrink-0 overflow-hidden rounded-sm border border-bone-line">
                  <ProtectedImage
                    src={NOW_PLAYING.coverSrc}
                    alt={NOW_PLAYING.title}
                    className="aspect-square w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-serif text-xl font-medium leading-snug text-ink">
                    {NOW_PLAYING.title}
                  </h4>
                  <p className="mt-1 text-sm text-ink-soft">{NOW_PLAYING.artist}</p>
                  <div className="mt-5 border-t border-bone-line pt-4">
                    <p className="micro-label text-ink-muted">From the album</p>
                    <p className="mt-2 text-sm font-medium leading-snug text-ink">
                      {NOW_PLAYING.albumName}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-auto border-t border-bone-line pt-5">
                <audio
                  controls
                  preload="metadata"
                  className="block w-full"
                  src={NOW_PLAYING.albumTrackSrc}
                />
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
      <div className="border-t border-bone-line pt-6">
        <BlurFade inView>
          <div>
            <SubsectionHeader label="Sports" title="Teams I follow" />
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
              A mix of where I&apos;ve lived, family ties, and plain old bandwagon joy.
            </p>
          </div>
        </BlurFade>
        <div className="mt-8 grid grid-cols-2 gap-px border border-bone-line bg-bone-line md:grid-cols-3">
          {sportsTeams.map((team, i) => (
            <BlurFade key={team.name} inView delay={0.03 * i} className="h-full">
              <div className="flex h-full flex-col items-center gap-3 bg-bone px-4 py-6 text-center transition-colors hover:bg-bone-subtle">
                <ProtectedImage
                  src={team.logo}
                  alt={team.name}
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <p className="font-serif text-sm font-medium leading-snug text-ink">
                    {team.name}
                  </p>
                  <p className="micro-label mt-1.5 text-ink-muted">{team.league}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
      <div className="border-t border-bone-line pt-6">
        <BlurFade inView>
          <SubsectionHeader label="Videography" title="Four days in Vienna" />
        </BlurFade>
        <BlurFade inView delay={0.05}>
          <div className="mt-8">
            <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-bone-line bg-ink">
              <iframe
                title="Four days in Vienna — travel video"
                src="https://www.youtube.com/embed/xMHY4k8ylrQ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <div className="mt-6 max-w-2xl space-y-3 text-sm leading-relaxed text-ink-soft">
              <p>
                This is my latest travel vlog. The trip itself was about two weeks on the road
                through Austria and Czechia with my mom — but this edit is only four days in
                Vienna. We went to museums and palaces, and even saw{' '}
                <span className="italic">The Kiss</span>.
              </p>
              <p>P.S. I already miss Almdudler.</p>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
