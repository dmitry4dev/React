import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ReportedCasesComponent from './ReportedCasesTabComponent';
import RankedChartsComponent from './RankedChartsComponent';
import { propTypes } from 'react-bootstrap/esm/Image';

function ChartsComponent() {

  const [selectedTab, setSelectedTab] = useState('');

  return (
    <Tabs
      defaultActiveKey="reported-cases"
      id="uncontrolled-tab-example"
      className="mb-3"
      fill
      onSelect={(eventKey) => setSelectedTab(eventKey)}
    >
      <Tab eventKey="reported-cases" title="Reported Cases">
        <ReportedCasesComponent title={selectedTab} />
      </Tab>
      <Tab eventKey="ranked-charts" title="Ranked Charts">
        <RankedChartsComponent title={selectedTab} />
      </Tab>
    </Tabs>
  );
}

export default ChartsComponent;