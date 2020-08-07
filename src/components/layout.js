import React, { Component } from "react"
import { Header, Nav } from "@components"
import { GlobalStyle, Main } from "@styles"

class Layout extends Component {
  render() {
    return (
      <Main>
        <GlobalStyle />
        <Nav />
        <Header />
        {this.props.children}
      </Main>
    )
  }
}

export default Layout
