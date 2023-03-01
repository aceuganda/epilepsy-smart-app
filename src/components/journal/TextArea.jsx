/* eslint-disable react/prop-types */
import React from 'react';

const TextArea = ({ placeholder }) => {
  return (
    <div style={{ fontSize: '10px' }}>
      <textarea placeholder={placeholder} />
    </div>
  );
};

export default TextArea;
