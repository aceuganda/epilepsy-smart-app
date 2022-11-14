import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ActivityIcon } from '../../assets/svg/Form/Topbar/logo.svg';
import { Link } from 'react-router-dom';

const ResilienceActivityPill = ({ title, icon, link }) => {
  ResilienceActivityPill.propTypes = {
    title: PropTypes.string.required,
    icon: PropTypes.element,
    link: PropTypes.string
  };
  return (
    <div className="resilience-a-pill">
      <div className="act-icon">
        {icon ? (
          <div>{icon}</div>
        ) : (
          <div>
            <ActivityIcon />
          </div>
        )}
      </div>
      <Link to={link ? `${link}` : '#'}>
        <div className="act-title">{title}</div>
      </Link>
    </div>
  );
};

export default ResilienceActivityPill;
