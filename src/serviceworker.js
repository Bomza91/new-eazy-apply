/* eslint-disable no-restricted-globals */

const files = self._WB_MANIFEST
console.log(files)

self.addEventListener('install', () => {
    self.skipWaiting();
    console.log('Installing')
})

self.addEventListener('activate', () => console.log('Activated'))

self.addEventListener('fetch', (event) => {
    console.log(event)

    if (
        event.request.headers && 
        event.request.headers.get('Accept') &&
        event.request.headers.get('Accept').includes('text/html')
    ){
        event.respondWith(
            new Response(["<div>Hello Wolrd!</div>"], {
                headers: { "Content-Type": "text/html; charset-utf=8" }
            })
        )
    }
    event.respondWith(fetch(event.request))
})