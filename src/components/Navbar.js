import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ATM System</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
<nav className="navbar">
  <h1>ATM System</h1>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/signup">Signup</Link></li>
  </ul>
</nav>