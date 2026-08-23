import { site, siteText } from "./content"

/**
 * Intro timing, computed from the actual content at build time.
 *
 * The hero titles type out one after another, and only then does the rest of
 * the page arrive. Durations derive from real string lengths, so editing
 * content/site.json retimes the whole sequence.
 *
 * A title that hasn't been written yet is simply absent — the sequence closes
 * up around it and the resting caret moves to whichever line ends up last.
 */

/** Milliseconds per character. Longer lines type faster so they don't drag. */
const SPEED = {
  name: 42,
  role: 28,
  tagline: 13,
} as const

/** Beat between one line finishing and the next starting. */
const GAP = 180

/** Blank-page hold before the first character lands. */
const LEAD_IN = 250

/** Hold after the last title lands, before the page bounces in. */
const HOLD = 650

/** How long the resting caret lingers after the page has arrived. */
const CARET_OUTRO = 1200

export type TypedLine = {
  /** When this line starts typing, in ms. */
  start: number
  /** Milliseconds per character. */
  speed: number
  /** How long this line takes to finish typing, in ms. */
  duration: number
  /** Beat before the next line starts — the caret rests here. */
  gap: number
}

function schedule() {
  let cursor = LEAD_IN

  const line = (text: string, speed: number): TypedLine => {
    const start = cursor
    const duration = [...text].length * speed
    cursor = start + duration + GAP
    return { start, speed, duration, gap: GAP }
  }

  const name = line(site.name, SPEED.name)
  const role = line(site.role, SPEED.role)
  const tagline = siteText.tagline ? line(siteText.tagline, SPEED.tagline) : null

  const last = tagline ?? role
  const titlesEnd = last.start + last.duration
  const end = cursor + HOLD

  /**
   * Once the last line is typed the caret stops moving, sits blinking at the
   * end of it, then disappears after the page has finished bouncing in.
   */
  const caretRest = {
    start: titlesEnd,
    duration: end + CARET_OUTRO - titlesEnd,
  }

  return { name, role, tagline, titlesEnd, caretRest, end }
}

export const intro = schedule()
