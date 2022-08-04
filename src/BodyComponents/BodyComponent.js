import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import CityListComponent from './CityListComponent';

function BodyComponent() {
// Здесь мы объявляем хук - useState, чтобы следить за изменениями в select
// который находится в компоненте CityListComponent, selectedCity это переменная, которая принимает в себя выбранный город
// setSelectedCity это функция
  const [selectedCity, setSelectedCity] = useState(null); // Здесь null это значение по умолчанию для переменной selectedCity
  const [inputValue, getInputValue] = useState('');

  return(
    <Container className="mt-2">
      <CityListComponent setSelectedCity={setSelectedCity} getInputValue={getInputValue} /> {/* Здесь передаем аргументы как в функцию, props */}
      <h2>{selectedCity}</h2>
      <h2>{inputValue}</h2>
    </Container>
  );
}

export default BodyComponent;