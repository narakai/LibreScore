
// PWA Service Worker
// https://developers.google.com/web/tools/workbox/
import './registerServiceWorker'

// polyfills
import 'fast-text-encoding' // TextEncoder & TextDecoder
import 'abort-controller/polyfill' // AbortController
import 'web-streams-polyfill' // ReadableStream
import '@/utils/body-polyfill' // Response.prototype.body
import '@/utils/idb-polyfill' // IndexedDB shim for Firefox private mode

import UI from './ui'

UI.mount('#app')

// persist IndexedDB data in situations of low disk space on a device
// https://dexie.org/docs/StorageManager
void navigator?.storage?.persist()
