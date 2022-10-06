import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as InfoIcon } from '../../assets/svg/Form/Question/info.svg';
import Modal from '../modal';

const PopQuestion = ({ question, popTitle, popDescription, children }) => {
  const [show, setShow] = useState(false);

  PopQuestion.propTypes = {
    question: PropTypes.string,
    popTitle: PropTypes.string,
    popDescription: PropTypes.string,
    children: PropTypes.any
  };

  return (
    <div className="container">
      <span className="popup-question">
        {question}{' '}
        <span className="pop-title" onClick={() => setShow(true)}>
          {popTitle}
        </span>
        ?{' '}
        <span className="info-icon" onClick={() => setShow(true)}>
          <InfoIcon />
        </span>
        {children}
      </span>
      <Modal show={show} closeModal={() => setShow(false)}>
        <div className="modal-content">
          <span className="modal-title">
            <h4>
              {popTitle} <hr />
            </h4>
          </span>
          <span className="modal-desc">
            <p>{popDescription}</p>
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default PopQuestion;
