import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Red Hat Display', sans-serif;
    font-size: 1.6rem;
    font-family: "Arial";
  }
`;

export default GlobalStyle;
