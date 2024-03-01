import React from 'react';
import PropTypes from 'prop-types';
import { HiPencil } from 'react-icons/hi';
import { MdDeleteSweep } from 'react-icons/md';
import Spinner from '../Spinner/Spinner';
import { useTranslation } from 'react-i18next';

const CustomPopup = ({ onDeleteClick, onUpdateClick, deleteLoading, updateLoading }) => {
  CustomPopup.propTypes = {
    onDeleteClick: PropTypes.func,
    onUpdateClick: PropTypes.func,
    deleteLoading: PropTypes.bool,
    updateLoading: PropTypes.bool
  };
  const { t } = useTranslation();

  return (
    <div
      style={{
        width: '28vw',
        backgroundColor: '#FFFFFF',
        padding: '0 6px',
        flexDirection: 'column',
        border: '1px solid rgba(0, 0, 0, 0.19)',
        boxShadow: '0px 10px 45px rgba(0, 0, 0, 0.141);',
        position: 'absolute',
        borderRadius: '8px',
        height: '12vh',
        right: 28,
        top: 60,
      }}>
      <div
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '11px'
        }}
        onClick={onUpdateClick}>
        <div>{updateLoading ? <Spinner /> : <p>{t('Edit')}</p>}</div>
        <div style={{ color: '#553791', marginLeft: '80px', marginTop: '-48px' }}>
          <HiPencil />
        </div>
      </div>
      <hr />
      <div
        style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '8px' }}
        onClick={onDeleteClick}>
        <div>{deleteLoading ? <Spinner /> : <p>{t('Delete')}</p>}</div>
        <div style={{ color: '#553791', marginLeft: '80px', marginTop: '-45px' }}>
          <MdDeleteSweep />
        </div>
      </div>
    </div>
  );
};

export default CustomPopup;
