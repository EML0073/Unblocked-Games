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
    const attemptsKey = "unblockedgames-proxy-coi-attempts-v2";
    // Clear the retry flag left by the older, broken registration script.
    sessionStorage.removeItem("unblockedgames-proxy-coi-reload");

    if (window.crossOriginIsolated) {
      sessionStorage.removeItem(attemptsKey);
      console.info("Proxy isolation is active (COOP/COEP).");
      return;
    }
    if (!window.isSecureContext || !("serviceWorker" in navigator)) {
      console.error("Proxy isolation requires HTTPS and Service Worker support.");
      return;
    }

    try {
      const scriptURL = new URL(document.currentScript.src, location.href);
      const registration = await navigator.serviceWorker.register(scriptURL.href, {
        scope: "/Unblocked-Games/",
        updateViaCache: "none"
      });
      await registration.update();

      // ready resolves only when this origin has an active registration.
      await navigator.serviceWorker.ready;

      if (window.crossOriginIsolated) return;

      // A Service Worker cannot add COOP/COEP to the document that first
      // registered it. Reload a limited number of times until it controls
      // the navigation and the response headers can be applied.
      const attempts = Number(sessionStorage.getItem(attemptsKey) || "0");
      if (attempts >= 2) {
        console.error(
          "Proxy isolation failed after two reload attempts.",
          {
            controller: navigator.serviceWorker.controller?.scriptURL || null,
            active: registration.active?.scriptURL || null,
            activeState: registration.active?.state || null,
            scope: registration.scope
          }
        );
        return;
      }

      sessionStorage.setItem(attemptsKey, String(attempts + 1));
      location.reload();
    } catch (error) {
      console.error("Could not install/update the proxy isolation Service Worker:", error);
    }
  })();
}
