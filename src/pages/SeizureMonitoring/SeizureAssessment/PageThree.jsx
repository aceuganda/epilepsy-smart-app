import { Slider, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SeizureComponent from '..';
import Form from '../../../components/form/Form';
import Question from '../../../components/form/Question';
import { postSeizureFormData, setSeizureImpact } from '../../../redux/Slices/SeizureTrackingSlice';

const PageThree = () => {
  const [seizure_impact, setFeel] = useState(null);
  const [other_reason, setOtherReason] = useState(null);
  const dispatch = useDispatch();
  const seizureTrackingData = useSelector((state) => state.seizureTracking);

  const handleClick = () => {
    dispatch(setSeizureImpact(seizure_impact));
    handleSubmit();
  };

  const handleSubmit = async (e) => {
    //e.preventDefault();
    console.log(seizureTrackingData);  //Server currently returns bad request(missing some fields)
    try {
      await dispatch(postSeizureFormData(seizureTrackingData));
    } catch (err) {
      console.log('Failed to post:', err);
    }
  };

  const handleOtherReasonSubmit = (event) => {
    event.preventDefault();
    setOtherReason('');
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

  return (
    <SeizureComponent backroute={'/seizure-form/assessment/2'}>
      <Form>
        <form onSubmit={handleSubmit}>
          <Question question={'How did you feel after the seizure'}>
            <fieldset className="mt-3 mb-4">
              <button
                type="button"
                className="button form-button-pill text-capitalize"
                value={'sleepy'}
                onClick={(e) => {
                  setFeel(e.target.value);
                }}>
                Sleepy
              </button>
              <button
                type="button"
                className="button form-button-pill text-capitalize"
                value={'confused'}
                onClick={(e) => {
                  setFeel(e.target.value);
                }}>
                Confused
              </button>
              <button
                type="button"
                className="button form-button-lg text-capitalize"
                value={'body weakness'}
                onClick={(e) => {
                  setFeel(e.target.value);
                }}>
                Body Weakness
              </button>
              <button
                type="button"
                className="button form-button-pill text-capitalize"
                value={'restless'}
                onClick={(e) => {
                  setFeel(e.target.value);
                }}>
                Restless
              </button>
              <button
                type="button"
                className="button form-button-pill text-capitalize"
                value={'headache'}
                onClick={(e) => {
                  setFeel(e.target.value);
                }}>
                Headache
              </button>
              <button
                type="button"
                className="button form-button-pill text-capitalize"
                value={'other'}
                onClick={(e) => {
                  setFeel(e.target.value);
                }}>
                Other
              </button>
              {seizure_impact === 'other' ? (
                <fieldset className="mt-2 mb-4">
                  <TextField
                    label="Type reason here"
                    variant="outlined"
                    onChange={(e) => setOtherReason(e.target.value)}
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
                    onClick={(e) => handleOtherReasonSubmit(e)}>
                    Done
                  </button>
                </fieldset>
              ) : (
                <span></span>
              )}
            </fieldset>
          </Question>
          <Question question={'Did it upset you'}>
            <fieldset style={{ marginTop: '35px', width: '93%', marginLeft: '10px' }}>
              <Slider
                aria-label="Default"
                defaultValue={0}
                step={1}
                min={0}
                max={7}
                valueLabelDisplay="auto"
                sx={styles.slider}
                style={styles.slider}
              />
            </fieldset>
          </Question>
          {seizure_impact !== null ? (
            <Link to="/home">
              <button className="finish-btn" type="submit" onClick={handleClick}>
                Finish
              </button>
            </Link>
          ) : (
            <span></span>
          )}
        </form>
      </Form>
    </SeizureComponent>
  );
};

export default PageThree;
