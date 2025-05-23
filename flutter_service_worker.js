'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b2982793c691ca2a71753be8a8842734",
"assets/AssetManifest.bin.json": "0715048d2c4a6b4efa1a6d940e907b25",
"assets/AssetManifest.json": "e14689fb4bc27a2b95598edb347cbff7",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/1.png": "49a014ce367eae091e9b5a8d2dd4b73b",
"assets/assets/images/2.png": "b2fca32bc6a1606d87b444a80799cbc1",
"assets/assets/images/3.png": "b98f4219d4ee09f66bb9062d3acd7c8f",
"assets/assets/images/4.png": "111e45b12d9a706b4446f201c0dda9cb",
"assets/assets/images/5.png": "e55705c49c5bcd105bff3b31fd31bc16",
"assets/assets/images/6.png": "48cc4fdd13a946bcbcdf4cc466a2290e",
"assets/assets/images/7.png": "425d00cb57054b09b1350fd7c52cb065",
"assets/assets/images/8.png": "94f967375e8df9ea40bedda01d35311e",
"assets/assets/images/completo.png": "02a51346b85e3ed19569b017cec31232",
"assets/assets/images/google_play_badge.png": "8b87a20fccdd9dd9435daa212eb31b0c",
"assets/assets/images/icon.png": "b2496ad03d0da4352bd0e603415d7b80",
"assets/assets/images/icon_sf.png": "ed78de347d98670650d652ec7fd486c2",
"assets/assets/images/logo_local.png": "7ae16b1d4b1cf669232229506a3a95c2",
"assets/assets/images/parallax0.png": "bac00e42cc8bf06df9d05485095469da",
"assets/assets/images/parallax1.png": "7c6dc5c19ac5e7c90e386d3d45ce2168",
"assets/assets/images/parallax22.png": "a868eb9f7b01a1516be6903a04bc931d",
"assets/assets/images/parallax3.png": "2c1791eb9f8c8abd3b32bd78e25b1735",
"assets/assets/images/parallax4.png": "85af35fc3d60d06c95e014b2d28e9064",
"assets/assets/images/parallax5.png": "22944f56a35ee5d3ae67bad3ca8188b9",
"assets/assets/images/parallax6.png": "62e88f1523433e6858111393766fcbb7",
"assets/assets/images/parallax77.png": "58a8442d67012c64778c195944f11e86",
"assets/assets/images/parallax8.png": "a1124ff21bbefb8a1c63fdd525891a80",
"assets/assets/images/windows_badge.png": "b2f2a107b72b8cd855429a4007ae5a7a",
"assets/assets/lottie/church.json": "f318b83309d098d19245062d4eaf483b",
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
"flutter_bootstrap.js": "85073609e15238e49cd1c64dd7da42a3",
"icons/Icon-192.png": "b2496ad03d0da4352bd0e603415d7b80",
"icons/Icon-512.png": "b2496ad03d0da4352bd0e603415d7b80",
"icons/Icon-maskable-192.png": "b2496ad03d0da4352bd0e603415d7b80",
"icons/Icon-maskable-512.png": "b2496ad03d0da4352bd0e603415d7b80",
"index.html": "8b7d9b68cccba8c15c5dcf87cce58092",
"/": "8b7d9b68cccba8c15c5dcf87cce58092",
"main.dart.js": "80f558e37d8cdbd235914645f98fdaaa",
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
