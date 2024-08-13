import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ResilienceComponent from './index';
import Form from '../../components/form/Form';
import Question from '../../components/form/Question';
import Pagination from '../../components/pagination';
import {
  setEngagement,
  setEngagedSocially,
  setUserID
} from '../../redux/Slices/ResilienceTracking';
import CheckBox from '../../components/form/CheckBox';
import { useTranslation } from 'react-i18next';
import { TextField } from '@mui/material';
import useFirebaseScreenTracking from '../../hooks/screenLogger';

const ResiliencePageOne = () => {
  useFirebaseScreenTracking('ResilienceTrackingPage1');
  const { t } = useTranslation();
  const [engaged_socially, setSocialEngagement] = useState(null);
  const [engagement, setEngagedType] = useState([]);
  const [others, setOthers] = useState('');
  const [otherReasons, setOtherReasons] = useState([]);
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')).data.id
    : null;
  dispatch(setUserID(userId));

  const handleChange = () => {
    engaged_socially === 'yes'
      ? dispatch(setEngagedSocially(true))
      : dispatch(setEngagedSocially(false));
    dispatch(setEngagement(engagement));
  };

  const positiveLabels = [
    {
      id: 1,
      name: t('School')
    },
    {
      id: 2,
      name: t('Family')
    },
    {
      id: 3,
      name: t('Friends visit at home')
    },
    {
      id: 4,
      name: t('Outing with my friends')
    },
    {
      id: 5,
      name: t('Others')
    }
  ];

  const negativeLabels = [
    {
      id: 1,
      name: t('No one available to visit with')
    },
    {
      id: 2,
      name: t('Do not feel like socializing')
    },
    {
      id: 3,
      name: t('Very busy with other things')
    },
    {
      id: 4,
      name: t('Others')
    }
  ];

  const selectedButtonStyle = (selected) => {
    return selected
      ? 'button form-button-pill text-uppercase selectedPill'
      : 'button form-button-pill text-uppercase';
  };

  const handleCheckboxChange = (value) => {
    engagement.includes(value)
      ? setEngagedType(engagement.filter((item) => item !== value))
      : setEngagedType((engagement) => [...engagement, value]);
  };

  const handleOtherSubmit = () => {
    if (others && !engagement.includes(others)) {
      setOtherReasons([...otherReasons, others]);
      handleCheckboxChange(others);
      dispatch(setEngagement([...engagement, others].join(',')));
      setOthers('');
    }
  };

  const handleRemoveOtherReason = (reason) => {
    setOtherReasons(otherReasons.filter((item) => item !== reason));
    setEngagedType(engagement.filter((item) => item !== reason));
    dispatch(setEngagement(engagement.filter((item) => item !== reason).join(',')));
  };

  return (
    <ResilienceComponent backroute={'/resilience-form'}>
      <Form>
        <form>
          <Question question={t('Did you engage socially today')}>
            <fieldset className="mt-3 mb-4" style={{ justifyContent: 'space-evenly' }}>
              <button
                type="button"
                className={selectedButtonStyle(engaged_socially === 'yes')}
                value={'yes'}
                onClick={(e) => {
                  setEngagedType([]);
                  setSocialEngagement(e.target.value);
                  setOthers('');
                }}>
                {t('yes')}
              </button>
              <button
                type="button"
                className={selectedButtonStyle(engaged_socially === 'no')}
                value={'no'}
                onClick={(e) => {
                  setEngagedType([]);
                  setSocialEngagement(e.target.value);
                  setOthers('');
                }}>
                {t('no')}
              </button>
            </fieldset>
          </Question>
          {engaged_socially === 'yes' ? (
            <Question question={t('How did you engage today')}>
              <fieldset className="mt-3 mb-4">
                <div className="checkbox-input">
                  <div className="ItemList">
                    {positiveLabels.map((label) => (
                      <CheckBox
                        id={label.id}
                        key={label.id}
                        label={label.name}
                        value={label.name}
                        checked={false}
                        onClick={(e) => {
                          handleCheckboxChange(e.target.value);
                          dispatch(setEngagement(engagement));
                        }}
                      />
                    ))}
                  </div>
                </div>
                {engagement.includes('Others') && (
                  <>
                    <TextField
                      label="How else did you engage?"
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
          {engaged_socially === 'no' ? (
            <Question question={t('Why not')}>
              <fieldset className="mt-3 mb-4">
                <div className="ItemList">
                  {negativeLabels.map((label) => (
                    <CheckBox
                      id={label.id}
                      key={label.id}
                      label={label.name}
                      value={label.name}
                      checked={false}
                      onClick={(e) => {
                        handleCheckboxChange(e.target.value);
                        dispatch(setEngagement(engagement));
                      }}
                    />
                  ))}
                </div>
                {engagement.includes('Others') && (
                  <>
                    <TextField
                      label="Why did you not engage?"
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
        </form>
        {engagement.length !== 0 ? (
          <Pagination
            page_number={1}
            total_number={3}
            page_link={'/resilience-form/2'}
            button={true}
            onClick={handleChange}
          />
        ) : (
          <Pagination page_number={1} total_number={3} page_link={''} button={false} />
        )}
      </Form>
    </ResilienceComponent>
  );
};

export default ResiliencePageOne;
