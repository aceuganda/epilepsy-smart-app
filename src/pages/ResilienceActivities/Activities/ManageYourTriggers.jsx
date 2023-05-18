import React, { useState } from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';

const ManageYourTriggers = () => {
  const [selectedTab, setSelectedTab] = useState('overall');
  const onClickTabItem = (tab) => setSelectedTab(tab);

  const manageYourTriggers = [
    'Missed medications.',
    'Skipping meals/low blood sugar.',
    'Hunger',
    'Particular food items such as -  tea, coffee, chocolate, sugar, sweets, soft drinks, excess salt, and spices. ',
    'Dehydration- depletion of bodily fluids.',
    'Imbalance of substances (electrolytes) that maintain the fluids inside or outside your body and are essential for muscle and nerve function',
    'Tiredness and lack of sleep',
    'Illness or high body temperature.',
    'Flashing or flickering lights',
    'Hormonal changes/Menstruation ',
    'Very warm weather, hot baths or showers, especially when there is a sudden change in temperature.',
    'Stress/anxiety',
    'Excitement.',
    'Boredom.',
    'Alcohol or illicit substance use.'
  ];

  return (
    <div>
      <ResilienceActivitiesPageComponent backroute={'/resilience-activities'}>
        <Form style={{ maxHeight: 'none', height: '680px' }}>
          <div className="text-page">
            <div className="title">
              <h3>Manage Your Triggers</h3>
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
                Learning your triggers and avoiding them may take patient, thoughtful reflection to
                identify and learn ways to avoid or manage them. Some common triggers include:
              </p>
              <ul>
                {manageYourTriggers ? (
                  manageYourTriggers.map((trigger, index) => (
                    <li key={index}>
                      {trigger}
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

export default ManageYourTriggers;


