import React from "react"
import styled from "styled-components"
import {ContactUs} from "../../atoms/ContactForm";

const BannerContainer = styled.div`
  min-width: 100vw;
  max-width: 100%;
  padding: 10vh 20vw;
`

const Wrapper = styled.div`
max-width: 60vw;
  display: block;
`

const ContactBanner = () => {
    return(
        <BannerContainer>
           <Wrapper>
               <ContactUs/>
           </Wrapper>
        </BannerContainer>
    )
}

export default ContactBanner