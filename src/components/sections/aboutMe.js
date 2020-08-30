import React from "react"
import styled from "styled-components"
import { Section } from "@styles"
import { Zoom } from "react-reveal"

const StyledContainer = styled.div`
  padding-top: 150px;
`

const aboutMe = () => {
  return (
    <div className="about">
      <Zoom>
        <Section>
          <StyledContainer>
            <h1>About Me</h1>
          </StyledContainer>
        </Section>
      </Zoom>
    </div>
  )
}

export default aboutMe
