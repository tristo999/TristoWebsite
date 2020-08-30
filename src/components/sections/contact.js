import React from "react"
import styled from "styled-components"
import { Section, Fonts } from "@styles"
import { Zoom } from "react-reveal"

const StyledContainer = styled.div`
  width: 100%;
  text-align: left;
  padding: 250px 0px;

  h1 {
    font-size: 100px;
  }
`

export default function contact() {
  return (
    <div className="contact">
      <Zoom>
        <Section>
          <StyledContainer>
            <h1>Contact Me</h1>
          </StyledContainer>
        </Section>
      </Zoom>
    </div>
  )
}
