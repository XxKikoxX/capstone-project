import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
    /* background: #91fff5; */
    background-image: url("/Logo.png");
    background-repeat: repeat;
  }
`;
