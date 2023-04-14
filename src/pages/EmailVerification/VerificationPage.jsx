import React from 'react';
import VerifyImg from '../../assets/img/Onboarding/verification.png';
import { Link } from 'react-router-dom';

const VerificationPage = () => {
  return (
    <div className="onboarding">
      <div className="verify-section">
        <img src={VerifyImg} alt="" />
      </div>
      <div className="bottom-section">
        <h4>Verify your email address</h4>
        <span className="content">
          <p>You&apos;ve entered example@gmail.com as the email address for your account.</p>
        </span>
      </div>
      <Link to="/home">
        <button className="o-btn">Verify your email</button>
      </Link>
    </div>
  );
};

export default VerificationPage;
