module.exports = {
	stripPrefix: 'build/',
	staticFileGlobs: [
		'build/*.html',
		'build/manifest.json',
		'build/sw-import.js',
		'build/static/**/!(*map*)'
	],
	dontCacheBustUrlsMatching: /\.\w{8}\./,
	swFilePath: 'build/service-worker.js',
	importScripts: ['sw-import.js'],
	runtimeCaching: [{
		urlPattern: '/(.*)',
		handler: 'cacheFirst',
		options: {
			cache: {
				name: 'amazonaws',
				maxEntries: 10,
				maxAgeSeconds: 86400
			},
			origin: /\.amazonaws\.com/
		}
	}]
};