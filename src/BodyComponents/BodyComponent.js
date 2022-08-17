import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import CountryListComponent from './CountryListComponent';
import ChartsComponent from './ChartsComponent';
import { readCovidData } from '../dataService/fileService';

function BodyComponent() {

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [covidData, setCovidData] = useState(null);
  const [countryList, setCountryList] = useState([]);
  const [countryData, setCountryData] = useState(null);

  function handleCountrySelect(countryKey) {
    setCountryData(covidData[countryKey]);
  }

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
  }, [null]);

  return(
    <Container className="mt-2">
      <CountryListComponent countryList={countryList} handleCountrySelect={handleCountrySelect} />
      <ChartsComponent countryData={countryData}/>
      <h2>{selectedCountry}</h2>
    </Container>
  );
}

export default BodyComponent;