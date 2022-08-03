import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import  NavbarComponent from './NavBarComponent';
import BodyComponent from './BodyComponents/BodyComponent';

function App() {
  return (
    <Container>
      <NavbarComponent />
      <BodyComponent />
    </Container>
  );
}

export default App;
