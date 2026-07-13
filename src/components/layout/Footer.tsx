'use client';

import { ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaMedium, FaYoutube, FaSpotify } from 'react-icons/fa';
import { BlurFade } from '@/components/magicui/blur-fade';

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
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-10 lg:py-24">
        <BlurFade inView>
          <p className="micro-label text-ember-400">Contact</p>
          <h2 className="mt-5 max-w-3xl font-serif text-3xl font-medium leading-tight tracking-tight !text-bone sm:text-4xl lg:text-6xl">
            Let&apos;s build something worth shipping.
          </h2>
          <a
            href="mailto:ansel.zeng@usc.edu"
            className="group mt-8 inline-flex items-center gap-2 border-b border-bone/40 pb-1 font-serif text-xl text-bone transition-colors hover:border-ember-400 hover:text-ember-300 sm:text-2xl"
          >
            ansel.zeng@usc.edu
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
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
