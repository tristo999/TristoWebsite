import Link from "next/link"

import type { Project } from "@/lib/content"

import styles from "./project-card.module.css"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <h3 className={styles.title}>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <span className={styles.meta}>{project.year}</span>
      </div>

      <p className={styles.tagline}>{project.tagline}</p>

      <ul className={`tags ${styles.tags}`}>
        {project.tech.map((item) => (
          <li className="tag" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}
