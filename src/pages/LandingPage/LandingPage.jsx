import React from 'react';
import { Link } from 'react-router-dom';
import StartImg from '../../assets/img/Onboarding/start.png';

const LandingPage = () => {
  const showOnboardingPages = localStorage.getItem('registered_user');

  return (
    <div className="landing">
      <Link to={showOnboardingPages ? '/login' : '/onboarding'}>
        <img src={StartImg} alt="Welcome" />
      </Link>
    </div>
  );
};

export default LandingPage;
