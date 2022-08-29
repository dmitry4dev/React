import React from 'react';
import { useSelector } from 'react-redux';
import './styles/App.scss';
import Container from 'react-bootstrap/Container';
import  NavbarComponent from './NavBarComponent';
import BodyComponent from './BodyComponents/BodyComponent';

function App() {

  const theme = useSelector(state => state.theme);

  return (
    <Container className={theme}>
      <NavbarComponent theme={theme} />
      <BodyComponent />
    </Container>
  );
}

export default App;
