/**
 * Wei Xiao 8821418
 * Sougat Thapa 8803690
 * Nishtha Diwanji 8816972
 * Meet Patel 8827363
 */
import { Component } from "react";

class EmployeeAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorInfo: "",
    };
  }

  addNewEmployee = (employee) => {
    console.log(employee,1111111);
    debugger
    if (!employee.firstName) {
      this.setState({ errorInfo: "firstname must be required" });
      return;
    }
    if (!employee.lastName) {
      this.setState({ errorInfo: "lastname must be required" });
      return;
    }
    if (!employee.dateOfJoining) {
      this.setState({ errorInfo: "dateOfJoining must be required" });
      return;
    }

    if (new Date() < new Date(employee.dateOfJoining)) {
      this.setState({ errorInfo: "dateOfJoining must be in past" });
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
    console.log("employee ------- ", employee);
    fetch("/add/employee", {
      body: JSON.stringify({
        firstName: employee.firstName,
        lastName: employee.lastName,
        age: employee.age,
        dateOfJoining: employee.dateOfJoining,
        title: employee.title,
        department: employee.department,
        employeeType: employee.employeeType,
        currentStatus: employee.currentStatus,
      }),
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
    // this.findEmployee();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const form = document.forms.employeeAdd;
    
      const employee = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        dateOfJoining: form.elements.dateOfJoining.value,
        age: form.elements.age.value,
        title: form.elements.title.value,
        department: form.elements.department.value,
        employeeType: form.elements.employeeType.value,
      };
    this.addNewEmployee(employee);
  };

  render() {
    return (
      <div>
        <div className="errorInfo">{this.props.errorInfo}</div>
        <form name="employeeAdd" onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="tableRow">
              <label>firstname</label>
              <input type="text" name="firstName" placeholder="first name" />
            </div>
            <div>
              <label>lastname</label>
              <input type="text" name="lastName" placeholder="last name" />
            </div>
            <div>
              <label>dateOfJoining</label>
              <input
                type="date"
                name="dateOfJoining"
                placeholder="dateOfJoining"
              />
            </div>
            <div>
              <label>age</label>
              <input type="number" name="age" placeholder="age" />
            </div>
            <div>
              <label>title</label>
              <select name="title">
                <option value="Employee">Employee</option>
                <option value="Manager">Manager</option>
                <option value="Director">Director</option>
                <option value="VP">VP</option>
              </select>
            </div>
            <div>
              <label>department</label>
              <select name="department">
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
                <option value="HR">HR</option>
                <option value="Engineering">Engineering</option>
              </select>
            </div>
            <div>
              <label>employeeType</label>
              <select name="employeeType">
                <option value="FullTime">FullTime</option>
                <option value="PartTime">PartTime</option>
                <option value="Contract">Contract</option>
                <option value="Seasonal">Seasonal</option>
              </select>
            </div>
            {/* <div>
              <label>currentStatus</label>
              <input
                type="text"
                name="currentStatus"
                placeholder="currentStatus"
              />
            </div> */}

            <button>Add Employee</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EmployeeAdd;
