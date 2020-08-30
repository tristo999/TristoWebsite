import React from "react"
import styled from "styled-components"
import { Section } from "@styles"

const StyledContainer = styled.div`
  padding-top: 15vh;
`

export default function workExperience() {
  return (
    <div className="work">
      <Section>
        <StyledContainer>
          <h1>Work Experience</h1>
        </StyledContainer>
      </Section>
    </div>
  )
}
