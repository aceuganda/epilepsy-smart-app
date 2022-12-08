import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SeizureComponent from '..';
import PopButton from '../../../components/form/Buttons/PopButton';
import Form from '../../../components/form/Form';
import PopQuestion from '../../../components/form/PopQuestion';
import Question from '../../../components/form/Question';
import Pagination from '../../../components/pagination';
import {
  setSeizureAura,
  setSeizureExperiencedAura,
  setTrigger
} from '../../../redux/Slices/SeizureTrackingSlice';

const PageTwo = () => {
  const [experienced_aura, setAura] = useState(null);
  const [aura_kind_experienced, setAuraType] = useState('');
  const [seizure_trigger, setSeizureTrigger] = useState(null);
  const dispatch = useDispatch();

  const handleChange = () => {
    experienced_aura === 'yes' ? dispatch(setSeizureAura(true)) : dispatch(setSeizureAura(false));
    experienced_aura === 'no'
      ? dispatch(setSeizureExperiencedAura(''))
      : dispatch(setSeizureExperiencedAura(aura_kind_experienced));
    seizure_trigger === 'yes' ? dispatch(setTrigger(true)) : dispatch(setTrigger(false));
  };
  const selectedButtonStyle=(selected)=>{
    return selected?"button form-button-pill text-uppercase selectedPill":
    "button form-button-pill text-uppercase";
  }
  const selectedLongButtonStyle=(selected)=>{
    return selected?"button selectedLongPill":
    "button form-button-lg";
  }

  useEffect(() => {}, []);
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
                className={selectedButtonStyle(experienced_aura==='yes')}
                value={'yes'}
                onClick={(e) => {
                  setAura(e.target.value);
                }}>
                yes
              </button>
              <button
                type="button"
                className={selectedButtonStyle(experienced_aura==='no')}
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
                  className={selectedLongButtonStyle(aura_kind_experienced==='sweet smells')}
                  value={'sweet smells'}
                  onClick={(e) => {
                    setAuraType(e.target.value);
                  }}>
                  Sweet Smells
                </button>
                <button
                  type="button"
                  className={selectedLongButtonStyle(aura_kind_experienced==='horrible smells')}
                  value={'horrible smells'}
                  onClick={(e) => {
                    setAuraType(e.target.value);
                  }}>
                  Horrible Smells
                </button>
                <div onClick={() => setAuraType('deja-vu')}>
                  <PopButton
                    popTitle={'Deja-vu'}
                    popDescription={
                      'The sensation of being in a familiar place or experiencing a very familiar situation.'
                    }
                  />
                </div>
                <div onClick={() => setAuraType('jamais-vu')}>
                  <PopButton
                    popTitle={'Jamais-vu'}
                    popDescription={
                      'An experience of being unfamiliar with a person or place or situation that is actually very familiar.'
                    }
                  />
                </div>
                <button
                  type="button"
                  className={selectedLongButtonStyle(aura_kind_experienced==='tingling sensation')}
                  value={'tingling sensation'}
                  onClick={(e) => {
                    setAuraType(e.target.value);
                  }}>
                  Tingling Sensation
                </button>
                <button
                  type="button"
                  className={selectedLongButtonStyle(aura_kind_experienced==='flashing lights')}
                  value={'flashing lights'}
                  onClick={(e) => {
                    setAuraType(e.target.value);
                  }}>
                  Flashing Lights
                </button>
                <button
                  type="button"
                  className={selectedLongButtonStyle(aura_kind_experienced==='crawling insects')}
                  value={'crawling insects'}
                  onClick={(e) => {
                    setAuraType(e.target.value);
                  }}>
                  Sensation of crawling insects
                </button>
                <button
                  type="button"
                  className={selectedLongButtonStyle(aura_kind_experienced==='seeing things')}
                  value={'seeing things'}
                  onClick={(e) => {
                    setAuraType(e.target.value);
                  }}>
                  Seeing animals or people
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
                  className={selectedButtonStyle(seizure_trigger==='yes')}
                  value={'yes'}
                  onClick={(e) => {
                    setSeizureTrigger(e.target.value);
                  }}>
                  yes
                </button>
                <button
                  type="button"
                  className={selectedButtonStyle(seizure_trigger==='no')}
                  value={'no'}
                  onClick={(e) => {
                    setSeizureTrigger(e.target.value);
                  }}>
                  no
                </button>
              </fieldset>
            </Question>
          ) : (
            <span></span>
          )}
          {seizure_trigger !== null ? (
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
