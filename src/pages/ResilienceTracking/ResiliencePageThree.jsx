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

const ResiliencePageThree = () => {
  const [type_of_feelings, setFeelingType] = useState();
  const [feeling_today, setFeelings] = useState([]);
  const [reason_for_feeling, setReason] = useState(null);

  const [loading, setLoading] = useState(false);
  const [endOfAssessment, setEndOfAssessment] = useState(false);
  const [buttonStatement, setButtonStatement] = useState('Finish');

  const resilienceTrackingData = useSelector((state) => state.resilienceTracking);
  const dispatch = useDispatch();

  const positiveLabels = [
    'happy',
    'encouraged',
    'joyful',
    'cheerful',
    'appreciated',
    'confident',
    'inspired',
    'grateful'
  ];

  const negativeLabels = [
    'sad',
    'angry',
    'irritable',
    'worried',
    'confused',
    'impatient',
    'envious',
    'hopeless',
    'lonely',
    'discouraged'
  ];

  const handleSubmit = async (e) => {
    console.log(resilienceTrackingData);
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
  const selectedLongButtonStyle = (selected) => {
    return selected
      ? 'button selectedLongPill text-uppercase'
      : 'button form-button-lg text-uppercase';
  };

  const handleCheckboxChange = (value) => {
    feeling_today.includes(value)
      ? setFeelings(feeling_today.filter((item) => item !== value))
      : setFeelings((feeling_today) => [...feeling_today, value]);
  };
    console.log('Labels:', feeling_today);

  return (
    <ResilienceComponent backroute={'/resilience-form/2'}>
      <Form style={{ maxHeight: 'none', height: '620px' }}>
        <form>
          <Question question={'How did you feel today'}>
            <fieldset className="mt-3 mb-4" style={{ justifyContent: 'space-evenly' }}>
              <button
                type="button"
                className={selectedButtonStyle(type_of_feelings === 'positive')}
                value={'positive'}
                onClick={(e) => {
                  setFeelings([]);
                  setFeelingType(e.target.value);
                  dispatch(setTypeOfFeelings('positive'));
                }}>
                Positive
              </button>
              <button
                type="button"
                className={selectedButtonStyle(type_of_feelings === 'negative')}
                value={'negative'}
                onClick={(e) => {
                  setFeelings([]);
                  setFeelingType(e.target.value);
                  dispatch(setTypeOfFeelings('negative'));
                }}>
                Negative
              </button>
            </fieldset>
          </Question>
          {type_of_feelings === 'positive' ? (
            <Question question={'Which emotions were felt'}>
              <div className="disclaimer">
                <span>You can only select upto six(6) feelings</span>
              </div>
              <fieldset className="mt-3 mb-4">
                <div className="ItemContainer">
                  {positiveLabels.map((label, key) => (
                    <CheckBox
                      key={key}
                      label={label}
                      value={label}
                      checked={false}
                      onClick={(e) => {
                        handleCheckboxChange(e.target.value);
                        setTimeout(() => dispatch(setFeelingToday(feeling_today)), 1000);
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
            <Question question={'Which emotions were felt'}>
              <div className="disclaimer">
                <span>You can only select upto six(6) feelings</span>
              </div>
              <fieldset className="mt-3 mb-4">
                <div className="ItemContainer">
                  {negativeLabels.map((label, key) => (
                    <CheckBox
                      key={key}
                      label={label}
                      value={label}
                      checked={false}
                      onClick={(e) => {
                        handleCheckboxChange(e.target.value);
                        setTimeout(() => dispatch(setFeelingToday(feeling_today)), 1000);
                      }}
                    />
                  ))}
                </div>
              </fieldset>
            </Question>
          ) : (
            <span />
          )}
          {type_of_feelings === 'positive' && feeling_today !== [] ? (
            <Question question={'Why did you feel this way'}>
              <fieldset className="mt-3 mb-4">
                <button
                  type="button"
                  className={selectedLongButtonStyle(reason_for_feeling === 'accomplished goals')}
                  value={'accomplished goals'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  Accomplished Goals
                </button>
                <button
                  type="button"
                  className={selectedLongButtonStyle(
                    reason_for_feeling === 'family acknowledged me'
                  )}
                  value={'family acknowledged me'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  Family Acknowledged me
                </button>
                <button
                  type="button"
                  className={selectedLongButtonStyle(reason_for_feeling === 'did fun things')}
                  value={'did fun things'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  Did Fun things
                </button>
                <button
                  type="button"
                  className={selectedLongButtonStyle(reason_for_feeling === 'engaged with others')}
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
          {type_of_feelings === 'negative' && feeling_today !== [] ? (
            <Question question={'Why did you feel this way'}>
              <fieldset className="mt-3 mb-4">
                <button
                  type="button"
                  className={selectedLongButtonStyle(reason_for_feeling === 'isolation')}
                  value={'isolation'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  Isolation
                </button>
                <button
                  type="button"
                  className={selectedLongButtonStyle(reason_for_feeling === 'conflict')}
                  value={'conflict'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  Conflict
                </button>
                <button
                  type="button"
                  className={selectedLongButtonStyle(reason_for_feeling === 'i have no friends')}
                  value={'i have no friends'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  I have no friends
                </button>
                <button
                  type="button"
                  className={selectedLongButtonStyle(reason_for_feeling === 'engaged with others')}
                  value={'engaged with others'}
                  onClick={(e) => {
                    setReason(e.target.value);
                    dispatch(setReasonForFeeling(e.target.value));
                  }}>
                  Other
                </button>
              </fieldset>
            </Question>
          ) : (
            <span />
          )}
          {reason_for_feeling !== null ? (
            <button
              type="submit"
              disabled={loading}
              className="finish-btn"
              onClick={handleSubmit}
              style={{ bottom: '10px' }}>
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
    </ResilienceComponent>
  );
};

export default ResiliencePageThree;
