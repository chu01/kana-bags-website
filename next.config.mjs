const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/kana-bags-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kana-bags-website/' : '',
}