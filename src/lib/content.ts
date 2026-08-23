import { z } from "zod"

import experienceJson from "@content/experience.json"
import projectsJson from "@content/projects.json"
import siteJson from "@content/site.json"

/**
 * The content seam.
 *
 * Components import from this file and never touch JSON directly. The data
 * happens to come from local files today; swapping in a CMS, an API, or MDX
 * later means editing this module and nothing else.
 *
 * Everything is validated at build time, so malformed content fails the build
 * instead of rendering a blank section in production.
 */

const socialSchema = z.object({
  label: z.string().min(1),
  href: z.url(),
})

const siteSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  tagline: z.string().min(1),
  email: z.email(),
  location: z.string().min(1),
  /** null until a PDF exists — the link hides itself rather than 404ing. */
  resume: z.string().min(1).nullable(),
  socials: z.array(socialSchema),
})

const experienceSchema = z.object({
  company: z.string().min(1),
  role: z.string().min(1),
  /** YYYY-MM */
  start: z.string().regex(/^\d{4}-\d{2}$/),
  /** YYYY-MM, or null for "present" */
  end: z
    .string()
    .regex(/^\d{4}-\d{2}$/)
    .nullable(),
  location: z.string().min(1),
  summary: z.string().min(1),
  highlights: z.array(z.string().min(1)),
  tech: z.array(z.string().min(1)),
})

const projectSchema = z.object({
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/, "slug must be kebab-case: lowercase, digits, hyphens"),
  title: z.string().min(1),
  tagline: z.string().min(1),
  year: z.string().min(1),
  status: z.enum(["shipped", "in progress", "archived"]),
  role: z.string().min(1),
  featured: z.boolean(),
  tech: z.array(z.string().min(1)),
  links: z.object({
    repo: z.url().optional(),
    live: z.url().optional(),
  }),
  summary: z.string().min(1),
  sections: z.array(
    z.object({
      heading: z.string().min(1),
      body: z.array(z.string().min(1)).min(1),
    })
  ),
})

export type Social = z.infer<typeof socialSchema>
export type Site = z.infer<typeof siteSchema>
export type Experience = z.infer<typeof experienceSchema>
export type Project = z.infer<typeof projectSchema>

/** Parse with a readable error, so a bad field names itself in the build log. */
function parse<T>(schema: z.ZodType<T>, data: unknown, label: string): T {
  const result = schema.safeParse(data)
  if (!result.success) {
    const issues = result.error.issues
      .map((i) => `  - ${i.path.join(".") || "(root)"}: ${i.message}`)
      .join("\n")
    throw new Error(`Invalid content in ${label}:\n${issues}`)
  }
  return result.data
}

export const site: Site = parse(siteSchema, siteJson, "content/site.json")

export const experience: Experience[] = parse(
  z.array(experienceSchema),
  experienceJson,
  "content/experience.json"
)

export const projects: Project[] = parse(
  z.array(projectSchema),
  projectsJson,
  "content/projects.json"
)

/** Slugs must be unique — they become URLs. */
const seen = new Set<string>()
for (const project of projects) {
  if (seen.has(project.slug)) {
    throw new Error(`Duplicate project slug in content/projects.json: ${project.slug}`)
  }
  seen.add(project.slug)
}

export const featuredProjects = projects.filter((p) => p.featured)

/**
 * What the home page shows: featured first, then the rest, capped. Keeps the
 * section populated even before anything is flagged featured.
 */
export const selectedProjects = [...projects]
  .sort((a, b) => Number(b.featured) - Number(a.featured))
  .slice(0, 4)

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

/** "2023-01" -> "Jan 2023". `null` means present. */
export function formatMonth(value: string | null): string {
  if (value === null) return "Present"
  const [year, month] = value.split("-")
  const index = Number(month) - 1
  const names = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  return `${names[index] ?? month} ${year}`
}

/**
 * Content-first guardrail: surface unwritten content in the build log rather
 * than letting "TODO:" quietly ship to production. Warns, never fails — a
 * half-written site you can see beats a build you can't run.
 */
function countPlaceholders(value: unknown): number {
  if (typeof value === "string") return value.includes("TODO") ? 1 : 0
  if (Array.isArray(value))
    return value.reduce<number>((n, v) => n + countPlaceholders(v), 0)
  if (value && typeof value === "object") {
    return Object.values(value).reduce<number>((n, v) => n + countPlaceholders(v), 0)
  }
  return 0
}

const placeholderCount =
  countPlaceholders(siteJson) +
  countPlaceholders(experienceJson) +
  countPlaceholders(projectsJson)

/** Dev server nags continuously; the build reports once via scripts/check-content.mjs. */
if (placeholderCount > 0 && process.env.NODE_ENV === "development") {
  console.warn(
    `
  ⚠  ${placeholderCount} unwritten content field${placeholderCount === 1 ? "" : "s"} still marked TODO in /content.
`
  )
}
