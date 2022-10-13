import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AuthPageComponent = (props) => {
  AuthPageComponent.propTypes = {
    title: PropTypes.string,
    image: PropTypes.elementType,
    children: PropTypes.any,
    callToAction: PropTypes.string,
    link: PropTypes.string,
    linkTitle: PropTypes.string
  };
  return (
    <div className="Auth">
      <div className="header">
        <span>
          <Link to="/">{'<'}</Link>
        </span>
        <span>{props.title}</span>
      </div>
      <div className="auth-body">
        <div className="image">{props.image}</div>
        <div>{props.children}</div>
        <div className="bottom-text">
          <div className="call-to-action">
            <span>{props.callToAction}</span>
            <Link to={`${props.link}`}>{props.linkTitle}</Link>
          </div>
          <div className="toc">
            <span>By signing, up you agree with our</span>
            <Link to="">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPageComponent;
