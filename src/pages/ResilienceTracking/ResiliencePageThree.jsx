import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ResilienceComponent from './index';
import Form from '../../components/form/Form';
import Question from '../../components/form/Question';

import {
  setTypeOfFeelings,
  setFeelingToday,
  setReasonForFeeling
} from '../../redux/Slices/ResilienceTracking';

const ResiliencePageThree = () => {
  const [type_of_feelings, setFeelingType] = useState(null);
  const [feeling_today, setFeeling] = useState(null);
  const [reason_for_feeling, setReason] = useState(null);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setTypeOfFeelings(type_of_feelings));
    dispatch(setFeelingToday(feeling_today));
    dispatch(setReasonForFeeling(reason_for_feeling));
  };

  //TODO Define handleSubmit function and get data from redux store
  
  useEffect(() => {}, []);

  return (
    <ResilienceComponent backroute={'/resilience-form/2'}>
      <Form>
        <form>
          <Question question={'How did you feel today?'}>
            <fieldset className="mt-3 mb-4">
              <button
                type="button"
                className="button form-button-pill text-uppercase"
                value={'Positive'}
                onClick={(e) => {
                  setFeelingType(e.target.value);
                }}>
                Negative
              </button>
              <button
                type="button"
                className="button form-button-pill text-uppercase"
                value={'Negative'}
                onClick={(e) => {
                  setFeelingType(e.target.value);
                }}>
                Positive
              </button>
            </fieldset>
          </Question>
          {type_of_feelings !== null ? (
            <Question question={'What was the feeling?'}>
              <fieldset className="mt-3 mb-4">
                <button
                  type="button"
                  className="button form-button-pill text-uppercase"
                  value={'Happy'}
                  onClick={(e) => {
                    setFeeling(e.target.value);
                  }}>
                  Happy
                </button>
                <button
                  type="button"
                  className="button form-button-pill text-uppercase"
                  value={'Sad'}
                  onClick={(e) => {
                    setFeeling(e.target.value);
                  }}>
                  Sad
                </button>
                <button
                  type="button"
                  className="button form-button-pill text-uppercase"
                  value={'Encouraged'}
                  onClick={(e) => {
                    setFeeling(e.target.value);
                  }}>
                  Encouraged
                </button>
              </fieldset>
            </Question>
          ) : null}
          {feeling_today !== null ? (
            <Question question={'Why did you feel this way?'}>
              <fieldset className="mt-3 mb-4">
                <button
                  type="button"
                  className="button form-button-lg text-uppercase"
                  value={'Accomplished Goals'}
                  onClick={(e) => {
                    setReason(e.target.value);
                  }}>
                  Accomplished Goals
                </button>
                <button
                  type="button"
                  className="button form-button-lg text-uppercase"
                  value={'Family Acknowledged me'}
                  onClick={(e) => {
                    setReason(e.target.value);
                  }}>
                  Family Acknowledged me
                </button>
                <button
                  type="button"
                  className="button form-button-lg text-uppercase"
                  value={'Did Fun things'}
                  onClick={(e) => {
                    setReason(e.target.value);
                  }}>
                  Did Fun things
                </button>
                <button
                  type="button"
                  className="button form-button-lg text-uppercase"
                  value={'Engaged with others'}
                  onClick={(e) => {
                    setReason(e.target.value);
                  }}>
                  Engaged with others
                </button>
              </fieldset>
            </Question>
          ) : null}
          {reason_for_feeling !== null ? (
            <Link to="/home">
              <button type="submit" className="finish-btn" onClick={handleClick}>
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
