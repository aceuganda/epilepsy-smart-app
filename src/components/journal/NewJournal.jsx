/* eslint-disable react/prop-types */
import React from 'react';
import ResilienceActivitiesPageComponent from '../../pages/ResilienceActivities';
import Form from '../form/Form';

const NewJournal = ({ placeholder, children }) => {
  return (
    <ResilienceActivitiesPageComponent>
      <Form>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* input */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ borderBottom: '3px solid #F42C56' }}>
                {' '}
                <input placeholder="Type here" type="text" />
                {/* {children} */}
              </div>

              <div style={{ marginTop: '7px', fontSize: '13px' }}>
                <span>Today</span>
              </div>
            </div>

            <div>
              <button>Save</button>
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
