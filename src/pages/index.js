import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <Header />
      <Layout />
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
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
