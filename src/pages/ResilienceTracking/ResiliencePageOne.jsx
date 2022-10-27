import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ResilienceComponent from './index';

import Form from '../../components/form/Form';
import Question from '../../components/form/Question';
import Pagination from '../../components/pagination';
import {
  setEngagement,
  setEngagedSocially,
  setResilienceUserID
} from '../../redux/Slices/ResilienceTracking';
import CheckBox from '../../components/form/CheckBox';



const ResiliencePageOne = () => {
  const [engaged_socially, setSocialEngagement] = useState(null);
  const [engagement, setEngagedType] = useState(null);
  const dispatch = useDispatch();

  const userId = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo')).data.id
  : null;

  const handleChange = () => {
    engaged_socially === 'yes'
      ? dispatch(setEngagedSocially(true))
      : dispatch(setEngagedSocially(false));
    dispatch(setEngagement(engagement));
    dispatch(setResilienceUserID(userId));
  };

  useEffect(() => {}, []);

  return (
    <ResilienceComponent backroute={'/home'}>
      <Form>
        <form>
          <Question question={'Did you engage socially today'}>
            <fieldset className="mt-3 mb-4" style={{ justifyContent: 'space-evenly' }}>
              <button
                type="button"
                className="button form-button-pill text-uppercase"
                value={'yes'}
                onClick={(e) => {
                  setSocialEngagement(e.target.value);
                }}>
                yes
              </button>
              <button
                type="button"
                className="button form-button-pill text-uppercase"
                value={'no'}
                onClick={(e) => {
                  setSocialEngagement(e.target.value);
                }}>
                no
              </button>
            </fieldset>
          </Question>
          {engaged_socially === 'yes' ? (
            <Question question={'How did you engage today'}>
              <fieldset className="mt-3 mb-4">
                <div className="flex mb-4">
                  {/* <input
                    id="default-checkbox"
                    type="checkbox"
                    value={'school'}
                    onChange={(e) => {
                      setEngagedType([e.target.value]);
                    }}
                  />
                  <label htmlFor="default-checkbox">School</label> */}

                  <CheckBox label="School"   id="default-checkbox" onChange={(e) => {
                      setEngagedType([e.target.value]);
                    }} /> 
                </div>
                <div className="flex">
                  {/* <input
                    id="checked-checkbox"
                    type="checkbox"
                    value={'family'}
                    onChange={(e) => {
                      setEngagedType([e.target.value]);
                    }}
                  />
                  <label htmlFor="checked-checkbox">Family</label> */}
                  <CheckBox label ="Family"  id="checked-checkbox" onChange={(e) => {
                      setEngagedType([e.target.value]);
                    }}/>
                </div>
              </fieldset>
            </Question>
          ) : (
            <span />
          )}
          {engaged_socially === 'no' ? (
            <Question question={'Why not'}>
              <fieldset className="mt-3 mb-4">
                <div className="flex">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value={'bad company'}
                    onChange={(e) => {
                      setEngagedType([e.target.value]);
                    }}
                  />
                  <label htmlFor="checked-checkbox">Bad Company</label>
                </div>
                <div className="flex">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value={'isolated'}
                    onChange={(e) => {
                      setEngagedType([e.target.value]);
                    }}
                  />
                  <label htmlFor="checked-checkbox">Isolated</label>
                </div>
              </fieldset>
            </Question>
          ) : (
            <span />
          )}
        </form>
        {engagement !== null ? (
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
