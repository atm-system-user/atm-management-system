import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserPlus, FaTachometerAlt } from 'react-icons/fa';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <Link to="/" className="nav-item">
        <FaHome size={20} />
        <span>Home</span>
      </Link>
      <Link to="/login" className="nav-item">
        <FaSignInAlt size={20} />
        <span>Login</span>
      </Link>
      <Link to="/signup" className="nav-item">
        <FaUserPlus size={20} />
        <span>Signup</span>
      </Link>
      <Link to="/dashboard" className="nav-item">
        <FaTachometerAlt size={20} />
        <span>Dashboard</span>
      </Link>
    </div>
  );
};

export default BottomNav;