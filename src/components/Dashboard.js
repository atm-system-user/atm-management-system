/*import React, { useState } from 'react';
import './style.css';

const Dashboard = () => {
  const [balance, setBalance] = useState(5000); // Starting balance ₹5000
  const [amount, setAmount] = useState('');

  const handleDeposit = () => {
    const amt = parseFloat(amount);
    if (!isNaN(amt) && amt > 0) {
      setBalance(balance + amt);
      alert('₹${amt} deposited!');
      setAmount('');
    } else {
      alert('Please enter a valid amount to deposit.');
    }
  };

  const handleWithdraw = () => {
    const amt = parseFloat(amount);
    if (!isNaN(amt) && amt > 0 && amt <= balance) {
      setBalance(balance - amt);
      alert('₹${amt} withdrawn!');
      setAmount('');
    } else {
      alert('Invalid amount or insufficient balance.');
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to your Dashboard</h2>
      <p className="balance">Your Balance: ₹{balance}</p>

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="btn-group">
        <button onClick={handleDeposit}>Deposit</button>
        <button onClick={handleWithdraw}>Withdraw</button>
      </div>
    </div>
  );
};

export default Dashboard;*/
// src/components/Dashboard.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Dashboard.css';

const Dashboard = () => {
  const [balance, setBalance] = useState(10000); // initial balance
  const [message, setMessage] = useState('');
  const [transactions, setTransactions] = useState([]); // transaction history
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  const onSubmit = (data) => {
    const amount = parseFloat(data.amount);

    if (data.type === 'deposit') {
      setBalance(balance + amount);
      setMessage(`✅ Deposited ₹${amount}`);
      setTransactions([...transactions, `Deposited ₹${amount}`]);
    } else {
      if (amount > balance) {
        setMessage('❌ Insufficient balance!');
        setTransactions([...transactions, `❌ Failed to withdraw ₹${amount}`]);
      } else {
        setBalance(balance - amount);
        setMessage(`✅Withdrawn ₹${amount}`);
        setTransactions([...transactions, `Withdrawn ₹${amount}`]);
      }
    }

    reset(); // clear form
  };

  return (
    <div className="dash-container">
      <h2>ATM Dashboard</h2>
      <p><strong>User:</strong> {localStorage.getItem('userEmail')}</p>
      <h3>Current Balance: ₹{balance}</h3>

      <form className="atm-form" onSubmit={handleSubmit(onSubmit)}>
        <select {...register('type', { required: true })}>
          <option value="">Select Action</option>
          <option value="deposit">Deposit</option>
          <option value="withdraw">Withdraw</option>
        </select>
        {errors.type && <p className="error">Please select an action</p>}

        <input
          type="number"
          placeholder="Enter amount"
          {...register('amount', {
            required: 'Amount is required',
            min: {
              value: 1,
              message: 'Amount must be at least ₹1'
            }
          })}
        />
        {errors.amount && <p className="error">{errors.amount.message}</p>}

        <button type="submit">Submit</button>
      </form>

      {message && <p className="message">{message}</p>}

      <h3>Transaction History</h3>
      <ul className="transaction-list">
        {transactions.map((txn, index) => (
          <li key={index}>{txn}</li>
        ))}
      </ul>

      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
<div className="dashboard">
  <h2>Welcome, Anjali!</h2>
  <p>You are logged in successfully!</p>
</div>