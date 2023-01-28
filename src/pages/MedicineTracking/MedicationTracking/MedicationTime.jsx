

import React,{useState} from 'react';
import PropTypes from 'prop-types';

const MedicationTime = ({time,active}) => {
  
  MedicationTime.propTypes = {
    time: PropTypes.string,
    active: PropTypes.bool
  };
  const [toggle,setToggle] = useState(false)
  const handleToggleClick = ()=>{
    setToggle(!toggle);
  }

  return (
    <div className='TimeContainer'>
      <div className='TimeInformation'>
          {time}
        <div className='SubTimeInformation'>
          Afternoon
        </div>
      </div>
      <div 
      onClick={handleToggleClick}
      className={toggle?'TimeActiveToggle':'TimeInactiveToggle'}>
        <div className='ToggleMoverActive'>
        </div>
      </div>
    </div>
  );
};

export default MedicationTime;
