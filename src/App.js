// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Dashboard from './components/Dashboard';
import BottomNav from './components/BottomNav'; // ✅ Bottom nav import
import './components/style.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Heading */}
        <h1 className="main-heading">ATM Management System</h1>

        {/* Top Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        {/* ✅ Bottom Navigation Bar */}
        <BottomNav />

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 ATM Management System | Designed by Anjali</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;