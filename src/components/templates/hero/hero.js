import React from 'react'
import styled from "styled-components";
import StarsAnimation from "../../atoms/stars-animation";
import {GradientText} from "../../atoms/gradient-effects";
import {Title} from "../../atoms/typography"

const HeroTitle = styled(Title)`
  text-align: left;
  width: 20ch;

`

const HeroContent = styled.div`
display: flex;
  margin: 0 5vw 25vh 5vw;
  flex-direction: column;
`

const Hero = () => {
    return (
        <StarsAnimation>
            <HeroContent>
                <HeroTitle>
                    <GradientText>Accelerate </GradientText>
                    your business now &amp; <GradientText> forever</GradientText>.
                </HeroTitle>
            </HeroContent>
        </StarsAnimation>

    )
}

export default Hero
