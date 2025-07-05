import React from 'react';
import './HomePage.css'; // Styling file

const HomePage = () => {
  return (
    <div className="homepage-container">
      <section className="hero">
        <h1>Welcome to <span>ATM Management System</span></h1>
        <p className="subtext">Please login or sign up to access your dashboard securely.</p>
        <div className="home-buttons">
          <button className="btn login">Login</button>
          <button className="btn signup">Sign Up</button>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>💰 Check Balance</h3>
          <p>View your current ATM balance anytime, anywhere.</p>
        </div>
        <div className="feature-card">
          <h3>📊 Transaction History</h3>
          <p>Access and track your past ATM usage easily.</p>
        </div>
        <div className="feature-card">
          <h3>🔐 Secure Access</h3>
          <p>Login system with email & password protection.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 ATM Management System | Designed by Anjali Bhatt</p>
      </footer>
    </div>
  );
};

export default HomePage;