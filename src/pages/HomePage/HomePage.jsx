import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Footer from '../../components/layouts/Footer';
import Card from './Card';
import SeizureImg from '../../assets/img/HomePage/seizure.png';
import MedicineImg from '../../assets/img/HomePage/medication.png';
import TrackImg from '../../assets/img/HomePage/medication.png';
import ActivitiesImg from '../../assets/img/HomePage/activities.png';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/Slices/UsersSlice';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import { capitalise } from '../../utils';
import { LocalNotifications } from '@capacitor/local-notifications';
import quotes from '../../resources/insipiration_quotes.json';

const HomePage = () => {
  const { userInfo } = useSelector((state) => state.user);

  //request permission to send local notification
  const sendLocalNotification = async () => {
    const hasPermission = await LocalNotifications.requestPermissions();
    if (hasPermission) {
      LocalNotifications.schedule({
        notifications: [
          {
            //select the notification title and body from the json file randomly
            title: 'Quote of the day',
            body: quotes[Math.floor(Math.random() * quotes.length)].title,
            id: 1,
            //schedule: { at: new Date(Date.now() + 5000) },
            sound: null,
            attachments: null,
            actionTypeId: '',
            extra: null
          }
        ]
      });
    }
    console.log('hasPermission', hasPermission);
  };

  //call the function every after 8 hours
  setInterval(() => {
    sendLocalNotification();
  }, 28800000);
  
  //You can use the below code to test the local notification functionality
  /*
  //call the function every 5 seconds
  setInterval(() => {
    sendLocalNotification();
  }, 5000);
*/
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
          <Link to="/Settings">
            <Avatar
              //  img={ProfilePlaceholder}
              name={userInfo.data.username}
              alt={''}
            />
          </Link>

          {/* <Avatar name={userInfo.data.username} alt={''} /> */}

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
