// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "@fortawesome/fontawesome-free/css/all.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  devtools: { enabled: false },
  typescript: {
    typeCheck: true,
  },
  runtimeConfig: {
    app: {
      baseURL: process.env.NUXT_APP_BASE_URL,
      secret: process.env.GOOGLEMAPS_KEY,
    },
  },
});
