import React from 'react'
import styled from "styled-components";
import {StyledLogo} from "../header/header";


const FooterContainer = styled.footer `
  width: 100%;
  min-width: 100vw;
  background: #333333;
  color: #808080;
  padding: 5vh 10vw;

`


const Logo = styled(StyledLogo)`
  width: calc(1rem + 15vw);
  margin-bottom: 3vh;
  @media screen and (max-width: 600px) {
    width: calc(1rem + 60vw);
    justify-self: center;
    margin-bottom: 1vh;

  }

`

const Footer = () => {
    return (
        <FooterContainer>
                    <Logo/>
        </FooterContainer>
    )
}

export default Footer