/* eslint-disable react/prop-types */
import React from 'react';
import ResilienceActivitiesPageComponent from '../../pages/ResilienceActivities';
import Form from '../form/Form';

const NewJournal = ({ placeholder }) => {
  return (
    <ResilienceActivitiesPageComponent
      title={'New Journal'}
      backroute={'/resilience-activities/Journaling'}>
      <Form style={{ backgroundColor: '#E8E8E8' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            {/* input */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '120px'
              }}>
              <div style={{ borderBottom: '3px solid #F42C56'}}>
                {' '}
                <input placeholder="Type here" type="text" />
                {/* {children} */}
              </div>

              <div style={{ marginTop: '7px', fontSize: '13px' }}>
                <span>Today</span>
              </div>
            </div>

            <div>
              <button
                style={{
                  borderStyle: 'none',
                  backgroundColor: 'white',
                  color: 'purple',
                  fontWeight: 'bold'
                }}>
                Save
              </button>
            </div>
          </div>
          <div>
            <textarea placeholder={placeholder} />
          </div>
        </div>
      </Form>
    </ResilienceActivitiesPageComponent>
  );
};

export default NewJournal;
