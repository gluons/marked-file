module.exports = {
	css: [
		'font-awesome/css/font-awesome.css',
		'buefy/lib/buefy.css'
	],
	/*
	** Headers of the page
	*/
	head: {
		title: 'Marked File',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Parse markdown file to HTML on client-side.' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#3B8070' },
	/*
	** Build configuration
	*/
	build: {
		/*
		** Run ESLINT on save
		*/
		extend(config, ctx) {
			if (ctx.dev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				});
			}
		}
	},
	plugins: [
		'~/plugins/global.js',
		'~/plugins/buefy.js',
		'~/plugins/jump.js',
		'~/plugins/clipboard.js'
	]
};
