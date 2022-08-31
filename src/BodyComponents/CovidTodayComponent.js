import { React, useEffect, useState }  from 'react';
import '../styles/CovidToday.scss';
import Carousel from 'react-bootstrap/Carousel';
import { getCovidTodayData } from '../dataService/apiService';


function CovidTodayComponent() {

  const [covidTodayData, setCovidTodayData] = useState(null);

  useEffect(() => {
    getCovidTodayData().then(data => setCovidTodayData(data));
  }, []);

  return (
    <Carousel className="wrapper">
      <Carousel.Item>
        <Carousel.Caption className="caption">
          <h3 className="caption__title">Today Recovered</h3>
          <p className="caption__descr caption__descr--success">{covidTodayData?.todayRecovered}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption className="caption">
          <h3 className="caption__title">Today Deaths</h3>
          <p className="caption__descr caption__descr--danger">{covidTodayData?.todayDeaths}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption className="caption">
          <h3 className="caption__title">Today Cases</h3>
          <p className="caption__descr">{covidTodayData?.todayCases}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CovidTodayComponent;