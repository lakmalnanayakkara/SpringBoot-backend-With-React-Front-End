import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import EmployeeService from '../services/EmployeeService';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function AddEmployee() {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [emailId, setEmailid] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, emailId };
    if (id) {
      EmployeeService.updateEmployeeById(id, employee)
        .then((response) => {
          console.log(response.data);
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      EmployeeService.createEmployee(employee)
        .then((response) => {
          console.log(response.data);
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        setFirstname(response.data.firstName);
        setLastname(response.data.lastName);
        setEmailid(response.data.emailId);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  };

  return (
    <div className="container">
      {title()}
      <Form onSubmit={saveOrUpdateEmployee}>
        <Form.Group className="mb-3">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="name"
            required
            value={firstName}
            placeholder="Enter Your First Name"
            onChange={(e) => setFirstname(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="name"
            required
            value={lastName}
            placeholder="Enter Your Last Name"
            onChange={(e) => setLastname(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            required
            value={emailId}
            placeholder="Enter Your Email"
            onChange={(e) => setEmailid(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <div className="mb-3">
          <Button className="btn btn-success" type="submit">
            Submit
          </Button>
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
        </div>
      </Form>
    </div>
  );
}
