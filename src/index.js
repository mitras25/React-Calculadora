import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calulator from './main/Calculator'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <h1>Calculadora </h1>
    <Calulator/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
