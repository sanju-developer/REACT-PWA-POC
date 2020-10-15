importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registration) {
      console.log(
        "Registration of FCM successful, scope is:",
        registration.scope
      );
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}

firebase.initializeApp({
  messagingSenderId: "607918372009"
});

const initMessaging = firebase.messaging();

this.addEventListener("push", function (event) {
  event.waitUntil(handleNotificationOnIos(event));
});

function handleNotificationOnIos(event) {
  const data = event.data.json();
  const options = {
    body:
      data.notification.body || "This notification was generated from a push!",
    vibrate: [100, 50, 100]
  };
  this.registration.showNotification(
    data.notification.title || "Testing PWA Push notification!",
    options
  );
}
