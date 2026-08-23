import Link from "next/link"

import styles from "./not-found.module.css"

/**
 * The line — and the original component name, `Sadness` — are carried over
 * verbatim from the 2020 site. It was the only page there with a voice.
 */
export default function Sadness() {
  return (
    <section className={`container section ${styles.page}`}>
      <p className="eyebrow">404</p>
      <h1 className={styles.title}>Sad 404 is sad.</h1>
      <p className="muted">
        The link may be out of date, or it may never have existed.
      </p>
      <p className={styles.action}>
        <Link className="button" href="/">
          Back home
        </Link>
      </p>
    </section>
  )
}
