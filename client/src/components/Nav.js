import { NavLink } from "react-router-dom";

const Nav = props => {
    const navLinks = props.links.map((link, index) => {
        return ( <li key={index}>
            <NavLink to={link.path}>{link.name}</NavLink>
        </li> )
    })

    return (
        <nav>
            <ul>
                {navLinks}
            </ul>
        </nav>
    )
}

export default Nav;