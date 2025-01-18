import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Navbar.css';  // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        
      </div>
      <div className="social-icons">
      <a href="https://www.linkedin.com/in/shejole-prem/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/shejoleprem" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      </div>
    </nav>
  );
};

export default Navbar;
