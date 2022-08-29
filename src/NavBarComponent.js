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

// Хук useSelector помогает нам следить за redux state и возвращает нам переменную,
// которую мы объявили изначально в redux-toolkit initialState

  const countryId = useSelector(state => state.countryId);
  const checkedRadio = useSelector(state => state.checkedRadio);
  const theme = useSelector(state => state.theme);

// dispatch это функция отправки действия. В неё всегда нужно заворачивать нашу функцию action
// чтобы устанавливать значения нашим initialStat'ам
  const dispatch = useDispatch();

  function handleClick() {
    if (theme === 'light') {
// createAction создал функцию, которую мы передали в dispatch
// dispatch отправил это всё в redux и запустил с новыми данными
// которые передались в reducer через action.payload

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
            alt="World Data on Covid"
          />
          <span className="navbar__title">World Data on Covid</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to={"reported-cases/" + countryId}
              className="nav-link">Reported Cases
            </Link>
            <Link
              to={"ranked-charts/" + (checkedRadio === 'total_cases' ? 'total_cases' : 'total_deaths') + "/" + props.initialCountriesCount}
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