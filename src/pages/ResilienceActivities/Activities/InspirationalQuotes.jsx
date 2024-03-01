/* eslint-disable no-irregular-whitespace */
import React, { useState } from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';
import quotes from '../../../resources/inspiration_quotes.json';
import { useTranslation } from 'react-i18next';

const QUOTES_PER_PAGE = 9; // adjust as needed

const InspirationalQuotes = () => {
  const { t } = useTranslation();
  const colors = ['#CAEB0E', '#17804B', '#F42C56', '#8C3E79', '#8a2be2', 'pink', '#553791'];

  const [currentPage, setCurrentPage] = useState(1);
  const appendedQuotes = quotes.map((object, index) => {
    const colorIndex = index % colors.length;
    return { ...object, color: colors[colorIndex] };
  });

  const numPages = Math.ceil(appendedQuotes.length / QUOTES_PER_PAGE);
  const startIndex = (currentPage - 1) * QUOTES_PER_PAGE;
  const endIndex = startIndex + QUOTES_PER_PAGE;

  const quotesToDisplay = appendedQuotes.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <ResilienceActivitiesPageComponent backroute={'/resilience-activities'}>
      <Form style={{ maxHeight: 'none', height: '730px' }}>
        <div className="text-page">
          <div className="title">
            <h3>{t('Quotes to inspire you')}</h3>
          </div>
          {quotesToDisplay.map((quote, index) => (
            <div key={startIndex + index} className="quotes-body">
              <div key={startIndex + index} className="quotes">
                <div
                  key={index}
                  className="circle"
                  style={{ backgroundColor: `${quote.color}` }}></div>
                <p className="text">{t(quote.title)}</p>
              </div>
            </div>
          ))}
          {numPages > 1 && (
            <div className="pagination">
              {Array.from({ length: numPages }).map((_, index) => (
                <button
                  key={index}
                  className={index + 1 === currentPage ? 'selected' : ''}
                  onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </Form>
    </ResilienceActivitiesPageComponent>
  );
};

export default InspirationalQuotes;
