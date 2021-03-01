import React, { Component, useState, useEffect } from "react"
import { Header, Nav, Loading } from "@components"
import { GlobalStyle, Main } from "@styles"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        {this.state.isLoading ? (
          <div>
            <Loading
              finishLoading={() => this.setState({ isLoading: false })}
            />
          </div>
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
