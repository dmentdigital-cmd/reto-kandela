const CACHE = 'kandela-v2';
const ASSETS = ['./', './index.html', './styles.css?v=2', './app.js', './manifest.webmanifest', './assets/cover.png', './assets/kandela-home.png', './assets/kandela-calm.png', './assets/kandela-walk.png', './assets/logo-smartdogs.png', './assets/icon-600.png'];

self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./index.html'))));
});
