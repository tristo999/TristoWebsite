import type { Project } from "@/lib/content"

import { ProjectCard } from "./project-card"
import styles from "./project-grid.module.css"

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className={styles.grid} role="list">
      {projects.map((project, index) => (
        <li key={project.slug} style={{ "--i": index } as React.CSSProperties}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  )
}
