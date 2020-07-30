import React from "react"
import { Header, Nav } from "../components"
import { Main } from "../styles"
import GlobalStyle from "../styles/GlobalStyle"
import { Link } from "gatsby"

export default function Layout(props) {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Header />
      <Main>
        <h1>Wassup Dog!</h1>
        <Link to="/about/">About</Link>
        <br />
        <Link to="/contact/">Contact</Link>
        <br />
        <Link to="/missingPage/">Link that doesn't work</Link>
        <br />
        <Link to="https://www.google.com">Google Link</Link>
        <br />
        <p>I need to learn how this works...</p>
        <a href="https://www.facebook.com">
          <img src="https://source.unsplash.com/random/400x200" alt="" />
        </a>
      </Main>
      <Main>
        <h1>Div 2</h1>
      </Main>
    </div>
  )
}
