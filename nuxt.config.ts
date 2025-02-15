// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: false},
    css: ['~/assets/css/main.scss'],
    typescript: {typeCheck: true},
    ssr: true,
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/icon', '@nuxt/content'],
    app: {
        head: {
            title: "Nathan FOUGERAY - Développeur",
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/images/SunLogo.png'}
            ]
        }
    },
    content:{
        renderer: {
            anchorLinks: false,
        }
    }

})