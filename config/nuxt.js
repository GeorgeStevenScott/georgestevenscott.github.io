const pkg = require('../package')
const resolve = require('path').resolve
const Env = use('Env')

module.exports = {
  // mode: 'universal',

  srcDir: resolve(__dirname, '..', 'resources'),

  /*
  ** Headers of the page
  */
  head: {
    title: 'George Steven Scott',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@assets/scss/bootstrap/bootstrap.scss',
    '@assets/scss/custom.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['bootstrap-vue/nuxt', { css: false }],
    'nuxt-sass-resources-loader',
  ],
  axios: {
    baseURL: Env.get('API_BASE_URL', 'http://127.0.0.1:3000/api')
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'data.token' },
          user: { url: 'me', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    }
  },

  sassResources: [
      '@/assets/scss/bootstrap/_functions.scss',
      '@/assets/scss/bootstrap/_variables.scss',
      '@/assets/scss/bootstrap/_mixins.scss',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {
      isDev
    }) {
      config.module.rules.filter(r => r.test.toString().includes('svg')).forEach(r => { r.test = /\.(png|jpe?g|gif)$/ })
      config.module.rules.push({
        test: /\.svg$/,
        loader: "vue-svg-loader"
      })

        if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
