module.exports = {
	plugins: {
    '@fullhuman/postcss-purgecss': {
			content: ['public/**/*.html'],
			whitelist: ['is-loaded', 'is-active'],
      whitelistPatternsChildren: [/color/]
    },
		autoprefixer: {
			browsers: [
				"last 2 versions",
				"Explorer >= 8",
			]
		}
	},
}