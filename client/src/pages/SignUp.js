import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/signup.css";

// Mutation imports
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from "../utils/auth";

export default function SignUp() {

    // State variable
    const [formState, setFormState] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            city: ''
        }
    )
    const [isValidLength, setIsValidLength] = useState(false);

    const handleChange = ({ target }) => {
        const { name, value } = target;
    
        setFormState({
          ...formState,
          [name]: value,
        });

        // Toggles green checkbox when minimum length is reached
        if (formState.password.length > 7) {
            setIsValidLength(true);
        } else {
            setIsValidLength(false);
        }
    };

    const [addUser, { error, data }] = useMutation(ADD_USER);

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addProfile.token);
        } catch (e) {
            console.error(e);
        }
    };

    // Renders submit button unclickable until each field meets minimum length
    const validate = () => {
        return (
            formState.firstName.length > 0 &&
            formState.lastName.length > 0 &&
            formState.email.length > 0 && 
            formState.password.length > 8 &&
            formState.city.length > 0
        )
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group size="lg" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    autoFocus
                    name="firstName"
                    type="text"
                    value={formState.firstName}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group size="lg" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    autoFocus
                    name="lastName"
                    type="text"
                    value={formState.lastName}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    autoFocus
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                />
            </Form.Group>

            <p>
                {/* Font awesome icon class name updates symbol shown */}
                <i className={isValidLength ? "fas fa-check-square" : ""}></i> Password must be 8 characters long
            </p>

            <Form.Group size="lg" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                    autoFocus
                    name="city"
                    type="city"
                    value={formState.city}
                    onChange={handleChange}
                />
            </Form.Group>

            <Button block size="lg" type="submit" disabled={!validate()}>
                Sign Up
            </Button>
        </Form>
    )
}

// Built with inspiration from https://serverless-stack.com/chapters/create-a-login-page.html