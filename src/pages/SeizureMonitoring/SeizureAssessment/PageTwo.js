import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SeizureComponent from '..';
import Form from '../../../components/form/Form';
import PopQuestion from '../../../components/form/PopQuestion';
import Question from '../../../components/form/Question';
import Pagination from '../../../components/pagination';
import { updateSeizureAssessment } from '../../../data/reduxStore/Seizure/operations';
import { getUpdatedSeizureAssessmentData } from '../../../data/reduxStore/Seizure/selector';

const PageTwo = () => {
  const [experienced_aura, setAura] = useState('');
  const [aura_kind_experienced, setAuraType] = useState('');
  const [seizure_trigger, setTrigger] = useState('');
  const dispatch = useDispatch();
  const pageOneData = getUpdatedSeizureAssessmentData();

  const handleChange = () => {
    console.log('From page one:', pageOneData);
    const data = { experienced_aura, aura_kind_experienced, seizure_trigger };
    dispatch(updateSeizureAssessment(pageOneData, data));
  };

  useEffect(() => {}, [experienced_aura]);
  return (
    <SeizureComponent backroute={'/seizure-form/assessment/1'}>
      <Form>
        <form>
          <PopQuestion
            question={'Before the seizure, did you have an '}
            popTitle={'Aura'}
            popDescription={
              ' An aura is unusual feeling, experience, or sensation that signals an upcoming seizure'
            }>
            <fieldset className="mt-3 mb-4">
              <button
                type="button"
                className="button form-button-pill text-uppercase"
                value={'yes'}
                onClick={(e) => {
                  setAura(e.target.value);
                }}>
                yes
              </button>
              <button
                type="button"
                className="button form-button-pill text-uppercase"
                value={'no'}
                onClick={(e) => {
                  setAura(e.target.value);
                }}>
                no
              </button>
            </fieldset>
          </PopQuestion>
          {experienced_aura === 'yes' ? (
            <Question question={'What kind of aura was it'}>
              <fieldset className="mt-3 mb-4">
                <button
                  type="button"
                  className="button form-button-lg"
                  value={'sweet smells'}
                  onClick={(e) => {
                    setAuraType(e.target.value);
                  }}>
                  Sweet Smells
                </button>
                <button
                  type="button"
                  className="button form-button-lg"
                  value={'horrible smells'}
                  onClick={(e) => {
                    setAuraType(e.target.value);
                  }}>
                  Horrible Smells
                </button>
                <button
                  type="button"
                  className="button form-button-lg"
                  value={'tingling'}
                  onClick={(e) => {
                    setAuraType(e.target.value);
                  }}>
                  Tingling Sensation
                </button>
                <button
                  type="button"
                  className="button form-button-lg"
                  value={'crawling insects'}
                  onClick={(e) => {
                    setAuraType(e.target.value);
                  }}>
                  Sensation of crawling insects
                </button>
                <button
                  type="button"
                  className="button form-button-lg"
                  value={'flashing lights'}
                  onClick={(e) => {
                    setAuraType(e.target.value);
                  }}>
                  Flashing Lights
                </button>
                <button
                  type="button"
                  className="button form-button-lg"
                  value={'seeing things'}
                  onClick={(e) => {
                    setAuraType(e.target.value);
                  }}>
                  Seeing animals or people
                </button>
                <button
                  type="button"
                  className="button form-button-lg"
                  value={'deja-vu'}
                  onClick={(e) => {
                    setAuraType(e.target.value);
                  }}>
                  Deja-Vu
                </button>
                <button
                  type="button"
                  className="button form-button-lg"
                  value={'jamais-vu'}
                  onClick={(e) => {
                    setAuraType(e.target.value);
                  }}>
                  Jamais-Vu
                </button>
              </fieldset>
            </Question>
          ) : (
            <span></span>
          )}
          {aura_kind_experienced !== '' || experienced_aura === 'no' ? (
            <Question question={'Was there a trigger for your seizure'}>
              <fieldset className="mt-3 mb-4" style={{ justifyContent: 'space-evenly' }}>
                <button
                  type="button"
                  className="button form-button-pill text-uppercase"
                  value={'yes'}
                  onClick={(e) => {
                    setTrigger(e.target.value);
                  }}>
                  yes
                </button>
                <button
                  type="button"
                  className="button form-button-pill text-uppercase"
                  value={'no'}
                  onClick={(e) => {
                    setTrigger(e.target.value);
                  }}>
                  no
                </button>
              </fieldset>
            </Question>
          ) : (
            <span></span>
          )}
          {seizure_trigger !== '' ? (
            <Pagination
              page_link={'/seizure-form/assessment/3'}
              total_number={3}
              page_number={2}
              button={true}
              onClick={handleChange}
            />
          ) : (
            <Pagination page_link={''} total_number={3} page_number={2} button={false} />
          )}
        </form>
      </Form>
    </SeizureComponent>
  );
};

export default PageTwo;
