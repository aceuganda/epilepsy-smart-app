import React from 'react';
import PropTypes from 'prop-types';
import { HiPencil } from 'react-icons/hi';
import { MdDeleteSweep } from 'react-icons/md';
import Spinner from '../Spinner/Spinner';

const CustomPopup = ({ onDeleteClick, onUpdateClick, deleteLoading, updateLoading }) => {
  CustomPopup.propTypes = {
    onDeleteClick: PropTypes.func,
    onUpdateClick: PropTypes.func,
    deleteLoading: PropTypes.bool,
    updateLoading: PropTypes.bool
  };

  return (
    <div
      style={{
        // display: 'flex',
        width: '35vw',
        backgroundColor: '#FFFFFF',
        padding: 4,
        flexDirection: 'column',
        border: '1px solid rgba(0, 0, 0, 0.19)',
        boxShadow: '0px 10px 45px rgba(0, 0, 0, 0.141);',
        position: 'absolute',
        borderRadius: '17px',
        height: '12vh',
        left: 0,
        right: 120,
        top: 60,
        bottom: 0,
        marginLeft: 165
      }}>
      <div
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '11px'
        }}
        onClick={onUpdateClick}>
        <div>{updateLoading ? <Spinner /> : <p>Edit</p>}</div>
        <div style={{ color: '#553791', marginLeft: '110px', marginTop: '-48px' }}>
          <HiPencil />
        </div>
      </div>
      <hr />
      <div
        style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '8px' }}
        onClick={onDeleteClick}>
        <div>{deleteLoading ? <Spinner /> : <p>Delete</p>}</div>
        <div style={{ color: '#553791', marginLeft: '110px', marginTop: '-45px' }}>
          <MdDeleteSweep />
        </div>
      </div>
    </div>
  );
};

export default CustomPopup;
