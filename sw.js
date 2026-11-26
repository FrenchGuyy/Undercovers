/* Undercover : service worker.
   Réseau d'abord : à chaque lancement avec internet, la dernière version publiée est récupérée.
   Sans internet : la dernière version déjà téléchargée est utilisée. */
const V="undercover-v20";
const SHELL=["./","index.html","duos.json","manifest.webmanifest","icon-192.png","icon-512.png"];
const key=u=>new Request(u.origin+u.pathname);

self.addEventListener("install",e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(V).then(c=>Promise.all(SHELL.map(p=>c.add(p).catch(()=>{})))));
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",e=>{
  const r=e.request;
  if(r.method!=="GET"){return;}
  const u=new URL(r.url);
  if(u.origin!==self.location.origin){return;}   // Firebase, polices externes : directement sur le réseau
  e.respondWith(
    fetch(r,{cache:"no-cache"}).then(res=>{
      if(res&&res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(key(u),cp));}
      return res;
    }).catch(()=>caches.match(key(u)).then(m=>m||(r.mode==="navigate"?caches.match(key(new URL("index.html",self.location))):undefined)||Response.error()))
  );
});
