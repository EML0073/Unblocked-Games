/*
 * Retired proxy isolation service worker.
 * The proxy now runs in a cross-origin iframe, so the parent page must not
 * force COOP/COEP headers onto its document response.
 */
if (typeof window === "undefined") {
  self.addEventListener("install", () => self.skipWaiting());
  self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
} else if (navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (const registration of registrations) {
      const scriptURL = registration.active?.scriptURL || registration.waiting?.scriptURL || registration.installing?.scriptURL || "";
      if (scriptURL.endsWith("/coi-serviceworker.js")) {
        registration.unregister().then(unregistered => {
          if (unregistered && !sessionStorage.getItem("unblockedgames-proxy-sw-removed")) {
            sessionStorage.setItem("unblockedgames-proxy-sw-removed", "1");
            window.location.reload();
          }
        });
      }
    }
  }).catch(error => console.warn("Could not remove the retired proxy isolation worker:", error));
}
