import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ResilienceComponent from './index';
import Form from '../../components/form/Form';
import Question from '../../components/form/Question';
import Pagination from '../../components/pagination';
import { setTreatmentScaleByOthers } from '../../redux/Slices/ResilienceTracking';
import { Slider, TextField} from '@mui/material';

const ResiliencePageTwo = () => {
  const [treatment_scale_by_others, setTreatmentScale] = useState(null);

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setTreatmentScaleByOthers(treatment_scale_by_others));
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

  useEffect(() => {}, []);


  return (
    <ResilienceComponent backroute={'/resilience-form/1'}>
      <Form>
        <form>
          <Question question={'How did others treat you today'}>
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
                onChange={(e, value) => {
                  setTreatmentScale(value);
                }}
              />
            </fieldset>
          </Question>
          {treatment_scale_by_others !== null ? (
            <Pagination
              page_number={2}
              total_number={3}
              page_link={'/resilience-form/3'}
              button={true}
              onClick={handleChange}
            />
          ) : (
            <Pagination page_number={2} total_number={3} page_link={''} button={false} />
          )}
        </form>
      </Form>
    </ResilienceComponent>
  );
};

export default ResiliencePageTwo;
