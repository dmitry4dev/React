import { React, useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch } from 'react-redux';
import { setCountryId } from '../ReduxState';
import { readCovidData } from '../dataService/fileService';
import RouteComponent from './RouteComponent';

function BodyComponent(props) {

  const [covidData, setCovidData] = useState({});
  const [countryList, setCountryList] = useState([]);
  const [countryData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    readCovidData().then((data) => {
      setCovidData(data);

      const list = [];

      for (const key in data) {
        list.push({key, name: data[key].location});

        if (data[key].location === props.initialCountry) {
          dispatch(setCountryId(key));
        }
      }
      setCountryList(list);
    });
  }, []);

  return(
    <Container>
      <RouteComponent
        countryData={countryData}
        covidData={covidData}
        countryCount={Object.keys(covidData).length}
        countryList={countryList}
      />
    </Container>
  );
}

BodyComponent.defaultProps = {
  initialCountry: 'Estonia',
}

export default BodyComponent;