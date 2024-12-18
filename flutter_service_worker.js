'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9955c5956a53ccbc88c19a8d6de74138",
"version.json": "8485d18fa3eb840559f66ec4b69748e0",
"index.html": "5347b0bdcb0d5e609cd42cadb7591d1c",
"/": "5347b0bdcb0d5e609cd42cadb7591d1c",
"main.dart.js": "650889fee289d06652fa3983b49e4c10",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4fc6a6c14c4bb8d3c30c60666e4e85c9",
"assets/AssetManifest.json": "8af533fef29ba49e8baff27dbbb73f14",
"assets/NOTICES": "030e9d924ea7e58aef83c154171bcb55",
"assets/FontManifest.json": "3097823b52e0c61dbe0e29b2e783bd6b",
"assets/AssetManifest.bin.json": "93bad862379a37aedf798826f8baae2f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4760769661c2513c2087fe9d757048fb",
"assets/fonts/MaterialIcons-Regular.otf": "27ce39c9ead232b996bd908f42297196",
"assets/assets/images/chatbot-icon.png": "ab01d56f4e799fff26db71311d40b453",
"assets/assets/images/status-tray/wifi_figma.png": "c843245850e217f98d30c3c7eb03bac7",
"assets/assets/images/status-tray/phone_figma.png": "ea64149dd5cbbb783d5a85acebbda3a7",
"assets/assets/images/status-tray/person_figma.png": "cbf96dbeacff729524db0aa2507f88a6",
"assets/assets/images/status-tray/settings_figma.png": "773e24aa5a0877f9e018ab8857951b79",
"assets/assets/images/status-tray/ambulance_figma.png": "95a4bdb7757eec51c30f6ac6527e702a",
"assets/assets/images/status-tray/globe_figma.png": "62140e32065b109c697da1f7023a543f",
"assets/assets/images/Touch_Icon.png": "bbdb78aab56e7d23131ad27e6c3d334e",
"assets/assets/images/Enlarged-Booklet.png": "c0325483e649e74110a132116eea5220",
"assets/assets/images/3D-Heart-Model.png": "cb4df70f62f950d15dc6510461a5788c",
"assets/assets/images/art/small-symbols/journey.png": "1ed643617c79417979b0e7aff3d5e0b2",
"assets/assets/images/art/small-symbols/boomerang.png": "3df87171f1e0fb1546d882cc27b0330e",
"assets/assets/images/art/small-symbols/kangaroo-footprint.png": "442a1c3e493824c42371ca7c80aa67d7",
"assets/assets/images/art/small-symbols/fire.png": "59b2224484f6ca6a869896b8cf296a99",
"assets/assets/images/art/small-symbols/people-sitting.png": "a4e4615b90a92054d770717e06ab3d54",
"assets/assets/images/art/small-symbols/person-simple.png": "2625e4136e07168aceb664adcdcc0c4c",
"assets/assets/images/art/small-symbols/waterhole.png": "13864e4db463b3103d21092a052f5613",
"assets/assets/images/art/small-symbols/egg.png": "1fe6e9c6ce3b1c6eff9f44de11b039d0",
"assets/assets/images/art/small-symbols/rain.png": "c47168a3b66b49ea1d1d55f3b5c7fa66",
"assets/assets/images/art/journey-strip2.png": "7609f7f9079c450e21033976b7731d84",
"assets/assets/images/art/footer-strip.png": "afeb12413320fb717d83e71429ac277a",
"assets/assets/images/art/big-symbols/goanna-circle.png": "170b5456da9c80ff613f816f75a07a20",
"assets/assets/images/art/big-symbols/meeting-place-1.png": "3c2350f7b91b56afa85c588872df3747",
"assets/assets/images/art/big-symbols/kangaroo-footprint-circle.png": "f41b0285b5d9c43de5420f8e7f11bc55",
"assets/assets/images/art/big-symbols/meeting-place-2.png": "3036090fd1f30e7ae4204089d4c90a07",
"assets/assets/images/art/big-symbols/person.png": "aebbfeb98aa80b1ae5ad8fe318588607",
"assets/assets/images/art/big-symbols/person-circle.png": "eb516580d3f118edcd62c17fed71b8b6",
"assets/assets/images/art/big-symbols/eagle-circle.png": "d02516d9bf20b1d171361eb8aeecf55c",
"assets/assets/images/art/big-symbols/coolamon.png": "4cea38431f278003f90a6044bb6b5ea7",
"assets/assets/images/art/big-symbols/fish.png": "c9c9d1767de8a3390ea65aef54b6027e",
"assets/assets/images/art/healthy-connections.png": "73aab23d2a593d658bcb95d23f561b5a",
"assets/assets/images/art/x-ray-animals/x-ray-fish.png": "cc9454fccf68a613e575cfb595223d37",
"assets/assets/images/art/x-ray-animals/x-ray-snake.png": "38813faf3e4443d6e348e2cc42900cb1",
"assets/assets/images/art/x-ray-animals/x-ray-kangaroo.png": "22ba5eb6ccba1d9672c598a802243f49",
"assets/assets/images/art/x-ray-animals/kangaroo-dots.png": "f7467248dc1d97b65ed8ffd65b3db14c",
"assets/assets/images/art/x-ray-animals/x-ray-goanna.png": "94ba87e670d57880d065a1056bf3d0e6",
"assets/assets/images/art/animals/cockatoo.png": "c935b4e45fdaa914301d15adc79385f1",
"assets/assets/images/art/animals/honey-ant.png": "d3f1a482094c69dacf0609e658602128",
"assets/assets/images/art/animals/eagle.png": "1159a7526a86fb2fda6de706833b0428",
"assets/assets/images/art/animals/possum.png": "74a8d6f619dd8fe07d2e6e0c99330144",
"assets/assets/images/art/animals/kangaroo.png": "9b8af533ef5c3deba3ea087f86a17b92",
"assets/assets/images/art/animals/goanna.png": "a9f7b64c0a79e59cdbe5d7099e5bada2",
"assets/assets/images/art/animals/snake.png": "c535784caa88db2c6e42a0d3d8d460d3",
"assets/assets/images/art/journey-strip.png": "e6a7189212587e0a713d7b38c82b99b4",
"assets/assets/images/person_search_white.png": "de647c980d49e77a7cac336bee559978",
"assets/assets/images/person_search.png": "7652a02748014b8c1bc0179ebdb04874",
"assets/assets/images/shortcut.png": "6b11da613ea2b0a658cf9440f3daa5f9",
"assets/assets/images/results/Normal_ECG.png": "dd99e04257814b554bffd70b96d81dfe",
"assets/assets/images/results/Patients_ECG.png": "7174348000cb21d0f580e3eb5024efb1",
"assets/assets/images/results/blood-pressure-chart.png": "2c4f838f0c92e082866c4a5619933fd3",
"assets/assets/images/results/location-marker.png": "6a11aab54caff0844f1a379e2d741e5f",
"assets/assets/images/results/sore-throat-original.png": "5c412ea1ee6e402a37664682969caac5",
"assets/assets/images/results/test-results-icon.png": "2cd8f0c8bb24ca144f09b6be6c5984f5",
"assets/assets/images/results/qr-code.png": "16f87fca427c635cd5eda158560727ca",
"assets/assets/images/results/tap.png": "eea1aaefbb20039c2ad5c92adf13a9ec",
"assets/assets/images/results/baby-marlu.png": "d9f32dbe79415f6a1bc70e841e0d49f2",
"assets/assets/images/results/triangle.png": "34d69f833c897ff5912a7575aa1fc2f3",
"assets/assets/images/results/short-breath.png": "ca5e167b0e9906aede545c5a11c5aa32",
"assets/assets/images/results/nosebleed.png": "59ec51a9bd6f95d8acafe3c03e783a2b",
"assets/assets/images/results/blood-glucose-level.png": "1034ed514d95edca52bbe64c365aea7a",
"assets/assets/images/results/sore-throat.png": "a412abf5f42b282f83b1c7383f1d5f19",
"assets/assets/images/results/sleepiness.png": "b33cff2f9e6a34b1d731018a50189193",
"assets/assets/images/results/headache.png": "b33e0dafb5aa6766408facaad262dd6c",
"assets/assets/images/person_add.png": "3b6b56d2d01783885e91dde534740057",
"assets/assets/images/Patient-Health-Booklet.png": "400e5b8d440a33a04455a9cc048a9325",
"assets/assets/images/Nutrition-Model.png": "4c71be7ad836c1c78497f63cc387c573",
"assets/assets/images/screening-tools/ECG-test.png": "adbbe4644ceed110fd238fcb7c02c5a3",
"assets/assets/images/screening-tools/urinalysis.png": "14ea48407d534108d0f6d0234b68d244",
"assets/assets/images/screening-tools/throat.png": "8c4368151acec5d2336e09329827bde6",
"assets/assets/images/screening-tools/CVD-risk-assessment.png": "e03851f334041cc810566c880a7cf8c2",
"assets/assets/images/screening-tools/blood-pressure.png": "4934ea70454dfe36d338bc9665984313",
"assets/assets/images/screening-tools/blood-glucose.png": "a48039e74e54cb7e41e28ecc8f2dc960",
"assets/assets/images/screening-tools/temperature.png": "1c1a1661e981ec69c6c3c60b954389d3",
"assets/assets/images/screening-tools/search.png": "679c432e8cadf1ad59c7151ea3e5ef7f",
"assets/assets/images/screening-tools/skin-help2.png": "7b5635243e67e4a82b1496cf4cf4a7d3",
"assets/assets/images/screening-tools/heart.png": "595f3c07d05babad4c6c897906914217",
"assets/assets/images/screening-tools/pulse.png": "de94add6852c2a62b01691cdf2e30b25",
"assets/assets/images/screening-tools/skin-help1.png": "829b689502f3110cacdd230beed18b95",
"assets/assets/images/screening-tools/arrow-right-triangle.png": "f81e6f464a1fb40c93fd0296643de02a",
"assets/assets/images/screening-tools/images_border.png": "8707da51dc415a3adc282195f5333fa2",
"assets/assets/images/screening-tools/skin.png": "48efb78703d9a9582cf0b5c133cdbaae",
"assets/assets/images/screening-tools/ankle.png": "e52af10a72be5472a9e42916e11aae72",
"assets/assets/images/screening-tools/camera.png": "54596377b32b5f2d74aeae619c7b7d93",
"assets/assets/images/screening-tools/throat-help.png": "982d7fe4b9251c1d85ba6bd820cf3726",
"assets/assets/images/mental-health-check/Faces_1.png": "68dc867b5931420c7f755ca21a6339bf",
"assets/assets/images/mental-health-check/Faces_2.png": "8f9fed0424540de286e93654eee4a3cf",
"assets/assets/images/mental-health-check/Faces_3.png": "31d021a2aaa1020d14a08fec169d92bd",
"assets/assets/images/mental-health-check/Faces_4.png": "744b0cfb4f313bb1bae110a96bed27fb",
"assets/assets/images/mental-health-check/Faces_5.png": "57535b106d282fa37faa4fbf3371c6f5",
"assets/assets/images/mental-health-check/Faces_empty.png": "f8d59f02a4e6662e641c5ddcdd05c90c",
"assets/assets/fonts/VarelaRound-Regular.ttf": "3c3c18c24b0bd85a303bc3f2581d53fc",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
