import { Component } from 'react';

class EmployeeAdd extends Component {
  constructor(props){
    super(props);
    this.state={
      errorInfo:""
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const form = document.forms.employeeAdd;
    console.log("----------", form);
    this.props.addNewEmployee({
      firstname: form.firstname.value,
      lastname: form.lastname.value,
      dateOfJoining: form.dateOfJoining.value,
      age: form.age.value,
      title: form.title.value,
      department: form.department.value,
      employeeType: form.employeeType.value,
    });


  };

  render() {
    return (
      <div>
        <div className="errorInfo">{this.props.errorInfo}</div>
        <form name="employeeAdd" onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="tableRow">
              <label>firstname</label>
              <input type="text" name="firstname" placeholder="firstname" />
            </div>
            <div>
              <label>lastname</label>
              <input type="text" name="lastname" placeholder="lastname" />
            </div>
            <div>
              <label>dateOfJoining</label>
              <input
                type="text"
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