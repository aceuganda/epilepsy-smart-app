import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import SeizureComponent from '..';
import Form from '../../../components/form/Form';
import Question from '../../../components/form/Question';
import Pagination from '../../../components/pagination';
import { updateSeizureAssessment } from '../../../data/reduxStore/Seizure/operations';

const PageOne = () => {
  const [seizure_severity, setSeverity] = useState(null);
  const [seizure_duration, setDuration] = useState(null);
  const [seizure_time_of_day, setTime] = useState(null);
  const [lost_awareness, setAwareness] = useState(null);
  const dispatch = useDispatch();

  const handleChange = () => {
    const data = { seizure_severity, seizure_duration, seizure_time_of_day, lost_awareness };
    dispatch(updateSeizureAssessment(data));
  };

  useEffect(() => {}, []);

  return (
    <SeizureComponent backroute={'/seizure-form/'}>
      <Form>
        <form>
          <Question question={'How severe was it'}>
            <fieldset className="mt-3 mb-4">
              <button
                type="button"
                className="button form-button-pill text-uppercase"
                value={'mild'}
                onClick={(e) => {
                  setSeverity(e.target.value);
                }}>
                mild
              </button>
              <button
                type="button"
                className="button form-button-pill text-uppercase"
                value={'moderate'}
                onClick={(e) => {
                  setSeverity(e.target.value);
                }}>
                moderate
              </button>
              <button
                type="button"
                className="button form-button-pill text-uppercase"
                value={'severe'}
                onClick={(e) => {
                  setSeverity(e.target.value);
                }}>
                severe
              </button>
            </fieldset>
          </Question>
          {seizure_severity !== null ? (
            <Question question={'How long did it last'}>
              <fieldset className="mt-3 mb-4">
                <button
                  type="button"
                  className="button form-button-pill text-uppercase"
                  value={''}
                  onClick={(e) => {
                    setDuration(e.target.value);
                  }}>
                  minutes
                </button>
                <button
                  type="button"
                  className="button form-button-pill text-uppercase"
                  value={''}
                  onClick={(e) => {
                    setDuration(e.target.value);
                  }}>
                  seconds
                </button>
                <button
                  type="button"
                  className="button form-button-pill text-uppercase"
                  value={null}
                  onClick={(e) => {
                    setDuration(e.target.value);
                  }}>
                  unknown
                </button>
              </fieldset>
            </Question>
          ) : (
            <span></span>
          )}
          {seizure_duration !== null ? (
            <Question question={'What time of day did it occur'}>
              <fieldset className="mt-3 mb-4">
                <button
                  type="button"
                  className="button form-button-pill text-uppercase"
                  value={'morning'}
                  onClick={(e) => {
                    setTime(e.target.value);
                  }}>
                  morning
                </button>
                <button
                  type="button"
                  className="button form-button-pill text-uppercase"
                  value={'afternoon'}
                  onClick={(e) => {
                    setTime(e.target.value);
                  }}>
                  afternoon
                </button>
                <button
                  type="button"
                  className="button form-button-pill text-uppercase"
                  value={'evening'}
                  onClick={(e) => {
                    setTime(e.target.value);
                  }}>
                  evening
                </button>
              </fieldset>
            </Question>
          ) : (
            <span></span>
          )}
          {seizure_time_of_day !== null ? (
            <Question question={'Did you lose awareness'}>
              <fieldset className="mt-3 mb-4" style={{ justifyContent: 'space-evenly' }}>
                <button
                  type="button"
                  className="button form-button-pill text-uppercase"
                  value={'yes'}
                  onClick={(e) => {
                    setAwareness(e.target.value);
                  }}>
                  yes
                </button>
                <button
                  type="button"
                  className="button form-button-pill text-uppercase"
                  value={'no'}
                  onClick={(e) => {
                    setAwareness(e.target.value);
                  }}>
                  no
                </button>
              </fieldset>
            </Question>
          ) : (
            <span></span>
          )}
        </form>
        {lost_awareness !== null ? (
          <Pagination
            page_number={1}
            total_number={3}
            page_link={'/seizure-form/assessment/2'}
            button={true}
            onClick={handleChange}
          />
        ) : (
          <Pagination page_number={1} total_number={3} page_link={''} button={false} />
        )}
      </Form>
    </SeizureComponent>
  );
};

export default connect()(PageOne);
