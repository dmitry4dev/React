import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReportedCasesComponent from './RepCasesTabComponent';

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
        <div class="mb-3">{selectedTab}</div>
        <ReportedCasesComponent />
      </Tab>
      <Tab eventKey="ranked-charts" title="Ranked Charts">
        <div>{selectedTab}</div>
        <Row>
          <Col sm={4}>Mini Col</Col>
          <Col sm={8}>Large Col</Col>
        </Row>
      </Tab>
    </Tabs>
  );
}

export default ChartsComponent;