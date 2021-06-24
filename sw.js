self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./","./src/style.css","./images/logo192.png"])
        })
    )
})

self.addEventListener("fetch",e => {
    console.log(`Intercepting fetch request for: ${e.request.url}`);
})
