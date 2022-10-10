//Login
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [error, setError] = useState('');

  const onSubmit = (data) => {
    console.log(data);
    setError('');
  };

  return (
    <div className="login">
      <div className="login-section">
        <h4>Login</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              {...register('email', { required: true })}
              placeholder="Enter email"
            />
            {errors.email && <span className="error">Email is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              {...register('password', { required: true })}
              placeholder="Enter password"
            />
            {errors.password && <span className="error">Password is required</span>}
          </div>
          <button className="o-btn">Login</button>
        </form>
        <p className="error">{error}</p>
        <p className="text-center">
          Dont have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
