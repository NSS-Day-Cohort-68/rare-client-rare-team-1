import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/login">Login</Link>
      </li>
      <li className="navbar-item">
        <Link to="/category-management">Category Management</Link>
        <br></br>
      </li>
      <li className="navbar-item">
        <Link to="/tags">Tags</Link>
        <br></br>
      </li>
      <li className="navbar-item">
        <Link to="/register">Register</Link>
        <br></br>
      </li>
    </ul>
  )
}
