const V='studio1';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(V).then(c=>c.addAll(['./','index.html','manifest.json','icon.png'])))});
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{
 if(e.request.method!='GET'||!e.request.url.startsWith(self.location.origin))return;
 e.respondWith(fetch(e.request).then(r=>{const x=r.clone();caches.open(V).then(c=>c.put(e.request,x));return r}).catch(()=>caches.match(e.request)))});
