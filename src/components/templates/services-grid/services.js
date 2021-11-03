import React from "react"
import styled from "styled-components"


const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px 8%;
`

const ServiceTitle = styled.h2`
  font-weight: 600;
  margin-bottom: 8px;
`
const ServiceHeading = styled.h1`
    text-align: center;
    padding-top: 10%;
    margin-bottom: 60px;
    font-weight: 600;
    position: relative;
&::after {
    content: '';
    background: #303ef7;
    width: 100px;
    height: 5px;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Service = styled.div`
    text-align: center;
    padding: 25px 10px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    background: transparent;
    transition: transform 0.5s, background 0.5s;
 &:hover {
    background: #303ef7;
    color: #fff;
    transform: scale(1.05);
  }
`

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
`

const ServicesStyled = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  
`

const Icon = styled.i`

    font-size: 40px;
    margin-bottom: 10px;
    color: #303ef7;

  &:hover {
    color: #fff;
  }
`




const ServicesGrid = () => {
    return(
        <ServicesStyled>
        <Container>
            <ServiceHeading>Our Services</ServiceHeading>
            <Row>
                <Service>
                    <Icon className="fas fa-laptop-code" />
                    <ServiceTitle>Consulting</ServiceTitle>
                    <p>
                        Taking an holistic approach to business to find new ways to exchange value to every part of the business.

                    </p>
                </Service>
                <Service>
                    <Icon className="fas fa-chart-line" />
                    <ServiceTitle>UX/UI Design & Branding</ServiceTitle>
                    <p>
                        It starts with an idea, to design, to product. With a story to be told every step of the way.

                    </p>
                </Service>
                <Service>
                    <Icon className="fab fa-sketch" />
                    <ServiceTitle>    Business Systems Analysis</ServiceTitle>
                    <p>
                        As technology grows, it also becomes outdated. Drive your business using only the latest.

                    </p>
                </Service>
            </Row>
            <Row>
            <Service>
                    <Icon className="fas fa-database" />
                    <ServiceTitle>Digital Marketing</ServiceTitle>
                    <p>
                        Create connections that will last forever, ensuring your digital brand scales as you do.

                    </p>
            </Service>
                <Service>
                    <Icon className="fas fa-mobile-alt" />
                    <ServiceTitle>Fullstack Development</ServiceTitle>
                    <p>
                        Building readymade websites, mobile applications, and online business services.
                    </p>
                </Service>
                <Service>
                    <Icon className="fas fa-money-check-alt" />
                    <ServiceTitle>CRM & Customer Service</ServiceTitle>
                    <p>
                        Connect, Service and Drive your business in the most optimal way with trusted CRM Solution.
                    </p>
                </Service>
            </Row>
            </Container>
    </ServicesStyled>

)
}

export default ServicesGrid