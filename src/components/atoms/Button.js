import React from 'react'
import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 3rem;
  @media  screen and (max-width: 60em) {
    display: none;
  }
`


const Button = styled.button`
  background: ${props => props.backgroundColor || "none"};
  border: ${props => props.outline ? "3px solid white" : "none"};
  font-size: ${props => props.outline ? "18px" : "16px"};
  margin: ${props => props.outline ? "0.9rem 0" : "1rem"};
  text-align: center;
  letter-spacing: 1px;
  color: #f8f8f8;
  cursor: pointer;
  font-weight: 600;
  min-width: ${props => props.outline ? "calc(250px + 1vw)" : "calc(150px + 1vw)"};
  width: fit-content;
  padding: ${props => props.outline ? "13px 5px" : "10px 25px"};
  border-radius: 4rem;

  :hover {
    background-color: ${props => props.outline ? "#fff" : " "};
    color: ${props => props.outline ? "#735469" : "#f8f8f8"};
    transition-duration: 0.8s;
    transition: ease-in-out;
  }

  @media only screen and (max-width: 700px){
    padding: ${props => props.outline ? "10px 2.5px" : "7px 15px"};

    min-width: ${props => props.outline ? "calc(160px + 1vw)" : "calc(100px + 1vw)"};

    font-size: ${props => props.outline ? "16px" : "14px"};
    flex: 0;
  }
`

export default Button


