import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { getProject, projects } from "@/lib/content"

import styles from "./page.module.css"

type Params = { slug: string }

/** Static export needs the full list of pages up front. */
export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) return { title: "Not found" }

  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.tagline,
      url: `/projects/${project.slug}`,
    },
  }
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  return (
    <article>
      <header className={styles.header}>
        <div className="container">
          <p className="eyebrow" data-animate="rise">
            {project.status}
          </p>
          <h1
            className={styles.title}
            data-animate="rise"
            style={{ "--delay": 70 } as React.CSSProperties}
          >
            {project.title}
          </h1>
          <p
            className={styles.tagline}
            data-animate="rise"
            style={{ "--delay": 140 } as React.CSSProperties}
          >
            {project.tagline}
          </p>

          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div className={styles.fact}>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div className={styles.fact}>
              <dt>Built with</dt>
              <dd>{project.tech.join(", ")}</dd>
            </div>
          </dl>

          {(project.links.repo ?? project.links.live) && (
            <div className={styles.actions}>
              {project.links.live && (
                <a className="button" href={project.links.live}>
                  View live
                </a>
              )}
              {project.links.repo && (
                <a className="button button--quiet" href={project.links.repo}>
                  Source
                </a>
              )}
            </div>
          )}
        </div>
      </header>

      <div className={`container ${styles.body}`}>
        <p className="prose">{project.summary}</p>

        {project.sections.map((section) => (
          <section className={`${styles.section} reveal`} key={section.heading}>
            <h2 className={styles.sectionTitle}>{section.heading}</h2>
            <div className="prose">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <Link className={styles.back} href="/projects">
          ← All projects
        </Link>
      </div>
    </article>
  )
}
