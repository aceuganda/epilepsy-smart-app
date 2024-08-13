//Login
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/Actions/userActions';

import { useEffect } from 'react';
import AuthPageComponent from '.';
import { ReactComponent as LoginImg } from '../../assets/svg/Auth/Login.svg';
import Spinner from '../../components/Spinner/Spinner';
import { useTranslation } from 'react-i18next';
import useFirebaseScreenTracking from '../../hooks/screenLogger';

const Login = () => {
  const { loading, userInfo, error } = useSelector((state) => state.user);
  useFirebaseScreenTracking('LoginPage');

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate('/home');
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(loginUser(data));
    localStorage.setItem('registered_user', true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <AuthPageComponent
      title={t('Login')}
      image={<LoginImg />}
      callToAction={t('Dont have an account?')}
      link={'/register'}
      linkTitle={t('Register Now')}>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="form-group">
          <label htmlFor="email">{t('Email Address')}</label>
          <input
            type="email"
            name="email"
            {...register('email', { required: true })}
            placeholder={t("Enter email address")}
          />
          {errors.email && <span className="error">{t('Email is required')}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">{t('Password')}</label>
          <input
            type="password"
            name="password"
            {...register('password', { required: true })}
            placeholder="Enter password"
            autoComplete="current-password"
          />
          {errors.password && <span className="error">{t('Password is required')}</span>}
        </div>
        <button disabled={loading} className="o-btn">
          {loading ? <Spinner /> : t('Login')}{' '}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </AuthPageComponent>
  );
};

export default Login;
