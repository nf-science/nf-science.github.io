const CACHE_NAME = 'cash';
// Cache targets
const urlsToCache = [
  './',
  './img/favicon.png',
  './index.html',
  './style/both.css',
  './style/m.css',
  './style/d.css',
  './fonts/Noto_Sans_JP/NotoSansJP-Medium.otf',
  'index.amp.html',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response ? response : fetch(event.request);
      })
  );
});