import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import dateFormat from 'dateformat';

import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER_PROPOSAL } from '../utils/queries';
import { EDIT_PROPOSAL } from '../utils/mutations';

import Auth from '../utils/auth';

export default function EditProposal() {
  // State variables
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    costEstimate: '',
    startEstimate: '',
    timeFrame: '',
  });

  const { proposalID } = useParams();
  const { loading, data } = useQuery(QUERY_USER_PROPOSAL, {
    variables: { proposalID },
  });
  const [editProposal, { error }] = useMutation(EDIT_PROPOSAL);

  useEffect(() => {
    if (data) {
      const proposalData = data.getProposal;
      const dateValue = proposalData.startEstimate
        ? dateFormat(new Date(parseInt(proposalData.startEstimate)), 'isoDate')
        : '';

      setFormState({
        name: proposalData.name,
        description: proposalData.description,
        costEstimate: proposalData.costEstimate,
        startEstimate: dateValue,
        timeFrame: proposalData.timeFrame,
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

  const handleProposalFormSubmit = async (event) => {
    event.preventDefault();

    const userID = Auth.getUser().data._id;
    const updateProp = {
      user: userID,
      ...formState,
      costEstimate: parseFloat(formState.costEstimate),
      timeFrame: parseInt(formState.timeFrame),
    };
    try {
      const { data } = editProposal({ variables: { proposalID, updateProp } });

      setFormState({
        name: '',
        description: '',
        costEstimate: '',
        startEstimate: '',
        timeFrame: '',
      });

      window.location.replace('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  const validate = () => {
    return (
      formState.name.length > 0 &&
      parseFloat(formState.costEstimate) > 0 &&
      formState.startEstimate.length > 0 &&
      parseInt(formState.timeFrame) > 0
    );
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <Form onSubmit={handleProposalFormSubmit}>
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

        <Button block size="lg" type="submit" disabled={!validate()} className="mt-3">
          Update Proposal
        </Button>
      </Form>
    </div>
  );
}
