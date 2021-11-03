import React from "react";
import styled from "styled-components";
import PfIcon from "./finance.png"
import BgImg from "./banner.png"
import {Button } from "grommet"
import {GradientText} from "../../atoms/gradient-effects";
import {CtaHeading} from "../../atoms/typography";

const Banner = styled.section `
  background: url("${BgImg}"), #333;
  background-blend-mode: overlay;
  width: 100vw;
  height: 80vh;`
const Content = styled.div `
  padding: 15vh 10vw;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: start;`

const Heading = styled(CtaHeading)`
text-align: center;
`



const StyledBtn = styled(Button)`
  background: rgba(225, 225, 225, 0.46);
  backdrop-filter: blur(4);
  width: calc(10rem + 5vw);
  font-weight: 600;
  border: none;
 margin:  1em 30vw;
  align-self: center;

`
const BannerIcon = styled.img `
  align-self: center;
  margin-bottom: 5vh;
  width: calc(5rem + 1vw);
  
`


const CtaBanner = () => {
    return(
        <Banner>
            <Content>
                <BannerIcon src={PfIcon}/>
                <Heading>
                    We believe in adding <GradientText>value</GradientText>  & we're good at exactly that
                </Heading>
                <StyledBtn label="Let's Talk" primary size="large" justify="center" target="mailto:hello@accel.co.za"/>
            </Content>
        </Banner>
    )
}

export default CtaBanner