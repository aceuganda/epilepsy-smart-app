import React, { useState } from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';

const OneServiceGoal = () => {
  const [selectedTab, setSelectedTab] = useState('overall');
  const onClickTabItem = (tab) => setSelectedTab(tab);

  return (
    <div>
      <ResilienceActivitiesPageComponent backroute={'/resilience-activities'}>
        <Form style={{ maxHeight: 'none', height: '700px' }}>
          <div className="text-page">
            <div className="title">
              <h3>One service goal </h3>
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
                Doing acts of service which can be described as doing something for someone else
                which you know they would like can have a profound positive impact on mood and
                well-being.
              </p>
              <p>
                Pick one service goal to complete in the next few days. Helping someone or a group
                can benefit to your well-being!
              </p>
              <h5>Tips:</h5>
              <ul>
                <li>Choose something that you have not been asked to do.</li>
                <li> Consider doing the service act without others getting to know sometimes. </li>
              </ul>
              <h5>Examples:</h5>
              <ul>
                <li>Carry groceries for an elder or mother with young children</li>
                <li>Volunteer at your church/mosque</li>
                <li>Help someone with their school or home tasks</li>
                <li>Collect water for use at home</li>
                <li>Wash up the plates and cups after a meal without being asked</li>
                <li>Clean/sweep the compound</li>
                <li>Wash/iron your parents or siblings’ clothes</li>
                <li>Empty the dustbin into the designated waste area</li>
              </ul>
            </div>
          </div>
        </Form>
      </ResilienceActivitiesPageComponent>
    </div>
  );
};

export default OneServiceGoal;
