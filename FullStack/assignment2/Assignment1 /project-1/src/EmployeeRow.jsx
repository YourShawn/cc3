/**
 * Wei Xiao 8821418
 * Sougat Thapa 8803690
 * Nishtha Diwanji 8816972
 * Meet Patel 8827363
 */

const EmployeeRow = (props) => {
  return (
    <tr>
      <td>{props.emp._id}</td>
      <td>{props.emp.firstName}</td>
      <td>{props.emp.lastName}</td>
      <td>{props.emp.dateOfJoining}</td>
      <td>{props.emp.age}</td>
      <td>{props.emp.title}</td>
      <td>{props.emp.department}</td>
      <td>{props.emp.employeeType}</td>
      <td>{props.emp.currentStatus}</td>
    </tr>
  );
};

export default EmployeeRow;
