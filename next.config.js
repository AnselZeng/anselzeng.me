/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', 'framer-motion']
  }
}

module.exports = nextConfig
