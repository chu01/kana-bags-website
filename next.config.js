/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: '/Users/abiyutegegn/Projects/kana-bags-website/kana-bags-website',
  images: {
    domains: ['images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig