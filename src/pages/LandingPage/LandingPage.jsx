import React from 'react';
import { Link } from 'react-router-dom';
import StartImg from '../../assets/img/Onboarding/start.png';

const LandingPage = () => {
  return (
    <div className="landing">
      <Link to="/onboarding">
        <img src={StartImg} alt="Welcome" />
      </Link>
    </div>
  );
};

export default LandingPage;
