import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import { AreaChart } from 'reaviz';

function ReportedCasesComponent(props) {

// Хук useRef возвращает нам дом элементы, у которых есть свойство .current
// это аналог свойства .target
  const formRadio = useRef(null);

  function handleOnInput() {
    const [deathCount, confirmedCases, dailyNewValues, cumulativeMode] = formRadio.current;

    console.log('deathCount', deathCount.checked)
    console.log('ConfirmedCases', confirmedCases.checked)
    console.log('DailyNewValues', dailyNewValues.checked)
    console.log('CumulativeMode', cumulativeMode.checked)
  }

// Если обязательно нужен реактовский тег, но по смыслу никакой не подходит
// то можно всё обернуть в пустой тег как здесь <></>
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
          <AreaChart
            data={[
              { key: new Date('11/29/2019'), data: 8 },
              { key: new Date('11/30/2019'), data: 13 },
              { key: new Date('12/1/2019'), data: 6 },
            ]}
          />
        </Col>
      </Row>
    </>
  );
}

export default ReportedCasesComponent;