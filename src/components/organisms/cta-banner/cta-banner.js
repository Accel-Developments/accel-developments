import React from 'react'
import styled from "styled-components";

const Banner = styled.div `
width: 100vw;
  padding-bottom: 15vh;
`


const ImageBannerText = styled.div   `
  margin: 0 10vw;
  padding: calc(1rem + 5vw) calc(0.5rem + 1vw) calc(0.2rem + 1vw) calc(0.5rem + 1vw);
  font-size: calc(1.75rem + 1vw);
  text-align: center;
  font-weight: 300;
  color: black;
  @media screen and (max-width: 700px){
    margin: 0 10vw;
    padding: calc(1rem + 5vw) 0 0 0;

  }
`

const Bold = styled.text`
  font-weight: bold;
  background: -webkit-linear-gradient(270deg, #FD749B 2%, #FD749B 15%, #281AC8 107.52%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SubText = styled.text`
  font-size: calc(12px + 1vw);
  text-align: center;
  margin: 1vh 8vw;
  display: inline-block;

`


const CtaBanner = () => {
    return (
<Banner>
     <ImageBannerText>
            <Bold>ACCELERATE</Bold> YOUR INVESTMENTS. <br/>
            NOW AND <Bold>FOREVER</Bold>
        </ImageBannerText>
        <SubText>
            We work hard to understand exactly what you need from your investments, trading executions and ventures. And then we deliver results. We are active investors. We focus on where we can make a real difference for our clients – to help them achieve their long-term investment goals.        </SubText>
</Banner>
    )
}

export default CtaBanner
