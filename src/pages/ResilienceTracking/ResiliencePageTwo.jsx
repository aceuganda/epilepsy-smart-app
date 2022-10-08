import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ResilienceComponent from './index';
import Form from '../../components/form/Form';
import Question from '../../components/form/Question';
import Pagination from '../../components/pagination';
import { setTreatmentScaleByOthers } from '../../redux/Slices/ResilienceTracking';

const ResiliencePageTwo = () => {
  const [treatment_scale_by_others, setTreatmentScale] = useState(null);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setTreatmentScaleByOthers(treatment_scale_by_others));
  };

  useEffect(() => {}, []);

  return (
    <ResilienceComponent backroute={'/resilience-form/1'}>
      <Form>
        <form>
          <Question question={'How did others treat you today?'}>
            <fieldset className="mt-3 mb-4">
              <button
                type="button"
                className="button form-button-pill text-uppercase"
                value={'very well'}
                onClick={(e) => {
                  setTreatmentScale(e.target.value);
                }}>
                very well
              </button>
              <button
                type="button"
                className="button form-button-pill text-uppercase"
                value={'well'}
                onClick={(e) => {
                  setTreatmentScale(e.target.value);
                }}>
                well
              </button>
              <button
                type="button"
                className="button form-button-pill text-uppercase"
                value={'neutral'}
                onClick={(e) => {
                  setTreatmentScale(e.target.value);
                }}>
                neutral
              </button>
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
