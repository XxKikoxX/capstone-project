import { createGlobalStyle } from "styled-components";
/* @import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap'); */

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
    background-size:60%;
    
    
  }
`;
