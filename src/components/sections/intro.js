import React from "react"
import styled from "styled-components"
import { Section, Fonts, Theme } from "@styles"

const StyledContainer = styled.div`
  text-align: left;
  height: 100px;
  padding-top: 30vh;
  h1 {
    font-size: 100px;
  }
`

const Name = styled.h1`
  margin: 0;
`

const Lower = styled.p`
  color: ${Theme.colors.LINK_COLOR};
`

export default function intro() {
  return (
    <div className="intro">
      <Section>
        <StyledContainer>
          <Name>Tristan Fitzwater</Name>
          <Lower>I suck at websites :(</Lower>
        </StyledContainer>
      </Section>
    </div>
  )
}
