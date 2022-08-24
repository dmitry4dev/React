import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

function NavBarComponent() {

  const [theme, setTheme] = useState('light');
  const countryId = useSelector(state => state.countryId);

  function handleClick() {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.background = 'black';
      document.body.style.color = 'white';
      document.getElementsByClassName('navbar-brand')[0].style.color = 'white';
      document.getElementsByClassName('form-check-label')[0].style.color = 'white';
      document.querySelectorAll('.nav-link').forEach(elem => elem.style.color = 'white');
      document.querySelectorAll('.caption__title').forEach(elem => elem.style.color = 'white');
      document.getElementsByClassName('carousel-control-prev-icon')[0].style.backgroundColor = 'black';
      document.getElementsByClassName('carousel-control-next-icon')[0].style.backgroundColor = 'black';
    } else {
      setTheme('light');
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      document.getElementsByClassName('navbar-brand')[0].style.color = 'black';
      document.getElementsByClassName('form-check-label')[0].style.color = 'black';
      document.querySelectorAll('.nav-link').forEach(elem => elem.style.color = 'black');
      document.querySelectorAll('.caption__title').forEach(elem => elem.style.color = 'black');
      document.getElementsByClassName('carousel-control-prev-icon')[0].style.backgroundColor = '#6c9dd4';
      document.getElementsByClassName('carousel-control-next-icon')[0].style.backgroundColor = '#6c9dd4';
    }
  }

  return (
    <Navbar bg={theme} expand="lg" className="mb-5">
      <Container>
        <Link className="navbar-brand" to="/">
          <img
            src="/logo.svg"
            width="50"
            height="50"
            className="d-inline-block"
            alt="React Bootstrap logo"
          />
          Covid-spa Information
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={'/reported-cases/' + countryId} className="nav-link">Reported Cases</Link>
            <Link to="ranked-charts/cases/20" className="nav-link">Ranked Charts</Link>
          </Nav>
          <Form.Check
            type="switch"
            id="custom-switch"
            label={theme === 'light' ? 'Dark mode' : 'Light mode'}
            onClick={() => handleClick()}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;