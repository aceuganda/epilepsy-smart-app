import React from 'react';
import TopBar from '../../components/form/TopBar';
import PropTypes from 'prop-types';

const SeizureComponent = ({backroute , children}) => {
  SeizureComponent.propTypes = {
    children: PropTypes.any,
    backroute: PropTypes.string
  };
  return (
    <div>
      <TopBar title="Seizure Tracking" route={`${backroute}`} />
      {children}
    </div>
  );
};

export default SeizureComponent;
