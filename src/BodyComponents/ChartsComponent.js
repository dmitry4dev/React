import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ReportedCasesComponent from './ReportedCasesComponent';
import RankedChartsComponent from './RankedChartsComponent';
import CovidTodayComponent from './CovidTodayComponent';

function ChartsComponent(props) {

  const [selectedTab, setSelectedTab] = useState('');

  return (
    <Tabs
      defaultActiveKey="today-info"
      id="uncontrolled-tab-example"
      className="mb-3"
      fill
      onSelect={(eventKey) => setSelectedTab(eventKey)}
    >
      <Tab eventKey="today-info" title="Covid Today">
        <CovidTodayComponent  title={selectedTab} covidTodayData={props.covidTodayData} />
      </Tab>
      <Tab eventKey="reported-cases" title="Reported Cases">
        <ReportedCasesComponent title={selectedTab} {...props}/>
      </Tab>
      <Tab eventKey="ranked-charts" title="Ranked Charts">
        <RankedChartsComponent title={selectedTab} {...props}/>
      </Tab>
    </Tabs>
  );
}

export default ChartsComponent;