import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SeizureComponent from '..';
import Form from '../../../components/form/Form';
import Question from '../../../components/form/Question';
import Pagination from '../../../components/pagination';
import TimePicker from '../../../components/form/TimePicker';
import {
  setLostAwareness,
  setSeizureDuration,
  setSeizureSeverity,
  setSeizureTimeOfDay,
  setSeizureID,
  setStartSite
} from '../../../redux/Slices/SeizureTrackingSlice';

import { ReactComponent as MorningIcon } from '../../../assets/svg/Seizure/Morning.svg';
import { ReactComponent as AfternoonIcon } from '../../../assets/svg/Seizure/afternon.svg';
import { ReactComponent as NightIcon } from '../../../assets/svg/Seizure/night.svg';
import { useTranslation } from 'react-i18next';
import { TextField } from '@mui/material';

const PageOne = () => {
  const { t } = useTranslation();
  const [seizure_severity, setSeverity] = useState('');
  const [seizure_duration, setDuration] = useState('');
  const [seizure_time_of_day, setTime] = useState('');
  const [secondsValue, setSecondsValue] = useState('0');
  const [minutesValue, setMinutesValue] = useState('0');
  const [lost_awareness, setAwareness] = useState(null);
  const [seizure_start, setSeizureStart] = useState('');
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')).data.id
    : null;
  const handleChange = () => {
    if (seizure_duration !== 'unknown' && (minutesValue !== '0' || secondsValue !== '0')) {
      dispatch(setSeizureDuration(String(Number(minutesValue) * 60 + Number(secondsValue))));
    } else {
      dispatch(setSeizureDuration(seizure_duration));
    }
    dispatch(setSeizureSeverity(seizure_severity));
    dispatch(setSeizureTimeOfDay(seizure_time_of_day));
    dispatch(setSeizureID(userId));
    dispatch(setStartSite(seizure_start));
    lost_awareness === 'yes' ? dispatch(setLostAwareness(true)) : dispatch(setLostAwareness(false));
  };
  useEffect(() => {}, []);

  const handleMinutesChange = (value) => {
    setMinutesValue(value);
  };
  const handleSecondsChange = (value) => {
    setSecondsValue(value);
  };

  const selectedButtonStyle = (selected) => {
    return selected
      ? 'button form-button-pill text-uppercase selectedPill'
      : 'button form-button-pill text-uppercase';
  };

  return (
    <SeizureComponent backroute={'/seizure-form/'}>
      <Form>
        <form>
          <Question question={t('How severe was it')}>
            <fieldset className="mt-3 mb-4">
              <button
                type="button"
                className={selectedButtonStyle(seizure_severity === 'mild')}
                value={'mild'}
                onClick={(e) => {
                  setSeverity(e.target.value);
                }}>
                {t('mild')}
              </button>
              <button
                type="button"
                className={selectedButtonStyle(seizure_severity === 'moderate')}
                value={'moderate'}
                onClick={(e) => {
                  setSeverity(e.target.value);
                }}>
                {t('moderate')}
              </button>
              <button
                type="button"
                className={selectedButtonStyle(seizure_severity === 'severe')}
                value={'severe'}
                onClick={(e) => {
                  setSeverity(e.target.value);
                }}>
                {t('severe')}
              </button>
            </fieldset>
          </Question>
          {seizure_severity !== '' ? (
            <Question question={t('How long did it last')}>
              <div className="timefieldset mt-3 mb-4">
                <TimePicker
                  onChangeMinutesCallBack={handleMinutesChange}
                  onChangeSecondsCallBack={handleSecondsChange}
                  fontSize={12}
                />
                <button
                  type="button"
                  className={
                    seizure_duration === 'unknown'
                      ? 'button form-button-pill-no-margin text-uppercase selectedPill'
                      : 'button form-button-pill-no-margin text-uppercase'
                  }
                  value={'unknown'}
                  onClick={(e) => {
                    setDuration(e.target.value);
                  }}>
                  {t('unknown')}
                </button>
              </div>
            </Question>
          ) : (
            <span></span>
          )}
          {seizure_duration !== '' || minutesValue !== '0' || secondsValue !== '0' ? (
            <Question question={t('What time of the day did it occur')}>
              <fieldset className="mt-3 mb-4">
                <div className="flex-column-center">
                  <MorningIcon />
                  <button
                    style={{ marginTop: '12px' }}
                    type="button"
                    className={selectedButtonStyle(seizure_time_of_day === 'morning')}
                    value={'morning'}
                    onClick={(e) => {
                      setTime(e.target.value);
                    }}>
                    {t('morning')}
                  </button>
                </div>
                <div className="flex-column-center">
                  <AfternoonIcon />
                  <button
                    style={{ marginTop: '12px' }}
                    type="button"
                    className={selectedButtonStyle(seizure_time_of_day === 'afternoon')}
                    value={'afternoon'}
                    onClick={(e) => {
                      setTime(e.target.value);
                    }}>
                    {t('afternoon')}
                  </button>
                </div>
                <div className="flex-column-center">
                  <NightIcon />
                  <button
                    style={{ marginTop: '12px' }}
                    type="button"
                    className={selectedButtonStyle(seizure_time_of_day === 'evening')}
                    value={'evening'}
                    onClick={(e) => {
                      setTime(e.target.value);
                    }}>
                    {t('evening')}
                  </button>
                </div>
              </fieldset>
            </Question>
          ) : (
            <span></span>
          )}
          {seizure_time_of_day !== '' ? (
            <Question question={t('Did you lose awareness')}>
              <fieldset className="mt-3 mb-4" style={{ justifyContent: 'space-evenly' }}>
                <button
                  type="button"
                  className={selectedButtonStyle(lost_awareness === 'yes')}
                  value={'yes'}
                  onClick={(e) => {
                    setAwareness(e.target.value);
                  }}>
                  {t('yes')}
                </button>
                <button
                  type="button"
                  className={selectedButtonStyle(lost_awareness === 'no')}
                  value={'no'}
                  onClick={(e) => {
                    setAwareness(e.target.value);
                  }}>
                  {t('no')}
                </button>
              </fieldset>
            </Question>
          ) : (
            <span></span>
          )}
          {lost_awareness !== null ? (
            <Question question={t('Where did your seizure START from')}>
              <fieldset className="mt-3 mb-4" style={{ justifyContent: 'space-evenly' }}>
                <button
                  type="button"
                  className={selectedButtonStyle(seizure_start === 'Left side')}
                  value={'Left side'}
                  onClick={(e) => {
                    setSeizureStart(e.target.value);
                  }}>
                  {t('Right side')}
                </button>
                <button
                  type="button"
                  className={selectedButtonStyle(seizure_start === 'Right side')}
                  value={'Right side'}
                  onClick={(e) => {
                    setSeizureStart(e.target.value);
                  }}>
                  {t('Right side')}
                </button>
                <button
                  type="button"
                  className={selectedButtonStyle(seizure_start === 'Both sides')}
                  value={'Both sides'}
                  onClick={(e) => {
                    setSeizureStart(e.target.value);
                  }}>
                  {t('Both sides')}
                </button>
                <button
                  type="button"
                  className={selectedButtonStyle(seizure_start === "I don't know")}
                  value={"I don't know"}
                  onClick={(e) => {
                    setSeizureStart(e.target.value);
                  }}>
                  {t("I don't know")}
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

export default PageOne;
