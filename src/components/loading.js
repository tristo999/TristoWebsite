import React from "react"
import styled from "styled-components"
import anime from "animejs"

const StyledContainer = styled.div`
  height: 100px;
`

const StyledLogoImg = styled.h2`
  line-height: 62px;
  padding-top: px;
  padding-left: 1.5px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-family: Geek;
  font-size: 50px;
  color: #66fcf1;
  border-radius: 30px;
  background: #1f2833;
  text-decoration: none;
  margin: auto;
  text-align: center;
  transition: 0.5s;
  font-weight: 10;
  font-family: Geek;
  :hover {
    background: #45a29e;
    transition: 0.5s;
  }
`
const StyledLogoBackground = styled.h2`
  line-height: 62px;
  padding-top: px;
  padding-left: 1.5px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-family: Geek;
  font-size: 50px;
  color: #66fcf1;
  border-radius: 30px;
  background: #1f2833;
  text-decoration: none;
  margin: auto;
  text-align: center;
  transition: 0.5s;
  font-weight: 10;
  font-family: Geek;
  :hover {
    background: #45a29e;
    transition: 0.5s;
  }
`

export default function loading() {
  return (
    <div className="intro">
      <StyledContainer>
        <div>
          <StyledLogoImg>T</StyledLogoImg>
        </div>
        <div>
          <StyledLogoBackground></StyledLogoBackground>
        </div>
      </StyledContainer>
    </div>
  )
}
