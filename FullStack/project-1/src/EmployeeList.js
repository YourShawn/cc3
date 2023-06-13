
import { Component } from "react";
import EmployeeTable from './EmployeeTable'
import axios from "axios";
import EmployeeAdd from "./EmployeeAdd";

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
  
  findEmployee = ()=>{
  axios.get("/find/employee").then((res) => {
    this.setState({ loading: true });
    console.log("<<<<< >>>>> ", res.data);
    this.setState({ employees: res.data });
  });
  }

  addNewEmployee = (employee) => {
    if (!employee.firstname) {
      this.setState({ errorInfo: "firstname must be required" });
      return;
    }
    if (!employee.lastname) {
      this.setState({ errorInfo: "lastname must be required" });
      return;
    }
    if (!employee.dateOfJoining) {
      this.setState({ errorInfo: "dateOfJoining must be required" });
      return;
    }
    if (!employee.age) {
      this.setState({ errorInfo: "age must be required" });
      return;
    }
    if (employee.age < 20 || employee.age > 70) {
      this.setState({ errorInfo: "age must be greater 20 and less 70" });
      return;
    }
    if (!employee.title) {
      this.setState({ errorInfo: "title must be required" });
      return;
    }
    if (!employee.department) {
      this.setState({ errorInfo: "department must be required" });
      return;
    }
    if (!employee.employeeType) {
      this.setState({ errorInfo: "employeeType must be required" });
      return;
    }

    this.setState({ errorInfo: "" });

    fetch("/add/employee", {
      body: JSON.stringify({ ...employee }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("<<<<< >>>>> ", data.data);
      })
      .catch((err) => {
        console.log("<<<<< error", err);
      });
    this.findEmployee();
  };

  render() {
    console.log(this.state.employees);
    return (
      <>
        <h1>Employee Informations</h1>
        <EmployeeTable employees={this.state.employees} />
        <br />
        <EmployeeAdd
          addNewEmployee={this.addNewEmployee}
          errorInfo={this.state.errorInfo}
        />
      </>
    );
  }
}

export default EmployeeList;
