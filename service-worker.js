const CACHE_NAME = 'studymode-v8.1'; // 強制更新

const urlsToCache = [
  './',
  './index.html',
  './questions.js',
  './manifest.json',
  './icon.png',
  './fonts/zhuyin.ttf' 
];

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
