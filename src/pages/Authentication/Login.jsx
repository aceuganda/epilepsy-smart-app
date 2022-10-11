//Login
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/Actions/userActions';

import { useEffect } from 'react';
//import Error from '../../components/Error/Error';

const Login = () => {
  const { loading, userInfo, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate('/home');
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(loginUser(data));
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <div className="login">
      <div className="login-section">
        <h4>Login</h4>
        <form onSubmit={handleSubmit(submitForm)}>
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
