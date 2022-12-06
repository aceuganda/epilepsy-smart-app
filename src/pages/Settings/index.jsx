import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../../components/form/TopBar';

const ProfileComponent = (props) => {
  ProfileComponent.propTypes = {
    children: PropTypes.any,
    backroute: PropTypes.string
  };
  return (
    <div>
      <TopBar title="Settings" route={`${props.backroute}`} />
      {props.children}
    </div>
  );
};

export default ProfileComponent;
