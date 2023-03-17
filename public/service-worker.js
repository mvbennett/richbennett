self.importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js')

// This will trigger the importScripts() for workbox.strategies and its dependencies
// so that it can be used in the event handlers
// https://developer.chrome.com/docs/workbox/modules/workbox-sw/#avoid-async-imports
workbox.loadModule('workbox-strategies')
workbox.loadModule('workbox-expiration')

self.addEventListener('fetch', (event) => {
  const { request } = event
  const { pathname } = new URL(event.request.url)

  const isPdfURL = pathname.slice(-4) === '.pdf'

  if (isPdfURL) {
    event.respondWith(
      new workbox.strategies.CacheFirst({
        cacheName: 'pdfs',
        plugins: [
          // cache indefinitely until the cache storage hits 50
          // then replace the oldest
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 50,
          }),
        ],
      }).handle({ event, request }),
    )
  }

  const createCacheFirstStrategy = ({items, maxAgeSeconds, maxEntries}) => {
    items.map((item) => {
// make it specific to your API
      const URLIncludesItem = pathname.includes('/api/v1/') && pathname.includes(item)
      if (URLIncludesItem) {
        // if modify method, fetch fresh data:
        if (event.request.method !== 'GET') {
          caches.delete(item)
        } else {
          event.respondWith(
            new workbox.strategies.CacheFirst({
              cacheName: item,
              plugins: [
// use both: time restrictions and max entries
                new workbox.expiration.ExpirationPlugin({
                  maxAgeSeconds,
                  maxEntries,
                }),
              ],
            }).handle({ event, request }),
          )
        }
      }
    })
  }

  createCacheFirstStrategy({
    items: ['segments', 'entities', 'units'],
    maxAgeSeconds: 12 * 60 * 60, // 12 hrs
    maxEntries: 15,
  })
  createCacheFirstStrategy({
    items: ['metrics'],
    maxAgeSeconds: 2 * 60 * 60, // 2hrs
    maxEntries: 10,
  })

 // optional: if you want to have a way to bust all caches quickly
  if (pathname.includes('/refresh')) {
    caches.keys().then((names) => names.map((name) => caches.delete(name)))
  } else {
    return
  }
})
