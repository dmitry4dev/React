import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import { AreaChart } from 'reaviz';

function ReportedCasesComponent(props) {

  const [chartData, setChartData] = useState(null);

  console.log('CHARTSCOMPONENT', props.countryData);

  const yearData = props.countryData?.data.filter(data => new Date(data.date).getFullYear() === 2022);


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

    setChartData(yearData.map(data => {
      return {
          key: new Date(data.date),
          data: data[dataObject] || 0
        }
    }));

    console.log('deathCount', deathCount.checked)
    console.log('ConfirmedCases', confirmedCases.checked)
    console.log('DailyNewValues', dailyNewValues.checked)
    console.log('CumulativeMode', cumulativeMode.checked)
  }

  return (
    <>
    <div>{props.title}</div>
      <Row className="pt-3 pb-3">
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
          {chartData ? <AreaChart data={chartData} /> : ''}
        </Col>
      </Row>
    </>
  );
}

export default ReportedCasesComponent;