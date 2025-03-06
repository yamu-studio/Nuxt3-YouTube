// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    // 'bulma/css/bulma.css',
    'bulma/css/versions/bulma-no-dark-mode.css',

    'assets/css/style.css',
  ],
})
