import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ResilienceComponent from './index';
import Form from '../../components/form/Form';
import Question from '../../components/form/Question';
import Pagination from '../../components/pagination';
import { setTreatmentScaleByOthers } from '../../redux/Slices/ResilienceTracking';
import { Slider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { WrapText } from '@mui/icons-material';
import useFirebaseScreenTracking from '../../hooks/screenLogger';

const ResiliencePageTwo = () => {
  useFirebaseScreenTracking('ResilienceTrackingPage2');
  const [treatment_scale_one, setTreatmentScaleOne] = useState(0);
  const [treatment_scale_two, setTreatmentScaleTwo] = useState(0);
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setTreatmentScaleByOthers((treatment_scale_one + treatment_scale_two) / 2));
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
        fontSize: '9px',
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
      },'& .MuiSlider-markLabel':{
        fontSize: 10,
        marginLeft: '10px',
        left: '40px',
        maxWidth: '70px',
        textWrap: 'wrap'
      }
    }
  };

  const marksOne = [
    {
      value: 0,
      label: t('Respectfully')
    },
    {
      value: 100,
      label: t('Rudely')
    }
  ];

  const marksTwo = [
    {
      value: 0,
      label: t('With Care')
    },
    {
      value: 100,
      label: t('Harshly')
    }
  ];

  return (
    <ResilienceComponent backroute={'/resilience-form/1'}>
      <Form>
        <form>
          <Question question={t('How did others treat you today')}>
            <fieldset style={{ gap: '30px', marginTop: '35px', width: '93%', marginLeft: '10px' }}>
              <Slider
                aria-label="Default"
                defaultValue={0}
                marks={marksOne}
                step={1}
                min={0}
                max={100}
                valueLabelDisplay="auto"
                sx={styles.slider}
                style={styles.slider}
                onChange={(e, value) => {
                  setTreatmentScaleOne(value);
                }}
              />
              <Slider
                aria-label="Default"
                defaultValue={0}
                marks={marksTwo}
                step={1}
                min={0}
                max={100}
                valueLabelDisplay="auto"
                sx={styles.slider}
                style={styles.slider}
                onChange={(e, value) => {
                  setTreatmentScaleTwo(value);
                }}
              />
            </fieldset>
          </Question>
          <Pagination
            page_number={2}
            total_number={3}
            page_link={'/resilience-form/3'}
            button={true}
            onClick={handleChange}
          />
        </form>
      </Form>
    </ResilienceComponent>
  );
};

export default ResiliencePageTwo;
