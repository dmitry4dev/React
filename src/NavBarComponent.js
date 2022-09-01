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

  // const url = process.env.REACT_APP_HOME_URL;
  const url = '/React'
  const countryId = useSelector(state => state.countryId);
  const checkedRadio = useSelector(state => state.checkedRadio);
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  function handleClick() {
    if (theme === 'light') {
      dispatch(setTheme('dark'));
    } else {
      dispatch(setTheme('light'));
    }
  }

  return (
    <Navbar expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          <img
            src={`${url}/covid-logo.svg`}
            width="50"
            height="50"
            className="navbar__logo"
            alt="World Data on Covid"
          />
          <span className="navbar__title">World Data on Covid</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to={`${url}/reported-cases/` + countryId}
              className="nav-link">Reported Cases
            </Link>
            <Link
              to={`${url}/ranked-charts/` + (checkedRadio === 'total_cases' ? 'total_cases' : 'total_deaths') + "/" + props.initialCountriesCount}
              className="nav-link">Ranked Charts
            </Link>
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

NavBarComponent.defaultProps = {
  initialCountriesCount: 20,
}

export default NavBarComponent;