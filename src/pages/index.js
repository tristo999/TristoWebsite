import React from "react"
import { Layout } from "@components"
import { Intro, AboutMe, WorkExperience, Projects } from "@sections"

export default function Home() {
  return (
    <Layout>
      <Intro />
      <AboutMe />
      <WorkExperience />
      <Projects />
    </Layout>
  )
}
