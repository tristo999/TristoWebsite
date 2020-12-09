import styled from "styled-components"
import Theme from "./theme"

const Nav = styled.header`
  background-color: ${Theme.colors.BACKGROUND_DARK};
  color: white;
  z-index: 1;
  position: fixed;
  height: 70px;
  width: 100%;
  top: 0;
  text-align: center;
  -webkit-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.72);
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.72);
`

export default Nav
