import React from 'react';
import { ReactComponent as HealthIcon } from '../../assets/svg/Footer/health.svg';
import { ReactComponent as ArticleIcon } from '../../assets/svg/Footer/articles.svg';
import { ReactComponent as UserIcon } from '../../assets/svg/Footer/user_icon.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="smart footer">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="icons">
            <div className="icon">
              <Link to="/home">
                <HealthIcon />
              </Link>
              <div className="title">Home</div>
            </div>
            <div className="icon">
              <ArticleIcon />
              <div className="title">Forum</div>
            </div>
            <div className="icon">
              <Link to="/account">
                <UserIcon />
              </Link>
              <div className="title">Account</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
