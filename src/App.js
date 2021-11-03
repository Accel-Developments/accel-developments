import React from 'react'
import { Root, Routes } from 'react-static'
//
import Header from "./components/templates/header/header";
import PrefooterBanner from "./components/templates/prefooter-banner/prefooter-banner";
import { Router } from '@reach/router'
import ContentFullPage from "./components/layout/ContentFullPage";
import {GlobalStyle} from "./style";
import styled from "styled-components";

const LoadingStyles = styled.div`
  width: 100vw;
  padding: 20vh 0;
  display: flex;
  justify-content: center;
  align-content: center;
  color: #9e87ce;
  background: #49444f;
  font-size: 1.25rem;
  font-weight: bold;
`

const Loading = () => {

    return(
        <LoadingStyles>
            <h2>Loading...</h2>
        </LoadingStyles>
    )
}

function App() {
    return (
        <Root>
            <><Header/>
            <ContentFullPage>
                <GlobalStyle/>
                <React.Suspense fallback={<Loading/>}>
                    <Router>
                        <Routes path="*" />
                    </Router>
                </React.Suspense>
                <PrefooterBanner/>

            </ContentFullPage>
            </>
        </Root>
    )
}

export default App
