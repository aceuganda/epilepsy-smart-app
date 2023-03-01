import React from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';

const Listening = () => {
  return (
    <ResilienceActivitiesPageComponent>
      <Form>
        <div>
          <div>
            <span style={{ marginLeft: '10px' }}>Listening</span>
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
              Sometimes, when we are upset, we talk to others about our problems to gain advice and
              support. But other times it is helpful to listen and support others instead. When we
              put our energy into thinking about another, it helps our own sense of well-being.
            </p>
            <p style={{ fontSize: '11px', marginLeft: '6px' }}>
              To do this, one makes an effort to give rather than take, listen rather than talk,
              offer positive thoughts rather than negative ones, to bring cheer rather than
              complaints. It is an exercise that can impact our own mood, as well as those around
              us.
            </p>
          </div>
        </div>
      </Form>
    </ResilienceActivitiesPageComponent>
  );
};

export default Listening;
