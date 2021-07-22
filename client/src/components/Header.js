import Nav from "./Nav";
import "../assets/css/header.css";

const navLinks = [
    {
        name: "Dashboard",
        path: "/dashboard"
    },
    {
        name: "My Account",
        path: "/account"
    },
    {
        name: "Log Out",
        path: "/logout"
    },
]

export default function Header() {
    return ( 
        <div className="header">
            <h1>Neighborhood Handyman</h1>   
            <Nav links={navLinks} />             
        </div>
    )
}