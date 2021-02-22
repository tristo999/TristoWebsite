import { createGlobalStyle } from "styled-components"
import { Theme } from "@styles"
import GeekFont from "../../static/Fonts/geek.ttf"
import "@fontsource/roboto-mono"

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Geek";
  src:  url(${GeekFont}) format("truetype");
}

html {
    background-color: ${Theme.colors.BACKGROUND_DARK};

    scroll-behavior: smooth;
}

body {
    background-color: ${Theme.colors.BACKGROUND_DARK};

    text-align: center;
    margin: 0px;
    font-family: "Roboto Mono";
}
h1 {
    font-size: 100px;
    color: ${Theme.colors.MAIN_FONT};
  }

  p {
    font-size: 20px;
    color: ${Theme.colors.MAIN_FONT};
  }

  @-webkit-keyframes fontfix {
    from { opacity: 1; }
    to   { opacity: 1; }
}
`

export default GlobalStyle
