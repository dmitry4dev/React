import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReportedCasesComponent from './ReportedCasesComponent';
import RankedChartsComponent from './RankedChartsComponent';
import CovidTodayComponent from './CovidTodayComponent';

function RouteComponent(props) {

  const env = process.env.NODE_ENV;
  const url = process.env[`REACT_APP_HOME_URL_${env}`];

  return (
    <Routes>
      <Route path={`${url}/`} element={<CovidTodayComponent />} />
      <Route path={`${url}/reported-cases`} element={<ReportedCasesComponent {...props} />} />
      <Route path={`${url}/reported-cases/:country`} element={<ReportedCasesComponent {...props} />} />
      <Route path={`${url}/ranked-charts/:covidInfo/:count`} element={<RankedChartsComponent {...props} />} />
    </Routes>
  );
}

export default RouteComponent;