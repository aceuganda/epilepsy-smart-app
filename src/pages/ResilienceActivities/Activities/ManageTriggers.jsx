import React, { useState } from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';

const data = [
  {
    id: 1,
    text: 'Missed medications.'
  },
  {
    id: 2,
    text: 'Skipping meals/low blood sugar.'
  },
  {
    id: 3,
    text: 'Hunger'
  },
  {
    id: 4,
    text: 'Particular food items such as - tea, coffee, chocolate, sugar, sweets, soft drinks, excess salt, and spices.'
  },
  {
    id: 5,
    text: 'Dehydration - depletion of bodily fluids.'
  },
  {
    id: 6,
    text: 'Imbalance of substances (electrolytes) that maintain the fluids inside your body, and are essential for muscle and nerve function'
  },
  {
    id: 7,
    text: 'Tiredness and lack of sleep'
  },
  {
    id: 8,
    text: 'Illness or high body temperature.'
  },
  {
    id: 9,
    text: 'Flashing or flickering lights'
  },
  {
    id: 10,
    text: 'Hormonal changes/Menstruation'
  },
  {
    id: 11,
    text: 'Very warm weather, hot baths or showers, especially when there is a sudden change in temperature.'
  },
  {
    id: 12,
    text: 'Stress/anxiety'
  },
  {
    id: 13,
    text: 'Excitement.'
  },
  {
    id: 14,
    text: 'Boredom.'
  },
  {
    id: 15,
    text: 'Alcohol or illicit substance use.'
  }
];
const events = [
  {
    id: 1,
    text: 'Watching TV and playing video games in a well-lit room and at a safe distance from the screen (at least two and a half (2.5) meters from the TV and half (0.5) a meter from a computer monitor).'
  },
  {
    id: 2,
    text: 'Limiting the time spent in front of the TV, computer, and on hand-held devices (smart phones/tablets) or restricting playing computer and video games.'
  },
  {
    id: 3,
    text: 'Using flicker-free monitors (LCD or flat screen).'
  },
  {
    id: 4,
    text: 'Reducing the brightness on screen monitors.'
  },
  {
    id: 5,
    text: 'Using a remote control instead of walking up to the TV to change the channel.'
  },
  {
    id: 6,
    text: 'Adjusting Internet settings to control moving images.'
  }
];

const DATA_PER_PAGE = 4;
const ManageYourTriggers = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const numPages = Math.ceil(data.length / DATA_PER_PAGE);
  const startIndex = (currentPage - 1) * DATA_PER_PAGE;
  const endIndex = startIndex + DATA_PER_PAGE;

  const dataToDisplay = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div>
        <ResilienceActivitiesPageComponent backroute={'/resilience-activities'}>
          <Form style={{ maxHeight: 'none', height: '960px' }}>
            <div className="text-page">
              <div className="title">
                <h3>Manage Your Triggers</h3>
              </div>
              <div className="header-nav">
                <span id="tab1">
                  <button className="selected">Overall</button>
                </span>
              </div>

              <div className="text-page-body">
                <p>
                  Learning your triggers and avoiding them may take patient, thoughtful reflection
                  to identify and learn ways to avoid or manage them. Some common triggers include:
                </p>
                <ul>
                  {dataToDisplay.map((data) => (
                    <li key={data.id}>{data.text}</li>
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
                </ul>
                <div>
                  <p>
                    In order to reduce the likelihood of having a seizure due to any of these
                    situations or events; it is important to do all you can to reduce your exposure
                    to these seizure triggers by avoiding these stimuli. Some tips you could use:{' '}
                  </p>
                  <ul>
                    {events.map((event) => (
                      <li key={event.id}>{event.text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Form>
        </ResilienceActivitiesPageComponent>
      </div>
    </>
  );
};

export default ManageYourTriggers;
