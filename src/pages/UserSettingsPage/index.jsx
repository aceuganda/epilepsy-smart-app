import React from 'react';
import TopBar from '../../components/form/TopBar';
import PropTypes from 'prop-types';
import { ReactComponent as UserIcon } from '../../assets/svg/UserAccount/account.svg';
import { useTranslation } from 'react-i18next';

const UserSettingsPageComponent = ({ backroute, children, title }) => {
  UserSettingsPageComponent.propTypes = {
    children: PropTypes.any,
    backroute: PropTypes.string,
    title: PropTypes.string
  };
  const { t } = useTranslation();
  return (
    <div>
      <TopBar title={title ? title : t('Account')} route={`${backroute}`} logo={<UserIcon />} />
      <div className="full-page">{children}</div>
    </div>
  );
};

export default UserSettingsPageComponent;
