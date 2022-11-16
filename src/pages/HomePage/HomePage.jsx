import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Footer from '../../components/layouts/Footer';
import Card from './Card';
import SeizureImg from '../../assets/img/HomePage/seizure.png';
import MedicineImg from '../../assets/img/HomePage/medication.png';
import ActivitiesImg from '../../assets/img/HomePage/activities.png';
import TrackImg from '../../assets/img/HomePage/tracking.png';
import { useSelector } from 'react-redux';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import { capitalise } from '../../utils';

const HomePage = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div className="home-page">
      <header className="row justify-content-between">
        <h4>Holla!</h4>
        <div className="row justify-content-between">
          <NotificationsNoneIcon />
          <br />
          {userInfo && (
            <Link to="/settings">
              <SettingsIcon />
            </Link>
          )}
        </div>
      </header>
      <div className="banner">
        <span>
          <Avatar name={userInfo.data.username} alt={''} />
          <span className="name">{userInfo ? capitalise(userInfo.data.username) : ''}</span>
        </span>
        <div>
          <h3>
            Discover Activities <hr />
          </h3>
          <span>Give yourself a chance</span>
        </div>
      </div>
      <div className="cards">
        <Card title="seizure tracking" img={SeizureImg} link="/seizure-form" />
        <Card title="medication" img={MedicineImg} link="/medication" />
        <Card title="resilience tracking" img={TrackImg} link="/resilience-form/1" />
        <Card title="resilience activities" img={ActivitiesImg} link="/resilience-activities" />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
