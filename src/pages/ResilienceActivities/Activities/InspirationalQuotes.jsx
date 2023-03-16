/* eslint-disable no-irregular-whitespace */
import React, { useState } from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';

const data = [
  {
    color: 'red',
    text: 'You are capable of more than you think.'
  },
  {
    color: 'green',
    text: 'The race may be long but you are stronger than you give yourself credit.'
  },
  {
    color: 'blue',
    text: 'Compare yourself to who you were yesterday, not who someone else is today.'
  },
  {
    color: 'orange',
    text: 'So many people are afraid of failure, when what they should be afraid of is regret.'
  },
  {
    color: 'blue',
    text: 'The view is beautiful from the top, but there is beauty in the climb. Dont overlook it.'
  },
  {
    color: '#CAEB0E',
    text: 'Discipline will take you places where motivation cant.'
  },
  {
    color: 'gray',
    text: 'You can, end of story.'
  },
  {
    color: 'pink',
    text: 'Never stop dreaming.'
  },
  {
    color: '#553791',
    text: 'You get tested the most when you are about to reach a new level, dont break.'
  }
];

const QUOTES_PER_PAGE = 5; // adjust as needed

const InspirationalQuotes = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const numPages = Math.ceil(data.length / QUOTES_PER_PAGE);
  const startIndex = (currentPage - 1) * QUOTES_PER_PAGE;
  const endIndex = startIndex + QUOTES_PER_PAGE;

  const quotesToDisplay = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <ResilienceActivitiesPageComponent
      title={'Inspirational Quotes'}
      backroute={'/resilience-activities'}>
      <Form>
        <div>
          <h4>Read to be inspired</h4>
        </div>
        {quotesToDisplay.map(({ text, color }, index) => (
          <div key={startIndex + index}>
            <div key={startIndex + index} style={{ display: 'flex', alignItems: 'flex-start' }}>
              <div
                style={{
                  borderRadius: '100%',
                  backgroundColor: `${color}`,
                  padding: '4px',
                  height: '14px',
                  width: '14px',
                  marginRight: 4,
                  marginLeft: 0
                }}></div>
              <p>{text}</p>
            </div>
          </div>
        ))}
        {numPages > 1 && (
          <div style={{ marginTop: '1rem', display: 'flex' }}>
            {Array.from({ length: numPages }).map((_, index) => (
              <button
                key={index}
                style={{
                  margin: '0.5rem',
                  padding: '0.5rem',
                  backgroundColor: index + 1 === currentPage ? '#553791' : 'white',
                  color: index + 1 === currentPage ? 'white' : 'black',
                  border: 'none',
                  borderRadius: '0.25rem',
                  cursor: 'pointer'
                }}
                onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </Form>
    </ResilienceActivitiesPageComponent>
  );
};

export default InspirationalQuotes;
