import React from 'react'
import Hero from "../components/templates/hero/hero";
import ContactBanner from "../components/templates/contact/ContactBanner";
import ServicesGrid from "../components/templates/services-grid/services";
import CtaBanner from "../components/templates/cta-banner/cta-banner"
import Values from "../components/templates/values/values"

const Home = () => {
    return (
        <>
            <Hero/>
            <CtaBanner/>
            <ServicesGrid/>
            <Values/>
            <ContactBanner/>

        </>

    )
}
export default Home
