import { React } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './styles/Footer.scss';

function FooterComponent() {

  const randomCountry = useSelector(state => state.randomCountry);
  console.log(randomCountry)

  return(
    <Container>
      <Card body>
        <div className="footer__data">
          <span>Location:</span>
          {randomCountry.location}
        </div>
        <div className="footer__data">
          <span>Date:</span>
          {randomCountry.data?.[randomCountry.data.length - 1].date}
        </div>
        <div className="footer__data">
          <span>New Cases:</span>
          {randomCountry.data?.[randomCountry.data.length - 1].new_cases || 0}
        </div>
      </Card>
    </Container>
  )
}

export default FooterComponent;