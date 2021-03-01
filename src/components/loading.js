import React, { useEffect } from "react"
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
  text-align: center;
  font-weight: 10;
  text-align: center;
  margin: auto;
  position: fixed;
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
  position: fixed;
  bottom: 125vh;
`
const LoadingAnim = ({ finishLoading }) => {
  const animate = () => {
    const loading = anime
      .timeline({
        complete: () => {
          finishLoading()
          console.log("Finished Loading!")
        },
      })
      .add({ targets: ".img", translateX: 250, duration: 10000 })
  }

  useEffect(() => {
    animate()
    console.log("ANIMATING!")
  }, [])

  return (
    <div className="intro">
      <StyledContainer>
        <div>
          <StyledLogoImg className="img">T</StyledLogoImg>
        </div>
        <div>
          <StyledLogoBackground></StyledLogoBackground>
        </div>
      </StyledContainer>
    </div>
  )
}

export default LoadingAnim
