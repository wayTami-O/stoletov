// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/i18n',
  ],

  css: [
    '~/assets/styles/main.css',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/base/kit.scss";
            @import "@/assets/styles/base/mixins.scss";
            @import "@/assets/styles/containers/media.scss";
          `,
        },
      },
    },
  },

  i18n: {
    locales: [
      { code: 'ru', iso: 'ru-RU', name: 'Русский', file: 'ru.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'ru',
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'locales',
    // Отключаем авто-детект, чтобы по умолчанию всегда был русский
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts',
  },
})
