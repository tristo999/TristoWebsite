import React, { Component } from "react"
import { Header, Nav, Loading } from "@components"
import { GlobalStyle, Main } from "@styles"

const isLoading = true

class Layout extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        {isLoading ? (
          <Loading />
        ) : (
          <Main>
            <Nav />
            <Header />
            {this.props.children}
          </Main>
        )}
      </div>
    )
  }
}

export default Layout
