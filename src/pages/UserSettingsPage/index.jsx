import React from 'react';
import TopBar from '../../components/form/TopBar';
import PropTypes from 'prop-types';
import { ReactComponent as UserIcon } from '../../assets/svg/UserAccount/account.svg';

const UserSettingsPageComponent = ({ backroute, children }) => {
  UserSettingsPageComponent.propTypes = {
    children: PropTypes.any,
    backroute: PropTypes.string
  };
  return (
    <div>
      <TopBar title="Account" route={`${backroute}`} logo={<UserIcon />} />
      <div className="full-page">{children}</div>
    </div>
  );
};

export default UserSettingsPageComponent;
