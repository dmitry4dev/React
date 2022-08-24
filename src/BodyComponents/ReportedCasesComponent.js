import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import { AreaChart } from 'reaviz';
import CountryListComponent from './CountryListComponent';

function ReportedCasesComponent(props) {

  const formRadio = useRef(null);
  const [chartData, setChartData] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const { country } = useParams();

  const initialCountry = countryData || props.covidData[Object.keys(props.covidData).filter(key => key === country)];

  const initialData = initialCountry?.data?.map(data => {
    return {
        key: new Date(data.date),
        data: data.new_deaths || 0
      }
  });

  function handleCountrySelect(countryKey) {
    setCountryData(props.covidData[countryKey]);
  }

  function handleOnInput() {
    const [deathCount, confirmedCases, dailyNewValues, cumulativeMode] = formRadio.current;
    let dataObject;

    if (deathCount.checked && dailyNewValues.checked) {
      dataObject = 'new_deaths';
    }
    if (deathCount.checked && cumulativeMode.checked) {
      dataObject = 'total_deaths';
    }
    if (confirmedCases.checked && dailyNewValues.checked) {
      dataObject = 'new_cases';
    }
    if (confirmedCases.checked && dailyNewValues.checked) {
      dataObject = 'total_cases';
    }

    setChartData(countryData.data.map(data => {
      return {
          key: new Date(data.date),
          data: data[dataObject] || 0
        }
    }));
  }

  return (
    <>
      {props.countryList.length ?
        <CountryListComponent
          countryList={props.countryList}
          handleCountrySelect={handleCountrySelect}
          country={country} /> : ''
      }

      <Row className="pt-5 pb-3">
        <Col sm={4}>
          <Form ref={formRadio} onInput={handleOnInput}>
            <Form.Check
              className="mb-1"
              type={'radio'}
              label={`Death count`}
              name='group1'
              defaultChecked={true}
            />
            <Form.Check
              className="mb-1"
              type={'radio'}
              label={`Confirmed cases`}
              name='group1'
            />
            <Form.Check
              className="mb-1 mt-3"
              type={'radio'}
              label={`Daily new values`}
              name='group2'
              defaultChecked={true}
            />
            <Form.Check
              type={'radio'}
              label={`Cumulative mode`}
              name='group2'
            />
          </Form>
        </Col>
        <Col sm={8}>
          {(chartData || initialData) ? <AreaChart height={300} data={chartData || initialData} /> : ''}
        </Col>
      </Row>
    </>
  );
}

export default ReportedCasesComponent;