import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ResilienceComponent from './index';
import Form from '../../components/form/Form';
import Question from '../../components/form/Question';

import {
  setTypeOfFeelings,
  setFeelingToday,
  setReasonForFeeling,
  postResilienceFormData
} from '../../redux/Slices/ResilienceTracking';

const ResiliencePageThree = () => {
  const [type_of_feelings, setFeelingType] = useState(null);
  const [feeling_today, setFeeling] = useState({});
  const [reason_for_feeling, setReason] = useState(null);
  const resilienceTrackingData = useSelector((state) => state.resilienceTracking);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    console.log(resilienceTrackingData);
    try {
      await dispatch(postResilienceFormData(resilienceTrackingData));
    } catch (err) {
      console.log('Failed to post:', err);
    }
  };

  //TODO Define handleSubmit function and get data from redux store

  useEffect(() => {}, []);

  return (
    <ResilienceComponent backroute={'/resilience-form/2'}>
      <Form>
        <form>
          <Question question={'How did you feel today'}>
            <fieldset className="mt-3 mb-4" style={{ justifyContent: 'space-evenly' }}>
              <button
                type="button"
                className="button form-button-pill text-capitalize"
                value={'positive'}
                onClick={(e) => {
                  setFeelingType(e.target.value);
                  dispatch(setTypeOfFeelings(e.target.value));
                }}>
                Positive
              </button>
              <button
                type="button"
                className="button form-button-pill text-capitalize"
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
                  className="button form-button-pill text-uppercase"
                  value={'happy'}
                  onClick={(e) => {
                    setFeeling(e.target.value);
                    dispatch(setFeelingToday([e.target.value]));
                  }}>
                  Happy
                </button>
                <button
                  type="button"
                  className="button form-button-lg text-uppercase"
                  value={'encouraged'}
                  onClick={(e) => {
                    setFeeling(e.target.value);
                    dispatch(setFeelingToday([e.target.value]));
                  }}>
                  Encouraged
                </button>
                <button
                  type="button"
                  className="button form-button-pill text-uppercase"
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
                  className="button form-button-pill text-uppercase"
                  value={'sad'}
                  onClick={(e) => {
                    setFeeling(e.target.value);
                    dispatch(setFeelingToday([e.target.value]));
                  }}>
                  Sad
                </button>
                <button
                  type="button"
                  className="button form-button-lg text-uppercase"
                  value={'angry'}
                  onClick={(e) => {
                    setFeeling(e.target.value);
                    dispatch(setFeelingToday([e.target.value]));
                  }}>
                  Angry
                </button>
                <button
                  type="button"
                  className="button form-button-pill text-uppercase"
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
                  className="button form-button-lg text-uppercase"
                  value={'accomplished goals'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  Accomplished Goals
                </button>
                <button
                  type="button"
                  className="button form-button-lg text-uppercase"
                  value={'family acknowledged me'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  Family Acknowledged me
                </button>
                <button
                  type="button"
                  className="button form-button-lg text-uppercase"
                  value={'did fun things'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  Did Fun things
                </button>
                <button
                  type="button"
                  className="button form-button-lg text-uppercase"
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
                  className="button form-button-lg text-uppercase"
                  value={'isolation'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  Isolation
                </button>
                <button
                  type="button"
                  className="button form-button-lg text-uppercase"
                  value={'conflict'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  Conflict
                </button>
                <button
                  type="button"
                  className="button form-button-lg text-uppercase"
                  value={'i have no friends'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  I have no friends
                </button>
                <button
                  type="button"
                  className="button form-button-lg text-uppercase"
                  value={'engaged with others '}
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
              <button type="submit" className="finish-btn" onClick={handleSubmit}>
                Finish
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
