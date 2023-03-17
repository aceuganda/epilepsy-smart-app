import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { timeData } from '../../config/utils';

const TimePicker = ({ onChangeMinutesCallBack, onChangeSecondsCallBack, fontSize }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollTopSeconds, setscrollTopSeconds] = useState(0);
  const minuteReferences = useRef([]);
  const secondsReferences = useRef([]);

  TimePicker.propTypes = {
    onChangeMinutesCallBack: PropTypes.func,
    onChangeSecondsCallBack: PropTypes.func,
    fontSize: PropTypes.number
  };

  const removeMins = (inputString) => {
    return inputString.replace('mins-', '');
  };
  const removeSecs = (inputString) => {
    return inputString.replace('sec-', '');
  };
  const onScrollMins = (event) => {
    //keeps re-render items on minutes list scrolling
    setScrollTop(scrollTop + event.target.scrollTop);
    const container = document.getElementById('container');
    if (minuteReferences.current.length > 0) {
      for (var i = 0; i < minuteReferences.current.length; i++) {
        if (timeOverlap(container, minuteReferences.current[i])) {
          onChangeMinutesCallBack(removeMins(minuteReferences.current[i].id));
        }
      }
    }
  };
  const onScrollSeconds = (event) => {
    //keeps re-render items on seconds list scrolling
    setscrollTopSeconds(scrollTopSeconds + event.target.scrollTop);
    const container = document.getElementById('container');
    if (secondsReferences.current.length > 0) {
      for (var i = 0; i < minuteReferences.current.length; i++) {
        if (timeOverlap(container, secondsReferences.current[i])) {
          onChangeSecondsCallBack(removeSecs(secondsReferences.current[i].id));
        }
      }
    }
  };
  const timeOverlap = (el1, el2) => {
    if (!el1 || !el2) return;
    const container = el1.getBoundingClientRect();
    const element = el2.getBoundingClientRect();
    return !(container.top + 13 > element.bottom || container.bottom - 13 < element.top);
  };

  return (
    <div className="box">
      <div className="Container">
        <div className="timeUnit">
          <ul
            onScroll={onScrollMins}
            style={{
              fontSize: { fontSize }
            }}>
            <div
              style={{
                padding: '6px'
              }}></div>
            {timeData.map((item, index) => (
              <div
                key={index}
                id={`mins-${index}`}
                ref={(el) => (minuteReferences.current[index] = el)}
                style={{
                  fontFamily: '400',
                  color: timeOverlap(
                    document.getElementById('container'),
                    document.getElementById(`mins-${index}`)
                  )
                    ? '#000'
                    : '#ccc'
                }}>
                {item.value}
              </div>
            ))}
            <div
              style={{
                padding: '6px'
              }}></div>
          </ul>
          <div className="label">min</div>
        </div>
        <div className="timeUnit">
          <ul
            onScroll={onScrollSeconds}
            style={{
              fontSize: { fontSize }
            }}>
            <div
              style={{
                padding: '6px'
              }}></div>
            {timeData.map((item, index) => (
              <div
                key={index}
                id={`sec-${index}`}
                ref={(el) => (secondsReferences.current[index] = el)}
                style={{
                  fontFamily: '400',
                  color: timeOverlap(
                    document.getElementById('container'),
                    document.getElementById(`sec-${index}`)
                  )
                    ? '#000'
                    : '#ccc'
                }}>
                {item.value}
              </div>
            ))}
            <div
              style={{
                padding: '6px'
              }}></div>
          </ul>
          <div className="label">sec</div>
        </div>
        <div id="container" className="stayStill"></div>
      </div>
    </div>
  );
};

export default TimePicker;
