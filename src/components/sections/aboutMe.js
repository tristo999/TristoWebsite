import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  color: red;
  min-height: 100vh;
  padding-top: 15vh;
`

export default function aboutMe() {
  return (
    <StyledContainer>
      <h1>About Me</h1>
    </StyledContainer>
  )
}
