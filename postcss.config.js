module.exports = {
	plugins: {
    '@fullhuman/postcss-purgecss': {
			content: ['layouts/**/*.html'],
			whitelist: ['is-loaded'],
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