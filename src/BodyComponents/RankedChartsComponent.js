import { React, useRef, useState, useEffect } from 'react';
import { BarChart } from 'reaviz';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/RankedChart.scss';

function RankedChartsComponent(props) {

  const formRadio = useRef(null);
  const [chartData, setChartData] = useState(null);
  const {covidInfo, count} = useParams();

  useEffect(() => {
    setChartData(
      Object.values(props.covidData).slice(0, count || props.initialCountryCount).map(data => {
        return {
            key: data.location,
            data: data.data.reverse()[0][covidInfo] || 0
          }
      }));
  }, [props.covidData, count, covidInfo, props.initialCountryCount]);

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
      <Row>
        <Col md={4}>
          <Form className="ranked-chart-form" ref={formRadio} onInput={handleOnInput}>
            <Form.Check
              className="radio-btn-ranked"
              type={'radio'}
              label={`Total number of deaths`}
              name='group1'
              defaultChecked={covidInfo === 'total_deaths'}
            />
            <Form.Check
              className="radio-btn-ranked"
              type={'radio'}
              label={`Total number of cases`}
              name='group1'
              defaultChecked={covidInfo === 'total_cases'}
            />
            <div className="ranked-chart-select-wrapper">
              <label className="form-label">Select countries count</label>
              {countryListCount.length ? <Form.Select className="ranked-chart-select" defaultValue={count}>{countryListCount}</Form.Select> : ''}
            </div>
          </Form>
        </Col>
        <Col md={8}>
          {chartData ? <BarChart className="bar-chart" data={chartData} /> : ''}
        </Col>
      </Row>
    </>
  );
}

RankedChartsComponent.defaultProps = {
  initialCountryCount: 9,
}

export default RankedChartsComponent;