module.exports = {
	plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['layouts/**/*.html'],
      whitelist: []
    },
		autoprefixer: {
			browsers: [
				"last 2 versions",
				"Explorer >= 8",
			]
		}
	},
}