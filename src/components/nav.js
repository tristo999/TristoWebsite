import React, { Component } from "react"
import { Nav } from "@styles"
import styled from "styled-components"
import anime from "animejs"

const StyledContainer = styled.div`
  height: 100%
  width: 90%;
  padding-left: 5%;
  padding-right: 5%;
  
`

const StyledLogo = styled.div`
  float: left;
  text-align: center;
  height: 70px;
  display: flex;
  align-items: center;
`

const StyledLink = styled.div`
  height: 70px;
  float: right;
  text-align: center;
  display: flex;
  align-items: center;
`

class NavBar extends Component {
  constructor() {
    super()
    this.state = { scroll: "scrollDown" }
  }

  animateUp = () => {
    console.log("Scroll Up")
    anime({
      targets: document.getElementsByClassName("NavBar"),
      translateY: -100,
      duration: 500,
      easing: "easeInOutQuart",
    })
  }

  animateDown = () => {
    console.log("Scroll Down")
    anime({
      targets: document.getElementsByClassName("NavBar"),
      translateY: 0,
      duration: 500,
      easing: "easeInOutQuart",
    })
  }

  handleNavigation = e => {
    const window = e.currentTarget

    if (this.prev < window.scrollY) {
      if (this.state.scroll === "scrollDown") {
        this.animateUp()
        this.setState({ scroll: "scrollUp" })
      }
    } else if (this.prev > window.scrollY) {
      if (this.state.scroll === "scrollUp") {
        this.animateDown()
        this.setState({ scroll: "scrollDown" })
      }
    }
    this.prev = window.scrollY
  }

  componentDidMount() {
    this.prev = window.scrollY
    window.addEventListener("scroll", e => this.handleNavigation(e))
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", e => this.handleNavigation(e))
  }

  render() {
    return (
      <Nav className="NavBar">
        <StyledContainer>
          <StyledLogo>Logo</StyledLogo>
          <StyledLink>Link</StyledLink>
        </StyledContainer>
      </Nav>
    )
  }
}

export default NavBar
