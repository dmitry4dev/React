import React from 'react';
import { useSelector } from 'react-redux';
import './styles/App.scss';
import Container from 'react-bootstrap/Container';
import  NavbarComponent from './NavBarComponent';
import BodyComponent from './BodyComponents/BodyComponent';
import FooterComponent from './FooterComponent';

function App() {

  const theme = useSelector(state => state.theme);

  return (
    <div className={theme}>
      <Container>
        <NavbarComponent />
        <BodyComponent />
        <FooterComponent />
      </Container>
    </div>

  );
}

export default App;
