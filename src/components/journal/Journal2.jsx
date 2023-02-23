import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ResilienceActivitiesPageComponent from '../../pages/ResilienceActivities';
import Form from '../form/Form';

import { AiOutlineEllipsis } from 'react-icons/ai';
import TextArea from './TextArea';
import CustomPopup from './CustomPopup';
// import {withRouter} from 'react-router-dom'

const Journal2 = (props) => {
  const params = useParams();
  const [showPopup, setShowPopup] = useState(false);

  const showCustomPopup = () => {
    setShowPopup(!showPopup);
  };
  // console.log()
  return (
    <ResilienceActivitiesPageComponent
      title={'Journaling'}
      backroute={'/resilience-activities/Journaling'}>
      <Form>
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              padding: '8px'
            }}>
            <div>Journal {params.journalId.split(':')[1]}</div>
            <div onClick={showCustomPopup}>
              {' '}
              <AiOutlineEllipsis />
            </div>
          </div>

          {showPopup && <CustomPopup />}
          {/* {showPopup ? <CustomPopup/> : ''} */}

          <div>
            <TextArea placeholder="Tap to type something" />
          </div>
        </div>
      </Form>
    </ResilienceActivitiesPageComponent>
  );
};

export default Journal2;
