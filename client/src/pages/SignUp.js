import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../assets/css/signup.css";

function SignUp() {

    // State variables
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [isValidLength, setIsValidLength] = useState(false);

    // Renders submit button unclickable until each field meets minimum length
    function validate() {
        return (
            firstName.length > 0 &&
            lastName.length > 0 &&
            email.length > 0 && 
            password.length > 8 &&
            city.length > 0
        )
    }

    // Toggles green checkbox when minimum length is reached
    function validatePassword(event) {
        setPassword(event.target.value);

        if (password.length > 7) {
            setIsValidLength(true);
        } else {
            setIsValidLength(false);
        }
    }

    function preventDefault(event) {
        event.preventDefault();
    }

    return (
        <Form onSubmit={preventDefault}>
            <Form.Group size="lg" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </Form.Group>

            <Form.Group size="lg" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </Form.Group>

            <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    autoFocus
                    type="password"
                    value={password}
                    onChange={validatePassword}
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
                    type="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </Form.Group>

            <Button block size="lg" type="submit" disabled={!validate()}>
                Sign Up
            </Button>
        </Form>
    )
}

export default SignUp;

// Built with inspiration from https://serverless-stack.com/chapters/create-a-login-page.html