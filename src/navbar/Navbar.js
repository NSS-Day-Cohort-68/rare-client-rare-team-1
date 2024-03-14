import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar-item">
        <Link to="/posts">Posts</Link>
      </li>
      <li className="navbar-item">
        <Link to="/category-management">Category Management</Link>
        <br></br>
      </li>
      <li className="navbar-item">
        <Link to="/tags">Tag Management</Link>
        <br></br>
      </li>
      <li className="navbar-item">
        <Link to="/logout">Logout</Link>
        <br></br>
      </li>
      <li className="navbar-item">
        <Link to="/create-post">Add Post</Link>
      </li>
    </ul>
  );
};
