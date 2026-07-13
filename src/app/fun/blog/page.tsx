import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { TextAnimate } from '@/components/magicui/text-animate';
import { ProtectedImage } from '@/components/ui/protected-image';

const blogPosts = [
  {
    id: 'chapter',
    title: 'Starting a New Chapter',
    excerpt: "It's 11:56 am, Friday, November 14, 2025. This morning I went out for a nice walk around the neighbourhood, through the forest and past the train tracks to grab a cup of coffee from Timmies. Going on walks has become more routine lately, since it feels like I'm just counting down the days, sitting at home aimlessly, in a way that weirdly reminds me of quarantine five years ago. Each walk feels like downtime for my eyes and brain after spending nearly every waking minute staring at my monitor, which pretty much sums up my day-to-day.",
    image: '/blog/chapter.png',
    date: 'Nov 14, 2025',
    readTime: '4 min read',
    category: 'Reflection',
    color: 'orange',
    href: '/fun/blog/chapter',
  },
  {
    id: 'harbin',
    title: 'Five Days in Harbin',
    excerpt: "It's 4:07 pm, Thursday, February 6, 2025. I just returned home with my Grandpa after joining him on his daily walk. As I listened to his numerous travels and adventures, I felt inspired to write down my recent solo trip to the chilly city of Harbin. Located in China's northernmost and easternmost province, Heilongjiang, the area is notoriously known for its bitterly cold winters. When I stepped off the high-speed rail, I was greeted by what felt like a cool breeze.",
    image: '/blog/harbin/cover.png',
    date: 'Feb 6, 2025',
    readTime: '5 min read',
    category: 'Travel',
    color: 'blue',
    href: '/fun/blog/harbin',
  },
  {
    id: 'everest',
    title: 'A Night on Everest',
    excerpt: "It's 3:09 pm, Wednesday, June 26, 2024. I'm sitting with my Dad on our flight from Lhasa to Chengdu and eventually back home to Beijing. Today marks the end of our 10-day journey in Tibet. This is undoubtedly one of the most memorable trips I've ever taken. From the 40-hour train ride that took us from sea level to an altitude of over 3,000 m, to visiting Buddhist monasteries and learning about the history of this beautiful religion, there's one event that's etched into my memory the most: spending a night on Mount Everest Base Camp.",
    image: '/blog/everest/cover.png',
    date: 'Jun 26, 2024',
    readTime: '5 min read',
    category: 'Adventure',
    color: 'cyan',
    href: '/fun/blog/everest',
  },
  {
    id: 'longines',
    title: 'From Crown to Caliber',
    excerpt: "It's 8:09 am, Wednesday, July 27, 2022. I'm currently taking the train to work in person in downtown Toronto. Unlike previous business casual fits, hidden underneath my left sleeve today is a special piece of accessory. Here's the story of my first mechanical watch. An unspoken rule in the watch industry is that you can, and must only, purchase a timepiece on a special occasion or hitting a particular milestone.",
    image: '/blog/longines.png',
    date: 'Jul 27, 2022',
    readTime: '2 min read',
    category: 'Personal',
    color: 'blue',
    href: '/fun/blog/longines',
  },
  {
    id: 'blackpink',
    title: 'Blackpink In Your Area',
    excerpt: "It's 10:24 pm, Friday, February 12, 2021. Laying on the living room couch, I got the fireplace turned on and have finally decided to write my second blog post. Now a lot has happened since the first, which was written nine days before my first day of university. Fast forward to today, which happens to be Chinese New Year, I've just finished midterms and it's the beginning of our second reading week.",
    image: '/blog/blackpink.png',
    date: 'Feb 12, 2021',
    readTime: '3 min read',
    category: 'Music',
    color: 'teal',
    href: '/fun/blog/blackpink',
  },
  {
    id: 'ghibli',
    title: 'Castle in the Sky',
    excerpt: "It's 4:45 pm, Monday, August 31, 2020. I'm sitting by the cottage docks outlooking Muskoka Lakes, attempting to write down some of my thoughts for the first time. It is now T-minus nine days before the first day of university. As I prepare for the next chapter in my life, stress and pressure begin to sink in. Since the beginning of quarantine, it's been tough to find comfort. Every day felt miserable, useless, being stuck in an endless cycle of boredom and solitude.",
    image: '/blog/ghibli.jpg',
    date: 'Aug 31, 2020',
    readTime: '2 min read',
    category: 'Reflection',
    color: 'green',
    href: '/fun/blog/ghibli',
  },
];

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="bg-bone text-ink">
      <section className="mx-auto max-w-6xl px-5 pt-28 lg:px-10 lg:pt-36">
        <BlurFade>
          <div className="micro-label flex flex-wrap items-center justify-between gap-2 border-b border-bone-line pb-4 text-ink-muted">
            <span>Journal</span>
            <span>({String(blogPosts.length).padStart(2, '0')})</span>
          </div>
        </BlurFade>

        <div className="pt-12 lg:pt-16">
          <BlurFade delay={0.1}>
            <p className="micro-label text-ember-600">Personal blog</p>
          </BlurFade>
          <TextAnimate
            as="h1"
            by="word"
            delay={0.15}
            className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.06] tracking-tight sm:text-5xl lg:text-[4rem]"
          >
            One thought per year.
          </TextAnimate>
          <BlurFade delay={0.4}>
            <p className="mt-7 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">
              A collection of thoughts, experiences, and reflections from my
              journey through life — written one entry at a time.
            </p>
          </BlurFade>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pt-16 lg:px-10 lg:pt-24">
        <BlurFade inView>
          <p className="micro-label border-b border-bone-line pb-4 text-ink-muted">
            Latest entry
          </p>
        </BlurFade>
        <BlurFade inView delay={0.1}>
          <Link href={featured.href} className="group mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="overflow-hidden rounded-sm border border-bone-line bg-bone-subtle aspect-[4/3] lg:col-span-7">
              <ProtectedImage
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <p className="micro-label text-ember-600">{featured.category}</p>
                <h2 className="mt-4 font-serif text-3xl font-medium leading-snug tracking-tight transition-colors group-hover:text-ember-700 lg:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-5 line-clamp-5 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {featured.excerpt}
                </p>
              </div>
              <div className="micro-label mt-8 flex items-center justify-between border-t border-bone-line pt-5 text-ink-muted">
                <span>
                  {featured.date}
                  <span className="mx-2">·</span>
                  {featured.readTime}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember-600"
                  aria-hidden
                />
              </div>
            </div>
          </Link>
        </BlurFade>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-10 lg:py-24">
        <BlurFade inView>
          <p className="micro-label border-b border-bone-line pb-4 text-ink-muted">
            Earlier entries
          </p>
        </BlurFade>
        <div>
          {rest.map((post, i) => (
            <BlurFade key={post.id} inView delay={0.05 * (i % 3)}>
              <Link
                href={post.href}
                className="group grid grid-cols-1 gap-4 border-b border-bone-line py-8 sm:grid-cols-12 sm:items-center sm:gap-8"
              >
                <p className="micro-label text-ink-muted sm:col-span-2">{post.date}</p>
                <div className="sm:col-span-6">
                  <h3 className="font-serif text-xl font-medium leading-snug tracking-tight transition-colors group-hover:text-ember-700 lg:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>
                </div>
                <p className="micro-label sm:col-span-2 sm:text-right">
                  <span className="text-ink-muted transition-colors group-hover:text-ember-600">
                    {post.category}
                  </span>
                </p>
                <div className="hidden sm:col-span-2 sm:block">
                  <div className="ml-auto w-24 overflow-hidden rounded-sm border border-bone-line bg-bone-subtle">
                    <ProtectedImage
                      src={post.image}
                      alt={post.title}
                      className="aspect-[4/3] w-full object-cover opacity-90 transition-all duration-500 ease-out group-hover:scale-[1.06] group-hover:opacity-100"
                    />
                  </div>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>

        <BlurFade inView delay={0.15}>
          <div className="mt-14 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md font-serif text-xl font-medium leading-snug tracking-tight lg:text-2xl">
              Writing has become one of my most cherished forms of reflection —
              one entry for every chapter.
            </p>
            <Link
              href="/about"
              className="micro-label text-ink-muted transition-colors hover:text-ember-600"
            >
              More about me →
            </Link>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
