import Link from "next/link"

import { ExperienceList } from "@/components/experience-list"
import { ProjectGrid } from "@/components/project-grid"
import { Typed } from "@/components/typed"
import { experience, selectedProjects, site } from "@/lib/content"
import { intro } from "@/lib/intro"

import styles from "./page.module.css"

/**
 * Intro sequence: name, role and tagline type out in turn on an empty page,
 * then everything else bounces in. The timing is derived from the real content
 * at build time, so `--intro-end` is published here for the header (which lives
 * in the shared layout) to pick up.
 */
export default function HomePage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `:root{--intro-end:${intro.end}ms}`,
        }}
      />

      <section className={`container ${styles.hero}`} aria-labelledby="intro">
        {/* Arrives with the rest of the page, not with the titles. */}
        <p className="eyebrow" data-intro="">
          {site.location}
        </p>

        <h1 className={styles.name} id="intro">
          <Typed text={site.name} line={intro.name} />
        </h1>

        <p className={styles.role}>
          <Typed text={site.role} line={intro.role} />
        </p>

        <p className={styles.tagline}>
          <Typed text={site.tagline} line={intro.tagline} rest={intro.caretRest} />
        </p>

        <div className={styles.actions} data-intro="late">
          <Link className="button" href="/projects">
            See the work
          </Link>
          {site.resume && (
            <a className="button button--quiet" href={site.resume}>
              Résumé
            </a>
          )}
          <a className="button button--quiet" href={`mailto:${site.email}`}>
            Get in touch
          </a>
        </div>
      </section>

      {/* Everything below the titles arrives together, then each section keeps
          its own scroll-driven reveal on the way down. */}
      <div data-intro="later">
        <section className="container section reveal" aria-labelledby="work">
          <div className="section-heading">
            <h2 id="work">Selected work</h2>
            <Link className="mono" href="/projects">
              All projects →
            </Link>
          </div>
          <ProjectGrid projects={selectedProjects} />
        </section>

        <section className="container section reveal" aria-labelledby="experience">
          <div className="section-heading">
            <h2 id="experience">Experience</h2>
            {site.resume && (
              <a className="mono" href={site.resume}>
                Full résumé →
              </a>
            )}
          </div>
          <ExperienceList items={experience} />
        </section>

        <section className="container section reveal" aria-labelledby="about-teaser">
          <div className="section-heading">
            <h2 id="about-teaser">About</h2>
          </div>
          <div className={styles.aboutTeaser}>
            <p className="muted">{site.tagline}</p>
            <p>
              <Link href="/about">More about me →</Link>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
