import React, {useEffect} from 'react';
import AppRoutes from './AppRoutes';
import { FirebaseAnalytics } from "@capacitor-community/firebase-analytics";
import { Capacitor } from '@capacitor/core';


const App = () => {

  useEffect(() => {
    const init = async () => {
      // track for only native apps
      if (Capacitor.getPlatform() !== 'web') {

        const userIdFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).data.id : null;
        if(userIdFromLocalStorage) {
         await FirebaseAnalytics.setUserId({
            userId: userIdFromLocalStorage,
          });
        }
      }
    }
    init();
  }, []);

  return <AppRoutes />;
};

export default App;
