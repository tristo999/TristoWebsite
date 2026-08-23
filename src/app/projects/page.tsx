import type { Metadata } from "next"

import { ProjectGrid } from "@/components/project-grid"
import { projects } from "@/lib/content"

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built, and what I learned building them.",
  alternates: { canonical: "/projects" },
}

export default function ProjectsPage() {
  return (
    <section className="container section reveal" aria-labelledby="projects">
      <div className="section-heading">
        <h2 id="projects">Projects</h2>
        <p className="faint mono">
          {projects.length} {projects.length === 1 ? "project" : "projects"}
        </p>
      </div>
      <ProjectGrid projects={projects} />
    </section>
  )
}
