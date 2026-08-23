import Link from "next/link"

import { site } from "@/lib/content"

import { ScrollHide } from "./scroll-hide"
import styles from "./site-header.module.css"

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
] as const

export function SiteHeader() {
  return (
    <ScrollHide>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.mark} href="/" aria-label={`${site.name} — home`}>
          T
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
