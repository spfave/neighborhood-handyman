import { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import "../assets/css/login.css"

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <section className="m-2 mx-sm-5 login">
      <h1 className="mb-3"><i className="fas fa-hammer"></i> Neighborhood Handyman</h1>
      <div className="card">
        <Form onSubmit={handleFormSubmit} className="m-4">
          <h2 className="mb-3">Log In</h2>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control autoFocus name="email" type="text" value={formState.email} onChange={handleChange}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control autoFocus name="password" type="password" value={formState.password} onChange={handleChange}
            />
          </Form.Group>
          <Button block size="lg" type="submit" className="mt-3 mb-2">Log In</Button>
        </Form>
        <p className="mx-4">Need to create an account? <Link to="/signup">Sign up</Link>.</p>
      </div>
    </section>
  )
}

export default Login

// Built with inspiration from https://serverless-stack.com/chapters/create-a-login-page.html