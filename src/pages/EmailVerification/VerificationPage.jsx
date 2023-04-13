import React from 'react';
import NotifyImg from '../../assets/img/Onboarding/verification.png';
import { Link } from 'react-router-dom';

const VerificationPage = () => {
  return (
    <div className="onboarding">
      <div className="notify-section">
        <img
          style={{ width: '378px', height: '350px', left: '2%' }}
          src={NotifyImg}
          alt="Quick Updates"
        />
      </div>
      <div className="bottom-section">
        <h4>Verify your email address</h4>
        <span className="content">
          <p>You&apos;ve entered example@gmail.com as the email address for your account.</p>
        </span>
        {/* <img src={Dotted} /> */}
      </div>
      <Link to="/onboarding/track">
        <button className="o-btn">Verify your email</button>
      </Link>
    </div>
  );
};

export default VerificationPage;
