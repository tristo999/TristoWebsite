import React from "react"
import { Header, Nav } from "../components"
import { GlobalStyle, Main } from "../styles"

export default function Layout() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Header />
    </div>
  )
}
