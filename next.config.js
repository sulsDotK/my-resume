/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos']
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      // @ts-ignore
      rule => rule.test && rule.test.test('.svg')
    )
    fileLoaderRule.exclude = /\.svg$/
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack')
    })
    return config
  }
}

module.exports = nextConfig
