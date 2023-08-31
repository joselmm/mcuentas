module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{woff,woff2,js,css,html,json,png,svg}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};