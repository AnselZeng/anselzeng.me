'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'var(--font-serif), Georgia, serif',
    body: 'var(--font-sans), system-ui, sans-serif',
    mono: 'var(--font-sans), system-ui, sans-serif',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.8125rem',
    md: '0.9375rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.375rem',
    '3xl': '1.75rem',
    '4xl': '2rem',
    '5xl': '2.25rem',
    '6xl': '2.5rem',
  },
  colors: {
    brand: {
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
    gray: {
      50: '#FAF7F1',
      100: '#F2EDE3',
      200: '#E4DCCE',
      300: '#CBC0AF',
      400: '#8A7C6F',
      500: '#6E6257',
      600: '#4A443C',
      700: '#37322B',
      800: '#1B1713',
      900: '#12100D',
    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
        fontFamily: 'body',
        fontSize: 'md',
        lineHeight: '1.5',
      },
      '*': {
        borderColor: 'gray.200',
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        transition: 'color 0.2s ease',
        _focus: {
          boxShadow: '0 0 0 2px var(--chakra-colors-brand-500)',
          outline: 'none',
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: '500',
        borderRadius: 'lg',
        transform: 'scale(1)',
        transformOrigin: 'center',
        transitionProperty:
          'transform, box-shadow, background-color, color, border-color, border',
        transitionDuration: '0.4s',
        transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
            color: 'white',
            transform: 'scale(1.008)',
            boxShadow: 'lg',
          },
          _active: {
            bg: 'brand.700',
            transform: 'scale(1.004)',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.500',
            color: 'white',
            transform: 'scale(1.008)',
            boxShadow: 'lg',
          },
          _active: {
            transform: 'scale(1.004)',
          },
        },
        ghost: {
          color: 'gray.600',
          _hover: {
            bg: 'brand.50',
            color: 'brand.500',
            transform: 'scale(1.008)',
          },
          _active: {
            transform: 'scale(1.004)',
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: '600',
        color: 'gray.800',
        letterSpacing: '-0.02em',
      },
    },
    Text: {
      baseStyle: {
        color: 'gray.600',
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
}
