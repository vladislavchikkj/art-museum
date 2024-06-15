import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FAFAFA;
    box-sizing: border-box;
    height: 100%;
  }
    
  #root {
    height: 100%;
  }

  code {
    font-family: ${({ theme }) => theme.fonts.code};
  }
`;

export default GlobalStyles;
