import { useEffect } from 'react';
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics';
import { Capacitor } from '@capacitor/core';

function useFirebaseScreenTracking(screenName) {
  useEffect(() => {
    const logScreenView = async () => {
      try {
       const pin = await FirebaseAnalytics.setScreenName({
          screenName: screenName,
        });
      } catch (error) {
        console.error('Error logging screen view:', error);
      }
    };
    if (Capacitor.getPlatform() !== 'web') {
      logScreenView();

    }
  }, [screenName]);
}

export default useFirebaseScreenTracking;
