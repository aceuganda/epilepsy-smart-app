import React from 'react';
import PropTypes from 'prop-types';

const MedicationTime = ({
  time,
  active,
  medicine,
  index,
  handleDeleteClickCallback,
  handleToggleClickCallback
}) => {
  MedicationTime.propTypes = {
    time: PropTypes.string,
    active: PropTypes.bool,
    medicine: PropTypes.string,
    handleToggleClickCallback: PropTypes.func,
    index: PropTypes.number,
    handleDeleteClickCallback: PropTypes.func
  };
  const handleToggleClick = () => {
    handleToggleClickCallback(index, !active);
  };

  const HandleDeleteReminder = () => {
    handleDeleteClickCallback(index);
  };
  return (
    <div className="TimeContainer">
      <div className="TimeInformation">
        {time}
        <div className="SubTimeInformation">{medicine}</div>
      </div>
      <div className="ToggleDeleteSection">
        <div
          onClick={handleToggleClick}
          className={active ? 'TimeActiveToggle' : 'TimeInactiveToggle'}>
          <div className="ToggleMoverActive"></div>
        </div>
        <div onClick={HandleDeleteReminder} className="RemoverReminder">
          delete
        </div>
      </div>
    </div>
  );
};

export default MedicationTime;
