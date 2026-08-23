import { formatMonth, type Experience } from "@/lib/content"

import styles from "./experience-list.module.css"

export function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <ol className={styles.list} role="list">
      {items.map((item) => (
        <li className={styles.role} key={`${item.company}-${item.start}`}>
          <p className={styles.dates}>
            {formatMonth(item.start)} — {formatMonth(item.end)}
          </p>

          <div className={styles.body}>
            <h3 className={styles.title}>
              {item.role} <span className={styles.company}>· {item.company}</span>
            </h3>
            <p className={styles.summary}>{item.summary}</p>

            {item.highlights.length > 0 && (
              <ul className={styles.highlights}>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}

            <ul className={`tags ${styles.tags}`}>
              {item.tech.map((tech) => (
                <li className="tag" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}
