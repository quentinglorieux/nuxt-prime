export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
      ],
    css: [
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css'
    ],
	build: {
		transpile: ['primevue']
	}
})
