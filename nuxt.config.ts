// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  components: true,

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxt/fonts',

    // noch auf IONOS konfigurieren
    ['nuxt-mail', {
      message: {
        to: 'foo@bar.de',
      },
      smtp: {
        host: "smtp.example.com",
        port: 587,
      },
    }],
  ],

  css: ['~/assets/css/fonts.css'],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  compatibilityDate: '2025-04-18',
})