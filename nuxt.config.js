const NODE_ENV = process.env.NODE_ENV
const bablePlugin = [
  [
    'import',
    {
      libraryName: 'ant-design-vue',
      libraryDirectory: 'es',
    },
  ],
]

if (NODE_ENV === 'production') {
  bablePlugin.push('transform-remove-console')
}

module.exports = {
  mode: 'universal',
  env: {
    DGG_SERVER_ENV: process.env.DGG_SERVER_ENV,
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
    script: [
      {
        src: '/js/dgg-md-sdk.js',
        ssr: false,
        type: 'text/javascript',
        charset: 'utf-8',
      },
    ],
  },
  loading: { color: '#fff' },
  css: ['@/assets/less/ant-ui.less'],
  plugins: [
    { src: '@/plugins/axios', ssr: true },
    { src: '@/plugins/router', ssr: false },
    { src: '@/plugins/ant-ui', ssr: true },
  ],
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources', '@nuxtjs/proxy'],
  styleResources: {
    less: ['@/assets/less/theme-basic.less'],
  },
  axios: { proxy: true },
  build: {
    transpile: [/ant-design-vue/],
    extractCSS: process.env.NODE_ENV === 'production',
    loaders: {
      less: {
        javascriptEnabled: true,
      },
    },
    babel: {
      plugins: bablePlugin,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue|less)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
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
