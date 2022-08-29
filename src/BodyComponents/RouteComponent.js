import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReportedCasesComponent from './ReportedCasesComponent';
import RankedChartsComponent from './RankedChartsComponent';
import CovidTodayComponent from './CovidTodayComponent';

function RouteComponent(props) {
  return (
    <Routes>
      <Route path="/" element={<CovidTodayComponent />} />
      <Route path="/reported-cases" element={<ReportedCasesComponent {...props} />} />
      <Route path="/reported-cases/:country" element={<ReportedCasesComponent {...props} />} />
      <Route path="/ranked-charts/:covidInfo/:count" element={<RankedChartsComponent {...props} />} />
    </Routes>
  );
}

export default RouteComponent;