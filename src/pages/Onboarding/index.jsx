import React from 'react';
import UpdateImg from '../../assets/img/Onboarding/getStarted.png';
import Dotted from '../../assets/img/Onboarding/btn1.png';
import { Link } from 'react-router-dom';

const Onboarding = () => {
  return (
    <div className="onboarding">
      <div className="update-section">
        <img src={UpdateImg} alt="Quick Updates" />
      </div>
      <div className="bottom-section">
        <h4>Quick Updates</h4>
        <span className="content">
          <p>
            The app is free, secure, and helps connect you to important resources for coping and
            adapting
          </p>
        </span>
        <img src={Dotted} />
      </div>
      <Link to="/onboarding/notify">
        <button className="o-btn">Next</button>
      </Link>
    </div>
  );
};

export default Onboarding;
