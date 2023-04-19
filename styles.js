import { createGlobalStyle } from "styled-components";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});
console.log(nunito.style.fontFamily);
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    background: #91fff5;
    background-image:url("/Background1.svg");
    background-repeat: repeat;
    background-size: 100%;
    font-family: ${nunito.style.fontFamily}; 
     }
`;

/* -webkit-filter:blur(px); */
