import React from "react"
import styled from "styled-components"
import { Section } from "@styles"

const StyledContainer = styled.div`
  color: red;
`

export default function intro() {
  return (
    <Section>
      <StyledContainer>
        <h1>Intro</h1>
      </StyledContainer>
    </Section>
  )
}
