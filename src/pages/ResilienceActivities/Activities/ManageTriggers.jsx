import React from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';

const ManageTriggers = () => {
  return (
    <ResilienceActivitiesPageComponent backroute={'/resilience-activities'}>
      <Form style={{ maxHeight: 'none', height: '580px' }}>
        <div className="text-page">
          <div className="title">
            <h3>Manage your triggers </h3>
          </div>
          <div className="text-page-body"></div>
        </div>
      </Form>
    </ResilienceActivitiesPageComponent>
  );
};

export default ManageTriggers;
