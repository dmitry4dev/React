import React from 'react';

// React-router-dom это библиотека, которая связывает между собой компоненты через URL
// По сути это навигация по странице href="...", только в react таким образом можно
// навести навигацию между компонентами приложения
import { Routes, Route } from 'react-router-dom';
import ReportedCasesComponent from './ReportedCasesComponent';
import RankedChartsComponent from './RankedChartsComponent';
import CovidTodayComponent from './CovidTodayComponent';

// Routes это wrapper наших маршрутов, которые существуют в проекте
// в нём мы описываем пути до компонентов
// Route это сам маршрут в который мы передаем путь до компонента и сам компонент
// path совпадает с нашим URL и рендерит подходящий компонент
// Через двоеточие : мы передаем переменные, которые содержать в себе параметры для URL
// И в том компоненте, куда мы передали эти переменные/переменную мы должны использовать хук useParams
// Для правильной работы маршрутизатора мы прописываем далее всё в тег { Link }

function RouteComponent(props) {
  return (
    <Routes>
      <Route path="/" element={<CovidTodayComponent />} />
      <Route path="/reported-cases" element={<ReportedCasesComponent {...props} />} />
      <Route path="/reported-cases/:country" element={<ReportedCasesComponent {...props} />} />
      <Route path="/ranked-charts/:covidInfo/:count" element={<RankedChartsComponent {...props} />} />
    </Routes>
  );
}

export default RouteComponent;