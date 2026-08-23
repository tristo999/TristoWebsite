import { site } from "@/lib/content"

import styles from "./site-footer.module.css"

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <ul className={styles.links}>
          <li>
            <a className={styles.link} href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </li>
          {site.socials.map((social) => (
            <li key={social.label}>
              <a
                className={styles.link}
                href={social.href}
                rel="me noreferrer"
                target="_blank"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.colophon}>
          Built with Next.js. Source on{" "}
          <a href="https://github.com/tristo999/TristoWebsite">GitHub</a>.
        </p>
      </div>
    </footer>
  )
}
