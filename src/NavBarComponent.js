import { React, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

function NavBarComponent() {

  const [theme, setTheme] = useState('light');

  function handleClick() {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.background = 'black';
      document.body.style.color = 'white';
      document.getElementsByClassName('navbar-brand')[0].style.color = 'white';
      document.getElementsByClassName('form-check-label')[0].style.color = 'white';
      document.querySelectorAll('.caption__title').forEach(elem => elem.style.color = 'white');
      document.getElementsByClassName('carousel-control-prev-icon')[0].style.backgroundColor = 'black';
      document.getElementsByClassName('carousel-control-next-icon')[0].style.backgroundColor = 'black';
    } else {
      setTheme('light');
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      document.getElementsByClassName('navbar-brand')[0].style.color = 'black';
      document.getElementsByClassName('form-check-label')[0].style.color = 'black';
      document.querySelectorAll('.caption__title').forEach(elem => elem.style.color = 'black');
      document.getElementsByClassName('carousel-control-prev-icon')[0].style.backgroundColor = '#6c9dd4';
      document.getElementsByClassName('carousel-control-next-icon')[0].style.backgroundColor = '#6c9dd4';
    }
  }

  return (
    <Navbar bg={theme} expand="lg" className="mb-5">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="./logo.svg"
            width="50"
            height="50"
            className="d-inline-block"
            alt="React Bootstrap logo"
          />
          Covid-spa Information
        </Navbar.Brand>
        <Form.Check
          type="switch"
          id="custom-switch"
          label={theme === 'light' ? 'Dark mode' : 'Light mode'}
          onClick={() => handleClick()}
        />
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;