import React, { useState } from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';

const OneSocialGoal = () => {
  const [selectedTab, setSelectedTab] = useState('overall');
  const onClickTabItem = (tab) => setSelectedTab(tab);
  return (
    <div>
      <ResilienceActivitiesPageComponent backroute={'/resilience-activities'}>
        <Form style={{ maxHeight: 'none', height: '700px' }}>
          <div className="text-page">
            <div className="title">
              <h3>One Social goal </h3>
            </div>
            <div className="header-nav">
              <span id="tab1">
                <button
                  className={selectedTab === 'overall' ? 'selected' : ''}
                  onClick={() => onClickTabItem('overall')}>
                  Overall
                </button>
              </span>
            </div>
            <div className="text-page-body">
              <p>
                Making friends or getting to know other people is an important part of well-being.
                Sometimes it is hard to make these connections because we are shy, we don’t know
                others or we fear to be ignored, mistreated or laughed at.
              </p>
              <p>
                Try to build your social community in small steps one at a time. Pick one social
                goal and try to engage in a social activity in the next few days.
              </p>
              <h5>Tip:</h5>
              <p>
                Spend time with a special family member, a friend, a schoolmate, or someone from the
                church/mosque or prayer group. Sometimes you can meet people from Epilepsy support
                groups, like through the Epilepsy Support Association of Uganda or Purple Bench.
              </p>
            </div>
          </div>
        </Form>
      </ResilienceActivitiesPageComponent>
    </div>
  );
};

export default OneSocialGoal;
