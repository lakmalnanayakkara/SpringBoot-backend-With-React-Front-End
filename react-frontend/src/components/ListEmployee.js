import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link, useNavigate } from 'react-router-dom';

export default function ListEmployee() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployeeById(employeeId)
      .then((response) => {
        getAllEmployees();
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="container">
        <h2>List Employees</h2>
        <Link to="employees/add-employee" className="btn btn-primary mb-2">
          Add Employee
        </Link>
        <table className="table table-bordered table-striped">
          <thead>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <Link
                    to={`employees/edit-employee/${employee.id}`}
                    className="btn btn-info"
                  >
                    Update
                  </Link>
                  {}
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: '10px' }}
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
