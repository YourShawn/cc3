

const EmployeeRow = (props) => {
    return (
      <tr>
        <td>{props.emp._id}</td>
        <td>{props.emp.firstname}</td>
        <td>{props.emp.lastname}</td>
        <td>{props.emp.dateOfJoining}</td>
        <td>{props.emp.age}</td>
        <td>{props.emp.title}</td>
        <td>{props.emp.department}</td>
        <td>{props.emp.employeeType}</td>
        <td>{props.emp.currentStatus}</td>
      </tr>
    );
}

export default EmployeeRow;
