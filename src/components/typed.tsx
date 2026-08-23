import type { TypedLine } from "@/lib/intro"

import styles from "./typed.module.css"

/**
 * Types a line of text with pure CSS: one delayed step animation per character,
 * plus a caret that advances with the typing position.
 *
 * No client JavaScript, and the full string is in the server-rendered HTML —
 * split characters are marked decorative and the real text is exposed once to
 * assistive technology. The 2020 site used a JS typing library, which meant its
 * text existed only after hydration.
 */
export function Typed({
  text,
  line,
  rest,
  className,
}: {
  text: string
  line: TypedLine
  /** When set, the caret stays blinking here after typing, then disappears. */
  rest?: { start: number; duration: number }
  className?: string
}) {
  const characters = [...text]

  return (
    <span
      className={`${styles.line} ${rest ? styles.persist : ""} ${className ?? ""}`}
      style={
        {
          "--start": `${line.start}ms`,
          "--speed": `${line.speed}ms`,
          "--gap": `${line.gap}ms`,
          ...(rest && {
            "--rest-start": `${rest.start}ms`,
            "--rest-dur": `${rest.duration}ms`,
          }),
        } as React.CSSProperties
      }
    >
      <span aria-hidden="true">
        {characters.map((character, index) => (
          <span
            className={styles.char}
            key={`${character}-${index}`}
            style={{ "--i": index } as React.CSSProperties}
          >
            {character}
          </span>
        ))}
        {rest && (
          <span className={styles.caretWindow}>
            <span className={styles.caret} />
          </span>
        )}
      </span>
      <span className="visually-hidden">{text}</span>
    </span>
  )
}
