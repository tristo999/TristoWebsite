import Link from "next/link"

import { ExperienceList } from "@/components/experience-list"
import { ProjectGrid } from "@/components/project-grid"
import { Typed } from "@/components/typed"
import { publishedExperience, selectedProjects, site, siteText } from "@/lib/content"
import { intro } from "@/lib/intro"

import styles from "./page.module.css"

/**
 * Intro sequence: the hero titles type out in turn on an empty page, then
 * everything else bounces in. Timing is derived from real content at build
 * time, so `--intro-end` is published here for the header — which lives in the
 * shared layout — to pick up.
 *
 * Every section below is conditional: unwritten content is omitted rather than
 * rendered as a placeholder.
 */
export default function HomePage() {
  const hasAbout = siteText.about.length > 0

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `:root{--intro-end:${intro.end}ms}`,
        }}
      />

      <section className={`container ${styles.hero}`} aria-labelledby="intro">
        {siteText.location && (
          <p className="eyebrow" data-intro="">
            {siteText.location}
          </p>
        )}

        <h1 className={styles.name} id="intro">
          <Typed text={site.name} line={intro.name} />
        </h1>

        <p className={styles.role}>
          {/* The caret rests on whichever line is last. */}
          <Typed
            text={site.role}
            line={intro.role}
            rest={intro.tagline ? undefined : intro.caretRest}
          />
        </p>

        {siteText.tagline && intro.tagline && (
          <p className={styles.tagline}>
            <Typed
              text={siteText.tagline}
              line={intro.tagline}
              rest={intro.caretRest}
            />
          </p>
        )}

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

        {publishedExperience.length > 0 && (
          <section className="container section reveal" aria-labelledby="experience">
            <div className="section-heading">
              <h2 id="experience">Experience</h2>
              {site.resume && (
                <a className="mono" href={site.resume}>
                  Full résumé →
                </a>
              )}
            </div>
            <ExperienceList items={publishedExperience} />
          </section>
        )}

        {hasAbout && (
          <section className="container section reveal" aria-labelledby="about-teaser">
            <div className="section-heading">
              <h2 id="about-teaser">About</h2>
            </div>
            <div className={styles.aboutTeaser}>
              <p className="muted">{siteText.about[0]}</p>
              <p>
                <Link href="/about">More about me →</Link>
              </p>
            </div>
          </section>
        )}
      </div>
    </>
  )
}
