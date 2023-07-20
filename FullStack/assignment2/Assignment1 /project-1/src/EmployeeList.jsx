/**
 * Wei Xiao 8821418
 * Sougat Thapa 8803690
 * Nishtha Diwanji 8816972
 * Meet Patel 8827363
 */
import { Component } from "react";
import EmployeeTable from "./EmployeeTable";
import axios from "axios";

class EmployeeList extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      errorInfo: "",
    };
  }
  componentDidMount() {
    console.log("<<<<< componentDidMount ");
    this.findEmployee();
  }

  findEmployee = () => {
    axios.get("/find/employee").then((res) => {
      this.setState({ loading: true });
      console.log("<<<<< >>>>> ", res.data);
      this.setState({ employees: res.data });
    });
  };


  render() {
    console.log(this.state.employees,11111111111);
    return (
      <>
        <h1>Employee Informations</h1>
        <EmployeeTable employees={this.state.employees} />
      </>
    );
  }
}

export default EmployeeList;
