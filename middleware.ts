// Vercel Edge Middleware.
//
// Why this exists: this is a client-only SPA, so vercel.json rewrites every
// unmatched path to /index.html, which Vercel serves with a 200 status —
// including for genuinely invalid URLs. That's a "soft 404": the visible
// page says "not found," but search engines see a 200 and may index the
// URL anyway. This middleware checks the request path against a manifest
// of real routes (generated at build time by generate_valid_paths.cjs) and
// returns a real 404 status for anything else, while still serving the
// app shell so the client-side NotFound page renders as usual.
//
// IMPORTANT: verify this in a Vercel preview deployment before relying on
// it — Edge Middleware behavior should be confirmed against the actual
// hosting environment, which wasn't available while drafting this.

export const config = {
  // Skip static assets (anything with a file extension) and the manifest
  // itself, so this only runs on page navigations.
  matcher: '/((?!valid-paths\\.json|.*\\.[a-zA-Z0-9]+$).*)',
};

interface ValidPaths {
  staticPaths: string[];
  categories: string[];
  slugs: string[];
}

let cached: ValidPaths | null = null;

async function loadValidPaths(origin: string): Promise<ValidPaths> {
  if (cached) return cached;
  const res = await fetch(new URL('/valid-paths.json', origin));
  cached = (await res.json()) as ValidPaths;
  return cached;
}

function isValidPath(pathname: string, manifest: ValidPaths): boolean {
  if (manifest.staticPaths.includes(pathname)) return true;

  const categoryMatch = pathname.match(/^\/category\/([^/]+)$/);
  if (categoryMatch) {
    return manifest.categories.includes(decodeURIComponent(categoryMatch[1]));
  }

  const slugMatch = pathname.match(/^\/([^/]+)$/);
  if (slugMatch) {
    return manifest.slugs.includes(slugMatch[1]);
  }

  return false;
}

export default async function middleware(request: Request) {
  const url = new URL(request.url);

  try {
    const manifest = await loadValidPaths(url.origin);
    if (isValidPath(url.pathname, manifest)) {
      return; // valid route — let the normal SPA rewrite handle it
    }
  } catch {
    // If the manifest can't be loaded, fail open (don't 404 real traffic
    // over an infrastructure hiccup) and let the normal rewrite handle it.
    return;
  }

  // Unknown path: serve the app shell so the client-side 404 UI still
  // renders, but respond with a real 404 status.
  const indexRes = await fetch(new URL('/index.html', url.origin));
  const body = await indexRes.text();
  return new Response(body, {
    status: 404,
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}
