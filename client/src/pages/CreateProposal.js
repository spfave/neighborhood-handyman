import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import dateFormat from 'dateformat';

import { useMutation } from '@apollo/client';
import { ADD_PROPOSAL } from '../utils/mutations';
import Auth from '../utils/auth';

export default function CreateJob({ jobID }) {
  // State variables
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    costEstimate: '',
    startEstimate: '',
    timeFrame: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [addProposal, { error }] = useMutation(ADD_PROPOSAL);

  const handleJobFormSubmit = async (event) => {
    event.preventDefault();

    const userID = Auth.getUser().data._id;
    // const jobID = ;
    const newProposal = { user: userID, job: jobID, ...formState };

    try {
      const { data } = addProposal({ variables: { newProposal } });

      setFormState({
        name: '',
        description: '',
        costEstimate: '',
        stateEstimate: '',
        timeFrame: '',
      });
      // next steps? direct  back to dashboard?
    } catch (error) {
      console.log(error);
    }
  };

  // Renders submit button unclickable until each field meets minimum length
  const validate = () => {
    return (
      formState.name.length > 0 &&
      formState.costEstimate.length > 0 &&
      formState.startEstimate > 0 &&
      formState.timeFrame > 0
    );
  };

  return (
    <div className="container">
      <Form onSubmit={handleJobFormSubmit}>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Proposal Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={formState.name}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group size="lg" controlId="description">
          <Form.Label>Proposal Description</Form.Label>
          <Form.Control
            name="description"
            as="textarea"
            rows={3}
            value={formState.description}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group size="lg" controlId="costEstimate">
          <Form.Label>Cost Estimate</Form.Label>
          <Form.Control
            name="costEstimate"
            type="text"
            value={formState.costEstimate}
            onChange={handleChange}
            placeholder="Enter in dollars"
          ></Form.Control>
        </Form.Group>

        <Form.Group size="lg" controlId="stateEstimate">
          <Form.Label>Start Date Estimate</Form.Label>
          <Form.Control
            name="stateEstimate"
            type="date"
            value={formState.stateEstimate}
            onChange={handleChange}
            min={dateFormat(new Date(), 'isoDate')}
            placeholder="mm/dd/yyyy"
          />
        </Form.Group>

        <Form.Group size="lg" controlId="timeFrame">
          <Form.Label>Time to Complete Estimate</Form.Label>
          <Form.Control
            name="timeFrame"
            type="text"
            value={formState.timeFrame}
            onChange={handleChange}
            placeholder="Enter number of days"
          />
        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validate()}>
          Send Proposal
        </Button>
      </Form>
    </div>
  );
}
