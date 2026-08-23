/**
 * Content-first guardrail. Reports unwritten TODO fields once, with paths, so
 * the build log says exactly what's still missing. Never fails the build.
 */
import { readFileSync } from "node:fs"

const files = ["content/site.json", "content/experience.json", "content/projects.json"]
const found = []

function walk(value, path) {
  if (typeof value === "string") {
    if (value.includes("TODO")) found.push(path)
  } else if (Array.isArray(value)) {
    value.forEach((v, i) => walk(v, `${path}[${i}]`))
  } else if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) walk(v, `${path}.${k}`)
  }
}

for (const file of files) {
  walk(JSON.parse(readFileSync(file, "utf8")), file.replace(/^content\//, ""))
}

if (found.length === 0) {
  console.log("✓ content: no unwritten fields")
} else {
  console.warn(
    `\n⚠  content: ${found.length} unwritten field${found.length === 1 ? "" : "s"} still marked TODO\n`
  )
  for (const path of found) console.warn(`   ${path}`)
  console.warn("")
}
