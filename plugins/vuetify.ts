import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "kathiMainTheme",
      themes: {
        kathiMainTheme: {
          dark: false,
          colors: {
            primary: "#ffb3b3",
            background: "#fff3f3",
            accent: "#de7171",
            text: "#171717"
          }
        }
      }
    }
  })
  app.vueApp.use(vuetify)
})