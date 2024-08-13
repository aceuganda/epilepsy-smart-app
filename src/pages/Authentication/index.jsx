import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const AuthPageComponent = (props) => {
  AuthPageComponent.propTypes = {
    title: PropTypes.string,
    image: PropTypes.elementType,
    children: PropTypes.any,
    callToAction: PropTypes.string,
    link: PropTypes.string,
    linkTitle: PropTypes.string
  };
  const { t } = useTranslation();
  return (
    <div className="Auth">
      <div className="header">
        <Link to="/">
          <span>{'<'}</span>
        </Link>
        <span>{t(props.title)}</span>
      </div>
      <div className="auth-body">
        <div className="image">{props.image}</div>
        <div>{props.children}</div>
      </div>
      <div className="bottom-text">
        <div className="toc">
          <span>{t('Forgot password')}?</span>
          <Link to="/forgot-password">{t('Reset password')}</Link>
        </div>
        <div className="call-to-action">
          <span>{t(props.callToAction)}</span>
          <Link to={`${props.link}`}>{t(props.linkTitle)}</Link>
        </div>
        <div className="toc">
          <span>{t('By signing up you agree with our')}</span>
          <Link to="/terms">{t('Terms & Conditions')}</Link>
        </div>
        <div className="toc">
          <span>
            {t('To learn more about how we use your data, read our')}{' '}
            <Link to="/privacy">{t('Privacy Policy')}</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthPageComponent;
