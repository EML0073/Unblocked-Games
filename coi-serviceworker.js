/*! COOP/COEP service worker for GitHub Pages proxy.html; based on the MIT-licensed coi-serviceworker project. */
if (typeof window === "undefined") {
  self.addEventListener("install", () => self.skipWaiting());
  self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));

  self.addEventListener("fetch", event => {
    const request = event.request;
    const url = new URL(request.url);
    if (
      request.mode !== "navigate" ||
      url.origin !== self.location.origin ||
      url.pathname !== "/Unblocked-Games/proxy.html"
    ) return;

    event.respondWith(fetch(request).then(response => {
      if (!response || response.status === 0) return response;
      const headers = new Headers(response.headers);
      headers.set("Cross-Origin-Opener-Policy", "same-origin");
      headers.set("Cross-Origin-Embedder-Policy", "require-corp");
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers
      });
    }));
  });
} else {
  (async () => {
    const key = "unblockedgames-proxy-coi-reload";
    if (window.crossOriginIsolated) {
      sessionStorage.removeItem(key);
      return;
    }
    if (!window.isSecureContext || !("serviceWorker" in navigator)) {
      console.error("Proxy isolation requires HTTPS and Service Worker support.");
      return;
    }
    if (sessionStorage.getItem(key)) {
      console.error("Proxy isolation is still unavailable after the Service Worker reload.");
      return;
    }

    let resolveControllerChange;
    const controllerChanged = new Promise(resolve => {
      resolveControllerChange = resolve;
      navigator.serviceWorker.addEventListener("controllerchange", resolve, { once: true });
    });

    try {
      const scriptURL = new URL(document.currentScript.src, location.href);
      const registration = await navigator.serviceWorker.register(scriptURL.href, {
        scope: "/Unblocked-Games/",
        updateViaCache: "none"
      });

      // Ask the browser to check GitHub Pages for a newer worker script.
      await registration.update();

      // Do not reload while an older worker still controls the page. Wait
      // until the new worker has activated and claimed its clients first.
      const installingWorker = registration.installing || registration.waiting;
      if (installingWorker) {
        await new Promise(resolve => {
          if (installingWorker.state === "activated") return resolve();
          installingWorker.addEventListener("statechange", () => {
            if (installingWorker.state === "activated") resolve();
          });
        });
      }

      if (!navigator.serviceWorker.controller) {
        await controllerChanged;
      }

      if (navigator.serviceWorker.controller && !window.crossOriginIsolated) {
        sessionStorage.setItem(key, "1");
        window.location.reload();
      }
    } catch (error) {
      console.error("Could not install/update the proxy isolation Service Worker:", error);
    }
  })();
}
