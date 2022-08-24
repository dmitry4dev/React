import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BarChart } from 'reaviz';

function RankedChartsComponent(props) {

  const formRadio = useRef(null);
  const [chartData, setChartData] = useState(null);
  const {cases, count} = useParams();

  const initialData = Object.values(props.covidData).slice(0, count || 9).map(data => {

    let objectData = 'total_deaths';

    if (cases) {
      objectData = 'total_cases';
    }

    return {
        key: data.location,
        data: data.data.reverse()[0][objectData] || 0
      }
  });

  function handleOnInput() {
    const [totalNumberOfDeaths, totalNumberOfCases, countriesCount] = formRadio.current;
    const selectedCountriesCount = [...countriesCount].find(option => option.selected === true);

    let objectData;

    if (totalNumberOfDeaths.checked) {
      objectData = 'total_deaths';
    }
    if (totalNumberOfCases.checked) {
      objectData = 'total_cases';
    }

    setChartData(Object.values(props.covidData).slice(0, selectedCountriesCount.value).map(data => {
      return {
          key: data.location,
          data: data.data[0][objectData] || 0
        }
    }));
  }

  const countryListCount = [];

  for (let i = 1; i <= props.countryCount; ++i) {
    countryListCount.push((<option key={i} value={i}>{i}</option>));
  }

  return(
    <>
      <Row className="pt-5 pb-3">
        <Col sm={4} className="mr-2">
          <Form ref={formRadio} onInput={handleOnInput}>
            <Form.Check
              className="mb-1"
              type={'radio'}
              label={`Total number of deaths`}
              name='group1'
              defaultChecked={!cases}
            />
            <Form.Check
              className="mb-3"
              type={'radio'}
              label={`Total number of cases`}
              name='group1'
              defaultChecked={cases}
            />
            <label className="mb-1">Select countries count</label>
            {countryListCount.length ? <Form.Select defaultValue={count}>{countryListCount}</Form.Select> : ''}
          </Form>
        </Col>
        <Col sm={8}>
        {(chartData || initialData) ? <BarChart height={300} data={chartData || initialData} /> : ''}
        </Col>
      </Row>
    </>
  );
}

export default RankedChartsComponent;