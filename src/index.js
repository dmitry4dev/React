import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// React Redux это вспомогающая библиотека для того чтобы связать redux с react
import { Provider } from 'react-redux';
import { storage } from './ReduxState';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={storage}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
