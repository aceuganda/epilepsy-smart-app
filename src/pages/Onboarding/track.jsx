import React,{useState} from 'react';
import TrackImg from '../../assets/img/Onboarding/track.png';
import Dotted from '../../assets/img/Onboarding/btn3.png';
import {Link,useNavigate} from 'react-router-dom';

const Track = () => {
  const [globalSee, setGlobalSee] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setGlobalSee(true);
    localStorage.setItem('globalSee', JSON.stringify(globalSee));
    navigate('/login');
  }
  return (
    <div className="onboarding">
      <div className="track-section">
        <img src={TrackImg} alt="Quick Updates" />
      </div>
      <div className="bottom-section">
        <h4>Track Medicine</h4>
        <span className="content">
          <p>Quickly track your medication on the app</p>
        </span>
        <img src={Dotted} />
      </div>
      {/* <Link to="/login"> */}
      <button onClick={handleClick} className="o-btn">
        Get Started
      </button>
      {/* </Link> */}
    </div>
  );
};

export default Track;
