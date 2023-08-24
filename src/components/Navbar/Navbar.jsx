import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import {FiSearch} from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-section">
        <Link to="/" className="navbar-logo">
          Hotelship
        </Link>
      </div>
      <div className="navbar-section">
        <div className="search-bar">
          <FiSearch fontSize="1.6rem"/>
          <input type="text" placeholder="Search by State, City, Locality..." className="search-input" />
        </div>
      </div>
      <div className="navbar-section">
        <div className="nav-routes">
          <Link to="/deals" className="nav-route">Deals</Link>
          <Link to="/about" className="nav-route">About Us</Link>
          <Link to="/contact" className="nav-route">Contact Us</Link>
        </div>
        <div className="auth-buttons">
          <Link to="/login" className="auth-button">Login</Link>
          <Link to="/signup" className="auth-button">Signup</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
