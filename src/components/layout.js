import React from "react"
import { Header, Nav } from "@components"
import { GlobalStyle, Main } from "@styles"

export default function Layout(props) {
  return (
    <Main>
      <GlobalStyle />
      <Nav />
      <Header />
      {props.children}
    </Main>
  )
}
