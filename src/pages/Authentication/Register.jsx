//Register
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/Actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../../components/Error/Error';

import { useEffect } from 'react';

const Register = () => {
  const [customError, setCustomError] = useState(null);

  const { loading, userInfo, error, success } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate('/home');
    }

    if (success) {
      navigate('/login');
    }
  }, [navigate, userInfo, success]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const submitForm = (data) => {
    console.log(data);

    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
  };
  return (
    <div className="login">
      <div className="login-section">
        <h4>Register</h4>
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
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              {...register('username', { required: true })}
              placeholder="Enter username"
            />
            {errors.username && <span className="error">Username is required</span>}
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              {...register('confirmPassword', { required: true })}
              placeholder="Confirm password"
            />
            {errors.confirmPassword && <span className="error">Confirm password is required</span>}
          </div>
          <button className="o-btn">Register</button>
        </form>
        <p className="error">{error}</p>
        <p className="text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
