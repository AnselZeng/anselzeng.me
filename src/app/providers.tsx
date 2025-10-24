'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// Enhanced theme with better colors and typography
const theme = extendTheme({
  fonts: {
    heading: 'var(--font-inter), system-ui, sans-serif',
    body: 'var(--font-inter), system-ui, sans-serif',
    mono: 'var(--font-jetbrains-mono), monospace',
  },
  colors: {
    brand: {
      50: '#FFF8EB',
      100: '#FFEECC',
      200: '#FFDD99',
      300: '#FFCC66',
      400: '#FFBB33',
      500: '#FF7B00', // Primary orange
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
        lineHeight: '1.6',
      },
      '*': {
        borderColor: 'gray.200',
      },
    },
  },
  components: {
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
            bg: 'gray.100',
            color: 'brand.500',
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: '600',
        color: 'gray.800',
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
