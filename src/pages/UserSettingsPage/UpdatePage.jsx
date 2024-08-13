import React from 'react';
import UserSettingsPageComponent from '.';
import { ReactComponent as AboutImg } from '../../assets/svg/Resilience/resilience.svg';
import { useTranslation } from 'react-i18next';

const Updates = () => {
  const { t } = useTranslation();
  const path = require('./apks/smart_app_10.0.apk')
  return (
    <div>
      <UserSettingsPageComponent backroute={'/'} title={t('App Version')}>
        <AboutImg style={{ marginTop: '50px' }} />
        <div>Current Version is (10.0)</div>
        <a href={path} download>
          <button style={{backgroundColor:'blueviolet', marginTop: '23px', borderRadius: '10px', color: 'white' }}>{t('Download version 10.0')}</button>
        </a>
      </UserSettingsPageComponent>
    </div>
  );
};

export default Updates;
