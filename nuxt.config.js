const NODE_ENV = process.env.NODE_ENV

module.exports = {
  mode: 'universal',
  env: {
    __ENV: process.env.NODE_ENV__ENV,
  },
  server: {
    port: 3000, // default: 3000
    host: 'localhost', // default: localhost,
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [{ src: '@/plugins/axios', ssr: true }],
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }

      if (ctx.isClient) {
        if (NODE_ENV === 'development') {
          config.devtool = 'cheap-module-eval-source-map'
        } else {
          config.devtool = 'hidden-source-map'
        }
      }
    },
  },
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/,
    },
  },
}
