/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // If you're using a custom domain
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://www.kanabags.com' : '',
}

module.exports = nextConfig