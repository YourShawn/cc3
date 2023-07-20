/**
 * Wei Xiao 8821418
 * Sougat Thapa 8803690
 * Nishtha Diwanji 8816972
 * Meet Patel 8827363
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import EmployeeList from './EmployeeList';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
