//Login
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/Actions/userActions';

import { useEffect } from 'react';
import AuthPageComponent from '.';
import { ReactComponent as LoginImg } from '../../assets/svg/Auth/Login.svg';
import Spinner from '../../components/Spinner/Spinner';

const Login = () => {
  const { loading, userInfo, error } = useSelector((state) => state.user);
  localStorage.setItem('registered_user', true);

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
    <AuthPageComponent
      title={'Login'}
      image={<LoginImg />}
      callToAction={'Dont have an account?'}
      link={'/register'}
      linkTitle={'Register Now'}>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            {...register('email', { required: true })}
            placeholder="Enter email address"
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
        <button disabled={loading} className="o-btn">
          {loading ? <Spinner /> : 'Login'}{' '}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </AuthPageComponent>
  );
};

export default Login;
