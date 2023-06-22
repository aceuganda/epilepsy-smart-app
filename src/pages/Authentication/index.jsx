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
        <Link to="/">
          <span>{'<'}</span>
        </Link>
        <span>{props.title}</span>
      </div>
      <div className="auth-body">
        <div className="image">{props.image}</div>
        <div>{props.children}</div>
      </div>
      <div className="bottom-text">
        <div className="toc">
          <span>Forgot password?</span>
          <Link to="/forgot-password">Reset password</Link>
        </div>
        <div className="call-to-action">
          <span>{props.callToAction}</span>
          <Link to={`${props.link}`}>{props.linkTitle}</Link>
        </div>
        <div className="toc">
          <span>By signing up you agree with our</span>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
        <div className="toc">
          <span>
            To learn more about how we use your data, read our{' '}
            <Link to="/privacy">Privacy Policy</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthPageComponent;
