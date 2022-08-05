import React, { useState } from 'react';
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

  const [inputValue, setInputValue] = useState('');

  return(
    <Container className="p-0">
      <InputGroup className="mb-3 p-0">
        <InputGroup.Text>Select City</InputGroup.Text>
        {/* В setInputValue не передается props, потому что эта функция объявлена внутри этого компонента и
          её не нужно передавать в другой компонент, props связывает между собой компоненты */}
        <Form.Control onChange={(e) => setInputValue(e.target.value)} aria-label="City Input" />
        <Form.Select onChange={(e) => props.setSelectedCity(e.target.value)} aria-label="Countries">
          <option>Choose City</option>
          {cities.filter(city => city.toLowerCase().includes(inputValue.toLowerCase())).map(city => (<option key={city} value={city}>{city}</option>))}
        </Form.Select>
      </InputGroup>
      <h2>{inputValue}</h2>
    </Container>
  );
}

export default CityListComponent;