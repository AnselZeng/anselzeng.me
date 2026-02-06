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
      50: '#FFF8EB',
      100: '#FFEECC',
      200: '#FFDD99',
      300: '#FFCC66',
      400: '#FFBB33',
      500: '#FF7B00',
      600: '#E66A00',
      700: '#CC5900',
      800: '#B34800',
      900: '#993700',
    },
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    }
  },
  styles: {
    global: {
      body: {
        bg: 'brand.50',
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
        transition: 'all 0.2s',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
            color: 'white',
            transform: 'translateY(-1px)',
            boxShadow: 'lg',
          },
          _active: {
            bg: 'brand.700',
            transform: 'translateY(0)',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.500',
            color: 'white',
            transform: 'translateY(-1px)',
            boxShadow: 'lg',
          },
        },
        ghost: {
          color: 'gray.600',
          _hover: {
            bg: 'brand.50',
            color: 'brand.500',
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
