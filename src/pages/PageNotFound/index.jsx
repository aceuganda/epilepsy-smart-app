import React from 'react';
import UserSettingsPageComponent from '../UserSettingsPage';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import useFirebaseScreenTracking from '../../hooks/screenLogger';

const PageNotFound = () => {
  useFirebaseScreenTracking('PageNotFound');
  const { t } = useTranslation();
  return (
    <UserSettingsPageComponent backroute={'/'} title={t('Page Not Found')}>
      <div>Page Not Found</div>
      <Link to={'/'} download>
        <button style={{ backgroundColor: 'blueviolet', marginTop: '23px', borderRadius: '10px', color: 'white' }}>
          {t('Home')}
        </button>
      </Link>
    </UserSettingsPageComponent>
  );
};

export default PageNotFound;
