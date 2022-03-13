import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    
    background-image: linear-gradient(to left top, #e28743, #ec716c, #db6a96, #b272b6, #797cc1, #5b78b9, #3c73ae, #106ea1, #086095, #055389, #05467d, #063970);
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;
    @media ${(props) => props.theme.breakpoints.sm} {
      background: ${(props) => props.theme.colors.background1};
  }

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
