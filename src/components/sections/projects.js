import React from "react"
import styled from "styled-components"
import { Section } from "@styles"

const StyledContainer = styled.div`
  padding-top: 15vh;
`

export default function projects() {
  return (
    <div className="projects">
      <Section>
        <StyledContainer>
          <h1>Projects</h1>
        </StyledContainer>
      </Section>
    </div>
  )
}
