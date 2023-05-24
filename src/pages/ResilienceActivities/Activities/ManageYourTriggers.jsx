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
    text: 'Dehydration- depletion of bodily fluids.'
  },
  {
    id: 6,
    text: 'Imbalance of substances (electrolytes) that maintain the fluids inside or outside your body and are essential for muscle and nerve function'
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
    text: 'NightclubTheaterLights including Strobe lights (a type of specialized lamp that produces a continuous series of short, bright flashes of light).'
  },
  {
    id: 2,
    text: 'Stimulating images that take up your complete field of vision, such as being very close to a TV screen or computer monitor.'
  },
  {
    id: 3,
    text: 'Flashing lights on police cars, fire trucks, ambulances, and safety alarms.'
  },
  {
    id: 4,
    text: 'Visual effects in movies, TV shows, and video games.'
  },
  {
    id: 5,
    text: 'Malfunctioning fluorescent lights and moving escalators.'
  },
  {
    id: 6,
    text: 'Light viewed through a fast-moving ceiling fan.'
  },
  {
    id: 7,
    text: 'Sunlight viewed through slanted blinds or stair railings.'
  },
  {
    id: 8,
    text: 'Sun shining through tree leaves or reflecting off water.'
  },
  {
    id: 9,
    text: 'Bold, striped wallpaper and fabric or bright contrasting patterns such as white bars against a black background.'
  },
  {
    id: 10,
    text: 'Cameras with multiple flashes or many cameras flashing at the same time.'
  },
  {
    id: 11,
    text: 'Fireworks.'
  }
];

const DATA_PER_PAGE = 10;
const ManageYourTriggers = () => {
  const [selectedTab, setSelectedTab] = useState('overall');
  const onClickTabItem = (tab) => setSelectedTab(tab);

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
          <Form style={{ maxHeight: 'none', height: '680px' }}>
            <div className="text-page">
              <div className="title">
                <h3>Manage Your Triggers</h3>
              </div>
              <div className="header-nav">
                <span id="tab1">
                  <button
                    className={selectedTab === 'overall' ? 'selected' : ''}
                    onClick={() => onClickTabItem('overall')}>
                    Overall
                  </button>
                </span>
              </div>
             {currentPage ? ( <div className="text-page-body">
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
              </div>) : ( <div className="text-page-body">
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
              </div>) }
             
            </div>
          </Form>
        </ResilienceActivitiesPageComponent>
      </div>
    </>
  );
};

export default ManageYourTriggers;
