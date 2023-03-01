import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ResilienceActivitiesPageComponent from '../../pages/ResilienceActivities';
import Form from '../form/Form';

import { HiEllipsisHorizontalCircle } from 'react-icons/hi2';
import TextArea from './TextArea';
import CustomPopup from './CustomPopup';
// import {withRouter} from 'react-router-dom'

const Grateful = (props) => {
  const params = useParams();
  const [showPopup, setShowPopup] = useState(false);

  const showCustomPopup = () => {
    setShowPopup(!showPopup);
  };
  // console.log()
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div>
        <h1 style={{ fontWeight: 'bold' }}>What are you grateful for? </h1>
      </div>

      <div>
        <textarea placeholder="Tap to type something" />
      </div>
    </div>
  );
};

export default Grateful;
