import React, { useState } from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';
import { useTranslation } from 'react-i18next';

const PositiveAffirmations = () => {
  const [selectedTab, setSelectedTab] = useState('overall');
  const onClickTabItem = (tab) => setSelectedTab(tab);
  const { t } = useTranslation();

  const positiveAffirmations = [
    'I am kind',
    'I am clever',
    'I am giving',
    'I try hard',
    'My smile makes others smile',
    'I am worthy',
    'I love who I am and can not wait to see who I am becoming',
    'I will get through this',
    'I am deserving',
    'I get better day by day'
  ];

  return (
    <div>
      <ResilienceActivitiesPageComponent backroute={'/resilience-activities'}>
        <Form style={{ maxHeight: 'none', height: '680px' }}>
          <div className="text-page">
            <div className="title">
              <h3>{t('Positive Affirmations')}</h3>
            </div>
            <div className="header-nav">
              <span id="tab1">
                <button
                  className={selectedTab === 'overall' ? 'selected' : ''}
                  onClick={() => onClickTabItem('overall')}>
                  {t('Overall')}
                </button>
              </span>
            </div>
            <div className="text-page-body">
              <p>
                {t(`Positive affirmations are positive statements you make about yourself to help you to
                remember your gifts, skills, and blessings. Pick 3 affirmations to say each morning
                and night for 3 days`)}
                !
              </p>
              <h5>{t('Tip')}:</h5>
              <p>
                {t(`This is a very easy and fun way to change your self-image! If you have trouble you
                have trouble thinking of positive ideas about yourself, ask you statements.`)}
              </p>
              <h5>{t('Examples')}:</h5>
              <ul>
                {positiveAffirmations ? (
                  positiveAffirmations.map((affirmation, index) => (
                    <li key={index}>
                      {t(affirmation)}
                      {'.'}
                    </li>
                  ))
                ) : (
                  <span />
                )}
              </ul>
            </div>
          </div>
        </Form>
      </ResilienceActivitiesPageComponent>
    </div>
  );
};

export default PositiveAffirmations;
