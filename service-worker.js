var filesToCache = [	
	'manifest.json',
	'service-worker.js',
	'index.html',
	'bilder/favicon.ico',
	'bilder/ndr1.jpeg',
	'bilder/ndr2.jpeg',
	'bilder/ffn.jpeg',
	'bilder/antenne.jpeg',
	'bilder/radio21.jpeg',
	'bilder/8080.jpeg',
	'bilder/rtl.jpeg',
	'bilder/rtlmix.jpeg',
	'bilder/njoy.jpeg',
	'bilder/sonne144.png',
	'bilder/touch-icon-iphone.png'	
];
var latestCacheName = 'V1';

self.addEventListener('install', function (event) {
  event.waitUntil(
	caches.open(latestCacheName)
	  .then(function (cache) {
		return cache.addAll(filesToCache)
		.then(() => self.skipWaiting());
	  })
  );
});

self.addEventListener('fetch', (event) => { 
 	event.respondWith( caches.match(event.request).then((response) => { 
		return response || fetch(event.request); 
	}) 
    ); 
}); 
  

