import React  from 'react'
import styled from "styled-components";
import Button from "../ui-components/Button";
import Logo from "./logo.svg"

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 3rem;
  @media screen and (max-width: 1024px ){
    display: none;
  }
`


const Navbar = {
    Wrapper: styled.nav`
      background-color: rgba(255, 255, 255, 0.71);
      backdrop-filter: blur(10px);
      align-self: flex-start;
      padding: 15px 50px;
      height: calc(1vw + 10vh);
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-width: 100vw;
      max-width: 100%;
      overflow: hidden;
      @media screen and (max-width: 1024px){
        padding:  2vh 5vw;
      }

      // 40em == 640vw
      //TODO: Suggest bottom nav for mobile devices.

      /*      @media  screen and (max-width: 40em) {
              position: fixed;
              width: 100vw;
              bottom: 0;
            }*/
    `,
    Logo: styled.img`
      max-height: calc(4rem + 1vw);
      padding: 0.5rem ;
      @media screen and (max-width: 50rem){
        max-height: calc(3rem + 1vw);
      }
    `,
    Items: styled.ul`
      display: flex;
      max-width: 30em;
      justify-self: center;
      position: relative;
      @media screen and (max-width:1024px){
        display: none;
      }
    `,
    Item: styled.li`
      margin: 0 2.5vw;
      width: calc(50px + 1vw);
      font-size: 1.25em;
      text-align: center;
      cursor: pointer;
      color: rgba(52, 51, 51, 0.84);
      position: relative;
      letter-spacing: 0.1rem;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;

      &::after {
        position: absolute;
        content: "";
        top: 100%;
        left: 5%;
        right: 5%;
        width: 90%;
        height: 0.2rem;
        background: #735469;
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.5s;
      }

      &:hover {
        color: #735469;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }

    `,
    HeaderButton: styled(Button)`
      padding: 1.25rem 0;
      align-self: center;
      background-color: ${props => props.login ? "rgba(119, 84, 105, 1)" : props.openacc ? "rgba(35, 95, 141, 1)" : "none"};

      &:hover{
        background-color: ${props => props.login ? "rgb(83,61,73)" : props.openacc ? "rgb(17,48,71)" : "none"};
      }

    `
};

const HeaderWrapper = styled.header`
position: fixed;
  overflow: hidden;
  z-index: 1;
  top: 0;

`

const Header = () => {

    return(
        <HeaderWrapper>
            <Navbar.Wrapper>
                <Navbar.Logo src={Logo}/>
                <Navbar.Items>
                    <Navbar.Item> <span> Home</span></Navbar.Item>
                    <Navbar.Item> <span> Cards</span></Navbar.Item>
                    <Navbar.Item> <span> Wallet</span></Navbar.Item>
                    <Navbar.Item> <span> About</span></Navbar.Item>
                </ Navbar.Items>
                <ButtonWrapper>
                    <Navbar.HeaderButton openacc>Open Account</Navbar.HeaderButton>
                    <Navbar.HeaderButton login>Login</Navbar.HeaderButton>
                </ButtonWrapper>
            </Navbar.Wrapper>
        </HeaderWrapper>

    );
}

export default Header
