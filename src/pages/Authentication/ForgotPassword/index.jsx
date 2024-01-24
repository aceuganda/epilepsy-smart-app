import React from 'react';
// import { Link } from 'react-router-dom';
import AuthPageComponent from '../index';
import { ReactComponent as ResetImg } from '../../../assets/svg/Auth/Reset.svg';
import { useTranslation } from 'react-i18next';

const ForgotPassword = () => {
  const { t } = useTranslation();
  return (
    <AuthPageComponent
      title={t('Forgot Password')}
      image={<ResetImg />}
      callToAction={t('Dont have an account?')}
      link={'/register'}
      linkTitle={t('Register Now')}>
      <form onSubmit={() => {}}>
        <div className="form-group">
          <label htmlFor="email">{t('Email Address you registered with.')}</label>
          <input type="email" name="email" placeholder="Enter email address" />
        </div>
        <button className="o-btn">{t('Send Email')}</button>
      </form>
    </AuthPageComponent>
  );
};

export default ForgotPassword;
