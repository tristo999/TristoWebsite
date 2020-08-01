import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  color: red;
  min-height: 100vh;
  padding-top: 15vh;
  float: top;
`

export default function intro() {
  return (
    <StyledContainer>
      <h1>Intro</h1>
    </StyledContainer>
  )
}
