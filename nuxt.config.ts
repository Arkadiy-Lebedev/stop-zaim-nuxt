export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@nuxt/image'],
	css: ['~/assets/scss/global.scss'],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
							@use "~/assets/scss/normalize.scss" as *;
							@use "~/assets/scss/vars.scss" as *;
							@use "~/assets/scss/fonts.scss" as *;
							@use "~/assets/scss/header.scss" as *;
							`,
				},
			},
		},
	},
})
