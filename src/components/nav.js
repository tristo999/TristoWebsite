import React, { Component } from "react"
import { Theme, Nav } from "@styles"
import styled from "styled-components"
import anime from "animejs"
import { Link } from "react-scroll"

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

const StyledContainer = styled.div`
  height: 100%; mmnbg
  width: 92.5%;
  padding-left: 2.5%;
  padding-right: 2.5%;
`

const StyledLogo = styled.a`
  float: left;
  text-align: center;
  height: 70px;
  display: flex;
  align-items: center;
  text-decoration: none;
`

const StyledLink = styled.p`
  justify-content: center;
  display: flex;
  align-items: center;
  padding-left: 40px;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    color: ${Theme.colors.LINK_COLOR};
    transition: 0.5s;
    text-decoration: underline;
  }
`

const StyledLinkList = styled.div`
  height 100%;
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
          <StyledLogo href="http://localhost:8000/">
            <StyledLogoImg>T</StyledLogoImg>
          </StyledLogo>
          <StyledLinkList>
            {/*
            <StyledLink>
              <Link to="about" smooth={true} duration={10}>
                About
              </Link>
            </StyledLink>
            <StyledLink>
              <Link to="work" smooth={true} duration={10}>
                Work
              </Link>
            </StyledLink>
            <StyledLink>
              <Link to="projects" smooth={true} duration={10}>
                Projects
              </Link>
            </StyledLink>
            <StyledLink>
              <Link to="contact" smooth={true} duration={10}>
                Contact
              </Link>
            </StyledLink>
            */}
            <StyledLink>
              <Link to="blargh" smooth={true} duration={10}>
                Resume
              </Link>
            </StyledLink>
          </StyledLinkList>
        </StyledContainer>
      </Nav>
    )
  }
}

export default NavBar
