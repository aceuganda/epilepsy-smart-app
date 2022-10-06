import React from 'react';
import NotifyImg from '../../assets/img/Onboarding/notify.png';
import Dotted from '../../assets/img/Onboarding/btn2.png';
import { Link } from 'react-router-dom';

const Notify = () => {
  return (
    <div className="onboarding">
      <div className="notify-section">
        <img src={NotifyImg} alt="Quick Updates" />
      </div>
      <div className="bottom-section">
        <h4>Notify Quickly</h4>
        <span className="content">
          <p>Receive alerts about your health in time</p>
        </span>
        <img src={Dotted} />
      </div>
      <Link to="/onboarding/track">
        <button className="o-btn">Next</button>
      </Link>
    </div>
  );
};

export default Notify;
