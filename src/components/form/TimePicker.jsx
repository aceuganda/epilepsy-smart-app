import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const TimePicker = ({ onChangeMinutesCallBack, onChangeSecondsCallBack, fontSize }) => {
  const { t } = useTranslation();
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [selectedSeconds, setSelectedSeconds] = useState(0);

  const minutesOptions = Array.from({ length: 60 }, (_, i) => i);
  const secondsOptions = Array.from({ length: 60 }, (_, i) => i);

  const handleMinutesChange = (event) => {
    setSelectedMinutes(parseInt(event.target.value));
    onChangeMinutesCallBack(parseInt(event.target.value));
  };

  const handleSecondsChange = (event) => {
    setSelectedSeconds(parseInt(event.target.value));
    onChangeSecondsCallBack(parseInt(event.target.value));
  };

  return (
    <div className="time-picker">
      <select
        value={selectedMinutes}
        onChange={handleMinutesChange}
        style={{
          fontSize,
          padding: '5px 10px',
          border: '1px solid #553791',
          borderRadius: '4px',
          backgroundColor: '#fff',
          color: '#333',
          outline: 'none',
          cursor: 'pointer'
        }}>
        {minutesOptions.map((minute) => (
          <option key={minute} value={minute}>
            {minute} {t('min')}
          </option>
        ))}
      </select>
      <select
        value={selectedSeconds}
        onChange={handleSecondsChange}
        style={{
          fontSize,
          padding: '5px 10px',
          border: '1px solid #553791',
          borderRadius: '4px',
          backgroundColor: '#fff',
          color: '#333',
          outline: 'none',
          cursor: 'pointer',
          marginLeft: '20px'
        }}>
        {secondsOptions.map((second) => (
          <option key={second} value={second}>
            {second} {t('sec')}
          </option>
        ))}
      </select>
    </div>
  );
};

TimePicker.propTypes = {
  onChangeMinutesCallBack: PropTypes.func.isRequired,
  onChangeSecondsCallBack: PropTypes.func.isRequired,
  fontSize: PropTypes.number
};

export default TimePicker;
