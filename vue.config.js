module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/leadit/' : '/',
	css: {
		loaderOptions: {
			sass: {
				prependData: '@import "@/assets/styles/main.scss";',
			},
		},
	},
	lintOnSave: process.env.NODE_ENV !== 'production',
}
