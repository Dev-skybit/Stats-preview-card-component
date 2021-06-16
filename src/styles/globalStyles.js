import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca&display=swap');

  *{
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  body{
    display: grid;
    place-content: center;

    height: 100vh;
    width: 100vw;

    background: ${colors.darkBlue};
  }
`

export default GlobalStyles