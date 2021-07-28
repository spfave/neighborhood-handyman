import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import dateFormat from 'dateformat';

import { useMutation } from '@apollo/client';
import { ADD_PROPOSAL } from '../utils/mutations';
import Auth from '../utils/auth';

export default function CreateJob() {
  const { jobID } = useParams();

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
    const newProposal = {
      user: userID,
      job: jobID,
      ...formState,
      costEstimate: parseFloat(formState.costEstimate),
      timeFrame: parseInt(formState.timeFrame),
    };
    console.log(newProposal);

    try {
      const { data } = addProposal({ variables: { newProposal } });

      setFormState({
        name: '',
        description: '',
        costEstimate: '',
        startEstimate: '',
        timeFrame: '',
      });

      // Send user back to dashboard
      window.location.replace('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  // Renders submit button unclickable until each field meets minimum length
  const validate = () => {
    return (
      formState.name.length > 0 &&
      parseFloat(formState.costEstimate) > 0 &&
      formState.startEstimate.length > 0 &&
      parseInt(formState.timeFrame) > 0
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
          <Form.Label>Estimated Cost</Form.Label>
          <Form.Control
            name="costEstimate"
            type="text"
            value={formState.costEstimate}
            onChange={handleChange}
            placeholder="Enter in dollars"
          ></Form.Control>
        </Form.Group>

        <Form.Group size="lg" controlId="startEstimate">
          <Form.Label>Estimated Start Date</Form.Label>
          <Form.Control
            name="startEstimate"
            type="date"
            value={formState.startEstimate}
            onChange={handleChange}
            min={dateFormat(new Date(), 'isoDate')}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="timeFrame">
          <Form.Label>Estimated Time to Complete (days)</Form.Label>
          <Form.Control
            name="timeFrame"
            type="number"
            value={formState.timeFrame}
            onChange={handleChange}
            placeholder="Enter number of days"
          />
        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validate()}>
          Bid Proposal
        </Button>
      </Form>
    </div>
  );
}
