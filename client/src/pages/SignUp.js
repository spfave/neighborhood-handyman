import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../assets/css/signup.css";

// Mutation imports
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from "../utils/auth";

export default function SignUp() {

    // State variables
    const [formState, setFormState] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            city: ''
        }
    );
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
                variables: { newUser: { ...formState }},
            });

            Auth.login(data.addUser.token);

            // Clear state if data is successfully submitted
            setFormState({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                city: ''
            });
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
            formState.password.length > 7 &&
            formState.city.length > 0
        )
    }

    return (
        <section className="m-2 mx-sm-5 signup">
            <h1 className="mb-3"><i className="fas fa-hammer"></i> Neighborhood Handyman</h1>
            <div className="card">
                <Form onSubmit={handleFormSubmit} className="m-4">
                    <h2 className="mb-3">Create Your Account</h2>
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

                    <Button block size="lg" type="submit" disabled={!validate()} className="mt-3 mb-2">
                        Sign Up
                    </Button>
                </Form>

                <p className="mx-4">Already have an account? <Link to="/login">Log in</Link>.</p>
            </div>
        </section>
        
    )
}

// Built with inspiration from https://serverless-stack.com/chapters/create-a-login-page.html