import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ img, title, link }) => {
  Card.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
    link: PropTypes.string
  };
  return (
    <Link id="nav-link" to={`${link}`}>
      <div className="card">
        <img src={img} />
        <span className="text-uppercase">{title}</span>
      </div>
    </Link>
  );
};

export default Card;
