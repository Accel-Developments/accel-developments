igitmport React from 'react'
import Hero from "../components/organisms/hero/hero";
import CtaBanner from "../components/organisms/cta-banner/cta-banner";
import WaveDc from "../components/molecules/decorative-wave/decorative-break"
import CardList from "../components/templates/ServiceCardList";
import ContactBanner from "../components/organisms/contact/ContactBanner";

const Home = () => {
    return (
        <>
            <Hero/>
            <WaveDc/>
            <CtaBanner/>
            <CardList/>
            <ContactBanner/>
        </>

    )
}
export default Home
