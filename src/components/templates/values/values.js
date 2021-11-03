import React from 'react'
import styled from "styled-components";
import BgBanner from "./cta-bg.webp";
import FlightIcn from "./flights-icn.png";
import HotelIcn from "./hotels-icn.png"
import DiningIcn from "./dining-icn.png"

const Banner = styled.div `
  width: 100vw;
  background: #B16852;
`

const ImageBanner = styled.div`
  min-height: calc(50rem + 1vw);
  min-width:100%;
  background: url(${BgBanner}) top center no-repeat ;
  background-size: cover ;
`
const ImageBannerText = styled.div   `
  margin: 0 20vw;
  padding: calc(1rem + 5vw) calc(0.5rem + 1vw);
  font-size: calc(1.35rem + 1vw);
  text-align: center;
  font-weight: 300;
  color: white;
  @media screen and (max-width: 1024px){
    margin: 0 10vw;
    padding: calc(1rem + 5vw) 0;

  }
`
const Wrapper = styled.div`
  background: rgba(54, 49, 107, 0.65);
  min-height: 400px;
  padding: calc(1rem + 1vw) 0;
`

const Features = styled.div`
  justify-self: center;
  justify-content: center;
  width: 100%;
  grid-auto-flow: column;
  display: grid;
  grid-template-columns: repeat(auto-fit 3 1fr);
  grid-template-rows:  repeat(auto-fit 1 1fr);
  column-gap: 5vw;
  row-gap: 5vw;
  grid-template-areas: 
    "Planning Vision Transform";
  @media screen and (max-width: 1024px){
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit 3 1fr);
    row-gap: 6vw;
    grid-template-areas: 
    "Planning"
    "Vision"
    "Transform";
  
  }
`

const Planning = styled.div `
  justify-self: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit 2 1fr);
  grid-template-areas: 
    "Icon"
    "Description";
  grid-area: Planning;
  @media screen and (max-width: 1024px){
    grid-template-areas: 
    "Icon Description";
    grid-template-columns: repeat(auto-fit 2 1fr);
    grid-template-rows: 1fr;
  }


`
/*  @media screen and (max-width: 1024px){
    grid-template-columns: repeat(auto-fit 2 1fr);
    grid-template-rows:  1fr;
    grid-template-areas:
    "Icon Description";  }**/

const Vision = styled.div`
  justify-self: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit 2 1fr);
  grid-template-areas: 
    "Icon"
    "Description";
  grid-area: Vision;
  @media screen and (max-width: 1024px){
    grid-template-areas: 
    "Icon Description";
    grid-template-columns: repeat(auto-fit 2 1fr);
    grid-template-rows: 1fr;
  }

`

const FeatureText = styled.div `
  text-align: center;
  font-size: 1.2em;
  color: white;
  max-width: 22vw;
  align-self: center;
  justify-self: center;
  grid-area: Description;
  @media screen and (max-width: 1024px){
    max-width: 50vw;
    text-align: left;
    font-size: calc(14px + 1vw);

  }

`

const Transform = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit 2 1fr);
  grid-template-areas: 
    "Icon"
    "Description";
  grid-area: Transform;
  justify-content: center;
  justify-self: center;
  @media screen and (max-width: 1024px){
    grid-template-columns: repeat(auto-fit 2 1fr);
    grid-template-rows: 1fr;
    grid-template-areas: 
    "Icon Description";

  }

`

const Icon = styled.img`
  align-self: center;
  justify-self: center;
  width: calc(1rem + 8vw);
  grid-area: Icon;
  margin: 2vh;
  @media screen and (max-width: 1024px){
    width: calc(1rem + 15vw);

  }

`




const Values = () => {
    return (
        <Banner>


            <Wrapper>
                <Features>
                    <Planning>
                        <Icon src={FlightIcn}/>
                        <FeatureText>
                            <b>Planning</b><br/>
                            It's not about only getting to the goal, but being able to adapt when the goal-post needs to move again, or get a new vision.

                        </FeatureText>
                    </Planning>
                    <Vision>
                        <Icon src={HotelIcn}/>
                        <FeatureText>
                            <b>Vision</b> <br/>
                            Economic changes force businesses to adapt and create more innovative visions for the company and enabling them to find new opportunities for growth.

                        </FeatureText>
                    </Vision>
                    <Transform>
                        <Icon src={DiningIcn}/>
                        <FeatureText>
                            <b>Transformation</b><br/>
                            Creating the tools and experience you need to adapt and build new opportunities for customers. Connect, Service and Drive your business in the most optimal way.


                        </FeatureText>
                    </Transform>
                </Features>
            </Wrapper>

            <ImageBanner>
                <ImageBannerText>
                    We know every business has potential. It’s just about finding it’s true potential.

                </ImageBannerText>
            </ImageBanner>
        </Banner>
    )
}

export default Values