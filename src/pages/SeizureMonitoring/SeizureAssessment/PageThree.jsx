import { Slider, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SeizureComponent from '..';
import EndOfAssessmentModal from '../../../components/form/EndOfAssessment';
import Form from '../../../components/form/Form';
import Question from '../../../components/form/Question';
import {
  postSeizureFormData,
  setSeizureImpact,
  setSeizureTrigger,
  setSeizureUpsetRange
} from '../../../redux/Slices/SeizureTrackingSlice';
import { ReactComponent as CheckedIcon } from '../../../assets/svg/Form/EndOfAssessment/CheckedIcon.svg';
import CheckBox from '../../../components/form/CheckBox';
import Spinner from '../../../components/Spinner/Spinner';
import { useTranslation } from 'react-i18next';

const PageThree = () => {
  const { t } = useTranslation();
  const [seizure_impact, setFeel] = useState('');
  const [seizure_trigger, setTrigger] = useState('');
  const [other_reason, setOtherReason] = useState('');
  const [upsetRange, setUpsetRange] = useState(0);
  const [endOfAssessment, setEndOfAssessment] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonStatement, setButtonStatement] = useState(t('Finish'));

  const [selectedTriggers, setSelectedTriggers] = useState([].concat(seizure_trigger));

  const dispatch = useDispatch();
  const seizureTrackingData = useSelector((state) => state.seizureTracking);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(postSeizureFormData(seizureTrackingData));
      setLoading(false);
      setEndOfAssessment(true);
    } catch (err) {
      setLoading(false);
      setButtonStatement('Try Again');
    }
  };

  const styles = {
    slider: {
      color: '#E4E4E4',
      height: 10,
      '& .MuiSlider-track': {
        border: 'none'
      },
      '& .MuiSlider-thumb': {
        height: 30,
        width: 30,
        backgroundColor: '#8C3E79',
        border: '6px solid #fff',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
          boxShadow: 'inherit'
        },
        '&:before': {
          display: 'none'
        }
      },
      '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 14,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        color: '#8C3E79',
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#fff',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        boxShadow: '0.5px 1px 1px 0.8px #e4e4e4',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
          transform: 'translate(50%, -100%) rotate(-45deg) scale(1)'
        },
        '& > *': {
          transform: 'rotate(45deg)'
        }
      }
    }
  };

  const seizureTriggers = [
    {
      id: 1,
      name: 'Stress'
    },
    {
      id: 2,
      name: 'Laughter'
    },
    {
      id: 3,
      name: 'Music'
    },
    {
      id: 4,
      name: 'Noise'
    },
    {
      id: 5,
      name: 'Hunger'
    },
    {
      id: 6,
      name: 'Anger'
    },
    {
      id: 7,
      name: 'High Fever'
    },
    {
      id: 8,
      name: 'Missed medication'
    },
    {
      id: 9,
      name: 'Flashing lights'
    }
  ];

  const handleCheckboxChange = (value) => {
    selectedTriggers.push(value);
    setTrigger(selectedTriggers.join());
  };

  const selectedButtonStyle = (selected) => {
    return selected
      ? 'button form-button-pill text-uppercase selectedPill'
      : 'button form-button-pill text-uppercase';
  };

  return (
    <>
      <SeizureComponent backroute={'/seizure-form/assessment/2'}>
        <Form style={{ height: '680px', maxHeight: 'none' }}>
          <form onSubmit={handleSubmit}>
            {seizureTrackingData.was_seizure_triggered === true ? (
              <Question question={'What trigger was it'}>
                <fieldset className="mt-3 mb-4">
                  <div className="ItemContainer">
                    {seizureTriggers.map((trigger) => (
                      <CheckBox
                        key={trigger.id}
                        label={t(trigger.name)}
                        value={trigger.name}
                        checked={false}
                        onClick={(e) => {
                          handleCheckboxChange(e.target.value);
                          dispatch(setSeizureTrigger(seizure_trigger));
                        }}
                      />
                    ))}
                  </div>
                </fieldset>
              </Question>
            ) : (
              <span />
            )}
            <Question question={'How did you feel after the seizure'}>
              <fieldset className="mt-3 mb-4">
                <button
                  type="button"
                  className={selectedButtonStyle(seizure_impact === 'sleepy')}
                  value={'sleepy'}
                  onClick={(e) => {
                    setFeel(e.target.value);
                    dispatch(setSeizureImpact(e.target.value));
                  }}>
                  {t('Sleepy')}
                </button>
                <button
                  type="button"
                  className={selectedButtonStyle(seizure_impact === 'confused')}
                  value={'confused'}
                  onClick={(e) => {
                    setFeel(e.target.value);
                    dispatch(setSeizureImpact(e.target.value));
                  }}>
                  {t('Confused')}
                </button>
                <button
                  type="button"
                  className={
                    seizure_impact === 'confused'
                      ? 'button form-button-lg selectedPill'
                      : 'button form-button-lg'
                  }
                  value={'body weakness'}
                  onClick={(e) => {
                    setFeel(e.target.value);
                    dispatch(setSeizureImpact(e.target.value));
                  }}>
                  {t('Body Weakness')}
                </button>
                <button
                  type="button"
                  className={selectedButtonStyle(seizure_impact === 'restless')}
                  value={'restless'}
                  onClick={(e) => {
                    setFeel(e.target.value);
                    dispatch(setSeizureImpact(e.target.value));
                  }}>
                  {t('Restless')}
                </button>
                <button
                  type="button"
                  className={selectedButtonStyle(seizure_impact === 'headache')}
                  value={'headache'}
                  onClick={(e) => {
                    setFeel(e.target.value);
                    dispatch(setSeizureImpact(e.target.value));
                  }}>
                  {t('Headache')}
                </button>
                <button
                  type="button"
                  className={selectedButtonStyle(seizure_impact === 'other')}
                  value={'other'}
                  onClick={(e) => {
                    setFeel(e.target.value);
                    dispatch(setSeizureImpact(e.target.value));
                  }}>
                  {t('Other')}
                </button>
                {seizure_impact === 'other' ? (
                  <fieldset className="mt-2 mb-4">
                    <TextField
                      label="Type reason here"
                      variant="outlined"
                      value={other_reason}
                      onChange={(e) => {
                        setOtherReason(e.target.value);
                      }}
                      multiline={true}
                      sx={{ width: '90%' }}
                    />
                    <button
                      style={{
                        position: 'absolute',
                        right: '16px',
                        marginTop: '70px',
                        borderRadius: '8px',
                        background: '#8C3E79',
                        color: '#fff',
                        boxShadow: '0.8px 2px 2px 0.8px #e4e4e4'
                      }}
                      type="submit"
                      className="button form-button-pill"
                      onClick={() => {
                        setFeel(other_reason);
                        dispatch(setSeizureImpact(other_reason));
                        setOtherReason('');
                      }}>
                      {t('Done')}
                    </button>
                  </fieldset>
                ) : (
                  <span></span>
                )}
              </fieldset>
            </Question>
            <Question question={t('Did it upset you')}>
              <fieldset style={{ marginTop: '10px', width: '93%', marginLeft: '10px' }}>
                <Slider
                  aria-label="Default"
                  defaultValue={0}
                  step={1}
                  min={0}
                  max={7}
                  valueLabelDisplay="auto"
                  sx={styles.slider}
                  style={styles.slider}
                  onChange={(e) => {
                    setUpsetRange(parseInt(e.target.value));
                    dispatch(setSeizureUpsetRange(upsetRange));
                  }}
                />
              </fieldset>
            </Question>
            {seizure_impact !== null ? (
              <button
                className="finish-btn"
                type="submit"
                disabled={loading}
                style={{ bottom: '10px' }}
                onClick={handleSubmit}>
                {loading ? <Spinner /> : buttonStatement}
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
      </SeizureComponent>
    </>
  );
};

export default PageThree;
