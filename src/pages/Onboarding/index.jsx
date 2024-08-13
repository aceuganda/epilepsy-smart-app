import React from 'react';
import UpdateImg from '../../assets/img/Onboarding/getStarted.png';
import Dotted from '../../assets/img/Onboarding/btn1.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useFirebaseScreenTracking from '../../hooks/screenLogger';

const Onboarding = () => {
  useFirebaseScreenTracking('Onboarding');
  const { t } = useTranslation();
  return (
    <div className="onboarding">
      <div className="update-section">
        <img src={UpdateImg} alt="Quick Updates" />
      </div>
      <div className="bottom-section">
        <h4>{t('Quick Updates')}</h4>
        <span className="content">
          <p>
            {t(`The app is free, secure, and helps connect you to important resources for coping and
            adapting`)}
          </p>
        </span>
        <img src={Dotted} />
      </div>
      <Link to="/onboarding/notify">
        <button className="o-btn">{t('Next')}</button>
      </Link>
    </div>
  );
};

export default Onboarding;
