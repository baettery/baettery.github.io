const CACHE='investment-guard-v04-pages-2';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon-192.svg','./icon-512.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{
  if(e.request.url.includes('api.twelvedata.com')) return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});