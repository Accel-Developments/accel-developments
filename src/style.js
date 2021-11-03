import { createGlobalStyle } from 'styled-components'

const poppinsUrl = "https://fonts.googleapis.com/css2?family=Poppins"
export const GlobalStyle = createGlobalStyle`
  @import url("${poppinsUrl}");


  * {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    :hover {
      color: #c5c5c5;
    }
  }




  img {
    max-width: 100%;
  }


  .content {
    padding: 1rem;
  }`
