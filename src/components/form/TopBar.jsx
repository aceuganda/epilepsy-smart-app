import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/Form/Topbar/logo.svg';
import { ReactComponent as ArrowLeft } from '../../assets/svg/Form/Topbar/arrow.svg';

const TopBar = (props) => {
  TopBar.propTypes = {
    title: PropTypes.string,
    route: PropTypes.string
  };
  return (
    <div className="form-top-bar">
      <div className="row container-fluid">
        <span className="col-2 col-sm-2 icon">
          <Link to={props.route}>
            <ArrowLeft />
          </Link>
        </span>
        <span className="row form-title">
          <Logo />
          <p>{props.title}</p>
        </span>
      </div>
    </div>
  );
};

export default TopBar;
