import React from "react"
import { Layout } from "../components"
import {
  Intro,
  AboutMe,
  WorkExperience,
  Projects,
} from "../components/sections"
import { Main } from "../styles"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Main>
      <Layout />
      <Intro />
      <AboutMe />
      <WorkExperience />
      <Projects />
    </Main>
  )
}
