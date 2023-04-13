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

const ResiliencePageOne = () => {
  const [engaged_socially, setSocialEngagement] = useState(null);
  const [engagement, setEngagedType] = useState([]);
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
      name: 'School'
    },
    {
      id: 2,
      name: 'Family'
    },
    {
      id: 3,
      name: 'Friends visit at home'
    },
    {
      id: 4,
      name: 'Outing with my friends'
    },
    {
      id: 5,
      name: 'Other'
    }
  ];

  const negativeLabels = [
    {
      id: 1,
      name: 'Bad Company'
    },
    {
      id: 2,
      name: 'Isolation'
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

  return (
    <ResilienceComponent backroute={'/resilience-form'}>
      <Form>
        <form>
          <Question question={'Did you engage socially today'}>
            <fieldset className="mt-3 mb-4" style={{ justifyContent: 'space-evenly' }}>
              <button
                type="button"
                className={selectedButtonStyle(engaged_socially === 'yes')}
                value={'yes'}
                onClick={(e) => {
                  setEngagedType([]);
                  setSocialEngagement(e.target.value);
                }}>
                yes
              </button>
              <button
                type="button"
                className={selectedButtonStyle(engaged_socially === 'no')}
                value={'no'}
                onClick={(e) => {
                  setEngagedType([]);
                  setSocialEngagement(e.target.value);
                }}>
                no
              </button>
            </fieldset>
          </Question>
          {engaged_socially === 'yes' ? (
            <Question question={'How did you engage today'}>
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
              </fieldset>
            </Question>
          ) : (
            <span />
          )}
          {engaged_socially === 'no' ? (
            <Question question={'Why not'}>
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
              </fieldset>
            </Question>
          ) : (
            <span />
          )}
        </form>
        {engagement !== [] ? (
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
