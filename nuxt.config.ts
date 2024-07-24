// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    // '@nuxt/test-utils/module',
    // '@nuxtjs/sitemap',
    '@nuxt/eslint',
  ],
  // piniaPersistedstate: {
  //   debug: true,
  // },
  imports: {
    dirs: ['stores', 'types'],
  },
  // eslint: {
  //   config: {
  //     stylistic: false,
  //   },
  // },
  css: [
    'assets/scss/index.scss',
    '@fortawesome/fontawesome-free/css/all.css',
    // 'bulma/css/bulma.css',
    'bulma/css/versions/bulma-no-dark-mode.css',
    // 'easymde/dist/easymde.min.css',
  ],
  runtimeConfig: {
    public: {
      NUXT_APP_MODE: process.env.NUXT_APP_MODE || '',
    },
  },
})
