// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages serves this project from a subpath. The Lovable preview and the
// published Lovable app are served from the domain root, so the base path is only
// applied when BASE_PATH is set (the GitHub Actions workflow sets it).
const basePath = process.env["BASE_PATH"] ?? "/";

export default defineConfig({
  vite: {
    base: basePath,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    router: { basepath: basePath },
    // Every route is static hardcoded content, so render it to HTML at build time.
    pages: [{ path: basePath }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
