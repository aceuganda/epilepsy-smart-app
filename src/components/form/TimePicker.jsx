import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { timeData } from '../../config/utils';
import { useTranslation } from 'react-i18next';

const TimePicker = ({ onChangeMinutesCallBack, onChangeSecondsCallBack, fontSize }) => {
  const { t } = useTranslation();
  const minuteReferences = useRef([]);
  const secondsReferences = useRef([]);
  const containerRef = useRef(null);

  const removeMins = (inputString) => inputString.replace('mins-', '');
  const removeSecs = (inputString) => inputString.replace('sec-', '');

  const timeOverlap = (el1, el2) => {
    if (!el1 || !el2) return false;
    const container = el1.getBoundingClientRect();
    const element = el2.getBoundingClientRect();
    return !(container.top + 13 > element.bottom || container.bottom - 13 < element.top);
  };

  const onScrollMins = () => {
    if (minuteReferences.current.length > 0) {
      const container = containerRef.current;
      minuteReferences.current.forEach((ref) => {
        if (timeOverlap(container, ref)) {
          onChangeMinutesCallBack(removeMins(ref.id));
        }
      });
    }
  };

  const onScrollSeconds = () => {
    if (secondsReferences.current.length > 0) {
      const container = containerRef.current;
      secondsReferences.current.forEach((ref) => {
        if (timeOverlap(container, ref)) {
          onChangeSecondsCallBack(removeSecs(ref.id));
        }
      });
    }
  };

  useEffect(() => {
    // Initial callbacks for default visible items
    onScrollMins();
    onScrollSeconds();
  }, []);

  return (
    <div className="box">
      <div className="Container">
        <div className="timeUnit">
          <ul onScroll={onScrollMins} style={{ fontSize: fontSize }}>
            <div style={{ padding: '6px' }}></div>
            {timeData.map((item, index) => (
              <div
                key={index}
                id={`mins-${index}`}
                ref={(el) => (minuteReferences.current[index] = el)}
                style={{
                  fontFamily: '400',
                  color: timeOverlap(containerRef.current, minuteReferences.current[index])
                    ? '#000'
                    : '#ccc'
                }}>
                {item.value}
              </div>
            ))}
            <div style={{ padding: '6px' }}></div>
          </ul>
          <div className="label">{t('min')}</div>
        </div>
        <div className="timeUnit">
          <ul onScroll={onScrollSeconds} style={{ fontSize: fontSize }}>
            <div style={{ padding: '6px' }}></div>
            {timeData.map((item, index) => (
              <div
                key={index}
                id={`sec-${index}`}
                ref={(el) => (secondsReferences.current[index] = el)}
                style={{
                  fontFamily: '400',
                  color: timeOverlap(containerRef.current, secondsReferences.current[index])
                    ? '#000'
                    : '#ccc'
                }}>
                {item.value}
              </div>
            ))}
            <div style={{ padding: '6px' }}></div>
          </ul>
          <div className="label">{t('sec')}</div>
        </div>
        <div ref={containerRef} id="container" className="stayStill"></div>
      </div>
    </div>
  );
};

TimePicker.propTypes = {
  onChangeMinutesCallBack: PropTypes.func,
  onChangeSecondsCallBack: PropTypes.func,
  fontSize: PropTypes.number
};

export default TimePicker;
