import React from 'react';
import PropTypes from "prop-types";
import {ReactComponent as InfoIcon} from '../../assets/svg/Form/Question/info.svg'

const PopQuestion = (props) => {
    PopQuestion.propTypes = {
        question: PropTypes.string,
        popTitle: PropTypes.string,
        children: PropTypes.any,
    }
    return (
        <div className='container'>
            <span className='popup-question'>{props.question} <span className='pop-title'>{props.popTitle}</span>? <span className='info-icon'><InfoIcon/></span>
            {props.children}
            </span>
        </div>
    )
}

export default PopQuestion;