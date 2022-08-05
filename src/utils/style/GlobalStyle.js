// styled
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    min-height: 100vh;
  }
  
`;