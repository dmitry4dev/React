import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import { AreaChart } from 'reaviz';

function ReportedCasesComponent(props) {

// Хук useRef помогает нам точечно добраться в ДОМ структуру элемента
// useRef возвращает нам дом элементы, у которых есть свойство .current
// это аналог свойства .target
// В любом реакт элементы мы можем назначить атрибут ref="" и передать его ДОМ в любой параметр
// В константу formRadio мы передаем ДОМ структуру формы/радио кнопок в данном случае для того
// чтобы узнать какое радио конкретно выбранно пользователем и оттуда уже тянем нужные нам данные через .current
  const formRadio = useRef(null);
  const [chartData, setChartData] = useState(null);

  console.log('CHARTSCOMPONENT', props.countryData);

// Здесь мы получаем данные только за 2022 год и возвращаем массив с этими данными
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

// Здесь мы обрабатываем в зависимости какие радио кнопки выбранны, эти данные записываются в переменную dataObject
// И на основе этих параметров отрисовываем график
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
        {/* Если нужно описать код на JavaScript внутри реакт тега/компонента, то мы используем фигурные скобки {} */}
          {chartData ? <AreaChart data={chartData} /> : ''}
        </Col>
      </Row>
    </>
  );
}

export default ReportedCasesComponent;