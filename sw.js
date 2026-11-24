const CACHE="asist-v1";
self.addEventListener("install",e=>{self.skipWaiting()});
self.addEventListener("activate",e=>{self.clients.claim()});
self.addEventListener("fetch",e=>{
  e.respondWith(
    fetch(e.request).then(r=>{
      const c=r.clone();caches.open(CACHE).then(ch=>ch.put(e.request,c));return r;
    }).catch(()=>caches.match(e.request))
  );
});