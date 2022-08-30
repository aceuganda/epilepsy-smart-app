import React, { useState } from 'react';
import PropTypes from "prop-types";
import {ReactComponent as InfoIcon} from '../../assets/svg/Form/Question/info.svg'
import Modal from '../modal';

const PopQuestion = (props) => {
    const [show, setShow] = useState(false);

    PopQuestion.propTypes = {
        question: PropTypes.string,
        popTitle: PropTypes.string,
        popDescription: PropTypes.string,
        children: PropTypes.any,
        triggerModal: PropTypes.func,
    }
    return (
        <div className='container'>
            <span className='popup-question'>{props.question} <span className='pop-title' onClick={()=>setShow(true)}>{props.popTitle}</span>? <span className='info-icon' onClick={()=>setShow(true)}><InfoIcon/></span>
            {props.children}
            </span>
            <Modal show={show} closeModal={()=>setShow(false)}>
                <div className='modal-content'>
                    <span className='modal-title'><h4>{props.popTitle} <hr/></h4></span>
                    <span className='modal-desc'>
                        <p>{props.popDescription}</p>
                    </span>
                </div>
            </Modal>
        </div>
    )
}

export default PopQuestion;