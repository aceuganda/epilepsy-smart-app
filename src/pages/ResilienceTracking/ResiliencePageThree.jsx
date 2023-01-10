import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate} from 'react-router-dom';
import ResilienceComponent from './index';
import Form from '../../components/form/Form';
import Question from '../../components/form/Question';

import {
  setTypeOfFeelings,
  setFeelingToday,
  setReasonForFeeling,
  postResilienceFormData
} from '../../redux/Slices/ResilienceTracking';
import Spinner from '../../components/Spinner/Spinner';

const ResiliencePageThree = () => {
  const [type_of_feelings, setFeelingType] = useState(null);
  const [feeling_today, setFeeling] = useState({});
  const [reason_for_feeling, setReason] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const resilienceTrackingData = useSelector((state) => state.resilienceTracking);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    console.log(resilienceTrackingData);
    setLoading(true)
    try {
      await dispatch(postResilienceFormData(resilienceTrackingData));
      setLoading(false)
      //navigate Home
      navigate('/home');
    } catch (err) {
      console.log('Failed to post:', err);
      setLoading(false)
    }
  };

  //TODO Define handleSubmit function and get data from redux store

  useEffect(() => {}, []);
  const selectedButtonStyle=(selected)=>{
    return selected?"button form-button-pill text-uppercase selectedPill":
    "button form-button-pill text-uppercase";
  }
  const selectedLongButtonStyle=(selected)=>{
    return selected?"button selectedLongPill text-uppercase":
    "button form-button-lg text-uppercase";
  }
  return (
    <ResilienceComponent backroute={'/resilience-form/2'}>
      <Form>
        <form>
          <Question question={'How did you feel today'}>
            <fieldset className="mt-3 mb-4" style={{ justifyContent: 'space-evenly' }}>
              <button
                type="button"
                className={selectedButtonStyle(type_of_feelings==='positive')}
                value={'positive'}
                onClick={(e) => {
                  setFeelingType(e.target.value);
                  dispatch(setTypeOfFeelings(e.target.value));
                }}>
                Positive
              </button>
              <button
                type="button"
                className={selectedButtonStyle(type_of_feelings==='negative')}
                value={'negative'}
                onClick={(e) => {
                  setFeelingType(e.target.value);
                  dispatch(setTypeOfFeelings(e.target.value));
                }}>
                Negative
              </button>
            </fieldset>
          </Question>
          {type_of_feelings === 'positive' ? (
            <Question question={'Which emotions were felt'}>
              <fieldset className="mt-3 mb-4">
                <button
                  type="button"
                  className={selectedButtonStyle(feeling_today==='happy')}
                  value={'happy'}
                  onClick={(e) => {
                    setFeeling(e.target.value);
                    dispatch(setFeelingToday([e.target.value]));
                  }}>
                  Happy
                </button>
                <button
                  type="button"
                  className={selectedLongButtonStyle(feeling_today==='encouraged')}
                  value={'encouraged'}
                  onClick={(e) => {
                    setFeeling(e.target.value);
                    dispatch(setFeelingToday([e.target.value]));
                  }}>
                  Encouraged
                </button>
                <button
                  type="button"
                  className={selectedButtonStyle(feeling_today==='inspired')}
                  value={'inspired'}
                  onClick={(e) => {
                    setFeeling(e.target.value);
                    dispatch(setFeelingToday([e.target.value]));
                  }}>
                  Inspired
                </button>
              </fieldset>
            </Question>
          ) : (
            <span />
          )}
          {type_of_feelings === 'negative' ? (
            <Question question={'Which emotions were felt'}>
              <fieldset className="mt-3 mb-4">
                <button
                  type="button"
                  className={selectedButtonStyle(feeling_today==='sad')}
                  value={'sad'}
                  onClick={(e) => {
                    setFeeling(e.target.value);
                    dispatch(setFeelingToday([e.target.value]));
                  }}>
                  Sad
                </button>
                <button
                  type="button"
                  className={selectedLongButtonStyle(feeling_today==='angry')}
                  value={'angry'}
                  onClick={(e) => {
                    setFeeling(e.target.value);
                    dispatch(setFeelingToday([e.target.value]));
                  }}>
                  Angry
                </button>
                <button
                  type="button"
                  className={selectedButtonStyle(feeling_today==='irritable')}
                  value={'irritable'}
                  onClick={(e) => {
                    setFeeling(e.target.value);
                    dispatch(setFeelingToday([e.target.value]));
                  }}>
                  Irritable
                </button>
              </fieldset>
            </Question>
          ) : (
            <span />
          )}
          {type_of_feelings === 'positive' && feeling_today !== null ? (
            <Question question={'Why did you feel this way'}>
              <fieldset className="mt-3 mb-4">
                <button
                  type="button"
                  className={selectedLongButtonStyle(reason_for_feeling==='accomplished goals')}
                  value={'accomplished goals'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  Accomplished Goals
                </button>
                <button
                  type="button"
                  className={selectedLongButtonStyle(reason_for_feeling==='family acknowledged me')}
                  value={'family acknowledged me'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  Family Acknowledged me
                </button>
                <button
                  type="button"
                  className={selectedLongButtonStyle(reason_for_feeling==='did fun things')}
                  value={'did fun things'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  Did Fun things
                </button>
                <button
                  type="button"
                  className={selectedLongButtonStyle(reason_for_feeling==='engaged with others')}
                  value={'engaged with others'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  Engaged with others
                </button>
              </fieldset>
            </Question>
          ) : (
            <span />
          )}
          {type_of_feelings === 'negative' && feeling_today !== null ? (
            <Question question={'Why did you feel this way'}>
              <fieldset className="mt-3 mb-4">
                <button
                  type="button"
                  className={selectedLongButtonStyle(reason_for_feeling==='isolation')}
                  value={'isolation'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  Isolation
                </button>
                <button
                  type="button"
                  className={selectedLongButtonStyle(reason_for_feeling==='conflict')}
                  value={'conflict'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  Conflict
                </button>
                <button
                  type="button"
                  className={selectedLongButtonStyle(reason_for_feeling==='i have no friends')}
                  value={'i have no friends'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  I have no friends
                </button>
                <button
                  type="button"
                  className={selectedLongButtonStyle(reason_for_feeling==='engaged with others')}
                  value={'engaged with others'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  Others
                </button>
              </fieldset>
            </Question>
          ) : (
            <span />
          )}
          {reason_for_feeling !== null ? (
            <Link to="">
              <button type="submit" disabled={loading} className="finish-btn" onClick={handleSubmit}>
              {loading?<Spinner/>:"Finish"}
              </button>
            </Link>
          ) : (
            <span></span>
          )}
        </form>
      </Form>
    </ResilienceComponent>
  );
};

export default ResiliencePageThree;
