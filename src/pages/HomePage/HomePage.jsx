import React, { useState, useEffect } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Footer from '../../components/layouts/Footer';
import Card from './Card';
import SeizureImg from '../../assets/img/HomePage/seizure.png';
import MedicineImg from '../../assets/img/HomePage/medication.png';
import ActivitiesImg from '../../assets/img/HomePage/activities.png';
import TrackImg from '../../assets/img/HomePage/tracking.png';
import { useSelector } from 'react-redux';
import Avatar from './Avatar';
import { capitalise } from '../../utils';
import { LocalNotifications } from '@capacitor/local-notifications';
import quotes from '../../resources/inspiration_quotes.json';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '../../components/Language/switchLanguage';
import { Capacitor } from '@capacitor/core';

const HomePage = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { t } = useTranslation();
  const [savedReminders] = useState(
    localStorage.getItem(`${userInfo.data.id}Reminders`)
      ? JSON.parse(localStorage.getItem(`${userInfo.data.id}Reminders`))
      : []
  );
  const isNotificationsSupported = () => {
    return Capacitor.isNativePlatform() && LocalNotifications;
  };
  const safeLocalNotifications = {
    requestPermissions: async () => {
      return await LocalNotifications.requestPermissions();
    },
    createChannel: async (options) => {
      if (isNotificationsSupported()) {
        return await LocalNotifications.createChannel(options);
      }
    },
    schedule: async (options) => {
      return await LocalNotifications.schedule(options);
    }
  };

  //request permission to send local notification
  const sendLocalNotification = async () => {
    const hasPermission = await safeLocalNotifications.requestPermissions();
    const randomId = Math.floor(Math.random() * 1000000) + 1;

    if (hasPermission) {
      try {
        await safeLocalNotifications.createChannel({
          id: `epilepsy-smart-app-${randomId}`,
          name: "Epilepsy Smart App",
          description: "Epilepsy SMART app Notification",
        });

        await safeLocalNotifications.schedule({
          notifications: [
            {
              title: 'Quote of the day',
              body: quotes[Math.floor(Math.random() * quotes.length)].title,
              id: randomId,
              sound: null,
              attachments: null,
              actionTypeId: '',
              extra: null
            }
          ]
        });
      } catch (error) {
        console.error('Error sending notification:', error);
      }
    } else {
      console.log('No permission to send notifications');
    }
  };
  //call the function every after 8 hours
  setInterval(() => {
    sendLocalNotification();
  }, 28800000);
  useEffect(() => {
    //shedule all available offline notification on start
    scheduleReminderLocalNotification();
  }, []);

  //You can use the below code to test the local notification functionality
  /*
  //call the function every 5 seconds
  setInterval(() => {
    sendLocalNotification();
  }, 5000);
*/
  const scheduleReminderLocalNotification = async () => {
    try {
      const hasPermission = await safeLocalNotifications.requestPermissions();
      console.log('Has permission:', hasPermission);

      if (!hasPermission) {
        console.log('No permission to schedule notifications');
        return;
      }
      if (savedReminders.length === 0) {
        console.log('No running reminders');
        return;
      }

      const chanelRandomId = Math.floor(Math.random() * 1000000) + 1;
      await safeLocalNotifications.createChannel({
        id: `epilepsy-smart-app-${chanelRandomId}`,
        name: "Epilepsy Smart App",
        description: "Epilepsy SMART app Notification",
      });

      for (let i = 0; i < savedReminders.length; i++) {
        const reminder = savedReminders[i];
        if (!reminder.active) continue;

        // let [hours, minutes, period] = reminder.time.split(':');
        const currentDate = new Date();
        const timeParts = reminder.time.match(/(\d+):(\d+):(\w+)/);
        let hours = parseInt(timeParts[1], 10);
        const minutes = parseInt(timeParts[2], 10);
        const period = timeParts[3];

        if (period === "PM" && hours < 12) {
            hours += 12;
        }
        if (period === "AM" && hours === 12) {
            hours = 0;
        }

        currentDate.setHours(hours);
        currentDate.setMinutes(minutes);
        currentDate.setSeconds(0);
        currentDate.setMilliseconds(0);

        console.log(`Scheduling reminder for ${currentDate}`);
        const randomId = Math.floor(Math.random() * 1000000) + 1;

        await safeLocalNotifications.schedule({
          notifications: [
            {
              title: 'Daily Medicine Reminder',
              body: `Don't forget to take your medicine dose for ${reminder.medicine}`,
              id: randomId,
              schedule: {
                at: currentDate,
                every: 'day',
                repeats: true,
                allowWhileIdle: true
              }
            }
          ]
        });

        console.log(`Scheduled reminder for ${reminder.medicine}`);
      }

      console.log('All reminders scheduled');
    } catch (error) {
      console.error('Error scheduling notifications:', error);
    }
  };

  return (
    <div className="home-page">
      <header className="row justify-content-between">
        <h4>{t('Holla')}!</h4>
        <div className="notification-badge">
          <>
            <LanguageToggle />
          </>
          <NotificationsNoneIcon />
          <br />
        </div>
      </header>
      <div className="banner">
        <span>
          <Link to="/account">
            <Avatar name={userInfo.data.username} alt={''} />
          </Link>
          <span className="name">{userInfo ? capitalise(userInfo.data.username) : ''}</span>
        </span>
        <div>
          <h3>
            {t('Discover Activities')} <hr />
          </h3>
          <span>{t('Give yourself a chance')}</span>
        </div>
      </div>
      <div className="cards">
        <Card title={t('seizure tracking')} img={SeizureImg} link="/seizure-form" />
        <Card title={t('medication')} img={MedicineImg} link="/medication" />
        <Card title={t('resilience tracking')} img={TrackImg} link="/resilience-form" />
        <Card
          title={t('resilience activities')}
          img={ActivitiesImg}
          link="/resilience-activities"
        />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
