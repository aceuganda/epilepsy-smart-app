import React from 'react';
import UserSettingsPageComponent from '.';
import { ReactComponent as AboutImg } from '../../assets/svg/Resilience/resilience.svg';
import { useTranslation } from 'react-i18next';

const Updates = () => {
  const { t } = useTranslation();
  return (
    <div>
      <UserSettingsPageComponent backroute={'/'} title={t('App Version')}>
        <AboutImg style={{ marginTop: '50px' }} />
        <div>Current Version is (13)</div>
      </UserSettingsPageComponent>
    </div>
  );
};

export default Updates;
