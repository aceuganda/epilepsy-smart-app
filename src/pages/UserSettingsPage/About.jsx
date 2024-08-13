import React from 'react';
import UserSettingsPageComponent from '.';
import { ReactComponent as AboutImg } from '../../assets/svg/Resilience/resilience.svg';
import Largebtn from '../../components/form/Buttons/Largebtn';
import { useTranslation } from 'react-i18next';
import useFirebaseScreenTracking from '../../hooks/screenLogger';

const About = () => {
  useFirebaseScreenTracking('AboutPage');
  const { t } = useTranslation();
  return (
    <div>
      <UserSettingsPageComponent backroute={'/account'} title={t('About the App')}>
        <AboutImg style={{ marginTop: '50px' }} />
        <Largebtn title={t('Terms of Service')} link="/terms" />
        <Largebtn title={t('Privacy Policy')} link="/privacy" />
      </UserSettingsPageComponent>
    </div>
  );
};

export default About;
