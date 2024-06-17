import React, { useState, useEffect } from 'react';
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

const ResiliencePageThree = () => {
  const { t } = useTranslation();
  const [type_of_feelings, setFeelingType] = useState();
  const [feeling_today, setFeelings] = useState([]);
  const [reason_for_feeling, setReasons] = useState([]);

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
    'isolation',
    'conflict',
    'i have no friends',
    'other'
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

  // useEffect(() => {
  //   const reasonsString = reason_for_feeling.join(', ');
  //   dispatch(setReasons(reasonsString));
  // }, [reason_for_feeling]);

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
              </fieldset>
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
              style={{ bottom: '10px' }}>
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
