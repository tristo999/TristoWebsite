import React from "react"
import styled from "styled-components"
import { Section, Theme } from "@styles"
import Typing from "react-typing-animation"

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
  padding-left: 8px;
`

export default function intro() {
  return (
    <div className="intro">
      <Section>
        <StyledContainer>
          <Typing>
            <Typing.Delay ms={1000} />
            <Name>Tristan Fitzwater</Name>
            <Typing.Delay ms={1000} />
            <Lower>I suck at websites :(</Lower>
          </Typing>
        </StyledContainer>
      </Section>
    </div>
  )
}
