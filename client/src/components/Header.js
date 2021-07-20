import { Component } from "react";
import Nav from "./Nav";
import "../assets/css/header.css";

const navLinks = {
    customer: [
        {
            name: "Dashboard",
            path: "/cust-dashboard"
        },
        {
            name: "My Account",
            path: "/cust-account"
        },
        {
            name: "Log Out",
            path: "/logout"
        },
    ],
    contractor: [
        {
            name: "Dashboard",
            path: "/cont-dashboard"
        },
        {
            name: "My Profile",
            path: "/cont-account"
        },
        {
            name: "Log Out",
            path: "/logout"
        },
    ]
}

export default class Header extends Component {
    render() {
        // Hardcoded for testing until backend is connected
        const UserType = "customer";

        // Binary - user can either be customer or contractor
        return ( UserType === "customer" ? 
            <div className="header">
                <h1>Neighborhood Handyman</h1>   
                <Nav links={navLinks.customer} />             
            </div>
            :
            <div className="header">
                <h1>Neighborhood Handyman</h1>
                <Nav links={navLinks.contractor} />
            </div>
        )
    }
}