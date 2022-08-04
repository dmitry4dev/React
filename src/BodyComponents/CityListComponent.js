import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function CityListComponent(props) {

  const cities = [
    'Tallinn',
    'Parnu',
    'Narva',
    'Tartu',
    'Johvi'
  ];

  return(
    <Container>
      <InputGroup className="mb-3">
        <InputGroup.Text>Select City</InputGroup.Text>
        <Form.Control onChange={(e) => props.getInputValue(e.target.value)} aria-label="City Input" />
        <Form.Select onChange={(e) => props.setSelectedCity(e.target.value)} aria-label="Countries">
          <option>Choose City</option>
          {cities.map(city => (<option key={city} value={city}>{city}</option>))}
        </Form.Select>
      </InputGroup>
    </Container>
  );
}

export default CityListComponent;