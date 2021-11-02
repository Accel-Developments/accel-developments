import React from 'react'
import { Root, Routes } from 'react-static'
//
import Header from "./components/organisms/header/header";
import Footer from "./components/organisms/footer/footer";
import PrefooterBanner from "./components/organisms/prefooter-banner/prefooter-banner";
import { Router } from './components/atoms/Router'
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
            <ContentFullPage>
                <Header/>
                <GlobalStyle/>
                <React.Suspense fallback={<Loading/>}>
                    <Router>
                        <Routes path="*" />
                    </Router>
                </React.Suspense>
                <PrefooterBanner/>
                <Footer/>
            </ContentFullPage>
        </Root>
    )
}

export default App
