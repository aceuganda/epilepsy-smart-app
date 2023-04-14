import React, { useState } from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';

const Listening = () => {
  const [selectedTab, setSelectedTab] = useState('overall');
  const onClickTabItem = (tab) => setSelectedTab(tab);
  return (
    <ResilienceActivitiesPageComponent backroute={'/resilience-activities'}>
      <Form style={{ maxHeight: 'none', height: '680px' }}>
        <div className="text-page">
          <div className="title">
            <h3>Listening </h3>
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
              Sometimes, when we are upset, we talk to others about our problems to gain advice and
              support.
            </p>
            <p>
              But other times it is helpful to listen and support others instead. When we put our
              energy into thinking about another, it helps our own sense of well-being.
            </p>
            <p>
              To do this, one makes an effort to give rather than take, listen rather than talk,
              offer positive thoughts rather than negative ones, to bring cheer rather than
              complaints.
            </p>
            <p>It is an exercise that can impact our own mood, as well as those around us.</p>
          </div>
        </div>
      </Form>
    </ResilienceActivitiesPageComponent>
  );
};

export default Listening;
