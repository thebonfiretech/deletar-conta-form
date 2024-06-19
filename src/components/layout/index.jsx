import React from 'react';
import { Container } from './styles'
import Background from '../background';
import LogoBox from '../logoBox';

const Layout = ({children}) => {
  return (
    <Container>
    <Background>
      <LogoBox/>
      {children}
    </Background>
    </Container>
  )
}

export default Layout;