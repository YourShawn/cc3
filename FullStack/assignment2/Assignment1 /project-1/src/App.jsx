
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from "./components/Nav";
import EmployeeList from './EmployeeList';
import EmployeeAdd from "./EmployeeAdd";


class App extends Component {
  
  render(){
    return (
      <Routes>
          <Route path="/" element={<Navigation />}>
              <Route index element={<EmployeeList />} />
              <Route path="/EmployeeAdd" element={<EmployeeAdd />} />
          </Route>
      </Routes>
    );
  }
}

export default App;
