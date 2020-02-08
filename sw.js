const CACHE_NAME = 'nf-science\'s_cash';
// Cache targets
const urlsToCache = [
  './',
  './index.html',
  '/style/both.css',
  '/style/m.css',
  '/style/d.css',
  '/fonts/Noto_Sans_JP/NotoSansJP-Medium.otf',
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