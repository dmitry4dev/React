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

// Здесь мы запускаем функцию запроса данных из readCovidData, тоесть из JSON файла owid-covid-data.json
// Дожидаемся ответа через await readCovidData(), записываем этот ответ в константу data
// Через try мы обрабатываем запрос и возвращаем результат в случае успеха
// Если возникает какая то ошибка, то мы её ловим через catch, передаем туда (error), она будет содержать
// в себе ошибку, если такая возникнет и выведет нам её в консоль
  async function getData() {
    try {
      const data = await readCovidData();
      return data;
    } catch(error) {
      console.error(error);
    }
  }

// useEffect это реакт хук, который запускается ТОЛЬКО после того, как весь компонент обработался/зарендерился
// В отличии от useState, useEffect НЕ запускает новую обработку/рендер компонента
// Обычно этот хук используют для обработки ответов от API/JSON, потому что при необходимости он не запускает
// ререндер компонента. UseEffect принимает в себя триггеры, с помощью которых можно влиять на его запуск
// В данном случае, мы используем триггер null, для того чтобы это хук запустился только 1 раз при загрузке компонента.
// Подтянул данные и дальше дал нам с ними работать не ререндеря каждый раз bodyComponent
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