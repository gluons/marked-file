<template lang="pug">
div
	nav.navbar
		.navbar-brand
			nuxt-link.navbar-item(to='/')
				markdown-mark.brand-logo
				span.brand-name Marked File
		.navbar-menu
			.navbar-start
				nuxt-link.navbar-item(to='/')
					b-icon(icon='home')
					span Home
	nuxt
</template>

<style lang="scss">
html {
	font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
}
.navbar-brand {
	.brand-logo {
		max-height: 1.75rem;
	}
	.brand-name {
		margin-left: .5em;
		font-weight: bold;
	}
}
</style>
