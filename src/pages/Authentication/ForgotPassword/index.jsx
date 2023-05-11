import React from 'react';
// import { Link } from 'react-router-dom';
import AuthPageComponent from '../index';
import { ReactComponent as ResetImg } from '../../../assets/svg/Auth/Reset.svg';

const ForgotPassword = () => {
  return (
    <AuthPageComponent
      title={'Forgot Password'}
      image={<ResetImg />}
      callToAction={'Dont have an account?'}
      link={'/register'}
      linkTitle={'Register Now'}>
      <form onSubmit={() => {}}>
        <div className="form-group">
          <label htmlFor="email">Email Address you registered with.</label>
          <input type="email" name="email" placeholder="Enter email address" />
        </div>
        <button className="o-btn">{'Send Email'}</button>
      </form>
    </AuthPageComponent>
  );
};

export default ForgotPassword;
