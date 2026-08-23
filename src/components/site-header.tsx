import Link from "next/link"

import { site, siteText } from "@/lib/content"

import { ScrollHide } from "./scroll-hide"
import styles from "./site-header.module.css"

/** About only appears once something is written there. */
const links = [
  ...(siteText.about.length > 0 ? [{ href: "/about", label: "About" }] : []),
  { href: "/projects", label: "Projects" },
]

export function SiteHeader() {
  return (
    <ScrollHide>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.mark} href="/" aria-label={`${site.name} — home`}>
          <span className={styles.glyph} aria-hidden="true">
            T
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Main">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link className={styles.link} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
            {site.resume && (
              <li>
                <a className={styles.link} href={site.resume}>
                  Résumé
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </ScrollHide>
  )
}
