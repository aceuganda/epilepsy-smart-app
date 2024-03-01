import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/Form/Topbar/logo.svg';
import { ReactComponent as ArrowLeft } from '../../assets/svg/Form/Topbar/arrow.svg';

const TopBar = (props) => {
  TopBar.propTypes = {
    title: PropTypes.string,
    route: PropTypes.string,
    logo: PropTypes.element
  };
  const navigate = useNavigate();
  return (
    <div className="form-top-bar">
      <div className="row container-fluid">
        <span
          onClick={() => {
            navigate(-1);
          }}
          className="col-2 col-sm-2 icon">
          <ArrowLeft />
        </span>
        <span className="row form-title">
          {props.logo ? props.logo : <Logo />}
          <span>{props.title}</span>
        </span>
      </div>
    </div>
  );
};

export default TopBar;
