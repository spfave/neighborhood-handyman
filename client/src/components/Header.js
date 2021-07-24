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
            <h1>Neighborhood Handyman</h1>   
            <Nav links={navLinks} />             
        </header>
    )
}