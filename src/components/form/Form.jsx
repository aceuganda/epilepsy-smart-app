import React from 'react';
import PropTypes from 'prop-types';

const Form = (props) => {
  Form.propTypes = {
    children: PropTypes.any,
    style: PropTypes.any
  };
  return (
    <div className="smart form-layout" style={props.style}>
      {props.children}
    </div>
  );
};

export default Form;
