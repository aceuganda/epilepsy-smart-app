import React from 'react';
import TrackImg from '../../assets/img/Onboarding/track.png';
import Dotted from '../../assets/img/Onboarding/btn3.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Track = () => {
  const { t } = useTranslation();
  return (
    <div className="onboarding">
      <div className="track-section">
        <img src={TrackImg} alt="Quick Updates" />
      </div>
      <div className="bottom-section">
        <h4>{t('Track Medicine')}</h4>
        <span className="content">
          <p>{t('Quickly track your medication on the app')}</p>
        </span>
        <img src={Dotted} />
      </div>
      <Link to="/register">
        <button className="o-btn">{t('Get Started')}</button>
      </Link>
    </div>
  );
};

export default Track;
