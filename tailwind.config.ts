import type { Config } from 'tailwindcss';

const config: Config = {
  // Preflight off: Chakra UI still owns the global reset on the untouched
  // pages (/work/*, /fun/*). Chakra's reset already zeroes borders, so
  // Tailwind border utilities behave normally.
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bone: {
          DEFAULT: '#FAF7F1',
          subtle: '#F2EDE3',
          line: '#E4DCCE',
        },
        ink: {
          DEFAULT: '#1B1713',
          soft: '#4A443C',
          muted: '#8A7C6F',
        },
        ember: {
          50: '#FDF3EB',
          100: '#FAE3D1',
          200: '#F4C4A0',
          300: '#EEA268',
          400: '#E97A34',
          500: '#E4580B',
          600: '#C74A08',
          700: '#A53D07',
          800: '#833106',
          900: '#602405',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
