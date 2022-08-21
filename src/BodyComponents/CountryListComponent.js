import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function CountryListComponent(props) {

  const [inputValue, setInputValue] = useState('');

  return(
    <Container className="pt-3 pb-1">
      <InputGroup className="mb-5 p-0">
        <InputGroup.Text>Select Country</InputGroup.Text>
        <Form.Control onChange={(e) => setInputValue(e.target.value)} aria-label="City Input" />
        <Form.Select onChange={(e) => props.handleCountrySelect(e.target.value)} aria-label="Countries">
          <option>Choose Country</option>
          {props.countryList.filter(country => country.name.toLowerCase()
          .includes(inputValue.toLowerCase()))
          .map(country => (<option key={country.key} value={country.key}>{country.name}</option>))}
        </Form.Select>
      </InputGroup>
    </Container>
  );
}

export default CountryListComponent;