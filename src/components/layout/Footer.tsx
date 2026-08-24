'use client';

import { ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaMedium, FaYoutube, FaSpotify } from 'react-icons/fa';
import { BlurFade } from '@/components/magicui/blur-fade';
import { Magnetic } from '@/components/motion/magnetic';
import { Spotlight } from '@/components/motion/spotlight';

const socialLinks = [
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/anselzeng/' },
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/AnselZeng' },
  { name: 'Medium', icon: FaMedium, href: 'https://anselzeng.medium.com/' },
  { name: 'YouTube', icon: FaYoutube, href: 'https://www.youtube.com/@AnselZeng' },
  { name: 'Spotify', icon: FaSpotify, href: 'https://open.spotify.com/user/21qlylh2xqrwsmdnu4aymmrui' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-bone">
      <Spotlight
        size={560}
        springOptions={{ bounce: 0, stiffness: 280, damping: 30 }}
        className="z-0 mix-blend-screen from-ember-400/40 via-ember-500/16 to-transparent"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 lg:px-10 lg:py-24">
        <BlurFade inView>
          <p className="micro-label text-ember-400">Contact</p>
          <h2 className="mt-5 max-w-3xl font-serif text-3xl font-medium leading-tight tracking-tight !text-bone sm:text-4xl lg:text-6xl">
            Let&apos;s build something worth shipping.
          </h2>
          <Magnetic intensity={0.12} range={80} className="mt-8 inline-flex">
            <a
              href="mailto:ansel.zeng@usc.edu"
              className="group link-draw inline-flex items-center gap-2 pb-1 font-serif text-xl text-bone hover:text-ember-300 sm:text-2xl"
            >
              ansel.zeng@usc.edu
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Magnetic>
        </BlurFade>

        <div className="mt-16 flex flex-col gap-6 border-t border-bone/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-bone/50 transition-all hover:-translate-y-0.5 hover:text-ember-400"
              >
                <social.icon className="h-[1.125rem] w-[1.125rem]" />
              </a>
            ))}
          </div>
          <p className="micro-label text-bone/40">
            © {currentYear} Ansel Zeng · Next.js · Tailwind · Magic UI
          </p>
        </div>
      </div>
    </footer>
  );
}
