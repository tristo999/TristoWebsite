import React, { Component } from "react"
import { Nav } from "@styles"
import anime from "animejs"

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
      duration: 1000,
    })
  }

  animateDown = () => {
    console.log("Scroll Down")
    anime({
      targets: document.getElementsByClassName("NavBar"),
      translateY: 0,
      duration: 1000,
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
        <h1>This is the header</h1>
      </Nav>
    )
  }
}

export default NavBar
