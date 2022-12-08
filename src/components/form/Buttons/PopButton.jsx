import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as InfoIcon } from '../../../assets/svg/Form/Question/info.svg';
import Modal from '../../modal';

const PopButton = ({ popTitle, popDescription }) => {
  const [show, setShow] = useState(false);

  PopButton.propTypes = {
    popTitle: PropTypes.string,
    popDescription: PropTypes.string
  };

  return (
    <>
      <button className="pop-button button" type="button" value={popTitle}>
        <span className="popup-title">
          {popTitle}
          <span className="info-icon" onClick={() => setShow(true)}>
            <InfoIcon />
          </span>
        </span>
        {show && (
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
        )}
      </button>
    </>
  );
};

export default PopButton;
