import type { Metadata } from "next"

import { site } from "@/lib/content"

export const metadata: Metadata = {
  title: "About",
  description: site.tagline,
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <section className="container section" aria-labelledby="about">
      <div className="section-heading">
        <h2 id="about">About</h2>
      </div>

      <div className="prose">
        <p>TODO: who you are and what you build. Two or three sentences, plain.</p>
        <p>
          TODO: how you got here — the path, honestly told. Not a career summary, the
          actual shape of it.
        </p>
        <p>
          TODO: what you care about in the work. What you&apos;re good at, what
          you&apos;re still bad at.
        </p>
        <p>TODO: something human. What you do when you&apos;re not doing this.</p>
        <p className="muted">
          Reach me at <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </section>
  )
}
