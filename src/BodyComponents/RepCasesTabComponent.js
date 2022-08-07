import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ReportedCasesComponent() {

  const [radioValue, setRadioValue] = useState('DeathCount');

  return(
    <Form>
      {['radio'].map((type) => (
        <div key={`default-${type}`} class="mb-3">
          <InputGroup className="d-flex flex-column">
            <Form.Check
              className="mb-2"
              type={type}
              id={`Death-count-${type}`}
              label={`Death count`}
              value="DeathCount"
              onChange={(e) => setRadioValue(e.target.value, console.log(e.target.value))}
              checked={radioValue === 'DeathCount' ? true : false}
            />
            <Form.Check
              className="mb-2"
              type={type}
              id={`Confirmed-cases-${type}`}
              label={`Confirmed cases`}
              value="ConfirmedCases"
              onChange={(e) => setRadioValue(e.target.value, console.log(e.target.value))}
              checked={radioValue === 'ConfirmedCases' ? true : false}
            />
            <Form.Check
              className="mb-2"
              type={type}
              id={`Daily-new-values-${type}`}
              label={`Daily new values`}
              value="DailyNewValues"
              onChange={(e) => setRadioValue(e.target.value, console.log(e.target.value))}
              checked={radioValue === 'DailyNewValues' ? true : false}
            />
            <Form.Check
              type={type}
              id={`Cumulative-mode-${type}`}
              label={`Cumulative mode`}
              value="CumulativeMode"
              onChange={(e) => setRadioValue(e.target.value, console.log(e.target.value))}
              checked={radioValue === 'CumulativeMode' ? true : false}
            />
          </InputGroup>
        </div>
      ))}
    </Form>
  );
}

export default ReportedCasesComponent;