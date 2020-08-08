import React from "react"
import styled from "styled-components"
import { Section } from "@styles"

const StyledContainer = styled.div`
  color: red;
  margin: auto;
`

export default function aboutMe() {
  return (
    <Section>
      <StyledContainer>
        <h1>About Me</h1>
      </StyledContainer>
    </Section>
  )
}
