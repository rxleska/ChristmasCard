//serviceWorker.js


//################################ INSTALL PROMPT ##############################
var deferredPrompt;

window.addEventListener('beforeinstallprompt', function (e)){
  e.preventDefault();
	deferredPrompt = e;

	showAddToHomeScreen();
}

function showAddToHomeScreen(){
	var adToHmScrBut = document.querySelector(".adToHmScrBut-prompt");
	
	adToHmScrBut.style.display = "block";
	
	adToHmScrBut.addEventListener("click", addToHomeScreen)
}

function addToHomeScreen(){var adToHmScrBut = document.querySelector(".adToHmScrBut-prompt");
  adToHmScrBut.style.display = 'none';
  deferredPrompt.prompt();
  deferredPrompt.userChoice
		.then(function(choiceResult){
	
	if(choiceResult.outcome === 'accepted'){
		console.log('User accepted the A2HS prompt');
	}else {
		console.log('User dismissed the A2HS Prompt')
	}
		
	defferredPrompt = null;
		
	});
}
//#############################################################################




const cacheName = "myOfflineCache";
//list all static files in your project
const staticAssets = ["./", "./index.html"];

self.addEventListener("install", async (event) => {
//”caches” is an instance of the CacheStorage
//the method “open” returns a promise that resolves to 
//the cache object matching the cache name
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  //allow the newly installed service worker to move on to activation
  return self.skipWaiting();
});



//serviceWorker.js
self.addEventListener("activate", event => {
  self.clients.claim();
});

//serviceWorker.js
self.addEventListener("fetch", async event => {
  const req = event.request;
  const url = new URL(req.url);
//check if the request is requiring data from our own application(location)
  if (url.origin === location.origin) {
//check our cache
    event.respondWith(checkCache(req));
  } 
//else, fetch from the network and cache that result
  else {
    event.respondWith(checkNetwork(req));
  }
});

async function checkCache(req) {
//open our cache
  const cache = await caches.open(cacheName);
//check if there’s data there that match with what the request requires
  const cachedData = await cache.match(req);
//if there’s data cached, return it, else fetch from the network
  return cachedData || fetch(req);
}

async function checkNetwork(req) {
//open our cache
  const cache = await caches.open(cacheName);
//try to fetch data from the network
  try {
//save the fetched data
    const freshData = await fetch(req);
//save a copy of the response to your cache
    await cache.put(req, freshData.clone());
//send the response back (returned the fetched data)
    return freshData;
  } 
//if we are unable to fetch from the network (offline)
  catch (err) {
//match the request with data from the cache
    const cachedData = await cache.match(req);
//return the cached data
    return cachedData;
  }
}


