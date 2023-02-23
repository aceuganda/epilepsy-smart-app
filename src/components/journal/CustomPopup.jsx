import React from 'react';
import { HiPencil } from 'react-icons/hi';
import { MdDeleteSweep } from 'react-icons/md';

const CustomPopup = () => {
  return (
    <div
      style={{
        // display: 'flex',
        width: '40vw',
        backgroundColor: '#FFFFFF',
        padding: 4,
        flexDirection: 'column',
        boxShadow: '0px 10px 45px rgba(0, 0, 0, 0.141)',
        position: 'absolute',
        borderRadius: '17px',
        height: '15vh',
        left: 0,
        right: 70,
        top: 50,
        bottom: 0,
        marginLeft: 170
      }}>
      <div
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between', 
        }}>
        <div>
          <p>Rename</p>
        </div>
        <div style={{ color: '#553791' }}>
          <HiPencil />
        </div>
      </div>
      {/* <hr /> */}
      <div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <div>
          <p>Delete</p>
        </div>
        <div style={{ color: '#553791' }}>
          <MdDeleteSweep />
        </div>
      </div>
    </div>
  );
};

export default CustomPopup;
