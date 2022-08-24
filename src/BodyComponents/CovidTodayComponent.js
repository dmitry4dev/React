import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/CovidToday.scss';

function CovidTodayComponent(props) {

  return (
    <Carousel className="wrapper">
      <Carousel.Item>
        <Carousel.Caption className="caption">
          <h3 className="caption__title">Today Deaths</h3>
          <p className="caption__descr caption__descr--danger">{props.covidTodayData?.todayDeaths}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption className="caption">
          <h3 className="caption__title">Today Cases</h3>
          <p className="caption__descr">{props.covidTodayData?.todayCases}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption className="caption">
          <h3 className="caption__title">Today Recovered</h3>
          <p className="caption__descr caption__descr--success">{props.covidTodayData?.todayRecovered}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CovidTodayComponent;