import React from 'react';
import { ReactComponent as HealthIcon } from '../../assets/svg/Footer/health.svg';
import { ReactComponent as ArticleIcon } from '../../assets/svg/Footer/articles.svg';

const Footer = () => {
  return (
    <div className="smart footer">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="icons">
            <HealthIcon />
            <ArticleIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
