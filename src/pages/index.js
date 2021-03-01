import React, { Component } from "react"
import { Layout } from "@components"
import { Intro, AboutMe, WorkExperience, Projects, Contact } from "@sections"

const Index = () => {
  return (
    <Layout>
      <Intro />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default Index
