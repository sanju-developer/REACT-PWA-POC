export function swDev() {
  if ("serviceWorker" in navigator) {
    const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(swUrl).then(register => {
      console.log( "service worker is registered");
    });
  } else console.log("serviceWorked not supported");
}
