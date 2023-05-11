import React from 'react';
// import { Link } from 'react-router-dom';
import AuthPageComponent from '../index';
import { ReactComponent as ResetImg } from '../../../assets/svg/Auth/Reset.svg';

const ResetPassword = () => {
  return (
    <AuthPageComponent
      title={'Reset Password'}
      image={<ResetImg />}
      callToAction={'Dont have an account?'}
      link={'/register'}
      linkTitle={'Register Now'}>
      <form onSubmit={() => {}}>
        <div className="form-group">
          <label htmlFor="email">New Password</label>
          <input type="password" name="email" placeholder="******" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Confirm Password</label>
          <input type="password" name="email" placeholder="*******" />
        </div>
        <button className="o-btn">{'Reset passworrd'}</button>
      </form>
    </AuthPageComponent>
  );
};

export default ResetPassword;
