import { NavLink } from "react-router-dom";
import Auth from "../utils/auth";

const Nav = props => {
    const navLinks = props.links.map((link, index) => {
        return ( <li key={index}>
            <NavLink to={link.path}>{link.name}</NavLink>
        </li> )
    })

    const logout = () => {
        Auth.logout();
    }

    return (
        <nav>
            <ul>
                {navLinks}
                <li>
                    <button onClick={logout}>Log Out</button>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;