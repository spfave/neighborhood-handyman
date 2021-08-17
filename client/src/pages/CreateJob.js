import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import dateFormat from 'dateformat';

import { useMutation } from '@apollo/client';
import { ADD_JOB } from '../utils/mutations';
import Auth from '../utils/auth';

export default function CreateJob() {
  // State variables
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    skills: [],
    city: '',
    needDate: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [addJob] = useMutation(ADD_JOB);

  const handleJobFormSubmit = async (event) => {
    event.preventDefault();

    const userID = Auth.getUser().data._id;
    const newJob = { user: userID, ...formState };

    try {
      const { data } = addJob({ variables: { newJob } });

      setFormState({
        name: '',
        description: '',
        city: '',
        needDate: '',
      });
      
      // Send user back to dashboard
      window.location.replace("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  // Renders submit button unclickable until each field meets minimum length
  const validate = () => {
    return formState.name.length > 0 && formState.city.length > 0;
  };

  return (
    <div className="container">
      <Form onSubmit={handleJobFormSubmit}>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Job Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={formState.name}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group size="lg" controlId="description">
          <Form.Label>Job Description</Form.Label>
          <Form.Control
            name="description"
            as="textarea"
            rows={3}
            value={formState.description}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group size="lg" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            name="city"
            type="text"
            value={formState.city}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group size="lg" controlId="needDate">
          <Form.Label>Need Date</Form.Label>
          <Form.Control
            type="date"
            name="needDate"
            value={formState.needDate}
            onChange={handleChange}
            min={dateFormat(new Date(), 'isoDate')}
          />
        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validate()} className="mt-3">
          Post Job
        </Button>
      </Form>
    </div>
  );
}
