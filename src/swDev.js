export function swDev() {
  if ("serviceWorker" in navigator) {
    const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(swUrl).then(register => {
      console.log(register, "service worker is registered");
      // return register.pushManager.getSubscription().then(subcription => {
      //   register.showNotification("hello world");
      // });
    });
  } else console.log("serviceWorked not supported");
}
