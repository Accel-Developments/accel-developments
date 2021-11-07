import React from "react";
import styled from "styled-components";

export const Card = styled.div `
  display: inline-block;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.48);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(4px);
  border-radius: 40px;

  &:hover {
    background: linear-gradient(45deg, #FEAC5E, #EC6179, #C779D0, #4BC0C8);
 color: #ffffff!important;
  }
`

export const Icon = styled.div `
flex: none;
order: 0;
flex-grow: 0;
`

export const CardHeading = styled.h3 `
font-family: Poppins, sans-serif;
font-style: normal;
font-weight: 600;
font-size: 22px;
  grid-area: Heading;
line-height: 120%;
color: #6854FC;
`

export const Description = styled.text `
font-family: Poppins;
font-style: normal;
  font-weight: normal;
  padding-bottom: 1%;
  grid-area: Description;
  font-size: 16px;
  line-height: 120%;
  color: #222020;

`
export const Content = styled.div `
display: grid;
  padding:  calc(15px + 1vw) calc(10px + 1vw) ;
  grid-template-columns:  1.5fr;
  grid-template-rows: 1fr;
justify-content: center;
align-items: stretch;
grid-template-areas: 
        "text";
`


export const TextWrapper = styled.div `
  grid-area: text;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-areas: 
          "Heading"
          "Description";
`

export const SerCard = ({ children }) => {

    return(
        <Card>
            <Content>
                <Icon>
                    {children}
                </Icon>
                <TextWrapper>
                    <Heading>
                        {children}
                    </Heading>
                    <Description>
                        {children}
                    </Description>
                </TextWrapper>
            </Content>
        </Card>
    )
}

