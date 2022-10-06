import React from 'react';
import TopBar from '../../components/form/TopBar';
import PropTypes from 'prop-types';

const MedicationComponent = (props) => {
  MedicationComponent.propTypes = {
    children: PropTypes.any,
    backroute: PropTypes.string
  };
  return (
    <div>
      <TopBar title="Medication" route={`${props.backroute}`} />
      {props.children}
    </div>
  );
};

export default MedicationComponent;
