import axios from 'axios';

const url = 'http://localhost:8080/api/v1/employees';
class EmployeeService {
  getAllEmployees() {
    return axios.get(url);
  }

  createEmployee(employee) {
    return axios.post(url, employee);
  }

  getEmployeeById(employeeId) {
    return axios.get(url + '/' + employeeId);
  }

  updateEmployeeById(employeeId, employee) {
    return axios.put(url + '/' + employeeId, employee);
  }

  deleteEmployeeById(employeeId) {
    return axios.delete(url + '/' + employeeId);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new EmployeeService();
