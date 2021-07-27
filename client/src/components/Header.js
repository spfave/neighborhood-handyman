import { Link } from "react-router-dom";
import Nav from "./Nav";
import "../assets/css/header.css";

const navLinks = [
    {
        name: "My Dashboard",
        path: "/dashboard"
    },
    {
        name: "Job Listings",
        path: "/listings"
    },
    {
        name: "My Account",
        path: "/account"
    }
]

export default function Header() {
    return ( 
        <header className="header">
            <Link to="/" id="home-link">
                <h1 className="mb-4"><i className="fas fa-hammer"></i> Neighborhood Handyman</h1>
            </Link>
            <Nav links={navLinks} />             
        </header>
    )
}