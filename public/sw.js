const cacheName = "PWA-POC-Offline";

// cache files required
this.addEventListener("install", function (event) {
  this.skipWaiting();
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll([
        "static/js/1.chunk.js",
        "static/js/1.chunk.js.map",
        "/static/js/bundle.js",
        "/static/js/main.chunk.js",
        "static/js/0.chunk.js",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Progressive_Web_Apps_Logo.svg/400px-Progressive_Web_Apps_Logo.svg.png",
        "/posts",
        "/offline.html",
        "/"
      ]);
    })
  );
});

this.addEventListener("fetch", function (event) {
  // From cache when no internet connection
  if (!navigator.onLine)
    event.respondWith(
      caches.open(cacheName).then(function (cache) {
        return cache.match(event.request).then(function (response) {
          return (
            response ||
            fetch(event.request)
              .then(function (response) {
                cache.put(event.request, response.clone());
                return response;
              })
              .catch(() => {
                if (
                  event.request.method === "GET" &&
                  event.request.headers.get("accept").includes("text/html")
                ) {
                  // Return the offline page
                  return caches.match("offline.html");
                }
              })
          );
        });
      })
    );
});

// cache api call
this.addEventListener("sync", function (event) {
  if (event.tag === "add-post") {
    event.waitUntil(getData("add-post"));
  }
  if (event.tag === "delete-post") {
    event.waitUntil(getData("delete-post"));
  }
});

async function addPost(addedItem) {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(addedItem)
  });
}

async function deletePost(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "DELETE"
  });
}

async function getData(type) {
  var request = indexedDB.open("pwa-poc-db", 1);

  request.onsuccess = function (event) {
    let requestOnDbConnectionSuccessfull;
    let db = event.target.result;
    if (type === "add-post") {
      const transaction = db.transaction(["new-post"]);
      const objectStore = transaction.objectStore("new-post");
      requestOnDbConnectionSuccessfull = objectStore.get("adding-postItem");
    } else if (type === "delete-post") {
      const transaction = db.transaction(["delete-post"]);
      const objectStore = transaction.objectStore("delete-post");
      requestOnDbConnectionSuccessfull = objectStore.get("postId");
    }
    // success from collection
    requestOnDbConnectionSuccessfull.onerror = function (event) {
      console.log(
        "some error has been raised while getting data from collection",
        event
      );
    };
    // error from collection
    requestOnDbConnectionSuccessfull.onsuccess = function (request) {
      if (type === "add-post") {
        addPost(request.result);
      } else if (type === "delete-post") {
        deletePost(request.target.result);
      }
      indexedDB.close();
    };
  };

  request.onerror = function (event) {
    console.log("while connecting to indexdb some error occured", event);
  };
}
