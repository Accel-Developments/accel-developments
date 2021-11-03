import React from "react"
import "./style.css"
import styled from "styled-components";

const HeroStars = styled.div`
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  min-height: 100vh;
  max-height: 100%;
  width: 100vw;
  overflow: hidden;
`

const StarsAnimation = ({children}) => {
    return(
        <HeroStars>
            <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" type="text/css" />
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div id="title">
                {children}
            </div>
        </HeroStars>
    )
}

export default StarsAnimation

