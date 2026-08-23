import type { MetadataRoute } from "next"

import { publishedProjects, siteText } from "@/lib/content"

const BASE = "https://www.tristanfitzwater.com"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", ...(siteText.about.length > 0 ? ["/about"] : [])]

  const staticRoutes = routes.map((route) => ({
    url: `${BASE}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  const projectRoutes = publishedProjects.map((project) => ({
    url: `${BASE}/projects/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...projectRoutes]
}
