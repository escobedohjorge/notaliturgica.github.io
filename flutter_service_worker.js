'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9e0b7d4a9140b793d28e4077998444eb",
"assets/AssetManifest.bin.json": "fdebb5aa73fe9307a48f74182d916b5e",
"assets/AssetManifest.json": "0789fe0752503cbc002b4a00c937723c",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/cel.png": "49a014ce367eae091e9b5a8d2dd4b73b",
"assets/assets/images/completo.png": "02a51346b85e3ed19569b017cec31232",
"assets/assets/images/google_play_badge.png": "8b87a20fccdd9dd9435daa212eb31b0c",
"assets/assets/images/icon.png": "b2496ad03d0da4352bd0e603415d7b80",
"assets/assets/images/icon_sf.png": "ed78de347d98670650d652ec7fd486c2",
"assets/assets/images/iglesia1.png": "6a5d9ce7006a14db8bade6072842ef4c",
"assets/assets/images/iglesia2.png": "c6d08cdbd4a564ef6a1bef7cc00674c9",
"assets/assets/images/iglesia3.png": "1241e9b35f47a8eed6cbe01d50e72ec9",
"assets/assets/images/iglesia4.png": "535aa5277022f4ca92a407ce2463d649",
"assets/assets/images/iglesia5.png": "5c54c7cf45b724f936480b14fa2bbe2a",
"assets/assets/images/iglesia6.png": "ef73b8e9a4f5b54b41ba95a45d65b163",
"assets/assets/images/logo_local.png": "7ae16b1d4b1cf669232229506a3a95c2",
"assets/assets/images/windows_badge.png": "b2f2a107b72b8cd855429a4007ae5a7a",
"assets/assets/lottie/audio.json": "8709ccd9e6cb25e3d4fb643162be12ba",
"assets/assets/lottie/church.json": "f318b83309d098d19245062d4eaf483b",
"assets/assets/lottie/church2.json": "40ef0bc39213ace57eac6e8c5f2bfb02",
"assets/assets/lottie/errorSearch.json": "093649e6b117668126296385463998cf",
"assets/assets/lottie/luna.json": "f97ec97577f553149534a923b0035044",
"assets/assets/lottie/maria.json": "5a02af16076b9587c2a6ce74e76795c0",
"assets/assets/lottie/music.json": "0fcc4fb12dee8865f02872048c9f2ca9",
"assets/assets/lottie/playing.json": "69bc5953ac6f34b315252343b02e3837",
"assets/assets/lottie/recorder.json": "bb08818de90e4a63ca811a3248ae33b3",
"assets/assets/lottie/registro.json": "9acc212f700309235befea390f79161e",
"assets/assets/lottie/search.json": "667354c259569d343e23903bd00115d2",
"assets/assets/lottie/send.json": "3dfa3290e0442c21f268e852e58a6824",
"assets/assets/lottie/subiendo.json": "bb98bd3688026b102352a0f5acdd97ef",
"assets/assets/lottie/tocandoguitar.json": "739b754bca503bbff4b505d33bd56088",
"assets/assets/lottie/welcome.json": "117d2eb69acda391c7a28d449c98792e",
"assets/FontManifest.json": "951c316f84a757c082de1835fcd705de",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "806486e045ab4945df781bdb7b4db01f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "b2496ad03d0da4352bd0e603415d7b80",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a4cb202582be9d94b9c1f74a097ca02e",
"icons/Icon-192.png": "b2496ad03d0da4352bd0e603415d7b80",
"icons/Icon-512.png": "b2496ad03d0da4352bd0e603415d7b80",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "955f4cc77438d8fdb4796f692b9c1d69",
"/": "955f4cc77438d8fdb4796f692b9c1d69",
"main.dart.js": "6cda55934f81ecb349e1af0e28c9c3c0",
"manifest.json": "5e84e55361ffc70da3166e13b4f71d6d",
"version.json": "2ca136b378aade7c685e396888c21ae2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
