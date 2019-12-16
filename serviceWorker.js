//serviceWorker.js

// #############################################################
// Service Worker is a script that works on browser background 
// without user interaction independently. Also, It resembles 
// a proxy that works on the user side. - Basically this script 
// manages the events needed to make a website a progressive web
// app. The basic flowchart is request install, if installed 
// request service worker, if online go to server if offline 
// checkCache. This runs the application offline and online.
// #############################################################

// #############################################
// #creates files system and application cache.#
// #############################################
const cacheName = "myOfflineCache";

//list all static files in your project
const staticAssets = ["./", "./index.html"];


// #############################################################
// #Request install of the app, this basically add the install #
// #function to the web browser and explains how to install the# 
// #application to the cache                                   #
// #############################################################
self.addEventListener("install", async (event) => {
    
// ”caches” is an instance of the CacheStorage
// the method “open” returns a promise that resolves to 
// the cache object matching the cache name
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  
  // allow the newly installed service worker to move on to activation
  return self.skipWaiting();
});



// #########################################################
// #Activates service worker when the application is opened#
// #########################################################
self.addEventListener("activate", event => {
  self.clients.claim();
});


// ##############################################################
// #Gets data of application first from online web service then #
// #by the internal cache aswell or instead of checking the web.#
// ##############################################################
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

// ###########################################################
// #Checks the cache for the application returns cached data.#
// #This function is called in the fetch function above.     #
// ###########################################################
async function checkCache(req) {

  //open our cache
  const cache = await caches.open(cacheName);

  // check if there’s data there that match with what the request requires
  const cachedData = await cache.match(req);

  // if there’s data cached, return it, else fetch from the network
  return cachedData || fetch(req);
}


// ##########################################################
// #Checks network and cache for files then matches the two #
// #sets of data returns the acculative data.               #
// #This function is called in the fetch function above.    #
// ##########################################################
async function checkNetwork(req) {

  // open our cache
  const cache = await caches.open(cacheName);

  // try to fetch data from the network
  try {
    // save the fetched data
    const freshData = await fetch(req);

    // save a copy of the response to your cache
    await cache.put(req, freshData.clone());

    // send the response back (returned the fetched data)
    return freshData;
  } 
// if we are unable to fetch from the network (offline)
  catch (err) {
// match the request with data from the cache
    const cachedData = await cache.match(req);
// return the cached data
    return cachedData;
  }
}


