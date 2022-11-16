import React from 'react';
import TopBar from '../../components/form/TopBar';
import PropTypes from 'prop-types';

const UserSettingsPageComponent = ({ backroute, children }) => {
  UserSettingsPageComponent.propTypes = {
    children: PropTypes.any,
    backroute: PropTypes.string
  };
  return (
    <div>
      <TopBar title="Settings" route={`${backroute}`} />
      {children}
    </div>
  );
};

export default UserSettingsPageComponent;
