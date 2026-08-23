import Link from "next/link"

export default function NotFound() {
  return (
    <section className="container section">
      <p className="eyebrow">404</p>
      <h1 style={{ fontSize: "var(--step-3)", marginTop: "var(--space-2xs)" }}>
        This page doesn&apos;t exist
      </h1>
      <p className="muted" style={{ marginTop: "var(--space-s)" }}>
        The link may be out of date, or it may never have existed.
      </p>
      <p style={{ marginTop: "var(--space-l)" }}>
        <Link className="button" href="/">
          Back home
        </Link>
      </p>
    </section>
  )
}
