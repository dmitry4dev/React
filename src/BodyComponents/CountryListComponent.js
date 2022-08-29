import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function CountryListComponent(props) {

  const [inputValue, setInputValue] = useState('');

  return(
    <Container>
      <InputGroup>
        <InputGroup.Text>Select Country</InputGroup.Text>
        <Form.Control
          onChange={(e) => setInputValue(e.target.value)}
          aria-label="City Input"
        />
        <Form.Select
          className="reported-cases-select"
          onChange={(e) => props.handleCountrySelect(e.target.value)}
          aria-label="Countries"
          defaultValue={props.country}
          >
          <option>Choose Country</option>
          {props.countryList.filter(country => country.name.toLowerCase()
          .includes(inputValue.toLowerCase()))
          .map(country => (<option key={country.key} label={country.name} value={country.key}></option>))}
        </Form.Select>
      </InputGroup>
    </Container>
  );
}

export default CountryListComponent;