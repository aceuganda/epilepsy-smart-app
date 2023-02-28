import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ActivityIcon } from '../../assets/svg/Form/Topbar/logo.svg';
import { Link } from 'react-router-dom';

const ResilienceActivityPill = ({ title, icon, link, outerLink }) => {
  ResilienceActivityPill.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.element,
    link: PropTypes.string,
    outerLink: PropTypes.string
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
      {outerLink && (
        <a
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            
          }}
          href={outerLink}
          target="blank"></a>
      )}
    </div>
  );
};

export default ResilienceActivityPill;
