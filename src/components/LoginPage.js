import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './LoginPage.css';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log('✅ Login Success:', data);
    alert('Login Successful!');
  };

  return (
    <div className="form-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Email Field */}
        <input
          type="email"
          placeholder="Enter Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Invalid email format'
            }
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        {/* Password Field + Show Button */}
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
          />
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {errors.password && <p className="error">{errors.password.message}</p>}

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;