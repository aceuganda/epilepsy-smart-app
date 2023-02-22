import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Largebtn = (props) => {
  Largebtn.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.element
  };
  return (
    <div className="large-btn">
      <Link to={`${props.link}`}>
        <button>
          {props.icon}
          {props.title}
        </button>
      </Link>
    </div>
  );
};

export default Largebtn;
