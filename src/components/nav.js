import React, { Component } from "react"
import { Nav } from "@styles"
import styled from "styled-components"
import anime from "animejs"
import logo from "../../static/tempLogo.png"
import { Link } from "react-scroll"

const StyledLogoImg = styled.img`
  width: 50px;
  cursor: pointer;
`

const StyledContainer = styled.div`
  height: 100%;
  width: 92.5%;
  padding-left: 5%;
  padding-right: 2.5%;
`

const StyledLogo = styled.a`
  float: left;
  text-align: center;
  height: 70px;
  display: flex;
  align-items: center;
`

const StyledLink = styled.p`
  justify-content: center;
  width: 100px;
  display: flex;
  align-items: center;
  color: green;
  cursor: pointer;
  text-decoration: underline;

  :hover {
    color: blue;
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
          <StyledLogo>
            <Link to="about" smooth={true} duration={10}>
              <StyledLogoImg src={logo} />
            </Link>
          </StyledLogo>
          <StyledLinkList>
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
          </StyledLinkList>
        </StyledContainer>
      </Nav>
    )
  }
}

export default NavBar
