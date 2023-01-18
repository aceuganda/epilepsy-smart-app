import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StartImg from '../../assets/img/Onboarding/start.png';
import Login from '../Authentication/Login';

const LandingPage = () => {
  const navigate = useNavigate();

  const check = JSON.parse(localStorage.getItem('globalSee'));

  const handleOnBoardingScreen = () => {
    if (check) {
      navigate('/onboarding');
    } else {
      navigate('/login');
    }
  }
  //to persist the bolean store the value in local storage and keep it there for reference on when to show the onboarding screen
  // use condition rendering to render login component if the provided boolean is true or else render the onboarding component
  return (
    <div className="landing">
      <img onClick={handleOnBoardingScreen} src={StartImg} alt="Welcome" />
      {/* <Link to="/onboarding">
      </Link> */}
    </div>
  );
};

export default LandingPage;
