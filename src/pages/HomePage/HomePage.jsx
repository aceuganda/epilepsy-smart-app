import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Footer from '../../components/layouts/Footer';
import Card from './Card';
import SeizureImg from '../../assets/img/HomePage/seizure.png';
import MedicineImg from '../../assets/img/HomePage/medication.png';
import ActivitiesImg from '../../assets/img/HomePage/activities.png';
import TrackImg from '../../assets/img/HomePage/tracking.png';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/Slices/UsersSlice';
import Avatar from './Avatar';

const HomePage = () => {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //capitalise first letter of name
  const capitalise = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  return (
    <div className="home-page">
      <header className="row justify-content-between">
        <h4>Holla!</h4>
        <div>
          <NotificationsNoneIcon />
          <br />
          {userInfo ? (
            <button className="button" onClick={() => dispatch(logout())}>
              Log Out
            </button>
          ) : (
            <div>Log In</div>
          )}
        </div>
      </header>
      <div className="banner">
        <span>
          <Avatar
            //  img={ProfilePlaceholder}
            name={userInfo.data.username}
            alt={''}
          />
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
