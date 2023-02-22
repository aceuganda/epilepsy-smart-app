import React, { useState, useEffect } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Footer from '../../components/layouts/Footer';
import Card from './Card';
import SeizureImg from '../../assets/img/HomePage/seizure.png';
import MedicineImg from '../../assets/img/HomePage/medication.png';
import ActivitiesImg from '../../assets/img/HomePage/activities.png';
import TrackImg from '../../assets/img/HomePage/activities.png';
import { useSelector } from 'react-redux';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import SettingsIcon from '@mui/icons-material/Settings';
=======
import Avatar from './Avatar';
>>>>>>> 7521ddf691644cbb25585d3c23c52526784c367a
import { capitalise } from '../../utils';
import { LocalNotifications } from '@capacitor/local-notifications';
import quotes from '../../resources/insipiration_quotes.json';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [savedReminders] = useState(
    localStorage.getItem(`${userInfo.data.id}   Reminders`)
      ? JSON.parse(localStorage.getItem(`${userInfo.data.id} Reminders`))
      : []
  );

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
<<<<<<< HEAD
=======
  useEffect(() => {
    //shedule all available offline notification on start
    sheduleReminderLocalNotification();
  }, []);

>>>>>>> 7521ddf691644cbb25585d3c23c52526784c367a
  //You can use the below code to test the local notification functionality
  /*
  //call the function every 5 seconds
  setInterval(() => {
    sendLocalNotification();
  }, 5000);
*/
  const sheduleReminderLocalNotification = async () => {
    const hasPermission = await LocalNotifications.requestPermissions();
    if (savedReminders.length > 0) {
      for (let i = 0; i < savedReminders.length; i++) {
        const timeString = savedReminders[i].time;
        const [hours, minutes, period] = timeString.split(':');
        const date = new Date();
        date.setHours(period === 'AM' ? parseInt(hours, 10) : parseInt(hours, 10) + 12);
        date.setMinutes(parseInt(minutes, 10));
        if (hasPermission && savedReminders[i].active === true) {
          const schedulingOptions = {
            notifications: [
              {
                title: 'Daily Medicine Reminder',
                body: `Don't forget to take your medicine dose for ${savedReminders[i].medicine}`,
                id: 1,
                schedule: {
                  at: new Date(date.getTime() + 5 * 1000),
                  every: 'day'
                }
              }
            ]
          };
          await LocalNotifications.schedule(schedulingOptions);
          console.log('Notifications Secheduled');
        }
      }
    } else {
      console.log('no running reminders');
    }
    console.log('hasPermission', hasPermission);
  };

  return (
    <div className="home-page">
      <header className="row justify-content-between">
        <h4>Holla!</h4>
        <div className="row justify-content-between">
          <NotificationsNoneIcon />
          <br />
        </div>
      </header>
      <div className="banner">
        <span>
<<<<<<< HEAD
          <Link to="/settings">
            <Avatar
              //  img={ProfilePlaceholder}
              name={userInfo.data.username}
              alt={''}
            />
=======
          <Link to="/account">
            <Avatar name={userInfo.data.username} alt={''} />
>>>>>>> 7521ddf691644cbb25585d3c23c52526784c367a
          </Link>
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
        <Card title="resilience tracking" img={TrackImg} link="/resilience-form" />
        <Card title="resilience activities" img={ActivitiesImg} link="/resilience-activities" />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
