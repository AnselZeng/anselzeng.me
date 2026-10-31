const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
    outputFileTracingExcludes: {
      '*': [
        './public/gallery/**/*',
        './public/about/**/*',
        './public/blog/**/*',
        './public/design/**/*',
        './public/home/**/*',
      ],
    },
  },
}

module.exports = nextConfig
