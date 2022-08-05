import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import CityListComponent from './CityListComponent';
import ChartsComponent from './ChartsComponent';

function BodyComponent() {
// Здесь мы объявляем хук - useState, чтобы следить за изменениями в select
// который находится в компоненте CityListComponent, selectedCity это переменная, которая принимает в себя выбранный город
// setSelectedCity это функция
  const [selectedCity, setSelectedCity] = useState(null); // Здесь null это значение по умолчанию для переменной selectedCity

  return(
    <Container className="mt-2">
      <CityListComponent setSelectedCity={setSelectedCity} /> {/* Здесь передаем аргументы как в функцию, props */}
      <ChartsComponent />
      <h2>{selectedCity}</h2>
    </Container>
  );
}

export default BodyComponent;