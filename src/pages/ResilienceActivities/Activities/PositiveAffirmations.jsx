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
              <span style={{ marginLeft: '10px' }}>Positive Affirmations</span>
            </div>
            <div >
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
              <p style={{ fontSize: '11px', marginLeft: '5px' }}>
                Positive affirmations are positive statements you make about yourself to help you to
                remember your gifts, skills, and blessings. Pick 3 affirmations to say each morning
                and night for 3 days!
              </p>
              <li style={{ fontSize: '11px', marginLeft: '20px', marginRight: '10px' }}>
                Tips: This is a very easy and fun way to change your self-image! If you have trouble
                you have trouble thinking of positive ideas about yourself, ask you statements.
              </li>
              <h6 style={{ fontSize: '13px', marginLeft: '30px', marginTop: '6px' }}>Examples</h6>
              <li style={{ fontSize: '11px', marginLeft: '50px', marginRight: '10px' }}>
                I am kind.
              </li>
              <li style={{ fontSize: '11px', marginLeft: '50px', marginRight: '10px' }}>
                I am clever.
              </li>
              <li style={{ fontSize: '11px', marginLeft: '50px', marginRight: '10px' }}>
                I am giving.
              </li>
              <li style={{ fontSize: '11px', marginLeft: '50px', marginRight: '10px' }}>
                I try hard.
              </li>
              <li style={{ fontSize: '11px', marginLeft: '50px', marginRight: '10px' }}>
                My smile makes others smile.
              </li>
              <li style={{ fontSize: '11px', marginLeft: '50px', marginRight: '10px' }}>
                I am worthy.
              </li>
              <li style={{ fontSize: '11px', marginLeft: '50px', marginRight: '10px' }}>
                I love who I am and can not wait to see who I am becoming
              </li>
              <li style={{ fontSize: '11px', marginLeft: '50px', marginRight: '10px' }}>
                I will get through this.
              </li>
              <li style={{ fontSize: '11px', marginLeft: '50px', marginRight: '10px' }}>
                I am deserving.
              </li>
              <li style={{ fontSize: '11px', marginLeft: '50px', marginRight: '10px' }}>
                I get better day by day.
              </li>
            </div>
          </div>
        </Form>
      </ResilienceActivitiesPageComponent>
    </div>
  );
};

export default PositiveAffirmations;
