import { createGlobalStyle } from "styled-components"
import { Theme } from "@styles"
import GeekFont from "../../static/Fonts/geek.ttf"

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Geek";
  src:  url(${GeekFont}) format("truetype");
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: ${Theme.colors.BACKGROUND_DARK};
    text-align: center;
    margin: 0px;
}

h1 {
    font-size: 100px;
    color: ${Theme.colors.MAIN_FONT};
  }

  p {
    font-size: 20px;
    color: ${Theme.colors.MAIN_FONT};
  }
`

export default GlobalStyle
