import { Slider, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
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
import useFirebaseScreenTracking from '../../../hooks/screenLogger';


const PageThree = () => {
  useFirebaseScreenTracking('SeizureAssessmentPage3');
  const { t } = useTranslation();
  const originalFeelings = ['sleepy', 'confused', 'body weakness', 'restless', 'headache', 'other'];
  const [selectedFeelings, setSelectedFeelings] = useState([]);
  const [otherReasons, setOtherReasons] = useState([]);
  const [seizureTrigger, setTrigger] = useState('');
  const [otherReasonInput, setOtherReasonInput] = useState('');
  const [upsetRange, setUpsetRange] = useState(0);
  const [endOfAssessment, setEndOfAssessment] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonStatement, setButtonStatement] = useState(t('Finish'));

  const [selectedTriggers, setSelectedTriggers] = useState([].concat(seizureTrigger));

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
      },
      '& .MuiSlider-markLabel': {
        fontSize: 9,
        fontWeight: 600
      }
    }
  };

  const seizureTriggers = [
    { id: 1, name: 'Stress' },
    { id: 2, name: 'Laughter' },
    { id: 3, name: 'Music' },
    { id: 4, name: 'Noise' },
    { id: 5, name: 'Hunger' },
    { id: 6, name: 'Anger' },
    { id: 7, name: 'High Fever' },
    { id: 8, name: 'Missed medication' },
    { id: 9, name: 'Flashing lights' }
  ];

  const handleCheckboxChange = (value) => {
    selectedTriggers.push(value);
    setTrigger(selectedTriggers.join());
  };

  const toggleImpact = (value) => {
    if (originalFeelings.includes(value)) {
      setSelectedFeelings((prevFeelings) => {
        if (prevFeelings.includes(value)) {
          return prevFeelings.filter((feeling) => feeling !== value);
        } else {
          return [...prevFeelings, value];
        }
      });
    } else {
      setOtherReasons((prevReasons) => {
        if (prevReasons.includes(value)) {
          return prevReasons.filter((reason) => reason !== value);
        } else {
          return [...prevReasons, value];
        }
      });
    }
  };
  useEffect(() => {
    const impactsString = [...selectedFeelings, ...otherReasons].join(', ');
    dispatch(setSeizureImpact(impactsString));
  }, [selectedFeelings, otherReasons]);

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
                          dispatch(setSeizureTrigger(seizureTrigger));
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
                <div className="ItemContainer">
                  {originalFeelings.map((feeling) => (
                    <CheckBox
                      key={feeling}
                      label={t(feeling)}
                      value={feeling}
                      onClick={(e) => {
                        toggleImpact(e.target.value);
                      }}
                    />
                  ))}
                  {otherReasons.map((reason, index) => (
                    <button
                      key={index}
                      type="button"
                      className={selectedButtonStyle(true)}
                      value={reason}
                      onClick={(e) => toggleImpact(e.target.value)}>
                      {t(reason.charAt(0).toUpperCase() + reason.slice(1))}
                    </button>
                  ))}
                </div>
                {selectedFeelings.includes('other') && (
                  <fieldset className="mt-2 mb-4">
                    <TextField
                      label="Type reason here"
                      variant="outlined"
                      value={otherReasonInput}
                      onChange={(e) => setOtherReasonInput(e.target.value)}
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
                      type="button"
                      className="button form-button-pill"
                      onClick={() => {
                        if (otherReasonInput) {
                          setOtherReasons((prevReasons) => [...prevReasons, otherReasonInput]);
                          setOtherReasonInput('');
                        }
                      }}>
                      {t('Done')}
                    </button>
                  </fieldset>
                )}
              </fieldset>
            </Question>
            <Question question={t('Did it upset you')}>
              <fieldset
                style={{ gap: '30px', marginTop: '35px', width: '93%', marginLeft: '10px' }}>
                <Slider
                  aria-label="Default"
                  defaultValue={0}
                  step={1}
                  min={0}
                  max={10}
                  marks={[
                    {
                      value: 0,
                      label: t('Not at all')
                    },
                    {
                      value: 10,
                      label: t('Very much')
                    }
                  ]}
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
            <button
              className="finish-btn"
              type="submit"
              disabled={loading}
              style={{ bottom: '10px' }}
              onClick={handleSubmit}>
              {loading ? <Spinner /> : buttonStatement}
            </button>
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
