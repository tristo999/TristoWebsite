import type { NextConfig } from "next"

/**
 * Static export: `next build` emits plain HTML/CSS/JS into ./out, which is what
 * GitHub Pages serves. There is no server in production.
 *
 * To go dynamic later (route handlers, server actions, auth, a database):
 * delete `output: "export"`, deploy to a host with compute, repoint DNS.
 * Nothing else in this codebase needs to change.
 */
const nextConfig: NextConfig = {
  output: "export",
  // Pages serves directories, so /about/ resolves to /about/index.html.
  trailingSlash: true,
  // The Image Optimization API needs a server; static export has none.
  images: { unoptimized: true },
  reactStrictMode: true,
}

export default nextConfig
