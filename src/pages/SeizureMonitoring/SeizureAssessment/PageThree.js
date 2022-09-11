import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SeizureComponent from '..';
import Form from '../../../components/form/Form';
import Question from '../../../components/form/Question';
import { postSeizureFormData, setSeizureImpact } from '../../../redux/Slices/SeizureTrackingSlice';

const PageThree = () => {
  const [seizure_impact, setFeel] = useState('');
  const dispatch = useDispatch();
  const seizureTrackingData = useSelector((state) => state.seizureTracking);

  const handleClick = () => {
    dispatch(setSeizureImpact(seizure_impact));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(seizureTrackingData);
    try {
      await dispatch(postSeizureFormData(seizureTrackingData));
    } catch (err) {
      console.log('Failed to post:', err);
    }
  };

  return (
    <SeizureComponent backroute={'/seizure-form/assessment/2'}>
      <Form>
        <form onSubmit={handleSubmit}>
          <Question question={'How did you feel after the seizure'}>
            <fieldset className="mt-3 mb-4">
              <button
                type="button"
                className="button form-button-lg text-uppercase"
                value={'sleepy'}
                onClick={(e) => {
                  setFeel(e.target.value);
                }}>
                Sleepy
              </button>
              <button
                type="button"
                className="button form-button-lg text-uppercase"
                value={'confused'}
                onClick={(e) => {
                  setFeel(e.target.value);
                }}>
                Confused
              </button>
              <button
                type="button"
                className="button form-button-lg text-uppercase"
                value={'body weakness'}
                onClick={(e) => {
                  setFeel(e.target.value);
                }}>
                Body Weakness
              </button>
              <button
                type="button"
                className="button form-button-lg text-uppercase"
                value={'restless'}
                onClick={(e) => {
                  setFeel(e.target.value);
                }}>
                Restless
              </button>
              <button
                type="button"
                className="button form-button-lg text-uppercase"
                value={'headache'}
                onClick={(e) => {
                  setFeel(e.target.value);
                }}>
                Headache
              </button>
            </fieldset>
          </Question>
          {seizure_impact !== '' ? (
            <Link to="/home">
              <button className="finish-btn" type="submit" onClick={handleClick}>
                Finish
              </button>
            </Link>
          ) : (
            <span></span>
          )}
        </form>
      </Form>
    </SeizureComponent>
  );
};

export default PageThree;
