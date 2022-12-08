import React from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';

const PositiveAffirmations = () => {
  return (
    <div>
      <ResilienceActivitiesPageComponent
        title={'Positive Affirmations'}
        backroute={'/resilience-activities'}>
        <Form>
          <div>
            <div>
              <span>Positive Affirmations</span>
            </div>
            <div></div>
          </div>
        </Form>
      </ResilienceActivitiesPageComponent>
    </div>
  );
};

export default PositiveAffirmations;
