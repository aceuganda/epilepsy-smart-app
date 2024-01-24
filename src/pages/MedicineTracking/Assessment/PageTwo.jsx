import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MedicationComponent from '..';
import Form from '../../../components/form/Form';
import Question from '../../../components/form/Question';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSideEffects,
  setExperiencedSideEffects,
  postMedicationFormData
} from '../../../redux/Slices/MedicationTracking';
import Spinner from '../../../components/Spinner/Spinner';
import EndOfAssessmentModal from '../../../components/form/EndOfAssessment';
import { ReactComponent as CheckedIcon } from '../../../assets/svg/Form/EndOfAssessment/CheckedIcon.svg';
import { useTranslation } from 'react-i18next';

const MedicationAssessmentPageTwo = () => {
  const { t } = useTranslation();
  const [side_effects, setSideEffect] = useState(null);
  const [other_reason, setOtherReason] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const medicationTrackingData = useSelector((state) => state.medicationTracking);
  const [endOfAssessment, setEndOfAssessment] = useState(false);
  const [buttonStatement, setButtonStatement] = useState('Finish');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(postMedicationFormData(medicationTrackingData));
      setLoading(false);
      setEndOfAssessment(true);
    } catch (err) {
      setLoading(false);
      setEndOfAssessment(false);
      setButtonStatement('Try Again');
    }
  };
  const selectedButtonStyle = (selected) => {
    return selected ? 'button form-button-pill  selectedPill' : 'button form-button-pill';
  };
  return (
    <MedicationComponent backroute={'/medication/assessment/1'}>
      <Form>
        <form>
          <Question question={t('Did you experience any side effects')}>
            <fieldset className="mt-3 mb-4" style={{ justifyContent: 'space-evenly' }}>
              {medicationTrackingData.reason_missed_dose !== 'Side Effects' && (
                <button
                  type="button"
                  className="button form-button-pill"
                  value={'None'}
                  onClick={(e) => {
                    setSideEffect(e.target.value);
                    dispatch(setExperiencedSideEffects(false));
                    dispatch(setSideEffects(e.target.value));
                  }}>
                  {t('None')}
                </button>
              )}
              <button
                type="button"
                className="button form-button-pill"
                value={'Vomiting'}
                onClick={(e) => {
                  setSideEffect(e.target.value);
                  dispatch(setExperiencedSideEffects(true));
                  dispatch(setSideEffects(e.target.value));
                }}>
                {t('Vomiting')}
              </button>
              <button
                type="button"
                className="button form-button-lg"
                value={'Drowsiness'}
                onClick={(e) => {
                  setSideEffect(e.target.value);
                  dispatch(setExperiencedSideEffects(true));
                  dispatch(setSideEffects(e.target.value));
                }}>
                {t('Drowsiness')}
              </button>
              <button
                type="button"
                className="button form-button-pill"
                value={'Skin Rash'}
                onClick={(e) => {
                  setSideEffect(e.target.value);
                  dispatch(setExperiencedSideEffects(true));
                  dispatch(setSideEffects(e.target.value));
                }}>
                {t('Skin Rash')}
              </button>
              <button
                type="button"
                className="button form-button-pill"
                value={'Headache'}
                onClick={(e) => {
                  setSideEffect(e.target.value);
                  dispatch(setExperiencedSideEffects(true));
                  dispatch(setSideEffects(e.target.value));
                }}>
                {t('Headache')}
              </button>
              <button
                type="button"
                className="button form-button-pill"
                value={'Nausea'}
                onClick={(e) => {
                  setSideEffect(e.target.value);
                  dispatch(setExperiencedSideEffects(true));
                  dispatch(setSideEffects(e.target.value));
                }}>
                {t('Nausea')}
              </button>
              <button
                type="button"
                className="button form-button-lg"
                value={'Diarrhoea'}
                onClick={(e) => {
                  setSideEffect(e.target.value);
                  dispatch(setExperiencedSideEffects(true));
                  dispatch(setSideEffects(e.target.value));
                }}>
                {t('Diarrhoea')}
              </button>
              <button
                type="button"
                className="button form-button-lg"
                value={'Constipation'}
                onClick={(e) => {
                  setSideEffect(e.target.value);
                  dispatch(setExperiencedSideEffects(true));
                  dispatch(setSideEffects(e.target.value));
                }}>
                {t('Constipation')}
              </button>
              <button
                type="button"
                className={selectedButtonStyle(side_effects === 'Other')}
                value={'Other'}
                onClick={(e) => {
                  setSideEffect(e.target.value);
                  dispatch(setExperiencedSideEffects(true));
                  dispatch(setSideEffects(e.target.value));
                }}>
                {t('Other')}
              </button>
            </fieldset>
          </Question>
          {side_effects === 'Other' ? (
            <fieldset className="mt-3 mb-4">
              <TextField
                label="Type the side effect here"
                variant="outlined"
                onChange={(e) => {
                  setOtherReason(e.target.value);
                  dispatch(setExperiencedSideEffects(true));
                  dispatch(setSideEffects(e.target.value));
                }}
                multiline={true}
                sx={{ width: '90%', marginLeft: '18px' }}
              />
              <button
                style={{
                  position: 'absolute',
                  right: '20px',
                  marginTop: '20px',
                  borderRadius: '8px',
                  background: '#8C3E79',
                  color: '#fff',
                  boxShadow: '0.8px 2px 2px 0.8px #e4e4e4'
                }}
                type="submit"
                className="button form-button-pill"
                onClick={(e) => handleSubmit(e)}>
                {t('Done')}
              </button>
            </fieldset>
          ) : (
            <span></span>
          )}
          {side_effects !== null ? (
            <button onClick={handleSubmit} className="finish-btn" type="submit" disabled={loading}>
              {loading ? <Spinner /> : buttonStatement}
            </button>
          ) : (
            <span></span>
          )}
          {endOfAssessment && (
            <EndOfAssessmentModal
              icon={<CheckedIcon />}
              title={'Well Done!'}
              subText={'Thank you for completing this assessment.'}
              link={'/home'}
              linkText={'home'}
              showModal={true}
            />
          )}
        </form>
      </Form>
    </MedicationComponent>
  );
};

export default MedicationAssessmentPageTwo;
