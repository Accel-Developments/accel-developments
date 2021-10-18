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
      background-color: rgba(0, 0, 0, 0.71);
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
      @media screen and (max-width: 1024px) {
        padding: 2vh 5vw;
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
      max-width: 100em;
      position: relative;
      left: -20vw;
      
      @media screen and (max-width:1024px){
        display: none;
      }
    `,
    Item: styled.li`
      margin: 0 2.5vw;
      width: fit-content;
      font-size: 1.25em;
      text-align: center;
      cursor: pointer;
      color: rgba(255, 255, 255, 0.84);
      position: relative;
      letter-spacing: 0.1rem;
      text-decoration: none;
      display: inline-flex;
      justify-content: right;

      &::after {
        position: absolute;
        content: "";
        top: 100%;
        left: 5%;
        right: 5%;
        width: 90%;
        height: 0.2rem;
        background: rgb(255, 255, 255);
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.5s;
      }

      &:hover {
        color: #ffffff;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }

    `,
    HeaderButton: styled(Button)`
      padding: 1rem 0;
      align-self: center;
      color: #000;
      background-color: #fff;

      &:hover {
        background-color: rgba(255, 255, 255, 0.28);
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
                    <Navbar.Item> <span> Case Studies</span></Navbar.Item>
                    <Navbar.Item> <span> About</span></Navbar.Item>
                </ Navbar.Items>
                <ButtonWrapper>
                    <Navbar.HeaderButton>Contact Us</Navbar.HeaderButton>
                </ButtonWrapper>
            </Navbar.Wrapper>
        </HeaderWrapper>

    );
}

export default Header
