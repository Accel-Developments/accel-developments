import React from "react";
import styled from "styled-components";

const Ripples = styled.div`
        display: flex;
        align-content: center;
        justify-content: center  ;
        
        .circle{
    position: absolute;
    border-radius: 50%;
    background: #3399ff;
  ;
    animation: ripple 15s infinite;
    box-shadow: 0px 0px 1px 0px #508fb9;
  }

  .small{
    width: 200px;
    height: 200px;
          z-index: -1;

  }
        
  .medium{
    width: 400px;
    height: 400px;
          z-index: -2;

  }  

  .large{
    width: 600px;
    height: 600px;
          z-index: -3;

  }
        

  .xlarge{
    width: 800px;
    height: 800px;
          z-index: -4;

  }

  .xxlarge{
    width: 1000px;
    height: 1000px;
          z-index: -5;

  }

  .shade1{
    opacity: 0.2;
  }
  .shade2{
    opacity: 0.5;
  }

  .shade3{
    opacity: 0.7;
  }

  .shade4{
    opacity: 0.8;
  }

  .shade5{
    opacity: 0.9;
  }

  @keyframes ripple{
    0%{
      transform: scale(0.8);
    }

    50%{
      transform: scale(1.2);
    }

    100%{
      transform: scale(0.8);
    }
  }
`

const Animation = () => {
return(
    <Ripples>
        <Ripples className="circle xxlarge shade1"/>
        <Ripples className="circle xlarge shade2"/>
        <Ripples className="circle large shade3"/>
        <Ripples className="circle mediun shade4"/>
        <Ripples className="circle small shade5"/>
    </Ripples>
)
}

export default Animation