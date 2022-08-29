import React, { useRef, useState, useEffect } from 'react';
import { AreaChart } from 'reaviz';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import '../styles/ReportedCases.scss';
import { setCheckedRadio } from '../ReduxState';
import CountryListComponent from './CountryListComponent';

function ReportedCasesComponent(props) {

  const formRadio = useRef(null);
  const [chartData, setChartData] = useState(null);
  const [countryId, setcountryId] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();
  const id = countryId || params.country || props.initialCountryId;

  useEffect(() => {
    setChartData(props.covidData[id]?.data?.map(data => {
      return {
          key: new Date(data.date),
          data: data.new_deaths || 0
        }
    }));
    dispatch(setCheckedRadio('total_deaths'));
  }, [id, props.covidData]);

  function handleCountrySelect(countryKey) {
    setcountryId(countryKey);
  }

  function handleOnInput() {
    const [deathCount, confirmedCases, dailyNewValues, cumulativeMode] = formRadio.current;

    let dataObject;

    dispatch(setCheckedRadio(deathCount.checked ? 'total_deaths' : 'total_cases'));

    if (deathCount.checked && dailyNewValues.checked) {
      dataObject = 'new_deaths';
    }
    if (deathCount.checked && cumulativeMode.checked) {
      dataObject = 'total_deaths';
    }
    if (confirmedCases.checked && dailyNewValues.checked) {
      dataObject = 'new_cases';
    }
    if (confirmedCases.checked && cumulativeMode.checked) {
      dataObject = 'total_cases';
    }

    setChartData(props.covidData[id]?.data?.map(data => {
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
          country={params.country} /> : ''
      }

      <Row>
        <Col sm={4}>
          <Form className="reported-cases-form" ref={formRadio} onInput={handleOnInput}>
            <Form.Check
              className="radio-btn"
              type={'radio'}
              label={`Death count`}
              name='group1'
              defaultChecked={true}
            />
            <Form.Check
              className="radio-btn"
              type={'radio'}
              label={`Confirmed cases`}
              name='group1'
            />
            <Form.Check
              className="radio-btn"
              type={'radio'}
              label={`Daily new values`}
              name='group2'
              defaultChecked={true}
            />
            <Form.Check
              className="radio-btn"
              type={'radio'}
              label={`Cumulative mode`}
              name='group2'
            />
          </Form>
        </Col>
        <Col sm={8}>
          {chartData ? (<AreaChart className="area-chart" height={300}  data={chartData} />) : ''}
        </Col>
      </Row>
    </>
  );
}

ReportedCasesComponent.defaultProps = {
  initialCountryId: 'OWID_WRL',
}

export default ReportedCasesComponent;