import styled, { createGlobalStyle } from "styled-components";


export  const Styles = {
    Wrapper: styled.main`
    display: flex;
  `,
};



export const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    box-sizing: content-box;    
  }  

  body {
    font-size: 1rem;
    overflow-x: hidden;
    font-family: "HelveticaNeueLT Std", sans-serif;

  }
  
  
`;
