import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import CityListComponent from './CityListComponent';
import ChartsComponent from './ChartsComponent';

function BodyComponent() {
  const [selectedCity, setSelectedCity] = useState(null);

  return(
    <Container className="mt-2">
      <CityListComponent setSelectedCity={setSelectedCity} />
      <ChartsComponent />
      <h2>{selectedCity}</h2>
    </Container>
  );
}

export default BodyComponent;