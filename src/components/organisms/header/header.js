import React from 'react'
import styled from "styled-components";
import logo from "./logo.svg"
import MenuIcn from "./menu.svg"
import {Link} from "../../atoms/Router"

/*TODO: Clean up Styling :)
*    box-shadow: 0 2px 10px rgba(57, 63, 72, 0.3);
*/
const HeaderButton = styled(Link)`
  padding: 1.25vh 1vw;
  align-self: center;
  margin: 1vh 1vw;
  background-color: rgba(158, 135, 206, 0.88);  
  font-size: 16px;
  text-align: center;
  letter-spacing: 1px;
  color: #f8f8f8;
  cursor: pointer;
  font-weight: 600;
  min-width: calc(100px + 1vw);
  width: fit-content;
  border-radius: 4rem;

  :hover {
 background-color: #9e87ce;
    transition-duration: 0.8s;
    transition: ease-in-out;
    color: #fff;
  }
  
`
const HomeBtn = styled(HeaderButton)`
  background-color: rgba(225, 225, 225, 0.42);

  :hover {
    background-color: rgba(127, 126, 134, 0.98);

  }
`


const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin:0 2rem;
  @media screen and (max-width: 1024px ){
    display: none;
  }
`



const Nav = styled.div`
  width: 100%;
  background: #0A113F;
  min-width: 100vw;
  overflow: hidden;
  z-index: 9999999;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
"logo blank menu";
  justify-content: space-between;
  align-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 2vh 5vw;

  @media screen and (max-width: 950px) {

    column-gap: 0;
    padding: 2%;
    max-height: 20%;
    width: 100%;
    display: inline-flex;

  }

  @media screen and (max-width: 500px) {

    column-gap: 0;
    padding: 5%;
    max-height: 20%;
    display: inline-flex;

  }
`

const MobileMenu = styled.div`
  svg {
    transform: translate(5vw, 0px);
  }
  @media screen and (max-width: 280px)
  {  justify-self: flex-end;
    transform: translate(-20px, 0px);
  }
  @media screen and (min-width: 500px)
  {  justify-self: flex-end;
    svg {
      transform: translate(20vw, 0px);
    }
  }
  @media screen and (min-width: 560px)
  {  justify-self: flex-end;
    svg {
      transform: translate(25vw, 0px);
    }
  }
  @media screen and (min-width: 950px)
  {
    display: none;
  }
`

const HamburgerIcon = styled(MenuIcn)`
width: 100%;

  @media screen and (min-width: 950px)
  {
    display: none;
  }
`

export const StyledLogo = styled(logo)`
    width: 100% ;

  @media screen and (max-width: 280px)
  {
   
      width: 150px;
    
  }
  
`

const NavMenu = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: menu;

`

const Wrapper = styled.div`
  justify-content: flex-start;
  pointer-events: none;
  display: flex;
  justify-self: start;
  align-self: center;
  grid-area: logo;
`

const Header = () => {

  return (
        <Nav>
            <Wrapper>
                <StyledLogo/>
            </Wrapper>
            <MobileMenu>
                <HamburgerIcon/>
            </MobileMenu>
            <NavMenu>
                <ButtonWrapper>
                      <HomeBtn to="/" >
                          Home
                      </HomeBtn>
                      <HeaderButton to="/contact">
                          Contact Us
                      </HeaderButton>
                </ButtonWrapper>
            </NavMenu>
        </Nav>
  )
}

export default Header
