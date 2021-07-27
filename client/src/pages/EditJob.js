import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import dateFormat from 'dateformat';

import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_JOB } from '../utils/queries';
import { EDIT_JOB } from '../utils/mutations';

import Auth from '../utils/auth';
// import dateConverter from '../utils/dateConverter';

export default function EditJob() {
  // State variables
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    skills: [],
    city: '',
    needDate: '',
  });

  const { jobID } = useParams();
  const { loading, data } = useQuery(QUERY_JOB, { variables: { jobID } });
  const [editJob, { error }] = useMutation(EDIT_JOB);

  useEffect(() => {
    if (data) {
      const jobData = data.getJob;
      setFormState({
        name: jobData.name,
        description: jobData.description,
        skills: jobData.skills,
        city: jobData.city,
        needDate: dateFormat(Date(jobData.needDate), 'isoDate'),
      });
    }
  }, [data]);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleJobFormSubmit = async (event) => {
    event.preventDefault();

    const userID = Auth.getUser().data._id;
    const updateJob = { user: userID, ...formState };
    try {
      const { data } = editJob({ variables: { jobID, updateJob } });

      setFormState({
        name: '',
        description: '',
        city: '',
        needDate: '',
      });
      // next steps? direct  back to dashboard?
    } catch (error) {
      console.log(error);
    }
  };

  // Renders submit button unclickable until each field meets minimum length
  const validate = () => {
    return formState.name.length > 0 && formState.city.length > 0;
  };

  if (loading) return <div>Loading...</div>;

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

        <Button block size="lg" type="submit" disabled={!validate()}>
          Update Job
        </Button>
      </Form>
    </div>
  );
}
