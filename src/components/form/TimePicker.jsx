import React from 'react';
import PropTypes from 'prop-types';
import {timeData} from '../../config/utils'
import WheelPicker from 'react-simple-wheel-picker';

const TimePicker = ({ onChangeMinutesCallBack, onChangeSecondsCallBack ,
    height,
    width,
    fontSize,
    selectedMinutesID,
    selectedSecondsID
}) => {
    TimePicker.propTypes = {
        onChangeMinutesCallBack: PropTypes.func,
        onChangeSecondsCallBack: PropTypes.func,
        selectedMinutesID:PropTypes.string,
        selectedSecondsID:PropTypes.string,
        data:PropTypes.array,
        height:PropTypes.number,
        width:PropTypes.number,
        fontSize:PropTypes.number,
    };
    return <div className='box'>
        <div className="Container">
            <WheelPicker
                data={timeData}
                onChange={onChangeMinutesCallBack}
                height={height}
                width={width}
                itemHeight={20}
                selectedID={selectedMinutesID}
                color="#ccc"
                activeColor="#333"
                backgroundColor="#fff"
                shadowColor='none'
                fontSize={fontSize}
            />
            <div className="label">min</div>
            <WheelPicker
                data={timeData}
                onChange={onChangeSecondsCallBack}
                height={70}
                width={50}
                itemHeight={20}
                selectedID={selectedSecondsID}
                color="#ccc"
                activeColor="#333"
                backgroundColor="#fff"
                shadowColor='none'
                fontSize={14}
            />
            <div className="label">sec</div>
            <div className="stayStill"></div>
        </div>
    </div>
};

export default TimePicker;
