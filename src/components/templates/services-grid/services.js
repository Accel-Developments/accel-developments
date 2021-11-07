import React from "react"
import styled from "styled-components"
import {Card, Description,  TextWrapper, Content, CardHeading} from "../../molecules/card"
import {CtaHeading} from "../../atoms/typography";
import {GradientText} from "../../atoms/gradient-effects";
import A from "./A.png"
import B from"./B.png"
import C from"./C.png"
import D from"./D.png"
import E from "./E.png"
import F from "./F.png"



const Icon = styled.div`
grid-area: icon;
  image-resolution: normal;
  min-width: 75px;
  min-height: 75px;
  background-repeat: no-repeat!important;
  background-position: top;
  background-size: contain;

`

const Container = styled.div`
  display: block;
  background: #dad7d7;
  padding: calc(100px + 1vw) calc(200px + 1vw);
  @media screen and (max-width: 700px) {
    padding: calc(100px + 1vw) calc(50px + 1vw);
  }
  @media screen and (max-width: 500px) {
    padding: calc(100px + 1vw) calc(20px + 1vw);


  }

`

const Services = styled.div`
display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 3rem;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-auto-rows: auto;
  align-content: stretch;
  align-items: stretch;
  @media screen and (max-width: 700px){
    grid-template-columns: repeat(2, minmax(250px, 1fr));


  }
  @media screen and (max-width: 500px){
    grid-template-columns: repeat(1, minmax(250px, 1fr));


  }
`




const CardsStyled = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  
`


const StyledHeading = styled(CtaHeading)`
  font-size: calc(2rem + 1vw);
  color: black;
  padding-bottom: 5vh;
`

const IcnA = styled(Icon)`
  background: url("${A}");
  
`
const IcnB = styled(Icon)`
  background: url("${B}");

`
const IcnC = styled(Icon)`
  background: url("${C}");

`

const IcnD = styled(Icon)`
  background: url("${D}");

`
const IcnE = styled(Icon)`
  background: url("${E}");

`

const IcnF = styled(Icon)`
  background: url("${F}");

`
const CardsGrid = () => {
    return(
        <CardsStyled>
        <Container>
            <StyledHeading>Building <GradientText>Digital Experiences</GradientText> That Represent <GradientText>You</GradientText></StyledHeading>
            <Services>
                <Card>
                    <Content>
                        <IcnA/>
                  <TextWrapper>
                      <CardHeading>Consulting</CardHeading>
                    <Description>
                        Taking an holistic approach to business to find new ways to exchange value to every part of the business.
                    </Description>
                  </TextWrapper>
                </Content>
                </Card>
                <Card>
                    <Content>
                        <IcnB/>
                        <TextWrapper>
                      <CardHeading>UX/UI Design & Branding</CardHeading>
                    <Description>
                        It starts with an idea, to design, to product. With a story to be told every step of the way.
                    </Description>
                  </TextWrapper>
                </Content>
                </Card>
                <Card>
                    <Content>
                        <IcnC/>
                        <TextWrapper>
                      <CardHeading>    Business Systems Analysis</CardHeading>
                    <Description>
                        As technology grows, it also becomes outdated. Drive your business using only the latest.

                    </Description>
                  </TextWrapper>
                </Content>
                </Card>
            <Card>
                <Content>
                    <IcnD/>
                    <TextWrapper>
                      <CardHeading>Digital Marketing</CardHeading>
                    <Description>
                        Create connections that will last forever, ensuring your digital brand scales as you do.

                    </Description>
                  </TextWrapper>
            </Content>
            </Card>
                <Card>
                    <Content>
                        <IcnE/>
                        <TextWrapper>
                      <CardHeading>Fullstack Development</CardHeading>
                    <Description>
                        Building readymade websites, mobile applications, and online business Cards.
                    </Description>
                  </TextWrapper>
                </Content>
                </Card>
                <Card>
                    <Content>
                        <IcnF/>
                        <TextWrapper>
                      <CardHeading>CRM & Customer Card</CardHeading>
                    <Description>
                        Connect, Card and Drive your business in the most optimal way with trusted CRM Solution.
                    </Description>
                  </TextWrapper>
                </Content>
                </Card>
            </Services>
            </Container>
    </CardsStyled>

)
}

export default CardsGrid