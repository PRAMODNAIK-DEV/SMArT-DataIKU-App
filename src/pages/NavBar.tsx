import { Link } from "react-router-dom";
import "../styles/NavBar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="sidebar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">🏠 Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">ℹ️ About</Link>
        </li>
        <li className="nav-item">
          <Link to="/students" className="nav-link">Students</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
