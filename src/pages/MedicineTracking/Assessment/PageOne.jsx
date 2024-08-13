import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MedicationComponent from '..';
import Form from '../../../components/form/Form';
import Question from '../../../components/form/Question';
import Pagination from '../../../components/pagination';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTookMedicine,
  setReasonForMissingDose,
  postMedicationFormData
} from '../../../redux/Slices/MedicationTracking';
import Spinner from '../../../components/Spinner/Spinner';
import { useTranslation } from 'react-i18next';
import  useFirebaseScreenTracking  from '../../../hooks/screenLogger';

const MedicationAssessmentPageOne = () => {
  useFirebaseScreenTracking('MedicineTrackingPage1');
  const { t } = useTranslation();
  const [medicine_doses, setMedicineDoses] = useState(null);
  const [some_doses, setSomeDoses] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const medicationTrackingData = useSelector((state) => state.medicationTracking);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(postMedicationFormData(medicationTrackingData));
      setLoading(false);
      //home
      navigate('/home');
    } catch (err) {
      setLoading(false);
      alert('Failed to post data');
    }
  };

  const selectedButtonStyle = (selected) => {
    return selected ? 'button selectedLongPill' : 'button form-button-lg';
  };

  return (
    <MedicationComponent backroute={'/medication/assessment/0'}>
      <Form>
        <form>
          <Question question={t('Did you take all your doses today')}>
            <fieldset className="mt-3 mb-4">
              <button
                type="button"
                className={selectedButtonStyle(medicine_doses === 'all')}
                value={'all doses'}
                onClick={(e) => {
                  setMedicineDoses(e.target.value);
                  dispatch(setTookMedicine(e.target.value));
                }}>
                {t('All doses')}
              </button>
              <button
                type="button"
                className={selectedButtonStyle(medicine_doses === 'some')}
                value={'some'}
                onClick={(e) => {
                  setMedicineDoses(e.target.value);
                  dispatch(setTookMedicine(e.target.value));
                }}>
                {t('Some doses')}
              </button>
              <button
                type="button"
                className={selectedButtonStyle(medicine_doses === 'none')}
                value={'none'}
                onClick={(e) => {
                  setMedicineDoses(e.target.value);
                  dispatch(setTookMedicine(e.target.value));
                }}>
                {t('No doses')}
              </button>
            </fieldset>
          </Question>
          {medicine_doses === 'some' || medicine_doses === 'none' ? (
            <Question question={t('What was the reason for missing')}>
              <fieldset className="mt-3 mb-4">
                <button
                  type="button"
                  className={
                    some_doses === 'I forgot to take the doses'
                      ? 'button selectedFillPill'
                      : 'button form-button-full'
                  }
                  value={'I forgot to take the doses'}
                  onClick={(e) => {
                    setSomeDoses(e.target.value);
                    dispatch(setReasonForMissingDose(e.target.value));
                  }}>
                  {t('I forgot to take the Doses')}
                </button>
                <button
                  type="button"
                  className={
                    some_doses === 'I forgot to refill the doses'
                      ? 'button selectedFillPill'
                      : 'button form-button-full'
                  }
                  value={'I forgot to refill the doses'}
                  onClick={(e) => {
                    setSomeDoses(e.target.value);
                    dispatch(setReasonForMissingDose(e.target.value));
                  }}>
                  {t('I forgot to refill the Doses')}
                </button>
                <button
                  type="button"
                  className={
                    some_doses === 'I didn’t have the funds to refill the Doses'
                      ? 'button selectedFillPill'
                      : 'button form-button-full'
                  }
                  value={'I didn’t have the funds to refill the Doses'}
                  onClick={(e) => {
                    setSomeDoses(e.target.value);
                    dispatch(setReasonForMissingDose(e.target.value));
                  }}>
                  {t('I didn’t have the funds to refill the Doses')}
                </button>
                <button
                  type="button"
                  className={
                    some_doses === 'I didn’t have the medicine with me'
                      ? 'button selectedFillPill'
                      : 'button form-button-full'
                  }
                  value={'I didn’t have the medicine with me'}
                  onClick={(e) => {
                    setSomeDoses(e.target.value);
                    dispatch(setReasonForMissingDose(e.target.value));
                  }}>
                  {t('I didn’t have the medicine with me')}
                </button>
                <button
                  type="button"
                  className={
                    some_doses === 'I was told not to take any medicine'
                      ? 'button selectedFillPill'
                      : 'button form-button-full'
                  }
                  value={'I was told not to take any medicine'}
                  onClick={(e) => {
                    setSomeDoses(e.target.value);
                    dispatch(setReasonForMissingDose(e.target.value));
                  }}>
                  {t('I was told not to take any medicine')}
                </button>
                <button
                  type="button"
                  className={
                    some_doses === 'I was too sick'
                      ? 'button selectedFillPill'
                      : 'button form-button-full'
                  }
                  value={'I was too sick'}
                  onClick={(e) => {
                    setSomeDoses(e.target.value);
                    dispatch(setReasonForMissingDose(e.target.value));
                  }}>
                  {t('I was too sick')}
                </button>
                <button
                  type="button"
                  className={
                    some_doses === 'Side Effects'
                      ? 'button selectedFillPill'
                      : 'button form-button-full'
                  }
                  value={'Side Effects'}
                  onClick={(e) => {
                    setSomeDoses(e.target.value);
                    dispatch(setReasonForMissingDose(e.target.value));
                  }}>
                  {t('Side Effects')}
                </button>
              </fieldset>
            </Question>
          ) : (
            <span></span>
          )}
          {some_doses !== null ? (
            <Pagination
              page_link={'/medication/assessment/2'}
              total_number={3}
              page_number={2}
              button={true}
            />
          ) : (
            <span></span>
          )}
          {medicine_doses === 'all doses' ? (
            <button onClick={handleSubmit} className="finish-btn" type="submit">
              {loading ? <Spinner /> : t('Finish')}
            </button>
          ) : (
            <span></span>
          )}
        </form>
      </Form>
    </MedicationComponent>
  );
};

export default MedicationAssessmentPageOne;
