var cacheName = 'PWA Gyrosensor';
var filesToCache = [
  'index.html',
];

/* サービスワーカー起動して、コンテンツをキャッシュする */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* オフライン時はキャッシュからコンテンツを取得する */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

