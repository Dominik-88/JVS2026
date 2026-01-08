// Service Worker pro Vodárenské areály Management System
// Version 3.0.0 Ultra

const CACHE_NAME = 'vodarny-cache-v3.0.0';
const ASSETS_TO_CACHE = [
 '/index.html',
 '/manifest.json',
 '/icon-192.png',
 '/icon-512.png',
 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
 'https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css',
 'https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css',
 'https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js',
 'https://unpkg.com/leaflet.heat@0.2.0/dist/leaflet-heat.js',
 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
 'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0',
 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
 console.log('[Service Worker] Installing v3.0.0...');
 event.waitUntil(
 caches.open(CACHE_NAME).then((cache) => {
 console.log('[Service Worker] Caching assets');
 return cache.addAll(ASSETS_TO_CACHE).catch(err => {
 console.warn('[Service Worker] Some assets failed to cache:', err);
 // Continue even if some assets fail
 return Promise.resolve();
 });
 })
 );
 self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
 console.log('[Service Worker] Activating v3.0.0...');
 event.waitUntil(
 caches.keys().then((cacheNames) => {
 return Promise.all(
 cacheNames
 .filter((name) => name !== CACHE_NAME)
 .map((name) => {
 console.log('[Service Worker] Deleting old cache:', name);
 return caches.delete(name);
 })
 );
 })
 );
 self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
 event.respondWith(
 caches.match(event.request).then((response) => {
 if (response) {
 console.log('[Service Worker] Serving from cache:', event.request.url);
 return response;
 }
 
 console.log('[Service Worker] Fetching from network:', event.request.url);
 return fetch(event.request).then((response) => {
 // Don't cache non-successful responses
 if (!response || response.status !== 200 || response.type === 'error') {
 return response;
 }
 
 // Clone the response
 const responseToCache = response.clone();
 
 caches.open(CACHE_NAME).then((cache) => {
 cache.put(event.request, responseToCache);
 });
 
 return response;
 }).catch(() => {
 // Offline fallback
 return caches.match('/index.html');
 });
 })
 );
});

// Background sync for offline data
self.addEventListener('sync', (event) => {
 console.log('[Service Worker] Background sync:', event.tag);
 if (event.tag === 'sync-data') {
 event.waitUntil(syncOfflineData());
 }
});

async function syncOfflineData() {
 console.log('[Service Worker] Syncing offline data...');
 // Get pending data from IndexedDB
 // Send to server
 // Clear local queue
 // Implementation would require server-side API
 return Promise.resolve();
}

// Push notifications
self.addEventListener('push', (event) => {
 console.log('[Service Worker] Push notification received');
 
 let data = {
 title: 'Vodárenské areály',
 body: 'Nová notifikace',
 icon: '/icon-192.png',
 badge: '/icon-192.png'
 };
 
 if (event.data) {
 try {
 data = event.data.json();
 } catch (e) {
 data.body = event.data.text();
 }
 }
 
 const options = {
 body: data.body,
 icon: data.icon || '/icon-192.png',
 badge: data.badge || '/icon-192.png',
 vibrate: [200, 100, 200],
 data: {
 dateOfArrival: Date.now(),
 primaryKey: 1
 },
 actions: [
 {
 action: 'open',
 title: 'Otevřít',
 icon: '/icon-192.png'
 },
 {
 action: 'close',
 title: 'Zavřít',
 icon: '/icon-192.png'
 }
 ]
 };
 
 event.waitUntil(
 self.registration.showNotification(data.title, options)
 );
});

// Notification click
self.addEventListener('notificationclick', (event) => {
 console.log('[Service Worker] Notification clicked:', event.action);
 event.notification.close();
 
 if (event.action === 'open') {
 event.waitUntil(
 clients.openWindow('/')
 );
 }
});

// Periodic background sync (experimental)
self.addEventListener('periodicsync', (event) => {
 if (event.tag === 'update-data') {
 event.waitUntil(updateData());
 }
});

async function updateData() {
 console.log('[Service Worker] Periodic sync: updating data...');
 // Fetch latest data from server
 // Update local cache
 return Promise.resolve();
}

// Message handling from main thread
self.addEventListener('message', (event) => {
 console.log('[Service Worker] Message received:', event.data);
 
 if (event.data.type === 'SKIP_WAITING') {
 self.skipWaiting();
 }
 
 if (event.data.type === 'CACHE_URLS') {
 event.waitUntil(
 caches.open(CACHE_NAME).then((cache) => {
 return cache.addAll(event.data.urls);
 })
 );
 }
});
