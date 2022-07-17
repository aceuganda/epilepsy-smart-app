import React, { useEffect } from 'react'
import PropTypes from "prop-types";

const Modal = ({children, show, closeModal}) => {
    Modal.propTypes ={
        children: PropTypes.any,
        show: PropTypes.bool,
        closeModal: PropTypes.func,
    }

    const toggleModal = () =>{
        if (show) {
            document.getElementById('modal-wrapper').style.display = "block"
            document.getElementById('modal').style.display = "block"
        }
        else {
            document.getElementById('modal-wrapper').style.display = "none"
            document.getElementById('modal').style.display = "none"
        }
    }

    useEffect(()=>{
        toggleModal();
    }, [show])

    return (
        <div className='modal-wrapper' id='modal-wrapper' onClick={closeModal}>
            <div className='modal' id='modal'>
                {children}
            </div>
        </div>
    )
}

export default Modal;