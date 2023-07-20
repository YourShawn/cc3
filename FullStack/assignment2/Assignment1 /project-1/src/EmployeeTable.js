/**
 * Wei Xiao 8821418
 * Sougat Thapa 8803690
 * Nishtha Diwanji 8816972
 * Meet Patel 8827363
 */
import EmployeeRow from "./EmployeeRow";

const EmployeeList = (props) => {
  const employeeRows = props.employees.map((emp) => {
    return <EmployeeRow emp={emp} key={emp._id} />;
  });

  return (
    <div>
      <table className="bordered-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>data of joining</th>
            <th>age</th>
            <th>title</th>
            <th>department</th>
            <th>type</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>{employeeRows}</tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
