import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

const EndOfAssessmentModal = ({ icon, title, subText, link, linkText, showModal }) => {
  const [show, setShow] = useState(showModal);
  // const { t } = useTranslation();
  EndOfAssessmentModal.propTypes = {
    icon: PropTypes.element,
    title: PropTypes.string,
    subText: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string,
    showModal: PropTypes.bool
  };

  return (
    <div className="eoa-container">
      {show && (
        <Modal show={show} closeModal={() => setShow(false)}>
          <div className="eoa-wrapper">
            <div className="eoa-icon">{icon}</div>
            <div className="eoa-title">{title}</div>
            <div className="eoa-subtext">{subText}</div>
            <Link to={`${link}`}>
              <button className="finish-btn">{linkText}</button>
            </Link>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default EndOfAssessmentModal;
