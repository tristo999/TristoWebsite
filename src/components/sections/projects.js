import React from "react"
import styled from "styled-components"
import { Section } from "@styles"

const StyledContainer = styled.div`
  color: red;
  padding-top: 15vh;
`

export default function projects() {
  return (
    <Section>
      <StyledContainer>
        <h1>Projects</h1>
      </StyledContainer>
    </Section>
  )
}
