import React from "react"
import Button from "../ui-components/Button"
import styled from "styled-components"
import Animation from "./animation";

const HeroWrapper = styled(Animation)`
  max-width: 100%;
  min-height: 100vh;
  object-position: center;
  overscroll-behavior-x: auto;
  place-items: center;
  overflow: hidden;
  min-width: 100vw;

  @media screen and (max-width: 767px ){
    background-position-x: -450px;
    min-width: 100vw;
    margin: 0;  }

  @media screen and (max-width: 400px ){
padding:  calc(200px + 1vw) 20px;  }

`

const HeroContent = styled.div`
  grid-area: HeroContent;
  text-align: left;
  margin-top: 2rem;
  position: relative ;
  top: 5vh;
  bottom: 5vh;
  color: white;
  width: 70ch;
`
const HeroText = styled.h1 `
  font-size: calc(26px + 1vw);
  line-height: 125%;
  font-weight: bold;
  
  
  @media only screen and (max-width: 726px){
    font-size: calc(20px + 1vw);
    line-height: 125%;

  }
  
  br{
    @media only screen and (max-width: 440px){
     display: none;
  }

`
const HeroBtn = styled(Button)`
margin-top: calc(2rem + 1vw);
`

const HeroMain = () => {
    return(
        <HeroWrapper>
            <HeroContent>
                <HeroText> A banking service for the global online gaming industry. <br/>
                    Finally. </HeroText>
                <HeroBtn outline>Read More</HeroBtn>
            </HeroContent>
        </HeroWrapper>

    )
}

export default HeroMain
