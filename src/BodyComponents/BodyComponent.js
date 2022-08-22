import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import RouteComponent from './RouteComponent';
import { readCovidData } from '../dataService/fileService';
import { getTodayCovidData } from '../dataService/apiService';

function BodyComponent() {

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [covidData, setCovidData] = useState({});
  const [countryList, setCountryList] = useState([]);
  const [countryData, setCountryData] = useState(null);
  const [covidTodayData, setCovidTodayData] = useState(null);

  async function getData() {
    try {
      const data = await readCovidData();
      return data;
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData().then((data) => {
      setCovidData(data);

      const list = [];

      for (const key in data) {
        list.push({key, name: data[key].location});
      }
      setCountryList(list);
    });
    getTodayCovidData().then(data => setCovidTodayData(data));
  }, [null]);

  return(
    <Container className="mt-2">
      <RouteComponent
        countryData={countryData}
        covidData={covidData}
        countryCount={Object.keys(covidData).length}
        covidTodayData={covidTodayData}
        countryList={countryList}
        />
    </Container>
  );
}

export default BodyComponent;