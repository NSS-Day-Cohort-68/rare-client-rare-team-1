import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link to="/login">Login</Link>
            </li>
            <li className="navbar-item">
                <Link to="/categories">Categories</Link>
            </li>
        </ul>
    )
}