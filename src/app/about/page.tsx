import type { Metadata } from "next"

import { site, siteText } from "@/lib/content"

export const metadata: Metadata = {
  title: "About",
  description: siteText.tagline ?? `${site.name} — ${site.role}`,
  alternates: { canonical: "/about" },
  // Nothing links here until there is something to read.
  robots: siteText.about.length > 0 ? undefined : { index: false, follow: true },
}

export default function AboutPage() {
  return (
    <section className="container section" aria-labelledby="about">
      <div className="section-heading">
        <h2 id="about">About</h2>
      </div>

      <div className="prose">
        {siteText.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="muted">
          Reach me at <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </section>
  )
}
