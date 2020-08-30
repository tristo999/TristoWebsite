import React, { Component } from "react"
import { Layout } from "@components"
import { Intro, AboutMe, WorkExperience, Projects, Contact } from "@sections"

class Index extends Component {
  render() {
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
}

export default Index
