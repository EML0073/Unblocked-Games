/**
 * Jokuk Cloudflare Worker proxy
 *
 * Initial allowlist-based reverse proxy. Add destination hostnames to ALLOWED_HOSTS
 * when you add new webUrl entries to Jokuk.
 */
const ALLOWED_HOSTS = new Set([
  "euskaltzaindia.eus"
]);

const MAX_URL_LENGTH = 4096;

function isAllowedTarget(url) {
  if (!["http:", "https:"].includes(url.protocol)) return false;
  if (url.username || url.password) return false;
  if (url.port && !["80", "443"].includes(url.port)) return false;
  const host = url.hostname.toLowerCase();
  return [...ALLOWED_HOSTS].some(
    allowed => host === allowed || host.endsWith("." + allowed)
  );
}

function proxyUrl(target, workerOrigin) {
  return workerOrigin + "/?url=" + encodeURIComponent(target);
}

function rewriteCss(css, baseUrl, workerOrigin) {
  return css.replace(/url\(\s*(['"]?)(?!data:|blob:|#)([^)'"]+)\1\s*\)/gi,
    (match, quote, value) => {
      try {
        const absolute = new URL(value.trim(), baseUrl);
        if (!isAllowedTarget(absolute)) return match;
        return "url(" + quote + proxyUrl(absolute.href, workerOrigin) + quote + ")";
      } catch { return match; }
    });
}

function rewriteHtml(html, baseUrl, workerOrigin) {
  // Rewrite common URL-bearing HTML attributes. Script-generated URLs may still
  // need site-specific handling and are not guaranteed to work through this proxy.
  return html.replace(
    /\b(src|href|action|poster|data-src)\s*=\s*(["'])(.*?)\2/gi,
    (match, attr, quote, value) => {
      const trimmed = value.trim();
      if (!trimmed || /^(?:#|data:|blob:|javascript:|mailto:|tel:)/i.test(trimmed)) return match;
      try {
        const absolute = new URL(trimmed, baseUrl);
        if (!isAllowedTarget(absolute)) return match;
        return attr + "=" + quote + proxyUrl(absolute.href, workerOrigin) + quote;
      } catch { return match; }
    }
  ).replace(/<base\b[^>]*>/gi, "");
}

function cleanResponseHeaders(headers) {
  const out = new Headers(headers);
  [
    "content-security-policy",
    "content-security-policy-report-only",
    "x-frame-options",
    "frame-options",
    "set-cookie",
    "cross-origin-opener-policy",
    "cross-origin-embedder-policy",
    "cross-origin-resource-policy"
  ].forEach(name => out.delete(name));
  out.set("Access-Control-Allow-Origin", "*");
  out.set("Cache-Control", "no-store");
  return out;
}

export default {
  async fetch(request) {
    const requestUrl = new URL(request.url);
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400"
        }
      });
    }

    const rawTarget = requestUrl.searchParams.get("url");
    if (!rawTarget || rawTarget.length > MAX_URL_LENGTH) {
      return new Response("Jokuk proxy ready. Provide a valid ?url=https://... destination.", {
        status: 400,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }

    let target;
    try { target = new URL(rawTarget); }
    catch {
      return new Response("Invalid destination URL.", { status: 400 });
    }

    if (!isAllowedTarget(target)) {
      return new Response("This destination is not on the Jokuk proxy allowlist.", {
        status: 403,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }

    if (!["GET", "HEAD"].includes(request.method)) {
      return new Response("Only GET and HEAD requests are currently supported.", { status: 405 });
    }

    const upstreamHeaders = new Headers();
    const accept = request.headers.get("Accept");
    if (accept) upstreamHeaders.set("Accept", accept);
    upstreamHeaders.set("User-Agent", "Jokuk-WebProxy/1.0");

    let upstream;
    try {
      upstream = await fetch(target.href, {
        method: request.method,
        headers: upstreamHeaders,
        redirect: "follow"
      });
    } catch {
      return new Response("Could not connect to the destination website.", { status: 502 });
    }

    const headers = cleanResponseHeaders(upstream.headers);
    const contentType = (upstream.headers.get("content-type") || "").toLowerCase();
    const workerOrigin = requestUrl.origin;

    if (contentType.includes("text/html")) {
      let body = await upstream.text();
      body = rewriteHtml(body, target.href, workerOrigin);
      headers.set("Content-Type", "text/html; charset=utf-8");
      headers.delete("Content-Length");
      return new Response(body, { status: upstream.status, headers });
    }

    if (contentType.includes("text/css")) {
      let body = await upstream.text();
      body = rewriteCss(body, target.href, workerOrigin);
      headers.set("Content-Type", "text/css; charset=utf-8");
      headers.delete("Content-Length");
      return new Response(body, { status: upstream.status, headers });
    }

    return new Response(upstream.body, { status: upstream.status, headers });
  }
};
