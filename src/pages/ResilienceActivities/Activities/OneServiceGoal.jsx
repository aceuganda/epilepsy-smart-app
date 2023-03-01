import { Padding } from '@mui/icons-material';
import { height } from '@mui/system';
import React from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';

const OneServiceGoal = () => {
  return (
    <div>
      <ResilienceActivitiesPageComponent
        title={'One Service Goal'}
        backroute={'/resilience-activities'}>
        <Form>
          <div>
            <div>
              <span style={{ marginLeft: '10px' }}>One service goal </span>
            </div>
            <div>
              <span
                style={{
                  color: 'gray',
                  left: 0,
                  marginLeft: '15px',
                  fontSize: '13px',
                  inset: '0px',
                  top: '40px',
                  borderBottom: '3px solid orange',
                  marginBottom: '-100px'
                }}>
                Overall
              </span>
            </div>
            <hr style={{ width: 325, marginTop: '0px' }} />
            <div>
              <p style={{ fontSize: '11px', marginLeft: '6px' }}>
                Doing acts of service which can be described as doing something for someone else
                which you know they would like can have a profound positive impact on mood and
                well-being. Pick one service goal to complete in the next few days. Helping someone
                or a group can benefit to your well-being!
              </p>
              <h6 style={{ fontSize: '13px', marginLeft: '25px', marginTop: '3px' }}>Tips:</h6>
              <li style={{ fontSize: '11px', marginLeft: '20px', marginRight: '10px' }}>
                {' '}
                Choose something that you have not been asked to do.{' '}
              </li>
              <li style={{ fontSize: '11px', marginLeft: '20px', marginRight: '10px' }}>
                {' '}
                Consider doing the service act without others getting to know sometimes.{' '}
              </li>

              <h6 style={{ fontSize: '13px', marginLeft: '30px', marginTop: '6px' }}>Examples</h6>
              <li style={{ fontSize: '11px', marginLeft: '50px', marginRight: '10px' }}>
                Carry groceries for an elder or mother with young children, volunteer at your
                church/mosque, help someone with their school or home tasks, collect water for use
                at home, wash up the plates and cups after a meal without being asked, clean/sweep
                the compound, wash or iron your parents or siblings’ clothes, or empty the dustbin
                in the designated waste area.
              </li>
            </div>
          </div>
        </Form>
      </ResilienceActivitiesPageComponent>
    </div>
  );
};

export default OneServiceGoal;
