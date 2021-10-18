import React from "react"
import Button from "../ui-components/Button"
import styled from "styled-components"





const HeroWrapper = styled.div`
  max-width: 100%;
  display: flex;
  min-height: 75vh;
  max-height: 75vh;
  object-position: center;
  overscroll-behavior-x: auto;
  place-items: center;
  overflow: hidden;
  padding: calc(200px + 1vw) calc(100px + 1vw);
  min-width: 100vw;
`

const HeroBg = styled(HeroWrapper)`

  background: linear-gradient(270deg, #145169, #36316b, #191515);
  background-size: 600% 600%;

  -webkit-animation: accel-gradient 18s ease infinite;
  -moz-animation: accel-gradient 18s ease infinite;
  -o-animation: accel-gradient 18s ease infinite;
  animation: accel-gradient 18s ease infinite;
}

@-webkit-keyframes accel-gradient {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
@-moz-keyframes accel-gradient {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
@-o-keyframes accel-gradient {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
@keyframes accel-gradient {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
  
`

const HeroContent = styled.div`
  grid-area: HeroContent;
  text-align: left;
  margin-top: 2rem;
  position: relative ;
  top: 5vh;
  bottom: 5vh;
  color: white;
  width: 100ch;
`
const HeroText = styled.h1 `
  font-size: calc(3rem + 1vw);
  line-height: 125%;
  font-weight: 300;


  @media only screen and (max-width: 726px){
    font-size: calc(20px + 1vw);
    line-height: 125%;

  }

  br{
    @media only screen and (max-width: 440px){
      display: none;
    }

`

const Bold = styled.text`
font-weight: 800;
`
const HeroBtn = styled(Button)`
  margin-top: calc(2rem + 1vw);
  border: none;
  padding:  1vw 3vh;
  background: rgba(255, 255, 255, 0.25);

  &:hover {
    color: #000;
  }
`

const HeroMain = () => {
    return(
        <HeroBg>
            <HeroContent>
                <HeroText> Accelerate your business now and <Bold>forever.</Bold> </HeroText>
                <HeroBtn outline >Get in Touch</HeroBtn>
            </HeroContent>
        </HeroBg>

    )
}

export default HeroMain
