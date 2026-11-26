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

    const reloadOnce = () => {
      if (sessionStorage.getItem(key)) {
        console.error("Proxy isolation is still unavailable after the Service Worker reload.");
        return;
      }
      sessionStorage.setItem(key, "1");
      window.location.reload();
    };

    // Listen before registering/updating so a fast activation is not missed.
    navigator.serviceWorker.addEventListener("controllerchange", reloadOnce, { once: true });

    try {
      const scriptURL = new URL(document.currentScript.src, location.href);
      let registration = await navigator.serviceWorker.register(scriptURL.href, {
        scope: "/Unblocked-Games/",
        updateViaCache: "none"
      });
      await registration.update();

      // A stale registration may already control this page. Force a fresh
      // installation so the navigation response receives the COOP/COEP headers.
      if (navigator.serviceWorker.controller && !window.crossOriginIsolated) {
        await registration.unregister();
        registration = await navigator.serviceWorker.register(scriptURL.href, {
          scope: "/Unblocked-Games/",
          updateViaCache: "none"
        });
        await registration.update();
      }

      if (navigator.serviceWorker.controller && !window.crossOriginIsolated) {
        reloadOnce();
      }
    } catch (error) {
      console.error("Could not install/update the proxy isolation Service Worker:", error);
    }
  })();
}
