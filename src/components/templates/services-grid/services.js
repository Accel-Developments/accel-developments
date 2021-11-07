import React from "react"
import styled from "styled-components"
import {Card, Description,  TextWrapper, Content, CardHeading} from "../../molecules/card"


const Container = styled.div`
  display: block;
  background: #35354f;
  background-size: cover;
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


const CardsGrid = () => {
    return(
        <CardsStyled>
        <Container>
            <h1>Building Digital Experiences That Represent You</h1>
            <Services>
                <Card>
                    <Content>
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