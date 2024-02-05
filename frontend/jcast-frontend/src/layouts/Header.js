import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import './Header.css'; // Adjust the path as necessary

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">MyCompany</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;