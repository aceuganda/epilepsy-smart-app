import React from 'react';
import { Link } from 'react-router-dom';
import StartImg from '../../assets/img/Onboarding/start.png';
import useFirebaseScreenTracking from '../../hooks/screenLogger';

const LandingPage = () => {
  const showOnboardingPages = localStorage.getItem('registered_user');
  useFirebaseScreenTracking('LandingPage');

  return (
    <div className="landing">
      <Link to={showOnboardingPages ? '/login' : '/onboarding'}>
        <img src={StartImg} alt="Welcome" />
      </Link>
    </div>
  );
};

export default LandingPage;
