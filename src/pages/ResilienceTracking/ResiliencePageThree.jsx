import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import EndOfAssessmentModal from '../../components/form/EndOfAssessment';
import { ReactComponent as CheckedIcon } from '../../assets/svg/Form/EndOfAssessment/CheckedIcon.svg';
import CheckBox from '../../components/form/CheckBox';
import { useTranslation } from 'react-i18next';
import { TextField } from '@mui/material';

const ResiliencePageThree = () => {
  const { t } = useTranslation();
  const [type_of_feelings, setFeelingType] = useState();
  const [feeling_today, setFeelings] = useState([]);
  const [reason_for_feeling, setReasons] = useState([]);
  const [others, setOthers] = useState('');
  const [otherReasons, setOtherReasons] = useState([]);

  const [loading, setLoading] = useState(false);
  const [endOfAssessment, setEndOfAssessment] = useState(false);
  const [buttonStatement, setButtonStatement] = useState('Finish');

  const resilienceTrackingData = useSelector((state) => state.resilienceTracking);
  const dispatch = useDispatch();

  const positiveLabels = [
    'Happy',
    'Encouraged',
    'Joyful',
    'Cheerful',
    'Appreciated',
    'Confident',
    'Inspired',
    'Grateful'
  ];

  const negativeLabels = [
    'Sad',
    'Angry',
    'Irritable',
    'Worried',
    'Confused',
    'Impatient',
    'Envious',
    'Hopeless',
    'Lonely',
    'Discouraged'
  ];

  const reasonOptions = [
    'accomplished goals',
    'family acknowledged me',
    'did fun things',
    'engaged with others',
    'others'
  ];

  const negativeReasonOptions = [
    'unmet goals',
    'family neglected me',
    'did tedious things',
    'isolation',
    'conflict',
    'i have no friends',
    'others'
  ];

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      await dispatch(postResilienceFormData(resilienceTrackingData));
      setLoading(false);
      setEndOfAssessment(true);
    } catch (err) {
      setLoading(false);
      setEndOfAssessment(false);
      setButtonStatement('Try Again');
    }
  };

  const selectedButtonStyle = (selected) => {
    return selected
      ? 'button form-button-pill text-uppercase selectedPill'
      : 'button form-button-pill text-uppercase';
  };

  const handleCheckboxChange = (value, setState, state) => {
    state.includes(value)
      ? setState(state.filter((item) => item !== value))
      : setState((state) => [...state, value]);
  };

  const handleOtherSubmit = () => {
    if (others && !reason_for_feeling.includes(others)) {
      setOtherReasons([...otherReasons, others]);
      handleCheckboxChange(others, setReasons, reason_for_feeling);
      dispatch(setReasonForFeeling([...reason_for_feeling, others].join(',')));
      setOthers('');
    }
  };

  const handleRemoveOtherReason = (reason) => {
    setOtherReasons(otherReasons.filter((item) => item !== reason));
    setReasons(reason_for_feeling.filter((item) => item !== reason));
    dispatch(setReasonForFeeling(reason_for_feeling.filter((item) => item !== reason).join(',')));
  };

  return (
    <ResilienceComponent backroute={'/resilience-form/2'}>
      <Form style={{ maxHeight: 'none', height: '620px' }}>
        <form>
          <Question question={t('How did you feel today')}>
            <fieldset className="mt-3 mb-4" style={{ justifyContent: 'space-evenly' }}>
              <button
                type="button"
                className={selectedButtonStyle(type_of_feelings === 'positive')}
                value={'positive'}
                onClick={(e) => {
                  setFeelings([]);
                  setFeelingType(e.target.value);
                  dispatch(setTypeOfFeelings('positive'));
                  setReasons([]);
                }}>
                {t('Positive')}
              </button>
              <button
                type="button"
                className={selectedButtonStyle(type_of_feelings === 'negative')}
                value={'negative'}
                onClick={(e) => {
                  setFeelings([]);
                  setFeelingType(e.target.value);
                  dispatch(setTypeOfFeelings('negative'));
                  setReasons([]);
                }}>
                {t('Negative')}
              </button>
            </fieldset>
          </Question>
          {type_of_feelings === 'positive' ? (
            <Question question={t('Which emotions were felt')}>
              <div className="disclaimer">
                <span>{t('You can select upto six(6) feelings')}</span>
              </div>
              <fieldset className="mt-3 mb-4">
                <div className="ItemContainer">
                  {positiveLabels.map((label, key) => (
                    <CheckBox
                      key={key}
                      label={t(label)}
                      value={label}
                      checked={false}
                      onClick={(e) => {
                        handleCheckboxChange(e.target.value, setFeelings, feeling_today);
                        dispatch(setFeelingToday(feeling_today));
                      }}
                    />
                  ))}
                </div>
              </fieldset>
            </Question>
          ) : (
            <span />
          )}
          {type_of_feelings === 'negative' ? (
            <Question question={t('Which emotions were felt')}>
              <div className="disclaimer">
                <span>{t('You can select upto six(6) feelings')}</span>
              </div>
              <fieldset className="mt-3 mb-4">
                <div className="ItemContainer">
                  {negativeLabels.map((label, key) => (
                    <CheckBox
                      key={key}
                      label={t(label)}
                      value={label}
                      checked={false}
                      onClick={(e) => {
                        handleCheckboxChange(e.target.value, setFeelings, feeling_today);
                        dispatch(setFeelingToday(feeling_today));
                      }}
                    />
                  ))}
                </div>
              </fieldset>
            </Question>
          ) : (
            <span />
          )}
          {type_of_feelings === 'positive' && feeling_today.length !== 0 ? (
            <Question question={t('Why did you feel this way')}>
              <fieldset className="mt-3 mb-4">
                <div className="ItemContainer">
                  {reasonOptions.map((option, key) => (
                    <CheckBox
                      key={key}
                      label={t(option)}
                      value={option}
                      checked={false}
                      onClick={(e) => {
                        handleCheckboxChange(e.target.value, setReasons, reason_for_feeling);
                        dispatch(setReasonForFeeling(reason_for_feeling.join(',')));
                      }}
                    />
                  ))}
                </div>
                {reason_for_feeling.includes('others') && (
                  <>
                    <TextField
                      label="Why did you feel this way?"
                      variant="outlined"
                      value={others}
                      onChange={(e) => setOthers(e.target.value)}
                      fullWidth
                      multiline={true}
                      sx={{ marginLeft: '2px' }}
                    />
                    <button
                      style={{
                        marginTop: '20px',
                        borderRadius: '8px',
                        background: '#8C3E79',
                        color: '#fff',
                        boxShadow: '0.8px 2px 2px 0.8px #e4e4e4'
                      }}
                      className="button form-button-pill"
                      onClick={(e) => {
                        e.preventDefault();
                        handleOtherSubmit();
                      }}>
                      {t('Add')}
                    </button>
                  </>
                )}
              </fieldset>
              <div>
                {otherReasons.map((reason, index) => (
                  <button
                    key={index}
                    type="button"
                    className={selectedButtonStyle(true)}
                    value={reason}
                    onClick={() => handleRemoveOtherReason(reason)}>
                    {t(reason.charAt(0).toUpperCase() + reason.slice(1))}
                  </button>
                ))}
              </div>
            </Question>
          ) : (
            <span />
          )}
          {type_of_feelings === 'negative' && feeling_today.length !== 0 ? (
            <Question question={t('Why did you feel this way')}>
              <fieldset className="mt-3 mb-4">
                <div className="ItemContainer">
                  {negativeReasonOptions.map((option, key) => (
                    <CheckBox
                      key={key}
                      label={t(option)}
                      value={option}
                      checked={false}
                      onClick={(e) => {
                        handleCheckboxChange(e.target.value, setReasons, reason_for_feeling);
                        dispatch(setReasonForFeeling(reason_for_feeling.join(',')));
                      }}
                    />
                  ))}
                </div>
                {reason_for_feeling.includes('others') && (
                  <>
                    <TextField
                      label="Why did you feel this way?"
                      variant="outlined"
                      value={others}
                      onChange={(e) => setOthers(e.target.value)}
                      fullWidth
                      multiline={true}
                      sx={{ marginLeft: '2px' }}
                    />
                    <button
                      style={{
                        marginTop: '20px',
                        borderRadius: '8px',
                        background: '#8C3E79',
                        color: '#fff',
                        boxShadow: '0.8px 2px 2px 0.8px #e4e4e4'
                      }}
                      className="button form-button-pill"
                      onClick={(e) => {
                        e.preventDefault();
                        handleOtherSubmit();
                      }}>
                      {t('Add')}
                    </button>
                  </>
                )}
              </fieldset>
              <div>
                {otherReasons.map((reason, index) => (
                  <button
                    key={index}
                    type="button"
                    className={selectedButtonStyle(true)}
                    value={reason}
                    onClick={() => handleRemoveOtherReason(reason)}>
                    {t(reason.charAt(0).toUpperCase() + reason.slice(1))}
                  </button>
                ))}
              </div>
            </Question>
          ) : (
            <span />
          )}
          {reason_for_feeling.length > 0 ? (
            <button
              type="submit"
              disabled={loading}
              className="finish-btn"
              onClick={handleSubmit}
              style={{ marginBottom: '2rem' }}>
              {loading ? <Spinner /> : t(buttonStatement)}
            </button>
          ) : (
            <span></span>
          )}
          {endOfAssessment && (
            <EndOfAssessmentModal
              icon={<CheckedIcon />}
              title={t('Well Done!')}
              subText={t('Thank you for completing this assessment')}
              link={'/home'}
              linkText={t('home')}
              showModal={true}
            />
          )}
        </form>
      </Form>
    </ResilienceComponent>
  );
};

export default ResiliencePageThree;
