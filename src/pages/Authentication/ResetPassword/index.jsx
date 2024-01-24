import React from 'react';
// import { Link } from 'react-router-dom';
import AuthPageComponent from '../index';
import { ReactComponent as ResetImg } from '../../../assets/svg/Auth/Reset.svg';
import { useTranslation } from 'react-i18next';

const ResetPassword = () => {
  const { t } = useTranslation();
  return (
    <AuthPageComponent
      title={'Reset Password'}
      image={<ResetImg />}
      callToAction={'Dont have an account?'}
      link={'/register'}
      linkTitle={'Register Now'}>
      <form onSubmit={() => {}}>
        <div className="form-group">
          <label htmlFor="email">{t('New Password')}</label>
          <input type="password" name="email" placeholder="******" />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t('Confirm Password')}</label>
          <input type="password" name="email" placeholder="*******" />
        </div>
        <button className="o-btn">{t('Reset password')}</button>
      </form>
    </AuthPageComponent>
  );
};

export default ResetPassword;
