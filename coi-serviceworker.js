/*! COOP/COEP service worker for GitHub Pages proxy.html; based on the MIT-licensed coi-serviceworker project. */
if (typeof window === "undefined") {
  self.addEventListener("install", () => self.skipWaiting());
  self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));

  self.addEventListener("fetch", event => {
    const request = event.request;
    const url = new URL(request.url);

    // Isolate only proxy.html. Other pages in the repository are passed through unchanged.
    if (
      request.mode !== "navigate" ||
      url.origin !== self.location.origin ||
      url.pathname !== "/Unblocked-Games/proxy.html"
    ) return;

    event.respondWith(
      fetch(request).then(response => {
        if (!response || response.status === 0) return response;
        const headers = new Headers(response.headers);
        headers.set("Cross-Origin-Opener-Policy", "same-origin");
        headers.set("Cross-Origin-Embedder-Policy", "require-corp");
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers
        });
      })
    );
  });
} else {
  (() => {
    const key = "unblockedgames-proxy-coi-reload";
    if (window.crossOriginIsolated) {
      sessionStorage.removeItem(key);
      return;
    }
    if (!window.isSecureContext || !navigator.serviceWorker) {
      console.error("Proxy isolation requires HTTPS and Service Worker support.");
      return;
    }
    if (navigator.serviceWorker.controller) {
      console.warn("Proxy page is controlled but is not cross-origin isolated. Check COEP/CORP iframe responses.");
      return;
    }
    const reloadOnce = () => {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");
      window.location.reload();
    };
    navigator.serviceWorker.addEventListener("controllerchange", reloadOnce, { once: true });
    navigator.serviceWorker.register(document.currentScript.src, {
      scope: "/Unblocked-Games/"
    }).catch(error => {
      console.error("Could not register the proxy isolation Service Worker:", error);
    });
  })();
}
