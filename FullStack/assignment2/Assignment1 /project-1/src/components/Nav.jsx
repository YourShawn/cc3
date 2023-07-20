import { Outlet, Link } from "react-router-dom";


function Navigation() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active">
            EmployeeList
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/EmployeeAdd" className="nav-link">
            EmployeeAdd
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Navigation;
