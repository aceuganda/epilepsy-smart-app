import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ResilienceComponent from './index';

import Form from '../../components/form/Form';
import Question from '../../components/form/Question';
import Pagination from '../../components/pagination';
import { setEngagement, setEngagedSocially } from '../../redux/Slices/ResilienceTracking';

const ResiliencePageOne = () => {
  const [engaged_socially, setSocialEngagement] = useState(null);
  const [engagement, setEngagedType] = useState(null);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setEngagedSocially(engaged_socially));
    dispatch(setEngagement(engagement));
  };

  useEffect(() => {}, []);

  return (
    <ResilienceComponent backroute={'/home'}>
      <Form>
        <form>
          <Question question={'Did you engage socially today?'}>
            <fieldset className="mt-3 mb-4">
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
          {engaged_socially !== null ? (
            <Question question={'How did you engage today?'}>
              <fieldset className="mt-3 mb-4">
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value="School"
                    onClick={(e) => {
                      setEngagedType(e.target.value);
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    School
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    checked=""
                    id="checked-checkbox"
                    type="checkbox"
                    value="Family"
                    onClick={(e) => {
                      setEngagedType(e.target.value);
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Family
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    checked=""
                    id="checked-checkbox"
                    type="checkbox"
                    value="Friends visit at Home"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Friends visit at Home
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    checked=""
                    id="checked-checkbox"
                    type="checkbox"
                    value="Outing with my Friends"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Outing with my Friends
                  </label>
                </div>
              </fieldset>
            </Question>
          ) : (
            <span></span>
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
