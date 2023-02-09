import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children, show, closeModal }) => {
  Modal.propTypes = {
    children: PropTypes.any,
    show: PropTypes.bool,
    closeModal: PropTypes.func
  };
  const modalRef = useRef(null);

  const toggleModal = () => {
    if (show) {
      document.getElementById('modal-wrapper').style.display = 'block';
      document.getElementById('modal').style.display = 'block';
    } else {
      document.getElementById('modal-wrapper').style.display = 'none';
      document.getElementById('modal').style.display = 'none';
    }
  };
  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleClickOutsideModal);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideModal);
    };
  }, [closeModal]);

  useEffect(() => {
    toggleModal();
  }, [show]);

  return (
    <div className="modal-wrapper" id="modal-wrapper">
      <div ref={modalRef} className="modal" id="modal">
        {children}
      </div>
    </div>
  );
};

export default Modal;
