'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "73eb846550c517ab54dbdc1ebd0b98d0",
".git/config": "291964a40db8cf5a3941b0dbe9d9f351",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "efdaca7aeeb687522bbd4ba12104373f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "176d116e0532e68e8311c51668fb24a3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "badba106c92a53e94f765c08d0ed12bc",
".git/logs/refs/heads/main": "badba106c92a53e94f765c08d0ed12bc",
".git/logs/refs/remotes/origin/main": "2dd1cb877c0316bc2c5dddf40c3578b7",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/06/1bb2b20e1f088d1b09524023de7f3885f3ccab": "d5fe854fc67db81cd772f05fa588cb73",
".git/objects/14/56d362699619a993470762631a5207275f4cdb": "ce6aa2812cd1a7aaf737eb2df74a0d9c",
".git/objects/14/7e2b4866b15bdceb9c6c8e7469374bc41b4150": "480a93aa3c78324d0cb4c159e2ec59ec",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/01a3ccfa628ad0368b2f7fd29caa009b4f5cd3": "43add235469f4dbc7342a84cd1373334",
".git/objects/25/ebffb9feac0b91d9d43b9506eff57917b972c5": "89343b3e004ae533302af2e1f7e3ea53",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2c/7cd7f42f0b06e1cd98a446b3c79b69a99ab0e6": "5105270e171ef37759377600c66696ab",
".git/objects/3d/4b3884090564486d82a32f8bf008d7484dabf0": "b06adf54a2ed7e8f21539b5ad74922c5",
".git/objects/44/a6698207157c2cbffeb75fddf6c17eb9a81020": "a9a74468aa617d30696079e8617ddace",
".git/objects/44/e413ed262342094b511f01fff28d8aad2f1bb5": "2d740202cbd3426b27b2bb36f7d417ab",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/9fd414e3a55e308feacb566401f02318f71d4c": "9a1645aedfe511874ff30d1d56ba5280",
".git/objects/47/d31a0b1f4bee4f8ef50fa6a1f6a3c6bab27f78": "a33e811e0a720c01a517f40b5a78fc4f",
".git/objects/47/e3301c71dfa23645410ff5b1cd00f7e4e4af38": "30126b6d2e44cb432c17708fe2d0217a",
".git/objects/4d/ac7e1f0775892f78031d83c0b540e9b49fd991": "dd5865ac572df7ac11bb46943a487aa2",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/f034d62681a8f76f4943ff191212797a556e89": "2dc5cff3ef111d0aa5ceeeb2f06e6524",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/d4df5c78110b0994232483e0e88a6322c202f0": "f598928063f1a20cb2725ca1b853dc43",
".git/objects/5e/492bc4a32e8130131702af3e6e3877170de5b9": "60fa362baaa42f33fb45cf62f863f204",
".git/objects/65/369cf5dfed62a8636cf315173ceac30ccbcb33": "9fd1b0b07e562da8d6aa48be6ff476c1",
".git/objects/6a/d54e4b8c128f29cab6e996a2c417db9a71e9c5": "ca3572938b9208510ee04b1d88eae391",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/77/00eebd3d8892b488d90b319b7e72bfc3b15d47": "d9b671b650f7148d1d30a6ad3a70857b",
".git/objects/7a/45ff03862909b8dbf9f48e4b196b001f19eca5": "60cbc41680f23009381720134b666a20",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7c/ecdda65118c987316765b475221ce36b7fb2a8": "0a38791f1e04c7db77062c00126971be",
".git/objects/81/df0eb3eb6b62c4fcd267058004e4a39b089d44": "74d5f03e49bd5bf029e84deb36b76506",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c21b038c2182400d4d3517fb68ce7bb71000b1": "e8eb3b587823f79ca3966c7bb9e45bb9",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a0/d6d9283e2a70d9e3246f3a6a81faf4a4a5e3b3": "cabaf9e7b4f0b6aa2bbdf72ba0e4b180",
".git/objects/a4/d7b128ba117a79f6f6055eb88c4ea18aaceec8": "4056922265d3178fd0b26360b3e8fcaf",
".git/objects/ae/230130486984ef10f8f92baaf0e5b269fefabe": "854e2397590b4b53676dcc712c0cb4e9",
".git/objects/ae/c240aeb23e585e65206924d7fd4c3c1b0ca6bf": "bc06a85678759cd5e069934e6c1f83ab",
".git/objects/b4/ed5fb92b09e8f0f7f7c29aacc8c8c3b6814902": "4c583fe18016eb126c7e89eb268e6a78",
".git/objects/b6/33a1424a40f1d2fac403aca4c07dfbac88487f": "510e634daf4b7397ec9f2e4e1700b7a7",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/97698c6ff7b3b659b11a615e7e0a907b2d4194": "7b26ba547bf3fb3c9f9b977458398b27",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/df/44107d628a3eb12bef5a654db7ea47642d74df": "958996bfca78f0122fe5beeefc3657a3",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/292a9fd6bcb0af5885c2302dbe8ca8f6286e22": "dd4ff02509ab87e30a91c173973c91e8",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/d275f4dd7babab66e74fb2dbd4362d22657063": "12ad5b606ad1c4b6eed36d7afdcd3dd3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/34808655d23922135388a844f268012a5ddc00": "aafd65c594129783734f1289c2ce9138",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/3e4a5fe7fee58138a2cff1a2379c280f3db652": "af3b15641084abeec1061aa02dc25224",
".git/objects/f9/0826a476157125ab38fca560b8522a529ebca3": "20bca194760e84c39abdf49afc399b01",
".git/objects/fa/4a6ff661851f603e68593cb9c8b807793af7de": "0d63a5f02e21772805097f00a62cb6b9",
".git/objects/fa/6de9b9f6f1c3752679b73978eaee39645b24c6": "b8ba54509e5f400325002956cdeddaae",
".git/objects/fd/6f93cb35658d70ab1f043adfdfa1c56acbbb90": "277838c48a6e369bd09872e6424f4223",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/ORIG_HEAD": "f32c1688bdfb1bc5b3160a7d51dc5bb6",
".git/refs/heads/main": "d92de773e225489cbcfe742a78b44b9a",
".git/refs/remotes/origin/main": "d92de773e225489cbcfe742a78b44b9a",
"assets/AssetManifest.bin": "a9e0bdbddf4c118d98c4829b3bd49db8",
"assets/AssetManifest.bin.json": "8562908f2846bb09daddad81d4fd68b3",
"assets/AssetManifest.json": "13d307a8b890db31df7d1b257c7c5811",
"assets/assets/beverage_1.jpg": "f2f8490dfb63ac161314d8b1457f812e",
"assets/assets/beverage_2.jpg": "337b08df217d08e7d6650bd6e8541dc1",
"assets/assets/burger_1.jpg": "412ab1581a077a7a1b759a31f59d10f6",
"assets/assets/burger_2.jpg": "02e0481a5a2be1a3e3899f3de6cd090c",
"assets/assets/burger_3.jpg": "5d3b08c57f49da8e8a101f831faf0752",
"assets/assets/food_1.jpg": "d6ef746538d7571b9a2144b09b3daca5",
"assets/assets/food_2.jpg": "412ab1581a077a7a1b759a31f59d10f6",
"assets/assets/food_3.jpeg": "7c0eb7f1cf3cb52d7d8e75248ba18b81",
"assets/assets/food_4.jpeg": "8791f436698ad904abfae0bac8fa6a86",
"assets/assets/model_1.glb": "28bd6efe1e876ff68db1c8ffd4c03c83",
"assets/assets/model_2.glb": "f382ce4c52b35f143ef5373a7dc5bdbc",
"assets/assets/model_3.glb": "8a82f723159a7adfe1437e57ebb350e8",
"assets/assets/pizza_1.jpg": "c280966399aeb469679ee7a10af06070",
"assets/assets/pizza_2.jpg": "1085b6b70cb2b9d393ea1e6a44593e7f",
"assets/assets/pizza_3.jpg": "db4f3e84f81252088d97ccabef40f7b5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "93b534d54b2d7281f56c52bcd1bd0763",
"assets/NOTICES": "63b9ae0ea7f3303feff916fcc1a340a5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "0807ea1e96c3532a385cb8a8ef9e04e8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2786de378e0e88e091025d18c96631e8",
"/": "2786de378e0e88e091025d18c96631e8",
"main.dart.js": "9ae0b13e191ec3e57f8c83785ddbad8d",
"manifest.json": "e83a2030f6054e7cee485c938b6f09ac",
"version.json": "90b40ca2069f4a45472a59e0ac8fa190"};
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
