import React from "react"
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';

const Banner = styled.section `
  background: #F2F2F2;
  width: 100vw;`
const Content = styled.div `
  padding: 5vh 10vw 0 10vw;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
 @media only screen and (max-width: 440px){
   padding: 5vh 1vw 0 1vw;
 }
`

const Heading = styled.text `
  font-size: calc(1.5rem + 1vw);
  font-style: normal;
  color:#36316b;
  font-weight: 700;
  line-height: calc(2rem + 1vw);
  text-align: center;
`

const Text = styled.text `
  font-size: calc(1rem + 1vw);;
  padding: 1vh 5vw 1vh 5vw;
  font-style: normal;
  color: #9b9a9a;
  font-weight: 400;
  text-align: center;
  @media screen and (max-width: 700px) {
    padding: 2vh 2vw 5vh 2vw;
    font-size: calc(1rem + 1.5vw);;

  }
  @media screen and (max-width: 450px) {
    padding: 2vh 1vw;
    font-size: calc(0.76rem + 1.5vw);;


  }



`
const IconWrapper = styled.div`
display: inline-flex;
  justify-content: center;
  
`

const StyledIcon = styled(SocialIcon)`
margin: 0 calc(10px + 0.5vw);
`
const SocialIconsBanner = () =>{
    return(
    <IconWrapper>
        <StyledIcon url="https://www.facebook.com/AccelDevelopmentt" />
        <StyledIcon url="https://www.linkedin.com/company/accel-developement/"/>
        <StyledIcon url="mailto:juan@accel.co.za"/>
    </IconWrapper>
    )
}


const ComingSoon= () => {
    return(
        <Banner>
            <Content>
                <Heading>
                    Our Website is Currently Under Construction
                </Heading>
                <Text>
                    Contact us directly to get in touch
                </Text>
             <SocialIconsBanner/>

            </Content>
        </Banner>
    )
}

export default ComingSoon
