module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		'plugin:vue/recommended',
		'eslint:recommended',
		'prettier/vue',
		'plugin:prettier/recommended',
	],
	rules: {
		'prettier/prettier': 'error',
		'no-unused-vars': 'error',
		semi: 'off',
		'comma-dangle': 'off',
		'no-plusplus': 'off',
		'max-len': [
			'error',
			300,
			{
				code: 80,
				ignoreUrls: true,
				tabWidth: 4,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
		'prefer-destructuring': 'off',
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true,
			},
		],
		'no-restricted-imports': [
			'error',
			{
				paths: ['fs'],
				patterns: ['eslint/*'],
			},
		],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
}
