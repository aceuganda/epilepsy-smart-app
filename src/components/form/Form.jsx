import React from 'react';
import PropTypes from 'prop-types';

const Form = (props) => {
  Form.propTypes = {
    children: PropTypes.any
  };
  return <div className="smart form-layout">{props.children}</div>;
};

export default Form;
