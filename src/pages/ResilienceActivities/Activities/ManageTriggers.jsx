import React, { useState } from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';
import { useTranslation } from 'react-i18next';



const DATA_PER_PAGE = 4;
const ManageYourTriggers = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const data = [
    {
      id: 1,
      text: t('Missed medications.')
    },
    {
      id: 2,
      text: t('Skipping meals/low blood sugar.')
    },
    {
      id: 3,
      text: t('Hunger')
    },
    {
      id: 4,
      text: t('Particular food items such as - tea, coffee, chocolate, sugar, sweets, soft drinks, excess salt, and spices.')
    },
    {
      id: 5,
      text: t('Dehydration - depletion of bodily fluids.')
    },
    {
      id: 6,
      text: t('Imbalance of substances (electrolytes) that maintain the fluids inside your body, and are essential for muscle and nerve function')
    },
    {
      id: 7,
      text: t('Tiredness and lack of sleep')
    },
    {
      id: 8,
      text: t('Illness or high body temperature.')
    },
    {
      id: 9,
      text: t('Flashing or flickering lights')
    },
    {
      id: 10,
      text: t('Hormonal changes/Menstruation')
    },
    {
      id: 11,
      text: t('Very warm weather, hot baths or showers, especially when there is a sudden change in temperature.')
    },
    {
      id: 12,
      text: t('Stress/anxiety')
    },
    {
      id: 13,
      text: t('Excitement.')
    },
    {
      id: 14,
      text:t('Boredom.')
    },
    {
      id: 15,
      text: t('Alcohol or illicit substance use.')
    }
  ];
  const events = [
    {
      id: 1,
      text: t('Watching TV and playing video games in a well-lit room and at a safe distance from the screen (at least two and a half (2.5) meters from the TV and half (0.5) a meter from a computer monitor).')
    },
    {
      id: 2,
      text: t('Limiting the time spent in front of the TV, computer, and on hand-held devices (smart phones/tablets) or restricting playing computer and video games.')
    },
    {
      id: 3,
      text: t('Using flicker-free monitors (LCD or flat screen).')
    },
    {
      id: 4,
      text: t('Reducing the brightness on screen monitors.')
    },
    {
      id: 5,
      text: t('Using a remote control instead of walking up to the TV to change the channel.')
    },
    {
      id: 6,
      text: t('Adjusting Internet settings to control moving images.')
    }
  ];

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
                <h3>{t('Manage Your Triggers')}</h3>
              </div>
              <div className="header-nav">
                <span id="tab1">
                  <button className="selected">{t('Overall')}</button>
                </span>
              </div>

              <div className="text-page-body">
                <p>
                  {t(`Learning your triggers and avoiding them may take patient, thoughtful reflection
                  to identify and learn ways to avoid or manage them. Some common triggers include`)}:
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
                    {t(`In order to reduce the likelihood of having a seizure due to any of these
                    situations or events; it is important to do all you can to reduce your exposure
                    to these seizure triggers by avoiding these stimuli. Some tips you could use`)}:{' '}
                  </p>
                  <ul>
                    {events.map((event) => (
                      <li key={event.id}>{t(event.text)}</li>
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
