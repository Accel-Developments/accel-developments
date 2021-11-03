import React from "react"
import styled from "styled-components"
import {ContactUs} from "../../atoms/ContactForm";

const BannerContainer = styled.div`
  min-width: 100%;
  margin: 0;
  padding-bottom:10vh ;
  overflow: hidden;
  max-width: 100%;
  background: black;
  
`

const Contact = styled(ContactUs)`
form{
  color: #FFFFFF!important;
  border-color: #FFFFFF!important;

}
`


const Wrapper = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: flex-start; 
  align-content: center; 
  align-items: center; 


`



const ContactBanner = () => {
    return(
        <BannerContainer>

            <Wrapper>
            <Contact/>
           </Wrapper>
        </BannerContainer>
    )
}

export default ContactBanner