import type { MetadataRoute } from "next"

import { projects } from "@/lib/content"

const BASE = "https://www.tristanfitzwater.com"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/projects"].map((route) => ({
    url: `${BASE}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${BASE}/projects/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...projectRoutes]
}
