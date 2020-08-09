import React from "react"
import styled from "styled-components"
import { Section } from "@styles"

const StyledContainer = styled.div`
  color: red;
  padding-top: 15vh;
`

export default function workExperience() {
  return (
    <Section>
      <StyledContainer>
        <h1>Work Experience</h1>
      </StyledContainer>
    </Section>
  )
}
