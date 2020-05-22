export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['papercss/dist/paper.min.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/firebaseImport.js', '~/plugins/authPersistense.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/sitemap',
    'nuxt-brotli'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-brotli',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.APIKEY,
          authDomain: process.env.AUTHDOMAIN,
          databaseURL: process.env.DATABASEURL,
          projectId: process.env.PROJECTID,
          storageBucket: process.env.STORAGEBUCKET,
          messagingSenderId: process.env.MESSAGINGSENDERID,
          appId: process.env.APPID
        },
        services: {
          firestore: {
            static: false, // default
            preload: false, // default
            chunkName:
              process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
            enablePersistence: {
              /**
               * Whether to synchronize the in-memory state of multiple tabs. Setting this
               * to 'true' in all open tabs enables shared access to local persistence,
               * shared execution of queries and latency-compensated local document updates
               * across all connected instances.
               *
               * To enable this mode, `synchronizeTabs:true` needs to be set globally in all
               * active tabs. If omitted or set to 'false', `enablePersistence()` will fail
               * in all but the first tab.
               */
              synchronizeTabs: true
            }
            // settings: {
            //   // Firestore Settings - currently only works in SPA mode
            // }
          },
          auth: true // Just as example. Can be any other service.
        }
      }
    ]
  ],
  pwa: {
    offline: false
  },
  sitemap: {
    // custom configuration
    hostname: 'https://www.subash.rocks'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
