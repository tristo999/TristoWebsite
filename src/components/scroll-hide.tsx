"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

import styles from "./scroll-hide.module.css"

/**
 * Hides the header on scroll-down and returns it on scroll-up — the one piece
 * of the 2020 site worth keeping.
 *
 * The original leaked: it added the listener as an inline arrow function and
 * then "removed" a different arrow function, so the handler was never detached.
 * This keeps a single stable reference, throttles with rAF so the work happens
 * once per frame, and marks the listener passive.
 *
 * It also holds itself back during the home page intro, so the titles really do
 * land on a blank page. Other routes render it immediately.
 */
export function ScrollHide({ children }: { children: React.ReactNode }) {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const ticking = useRef(false)
  const isHome = usePathname() === "/"

  useEffect(() => {
    lastY.current = window.scrollY

    function update() {
      const y = window.scrollY
      const delta = y - lastY.current

      // Ignore jitter, and never hide the header near the top of the page.
      if (Math.abs(delta) > 6) {
        setHidden(delta > 0 && y > 96)
        lastY.current = y
      }

      ticking.current = false
    }

    function onScroll() {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(update)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`${styles.header} ${hidden ? styles.hidden : ""}`}
      {...(isHome ? { "data-intro": "" } : {})}
    >
      {children}
    </header>
  )
}
