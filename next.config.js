/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['via.placeholder.com'],
    formats: ['image/webp'],
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig 