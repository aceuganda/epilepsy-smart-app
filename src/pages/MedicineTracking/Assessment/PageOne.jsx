import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MedicationComponent from '..';
import Form from '../../../components/form/Form';
import Question from '../../../components/form/Question';
import Pagination from '../../../components/pagination';

const MedicationAssessmentPageOne = () => {
  const [medicine_doses, setMedicineDoses] = useState(null);
  const [some_doses, setSomeDoses] = useState(null);
  const [displayNone, setDisplayNone] = useState(false);

  const setDisplayToNone = () => {
    setDisplayNone(!displayNone);
  };
  const selectedButtonStyle=(selected)=>{
    return selected? "button selectedLongPill":
    "button form-button-lg";
  }
  return (
    <MedicationComponent backroute={'/medication/'}>
      <Form>
        <form>
          <Question question={'Did you take all your doses today'}>
            <fieldset className="mt-3 mb-4">
              <button
                type="button"
                className={selectedButtonStyle(medicine_doses==='all')}
                value={'all'}
                onClick={(e) => {
                  setMedicineDoses(e.target.value);
                }}>
                All doses
              </button>
              <button
                type="button"
                className={selectedButtonStyle(medicine_doses==='some')}
                value={'some'}
                onClick={(e) => {
                  setMedicineDoses(e.target.value);
                }}>
                Some doses
              </button>
              <button
                type="button"
                className={selectedButtonStyle(medicine_doses==='none')}
                value={'none'}
                onClick={(e) => {
                  setMedicineDoses(e.target.value);
                }}>
                No doses
              </button>
            </fieldset>
          </Question>
          {medicine_doses === 'some' || medicine_doses === 'none' ? (
            <Question question={'What was the reason for missing'}>
              <fieldset className="mt-3 mb-4">
                <button
                  type="button"
                  className={some_doses==='I forgot to take the doses' ?
                  "button selectedFillPill":
                  "button form-button-full"}
                  value={'I forgot to take the doses'}
                  onClick={(e) => {
                    setSomeDoses(e.target.value);
                  }}>
                  I forgot to take the Doses
                </button>
                <button
                  type="button"
                  className={some_doses==='I forgot to refill the doses' ?
                  "button selectedFillPill":
                  "button form-button-full"}
                  value={'I forgot to refill the doses'}
                  onClick={(e) => {
                    setSomeDoses(e.target.value);
                  }}>
                  I forgot to refill the Doses
                </button>
                <button
                  type="button"
                  className={some_doses==='I didn’t have the funds to refill the Doses' ?
                  "button selectedFillPill":
                  "button form-button-full"}
                  value={'I didn’t have the funds to refill the Doses'}
                  onClick={(e) => {
                    setSomeDoses(e.target.value);
                  }}>
                  I didn’t have the funds to refill the Doses
                </button>
                <button
                  type="button"
                  className={some_doses==='I didn’t have the medicine with me' ?
                  "button selectedFillPill":
                  "button form-button-full"}
                  value={'I didn’t have the medicine with me'}
                  onClick={(e) => {
                    setSomeDoses(e.target.value);
                  }}>
                  I didn’t have the medicine with me
                </button>
                <button
                  type="button"
                  className={some_doses==='I was told not to take any medicine' ?
                  "button selectedFillPill":
                  "button form-button-full"}
                  value={'I was told not to take any medicine'}
                  onClick={(e) => {
                    setSomeDoses(e.target.value);
                  }}>
                  I was told not to take any medicine
                </button>
                <button
                  type="button"
                  className={some_doses==='I was too sick' ?
                  "button selectedFillPill":
                  "button form-button-full"}
                  value={'I was too sick'}
                  onClick={(e) => {
                    setSomeDoses(e.target.value);
                  }}>
                  I was too sick
                </button>
                <button
                  type="button"
                  className={some_doses==='Side Effects' ?
                  "button selectedFillPill":
                  "button form-button-full"}
                  value={'Side Effects'}
                  onClick={(e) => {
                    setSomeDoses(e.target.value);
                  }}>
                  Side Effects
                </button>
              </fieldset>
            </Question>
          ) : (
            <span></span>
          )}
          {some_doses !== null ? (
            <Pagination
              page_link={'/medication/assessment/2'}
              total_number={2}
              page_number={1}
              button={true}
            />
          ) : (
            <span></span>
          )}
          {medicine_doses === 'all' ? (
            <Link to="/home">
              <button className="finish-btn" type="submit">
                Finish
              </button>
            </Link>
          ) : (
            <span></span>
          )}
        </form>
      </Form>
    </MedicationComponent>
  );
};

export default MedicationAssessmentPageOne;
