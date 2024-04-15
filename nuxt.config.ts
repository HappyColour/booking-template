// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'light'
  },
  devtools: { enabled: true },
  device: {
    refreshOnResize: true
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/device',
    // '@nuxtjs/eslint-module', // for Coding
    '@nuxt/image', // for Optimization
    "nuxt-security", // for Security
    "nuxt-csurf", // for CSRF
    '@nuxtjs/seo', // for SEO
    '@vite-pwa/nuxt', // for PWA
    ['nuxt-gtag', { gtag: { id: 'G-XXXXXXXXXX' } }] // for Google Tags
  ],
})
