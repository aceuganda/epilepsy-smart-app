import React, { useState } from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';
import { useTranslation } from 'react-i18next';
import useFirebaseScreenTracking from '../../../hooks/screenLogger';

const OneServiceGoal = () => {
  useFirebaseScreenTracking('OneServiceGoal');
  const [selectedTab, setSelectedTab] = useState('overall');
  const onClickTabItem = (tab) => setSelectedTab(tab);
  const { t } = useTranslation();

  const oneSocialGoal = [
    t('Choose something that you have not been asked to do.'),
    t('Consider doing the service act without others getting to know sometimes.') 
  ];

  return (
    <div>
      <ResilienceActivitiesPageComponent backroute={'/resilience-activities'}>
        <Form style={{ maxHeight: 'none', height: '700px' }}>
          <div className="text-page">
            <div className="title">
              <h3>{t('One service goal')} </h3>
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
                {t(`Doing acts of service which can be described as doing something for someone else
                which you know they would like can have a profound positive impact on mood and
                well-being.`)}
              </p>
              <p>
                {t(`Pick one service goal to complete in the next few days. Helping someone or a group
                can benefit to your well-being`)}!
              </p>
              <h5>{t(`Tips`)}:</h5>
              <ul>
                {oneSocialGoal ? (
                  oneSocialGoal.map((affirmation, index) => (
                    <li key={index}>
                      {t(affirmation)}
                      {'.'}
                    </li>
                  ))
                ) : (
                  <span />
                )}
              </ul>
              <h5>{t(`Examples`)}:</h5>
              <ul>
                <li>{t('Carry groceries for an elder or mother with young children')}</li>
                <li>{t('Volunteer at your church/mosque')}</li>
                <li>{t('Help someone with their school or home tasks')}</li>
                <li>{t('Collect water for use at home')}</li>
                <li>{t('Wash up the plates and cups after a meal without being asked')}</li>
                <li>{t('Clean/sweep the compound')}</li>
                <li>{t('Wash/iron your parents or siblings’ clothes')}</li>
                <li>{t('Empty the dustbin into the designated waste area')}</li>
              </ul>
            </div>
          </div>
        </Form>
      </ResilienceActivitiesPageComponent>
    </div>
  );
};

export default OneServiceGoal;
