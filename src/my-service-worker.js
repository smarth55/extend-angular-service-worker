importScripts('./ngsw-worker.js');

self.addEventListener('notificationclick', (event) => {
  console.log('notification clicked!')
});

self.addEventListener('message', (event) => {
  console.log('message picked up by custom service worker code', event);
});