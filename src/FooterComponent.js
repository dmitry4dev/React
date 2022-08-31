import { React, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { readCovidData } from './dataService/fileService';
import './styles/Footer.scss';

function FooterComponent() {
  const [randomCountry, setRandomCountry] = useState({});

  useEffect(() => {
    readCovidData().then((data) => {
      const countryNumber = Math.round(Math.random() * (Object.values(data).length - 0) + 0);
      setRandomCountry(Object.values(data)[countryNumber]);
    });
  }, []);

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