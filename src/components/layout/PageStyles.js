import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  min-width:100vw;
  overflow-y: auto;
  overflow-x: hidden;`
const Content = styled.div`
  max-width: 100% ;
  place-content: center;
  overflow-x: hidden;
`




const FullPage = ({ children }) => (
    <Wrapper>
        <Content>{children}</Content>
    </Wrapper>
)


export default FullPage
