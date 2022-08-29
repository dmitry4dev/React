import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import './styles/NavBar.scss';
import { setTheme } from './ReduxState';

function NavBarComponent(props) {

  const countryId = useSelector(state => state.countryId);
  const checkedRadio = useSelector(state => state.checkedRadio);
  const dispatch = useDispatch();

  function handleClick() {
    if (props.theme === 'light') {
      dispatch(setTheme('dark'));
      document.body.style.background = 'black';
    } else {
      dispatch(setTheme('light'));
      document.body.style.background = 'white';
    }
  }

  return (
    <Navbar expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          <img
            src="/covid-logo.svg"
            width="50"
            height="50"
            className="navbar__logo"
            alt="covid logo"
          />
          <span className="navbar__title">World Data on Covid</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"reported-cases/" + countryId} className="nav-link">Reported Cases</Link>
            <Link to={"ranked-charts/" + (checkedRadio === 'total_cases' ? 'total_cases' : 'total_deaths') + "/20"} className="nav-link">Ranked Charts</Link>
          </Nav>
          <Form.Check
            type="switch"
            id="custom-switch"
            label={props.theme === 'light' ? 'Dark mode' : 'Light mode'}
            onClick={() => handleClick()}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;