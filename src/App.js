import React from 'react'
import {Styles, CSSReset} from "./components/ui-components/Styles";
import Header from "./components/header/header"
import FullPage from "./components/ui-components/PageStyles";
import Helmet from "react-helmet"
import HeroMain from "./components/hero/hero";


function App() {
  return (
      <div>
          <Helmet>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </Helmet>
          <Styles.Wrapper>

              <CSSReset/>
              <FullPage>
                  <Header />
                <HeroMain/>
              </FullPage>
          </Styles.Wrapper>
      </div>

  )
}

export default App
