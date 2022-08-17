import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ReportedCasesComponent from './ReportedCasesTabComponent';
import RankedChartsComponent from './RankedChartsComponent';

function ChartsComponent(props) {

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
        {/* {...props} Таким образом мы передаем ВСЕ props которые были назначены в
            этом компоненте ChartsComponent дальше в ReportedCasesComponent
        */}
        <ReportedCasesComponent title={selectedTab} {...props}/>
      </Tab>
      <Tab eventKey="ranked-charts" title="Ranked Charts">
        <RankedChartsComponent title={selectedTab} />
      </Tab>
    </Tabs>
  );
}

export default ChartsComponent;