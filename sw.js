const CACHE_NAME = 'poderoso-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './data.json',
  './icono.png'
];

// Instalar el service worker y guardar archivos en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Responder con los archivos en caché
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});