import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    /* font-family: system-ui; */
    font-family: 'Nunito', sans-serif;    background: #91fff5;
    background-image:url("/Background1.svg");
    background-repeat: repeat;
    background-size: 100%;
    
    
    
  }
`;
/* -webkit-filter:blur(px); */