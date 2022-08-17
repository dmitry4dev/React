import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BarChart } from 'reaviz';

function RankedChartsComponent() {

  const formRadio = useRef(null);

  function handleOnInput() {
    const [totalNumberOfDeaths, totalNumberOfCases, countriesCount] = formRadio.current;
    const selectedCountriesCount = [...countriesCount].find(option => option.selected === true);

    console.log('deaths', totalNumberOfDeaths.checked)
    console.log('cases', totalNumberOfCases.checked)
    console.log('select', selectedCountriesCount.value)
  }

  return(
    <>
      <Row className="pt-3 pb-3">
        <Col sm={4}>
          <Form ref={formRadio} onInput={handleOnInput}>
            <Form.Check
              className="mb-1"
              type={'radio'}
              label={`Total number of deaths`}
              name='group1'
              defaultChecked={true}
            />
            <Form.Check
              className="mb-3"
              type={'radio'}
              label={`Total number of cases`}
              name='group1'
            />
            <label className="mb-1">Select countries count</label>
            <Form.Select defaultValue="7">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </Form.Select>
          </Form>
        </Col>
        <Col sm={8}>
        <BarChart
          data={[
            { key: 'DLP', data: 13 },
            { key: 'SIEM', data: 2 },
            { key: 'Endpoint', data: 7 }
          ]}
        />
        </Col>
      </Row>
    </>
  );
}

export default RankedChartsComponent;